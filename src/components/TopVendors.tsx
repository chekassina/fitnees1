import React from 'react';
import { Store, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';

export function TopVendors() {
  return (
    <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="w-5 h-5 text-secondary-900" />
        <h2 className="text-lg font-bold text-secondary-900">Top Vendors</h2>
      </div>
      <div className="space-y-4 flex-1">
        {[
          { name: 'Optimum Nutrition', category: 'Supplements', sales: '$12,450', products: 124, logo: 'ON' },
          { name: 'Gymshark', category: 'Apparel', sales: '$8,230', products: 86, logo: 'GS' },
          { name: 'Rogue Fitness', category: 'Equipment', sales: '$6,100', products: 42, logo: 'RF' },
          { name: 'MyProtein', category: 'Supplements', sales: '$5,980', products: 110, logo: 'MP' },
        ].map((vendor, i) => (
          <div key={i} className="flex items-center justify-between p-3 hover:bg-secondary-50 rounded-lg transition-colors border border-transparent hover:border-secondary-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-700 flex items-center justify-center font-bold text-xs uppercase border border-secondary-200">
                {vendor.logo}
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary-900">{vendor.name}</p>
                <p className="text-xs text-secondary-500">{vendor.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-emerald-600">{vendor.sales}</p>
              <p className="text-xs text-secondary-500">{vendor.products} products</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/marketplace/vendors" className="w-full mt-4 py-2 bg-secondary-50 hover:bg-secondary-100 text-sm font-bold text-secondary-700 rounded-lg transition-colors border border-secondary-200 block text-center">
        View All Vendors
      </a>
    </div>
  );
}
