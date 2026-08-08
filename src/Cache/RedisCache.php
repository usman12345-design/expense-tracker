<?php

namespace App\Cache;
use Predis\Client;
use Psr\SimpleCache\CacheInterface;
use Psr\SimpleCache\InvalidArgumentException;

class RedisCache implements CacheInterface
{
    public function __construct(
        private Client $redis
    ) {
    }
    public function get($key, $default = null): mixed
    {
        $value = $this->redis->get($key);

        return $value === null ? $default : unserialize($value);
    }

    public function set(string $key, mixed $value, null|int|\DateInterval $ttl = null): bool
    {
        $value = serialize($value);
        if ($ttl instanceof \DateInterval) {
            $ttl = (new \DateTimeImmutable())->add($ttl)->getTimestamp()
                - time();
        }
        if ($ttl !== null) {
            return (bool) $this->redis->setex($key, $ttl, $value);
        }

        return (bool) $this->redis->set($key, $value);
    }

    public function delete(string $key): bool
    {
        return (bool) $this->redis->del($key);
    }

    public function clear(): bool
    {
        return (bool) $this->redis->flushDB();
    }
    public function getMultiple(iterable $keys, $default = null): iterable
    {
        $keys = (array) $keys;
        $values = $this->redis->mget($keys);
        $result = [];
        foreach ($values as $i => $value) {
            $result[$keys[$i]] = $value === null ? $default : unserialize($value);
        }
        return $result;
    }
    public function setMultiple(iterable $values, null|int|\DateInterval $ttl = null): bool
    {
        $values = array_map(
            fn ($value) => serialize($value),
            (array) $values
        );
        $result = $this->redis->mset($values);

        if ($ttl instanceof \DateInterval) {
            $ttl = (new \DateTimeImmutable())->add($ttl)->getTimestamp()
                - time();
        }
        if ($ttl !== null) {
            foreach (array_keys($values) as $key) {
                $this->redis->expire($key, (int)$ttl);
            }
        }
        return (bool) $result;
    }

    public function deleteMultiple(iterable $keys): bool
    {
     $keys = (array)$keys;
     return $this->redis->del($keys) === count($keys) ;
    }

    public function has(string $key): bool
    {
        return (bool) $this->redis->exists($key);
    }
}