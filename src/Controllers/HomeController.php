<?php
namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use App\Entity\User;
class HomeController
{
    public function __construct(private readonly Twig $twig)
    {
    }

    public function index(Request $request, Response $response, $args): Response
    {
        $user = $request->getAttribute('user');
        var_dump($user?->getId());
        return $this->twig->render($response, 'dashboard.twig');
    }

}