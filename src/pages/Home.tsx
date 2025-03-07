
import React from 'react';
import Layout from '../components/Layout';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../lib/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.slice(0, 4);
  
  return (
    <Layout>
      <div className="px-4 pt-6 safe-top">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Discover</h1>
            <p className="text-muted-foreground text-sm mt-1">Find something you love</p>
          </div>
        </div>
        
        {/* Featured Section */}
        {featuredProducts.length > 0 && (
          <FeaturedProduct product={featuredProducts[0]} />
        )}
        
        {/* Categories */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Categories</h2>
            <Link to="/products" className="text-sm text-muted-foreground flex items-center">
              View all
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {categories.slice(0, 6).map(category => (
              <Link 
                key={category.id}
                to={`/products?category=${category.name}`}
                className="relative rounded-lg overflow-hidden aspect-square group"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-2">
                  <span className="text-white text-xs font-medium text-center">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* New Arrivals */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">New Arrivals</h2>
            <Link to="/products" className="text-sm text-muted-foreground flex items-center">
              View all
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
