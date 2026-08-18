<?php

declare(strict_types=1);

use App\Auth;
use App\Cache\RedisCache;
use App\Config;
use App\Contracts\AuthInterface;
use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\RequestValidatorFactoryInterface;
use App\Contracts\SessionInterface;
use App\Contracts\UserProviderServiceInterface;
use App\DataObjects\SessionConfig;
use App\Enums\AppEnvironment;
use App\Enums\SameSite;
use App\Enums\StorageDriver;
use App\Filters\UserFilter;
use App\RequestValidator\RequestValidatorFactory;
use App\RouteEntityBindingStrategy;
use App\Services\EntityManagerService;
use App\Services\UserProviderService;
use App\Session;
use DI\create;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\ORMSetup;
use League\Flysystem\Filesystem;
use Predis\Client;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\SimpleCache\CacheInterface;
use Slim\App;
use Slim\Csrf\Guard;
use Slim\Factory\AppFactory;
use Slim\Interfaces\RouteParserInterface;
use Slim\Views\Twig;
use Symfony\Bridge\Twig\Extension\AssetExtension;
use Symfony\Bridge\Twig\Mime\BodyRenderer;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Asset\VersionStrategy\JsonManifestVersionStrategy;
use Symfony\Component\DependencyInjection\ServiceLocator;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\BodyRendererInterface;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookup;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupCollection;
use Symfony\WebpackEncoreBundle\Asset\TagRenderer;
use Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension;
use Twig\Extra\Intl\IntlExtension;
use function DI\create;
use App\Cache\RedisRateLimiterStorage;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use ThomasVantuycom\FlysystemCloudinary\CloudinaryAdapter;
use Cloudinary\Cloudinary;
use DoctrineExtensions\Query\Mysql\DateFormat;
use DoctrineExtensions\Query\Mysql\Month;
use DoctrineExtensions\Query\Mysql\Year;


return [

    App::class => function (ContainerInterface $container) {

        AppFactory::setContainer($container);

        $addMiddlewares = require CONFIG_PATH . '/middleware.php';
        $router         = require CONFIG_PATH . '/routes/web.php';

        $app = AppFactory::create();

        $app->getRouteCollector()->setDefaultInvocationStrategy(
            new RouteEntityBindingStrategy(
                $container->get(EntityManagerServiceInterface::class),
                $app->getResponseFactory()
            )
        );

        $router($app);

        $addMiddlewares($app);

        return $app;
    },
    Config::class => create(Config::class)->constructor(
        require CONFIG_PATH . '/app.php'
    ),

    EntityManagerInterface::class => function (Config $config) {

        $connection = DriverManager::getConnection(
            $config->get('doctrine.connection')
        );
        $ormConfig = ORMSetup::createAttributeMetadataConfiguration(
            $config->get('doctrine.entity_dir'),
            $config->get('doctrine.dev_mode')
        );
        $ormConfig->setProxyDir($config->get('doctrine.proxy_dir'));

        $ormConfig->setAutoGenerateProxyClasses(true);
       // $ormConfig->setAutoGenerateProxyClasses(
          //  $config->get('doctrine.dev_mode')
        //);
        // Register the filter
        $ormConfig->addFilter('user', UserFilter::class);

        if (class_exists('DoctrineExtensions\Query\Mysql\Year')) {
            $ormConfig->addCustomDatetimeFunction('YEAR', Year::class);
        }

        if (class_exists('DoctrineExtensions\Query\Mysql\Month')) {
            $ormConfig->addCustomDatetimeFunction('MONTH', Month::class);
        }

        if (class_exists('DoctrineExtensions\Query\Mysql\DateFormat')) {
            $ormConfig->addCustomStringFunction('DATE_FORMAT', DateFormat::class);
        }

        return new EntityManager(
            $connection,
            $ormConfig
        );
    },

    Twig::class => function (
        Config $config,
        ContainerInterface $container
    ) {

        $twig = Twig::create(VIEW_PATH, [
            'cache'       => STORAGE_PATH . '/cache/templates',
            'auto_reload' => AppEnvironment::isDevelopment(
                $config->get('app_environment')
            ),
        ]);

        $twig->addExtension(new IntlExtension());
        $twig->addExtension(new EntryFilesTwigExtension($container));
        $twig->addExtension(new AssetExtension($container->get('webpack_encore.packages')));
        return $twig;
    },

    ResponseFactoryInterface::class => fn(App $app) => $app->getResponseFactory(),
    AuthInterface::class                => fn(ContainerInterface $container) => $container->get(Auth::class),
    UserProviderServiceInterface::class => fn(ContainerInterface $container) => $container->get(
        UserProviderService::class),

    SessionInterface::class             => fn(Config $config) => new Session(
        new SessionConfig(
            $config->get('session.name', ''),
            $config->get('session.flash_name', 'flash'),
            $config->get('session.secure', true),
            $config->get('session.httponly', true),
            SameSite::from($config->get('session.samesite', 'lax'))
        )
    ),
    RequestValidatorFactoryInterface::class => fn(ContainerInterface $container) => $container->get(
        RequestValidatorFactory::class
    ),

    'csrf'              => function (
                      ResponseFactoryInterface $responseFactory,
                      ContainerInterface $container
                      ) {
                     $guard = new Guard($responseFactory, persistentTokenMode: true);
                     $guard->setFailureHandler($container->get(\App\Handlers\CsrfFailureHandler::class));
                     return $guard;
                      },

    Filesystem::class => function(Config $config) {
        $cloudinary = function (array $options) {
            $client = new Cloudinary([
                'cloud' => [
                    'cloud_name' =>$options['cloud_name'],
                    'api_key'    => $options['api_key'],
                    'api_secret' => $options['api_secret'],
                ],
                'url' => [
                    'secure' => $options['secure'] ?? true,
                ]
            ]);
            return new CloudinaryAdapter($client, null, false, 'expense-pilot');
        };
        $adapter = match($config->get('storage.driver')) {
            StorageDriver::Local => new League\Flysystem\Local\LocalFilesystemAdapter(STORAGE_PATH),
            StorageDriver::Cloudinary => $cloudinary($config->get('storage.cloudinary')),
        };

        return new League\Flysystem\Filesystem($adapter);
    },


    EntityManagerServiceInterface::class    => fn(EntityManagerInterface $entityManager) => new EntityManagerService(
        $entityManager
    ),
    MailerInterface::class => function(Config $config) {

        if ($config->get('mailer.driver') === 'log') {
            return new \App\Mailer();
        }
        $transport = Transport::fromDsn($config->get('mailer.dsn'));

        return new Mailer($transport);
    },
    BodyRendererInterface::class => fn(Twig $twig) => new BodyRenderer($twig->getEnvironment()),
    RouteParserInterface::class             => fn(App $app) => $app->getRouteCollector()->getRouteParser(),

    Client::class => function (Config $config) {
        return new Client([
            'scheme' => $config->get('redis.scheme') ?? 'tcp',
            'host'   => $config->get('redis.host') ?? 'redis',
            'port'   => (int) ($config->get('redis.port')?? 6379),
            'password' => $config->get('redis.password') ?? 'mypassword',
        ]);
    },
    CacheInterface::class => function (Client $redis) {
        return new RedisCache($redis);
    },
    RateLimiterFactory::class => fn(
        RedisRateLimiterStorage $storage,
        Config $config
    ) => new RateLimiterFactory(
        $config->get('limiter'),
        $storage
    ),

    /**
     * The following two bindings are needed for EntryFilesTwigExtension & AssetExtension to work for Twig
     */
    'webpack_encore.packages'     => fn() => new Packages(
        new Package(new JsonManifestVersionStrategy(BUILD_PATH . '/manifest.json'))
    ),
    'webpack_encore.entrypoint_lookup_collection' => fn() => new EntrypointLookupCollection(
        new ServiceLocator([
            '_default' => fn() => new EntrypointLookup(BUILD_PATH . '/entrypoints.json'),
        ])
    ),
    'webpack_encore.tag_renderer' => fn(ContainerInterface $container) => new TagRenderer(
        $container->get('webpack_encore.entrypoint_lookup_collection'),
        $container->get('webpack_encore.packages')
    ),

];