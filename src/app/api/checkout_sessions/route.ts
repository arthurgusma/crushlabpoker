import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  const { headers } = request;
  const origin = headers.get("origin");

  if (!origin) {
    throw new Error("Request does not contain an origin header.");
  }

  try {
    const products = await stripe.products.list();

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: products.data.map(product => ({
         quantity: 1,
         price: product.default_price as string,
      })),
      mode: 'subscription',
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}