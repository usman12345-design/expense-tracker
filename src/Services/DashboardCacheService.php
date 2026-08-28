<?php

namespace App\Services;

use Psr\SimpleCache\CacheInterface;

class DashboardCacheService
{
    private const TTL_SECONDS = 60;

    public function __construct(private readonly CacheInterface $cache)
    {
    }

    /**
     * Returns the cached dashboard payload for this user, computing and
     * storing it via $compute() on a miss.
     */
    public function remember(int $userId, callable $compute): array
    {
        $cached = $this->cache->get($this->key($userId));

        if ($cached !== null) {
            return $cached;
        }

        $data = $compute();

        $this->cache->set($this->key($userId), $data, self::TTL_SECONDS);

        return $data;
    }

    public function forget(int $userId): void
    {
        $this->cache->delete($this->key($userId));
    }

    private function key(int $userId): string
    {
        return sprintf('dashboard:%d:%s', $userId, date('Y-m'));
    }
}
