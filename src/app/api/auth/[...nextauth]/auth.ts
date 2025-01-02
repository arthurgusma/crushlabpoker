import { getServerSession } from 'next-auth'
import { authOptions } from './route'

export async function auth() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return { user: null }
  }

  return { user: session.user }
}
