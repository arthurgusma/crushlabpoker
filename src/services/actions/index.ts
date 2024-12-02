'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function redirectHomeIfLoggedIn() {
  redirect('/home')
}

export async function setCookieSession(userId: string, expiresAt: string) {
  const cookieStore = cookies()
  const expiresDate = new Date(expiresAt).toUTCString()

  cookieStore.set('session', JSON.stringify({ userId, expiresAt }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(expiresDate),
    sameSite: 'lax',
    path: '/',
  })
}
