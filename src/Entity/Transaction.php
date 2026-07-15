<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity]
#[ORM\Table(name: 'transactions')]
class Transaction
{
    #[ORM\Id]
    #[ORM\Column]
    #[ORM\GeneratedValue]
    private int $id;
    #[ORM\Column(type: Types::STRING)]
    private string $description;
    #[ORM\Column]
    private \DateTime $date;
    #[ORM\Column(name: 'amount', type: Types::DECIMAL, precision: 10, scale: 2)]
    private int $amount;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'transactions')]
    #[ORM\JoinColumn(name: 'category_id', referencedColumnName: 'id', nullable: false)]
    private Category $category;
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'transactions')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false)]
    private User $user;
    #[ORM\OneToMany(targetEntity: Receipt::class, mappedBy: 'transactions', cascade: ['persist', 'remove'])]
    private Collection $receipts;

    public function __construct()
    {
        $this->receipts = new ArrayCollection();
    }


    public function getId(): int
    {
        return $this->id;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }
    public function getDate(): \DateTime
    {
        return $this->date;
    }

    public function setDate(\DateTime $date): Transaction
    {
        $this->date = $date;

        return $this;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): Transaction
    {
        $this->amount = $amount;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): Transaction
    {
        $this->user = $user;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): Transaction
    {
        $this->category = $category;

        return $this;
    }

    public function getReceipts(): ArrayCollection|Collection
    {
        return $this->receipts;
    }

    public function addReceipt(Receipt $receipt): Transaction
    {
        $this->receipts->add($receipt);

        return $this;
    }





}