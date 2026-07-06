<?php

namespace App\Services;
use App\Entity\invoices;
use Doctrine\ORM\EntityManager;
use App\Enums\InvoiceStatus;

class InvoiceService
{
    public function __construct(private EntityManager $em)
    {
    }

    public function getPaidInvoices()
    {
        return $this->em->createQueryBuilder()
                  ->select('i')
                  ->from(invoices::class, 'i')
                  ->where('i.status = :status')
        ->setParameter('status',InvoiceStatus::PENDING->value )
            ->getQuery()
            ->getArrayResult();
    }
}