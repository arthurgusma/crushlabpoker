import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { headers } = request
  const origin = headers.get('origin')

  if (!origin) {
    throw new Error('Request does not contain an origin header.')
  }

  cookies().set('session', '')
  return NextResponse.json({ message: 'Logged out', status: 200 })
}
