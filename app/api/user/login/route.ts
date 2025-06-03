import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/lib/auth/login";
import { withErrorHandler } from '@/lib/services/errorHandler'
import { userLoginSchema } from '@/lib/validators/loginValidator'

export async function POST(req: NextRequest) {

    const { data, error, statusCode } = await withErrorHandler(async() => {
        const {username,password}:{username:string, password:string} = await req.json()
          const validated = userLoginSchema.parse({username, password})
        return loginUser(validated);
    })

  
   if (error) 
  return NextResponse.json({ error }, { status: statusCode })

  return NextResponse.json({ data });
}
