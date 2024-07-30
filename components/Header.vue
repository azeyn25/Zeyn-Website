<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const links = [
  { name: "Home", to: "/", newTab: false },
  { name: "Prints", to: "https://abdullahzeyn.darkroom.com/", newTab: true },
  { name: "About", to: "/about", newTab: false },
] as { name: string; to: string; newTab: boolean }[];

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const showHeader = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) return;
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;
  showHeader.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
};
</script>

<template>
  <div
    :class="[
      showHeader ? 'translate-y-0' : '-translate-y-full',
      'transform-gpu transition-transform duration-500 sticky top-0 z-50',
    ]"
  >
    <Container class="pt-4 lg:pt-10">
      <div class="flex items-center justify-between">
        <Logo />
        <div
          class="border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"
        >
          <div class="flex items-center gap-4">
            <div class="hidden lg:block">
              <NavLinks :links="links" />
            </div>
            <div class="lg:hidden">
              <NavLinksMobile :links="links" />
            </div>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>