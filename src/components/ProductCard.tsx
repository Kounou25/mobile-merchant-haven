
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/data';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-border/50 bg-white transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" 
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm">{product.name}</h3>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground text-xs line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
