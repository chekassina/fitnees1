import React from 'react';

export function MembershipDistribution() {
  return (
    <div className="flex-1 flex flex-col justify-center h-full z-10 w-full mt-4">
      <div className="flex flex-col gap-4">
        <a href="/memberships/premium" className="flex items-center justify-between p-4 rounded-xl border border-secondary-700/50 hover:bg-secondary-800 hover:border-primary-400/50 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
            <p className="text-sm font-bold text-white group-hover:text-primary-100 transition-colors">Premium Memberships</p>
          </div>
          <span className="text-xs font-bold text-primary-300 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
        
        <a href="/memberships/standard" className="flex items-center justify-between p-4 rounded-xl border border-secondary-700/50 hover:bg-secondary-800 hover:border-teal-400/50 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-teal-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
            <p className="text-sm font-bold text-white group-hover:text-teal-100 transition-colors">Standard Memberships</p>
          </div>
          <span className="text-xs font-bold text-teal-300 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
        
        <a href="/memberships/basic" className="flex items-center justify-between p-4 rounded-xl border border-secondary-700/50 hover:bg-secondary-800 hover:border-rose-400/50 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(251,113,133,0.5)]"></div>
            <p className="text-sm font-bold text-white group-hover:text-rose-100 transition-colors">Basic Memberships</p>
          </div>
          <span className="text-xs font-bold text-rose-300 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>

        <a href="/memberships" className="flex items-center justify-between p-4 rounded-xl border border-secondary-700/50 hover:bg-secondary-800 hover:border-amber-400/50 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
            <p className="text-sm font-bold text-white group-hover:text-amber-100 transition-colors">Expired Memberships</p>
          </div>
          <span className="text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
