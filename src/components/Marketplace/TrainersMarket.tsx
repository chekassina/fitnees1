import React from 'react';
import { Star, MapPin, Calendar, Clock, Award, CheckCircle } from 'lucide-react';

const mockTrainers = [
  {
    id: 1,
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    rating: 4.9,
    reviews: 124,
    location: "Los Angeles, CA / Online",
    price: "$85/session",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80&fit=crop",
    categories: ["Weight Loss", "Muscle Gain", "Online Coaching"],
    featured: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Yoga & Mobility",
    rating: 5.0,
    reviews: 89,
    location: "Online",
    price: "$60/session",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80&fit=crop",
    categories: ["Rehabilitation", "Flexibility", "Group Coaching"]
  },
  {
    id: 3,
    name: "David Kim",
    specialty: "High-Intensity Interval Training",
    rating: 4.8,
    reviews: 215,
    location: "New York, NY",
    price: "$95/session",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80&fit=crop",
    categories: ["Transformation", "Competition Prep"]
  },
  {
    id: 4,
    name: "Alex Costa",
    specialty: "CrossFit Coach",
    rating: 4.7,
    reviews: 132,
    location: "Miami, FL",
    price: "$75/session",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80&fit=crop",
    categories: ["CrossFit", "Strength", "Conditioning"]
  },
  {
    id: 5,
    name: "Mia Gonzalez",
    specialty: "Pilates Instructor",
    rating: 4.9,
    reviews: 240,
    location: "Online",
    price: "$50/session",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80&fit=crop",
    categories: ["Pilates", "Flexibility", "Core"]
  },
  {
    id: 6,
    name: "James Anderson",
    specialty: "Bodybuilding",
    rating: 4.8,
    reviews: 110,
    location: "London, UK",
    price: "$90/session",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80&fit=crop",
    categories: ["Muscle Gain", "Bodybuilding", "Comp Prep"]
  },
  {
    id: 7,
    name: "Liam O'Connor",
    specialty: "Endurance & Running",
    rating: 4.6,
    reviews: 88,
    location: "Boston, MA",
    price: "$65/session",
    image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=400&q=80&fit=crop",
    categories: ["Running", "Endurance", "Marathon Prep"]
  },
  {
    id: 8,
    name: "Jessica Wu",
    specialty: "Functional Training",
    rating: 5.0,
    reviews: 310,
    location: "San Francisco, CA / Online",
    price: "$80/session",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&q=80&fit=crop",
    categories: ["Functional", "Agility", "Injury Prevention"],
    featured: true
  }
];

export function TrainersMarket() {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search trainers by name, specialty, or location..." 
            className="w-full pl-5 pr-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-secondary-900 font-medium"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-secondary-200 text-secondary-900 font-medium bg-white">
          <option>All Specialties</option>
          <option>Personal Training</option>
          <option>Weight Loss Coaching</option>
          <option>Muscle Gain Coaching</option>
          <option>Performance & Rehab</option>
        </select>
        <select className="px-4 py-3 rounded-xl border border-secondary-200 text-secondary-900 font-medium bg-white">
          <option>Price: Any</option>
          <option>Under $50</option>
          <option>$50 - $100</option>
          <option>$100+</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrainers.map(trainer => (
          <div key={trainer.id} className="bg-white border text-secondary-900 border-secondary-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group relative">
            {trainer.featured && (
              <div className="absolute top-4 left-4 z-10 bg-amber-400 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Featured Pro
              </div>
            )}
            
            <div className="h-56 overflow-hidden relative">
              <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                <h3 className="text-white text-2xl font-black">{trainer.name}</h3>
              </div>
            </div>

            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-secondary-600 font-bold text-sm tracking-wide">{trainer.specialty}</span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{trainer.rating} <span className="text-secondary-400 text-sm font-normal">({trainer.reviews})</span></span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                 {trainer.categories.map(cat => (
                   <span key={cat} className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-bold rounded-md">
                     {cat}
                   </span>
                 ))}
              </div>

              <div className="space-y-2 mt-auto pt-4 border-t border-secondary-100 mb-6">
                 <div className="flex items-center gap-2 text-sm text-secondary-500">
                    <MapPin className="w-4 h-4" />
                    <span>{trainer.location}</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-secondary-500">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>Certified Professional</span>
                 </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                 <div>
                   <p className="text-xs text-secondary-500 font-bold uppercase tracking-wider">Starting at</p>
                   <p className="text-xl font-black text-secondary-900">{trainer.price}</p>
                 </div>
                 <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors">
                    View Profile
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
