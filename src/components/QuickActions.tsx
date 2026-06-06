import React from 'react';
import { UserPlus, PackagePlus, Dumbbell, CalendarPlus, Tag, FileText } from 'lucide-react';

const actions = [
  { label: 'Add Member', route: '/members/create', icon: UserPlus, color: 'text-primary-600', hover: 'hover:border-primary-200 hover:bg-primary-50' },
  { label: 'Add Product', route: '/store/products/create', icon: PackagePlus, color: 'text-violet-600', hover: 'hover:border-violet-200 hover:bg-violet-50' },
  { label: 'Add Trainer', route: '/trainers/create', icon: Dumbbell, color: 'text-emerald-600', hover: 'hover:border-emerald-200 hover:bg-emerald-50' },
  { label: 'Create Class', route: '/classes/create', icon: CalendarPlus, color: 'text-amber-600', hover: 'hover:border-amber-200 hover:bg-amber-50' },
  { label: 'New Promo', route: '/marketing/promotions/create', icon: Tag, color: 'text-rose-600', hover: 'hover:border-rose-200 hover:bg-rose-50' },
  { label: 'Run Report', route: '/reports/generate', icon: FileText, color: 'text-blue-600', hover: 'hover:border-blue-200 hover:bg-blue-50' },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 line-clamp-none">
      <h2 className="text-lg font-bold text-secondary-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action, i) => (
          <a 
            key={i} 
            href={action.route}
            className={`flex flex-col items-center justify-center p-3 border border-secondary-100 rounded-lg transition-all decoration-transparent ${action.hover}`}
          >
            <action.icon className={`w-6 h-6 mb-2 opacity-80 ${action.color}`} />
            <span className="text-xs font-semibold text-secondary-700">{action.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
