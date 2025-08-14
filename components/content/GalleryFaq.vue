<script setup lang="ts">
import { ref } from 'vue'

const openSections = ref<Set<number>>(new Set())

const toggleSection = (index: number) => {
  if (openSections.value.has(index)) {
    openSections.value.delete(index)
  } else {
    openSections.value.add(index)
  }
}

const faqItems = [
  {
    question: "What makes these prints special?",
    answer: "Each print is produced using museum-quality archival materials with pigment inks that resist fading for 100+ years. Every piece is personally signed and comes with a certificate of authenticity. I use premium papers from Hahnemühle and Canson."
  },
  {
    question: "What sizes are available?",
    answer: `<div class="space-y-2">
      <p><strong>A4</strong> (21 × 29.7 cm) - €45</p>
      <p><strong>A3</strong> (29.7 × 42 cm) - €85</p>
      <p><strong>A2</strong> (42 × 59.4 cm) - €145</p>
      <p><strong>A1</strong> (59.4 × 84.1 cm) - €245</p>
      <p class="mt-3">Custom sizes available upon request. Contact me for pricing on non-standard dimensions.</p>
    </div>`
  },
  {
    question: "What are Limited Editions?",
    answer: "Limited editions are restricted to a specific number of prints (usually 15-50). Once sold out, that image will never be printed again in that size, making your print exclusive and potentially more valuable over time. Each limited edition print includes numbered authentication."
  },
  {
    question: "How long does shipping take?",
    answer: `<div class="space-y-2">
      <p><strong>Germany:</strong> 3-5 business days (€9.99) • Express: 1-2 days (€19.99)</p>
      <p><strong>EU:</strong> 5-7 business days (€19.99) • Express: 2-3 days (€39.99)</p>
      <p><strong>International:</strong> 7-14 business days (€39.99) • Express: 3-5 days (€69.99)</p>
      <p class="mt-3"><strong>Free shipping</strong> on orders over €150 (Germany), €250 (EU), €400 (International)</p>
      <p class="mt-3">Processing time: 3-5 business days. All prints are carefully inspected and packaged before shipping.</p>
    </div>`
  },
  {
    question: "What's your return policy?",
    answer: "I offer a 30-day satisfaction guarantee. If you're not completely satisfied with your print, you can return it for a full refund. Custom sizes are only eligible for return if defective. All prints arrive with full insurance and tracking."
  },
  {
    question: "How should I care for my print?",
    answer: `<div class="space-y-2">
      <p>• Handle with clean hands or cotton gloves</p>
      <p>• Avoid touching the image surface directly</p>
      <p>• Store flat in a cool, dry place away from direct sunlight</p>
      <p>• Use UV-protective glass when framing</p>
      <p>• Keep away from humidity and temperature extremes</p>
    </div>`
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto py-16 border-t border-gray-200 dark:border-gray-700 mt-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
      <p class="text-gray-600 dark:text-gray-300">Everything you need to know about purchasing prints from this collection.</p>
    </div>

    <div class="space-y-4">
      <div 
        v-for="(item, index) in faqItems" 
        :key="index" 
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200"
      >
        <!-- Question Header (Always Visible) -->
        <button 
          @click="toggleSection(index)"
          class="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ item.question }}
          </h3>
          <div class="flex-shrink-0 ml-4">
            <svg 
              :class="openSections.has(index) ? 'rotate-180' : ''"
              class="w-5 h-5 text-gray-500 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>

        <!-- Answer Content (Expandable) -->
        <div 
          v-show="openSections.has(index)"
          class="px-6 pb-6 text-gray-600 dark:text-gray-300"
        >
          <div v-html="item.answer"></div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="text-center mt-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Still have questions?</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        I'm here to help you find the perfect piece for your collection.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:hello@abdullahzeyn.com" class="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Email Me
        </a>
        <NuxtLink to="/about" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          About & Contact
        </NuxtLink>
      </div>
    </div>

    <!-- Additional Links -->
    <div class="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/shipping-returns" class="hover:text-gray-700 dark:hover:text-gray-300 underline mr-6">
        Shipping & Returns Policy
      </NuxtLink>
      <a href="tel:+4930123456789" class="hover:text-gray-700 dark:hover:text-gray-300">
        +49 30 123 456 789
      </a>
    </div>
  </div>
</template>