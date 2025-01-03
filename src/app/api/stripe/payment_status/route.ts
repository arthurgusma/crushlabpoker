import prisma from '@/lib/prisma'
import { Prisma, Purchase } from '@prisma/client'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json(
      {
        statusText: 'Missing session_id in query parameters.',
      },
      { status: 400 },
    )
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (!session) {
      return NextResponse.json(
        {
          statusText: 'Session not found.',
        },
        { status: 401 },
      )
    }

    const purchaseId = session?.payment_intent
      ? (session.payment_intent as string)
      : session?.subscription
        ? (session.subscription as string)
        : session.id

    const subscriptionData: Omit<Purchase, 'userId'> = {
      id: purchaseId,
      createdAt: new Date(session.created * 1000),
      customer: (session?.customer as string) || null,
      mode: session.mode,
      active: true,
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

    return NextResponse.json(
      {
        statusText: 'Payment session retrieved and user updated successfully.',
      },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error processing request:', error)

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return NextResponse.json(
        {
          statusText: 'Payment already saved.',
        },
        { status: 208 },
      )
    }
    return NextResponse.json(
      {
        statusText: 'Failed to process request.',
      },
      { status: 500 },
    )
  }
}
