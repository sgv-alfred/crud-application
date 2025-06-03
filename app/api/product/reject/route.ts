'use server'

import { NextResponse } from "next/server";

import { approvedRejectProduct } from '@/lib/services/products'
import { withErrorHandler } from '@/lib/services/errorHandler'
import { withAuth } from "@/lib/middleware/authenticate";
import {approvedRejectProductSchema, approvedRejectProductInput} from "@/lib/validators/productValidator"
import {ProductStatus} from "@/lib/constants"


export const POST = withAuth(async (body: approvedRejectProductInput | null) => {
    if (!body) {
        return NextResponse.json({ error: 'Request body missing' }, { status: 400 });
    }
    body.status = ProductStatus.REJECT
    const { data, error, statusCode } = await withErrorHandler(async() => {
          const validated = approvedRejectProductSchema.parse(body)
          return approvedRejectProduct(validated);
      })
  
    
     if (error) 
    return NextResponse.json({ error }, { status: statusCode })
  
    return NextResponse.json({ data });
})