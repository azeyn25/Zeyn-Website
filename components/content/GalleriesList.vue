<script setup lang="ts">
import { withTrailingSlash } from "ufo";

const props = defineProps({
  path: {
    type: String,
    default: "galleries",
  },
  enableShopping: {
    type: [Boolean, String],
    default: false,
  },
});

const { data: _galleries } = await useAsyncData(
  "galleries",
  async () => {
    const galleries = await queryContent(withTrailingSlash(props.path))
      .where({ _partial: false })
      .find()
    
    return galleries.map(gallery => ({
      ...gallery,
      images: []
    }))
  }
);

const galleries = computed(() => _galleries.value || [])

</script>

<template>
  <div v-if="galleries?.length" class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <GalleryListItem
        v-for="(gallery, index) in galleries"
        :key="index"
        :gallery="gallery"
        :enable-shopping="enableShopping"
      />
    </div>
    <div v-else>
      <p class="">
        No galleries found.
      </p>
    </div>
</template>
