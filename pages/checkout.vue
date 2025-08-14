<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js'
import { useCartStore } from '~/stores/cart'

definePageMeta({
  title: 'Checkout'
})

const cartStore = useCartStore()
const isLoading = ref(false)
const error = ref('')

// Load Stripe using runtime config
const config = useRuntimeConfig()
const stripePromise = loadStripe(config.public.stripePublishableKey)

// Customer information
const customerInfo = reactive({
  email: '',
  firstName: '',
  lastName: '',
  address: {
    line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'US'
  }
})

const isFormValid = computed(() => {
  return customerInfo.email && 
         customerInfo.firstName && 
         customerInfo.lastName &&
         customerInfo.address.line1 &&
         customerInfo.address.city &&
         customerInfo.address.state &&
         customerInfo.address.postal_code
})

const handleCheckout = async () => {
  if (!isFormValid.value) {
    error.value = 'Please fill in all required fields'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    // Create checkout session on your server
    const { data } = await $fetch('/api/create-checkout-session', {
      method: 'POST',
      body: {
        items: cartStore.items,
        customerInfo: customerInfo
      }
    })

    const stripe = await stripePromise
    if (!stripe) throw new Error('Stripe failed to load')

    // Redirect to Stripe checkout
    const { error: stripeError } = await stripe.redirectToCheckout({
      sessionId: data.sessionId
    })

    if (stripeError) {
      throw stripeError
    }
  } catch (err) {
    console.error('Checkout error:', err)
    error.value = err.message || 'An error occurred during checkout'
  } finally {
    isLoading.value = false
  }
}

// Load cart from storage on mount
onMounted(() => {
  cartStore.loadFromStorage()
  
  // Redirect if cart is empty
  if (cartStore.items.length === 0) {
    navigateTo('/prints')
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Order Summary -->
      <div class="order-2 lg:order-1">
        <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
        
        <div class="space-y-4 mb-6">
          <div 
            v-for="item in cartStore.items" 
            :key="`${item.productId}-${item.size.id}-${item.material.id}`"
            class="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div class="flex-shrink-0 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <NuxtImg 
                :src="item.product.image.src"
                :alt="item.product.image.alt"
                class="w-full h-full object-cover"
                sizes="80px"
              />
            </div>
            <div class="flex-1">
              <h4 class="font-medium">{{ item.product.title }}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ item.size.name }} • {{ item.material.name }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Quantity: {{ item.quantity }}
              </p>
              <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>
        </div>

        <div class="border-t pt-4">
          <div class="flex justify-between items-center text-lg font-semibold">
            <span>Total</span>
            <span>${{ cartStore.total.toFixed(2) }}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Shipping calculated at checkout
          </p>
        </div>
      </div>

      <!-- Customer Information -->
      <div class="order-1 lg:order-2">
        <h2 class="text-xl font-semibold mb-4">Customer Information</h2>
        
        <form @submit.prevent="handleCheckout" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name *
              </label>
              <input
                v-model="customerInfo.firstName"
                type="text"
                required
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name *
              </label>
              <input
                v-model="customerInfo.lastName"
                type="text"
                required
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email *
            </label>
            <input
              v-model="customerInfo.email"
              type="email"
              required
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <h3 class="text-lg font-medium mt-6 mb-3">Shipping Address</h3>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Address *
            </label>
            <input
              v-model="customerInfo.address.line1"
              type="text"
              required
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City *
              </label>
              <input
                v-model="customerInfo.address.city"
                type="text"
                required
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                State *
              </label>
              <input
                v-model="customerInfo.address.state"
                type="text"
                required
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ZIP Code *
            </label>
            <input
              v-model="customerInfo.address.postal_code"
              type="text"
              required
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div v-if="error" class="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-md p-3">
            <p class="text-sm text-red-800 dark:text-red-200">{{ error }}</p>
          </div>

          <div class="space-y-3">
            <!-- Back to Home Button -->
            <NuxtLink 
              to="/"
              class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon name="heroicons:arrow-left-16-solid" class="w-4 h-4 mr-2" />
              Back to Home
            </NuxtLink>

            <!-- Proceed to Payment Button -->
            <button
              type="submit"
              :disabled="!isFormValid || isLoading"
              class="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isLoading">Proceed to Payment</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </div>
        </form>

        <div class="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Icon name="heroicons:lock-closed-16-solid" class="w-4 h-4" />
          <span>Secured by Stripe</span>
        </div>
      </div>
    </div>
  </div>
</template>