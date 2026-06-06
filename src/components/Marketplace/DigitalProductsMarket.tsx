import React from 'react';
import { Star, Download, PlayCircle, FileText, ShoppingCart } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    title: "12-Week Complete Transformation Program",
    author: "Marcus Johnson",
    rating: 4.8,
    reviews: 450,
    price: "$49.99",
    type: "Workout Program",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80&fit=crop",
    icon: PlayCircle,
    featured: true
  },
  {
    id: 2,
    title: "High-Protein Plant-Based Recipe Book",
    author: "Dr. Elena Rodriguez",
    rating: 4.9,
    reviews: 210,
    price: "$24.99",
    type: "E-Book",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80&fit=crop",
    icon: FileText
  },
  {
    id: 3,
    title: "Mobility & Flexibility Masterclass",
    author: "Sarah Chen",
    rating: 5.0,
    reviews: 125,
    price: "$39.99",
    type: "Video Course",
    image: "https://images.unsplash.com/photo-1552196563-5525926d22e4?w=400&q=80&fit=crop",
    icon: PlayCircle
  },
  {
    id: 4,
    title: "Kettlebell Mastery For Beginners",
    author: "Alex Costa",
    rating: 4.6,
    reviews: 80,
    price: "$19.99",
    type: "Video Course",
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=400&q=80&fit=crop",
    icon: PlayCircle
  },
  {
    id: 5,
    title: "Post-Pregnancy Recovery Plan",
    author: "Mia Gonzalez",
    rating: 4.9,
    reviews: 320,
    price: "$29.99",
    type: "E-Book",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80&fit=crop",
    icon: FileText
  },
  {
    id: 6,
    title: "Advanced Powerlifting Blueprint",
    author: "James Anderson",
    rating: 4.8,
    reviews: 145,
    price: "$59.99",
    type: "Workout Program",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80&fit=crop",
    icon: PlayCircle
  },
  {
    id: 7,
    title: "100 Vegan Bodybuilding Recipes",
    author: "Emily Clark",
    rating: 4.7,
    reviews: 210,
    price: "$14.99",
    type: "E-Book",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80&fit=crop",
    icon: FileText
  },
  {
    id: 8,
    title: "Marathon Prep Guide: 16 Weeks",
    author: "Liam O'Connor",
    rating: 4.9,
    reviews: 380,
    price: "$34.99",
    type: "Workout Program",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=400&q=80&fit=crop",
    icon: PlayCircle,
    featured: true
  }
];

export function DigitalProductsMarket() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search courses, ebooks, and programs..." 
            className="w-full pl-5 pr-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-secondary-900 font-medium"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-secondary-200 text-secondary-900 font-medium bg-white">
          <option>All Digital Products</option>
          <option>Workout Programs</option>
          <option>Video Courses</option>
          <option>Diet Plans</option>
          <option>Fitness E-Books</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map(product => (
          <div key={product.id} className="bg-white border text-secondary-900 border-secondary-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group relative flex flex-col">
            {product.featured && (
              <div className="absolute top-4 left-4 z-10 bg-indigo-500 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Bestseller
              </div>
            )}
            
            <div className="h-44 overflow-hidden relative">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-indigo-600">
                <product.icon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{product.type}</span>
              </div>
              <h3 className="text-secondary-900 text-lg font-black mb-1 line-clamp-2">{product.title}</h3>
              <p className="text-sm text-secondary-500 font-medium mb-3">by {product.author}</p>
              
              <div className="flex items-center gap-1.5 text-amber-500 font-bold mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating} <span className="text-secondary-400 text-xs text-normal">({product.reviews})</span></span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-secondary-100">
                 <p className="text-xl font-black text-secondary-900">{product.price}</p>
                 <button className="flex items-center gap-2 bg-secondary-900 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-colors">
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
