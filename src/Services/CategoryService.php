<?php

namespace App\Services;

use App\Contracts\EntityManagerServiceInterface;
use App\DataObjects\DataTableQueryParams;
use App\Entity\Category;
use App\Entity\Transaction;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;

class CategoryService
{
    public function __construct(private readonly EntityManagerServiceInterface $entityManager)
    {
    }

    public function create(string $name, User $user): Category
    {
        $category = new Category();

        $category->setUser($user);

        return $this->update($category, $name);
    }

    public function getById(int $id): ?Category
    {
        return $this->entityManager->find(Category::class, $id);
    }

    public function update(Category $category, string $name): Category
    {
        $category->setName($name);


        return $category;
    }

    public function getPaginatedCategories(DataTableQueryParams $params): Paginator
    {
        $query = $this->entityManager
            ->getRepository(Category::class)
            ->createQueryBuilder('c')
            ->setFirstResult($params->start)
            ->setMaxResults($params->length);

        $orderBy = in_array($params->orderBy, ['name', 'createdAt', 'updatedAt']) ? $params->orderBy : 'updatedAt';
        $orderDir = strtolower($params->orderDir) === 'asc' ? 'asc' : 'desc';

        if (!empty($params->searchTerm)) {
            $query->where('c.name LIKE :name')->setParameter('name', '%' . addcslashes($params->searchTerm, '%_') . '%');
        }

        $query->orderBy('c.' . $orderBy, $orderDir);

        return new Paginator($query);
    }

    public function getCategoryNames(): array
    {
        return $this->entityManager->getRepository(Category::class)->createQueryBuilder('c')
            ->select('c.id', 'c.name')
            ->getQuery()
            ->getArrayResult();
    }

    public function getTopSpendingCategories(int $limit)
    {
           $query = $this->entityManager->createQuery(
               'SELECT c.name, SUM(ABS(t.amount)) as total
                FROM App\Entity\Transaction t
                JOIN t.category c
                WHERE t.amount < 0
                GROUP BY c.id
                ORDER BY total DESC'
           );

           $query->setMaxResults($limit);

           return $query->getArrayResult();

     /*   $qb = $this->entityManager->getRepository(Transaction::class)
            ->createQueryBuilder('t')
            ->select('c.name, SUM(ABS(t.amount)) as total')
            ->join('t.category', 'c')
            ->where('t.amount > 0')
            ->groupBy('c.id')
            ->orderBy('total', 'DESC')
            ->setMaxResults($limit);

       return $qb->getQuery()->getArrayResult();*/
        
        // $data = $qb->getQuery()->getArrayResult();
        // Dump to inspect keys & types
        // dd($data);
    }
}