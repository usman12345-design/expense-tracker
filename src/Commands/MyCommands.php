<?php

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Attribute\AsCommand;

#[AsCommand(
    name: 'app:my-command',
    description: 'My custom command'
)]
class MyCommands extends Command
{
  protected static $defaultName = 'app:my-command';
  protected static $defaultDescription = 'My command';

  protected function execute(InputInterface $input,OutputInterface $output): int
  {
      $output->writeln('Hello');
      return Command::SUCCESS;
  }


}