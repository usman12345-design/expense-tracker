<?php

namespace App\Mail;

use App\Config;
use App\Entity\User;
use App\SignedUrl;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\BodyRendererInterface;

class SignupEmail
{
    public function __construct(private readonly Config $config,
                                private readonly MailerInterface $mailer,
                                private readonly BodyRendererInterface $renderer,
                                private readonly SignedUrl $signedUrl
    ){
    }

    public function send(User $user):void
    {
        //{BASE_URL}/verify/{USER_ID}/{EMAIL_HASH}?expiration={EXPIRATION_TIMESTAMP}&signature={SIGNATURE}
        $email          = $user->getEmail();
        $expirationDate = new \DateTime('+30 minutes');
        $activationLink = $this->signedUrl->fromRoute(
            'verify',
            ['id' => $user->getId(), 'hash' => sha1($email)],
            $expirationDate
        );
        $message = (new TemplatedEmail())
            ->from($this->config->get('mailer.from'))
            ->to($email)
            ->subject('Activate your ExpensePilot account')
            ->htmlTemplate('emails/signup.html.twig')
            ->context([
                'activationLink' =>$activationLink,
                'expirationDate' =>$expirationDate,
            ]
            );
            $this->renderer->render($message);
            $this->mailer->send($message);
    }
}