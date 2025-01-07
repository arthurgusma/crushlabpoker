import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { subscriptionId } = await req.json()

    try {
      await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true,
      })

      return NextResponse.json({ status: 200 }, { statusText: 'canceled' })
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      } else {
        return NextResponse.json(
          { error: 'An unknown error occurred' },
          { status: 500 },
        )
      }
    }
  }
}
