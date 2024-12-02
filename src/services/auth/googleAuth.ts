import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebaseConfig'
import { saveUserData } from '@/services/user/userService'
import { ProvidedUserData } from '@/context/UserContext/types'
import { redirectHomeIfLoggedIn, setCookieSession } from '@/services/actions'

export const handleGoogleSignIn = async (): Promise<
  ProvidedUserData | undefined
> => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result?.user

    if (user) {
      const { uid } = user
      const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()
      await saveUserData(user)
      setCookieSession(uid, expiresAt)

      redirectHomeIfLoggedIn()
      return {
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      }
    }
  } catch (error) {
    console.error('Error signing in with Google:', error)
  }
}
