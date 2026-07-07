<?php

declare(strict_types=1);

use App\Config;
use App\Enums\AppEnvironment;
use DI\create;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Psr\Container\ContainerInterface;
use Slim\App;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Twig\Extra\Intl\IntlExtension;
use function DI\create;

return [

    App::class => function (ContainerInterface $container) {

        AppFactory::setContainer($container);

        $addMiddlewares = require CONFIG_PATH . '/middleware.php';
        $router         = require CONFIG_PATH . '/routes/web.php';

        $app = AppFactory::create();

        $router($app);

        $addMiddlewares($app);

        return $app;
    },
    Config::class => create(Config::class)->constructor(
        require CONFIG_PATH . '/app.php'
    ),

    EntityManager::class => function (Config $config) {

        $connection = DriverManager::getConnection(
            $config->get('doctrine.connection')
        );

        return new EntityManager(
            $connection,
            ORMSetup::createAttributeMetadataConfiguration(
                $config->get('doctrine.entity_dir'),
                $config->get('doctrine.dev_mode')
            )
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
        return $twig;
    },

];