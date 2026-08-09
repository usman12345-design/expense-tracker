<?php


namespace App\Cache;

use Symfony\Component\RateLimiter\LimiterStateInterface;
use Symfony\Component\RateLimiter\Storage\StorageInterface;

class RedisRateLimiterStorage implements StorageInterface
{
    public function __construct(
        private RedisCache $cache
    )
    {
    }

    public function save(LimiterStateInterface $limiterState): void
    {
        $ttl = $limiterState->getExpirationTime();

        $this->cache->set(
            sha1($limiterState->getId()),
            $limiterState,
            $ttl
        );
    }

    public function fetch(string $limiterStateId): ?LimiterStateInterface
    {
        $state = $this->cache->get(
            sha1($limiterStateId)
        );

        return $state instanceof LimiterStateInterface
            ? $state
            : null;
    }

    public function delete(string $limiterStateId): void
    {
        $this->cache->delete(
            sha1($limiterStateId)
        );
    }
}