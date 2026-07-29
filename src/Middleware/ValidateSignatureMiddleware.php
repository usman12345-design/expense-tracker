<?php

namespace App\Middleware;

use App\Config;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Interfaces\RouteParserInterface;

class ValidateSignatureMiddleware implements MiddlewareInterface
{
    public function __construct(//private readonly ResponseFactoryInterface $responseFactory,
                                 private readonly Config $config,

    ){
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $uri = $request->getUri();
        $queryParams = $request->getQueryParams();
        $originalSignature =  $queryParams['signature'] ?? '';
        $expiration = (int)( $queryParams['expiration'] ?? 0);
        unset( $queryParams['signature'] );
        $url = (string) $uri->withQuery(http_Build_query($queryParams));
        $signature = hash_hmac('sha256', $url, $this->config->get('app_key'));

        if($expiration <= time() || ! hash_equals($signature, $originalSignature)) {
            throw new \RuntimeException('Failed to validate signature');
        }
        return $handler->handle($request);
        //return $this->responseFactory->createResponse(302)->withHeader('Location', '/verify');
    }
}