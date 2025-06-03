// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const { pathname } = req.nextUrl

  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/products', req.url))
  }

  return NextResponse.next()
}

// Only run middleware on the login page
export const config = {
  matcher: ['/'],
}
