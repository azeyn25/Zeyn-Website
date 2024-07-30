<template>
  <nav>
    <ul class="flex space-x-4">
      <li v-for="link in links" :key="link.name">
        <a
          :href="link.to"
          :target="link.newTab ? '_blank' : undefined"
          :rel="link.newTab ? 'noopener noreferrer' : undefined"
          class="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{ name: string; to: string; newTab: boolean }>;
}>()
</script>
