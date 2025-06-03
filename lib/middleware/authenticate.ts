// lib/authorize.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getAuthToken } from '@/lib/helpers/cookies';

export async function authorize(req: NextRequest) {
  // remove the jwt in client
  // const authHeader = req.headers.get("authorization");
  // if (!authHeader) {
  //   return NextResponse.json({ message: "Authorization header missing" }, { status: 401 });
  // }

  // const token = authHeader.split(" ")[1];
  const token = await getAuthToken()
  if (!token) {
    return NextResponse.json({ message: "Token missing" }, { status: 401 });
  }

  try {
    const secret = process.env.JWT_SECRET!;
    const payload = jwt.verify(token, secret);
    return { payload };
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}


export function withAuth(handler: (body: any, user: any) => Promise<Response>) {
  return async (req: NextRequest) => {
    const authResult = await authorize(req);
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const user = authResult.payload;

    let body = null;
    if (req.method === 'POST' || req.method === 'PUT') {
      try {
        body = await req.json();
      } catch (e) {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
      }
    }

    return handler(body, user);
  };
}