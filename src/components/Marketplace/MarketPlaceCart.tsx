import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

export interface MarketplaceItem {
  id: string;
  title: string;
  price: number;
  image: string;
  vendor: string;
}

export interface CartEntry {
  item: MarketplaceItem;
  qty: number;
}

export function MarketplaceCart({
  items,
  onClose,
  onUpdateQty,
  onRemove,
  onCheckout,
}: {
  items: CartEntry[];
  onClose: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}) {
  const subtotal = items.reduce((s, i) => s + i.item.price * i.qty, 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-secondary-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-md bg-white flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <h2 className="font-black text-secondary-900 text-base">Your Cart</h2>
              <p className="text-xs text-secondary-500 font-medium">{items.length} item{items.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary-100 rounded-xl transition-colors">
            <X className="w-5 h-5 text-secondary-500" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-secondary-400" />
            </div>
            <div>
              <p className="font-bold text-secondary-700 mb-1">Your cart is empty</p>
              <p className="text-sm text-secondary-400">Add some products to get started</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4 custom-scrollbar">
              {items.map(({ item, qty }) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary-100 shrink-0 border border-secondary-200">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-wider">{item.vendor}</p>
                    <p className="text-sm font-bold text-secondary-900 leading-tight line-clamp-1">{item.title}</p>
                    <p className="text-sm font-black text-secondary-700 mt-0.5">${(item.price * qty).toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 bg-secondary-100 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQty(item.id, qty - 1)}
                          className="w-6 h-6 flex items-center justify-center text-secondary-600 hover:bg-white hover:shadow-sm rounded-md transition-all disabled:opacity-50"
                          disabled={qty <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-bold text-secondary-900">{qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, qty + 1)}
                          className="w-6 h-6 flex items-center justify-center text-secondary-600 hover:bg-white hover:shadow-sm rounded-md transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="w-7 h-7 flex items-center justify-center text-rose-500 hover:bg-rose-50 rounded-lg transition-colors ml-auto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-secondary-200 bg-secondary-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-secondary-700">Subtotal</span>
                <span className="text-xl font-black text-secondary-900">${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
