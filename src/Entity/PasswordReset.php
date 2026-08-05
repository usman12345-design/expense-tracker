<?php

declare(strict_types = 1);

namespace App\Entity;
use App\Entity\Traits\HasTimestamps;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'password_resets')]
#[ORM\HasLifecycleCallbacks]
class PasswordReset
{
    use HasTimestamps;
    #[ORM\Id]
    #[ORM\Column(options: ['unsigned' => true])]
    #[ORM\GeneratedValue]
    private int $id;

    #[ORM\Column]
    private string $email;

    #[ORM\Column(name: 'is_active', options: ['default' => true])]
    private bool $isActive;

    #[ORM\Column]
    private \DateTime $expiration;
    #[ORM\Column(unique: true)]
    private string $token;
    public function __construct()
    {
        $this->isActive = true;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): PasswordReset
    {
        $this->email = $email;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): PasswordReset
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getExpiration(): \DateTime
    {
        return $this->expiration;
    }

    public function setExpiration(\DateTime $expiration): PasswordReset
    {
        $this->expiration = $expiration;

        return $this;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): PasswordReset
    {
        $this->token = $token;

        return $this;
    }
}