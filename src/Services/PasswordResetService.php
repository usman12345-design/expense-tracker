<?php

namespace App\Services;

use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\UserInterface;
use App\Entity\PasswordReset;


class PasswordResetService
{

    public function __construct(private readonly EntityManagerServiceInterface $entityManager)
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

    public function verify(UserInterface $user, mixed $code): bool
    {
        $userLoginCode = $this->entityManager->getRepository(UserLoginCode::class)->findOneBy(
            ['user' => $user, 'code' => $code, 'isActive' => true]
        );

        if (! $userLoginCode) {
            return false;
        }

        if ($userLoginCode->getExpiration() <= new \DateTime()) {
            return false;
        }

        return true;
    }

    public function deactivateAllActiveCodes(UserInterface $user)
    {
        $this->entityManager->getRepository(UserLoginCode::class)
            ->createQueryBuilder('c')
            ->update()
            ->set('c.isActive', '0')
            ->where('c.user = :user')
            ->andWhere('c.isActive = 1')
            ->setParameter('user', $user)
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
}