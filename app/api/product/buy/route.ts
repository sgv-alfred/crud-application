// app/api/transactions/route.ts

'use server'

import { NextResponse } from 'next/server'
import { createTransaction } from '@/lib/services/transactions'
import { withErrorHandler } from '@/lib/services/errorHandler'

export async function POST(req: Request) {
      const { data, error, statusCode } = await withErrorHandler(async () =>{
        const body = await req.json()
        const { userId, productId, quantity, total } = body
        return createTransaction({ userId, productId, quantity, total })
      })

      if (error) {
        return NextResponse.json({ error }, { status: statusCode })
      }

      return NextResponse.json(data)



}
