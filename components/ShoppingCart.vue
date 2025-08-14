<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const cartStore = useCartStore()

const closeCart = () => {
  emit('close')
}

const removeItem = (productId: string, sizeId: string, materialId: string) => {
  cartStore.removeFromCart(productId, sizeId, materialId)
}

const updateQuantity = (productId: string, sizeId: string, materialId: string, quantity: number) => {
  cartStore.updateQuantity(productId, sizeId, materialId, quantity)
}

const proceedToCheckout = () => {
  navigateTo('/checkout')
}
</script>

<template>
  <!-- Cart Overlay -->
  <div 
    v-if="props.isOpen"
    class="fixed inset-0 z-50 overflow-hidden"
    @click="closeCart"
  >
      <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
      
      <!-- Cart Panel -->
      <div 
        class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl transform transition-transform"
        @click.stop
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Your Collection ({{ cartStore.itemCount }})
            </h2>
            <button 
              @click="closeCart"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <Icon name="heroicons:x-mark-20-solid" class="w-5 h-5" />
            </button>
          </div>

          <!-- Cart Items -->
          <div class="flex-1 overflow-y-auto p-4">
            <div v-if="cartStore.items.length === 0" class="text-center py-8">
              <Icon name="heroicons:shopping-bag-20-solid" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p class="text-gray-500 dark:text-gray-400 font-medium">Your collection awaits your first piece</p>
            </div>

            <div v-else class="space-y-4">
              <div 
                v-for="item in cartStore.items" 
                :key="`${item.productId}-${item.size.id}-${item.material.id}`"
                class="flex space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <!-- Product Image -->
                <div class="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <NuxtImg 
                    :src="item.product.image.src"
                    :alt="item.product.image.alt"
                    class="w-full h-full object-cover"
                    sizes="64px"
                  />
                </div>

                <!-- Product Details -->
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {{ item.product.title }}
                  </h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {{ item.size.name }} • {{ item.material.name }}
                  </p>
                  <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center space-x-2">
                      <button 
                        @click="updateQuantity(item.productId, item.size.id, item.material.id, item.quantity - 1)"
                        class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                      >
                        <Icon name="heroicons:minus-16-solid" class="w-3 h-3" />
                      </button>
                      <span class="text-sm font-semibold">{{ item.quantity }}</span>
                      <button 
                        @click="updateQuantity(item.productId, item.size.id, item.material.id, item.quantity + 1)"
                        class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                      >
                        <Icon name="heroicons:plus-16-solid" class="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      @click="removeItem(item.productId, item.size.id, item.material.id)"
                      class="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Icon name="heroicons:trash-20-solid" class="w-4 h-4" />
                    </button>
                  </div>
                  <p class="text-sm font-bold text-gray-900 dark:text-gray-100 mt-1">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div v-if="cartStore.items.length > 0" class="border-t dark:border-gray-700 p-4 space-y-4">
            <div class="flex items-center justify-between text-lg font-bold">
              <span>Total</span>
              <span>${{ cartStore.total.toFixed(2) }}</span>
            </div>
            
            <button 
              @click="proceedToCheckout"
              class="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Secure Your Collection
            </button>
            
            <button 
              @click="closeCart"
              class="w-full border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
</template>