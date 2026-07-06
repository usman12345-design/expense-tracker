<?php
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;
use Slim\Factory\AppFactory;

$container= require  __DIR__ .'/../bootstrap.php';
//$container = $app->getContainer();
AppFactory::setContainer($container);
$app =AppFactory::create();
$router = require CONFIG_PATH.'/routes.php';
$router($app);
// Add Twig-View Middleware
$app->add(
    TwigMiddleware::create($app, $container->get(Twig::class))
);
$app->run();
