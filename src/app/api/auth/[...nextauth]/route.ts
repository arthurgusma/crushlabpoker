import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 3 * 24 * 60 * 60,
  },
  secret: process.env.SECRET,
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password,
          )
          const user = userCredential.user

          return {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
          }
        } catch (error) {
          console.error('Error signing in:', error)
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email) {
          throw new Error('User email is undefined')
        }
        const userRef = doc(db, 'users', user.id)

        const userDoc = await getDoc(userRef)

        if (!userDoc.exists()) {
          await setDoc(userRef, {
            displayName: user.name,
            email: user.email,
            lastLogin: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            photoURL: user.image || '',
            uid: user.id,
          })
        } else {
          await setDoc(userRef, {
            ...userDoc.data(),
            lastLogin: new Date().toISOString(),
          })
        }
      } catch (error) {
        console.error('Error creating user:', error)
        return false
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
  },
})

export { handler as GET, handler as POST }
