import React from 'react';
import { Star, MapPin, Award, Activity } from 'lucide-react';

const mockNutritionists = [
  {
    id: 1,
    name: "Dr. Elena Rodriguez",
    specialty: "Clinical Nutritionist",
    rating: 4.9,
    reviews: 312,
    location: "Online",
    price: "$120/consultation",
    image: "https://images.unsplash.com/photo-1594824432258-208a8a473062?w=400&q=80&fit=crop",
    categories: ["Weight Management", "Medical Nutrition", "Meal Plans"],
    featured: true
  },
  {
    id: 2,
    name: "James Miller",
    specialty: "Sports Dietitian",
    rating: 4.8,
    reviews: 145,
    location: "Chicago, IL / Online",
    price: "$90/consultation",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop",
    categories: ["Muscle Gain", "Sports Nutrition"]
  },
  {
    id: 3,
    name: "Emily Clark",
    specialty: "Holistic Nutritionist",
    rating: 4.9,
    reviews: 198,
    location: "Online",
    price: "$110/consultation",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop",
    categories: ["Wellness", "Plant-Based", "Gut Health"]
  },
  {
    id: 4,
    name: "Dr. Mark Thorne",
    specialty: "Weight Loss Specialist",
    rating: 4.7,
    reviews: 340,
    location: "Austin, TX / Online",
    price: "$150/consultation",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop",
    categories: ["Weight Loss", "Metabolism", "Behavioral"]
  },
  {
    id: 5,
    name: "Lisa Wong",
    specialty: "Pediatric Dietitian",
    rating: 5.0,
    reviews: 85,
    location: "Seattle, WA",
    price: "$130/consultation",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80&fit=crop",
    categories: ["Pediatric", "Family Health", "Allergies"]
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    specialty: "Eating Disorder Dietitian",
    rating: 4.9,
    reviews: 215,
    location: "Online",
    price: "$100/consultation",
    image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=400&q=80&fit=crop",
    categories: ["Mental Health", "Recovery", "Intuitive Eating"]
  },
  {
    id: 7,
    name: "Samantha Lee",
    specialty: "Gerontological Nutritionist",
    rating: 4.8,
    reviews: 134,
    location: "Denver, CO",
    price: "$95/consultation",
    image: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=400&q=80&fit=crop",
    categories: ["Aging", "Chronic Disease", "Bone Health"]
  },
  {
    id: 8,
    name: "David Ross",
    specialty: "Performance Nutrition",
    rating: 4.9,
    reviews: 290,
    location: "Miami, FL / Online",
    price: "$140/consultation",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c846d?w=400&q=80&fit=crop",
    categories: ["Athletes", "Supplementation", "Recovery"],
    featured: true
  }
];

export function NutritionistsMarket() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search nutritionists by name or specialty..." 
            className="w-full pl-5 pr-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-secondary-900 font-medium"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-secondary-200 text-secondary-900 font-medium bg-white">
          <option>All Services</option>
          <option>Meal Plans</option>
          <option>Consultation Sessions</option>
          <option>Sports Nutrition</option>
          <option>Weight Management</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNutritionists.map(pro => (
          <div key={pro.id} className="bg-white border text-secondary-900 border-secondary-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group relative flex flex-col">
            {pro.featured && (
              <div className="absolute top-4 left-4 z-10 bg-amber-400 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Top Rated
              </div>
            )}
            
            <div className="h-48 overflow-hidden relative">
              <img src={pro.image} alt={pro.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-secondary-900 text-xl font-black mb-1">{pro.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-secondary-600 font-bold text-sm tracking-wide">{pro.specialty}</span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{pro.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                 {pro.categories.map(cat => (
                   <span key={cat} className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-bold rounded-md">
                     {cat}
                   </span>
                 ))}
              </div>

              <div className="mt-auto space-y-4 pt-4 border-t border-secondary-100">
                <div className="flex items-center justify-between">
                   <div>
                     <p className="text-xs text-secondary-500 font-bold uppercase tracking-wider">Session Rates</p>
                     <p className="text-xl font-black text-secondary-900">{pro.price}</p>
                   </div>
                   <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors">
                      Book Now
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
