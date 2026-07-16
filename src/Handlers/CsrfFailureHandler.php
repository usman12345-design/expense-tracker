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
        $message = 'Your session expired. Please try again.';

        if ($this->isAjax($request)) {
        $response = $this->responseFactory->createResponse(403);
        $response->getBody()->write(json_encode(['errors' => ['general' => [$message]]]));
        return $response->withHeader('Content-Type', 'application/json');
        }

        $this->session->flash('errors', ['general' => [$message]]);
        $response = $this->responseFactory->createResponse();
        $referer  = $this->requestService->getReferer($request);
        return $response->withHeader('Location', $referer)->withStatus(302);

    }

    private function isAjax(ServerRequestInterface $request): bool
    {
        return $request->getHeaderLine('X-Requested-With') === 'XMLHttpRequest'
            || str_contains($request->getHeaderLine('Accept'), 'application/json')
            || str_contains($request->getHeaderLine('Content-Type'), 'application/json');
    }

}