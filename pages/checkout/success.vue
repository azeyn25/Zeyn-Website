<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

definePageMeta({
  title: 'Order Success'
})

const route = useRoute()
const cartStore = useCartStore()

const sessionId = route.query.session_id as string

// Clear cart on success
onMounted(() => {
  if (sessionId) {
    cartStore.clearCart()
  }
})
</script>

<template>
  <div class="max-w-2xl mx-auto py-16 text-center">
    <div class="mb-8">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name="heroicons:check-16-solid" class="w-8 h-8 text-green-600" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Order Successful!</h1>
    </div>

    <div class="space-y-4 text-gray-600 dark:text-gray-400">
      <p class="text-lg">
        Thank you for your purchase! Your order has been received and will be processed within 1-2 business days.
      </p>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h2 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">What happens next?</h2>
        <div class="space-y-3 text-left">
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-blue-600 text-sm font-medium">1</span>
            </div>
            <div>
              <p class="font-medium text-gray-900 dark:text-gray-100">Order Confirmation</p>
              <p class="text-sm">You'll receive an email confirmation with your order details.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-blue-600 text-sm font-medium">2</span>
            </div>
            <div>
              <p class="font-medium text-gray-900 dark:text-gray-100">Print Production</p>
              <p class="text-sm">Your prints will be carefully produced using premium archival materials.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-blue-600 text-sm font-medium">3</span>
            </div>
            <div>
              <p class="font-medium text-gray-900 dark:text-gray-100">Shipping & Delivery</p>
              <p class="text-sm">Your order will be carefully packaged and shipped within 7-10 business days.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 space-y-4">
        <p>
          Have questions about your order? 
          <NuxtLink to="/#contact" class="text-blue-600 hover:text-blue-800 underline">
            Contact us
          </NuxtLink>
        </p>
        
        <div class="flex justify-center space-x-4">
          <NuxtLink 
            to="/prints" 
            class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </NuxtLink>
          
          <NuxtLink 
            to="/" 
            class="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>