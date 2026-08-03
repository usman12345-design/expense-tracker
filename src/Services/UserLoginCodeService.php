<?php

namespace App\Services;

use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\UserInterface;
use App\Entity\UserLoginCode;

class UserLoginCodeService
{

    public function __construct(private readonly EntityManagerServiceInterface $entityManager)
    {
    }

    public function generate(UserInterface $user):UserLoginCode
    {
        $userLoginCode = new UserLoginCode();
        $code = random_int(100000, 999999);
        $userLoginCode->setCode((string)$code);
        $userLoginCode->setUser($user);
        $userLoginCode->setExpiration(new \DateTime('+10 minutes'));
        $this->entityManager->sync($userLoginCode);
        return $userLoginCode;
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
}