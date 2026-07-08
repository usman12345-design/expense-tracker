<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
#[ORM\Entity]
#[ORM\Table(name: 'receipts')]
class Receipt
{
    #[ORM\Id]
    #[ORM\Column]
    #[ORM\GeneratedValue]
    private int $id;
    #[ORM\Column]
    private string $file_name;
    #[ORM\Column(name: 'created_at')]
    private \DateTime $createdAt;
    #[ORM\Column(name: 'transaction_id')]
    #[ORM\ManyToOne(targetEntity: Transaction::class, inversedBy: 'receipts')]
    private Transaction $transaction;
    public function getId(): int
    {
        return $this->id;
    }

    public function getFilename(): string
    {
        return $this->filename;
    }

    public function setFilename(string $filename): Receipt
    {
        $this->filename = $filename;

        return $this;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): Receipt
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getTransaction(): Transaction
    {
        return $this->transaction;
    }

    public function setTransaction(Transaction $transaction): Receipt
    {
        $transaction->addReceipt($this);

        $this->transaction = $transaction;

        return $this;
    }


}