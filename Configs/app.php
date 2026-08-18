<?php

declare(strict_types=1);

use App\Enums\StorageDriver;
use App\Enums\AppEnvironment;

$boolean = function(mixed $value) {
    if (in_array($value, ['true', 1, '1', true, 'yes'], true)) {
        return true;
    }

    return false;
};

$appEnv =  !empty($_ENV['APP_ENV']) ?  $_ENV['APP_ENV'] : AppEnvironment::Production->value;
$appSnakeName = strtolower(str_replace(' ', '_', $_ENV['APP_NAME']));

return [
    'app_key' => $_ENV['APP_KEY'] ?? '',
    'app_name' => $_ENV['APP_NAME'],
    'app_version' => $_ENV['APP_VERSION'] ?? '1.0',
    'app_url' => $_ENV['APP_URL'],
    'app_environment' => $appEnv,
    'display_error_details' => filter_var(
        $_ENV['APP_DEBUG'] ?? false,
        FILTER_VALIDATE_BOOLEAN
    ),
    'log_errors' => true,
    'log_error_details' => true,
    'doctrine' => [
        'dev_mode' => AppEnvironment::isDevelopment($appEnv),
        'cache_dir' => STORAGE_PATH . '/cache/doctrine',
        'entity_dir' => [APP_PATH . '/Entity'],
        'connection' => [
            'driver' => $_ENV['DB_DRIVER'] ?? 'pdo_mysql',
            'host' => $_ENV['DB_HOST'] ?? 'localhost',
            'port' => $_ENV['DB_PORT'] ?? 3308,
            'dbname' => $_ENV['DB_NAME'],
            'user' => $_ENV['DB_USER'],
            'password' => $_ENV['DB_PASS'],
            'driverOptions' => [
                PDO::MYSQL_ATTR_SSL_CA                 => true,
                PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
            ],
        ],
    ],
    'session'               => [
        'name'     => $appSnakeName . '_session',
        'flash_name' => $appSnakeName . '_flash',
        'secure'   => $boolean($_ENV['SESSION_SECURE'] ?? true),
        'httponly' =>  $boolean($_ENV['SESSION_HTTP_ONLY'] ?? true),
        'samesite' =>  $_ENV['SESSION_SAME_SITE'] ?? 'lax',
    ],
    'storage' => [
        'driver' => StorageDriver::Cloudinary,
        'cloudinary' => [
            'cloud_name' =>  $_ENV['CLOUDINARY_CLOUD_NAME'] ?? '',
            'api_key'    =>  $_ENV['CLOUDINARY_API_KEY'] ?? '',
            'api_secret' =>  $_ENV['CLOUDINARY_API_SECRET'] ?? '',
            'secure'     => true, // Optional: forces HTTPS URLs
        ],
    ],
    'mailer'                => [
        'driver' => $_ENV['MAILER_DRIVER'] ?? 'log',
        'dsn'  => $_ENV['MAILER_DSN'] ?? 'smtp://mailhog:1025',
        'from'   => trim($_ENV['MAILER_FROM'] ?? '', '"\''),
    ],
    'redis'                  => [
        'scheme' => $_ENV['REDIS_SCHEME'] ?? 'tcp',
       'host' => $_ENV['REDIS_HOST'],
        'port'     => (int) ($_ENV['REDIS_PORT'] ?? 6379),
        'password' => $_ENV['REDIS_PASSWORD']
    ],
    'trusted_proxies' =>[],
    'limiter' => [
        'id' => 'default',
        'policy' => 'fixed_window',
        'interval' =>'1 minute',
        'limit' => 6,
    ],

];
