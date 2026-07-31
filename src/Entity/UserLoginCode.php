<?php

declare(strict_types = 1);

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'user_login_codes')]
class UserLoginCode
{
    #[ORM\Id]
    #[ORM\Column(options: ['unsigned' => true])]
    #[ORM\GeneratedValue]
    private int $id;

    #[ORM\Column(length: 6)]
    private string $code;

    #[ORM\Column(name: 'is_active', options: ['default' => true])]
    private bool $isActive;

    #[ORM\Column]
    private \DateTime $expiration;

    #[ORM\ManyToOne]
    private User $user;

    public function __construct()
    {
        $this->isActive = true;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function setCode(string $code): UserLoginCode
    {
        $this->code = $code;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): UserLoginCode
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getExpiration(): \DateTime
    {
        return $this->expiration;
    }

    public function setExpiration(\DateTime $expiration): UserLoginCode
    {
        $this->expiration = $expiration;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): UserLoginCode
    {
        $this->user = $user;

        return $this;
    }
}