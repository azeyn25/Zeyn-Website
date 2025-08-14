<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-xl font-bold">
              Admin Panel
            </NuxtLink>
            <div class="hidden sm:flex space-x-4">
              <NuxtLink 
                to="/admin" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Dashboard
              </NuxtLink>
              <NuxtLink 
                to="/admin/products" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Products
              </NuxtLink>
              <NuxtLink 
                to="/admin/orders" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Orders
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <ColorModeSwitch />
            <NuxtLink 
              to="/" 
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              View Site
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>