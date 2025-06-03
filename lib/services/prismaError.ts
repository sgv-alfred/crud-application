

import { Prisma } from '@/prisma/client'

type PrismaErrorHandled = {
  message: string
  code: string
  statusCode: number
}

export function handlePrismaError(error: unknown): PrismaErrorHandled | null {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint failed
        return {
          message: `This data already exists. Please enter a unique value.`,
          code: error.code,
          statusCode: 409,
        }
      case 'P2025': // Record not found
        return {
          message: `Record not found.`,
          code: error.code,
          statusCode: 404,
        }
      case 'P2003': // Foreign key constraint failed
        return {
          message: `Foreign key constraint failed: ${error.meta?.field_name}`,
          code: error.code,
          statusCode: 400,
        }
      default:
        return {
          message: `Database error: ${error.message}`,
          code: error.code,
          statusCode: 500,
        }
    }
  }

  return null 
}
