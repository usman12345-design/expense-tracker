<?php

namespace App\Controllers;

use League\Flysystem\Filesystem;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\UploadedFileInterface;
class ReceiptController
{
    public function __construct(
        private readonly Filesystem $filesystem
    ) {
    }
    public function store(Request $request, Response $response, array $args): Response
    {
        $transactionId = (int) $args['id'];

        // Get uploaded files directly from the request
        $uploadedFiles = $request->getUploadedFiles();

        // Debug
        error_log('Uploaded files: ' . print_r($uploadedFiles, true));

        // Check if receipt file exists
        if (!isset($uploadedFiles['receipt'])) {
            $response->getBody()->write(json_encode([
                'error' => 'No file uploaded',
                'debug' => [
                    'files_keys' => array_keys($uploadedFiles),
                    'content_type' => $request->getHeaderLine('Content-Type')
                ]
            ]));
            return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
        }

        $uploadedFile = $uploadedFiles['receipt'];

        // Handle if it's an array of files
        if (is_array($uploadedFile)) {
            $uploadedFile = $uploadedFile[0];
        }

        // Check for upload errors
        if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
            $response->getBody()->write(json_encode([
                'error' => 'Upload failed with error code: ' . $uploadedFile->getError()
            ]));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
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

/*public function store(Request $request, Response $response, $args): Response
    {
        error_log('Request method: ' . $request->getMethod());
        error_log('Content-Type: ' . $request->getHeaderLine('Content-Type'));
        error_log('Uploaded files: ' . print_r($request->getUploadedFiles(), true));
        error_log('Parsed body: ' . print_r($request->getParsedBody(), true));
        error_log('Body contents: ' . $request->getBody()->__toString());
        $file = $request->getUploadedFiles()['receipt'];
                if (empty($files)) {
            $response->getBody()->write(json_encode(['error' => 'No file uploaded']));
            return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
        }
        $filename = $file->getClientFilename();
         try {
        $this->filesystem->write('receipts/' . $filename,$file->getStream()->getContents());
        return $response;
                } catch (\Exception $e) {
            error_log('Upload error: ' . $e->getMessage());
            $response->getBody()->write(json_encode(['error' => $e->getMessage()]));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }*/

}