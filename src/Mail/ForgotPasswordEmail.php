<?php

namespace App\Mail;

use App\Config;
use App\Entity\PasswordReset;
use App\Entity\User;
use App\SignedUrl;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\BodyRendererInterface;

class ForgotPasswordEmail
{
    public function __construct(private readonly Config $config,
                                private readonly MailerInterface $mailer,
                                private readonly BodyRendererInterface $renderer,
                                private readonly SignedUrl $signedUrl
    ){
    }

    public function send(PasswordReset $passwordReset):void
    {
        //{BASE_URL}/verify/{USER_ID}/{EMAIL_HASH}?expiration={EXPIRATION_TIMESTAMP}&signature={SIGNATURE}
        $email          = $passwordReset->getEmail();
        $resetLink = $this->signedUrl->fromRoute(
            'password-reset',
            ['token' => $passwordReset->getToken()],
            $passwordReset->getExpiration()
        );
        $message = (new TemplatedEmail())
            ->from($this->config->get('mailer.from'))
            ->to($email)
            ->subject('Reset Password of ExpensePilot account')
            ->htmlTemplate('emails/password_reset.html.twig')
            ->context([
                'resetLink' =>$resetLink
            ]);
            $this->renderer->render($message);
            $this->mailer->send($message);
    }
}