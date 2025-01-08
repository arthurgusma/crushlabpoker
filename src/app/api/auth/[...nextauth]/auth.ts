import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'

export async function auth() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return { user: null }
  }

  return { user: session.user }
}
