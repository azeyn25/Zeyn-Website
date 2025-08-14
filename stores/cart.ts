import { defineStore } from 'pinia'
import type { Cart, CartItem, Product, PrintSize, PrintMaterial } from '~/types/product'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const itemCount = computed(() => 
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  const total = computed(() => 
    items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  )

  const cart = computed((): Cart => ({
    items: items.value,
    itemCount: itemCount.value,
    total: total.value
  }))

  function calculatePrice(size: PrintSize, material: PrintMaterial): number {
    return Math.round(size.basePrice * material.priceMultiplier)
  }

  function addToCart(product: Product, size: PrintSize, material: PrintMaterial, quantity: number = 1) {
    const price = calculatePrice(size, material)
    
    // Check if item already exists with same configuration
    const existingItemIndex = items.value.findIndex(
      item => item.productId === product.id && 
               item.size.id === size.id && 
               item.material.id === material.id
    )

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      items.value[existingItemIndex].quantity += quantity
    } else {
      // Add new item
      const cartItem: CartItem = {
        productId: product.id,
        product,
        size,
        material,
        quantity,
        price
      }
      items.value.push(cartItem)
    }

    // Persist to localStorage
    if (process.client) {
      localStorage.setItem('cart', JSON.stringify(items.value))
    }
  }

  function removeFromCart(productId: string, sizeId: string, materialId: string) {
    const index = items.value.findIndex(
      item => item.productId === productId && 
               item.size.id === sizeId && 
               item.material.id === materialId
    )
    
    if (index > -1) {
      items.value.splice(index, 1)
      
      // Persist to localStorage
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(items.value))
      }
    }
  }

  function updateQuantity(productId: string, sizeId: string, materialId: string, quantity: number) {
    const item = items.value.find(
      item => item.productId === productId && 
               item.size.id === sizeId && 
               item.material.id === materialId
    )
    
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId, sizeId, materialId)
      } else {
        item.quantity = quantity
        
        // Persist to localStorage
        if (process.client) {
          localStorage.setItem('cart', JSON.stringify(items.value))
        }
      }
    }
  }

  function clearCart() {
    items.value = []
    if (process.client) {
      localStorage.removeItem('cart')
    }
  }

  function loadFromStorage() {
    if (process.client) {
      const stored = localStorage.getItem('cart')
      if (stored) {
        try {
          items.value = JSON.parse(stored)
        } catch (error) {
          console.warn('Failed to load cart from localStorage:', error)
        }
      }
    }
  }

  return {
    items: readonly(items),
    itemCount,
    total,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loadFromStorage,
    calculatePrice
  }
})