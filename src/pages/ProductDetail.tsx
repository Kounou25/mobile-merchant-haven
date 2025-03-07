
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { products } from '../lib/data';
import { ArrowLeft, ChevronRight, Heart, Share, Star, Truck } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find the product by id
  const product = products.find(p => p.id === Number(id));
  
  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // Scroll to top when navigating to a new product
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product?.name}`,
    });
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: product?.name,
    });
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-full p-4">
          <p className="text-muted-foreground">Product not found</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Product Image */}
        <div className="relative w-full aspect-square bg-secondary/30">
          <button 
            className="absolute top-4 left-4 z-10 h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button 
              className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
              onClick={toggleFavorite}
            >
              <Heart 
                size={20} 
                className={isFavorite ? "fill-red-500 text-red-500" : ""} 
              />
            </button>
            <button className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Share size={20} />
            </button>
          </div>
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center space-x-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? "fill-amber-500" : "text-muted-foreground"} 
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
            </div>
            
            <h1 className="text-xl font-semibold">{product.name}</h1>
            
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground text-sm line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount > 0 && (
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  {product.discount}% OFF
                </span>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Description</h2>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
          
          {/* Delivery */}
          <div className="flex items-center p-3 rounded-lg bg-secondary/50 mb-6">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-3">
              <Truck size={18} />
            </div>
            <div>
              <h3 className="text-sm font-medium">Free Delivery</h3>
              <p className="text-xs text-muted-foreground">Free shipping on orders over $50</p>
            </div>
            <ChevronRight size={18} className="ml-auto text-muted-foreground" />
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <h2 className="font-medium mb-3">Quantity</h2>
            <div className="flex items-center border rounded-lg w-fit">
              <button 
                className="h-10 w-10 flex items-center justify-center text-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="h-10 px-3 flex items-center justify-center border-x">
                {quantity}
              </span>
              <button 
                className="h-10 w-10 flex items-center justify-center text-lg"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {product.stock} items available
            </p>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            className="w-full mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-10 mb-6">
              <h2 className="font-medium mb-4">You may also like</h2>
              <div className="grid grid-cols-2 gap-4">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
