
import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { mockUser } from '../lib/data';
import { 
  Bell, 
  CreditCard, 
  HelpCircle, 
  History, 
  LogOut, 
  MapPin, 
  Settings, 
  ShoppingBag, 
  User as UserIcon 
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Account = () => {
  const { toast } = useToast();
  
  const menuItems = [
    { 
      icon: ShoppingBag, 
      label: 'Orders',
      description: 'View and track your orders'
    },
    { 
      icon: MapPin, 
      label: 'Addresses',
      description: 'Manage your delivery addresses'
    },
    { 
      icon: CreditCard, 
      label: 'Payment Methods',
      description: 'Manage your payment options'
    },
    { 
      icon: Bell, 
      label: 'Notifications',
      description: 'Set your notification preferences'
    },
    { 
      icon: History, 
      label: 'Recently Viewed',
      description: 'See your browsing history'
    },
    { 
      icon: HelpCircle, 
      label: 'Help & Support',
      description: 'Get assistance and answers'
    },
    { 
      icon: Settings, 
      label: 'Settings',
      description: 'Manage your account settings'
    }
  ];
  
  const handleLogout = () => {
    // In a real app, this would clear auth state
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
  };
  
  return (
    <Layout>
      <div className="px-4 pt-6 pb-8 safe-top">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Account</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your profile and preferences
          </p>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center p-4 bg-secondary/30 rounded-xl mb-8">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-secondary mr-4">
            {mockUser.image ? (
              <img 
                src={mockUser.image} 
                alt={mockUser.name}
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <UserIcon size={24} className="text-primary" />
              </div>
            )}
          </div>
          
          <div>
            <h2 className="font-medium">{mockUser.name}</h2>
            <p className="text-sm text-muted-foreground">{mockUser.email}</p>
            <Button variant="outline" size="sm" className="mt-2">
              Edit Profile
            </Button>
          </div>
        </div>
        
        {/* Menu */}
        <div className="space-y-3 mb-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <button 
                key={index}
                className="flex items-center w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center mr-3">
                  <Icon size={18} />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut size={18} className="mr-2" />
          Logout
        </Button>
      </div>
    </Layout>
  );
};

export default Account;
