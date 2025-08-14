import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // Debug logging
  console.log('Environment variables:', {
    hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
    configStripeSecret: !!config.stripeSecretKey,
    stripeSecretLength: config.stripeSecretKey?.length || 0
  })
  
  if (!config.stripeSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: `Stripe secret key is not configured. Available: ${!!process.env.STRIPE_SECRET_KEY}`
    })
  }

  const stripe = new Stripe(config.stripeSecretKey, {
    apiVersion: '2023-10-16',
  })

  const body = await readBody(event)
  console.log('Request body:', JSON.stringify(body, null, 2))
  
  const { items, customerInfo } = body

  if (!items || !Array.isArray(items) || items.length === 0) {
    console.log('Invalid items:', { items, isArray: Array.isArray(items), length: items?.length })
    throw createError({
      statusCode: 400,
      statusMessage: 'No items provided'
    })
  }

  console.log('Valid items received:', items.length)

  try {
    console.log('Processing checkout for items:', items.length)
    
    // Calculate shipping (flat rate for now)
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    const shippingCost = subtotal >= 150 ? 0 : 15 // Free shipping over $150
    
    console.log('Subtotal:', subtotal, 'Shipping:', shippingCost)

    // Create line items for Stripe
    const lineItems = items.map(item => {
      console.log('Processing item:', item.product?.title || 'Unknown product')
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.product?.title || 'Photography Print'} - ${item.size?.name || 'Medium'} ${item.material?.name || 'Premium'}`,
            images: item.product?.image?.src ? [item.product.image.src] : [],
            metadata: {
              productId: item.productId || 'unknown',
              size: item.size?.name || 'Medium',
              material: item.material?.name || 'Premium',
              dimensions: item.size?.dimensions || 'Standard'
            }
          },
          unit_amount: Math.round((item.price || 0) * 100), // Convert to cents
        },
        quantity: item.quantity || 1,
      }
    })

    // Add shipping if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      })
    }

    // Create Stripe checkout session
    const clientURL = getClientURL(event)
    const successURL = `${clientURL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelURL = `${clientURL}/checkout/cancelled`
    
    console.log('URLs for Stripe:', { clientURL, successURL, cancelURL })
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successURL,
      cancel_url: cancelURL,
      customer_email: customerInfo?.email || '',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'DE', 'FR'], // Expand as needed
      },
      metadata: {
        customerFirstName: customerInfo?.firstName || '',
        customerLastName: customerInfo?.lastName || '',
        itemCount: items.length.toString(),
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0, // We already included shipping in line items
              currency: 'usd',
            },
            display_name: subtotal >= 150 ? 'Free shipping' : 'Standard shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 7,
              },
              maximum: {
                unit: 'business_day',
                value: 10,
              },
            },
          },
        },
      ],
    })

    return {
      data: {
        sessionId: session.id,
        url: session.url
      }
    }
  } catch (error) {
    console.error('Stripe checkout session creation failed:', error)
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      stack: error.stack
    })
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to create checkout session: ${error.message}`
    })
  }
})

function getClientURL(event) {
  const headers = getHeaders(event)
  const host = headers.host || 'localhost:3000'
  const protocol = headers['x-forwarded-proto'] || (host.includes('localhost') ? 'http' : 'https')
  const url = `${protocol}://${host}`
  
  console.log('Generated client URL:', { host, protocol, url, headers: JSON.stringify(headers, null, 2) })
  
  return url
}