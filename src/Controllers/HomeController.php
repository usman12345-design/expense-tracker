<?php
namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use Psr\SimpleCache\CacheInterface;


class HomeController
{
    public function __construct(private readonly Twig $twig,
                                private readonly CacheInterface $cache)
    {
    }

    public function index(Request $request, Response $response): Response
    {
       // $this->cache->set('a',1,50);
        $this->cache->setMultiple(['b' => 2,'c' => 3],15);
        var_dump($this->cache->get('a'), $this->cache->getMultiple(['b','c']));
        $user = $request->getAttribute('user');
        var_dump($user?->getName());
        return $this->twig->render($response, 'dashboard.twig');
    }

}