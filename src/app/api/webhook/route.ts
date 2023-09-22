import * as admin from "firebase-admin";

// Adding Firebase for backend
const serviceAccount = require("@/../permissions.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish connection with Stripe
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2023-08-16",
});

const fullfilOrder = async (session: any) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => console.log(`SUCCESS ORDER: ${session.id}`));
};

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature") as string;
  const webhookSecret = process.env.STRIPE_SIGNING_SECRET!;
  let event: Stripe.Event;

  try {
    if (!signature || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    return new Response(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"}`,
      { status: 400 }
    );
  }

  // Handling the Checkout Session Completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    return fullfilOrder(session)
      .then(() => new Response(null, { status: 200 }))
      .catch(
        (err) =>
          new Response(
            `Webhook Error: ${
              err instanceof Error ? err.message : "Unknown Error"
            }`,
            { status: 400 }
          )
      );
  }
  return new Response(null, { status: 200 });
}
