<?php

namespace App;
use App\Contracts\AuthInterface;
use App\Contracts\UserInterface;
use App\Entity\User;
use Doctrine\ORM\EntityManager;

class Auth implements AuthInterface
{
    private ?UserInterface $user = null;

    public function __construct(private EntityManager $entityManager)
    {
    }

    public function user(): ?UserInterface
    {
        if ($this->user !== null) {
            return $this->user;
        }

        $userId = $_SESSION['user'] ?? null;

        if (!$userId) {
            return null;
        }

        $user = $this->entityManager->getRepository(User::class)->find($_SESSION['user']);

        if (!$user) {
            return null;
        }
        $this->user = $user;
        return $this->user;
    }

    public function attemptLogin( array $data = []): bool
    {
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $data['email']]);

        if (!$user || ! $this->checkCredentials($user, $data) ){
            return false;
        }

        session_regenerate_id();
        $_SESSION['user'] = $user->getId();
        $this->user = $user;

        return true;
    }
    public function checkCredentials(UserInterface $user, array $data): bool
    {
        return password_verify($data['password'], $user->getPassword());
    }

}
