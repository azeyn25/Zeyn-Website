<script setup lang="ts">
import type { Image } from "~/../types/image";
import type { Product } from "~/types/product";

interface itemPropsT {
  item: Product;
  index: number;
}

type Props = {
  images: Image[];
  enableShopping?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  enableShopping: true
});

// Convert images to products for shopping functionality
const products = computed(() => {
  if (!props.enableShopping) return []
  
  return props.images.map((image, index) => {
    const imageSlug = image.src.split('/').pop()?.replace(/\.(jpg|webp)$/, '') || `image-${index}`
    
    // Extract edition info from the image data
    const isLimitedEdition = image.edition && image.edition.toLowerCase().includes('limited')
    const editionTotal = isLimitedEdition 
      ? parseInt(image.edition.match(/\d+/)?.[0] || '25') 
      : null
    
    return {
      id: `product-${imageSlug}`,
      title: image.title || `Print ${index + 1}`,
      slug: imageSlug,
      description: image.description || 'High-quality photography print',
      story: image.story || '',
      location: image.location || '',
      year: image.year || '',
      camera: image.camera || '',
      edition: image.edition || '',
      image: {
        src: image.src,
        alt: image.alt || image.title || `Print ${index + 1}`,
        width: image.width || 1600,
        height: image.height || 1200
      },
      limitedEdition: isLimitedEdition ? {
        total: editionTotal,
        remaining: Math.floor(Math.random() * (editionTotal || 25)) + 1
      } : null,
      featured: index < 3,
      createdAt: new Date().toISOString()
    } as Product
  })
})
</script>

<template>
  <div class="not-prose">
    <PhotoSwipe>
      <div>
        <!-- Shopping-enabled version with ProductCard -->
        <MasonryWall 
          v-if="enableShopping" 
          :items="products" 
          :ssr-columns="1" 
          :column-width="400" 
          :gap="32" 
          class="grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <template #default="{ item }: itemPropsT">
            <ProductCard :product="item" :show-cart="true" />
          </template>
        </MasonryWall>

        <!-- Traditional gallery version (fallback) -->
        <MasonryWall 
          v-else 
          :items="images" 
          :ssr-columns="1" 
          :column-width="400" 
          :gap="32" 
          class="grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <template #default="{ item, index }">
            <a 
              class="photoswipe-item rounded-xl overflow-hidden block dark:bg-zinc-800 bg-zinc-200" 
              :href="$img(item.src, { width: 1600 })" 
              data-cropped="true" 
              :data-pswp-width="item.width" 
              :data-pswp-height="item.height"
            >
              <NuxtImg 
                :src="item.src" 
                alt="Some image" 
                sizes="sm:90vw md:50vw lg:30vw" 
                class="w-full h-full object-cover object-center" 
                :width="item.width" 
                :height="item.height" 
                loading="lazy" 
              />
            </a>
          </template>
        </MasonryWall>
      </div>
    </PhotoSwipe>
  </div>
</template>
