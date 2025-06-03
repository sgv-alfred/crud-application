'use server'

import { NextResponse } from 'next/server';
import { createProduct } from '@/lib/services/products'
import { withErrorHandler } from '@/lib/services/errorHandler'
import { withAuth } from "@/lib/middleware/authenticate";
import { createProductSchema, createProductInput } from "@/lib/validators/productValidator"
import {UserPayload} from "@/lib/interface"


export const POST = withAuth(async (body: createProductInput | null, user: UserPayload) => {
   const { data, error, statusCode } = await withErrorHandler(async() => {
          const validated = createProductSchema.parse({...body,userId:user.id}) 
          return createProduct(validated);
      })
  
    
     if (error) 
    return NextResponse.json({ error }, { status: statusCode })
  
    return NextResponse.json({ data });
})

