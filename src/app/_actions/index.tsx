'use server'
import Stripe from 'stripe'

import { auth } from '../api/auth/[...nextauth]/auth'
import prisma from '@/lib/prisma'
import { TABLE_POSITIONS } from '@/constants/gloabal'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function getUserSubscription(): Promise<
  (Stripe.Subscription | Stripe.PaymentIntent)[] | null
> {
  'use server'

  try {
    const { user } = await auth()

    const userData = await prisma.user.findUnique({
      where: {
        id: user?.id as string,
      },
      include: {
        purchases: true,
      },
    })

    const response = await Promise.all(
      userData?.purchases.map(async (sub) => {
        if (sub.mode === 'payment') {
          const response = await stripe.paymentIntents.retrieve(sub.id)
          return response.status === 'succeeded' ? response : null
        } else if (sub.mode === 'subscription') {
          const response = await stripe.subscriptions.retrieve(sub.id)
          return response.status === 'active' ? response : null
        }
        return null
      }) || [],
    )

    const filteredResponse = response.filter((sub) => sub !== null)

    return filteredResponse as (Stripe.Subscription | Stripe.PaymentIntent)[]
  } catch (error) {
    console.error(error)
  }
  return null
}

export async function GetTablePositions(): Promise<string[]> {
  'use server'

  const response = await getUserSubscription()

  if (response?.length) return TABLE_POSITIONS

  return [TABLE_POSITIONS[0]]
}
