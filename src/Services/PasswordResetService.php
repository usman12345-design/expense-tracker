<?php

namespace App\Services;

use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\UserInterface;
use App\Contracts\UserProviderServiceInterface;
use App\Entity\PasswordReset;
use App\Entity\User;


class PasswordResetService
{

    public function __construct(private readonly EntityManagerServiceInterface $entityManager,
                                private readonly UserProviderServiceInterface $userProviderService)
    {
    }

    public function generate(string $email):PasswordReset
    {
        $passwordReset = new PasswordReset();
        $code = bin2hex(random_bytes(32));
        $passwordReset ->setToken($code);
        $passwordReset ->setEmail($email);
        $passwordReset ->setExpiration(new \DateTime('+30 minutes'));
        $this->entityManager->sync($passwordReset);
        return $passwordReset ;
    }

    public function deactivateAllPasswordResets(string $email)
    {
        $this->entityManager->getRepository(PasswordReset::class)
            ->createQueryBuilder('pr')
            ->update()
            ->set('pr.isActive', '0')
            ->where('pr.email = :email')
            ->andWhere('pr.isActive = 1')
            ->setParameter('email', $email)
            ->getQuery()
            ->execute();
    }

    public function findByToken(string $token): ?PasswordReset
    {
        return $this->entityManager
            ->getRepository(PasswordReset::class)
            ->createQueryBuilder('pr')
            ->select('pr')
            ->where('pr.token = :token')
            ->andWhere('pr.isActive = :active')
            ->andWhere('pr.expiration > :now')
            ->setParameter('token', $token)
            ->setParameter('active', true)
            ->setParameter('now', new \DateTime())
            ->getQuery()
            ->getOneOrNullResult();
        
    }
    public function updatePassword(User $user, string $password): void
    {
        $this->entityManager->wrapInTransaction(function () use ($user, $password) {
            $this->deactivateAllPasswordResets($user->getEmail());

            $this->userProviderService->updatePassword($user, $password);
        });
    }
}