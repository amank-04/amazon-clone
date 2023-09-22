import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2023-08-16",
});

export async function POST(req: Request) {
  const body = await req.json();
  const cartItems: ProductItem[] = body.items;
  const email: string = body.email;

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  }));

  const origin = req.headers.get("origin");

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`,
    customer_email: email,
    metadata: {
      email,
      images: JSON.stringify(cartItems.map((item) => item.image)),
    },
  });
  return NextResponse.json({ id: session.id }, { status: 200 });
}
