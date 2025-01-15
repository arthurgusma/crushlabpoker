import { NextResponse } from 'next/server'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(request: Request) {
  const origin = request.headers.get('origin')

  console.log(origin)

  if (!origin) {
    throw new Error('Request does not contain an origin header.')
  }

  try {
    const body = await request.json()
    const { language, price, type } = body

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          quantity: 1,
          price,
        },
      ],
      locale: language,
      mode: type,
      return_url: `${origin}/en-US/billing/confirm?session_id={CHECKOUT_SESSION_ID}`,
    })
    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      status: 500,
      statusText: 'Internal Server Error',
    })
  }
}
