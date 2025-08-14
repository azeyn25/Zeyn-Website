export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  return {
    hasStripeSecret: !!config.stripeSecretKey,
    hasStripePublic: !!config.public.stripePublishableKey,
    stripeSecretLength: config.stripeSecretKey?.length || 0,
    stripePublicLength: config.public.stripePublishableKey?.length || 0,
    stripeSecretPrefix: config.stripeSecretKey?.substring(0, 8) || 'none',
    stripePublicPrefix: config.public.stripePublishableKey?.substring(0, 8) || 'none',
    nodeEnv: process.env.NODE_ENV,
    envStripeSecret: !!process.env.STRIPE_SECRET_KEY,
    envStripePublic: !!process.env.STRIPE_PUBLISHABLE_KEY
  }
})