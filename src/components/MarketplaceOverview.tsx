import React from 'react';
import { Store, Users, ShoppingBag, Briefcase, Activity, ExternalLink, Building2 } from 'lucide-react';

export function MarketplaceOverview() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 flex flex-col h-full group hover:border-primary-300 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary-600" />
          <h3 className="font-bold text-secondary-900">Marketplace Overview</h3>
        </div>
        <a href="/marketplace" className="text-[10px] uppercase tracking-wider font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Open Service <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center mt-2">
        <a href="/marketplace/vendors" className="flex items-center justify-between p-4 bg-secondary-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 transition-colors group/item">
          <div className="flex items-center gap-3">
            <Store className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform" />
            <span className="text-sm font-bold text-secondary-700 group-hover/item:text-primary-700 transition-colors">Active Vendors</span>
          </div>
          <span className="text-xs font-bold text-primary-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
        <a href="/marketplace/trainers" className="flex items-center justify-between p-4 bg-secondary-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 transition-colors group/item">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform" />
            <span className="text-sm font-bold text-secondary-700 group-hover/item:text-primary-700 transition-colors">Active Trainers</span>
          </div>
          <span className="text-xs font-bold text-primary-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
        <a href="/marketplace/nutritionists" className="flex items-center justify-between p-4 bg-secondary-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 transition-colors group/item">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform" />
            <span className="text-sm font-bold text-secondary-700 group-hover/item:text-primary-700 transition-colors">Nutritionists</span>
          </div>
          <span className="text-xs font-bold text-primary-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
        <a href="/marketplace/products" className="flex items-center justify-between p-4 bg-secondary-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 transition-colors group/item">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform" />
            <span className="text-sm font-bold text-secondary-700 group-hover/item:text-primary-700 transition-colors">Products Listed</span>
          </div>
          <span className="text-xs font-bold text-primary-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
        <a href="/marketplace/services" className="flex items-center justify-between p-4 bg-secondary-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 transition-colors group/item">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform" />
            <span className="text-sm font-bold text-secondary-700 group-hover/item:text-primary-700 transition-colors">Services Listed</span>
          </div>
          <span className="text-xs font-bold text-primary-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
