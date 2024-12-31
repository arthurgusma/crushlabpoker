import prisma from '@/lib/prisma'
import { Purchase } from '@prisma/client'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({
      status: 400,
      statusText: 'Missing session_id in query parameters.',
    })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (!session) {
      return NextResponse.json({
        status: 404,
        statusText: 'Session not found.',
      })
    }

    const subscriptionData: Omit<Purchase, 'userId'> = {
      id: session.id,
      createdAt: new Date(session.created * 1000),
      mode: session.mode,
    }

    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    if (!token?.id || typeof token.id !== 'string')
      throw new Error('User not found')

    await prisma.purchase.create({
      data: {
        userId: token.id as string,
        ...subscriptionData,
      },
    })

    return NextResponse.json({
      status: 200,
      statusText: 'Payment session retrieved and user updated successfully.',
    })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({
      status: 500,
      statusText: 'Failed to process request.',
    })
  }
}
