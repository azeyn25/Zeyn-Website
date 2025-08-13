<script setup lang="ts">
import type { PropType } from "vue";
import type { Image } from "../../types/image";
import type { Product } from "../../types/product";

const props = defineProps({
  image1: {
    type: Object as PropType<Image>,
    required: false,
  },
  image2: {
    type: Object as PropType<Image>,
    required: false,
  },
  image3: {
    type: Object as PropType<Image>,
    required: false,
  },
  image4: {
    type: Object as PropType<Image>,
    required: false,
  },
  image5: {
    type: Object as PropType<Image>,
    required: false,
  },
  image6: {
    type: Object as PropType<Image>,
    required: false,
  },
  image7: {
    type: Object as PropType<Image>,
    required: false,
  },
});

const defaultImage = "img/placeholder.jpg";

// Convert images to products
const createProduct = (image: Image | undefined, id: string, title: string, isLimited: boolean = false): Product | null => {
  if (!image) return null;
  return {
    id,
    title,
    slug: id,
    image: image,
    createdAt: new Date().toISOString(),
    featured: true,
    limitedEdition: isLimited
  };
};

const products = [
  createProduct(props.image1, 'sinai', 'Desert Solitude', true), // Limited Edition
  createProduct(props.image2, 'aswan', 'River Stories'),
  createProduct(props.image3, 'berlin', 'Urban Poetry', true), // Limited Edition  
  createProduct(props.image5, 'cairo2', 'City Rhythms'),
  createProduct(props.image4, 'cairo', 'Street Chronicles'),
  createProduct(props.image6, 'giza', 'Ancient Echoes'),
].filter(Boolean);

const showModal = ref(false);
const selectedProduct = ref<Product | null>(null);

const openModal = (product: Product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
};
</script>
<template>
  <div class="not-prose mt-16 sm:mt-24 content-visibility-visible contain-intrinsic-size-[auto_600px]">
    <div class="flex items-center justify-center gap-5 py-4 sm:gap-6 relative z-20">
      <!-- col1 -->
      <div class="hidden lg:flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="3">
        <div 
          class="relative aspect-[2/3] w-36 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[0] && openModal(products[0])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image1?.src ? image1.src : defaultImage"
            :alt="image1?.alt ? image1.alt : 'No alt text'"
            :width="image1?.width ? image1.width : 1"
            :height="image1?.height ? image1.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- col2 -->
      <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="1">
        <div 
          class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[1] && openModal(products[1])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image2?.src ? image2.src : defaultImage"
            :alt="image2?.alt ? image2.alt : 'No alt text'"
            :width="image2?.width ? image2.width : 1"
            :height="image2?.height ? image2.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
        <div 
          class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[2] && openModal(products[2])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image3?.src ? image3.src : defaultImage"
            :alt="image3?.alt ? image3.alt : 'No alt text'"
            :width="image3?.width ? image3.width : 1"
            :height="image3?.height ? image3.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- col3 -->
      <!-- <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="0">
        <div class="relative aspect-[2/3] w-72 md:w-80 lg:w-96 flex-none overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:380px"
            class="absolute inset-0 h-full w-full object-cover"
            :src="image4?.src ? image4.src : defaultImage"
            :alt="image4?.alt ? image4.alt : 'No alt text'"
            :width="image4?.width ? image4.width : 1"
            :height="image4?.height ? image4.height : 1"
            format="webp"
            loading="lazy"
          />
        </div>
      </div> -->

      <!-- col4 -->
      <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="1">
        <div 
          class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[3] && openModal(products[3])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image5?.src ? image5.src : defaultImage"
            :alt="image5?.alt ? image5.alt : 'No alt text'"
            :width="image5?.width ? image5.width : 1"
            :height="image5?.height ? image5.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
        <div 
          class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[4] && openModal(products[4])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image6?.src ? image6.src : defaultImage"
            :alt="image6?.alt ? image6.alt : 'No alt text'"
            :width="image6?.width ? image6.width : 1"
            :height="image6?.height ? image6.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- col5 -->
      <div class="hidden lg:flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="3">
        <div 
          class="relative aspect-[2/3] w-44 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
          @click="products[5] && openModal(products[5])"
        >
          <NuxtImg
            placeholder
            sizes="sm:100vw md:50vw lg:220px"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :src="image7?.src ? image7.src : defaultImage"
            :alt="image7?.alt ? image7.alt : 'No alt text'"
            :width="image7?.width ? image7.width : 1"
            :height="image7?.height ? image7.height : 1"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span class="text-white font-medium text-sm">View & Acquire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Purchase Modal -->
    <PhotoDetailModal 
      :product="selectedProduct" 
      :isOpen="showModal" 
      @close="closeModal" 
    />
  </div>
</template>
