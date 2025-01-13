import Pricing from '@/components/Pricing'
import Stripe from 'stripe'
import SubscriptionPageData from '@/components/SubscriptionPageData'
import { getUserSubscription } from '../../_actions'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const dynamic = 'force-dynamic'

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
