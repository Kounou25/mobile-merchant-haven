
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { products } from '../lib/data';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  // In a real app, cart state would be managed through context/store
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ]);
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.min(item.product.stock, newQuantity) }
          : item
      )
    );
  };
  
  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.product.price * item.quantity), 0
  );
  
  // Shipping fee
  const shippingFee = subtotal > 50 ? 0 : 4.99;
  
  // Total
  const total = subtotal + shippingFee;
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Trash2 size={24} />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet</p>
          <Link to="/products">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="px-4 pt-6 safe-top">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        
        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cartItems.map(item => (
            <div 
              key={item.product.id}
              className="flex border rounded-xl overflow-hidden animate-fade-in"
            >
              <div className="w-24 h-24 bg-secondary/30">
                <img 
                  src={item.product.image} 
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-3 flex flex-col">
                <Link to={`/product/${item.product.id}`} className="font-medium text-sm line-clamp-1">
                  {item.product.name}
                </Link>
                
                <div className="flex items-baseline space-x-1 mt-1">
                  <span className="font-semibold">${item.product.price.toFixed(2)}</span>
                  {item.product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${item.product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="h-7 w-7 flex items-center justify-center"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="h-7 px-2 flex items-center justify-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      className="h-7 w-7 flex items-center justify-center"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="border rounded-xl p-4 mb-6">
          <h2 className="font-medium mb-4">Order Summary</h2>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}</span>
            </div>
            
            <div className="border-t pt-2 mt-2 flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Checkout Button */}
        <Button className="w-full mb-8">
          Proceed to Checkout
        </Button>
      </div>
    </Layout>
  );
};

export default Cart;
