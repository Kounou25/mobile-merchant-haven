
import React from 'react';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  hideNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNavigation = false }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-background">
      <main className="flex-1 overflow-auto no-scrollbar pb-20">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      {!hideNavigation && <Navigation currentPath={location.pathname} />}
    </div>
  );
};

export default Layout;
