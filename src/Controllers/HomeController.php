<?php
namespace App\Controllers;
use App\ResponseFormatter;
use App\Services\CategoryService;
use App\Services\DashboardCacheService;
use App\Services\TransactionService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;;


class HomeController
{
    public function __construct(private readonly Twig $twig,
                                private readonly TransactionService $transactionService,
                                private readonly CategoryService $categoryService,
                                private readonly ResponseFormatter $responseFormatter,
                                private readonly DashboardCacheService $dashboardCache)
    {
    }

    public function index(Request $request, Response $response): Response
    {
        $userId = $request->getAttribute('user')->getId();

        $data = $this->dashboardCache->remember($userId, function () {
            $startDate = \DateTime::createFromFormat('Y-m-d', date('Y-m-01'));
            $endDate   = new \DateTime('now');

            return [
                'totals'                => $this->transactionService->getTotals($startDate, $endDate),
                'transactions'          => $this->transactionService->getRecentTransactions(6),
                'topSpendingCategories' => $this->categoryService->getTopSpendingCategories(4),
            ];
        });

        return $this->twig->render($response, 'dashboard.twig', $data);
    }
    public function getYearToDateStatistics(Response $response): Response
    {
        $data = $this->transactionService->getMonthlySummary((int) date('Y'));

        return $this->responseFormatter->asJson($response, $data);
    }

}