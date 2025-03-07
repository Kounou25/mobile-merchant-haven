
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount: number;
  image: string;
  category: string;
  featured: boolean;
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimal Ceramic Vase",
    description: "A beautifully crafted minimal ceramic vase, perfect for adding elegance to any space. The smooth texture and clean lines provide a contemporary aesthetic that complements both modern and traditional decor. This versatile piece works well with dried or fresh arrangements.",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1612620535624-f521384008e5?q=80&w=1000&auto=format&fit=crop",
    category: "Home Decor",
    featured: true,
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: "Premium Leather Wallet",
    description: "Crafted from full-grain leather, this premium wallet features a sleek design with multiple card slots and a bill compartment. The durable construction ensures longevity while maintaining a sophisticated appearance over time.",
    price: 49.99,
    originalPrice: 65.99,
    discount: 24,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    featured: false,
    rating: 4.7,
    stock: 25
  },
  {
    id: 3,
    name: "Wireless Noise-Cancelling Headphones",
    description: "Experience superior sound quality with these premium wireless noise-cancelling headphones. Featuring advanced acoustic technology and comfortable over-ear design, these headphones deliver immersive audio while reducing ambient noise for an uninterrupted listening experience.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    featured: true,
    rating: 4.9,
    stock: 10
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    description: "This elegant desk lamp combines functionality with modern design. The adjustable arm and energy-efficient LED technology provide perfect lighting for work or reading, while the clean lines and premium materials enhance your workspace aesthetic.",
    price: 89.99,
    originalPrice: 99.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    category: "Home Office",
    featured: false,
    rating: 4.6,
    stock: 20
  },
  {
    id: 5,
    name: "Natural Linen Throw Pillow",
    description: "Add texture and comfort to your living space with this natural linen throw pillow. Made from 100% organic linen, it features a removable cover for easy cleaning and comes in a versatile neutral tone that complements any decor style.",
    price: 39.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
    category: "Home Decor",
    featured: false,
    rating: 4.5,
    stock: 30
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Stay hydrated with this premium vacuum-insulated water bottle. Designed to keep beverages cold for 24 hours or hot for 12 hours, this durable stainless steel bottle is perfect for everyday use, outdoor activities, or fitness routines.",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1000&auto=format&fit=crop",
    category: "Lifestyle",
    featured: false,
    rating: 4.7,
    stock: 40
  },
  {
    id: 7,
    name: "Smart Watch Series 5",
    description: "This advanced smartwatch combines fitness tracking, health monitoring, and everyday connectivity in a sleek design. With features including heart rate monitoring, GPS, and water resistance, it's the perfect companion for an active lifestyle.",
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    featured: true,
    rating: 4.8,
    stock: 12
  },
  {
    id: 8,
    name: "Organic Scented Candle",
    description: "Create a soothing atmosphere with this hand-poured organic soy wax candle. Featuring natural essential oils and a cotton wick, it burns cleanly for up to 45 hours while filling your space with a subtle, calming fragrance.",
    price: 29.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop",
    category: "Home Decor",
    featured: false,
    rating: 4.6,
    stock: 35
  }
];

export const categories = [
  {
    id: 1,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1631160299919-6eda9e9f6e1b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Home Office",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Lifestyle",
    image: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=80&w=1000&auto=format&fit=crop"
  }
];

// Cart functionality
export interface CartItem {
  productId: number;
  quantity: number;
}

// User data
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export const mockUser: User = {
  id: "user-1",
  name: "Sarah Chen",
  email: "sarah@example.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
};
