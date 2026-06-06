import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { 
  Users, Apple, FileText, ShoppingBag, LayoutGrid, Search, Filter, Star, 
  ChevronRight, Calendar, DollarSign, MapPin, CheckCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { TrainersMarket } from './TrainersMarket';
import { NutritionistsMarket } from './NutritionistsMarket';
import { DigitalProductsMarket } from './DigitalProductsMarket';
import { PhysicalProductsMarket } from './PhysicalProductsMarket';

export function MarketplaceHub() {
  const location = useLocation();
  
  const tabs = [
    { label: 'Trainers', path: '/marketplace/trainers', icon: Users },
    { label: 'Nutritionists', path: '/marketplace/nutritionists', icon: Apple },
    { label: 'Physical Store', path: '/marketplace/physical', icon: ShoppingBag },
    { label: 'Digital Products', path: '/marketplace/digital', icon: FileText },
  ];

  return (
    <div className="p-6 md:p-8 xl:p-10 max-w-[1600px] mx-auto min-h-screen">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-secondary-900 tracking-tight">Global Marketplace</h1>
        <p className="text-lg text-secondary-500 font-medium max-w-3xl mt-3">
          Discover world-class fitness professionals, nutrition experts, physical equipment, and premium digital resources all in one place.
        </p>
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
          <Route path="physical/*" element={<PhysicalProductsMarket />} />
          <Route path="digital/*" element={<DigitalProductsMarket />} />
        </Routes>
      </div>
    </div>
  );
}
