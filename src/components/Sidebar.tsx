import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  IdCard, 
  Dumbbell, 
  CalendarDays, 
  Activity, 
  Apple, 
  Clock, 
  Megaphone, 
  DollarSign, 
  CreditCard, 
  PieChart, 
  Package, 
  Store, 
  Building2, 
  BarChart4, 
  Bot, 
  Settings,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Dashboard', route: '/', icon: LayoutDashboard },
  { name: 'Marketplace', route: '/marketplace', icon: Building2 },
  { name: 'Bookings', route: '/bookings', icon: CalendarDays },
  { name: 'Appointments', route: '/appointments', icon: Clock },
  { name: 'Subscriptions', route: '/subscriptions', icon: IdCard },
  { name: 'Orders', route: '/orders', icon: Package },
  { name: 'Customers', route: '/customers', icon: Users },
  { name: 'Store', route: '/store', icon: Store },
  { name: 'Reviews & Ratings', route: '/reviews', icon: Activity },
  { name: 'Loyalty Program', route: '/loyalty', icon: Apple },
  { name: 'Advertisements', route: '/ads', icon: Megaphone },
  { name: 'Payments', route: '/payments', icon: CreditCard },
  { name: 'Commissions', route: '/commissions', icon: DollarSign },
  { name: 'Reports & Analytics', route: '/reports', icon: PieChart },
  { name: 'Content Management', route: '/content', icon: BarChart4 },
  { name: 'Support Tickets', route: '/support', icon: Dumbbell },
  { name: 'Settings', route: '/settings', icon: Settings },
];

export function Sidebar({ className, onClose }: { className?: string, onClose?: () => void }) {
  const location = useLocation();
  
  return (
    <aside className={cn("bg-[#0F172A] h-screen flex flex-col text-secondary-400 border-r border-secondary-800 w-64", className)}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-secondary-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight uppercase line-clamp-1">FitEcosystem</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-secondary-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <nav className="px-4 space-y-1 text-[11px] lg:text-xs font-semibold uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = location.pathname === item.route || (item.route !== '/' && location.pathname.startsWith(item.route));
            return (
              <Link
                key={item.name}
                to={item.route}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                  isActive 
                    ? "bg-primary-600/20 text-primary-400 border border-primary-500/30" 
                    : "hover:bg-secondary-800 hover:text-white border border-transparent"
                )}
              >
                <item.icon className={cn(
                  "w-4 h-4 transition-colors shrink-0",
                  isActive ? "text-primary-400" : "text-secondary-500 group-hover:text-secondary-300"
                )} />
                <span className="line-clamp-1">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  );
}
