import { ZodError } from 'zod'
import { handlePrismaError } from '@/lib/services/prismaError'

type HandlerResponse<data> = {
  data: data | null
  error: string | null
  statusCode: number
}

export async function withErrorHandler<data>(
  functionHolder: () => Promise<data>
): Promise<HandlerResponse<data>> {
  try {
    const data = await functionHolder()
    return { data, error: null, statusCode: 200 }
  } catch (error: unknown) {
    let message = 'Internal Server Error'
    let statusCode = 500

    if (typeof error === 'string') message = error

    const prismaError = handlePrismaError(error)
    
    if (prismaError) {
        message = prismaError.message
        statusCode = prismaError.statusCode
    }

    if (error instanceof ZodError) {
      message = error.errors.map(e => e.message).join(', ')
      statusCode = 400
    }

    if (error instanceof SyntaxError || error instanceof TypeError) {
      message = 'Internal Server Error'
      statusCode = 400
    }

    console.error('[ERROR_HANDLER]', error)

    return {
      data: null,
      error: message,
      statusCode,
    }
  }
}