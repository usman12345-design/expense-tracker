<?php

declare(strict_types=1);

namespace Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260720044356 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE receipts CHANGE transaction_id transaction_id INT NOT NULL');
        $this->addSql('ALTER TABLE receipts ADD CONSTRAINT FK_1DEBE3A22FC0CB0F FOREIGN KEY (transaction_id) REFERENCES transactions (id)');
        $this->addSql('CREATE INDEX IDX_1DEBE3A22FC0CB0F ON receipts (transaction_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE receipts DROP FOREIGN KEY FK_1DEBE3A22FC0CB0F');
        $this->addSql('DROP INDEX IDX_1DEBE3A22FC0CB0F ON receipts');
        $this->addSql('ALTER TABLE receipts CHANGE transaction_id transaction_id VARCHAR(255) NOT NULL');
    }
}
