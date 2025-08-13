<template>
  <nav>
    <ul class="flex space-x-6">
      <li v-for="link in links" :key="link.name">
        <NuxtLink
          v-if="!link.newTab"
          :to="link.to"
          class="text-xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400"
        >
          {{ link.name }}
        </NuxtLink>
        <a
          v-else
          :href="link.to"
          :target="link.newTab ? '_blank' : undefined"
          :rel="link.newTab ? 'noopener noreferrer' : undefined"
          class="text-xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400"
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
