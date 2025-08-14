<script setup lang="ts">
definePageMeta({
  title: 'Checkout Cancelled'
})
</script>

<template>
  <div class="max-w-2xl mx-auto py-16 text-center">
    <div class="mb-8">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name="heroicons:x-mark-16-solid" class="w-8 h-8 text-gray-600" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Checkout Cancelled</h1>
    </div>

    <div class="space-y-4 text-gray-600 dark:text-gray-400">
      <p class="text-lg">
        No worries! Your order has been cancelled and no payment was processed.
      </p>
      
      <p>
        Your items are still in your cart if you'd like to continue shopping or try checking out again.
      </p>

      <div class="pt-8">
        <div class="flex justify-center space-x-4">
          <NuxtLink 
            to="/prints" 
            class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </NuxtLink>
          
          <button 
            onclick="window.history.back()" 
            class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>