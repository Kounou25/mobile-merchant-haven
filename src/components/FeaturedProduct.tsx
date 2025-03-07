
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/data';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6 group"
    >
      <img 
        src={product.image} 
        alt={product.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
        <span className="text-sm uppercase tracking-wide opacity-80">Featured</span>
        <h2 className="text-2xl font-medium mt-1">{product.name}</h2>
        
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm line-through opacity-70">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="flex items-center mt-3 text-sm font-medium group-hover:translate-x-1 transition-transform">
          Shop now
          <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
