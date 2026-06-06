import React from 'react';
import { Users, Store, ExternalLink, Dumbbell, Apple, BarChart4, Building2 } from 'lucide-react';

const services = [
  { id: 'members', route: '/members', label: 'Members', icon: Users, color: 'text-primary-600', bg: 'bg-primary-50', hover: 'hover:border-primary-300 hover:ring-1 hover:ring-primary-500/20' },
  { id: 'ecommerce', route: '/store', label: 'Store', icon: Store, color: 'text-violet-600', bg: 'bg-violet-50', hover: 'hover:border-violet-300 hover:ring-1 hover:ring-violet-500/20' },
  { id: 'marketplace', route: '/marketplace', label: 'Market', icon: Building2, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50', hover: 'hover:border-fuchsia-300 hover:ring-1 hover:ring-fuchsia-500/20' },
  { id: 'trainers', route: '/trainers', label: 'Trainers', icon: Dumbbell, color: 'text-emerald-600', bg: 'bg-emerald-50', hover: 'hover:border-emerald-300 hover:ring-1 hover:ring-emerald-500/20' },
  { id: 'nutrition', route: '/nutrition', label: 'Nutrition', icon: Apple, color: 'text-rose-600', bg: 'bg-rose-50', hover: 'hover:border-rose-300 hover:ring-1 hover:ring-rose-500/20' },
  { id: 'reports', route: '/reports', label: 'Finance', icon: BarChart4, color: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:border-blue-300 hover:ring-1 hover:ring-blue-500/20' },
];

export function ServiceLinks() {
  return (
    <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-lg font-bold text-secondary-900 mb-2">Platform Services</h2>
      <p className="text-sm text-secondary-500 mb-6">Quick links to core modules</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 flex-content-center">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.route}
            className={`flex flex-col items-center justify-center p-4 border border-secondary-100 rounded-xl transition-all group hover:bg-secondary-50 ${service.hover}`}
            title={`Go to ${service.label} Module`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${service.bg} group-hover:scale-110 transition-transform`}>
              <service.icon className={`w-5 h-5 ${service.color}`} />
            </div>
            <span className="text-xs font-bold text-secondary-700">{service.label}</span>
            <ExternalLink className="w-3 h-3 text-secondary-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}
