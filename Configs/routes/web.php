<?php
declare(strict_types=1);
use Slim\App;
use App\Controllers\HomeController;
use App\Controllers\AuthController;

return function (App $app) {
    $app->get('/',[HomeController::class,'index']);

    $app->get('/login', [AuthController::class, 'loginView']);
    $app->get('/register', [AuthController::class, 'registerView']);
    $app->post('/login', [AuthController::class, 'logIn']);
    $app->post('/register', [AuthController::class, 'register']);
};