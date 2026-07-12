<?php

declare(strict_types = 1);

namespace App\DataObjects;


use App\Enums\SameSite;

class SessionConfig
{
    public function __construct(
        public string   $name,
        public bool     $secure,
        public bool     $httpOnly,
        public SameSite $sameSite
    ) {
    }
}