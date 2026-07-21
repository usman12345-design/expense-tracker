<?php

declare(strict_types=1);

namespace App\RequestValidator;

use App\Contracts\RequestValidatorInterface;
use App\Exception\ValidationException;
use League\MimeTypeDetection\FinfoMimeTypeDetector;
use Psr\Http\Message\UploadedFileInterface;


class UploadReceiptRequestValidator implements RequestValidatorInterface
{
    public function validate(array $data): array
    {
        // Check if 'receipt' key exists in the uploaded files
        if (!isset($data['receipt'])) {
            throw new ValidationException(['receipt' => ['Please select a receipt file']]);
        }

        /** @var UploadedFileInterface $uploadedFile */
        $uploadedFile = $data['receipt'];

        // Optional: check for upload errors
        if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
            throw new ValidationException(['receipt' => ['File upload failed.']]);
        }

        // Return the validated data
        return $data;
    }
}
