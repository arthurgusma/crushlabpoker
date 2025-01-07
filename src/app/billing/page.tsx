import Pricing from '@/components/Pricing'
import prisma from '@/lib/prisma'
import Stripe from 'stripe'
import { auth } from '../api/auth/[...nextauth]/auth'
import SubscriptionPageData from '@/components/SubscriptionPageData'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function BillingPage() {
  const subscription = await getUserSubscription()

  if (subscription?.length) {
    const subscriptionData: (Stripe.Subscription | Stripe.PaymentIntent)[] =
      JSON.parse(JSON.stringify(subscription))
    return <SubscriptionPageData subscription={subscriptionData} />
  }

  const { data } = await stripe.prices.list()
  const activePrices = data.filter((price) => price.active)

  return <Pricing prices={activePrices} />
}

async function getUserSubscription(): Promise<
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
