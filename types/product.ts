export interface PrintSize {
  id: string;
  name: string; // A4, A3, A2, A1
  dimensions: string; // e.g., "21 x 29.7 cm"
  basePrice: number;
}

export interface PrintMaterial {
  id: string;
  name: string; // Fine Art Paper, Canvas, Metal
  description: string;
  priceMultiplier: number; // 1.0 for base, 1.5 for premium, etc.
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  gallery?: string; // Gallery slug if part of a collection
  limitedEdition?: boolean;
  tags?: string[];
  featured?: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  size: PrintSize;
  material: PrintMaterial;
  quantity: number;
  price: number; // Calculated price for this configuration
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Default print sizes
export const PRINT_SIZES: PrintSize[] = [
  {
    id: 'a4',
    name: 'A4',
    dimensions: '21 × 29.7 cm',
    basePrice: 45
  },
  {
    id: 'a3',
    name: 'A3',
    dimensions: '29.7 × 42 cm',
    basePrice: 85
  },
  {
    id: 'a2',
    name: 'A2',
    dimensions: '42 × 59.4 cm',
    basePrice: 145
  },
  {
    id: 'a1',
    name: 'A1',
    dimensions: '59.4 × 84.1 cm',
    basePrice: 245
  }
];

// Default print materials
export const PRINT_MATERIALS: PrintMaterial[] = [
  {
    id: 'fine-art-paper',
    name: 'Fine Art Paper',
    description: 'Premium archival paper with a smooth matte finish',
    priceMultiplier: 1.0
  }
];