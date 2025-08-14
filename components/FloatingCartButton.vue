<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const showCart = ref(false)

const toggleCart = () => {
  showCart.value = !showCart.value
}

const closeCart = () => {
  showCart.value = false
}

onMounted(() => {
  cartStore.loadFromStorage()
})
</script>

<template>
  <!-- Floating Cart Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Cart Button -->
    <button 
      v-if="cartStore.itemCount > 0"
      @click="toggleCart"
      class="relative bg-black dark:bg-white text-white dark:text-black rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="View Shopping Cart"
    >
      <Icon name="heroicons:shopping-bag" class="w-6 h-6" />
      
      <!-- Cart Count Badge -->
      <span 
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium"
      >
        {{ cartStore.itemCount > 9 ? '9+' : cartStore.itemCount }}
      </span>
    </button>
  </div>

  <!-- Shopping Cart Modal -->
  <ShoppingCart :isOpen="showCart" @close="closeCart" />
</template>