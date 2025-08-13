<script setup lang="ts">
import type { Product, PrintSize, PrintMaterial } from '~/types/product'
import { PRINT_SIZES, PRINT_MATERIALS } from '~/types/product'

interface Props {
  product: Product | null
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const cartStore = useCartStore()

const selectedSize = ref<PrintSize>(PRINT_SIZES[0])
const selectedMaterial = ref<PrintMaterial>(PRINT_MATERIALS[0])
const isAdding = ref(false)
const showFullscreen = ref(false)

const currentPrice = computed(() => 
  cartStore.calculatePrice(selectedSize.value, selectedMaterial.value)
)

const addToCollection = async () => {
  if (!props.product) return
  
  isAdding.value = true
  try {
    cartStore.addToCart(props.product, selectedSize.value, selectedMaterial.value)
    emit('close')
  } finally {
    isAdding.value = false
  }
}

const openFullscreen = () => {
  showFullscreen.value = true
}

const closeFullscreen = () => {
  showFullscreen.value = false
}

// Reset selections when modal opens
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    selectedSize.value = PRINT_SIZES[0]
    selectedMaterial.value = PRINT_MATERIALS[0]
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Simple backdrop -->
    <div
      v-if="isOpen && product"
      class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      @click.self="emit('close')"
    >
      <!-- Modal container - Fixed height, no scroll -->
      <div class="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col" @click.stop>
        
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div>
            <h2 class="text-2xl font-medium text-gray-900 dark:text-white">{{ product.title }}</h2>
            <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {{ product.limitedEdition ? 'Limited Edition Fine Art Print' : 'Fine Art Print' }}
            </p>
          </div>
          <button 
            @click="emit('close')"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Content - simple grid -->
        <div class="grid md:grid-cols-2 gap-6 p-6 flex-1 min-h-0">
          
          <!-- Image Section - CONTAINED -->
          <div 
            class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center overflow-hidden relative group cursor-pointer"
            @click="openFullscreen"
          >
            <NuxtImg
              :src="product.image.src"
              :alt="product.image.alt"
              class="max-w-full max-h-full object-contain rounded-lg shadow-lg pointer-events-none"
              :width="product.image.width"
              :height="product.image.height"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center rounded-xl pointer-events-none">
              <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                <div class="bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span class="text-white font-medium text-sm">View Fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Details Section - SIMPLE -->
          <div class="space-y-6">
            
            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              This exceptional piece captures authentic moments through masterful composition. 
              Produced using museum-quality archival materials for collectors who appreciate exceptional craftsmanship.
            </p>

            <!-- Size Selection -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Select Size</h3>
              <select 
                v-model="selectedSize" 
                class="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium focus:border-black dark:focus:border-white transition-colors"
              >
                <option 
                  v-for="size in PRINT_SIZES" 
                  :key="size.id" 
                  :value="size"
                >
                  {{ size.name }} ({{ size.dimensions }}) - ${{ size.basePrice }}
                </option>
              </select>
            </div>

            <!-- Purchase -->
            <div class="border-t pt-6 space-y-4">
              <button
                @click="addToCollection"
                :disabled="isAdding"
                class="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-8 rounded-xl font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                <span v-if="!isAdding">Add to Collection - ${{ currentPrice }}</span>
                <span v-else>Adding to Collection...</span>
              </button>

              <p class="text-xs text-gray-500 text-center">
                Museum-grade materials • Worldwide shipping • Certificate included
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Image Overlay -->
    <div
      v-if="showFullscreen"
      class="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
      @click="closeFullscreen"
    >
      <div class="relative w-full h-full flex items-center justify-center p-8">
        <NuxtImg
          :src="product.image.src"
          :alt="product.image.alt"
          class="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
          :width="product.image.width"
          :height="product.image.height"
        />
        <button 
          @click.stop="closeFullscreen"
          class="absolute top-8 right-8 p-3 rounded-full bg-black/70 hover:bg-black/90 transition-colors z-10"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>