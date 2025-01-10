import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/home', '/billing', '/billing/confirm']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const sessionCookie = req.cookies.get(
    process.env.NEXT_PUBLIC_AMBIENT === 'prod'
      ? '__Secure-next-auth.session-token'
      : 'next-auth.session-token',
  )

  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if (!isProtectedRoute && sessionCookie) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
