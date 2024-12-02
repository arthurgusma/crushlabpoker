import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const protectedRoutes = ['/home', '/billing', '/help']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const cookieValue = (await cookies()).get('session')?.value
  const cookie = cookieValue ? JSON.parse(cookieValue) : null

  if (isProtectedRoute && (!cookie || !cookie.userId)) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
