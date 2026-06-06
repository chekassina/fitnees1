import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck } from 'lucide-react';

export function PaymentModal({ onClose, onPay }: { onClose: () => void, onPay: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPay();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-secondary-200 flex items-center justify-between">
          <h3 className="font-bold text-secondary-900 text-lg">Add Card Details</h3>
          <button onClick={onClose} className="p-1 text-secondary-400 hover:text-secondary-600 rounded-lg hover:bg-secondary-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-secondary-700 uppercase tracking-wider mb-1.5">Card Number</label>
            <div className="relative">
              <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-4 pr-10 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
              <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-secondary-700 uppercase tracking-wider mb-1.5">Expiry Date</label>
              <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary-700 uppercase tracking-wider mb-1.5">CVC</label>
              <input required type="text" placeholder="123" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-secondary-700 uppercase tracking-wider mb-1.5">Cardholder Name</label>
            <input required type="text" placeholder="Name on card" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
          </div>
          
          <div className="pt-4 mt-6 border-t border-secondary-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-secondary-900 hover:bg-black text-white px-4 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  Pay Now
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
