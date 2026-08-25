<?php

namespace App\Controllers;

use App\Contracts\RequestValidatorFactoryInterface;
use App\Entity\Receipt;
use App\Entity\Transaction;
use App\RequestValidator\UploadReceiptRequestValidator;
use App\Services\ReceiptService;
use App\Services\TransactionService;
use Doctrine\ORM\Exception\ORMException;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Psr7\Stream;
use App\Contracts\EntityManagerServiceInterface;

class ReceiptController
{
    public function __construct(
        private readonly Filesystem                       $filesystem,
        private readonly RequestValidatorFactoryInterface $requestValidatorFactory,
        private readonly ReceiptService                   $receiptService,
        private readonly EntityManagerServiceInterface $entityManagerService
    )
    {
    }

    public function store(Request $request, Response $response, Transaction $transaction): Response
    {
        $uploadedFiles = $this->requestValidatorFactory->make(UploadReceiptRequestValidator::class)->validate(
            $request->getUploadedFiles()
        );

        $uploadedFile = $uploadedFiles['receipt'];

        // Handle if it's an array of files
        if (is_array($uploadedFile)) {
            $uploadedFile = $uploadedFile[0];
        }

        try {
            // Get file info
            $filename = $uploadedFile->getClientFilename();
            $mediaType = $uploadedFile->getClientMediaType();
            $stream = $uploadedFile->getStream();

           // Generate extension from the validated MIME type
            $extension = match ($mediaType) {
                'image/jpeg' => 'jpg',
                'image/png'  => 'png',
                'image/webp' => 'webp',
                'application/pdf' => 'pdf',
                default => throw new \RuntimeException('Unsupported receipt MIME type'),
            };

            // Generate unique filename
            //$extension = pathinfo($filename, PATHINFO_EXTENSION);
            $randomFilename = sprintf('%s.%s', uniqid(), $extension);
            $path = 'receipts/' . $randomFilename;


            // Store the file
            $this->filesystem->write($path, $stream->getContents());
            $receipt = $this->receiptService->create($transaction, $filename, $randomFilename, $uploadedFile->getClientMediaType());
            $this->entityManagerService->sync($receipt);

            $response->getBody()->write(json_encode([
                'success' => true,
                'message' => 'File uploaded successfully',
                'path' => $path
            ]));


            return $response->withStatus(200)->withHeader('Content-Type', 'application/json');
        } catch (ORMException|FilesystemException $e) {
            error_log('Error storing file: ' . $e->getMessage());
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            error_log('Error storing file: ' . $e->getMessage());
            $response->getBody()->write(json_encode([
                'error' => 'Failed to store file: ' . $e->getMessage()
            ]));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    public function download(Request $request, Response $response, Transaction $transaction, Receipt $receipt): Response
    {

        if ($receipt->getTransaction()->getId() !== $transaction->getId()) {
            return $response->withStatus(401);
        }

        $file = $this->filesystem->readStream('receipts/' . $receipt->getStorageFilename());

        $response = $response->withHeader('Content-Disposition', 'inline; filename="' . $receipt->getFilename() . '"')
            ->withHeader('Content-Type', $receipt->getMediaType());

        return $response->withBody(new Stream($file));
    }

    public function delete(Request $request, Response $response, Transaction $transaction, Receipt $receipt ): Response
    {

        if ($receipt->getTransaction()->getId() !== $transaction->getId()) {
            return $response->withStatus(401);
        }

        $this->filesystem->delete('receipts/' . $receipt->getStorageFilename());

        $this->entityManagerService->delete($receipt,true);

        return $response;
    }
}