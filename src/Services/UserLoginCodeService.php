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
}