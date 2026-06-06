import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { 
  Users, Apple, FileText, ShoppingBag, LayoutGrid, Search, Filter, Star, 
  ChevronRight, Calendar, DollarSign, MapPin, CheckCircle, ShoppingCart
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { TrainersMarket } from './TrainersMarket';
import { NutritionistsMarket } from './NutritionistsMarket';
import { DigitalProductsMarket } from './DigitalProductsMarket';
import { PhysicalProductsMarket } from './PhysicalProductsMarket';
import { PaymentModal } from '../PaymentModal';
import { MarketplaceCart, CartEntry, MarketplaceItem } from './MarketplaceCart';

export function MarketplaceHub() {
  const location = useLocation();
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  
  const tabs = [
    { label: 'Trainers', path: '/marketplace/trainers', icon: Users },
    { label: 'Nutritionists', path: '/marketplace/nutritionists', icon: Apple },
    { label: 'Physical Store', path: '/marketplace/physical', icon: ShoppingBag },
    { label: 'Digital Products', path: '/marketplace/digital', icon: FileText },
  ];

  const handlePaymentComplete = () => {
    setPaymentOpen(false);
    setCheckoutDone(true);
    setCartItems([]);
    setTimeout(() => setCheckoutDone(false), 4000);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setPaymentOpen(true);
  };

  const handleAddToCart = (item: MarketplaceItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateCartQty = (id: string, qty: number) => {
    setCartItems((prev) => prev.map((i) => (i.item.id === id ? { ...i, qty } : i)));
  };

  const removeCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.item.id !== id));
  };

  const cartItemsCount = cartItems.reduce((acc, current) => acc + current.qty, 0);

  return (
    <div className="p-6 md:p-8 xl:p-10 max-w-[1600px] mx-auto min-h-screen relative">
      {paymentOpen && (
        <PaymentModal onClose={() => setPaymentOpen(false)} onPay={handlePaymentComplete} />
      )}

      {cartOpen && (
        <MarketplaceCart 
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
          onUpdateQty={updateCartQty}
          onRemove={removeCartItem}
        />
      )}

      {/* Toast */}
      {checkoutDone && (
        <div className="fixed top-6 right-6 z-[60] bg-emerald-600 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in">
          <CheckCircle className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Order placed! 🎉</p>
            <p className="text-xs text-emerald-100">Thank you for your purchase.</p>
          </div>
        </div>
      )}

      {/* Header section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-secondary-900 tracking-tight">Global Marketplace</h1>
          <p className="text-lg text-secondary-500 font-medium max-w-3xl mt-3">
            Discover world-class fitness professionals, nutrition experts, physical equipment, and premium digital resources all in one place.
          </p>
        </div>
        
        {/* Cart Button */}
        <button 
          onClick={() => setCartOpen(true)}
          className="relative bg-white border border-secondary-200 text-secondary-900 hover:bg-secondary-50 px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition-colors self-start md:self-center"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-[10px] px-1.5 border-2 border-white shadow-sm">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex w-full overflow-x-auto pb-4 mb-8 border-b border-secondary-200 hide-scrollbar gap-8">
        {tabs.map((tab) => {
          const isActive = location.pathname.startsWith(tab.path);
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex items-center gap-2 pb-4 px-1 font-bold text-base transition-colors relative whitespace-nowrap",
                isActive ? "text-primary-600" : "text-secondary-500 hover:text-secondary-900"
              )}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              {isActive && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-primary-600 rounded-t-full"></div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="relative">
        <Routes>
          <Route path="/" element={<Navigate to="/marketplace/trainers" replace />} />
          <Route path="trainers/*" element={<TrainersMarket />} />
          <Route path="nutritionists/*" element={<NutritionistsMarket />} />
          <Route path="physical/*" element={<PhysicalProductsMarket onAddToCart={handleAddToCart} />} />
          <Route path="digital/*" element={<DigitalProductsMarket onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </div>
  );
}
