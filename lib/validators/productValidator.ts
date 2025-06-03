import { z } from 'zod'

export const ProductStatusSchema = z.object({
  status: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Status is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Status must be a number',
    }),
});

export type getProductsByStatusInput = z.infer<typeof ProductStatusSchema>


export const approvedRejectProductSchema = z.object({
  status: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Status is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Status must be a number',
    }),
  id: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Product ID is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Product ID must be a number',
    }),
});

export type approvedRejectProductInput = z.infer<typeof approvedRejectProductSchema>


export const createProductSchema = z.object({
  name: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Product Name is required',
    })
    .refine((val) => typeof val === 'string', {
      message: 'Product Name must be a string',
    }),
  quantity: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Quantity is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Quantity must be a number',
    }),
  description: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Description is required',
    })
    .refine((val) => typeof val === 'string', {
      message: 'Description must be a number',
    }),
  price: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Price is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Price must be a number',
    }),
  userId: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: 'Create by is required',
    })
    .refine((val) => typeof val === 'number', {
      message: 'Create by must be a number',
    }),
});

export type createProductInput = z.infer<typeof createProductSchema>
