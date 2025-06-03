'use server'

import { NextResponse } from "next/server";

import { getProductsByStatus } from '@/lib/services/products'
import { withErrorHandler } from '@/lib/services/errorHandler'
import { withAuth } from "@/lib/middleware/authenticate";
import {ProductStatusSchema} from "@/lib/validators/productValidator"

export const POST = withAuth(async (body: any) => {
  

   const { data, error, statusCode } = await withErrorHandler(async() => {
          const validated = ProductStatusSchema.parse(body)
          return getProductsByStatus(validated);
      })
  
    
     if (error) 
    return NextResponse.json({ error }, { status: statusCode })
  
    return NextResponse.json({ data });
})