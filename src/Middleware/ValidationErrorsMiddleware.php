<?php

declare(strict_types=1);

namespace App\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Views\Twig;
use App\Contracts\SessionInterface;

class ValidationErrorsMiddleware implements MiddlewareInterface
{
    public function __construct(private Twig $twig, private SessionInterface $session)
    {
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {

        if ($errors = $this->session->getFlash('errors')) {
            $this->twig->getEnvironment()->addGlobal('errors', $errors);
        }
       // $errors= $this->session->getFlash('errors');
       // var_dump($errors);
        /*  if (!empty($_SESSION['errors'])) {
              $errors = $_SESSION['errors'];

              $this->twig->getEnvironment()->addGlobal('errors', $errors);

              unset($_SESSION['errors']);
          }*/

        return $handler->handle($request);
    }
}