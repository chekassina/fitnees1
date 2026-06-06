import React from 'react';
import { ShoppingCart, Package, AlertTriangle, TrendingUp, ExternalLink, Store } from 'lucide-react';

export function EcommerceOverview() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 flex flex-col h-full group hover:border-violet-300 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Store className="w-5 h-5 text-violet-600" />
          <h3 className="font-bold text-secondary-900">E-Commerce Store</h3>
        </div>
        <a href="/store" className="text-[10px] uppercase tracking-wider font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Open Service <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4 mb-4 mt-2">
        <a href="/store/orders" className="p-5 bg-violet-50 hover:bg-violet-100 rounded-xl border border-violet-100 flex flex-col items-center justify-center text-center group/item transition-colors">
          <ShoppingCart className="w-6 h-6 text-violet-600 mb-3 group-hover/item:scale-110 transition-transform" />
          <span className="text-sm font-bold text-violet-900 group-hover/item:text-violet-700 transition-colors">Orders Today</span>
        </a>
        <a href="/store/inventory" className="p-5 bg-secondary-50 hover:bg-secondary-100 rounded-xl border border-secondary-200 flex flex-col items-center justify-center text-center group/item transition-colors">
          <Package className="w-6 h-6 text-secondary-600 mb-3 group-hover/item:scale-110 transition-transform" />
          <span className="text-sm font-bold text-secondary-900 group-hover/item:text-secondary-700 transition-colors">Products in Stock</span>
        </a>
      </div>
      
      <div className="flex flex-col gap-3 mt-auto">
        <a href="/store/low-stock" className="p-4 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-100 flex items-center justify-between transition-colors group/item">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center group-hover/item:scale-110 transition-transform border border-rose-200">
               <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <p className="text-sm font-bold text-rose-800">Low Stock Alerts</p>
          </div>
          <span className="text-xs font-bold text-rose-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>

        <a href="/store/best-sellers" className="p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-100 flex items-center justify-between transition-colors group/item">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover/item:scale-110 transition-transform border border-emerald-200">
               <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-sm font-bold text-emerald-800">Best Selling Products</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
