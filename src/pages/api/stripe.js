import Stripe from "stripe";

const stripe = new Stripe('sk_test_51N1sTXSGLzKrHE9vxrtXbM6r4MLCcDkGJUgzHbwdfG9Kq9XDSmaoquhfnmxzAEkUqMXzLhMGnojUBqcePGagIZBq00VxAq6BPV')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `https://shopkart-app.vercel.app/checkout-success`,
        cancel_url: `https://shopkart-app.vercel.app/cart`
      })
      return res.status(201).json(session)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
