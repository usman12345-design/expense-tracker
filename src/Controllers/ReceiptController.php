<?php

namespace App\Controllers;

use App\Contracts\RequestValidatorFactoryInterface;
use App\RequestValidator\UploadReceiptRequestValidator;
use League\Flysystem\Filesystem;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\UploadedFileInterface;
class ReceiptController
{
    public function __construct(
        private readonly Filesystem $filesystem,
        private readonly RequestValidatorFactoryInterface $requestValidatorFactory,

    ) {
    }
    public function store(Request $request, Response $response, array $args): Response
    {
        $transactionId = (int) $args['id'];
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
            $clientFilename = $uploadedFile->getClientFilename();
            $stream = $uploadedFile->getStream();

            // Generate unique filename
            $extension = pathinfo($clientFilename, PATHINFO_EXTENSION);
            $filename = sprintf('%s_%s.%s', $transactionId, uniqid(), $extension);
            $path = 'receipts/' . $filename;

            // Store the file
            $this->filesystem->write($path, $stream->getContents());

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