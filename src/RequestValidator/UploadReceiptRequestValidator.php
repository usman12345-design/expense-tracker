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
        //1. Check if 'receipt' key exists in the uploaded files
        if (!isset($data['receipt'])) {
            throw new ValidationException(['receipt' => ['Please select a receipt file']]);
        }

        /** @var UploadedFileInterface $uploadedFile */
        $uploadedFile = $data['receipt'];

        // 2. Optional: check for upload errors
        if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
            throw new ValidationException(['receipt' => ['File upload failed.']]);
        }
        // 2. Validate the file size
        $maxFileSize = 5 * 1024 * 1024;

        if ($uploadedFile->getSize() > $maxFileSize) {
            throw new ValidationException(['receipt' => ['Maximum allowed size is 5 MB']]);
        }
        // 3. Validate the file name
        $filename = $uploadedFile->getClientFilename();

        if (! preg_match('/^[a-zA-Z0-9\s._-]+$/', $filename)) {
            throw new ValidationException(['receipt' => ['Invalid filename']]);
        }

        // 4. Validate file type
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        $tmpFilePath      = $uploadedFile->getStream()->getMetadata('uri');

        if (! in_array($uploadedFile->getClientMediaType(), $allowedMimeTypes)) {
            throw new ValidationException(['receipt' => ['Receipt has to be either an image or a pdf document']]);
        }

        $detector = new FinfoMimeTypeDetector();
        $mimeType = $detector->detectMimeTypeFromFile($tmpFilePath);

        if (! in_array($mimeType, $allowedMimeTypes)) {
            throw new ValidationException(['receipt' => ['Invalid file type']]);
        }

        // Return the validated data
        return $data;
    }
}
