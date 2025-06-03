// lib/services/transactionService.ts

import { prisma } from '@/lib/prisma'

export interface CreateTransactionInput {
  userId: number
  productId: number
  quantity: number
  total: number
}

export async function createTransaction(input: CreateTransactionInput) {
  const { userId, productId, quantity, total } = input

  const transaction = await prisma.transactions.create({
    data: {
      quantity,
      totalamt: total,
      users: {
        connect: { id: userId },
      },
      products: {
        connect: { id: productId },
      },
    },
  })

  return transaction
}
