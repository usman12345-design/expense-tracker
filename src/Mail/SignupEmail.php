<?php

namespace App\Mail;

use App\Config;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\BodyRendererInterface;

class SignupEmail
{
    public function __construct(private readonly Config $config,
                                private readonly MailerInterface $mailer,
                                private readonly BodyRendererInterface $renderer
    ){
    }

    public function send(string $getEmail):void
    {
        $message = (new TemplatedEmail())
            ->from($this->config->get('mailer.from'))
            ->to($getEmail)
            ->subject('Activate your ExpensePilot account')
            ->htmlTemplate('emails/signup.html.twig')
            ->context([
                'activationLink' =>'#',
                'expirationDate' => new \DateTime('+ 30 minutes'),
            ]
            );
            $this->renderer->render($message);
            $this->mailer->send($message);
       /* try {
            $this->mailer->send($message);
            echo 'Mail sent';
        } catch (\Throwable $e) {
            dd(  $this->config->get('mailer.from'));
        }*/
    }
}