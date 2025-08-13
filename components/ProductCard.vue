<script setup lang="ts">
import type { Product } from '~/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="group relative">
    <!-- Professional Image Display -->
    <div 
      class="rounded-xl overflow-hidden bg-zinc-800 dark:bg-zinc-200 relative cursor-pointer transition-all duration-300 hover:shadow-2xl"
      @click="openModal"
    >
      <NuxtImg 
        :src="product.image.src" 
        :alt="product.image.alt" 
        sizes="sm:90vw md:50vw lg:30vw" 
        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        :width="product.image.width" 
        :height="product.image.height" 
        loading="lazy" 
      />
      
      <!-- Professional Overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <span class="text-white font-medium text-sm">View & Acquire</span>
          </div>
        </div>
      </div>
      
    </div>

    <!-- Product info (clean, professional) -->
    <div class="mt-4">
      <h3 class="font-medium text-gray-900 dark:text-gray-100 text-center text-lg tracking-wide">{{ product.title }}</h3>
      <p class="text-gray-500 dark:text-gray-400 text-center text-xs mt-1 uppercase tracking-wider">
        {{ product.limitedEdition ? 'Limited Edition Print' : 'Fine Art Print' }}
      </p>
    </div>

    <!-- Professional Modal -->
    <PhotoDetailModal 
      :product="product" 
      :isOpen="showModal" 
      @close="closeModal" 
    />
  </div>
</template>