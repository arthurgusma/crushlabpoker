import { NextResponse } from 'next/server'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebaseConfig'
import { FirebaseError } from 'firebase/app'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body)
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password,
    )

    const createdUser = userCredential.user

    await prisma.user.create({
      data: {
        email: body.email.toLowerCase(),
        id: createdUser.uid,
        name: body.fullName,
        photoURL: createdUser.photoURL || '',
      },
    })

    return NextResponse.json(
      { message: 'User created successfully', uid: createdUser.uid },
      { status: 201 },
    )
  } catch (error: unknown) {
    console.error('Error creating user:', error)
    if (
      error instanceof FirebaseError &&
      error.code === 'auth/email-already-in-use'
    ) {
      return NextResponse.json(
        { error: 'Email já cadastrado, entre com email e senha' },
        { status: 403 },
      )
    }
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        code: 500,
      },
      { status: 500 },
    )
  }
}
