<?php
declare(strict_types=1);

namespace App\Handlers;

use App\Contracts\SessionInterface;

// adjust namespace to wherever it actually lives
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use App\Services\RequestService;


class CsrfFailureHandler
{
    public function __construct(
        private readonly ResponseFactoryInterface $responseFactory,
        private readonly SessionInterface $session,
        private readonly RequestService $requestService
    )
    {
    }

    public function __invoke(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $this->session->flash('errors', ['general' => ['Your session expired. Please try again.']]);
        $response = $this->responseFactory->createResponse();
        $referer  = $this->requestService->getReferer($request);
       // var_dump($referer);
        //var_dump($_SESSION['expensepilot_flash']['errors']);
        return $response->withHeader('Location', $referer)->withStatus(302);
        //return $handler->handle($request);
    }
}