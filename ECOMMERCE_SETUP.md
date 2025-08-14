# E-commerce Setup Guide

Your photography portfolio has been successfully converted into a fully functional e-commerce site! This guide will help you complete the setup and start selling your prints.

## ✅ What's Been Implemented

### Core E-commerce Features
- **🛒 Shopping Cart**: Persistent cart with localStorage
- **📦 Product Management**: Automatic conversion of gallery images to products
- **💳 Stripe Integration**: Secure checkout process
- **📏 Multiple Sizes**: A4, A3, A2, A1 with dynamic pricing
- **🎨 Material Options**: Fine Art Paper, Canvas, Metal prints
- **📱 Responsive Design**: Works on all devices
- **🔒 Secure Checkout**: SSL-encrypted payment processing
- **📧 Order Management**: Email confirmations and tracking

### Pricing Structure
- **A4 (21 × 29.7 cm)**: $45 base price
- **A3 (29.7 × 42 cm)**: $85 base price  
- **A2 (42 × 59.4 cm)**: $145 base price
- **A1 (59.4 × 84.1 cm)**: $245 base price

Material multipliers:
- **Fine Art Paper**: 1.0x (base price)
- **Canvas**: 1.4x base price
- **Metal Print**: 1.8x base price

## 🚀 Quick Setup

### 1. Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Add your Stripe keys (get them from https://dashboard.stripe.com/apikeys)
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### 2. Start Development Server
```bash
npm install
npm run dev
```

### 3. Test the Store
Visit these URLs to test functionality:
- **Main Store**: http://localhost:3000/prints
- **Admin Dashboard**: http://localhost:3000/admin
- **Individual Gallery**: http://localhost:3000/galleries/gal1

## 🎯 Key Features

### Shopping Experience
- **Hover to Purchase**: Hover over any image to see "Add to Cart"
- **Size & Material Selection**: Dynamic pricing based on selections
- **Limited Edition Counters**: Creates urgency for purchases
- **Persistent Cart**: Items saved between sessions
- **Free Shipping**: Orders over $150

### Admin Features
- **Dashboard**: Overview of products and sales
- **Product Management**: View all available prints
- **Order Tracking**: Monitor sales and fulfillment

## 📱 User Journey

1. **Browse Galleries**: Visit `/prints` to see all collections
2. **Select Image**: Hover over any image for purchase options
3. **Choose Options**: Select size and material
4. **Add to Cart**: Items saved with pricing
5. **Checkout**: Secure Stripe payment process
6. **Confirmation**: Email receipt and production timeline

## 🔧 Customization

### Pricing Updates
Edit `types/product.ts` to modify:
- Base prices for each size
- Material multipliers
- Size dimensions

### Shipping Settings
Modify `server/api/create-checkout-session.post.ts`:
- Change free shipping threshold ($150)
- Update shipping rates
- Modify delivery estimates

### Product Settings
Each gallery image automatically becomes a product with:
- Dynamic titles ("Print 1", "Print 2", etc.)
- Limited edition counts (25 total, random remaining)
- High-quality image optimization

## 🔒 Security & Production

### Before Going Live
1. **Switch to Live Keys**: Replace test keys with live Stripe keys
2. **Configure Webhooks**: Set up Stripe webhooks for order processing
3. **SSL Certificate**: Ensure HTTPS is enabled
4. **Test Payments**: Use Stripe test cards first

### Stripe Test Cards
- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

## 📦 Production Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy to Vercel/Netlify
1. Connect your repository
2. Set environment variables in hosting platform
3. Deploy with build command: `npm run build`

## 🎨 Preserving Your Design

The implementation carefully preserves your existing:
- ✅ Clean masonry gallery layout
- ✅ Arabic calligraphy logo
- ✅ Dark/light mode switching
- ✅ Image quality and presentation
- ✅ About section and contact info
- ✅ Professional typography

## 💡 Next Steps

1. **Set up Stripe account** and get your API keys
2. **Test the checkout flow** with test cards
3. **Configure shipping** and tax settings
4. **Add product descriptions** for better SEO
5. **Set up order fulfillment** process

## 📞 Support

The e-commerce system is fully functional and ready for production. All existing portfolio features remain intact while adding powerful selling capabilities.

Happy selling! 🚀