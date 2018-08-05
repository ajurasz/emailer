import stripePackage from 'stripe';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export const chargeCC = (token, amount, description) => {
  return stripe.charges.create({
    source: token.id,
    currency: 'usd',
    amount,
    description
  });
};
