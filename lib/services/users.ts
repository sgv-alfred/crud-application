// lib/services/transactionService.ts

import { prisma } from '@/lib/prisma'
import argon2 from "argon2";

export interface UserInput {
  username: string
  password: string
  firstname: string
  lastname: string
}

export async function registerUser(input: UserInput) {
  const {username,password, firstname, lastname} = input
const hashedPassword = await argon2.hash(password); 
    const user = await prisma.users.create({
        data: {
            username: username,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
        }
    })

  return user
}
