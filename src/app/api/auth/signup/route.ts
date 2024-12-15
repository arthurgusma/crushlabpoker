import { NextResponse } from 'next/server'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db, auth } from '@/firebaseConfig'
import { FirebaseError } from 'firebase/app'

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

    const userRef = doc(db, 'users', createdUser.uid)
    await setDoc(userRef, {
      displayName: body.fullName,
      email: createdUser.email,
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      photoURL: createdUser.photoURL || '',
      uid: createdUser.uid,
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
