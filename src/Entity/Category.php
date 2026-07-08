<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
#[ORM\Entity]
#[ORM\Table(name: 'categories')]
class Category
{
    #[ORM\Id]
    #[ORM\Column]
    #[ORM\GeneratedValue]
    private int $id;
    #[ORM\Column(length: 255)]
    private string $name;

    #[ORM\Column(name: 'user_id')]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'categories')]
    private User $user;
    #[ORM\OneToMany(targetEntity: Transaction::class, mappedBy: 'catagories', cascade: ['persist', 'remove'])]
    private Collection $transactions;

    public function __construct()
    {
        $this->transactions= new ArrayCollection();
    }
    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): Category
    {
        $this->name = $name;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): Category
    {
        $user->addCategory($this);

        $this->user = $user;

        return $this;
    }

    public function getTransactions(): ArrayCollection|Collection
    {
        return $this->transactions;
    }

    public function addTransaction(Transaction $transaction): Category
    {
        $this->transactions->add($transaction);

        return $this;
    }

}