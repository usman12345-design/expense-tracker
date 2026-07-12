<?php

namespace App;
use App\Contracts\AuthInterface;
use App\Contracts\SessionInterface;
use App\Contracts\UserInterface;
use App\Entity\User;
use App\Contracts\UserProviderServiceInterface;
use App\Services\UserProviderService;

class Auth implements AuthInterface
{
    private ?UserInterface $user = null;

    public function __construct(private readonly UserProviderServiceInterface $userProvider,
                                private readonly SessionInterface $session)
    {
    }

    public function user(): ?UserInterface
    {
        if ($this->user !== null) {
            return $this->user;
        }

        //$userId = $_SESSION['user'] ?? null;
        $userId = $this->session->get('user');

        if (!$userId) {
            return null;
        }
        $user = $this->userProvider->getById($userId);
        //$user = $this->entityManager->getRepository(User::class)->find($_SESSION['user']);

        if (!$user) {
            return null;
        }
        $this->user = $user;
        return $this->user;
    }

    public function attemptLogin( array $data ): bool
    {
        $user = $this->userProvider->getByCredentials($data);
        //$user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $data['email']]);

        if (!$user || ! $this->checkCredentials($user, $data) ){
            return false;
        }

        //session_regenerate_id();
       // $_SESSION['user'] = $user->getId();

        $this->session->regenerate();
        $this->session->put('user', $user->getId());

        $this->user = $user;

        return true;
    }
    public function checkCredentials(UserInterface $user, array $data): bool
    {
        return password_verify($data['password'], $user->getPassword());
    }
    public function logOut(): void
    {
        //unset($_SESSION['user']);
        $this->session->forget('user');
        $this->session->regenerate();


        $this->user = null;
    }

}
