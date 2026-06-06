import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, ShoppingBag, Package } from 'lucide-react';
import { cn } from '../../lib/utils';

const inventory = [
  {
    id: 1,
    name: "Pro Series Adjustable Dumbbells",
    vendor: "NexFit Equipment",
    rating: 4.9,
    reviews: 1024,
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80&fit=crop",
    categories: ["Equipment", "Weights"]
  },
  {
    id: 2,
    name: "Whey Protein Isolate - 5lbs",
    vendor: "Optimum Nutrition",
    rating: 4.8,
    reviews: 840,
    price: "$65.99",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80&fit=crop",
    categories: ["Supplements", "Protein"]
  },
  {
    id: 3,
    name: "Kettlebell Setup - 16kg",
    vendor: "IronGrip",
    rating: 4.7,
    reviews: 452,
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?w=400&q=80&fit=crop",
    categories: ["Equipment", "Weights"]
  },
  {
    id: 4,
    name: "Pre-Workout Energy Formula",
    vendor: "Cellucor",
    rating: 4.6,
    reviews: 1200,
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&q=80&fit=crop",
    categories: ["Supplements", "Energy"]
  },
  {
    id: 5,
    name: "Yoga Mat - Extra Thick",
    vendor: "Zenith Studio",
    rating: 4.9,
    reviews: 350,
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80&fit=crop",
    categories: ["Equipment", "Accessories"]
  },
  {
    id: 6,
    name: "High-Performance Running Shoes",
    vendor: "Velocity Apparel",
    rating: 4.8,
    reviews: 215,
    price: "$145.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&fit=crop",
    categories: ["Apparel", "Footwear"]
  },
  {
    id: 7,
    name: "Resistance Band Set (5 Levels)",
    vendor: "FitFlex",
    rating: 4.7,
    reviews: 890,
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1517343985841-f698e6ad79da?w=400&q=80&fit=crop",
    categories: ["Equipment", "Accessories"]
  },
  {
    id: 8,
    name: "Men's Compression Shirt",
    vendor: "Titan Activewear",
    rating: 4.8,
    reviews: 410,
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80&fit=crop",
    categories: ["Apparel", "Mens"],
    featured: true
  }
];

export function PhysicalProductsMarket() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-secondary-400" />
          </div>
          <input
            type="text"
            placeholder="Search supplements, equipment, apparel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-white border border-secondary-200 rounded-xl text-secondary-900 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-secondary-200 rounded-xl hover:bg-secondary-50 transition-colors text-secondary-700 font-bold">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {inventory.map((item) => (
          <div 
            key={item.id}
            className={cn(
              "group bg-white border border-secondary-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col",
              (item as any).featured ? "ring-2 ring-primary-500 shadow-lg shadow-primary-500/10" : ""
            )}
          >
            {/* Image */}
            <div className="relative h-56 bg-secondary-100 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {(item as any).featured && (
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-sm text-secondary-900">{item.rating}</span>
                <span className="text-secondary-400 text-xs">({item.reviews})</span>
              </div>
              
              <h3 className="font-bold text-lg text-secondary-900 mb-1 leading-tight">{item.name}</h3>
              <div className="flex items-center gap-1 text-secondary-500 text-sm mb-4">
                <Package className="w-4 h-4" />
                <span>{item.vendor}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.categories.map((cat) => (
                  <span key={cat} className="bg-secondary-100 text-secondary-600 text-xs font-semibold px-2.5 py-1 rounded-lg">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-black text-xl text-secondary-900">{item.price}</span>
                <button className="bg-secondary-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}