
'use server'

import { NextResponse } from 'next/server'
import { registerUser } from '@/lib/services/users'
import { withErrorHandler } from '@/lib/services/errorHandler'
import { createUserSchema } from '@/lib/validators/userValidator'

export async function POST(req: Request) { 
    
  const { data, error, statusCode } = await withErrorHandler(async() => {
    const {username,password, firstname, lastname}:{username:string, password:string, firstname:string, lastname:string} = await req.json()
    const validated = createUserSchema.parse({username,password, firstname, lastname})
    return registerUser(validated)
  })

  if (error) 
  return NextResponse.json({ error }, { status: statusCode })
  

  return NextResponse.json(data)

}
