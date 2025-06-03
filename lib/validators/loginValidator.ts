import { z } from 'zod'

export const userLoginSchema = z.object({
   username: z.string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),

  password: z.string({ required_error: 'Password is required', invalid_type_error: 'Password must be a string' })
    .min(1, { message: 'Password is required' }),
});
export type CreateLoginInput = z.infer<typeof userLoginSchema>
