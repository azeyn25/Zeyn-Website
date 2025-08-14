<template>
  <div class="max-w-4xl mx-auto py-12">
    <h2 class="text-2xl font-bold mb-8">Contact Information</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Get in Touch</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Ready to bring a piece of visual storytelling into your space? I'd love to discuss how my work can enhance your collection.
          </p>
        </div>

        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 mt-1">
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold">Email</h4>
              <a href="mailto:hello@abdullahzeyn.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                hello@abdullahzeyn.com
              </a>
              <p class="text-sm text-gray-500 mt-1">I typically respond within 24 hours</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 mt-1">
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold">Phone</h4>
              <a href="tel:+4930123456789" class="text-blue-600 dark:text-blue-400 hover:underline">
                +49 30 123 456 789
              </a>
              <p class="text-sm text-gray-500 mt-1">Available Monday - Friday, 9 AM - 6 PM CET</p>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 mt-1">
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold">Studio Location</h4>
              <p class="text-gray-600 dark:text-gray-300">Berlin, Germany</p>
              <p class="text-sm text-gray-500 mt-1">Studio visits by appointment only</p>
            </div>
          </div>
        </div>

        <!-- Service Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h5 class="font-semibold mb-1">Quick Response</h5>
            <p class="text-sm text-gray-600 dark:text-gray-300">24-hour response guarantee</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h5 class="font-semibold mb-1">Satisfaction Guaranteed</h5>
            <p class="text-sm text-gray-600 dark:text-gray-300">30-day return policy</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h5 class="font-semibold mb-1">Worldwide Shipping</h5>
            <p class="text-sm text-gray-600 dark:text-gray-300">Secure international delivery</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Send a Message</h3>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">First Name *</label>
              <input 
                v-model="form.firstName"
                type="text" 
                required 
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Last Name *</label>
              <input 
                v-model="form.lastName"
                type="text" 
                required 
                class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Email *</label>
            <input 
              v-model="form.email"
              type="email" 
              required 
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Subject</label>
            <select 
              v-model="form.subject"
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="print-inquiry">Print Purchase Inquiry</option>
              <option value="custom-request">Custom Print Request</option>
              <option value="exhibition">Exhibition Opportunity</option>
              <option value="general">General Question</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Message *</label>
            <textarea 
              v-model="form.message"
              rows="4" 
              required 
              class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Tell me about your interest in my work..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: 'print-inquiry',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Create mailto link with form data
  const subject = encodeURIComponent(`Contact Form: ${form.value.subject}`)
  const body = encodeURIComponent(`
Name: ${form.value.firstName} ${form.value.lastName}
Email: ${form.value.email}
Subject: ${form.value.subject}

Message:
${form.value.message}
  `)
  
  const mailtoLink = `mailto:hello@abdullahzeyn.com?subject=${subject}&body=${body}`
  
  // Open mailto link
  window.location.href = mailtoLink
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: 'print-inquiry',
    message: ''
  }
  
  isSubmitting.value = false
}
</script>