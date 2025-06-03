
import { prisma } from '@/lib/prisma'



export interface getProductsByStatusInput {
  status: number 
}
export interface approvedRejectProductInput {
  status: number,
  id: number
}

export interface createProductInput {
  name: string,
  quantity: number,
  description: string,
  price: number,
  userId: number
}

export async function getProductsByStatus(input: getProductsByStatusInput) {
  const { status } = input
    const products = await prisma.products.findMany({
    select: {
      id: true,
      Name: true,
      Quantity: true,
      Description: true,
      Price: true,
      users: {
        select: {
          username: true,
        },
      },
    },
    where : {
        status: status
    },
  })

  return products
}

export async function approvedRejectProduct(input: approvedRejectProductInput){
    
  const { id, status } = input
    const products = await prisma.products.update({
     where: {
        id: id,
    },
    data: {
        status: status,
    },
  })

  return products
}

export async function createProduct(input: createProductInput) {
  const { name, quantity,description, price, userId } = input
  const products = await prisma.products.create({
    data: {
        Name: name,
        Quantity: quantity,
        Description: description,
        Price: price,
        users:  {
            connect: { id: userId },
          }
    },
  })
  return products

}