import { z } from 'zod'

export const createUserSchema = z.object({
  username: z.string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string({ required_error: 'Password is required', invalid_type_error: 'Password must be a string' })
    .min(1, { message: 'Password is required' }),
  firstname: z.string({ required_error: 'First Name is required', invalid_type_error: 'First Name must be a string' })
    .min(1, { message: 'First Name is required' }),
  lastname: z.string({ required_error: 'Last Name is required', invalid_type_error: 'Last Name must be a string' })
    .min(1, { message: 'Last Name is required' }),
})

export type CreateTransactionInput = z.infer<typeof createUserSchema>
