<?php

namespace App\Contracts;

interface EntityManagerServiceInterface
{
    public function __call(string $name, array $arguments);

    public function sync($entity = null): void;

    public function delete($entity, bool $sync = false): void;
    public function enableUserAuthFilter(int $userId): void;
}