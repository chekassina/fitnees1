import React from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-secondary-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-secondary-500 hover:bg-secondary-50 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <div className="relative w-full max-w-[200px] md:max-w-md hidden sm:block">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-secondary-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-secondary-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm sm:shadow-lg shadow-primary-200">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Quick Actions</span>
        </button>
        
        <div className="w-px h-6 bg-secondary-200 mx-1 sm:mx-2"></div>
        
        <a href="/notifications" className="relative p-2 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-50 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </a>
        
        <div className="relative group/menu">
          <a href="/profile" className="flex items-center gap-3 pl-2 pr-2 py-1 rounded-lg hover:bg-secondary-50 transition-colors">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-100 border border-primary-200 shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Admin user" className="w-full h-full object-cover" />
            </div>
            <div className="flex-col items-start hidden lg:flex">
              <span className="text-sm font-semibold text-secondary-900 leading-tight">Admin User</span>
              <span className="text-[10px] text-secondary-500 font-medium">Gym Manager</span>
            </div>
          </a>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all z-50">
            <a href="/profile" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-primary-600">Profile</a>
            <a href="/security" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-primary-600">Security</a>
            <div className="h-px bg-secondary-100 my-1"></div>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

