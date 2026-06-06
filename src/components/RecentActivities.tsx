import React from 'react';
import { UserPlus, ShoppingBag, CreditCard, Calendar, Store } from 'lucide-react';
import { cn } from '../lib/utils';

const activities = [
  { 
    id: 1, 
    type: 'member', 
    title: 'New Member Registered', 
    description: 'John joined Premium Membership', 
    time: '5 mins ago',
    icon: UserPlus,
    color: 'text-primary-600',
    bg: 'bg-primary-100'
  },
  { 
    id: 2, 
    type: 'order', 
    title: 'Product Purchased', 
    description: 'Protein Powder ordered via store', 
    time: '15 mins ago',
    icon: ShoppingBag,
    color: 'text-violet-600',
    bg: 'bg-violet-100'
  },
  { 
    id: 3, 
    type: 'booking', 
    title: 'Trainer Session Booked', 
    description: 'Session with Trainer Marcus Johnson', 
    time: '42 mins ago',
    icon: Calendar,
    color: 'text-cyan-600',
    bg: 'bg-cyan-100'
  },
  { 
    id: 4, 
    type: 'consultation', 
    title: 'Nutrition Consultation', 
    description: 'Consultation scheduled for tomorrow', 
    time: '1 hour ago',
    icon: Calendar,
    color: 'text-amber-600',
    bg: 'bg-amber-100'
  },
  {
    id: 5,
    type: 'vendor',
    title: 'Vendor Registered',
    description: 'New supplement vendor onboarded',
    time: '2 hours ago',
    icon: Store,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100'
  }
];

export function RecentActivities() {
  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={activity.id} className="relative pl-4">
          {index !== activities.length - 1 && (
            <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-secondary-100"></div>
          )}
          <div className="flex gap-4">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10", activity.bg)}>
              <activity.icon className={cn("w-5 h-5", activity.color)} />
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary-900">{activity.title}</p>
              <p className="text-sm text-secondary-500 mt-0.5">{activity.description}</p>
              <span className="text-xs text-secondary-400 mt-1 block">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
