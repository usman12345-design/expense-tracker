<?php

namespace App\Controllers;

use App\Contracts\RequestValidatorFactoryInterface;
use App\RequestValidator\UploadReceiptRequestValidator;
use App\Services\ReceiptService;
use App\Services\TransactionService;
use League\Flysystem\Filesystem;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\UploadedFileInterface;
class ReceiptController
{
    public function __construct(
        private readonly Filesystem $filesystem,
        private readonly RequestValidatorFactoryInterface $requestValidatorFactory,
        private readonly ReceiptService $receiptService,
        private readonly TransactionService $transactionService
    ) {
    }
    public function store(Request $request, Response $response, array $args): Response
    {
        $id = (int) $args['id'];
        // Get uploaded files directly from the request
       // $uploadedFiles = $request->getUploadedFiles();

       $uploadedFiles   = $this->requestValidatorFactory->make(UploadReceiptRequestValidator::class)->validate(
            $request->getUploadedFiles()
        );

        // Debug
        error_log('Uploaded files: ' . print_r($uploadedFiles, true));


        $uploadedFile = $uploadedFiles['receipt'];

        // Handle if it's an array of files
        if (is_array($uploadedFile)) {
            $uploadedFile = $uploadedFile[0];
        }

        try {
            // Get file info
            $filename = $uploadedFile->getClientFilename();
            $stream = $uploadedFile->getStream();


            if (! $id || ! ($transaction = $this->transactionService->getById($id))) {
                return $response->withStatus(404);
            }

            // Generate unique filename
            $extension = pathinfo($filename, PATHINFO_EXTENSION);
            $randomFilename = sprintf('%s_%s.%s', $id, uniqid(), $extension);
            $path = 'receipts/' . $randomFilename;


            // Store the file
            $this->filesystem->write($path, $stream->getContents());
            $this->receiptService->create($transaction, $filename, $randomFilename);

            $response->getBody()->write(json_encode([
                'success' => true,
                'message' => 'File uploaded successfully',
                'path' => $path
            ]));


            return $response->withStatus(200)->withHeader('Content-Type', 'application/json');

        } catch (\Exception $e) {
            error_log('Error storing file: ' . $e->getMessage());
            $response->getBody()->write(json_encode([
                'error' => 'Failed to store file: ' . $e->getMessage()
            ]));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }
}