import type { Product } from '~/types/product'
import type { Image } from '~/types/image'

export const useProducts = () => {
  const getProductFromGallery = async (gallerySlug: string): Promise<Product[]> => {
    try {
      // Fetch the gallery content
      const gallery = await queryContent(`galleries/${gallerySlug}`).findOne()
      
      if (!gallery || !gallery.images) {
        return []
      }

      // Convert gallery images to products
      const products: Product[] = gallery.images.map((image: Image, index: number) => {
        const imageSlug = image.src.split('/').pop()?.replace('.webp', '') || `image-${index}`
        
        return {
          id: `${gallerySlug}-${imageSlug}`,
          title: `${gallery.title} - Image ${index + 1}`,
          slug: `${gallerySlug}/${imageSlug}`,
          description: gallery.description || `High-quality print from the ${gallery.title} collection`,
          image: {
            src: image.src,
            alt: image.alt || gallery.title,
            width: image.width || 1600,
            height: image.height || 1200
          },
          gallery: gallerySlug,
          limitedEdition: index < 2, // Only first 2 images per gallery are limited edition
          tags: [gallery.title.toLowerCase().replace(/\s+/g, '-')],
          featured: index < 3, // First 3 images are featured
          createdAt: new Date().toISOString()
        }
      })

      return products
    } catch (error) {
      console.error(`Failed to load products for gallery ${gallerySlug}:`, error)
      return []
    }
  }

  const getAllProducts = async (): Promise<Product[]> => {
    try {
      // Get all galleries
      const galleries = await queryContent('galleries').find()
      const allProducts: Product[] = []

      for (const gallery of galleries) {
        const gallerySlug = gallery._path?.split('/').pop() || ''
        if (gallerySlug) {
          const products = await getProductFromGallery(gallerySlug)
          allProducts.push(...products)
        }
      }

      return allProducts
    } catch (error) {
      console.error('Failed to load all products:', error)
      return []
    }
  }

  const getProductById = async (productId: string): Promise<Product | null> => {
    const [gallerySlug, imageSlug] = productId.split('-')
    
    if (!gallerySlug || !imageSlug) {
      return null
    }

    try {
      const products = await getProductFromGallery(gallerySlug)
      return products.find(p => p.id === productId) || null
    } catch (error) {
      console.error(`Failed to load product ${productId}:`, error)
      return null
    }
  }

  const getFeaturedProducts = async (limit: number = 6): Promise<Product[]> => {
    const allProducts = await getAllProducts()
    return allProducts.filter(p => p.featured).slice(0, limit)
  }

  return {
    getProductFromGallery,
    getAllProducts,
    getProductById,
    getFeaturedProducts
  }
}