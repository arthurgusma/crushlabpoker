import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'
import prisma from './prisma'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image?: string | null
    }
  }
  interface User {
    id: string
    name: string
    email: string
    image?: string | null
  }
}

export const authOptions: NextAuthOptions = {
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
            email: user.email ?? '',
            name: user.displayName ?? '',
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
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        })

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              photoURL: user.image ?? '',
              id: user.id,
              createdAt: new Date(),
              lastLogin: new Date(),
            },
          })
        } else {
          await prisma.user.update({
            where: { email: user.email },
            data: { lastLogin: new Date() },
          })
        }
      } catch (error) {
        console.error('Error signing user in:', error)
        return false
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.name = token.name as string
        session.user.image = token.image as string
      }
      return session
    },
  },
}
