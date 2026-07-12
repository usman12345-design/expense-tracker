<?php

namespace App\Entity;
use App\Contracts\UserInterface;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity]
#[ORM\Table(name: 'users')]
#[ORM\HasLifecycleCallbacks]
class User implements UserInterface
{
    #[ORM\Id]
    #[ORM\Column(options: ['unsigned' => true])]
    #[ORM\GeneratedValue]
    private int $id;
    #[ORM\Column(length: 255)]
    private string $email;
    #[ORM\Column]
    private string $password;
    #[ORM\Column(length: 255)]
    private string $name;
    #[ORM\Column(name: 'created_at')]
    private \DateTime $createdAt;
    #[ORM\Column(name: 'updated_at')]
    private \DateTime $updatedAt;
    #[ORM\OneToMany(targetEntity: Category::class, mappedBy: 'users', cascade: ['persist', 'remove'])]
    private Collection $categories;
    #[ORM\OneToMany(targetEntity: Transaction::class, mappedBy: 'users', cascade: ['persist', 'remove'])]
    private Collection $transactions;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->transactions = new ArrayCollection();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function updateTimestamp(): void
    {
        // If createdAt isn't set yet (or is null), set it now
        if (! isset($this->createdAt) || $this->createdAt === null) {
            $this->createdAt = new \DateTime(); // Using Immutable is recommended for modern Doctrine
        }
        $this->updatedAt = new \DateTime();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): User
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): User
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): User
    {
        $this->password = $password;

        return $this;
    }

    public function getCategories(): ArrayCollection|Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): User
    {
        $this->categories->add($category);

        return $this;
    }

    public function getTransactions(): ArrayCollection|Collection
    {
        return $this->transactions;
    }

    public function addTransaction(Transaction $transaction): User
    {
        $this->transactions->add($transaction);

        return $this;
    }

}