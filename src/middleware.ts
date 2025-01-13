import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './lib/i18nSettings'

const protectedRoutes = [
  '/en-US/home',
  '/pt-BR/home',
  '/en-US/billing',
  '/pt-BR/billing',
  '/en-US/billing/confirm',
  '/pt-BR/billing/confirm',
]

acceptLanguage.languages(languages)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
}

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  let lng
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    )
  }

  const isProtectedRoute = protectedRoutes.includes(path)
  const sessionCookie = req.cookies.get(
    process.env.NEXT_PUBLIC_AMBIENT === 'prod'
      ? '__Secure-next-auth.session-token'
      : 'next-auth.session-token',
  )

  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '')
    const lngInReferer = languages.find((l: string) =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next()
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer)
    }
    return response
  }

  return NextResponse.next()
}
