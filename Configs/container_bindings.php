<?php

use App\Config;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Slim\Views\Twig;
use Twig\Extra\Intl\IntlExtension;

return function (DI\Container $container): void {

    $container->set(Config::class, fn() => new Config());

    $container->set(EntityManager::class, function (Config $config) {

        $connection = DriverManager::getConnection($config->db);

        return new EntityManager(
            $connection,
            ORMSetup::createAttributeMetadataConfiguration(
                [__DIR__ . '/../src/Entity'],
                true
            )
        );
    });

    $container->set(Twig::class, function (Config $config) {

        $twig = Twig::create(VIEW_PATH, [
            'cache'       => STORAGE_PATH . '/cache',
            'auto_reload' =>  $config->environment === 'development',
        ]);

        $twig->addExtension(new IntlExtension());

        return $twig;
    });
};