import Pricing from '@/components/Pricing'
import Stripe from 'stripe'

export default async function BillingPage() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

  const { data } = await stripe.prices.list({ limit: 3 })
  const activePrices = data.filter((price) => price.active)

  return <Pricing prices={activePrices} />
}
