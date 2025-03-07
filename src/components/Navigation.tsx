
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingBag, User } from 'lucide-react';

interface NavigationProps {
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/products', icon: Search, label: 'Products' },
    { path: '/cart', icon: ShoppingBag, label: 'Cart' },
    { path: '/account', icon: User, label: 'Account' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <nav className="glass border-t border-border max-w-md mx-auto">
        <div className="flex justify-around items-center h-16 safe-bottom">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 ${
                  isActive ? 'text-primary scale-105' : 'text-muted-foreground'
                }`}
              >
                <Icon 
                  size={isActive ? 22 : 20} 
                  className={`transition-all duration-200 ${
                    isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'
                  }`} 
                />
                <span className={`text-[10px] mt-1 ${
                  isActive ? 'font-medium' : 'font-normal'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
