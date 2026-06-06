import React, { useState, useMemo } from 'react';
import {
  ShoppingCart, Search, Star, Filter, X, Plus, Minus, Trash2,
  ArrowLeft, Dumbbell, Zap, Package, Tag, TrendingUp, Award,
  ChevronDown, Heart, ShieldCheck, Truck, RotateCcw, Check,
  SlidersHorizontal, ChevronRight, CreditCard
} from 'lucide-react';

// ─── Product Data ────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Equipment', 'Apparel', 'Supplements', 'Accessories', 'Recovery'];

const PRODUCTS = [
  // Equipment
  {
    id: 1, category: 'Equipment',
    name: 'Pro Olympic Barbell 20kg',
    brand: 'IronForge',
    price: 189.99, originalPrice: 249.99,
    rating: 4.8, reviews: 342,
    badge: 'Best Seller',
    badgeColor: 'bg-amber-500',
    description: 'Competition-grade 20kg Olympic barbell with aggressive knurling and smooth rotating sleeves.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
    stock: 24, inStock: true,
    tags: ['strength', 'powerlifting'],
  },
  {
    id: 2, category: 'Equipment',
    name: 'Adjustable Dumbbell Set 5–52.5lbs',
    brand: 'PowerBlock',
    price: 329.00, originalPrice: 399.00,
    rating: 4.9, reviews: 891,
    badge: 'Top Rated',
    badgeColor: 'bg-primary-600',
    description: 'Replace 28 dumbbells. Adjusts in 2.5lb increments from 5 to 52.5lbs. Space-saving design.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&h=400&fit=crop',
    stock: 8, inStock: true,
    tags: ['strength', 'home gym'],
  },
  {
    id: 3, category: 'Equipment',
    name: 'Heavy-Duty Pull-Up Bar',
    brand: 'SteelFit',
    price: 79.95, originalPrice: null,
    rating: 4.6, reviews: 214,
    badge: null,
    badgeColor: null,
    description: 'Multi-grip doorframe pull-up bar. Supports 400lbs. No screws, no damage.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    stock: 45, inStock: true,
    tags: ['bodyweight', 'upper body'],
  },
  {
    id: 4, category: 'Equipment',
    name: 'Competition Kettlebell 24kg',
    brand: 'IronForge',
    price: 94.00, originalPrice: 110.00,
    rating: 4.7, reviews: 178,
    badge: 'Sale',
    badgeColor: 'bg-rose-500',
    description: 'Cast iron competition kettlebell with flat base. Consistent size across all weights.',
    image: 'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=400&h=400&fit=crop',
    stock: 19, inStock: true,
    tags: ['functional', 'cardio'],
  },
  // Apparel
  {
    id: 5, category: 'Apparel',
    name: 'ProDry Training Tee',
    brand: 'FitGear',
    price: 34.99, originalPrice: null,
    rating: 4.5, reviews: 564,
    badge: 'New',
    badgeColor: 'bg-emerald-600',
    description: 'Moisture-wicking performance tee with 4-way stretch. Anti-odor technology.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    stock: 120, inStock: true,
    tags: ['clothing', 'training'],
  },
  {
    id: 6, category: 'Apparel',
    name: 'Compression Shorts 7"',
    brand: 'FitGear',
    price: 42.00, originalPrice: 55.00,
    rating: 4.7, reviews: 389,
    badge: 'Sale',
    badgeColor: 'bg-rose-500',
    description: 'High-compression shorts with phone pocket. Flatlock seams for zero chafing.',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop',
    stock: 67, inStock: true,
    tags: ['clothing', 'running'],
  },
  {
    id: 7, category: 'Apparel',
    name: 'Weightlifting Shoes',
    brand: 'LiftPro',
    price: 139.00, originalPrice: null,
    rating: 4.8, reviews: 201,
    badge: 'Best Seller',
    badgeColor: 'bg-amber-500',
    description: '0.6" elevated heel for improved squat depth. TPU outsole. Metatarsal strap.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    stock: 32, inStock: true,
    tags: ['footwear', 'lifting'],
  },
  // Supplements
  {
    id: 8, category: 'Supplements',
    name: 'Whey Protein Isolate 5lb',
    brand: 'NutriPeak',
    price: 64.99, originalPrice: 79.99,
    rating: 4.9, reviews: 1204,
    badge: 'Top Rated',
    badgeColor: 'bg-primary-600',
    description: '25g protein per serving. Cold-processed isolate. 110 calories. Chocolate Fudge.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
    stock: 56, inStock: true,
    tags: ['protein', 'recovery'],
  },
  {
    id: 9, category: 'Supplements',
    name: 'Pre-Workout Extreme',
    brand: 'NutriPeak',
    price: 44.95, originalPrice: null,
    rating: 4.6, reviews: 678,
    badge: 'New',
    badgeColor: 'bg-emerald-600',
    description: '300mg caffeine, beta-alanine, citrulline malate. Intense focus and pump.',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop',
    stock: 3, inStock: true,
    tags: ['energy', 'performance'],
  },
  {
    id: 10, category: 'Supplements',
    name: 'Creatine Monohydrate 500g',
    brand: 'PureForm',
    price: 24.99, originalPrice: null,
    rating: 4.8, reviews: 932,
    badge: 'Best Value',
    badgeColor: 'bg-violet-600',
    description: 'Micronized Creapure creatine. Unflavoured, mixes instantly. 100 servings.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=400&h=400&fit=crop',
    stock: 88, inStock: true,
    tags: ['strength', 'muscle'],
  },
  // Accessories
  {
    id: 11, category: 'Accessories',
    name: 'Leather Lifting Belt 4"',
    brand: 'IronForge',
    price: 89.00, originalPrice: 115.00,
    rating: 4.7, reviews: 287,
    badge: 'Sale',
    badgeColor: 'bg-rose-500',
    description: 'Full-grain leather, 10mm thick. Single prong buckle. Sizes S–XXL.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    stock: 22, inStock: true,
    tags: ['powerlifting', 'safety'],
  },
  {
    id: 12, category: 'Accessories',
    name: 'Gym Chalk Block 8-pack',
    brand: 'GripMaster',
    price: 12.99, originalPrice: null,
    rating: 4.5, reviews: 416,
    badge: null,
    badgeColor: null,
    description: 'Pure magnesium carbonate chalk blocks. 2oz each. Better grip, fewer calluses.',
    image: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=400&h=400&fit=crop',
    stock: 200, inStock: true,
    tags: ['grip', 'training aid'],
  },
  {
    id: 13, category: 'Accessories',
    name: 'Smart Fitness Tracker Band',
    brand: 'FitTech',
    price: 79.99, originalPrice: 99.99,
    rating: 4.4, reviews: 523,
    badge: 'New',
    badgeColor: 'bg-emerald-600',
    description: 'Heart rate, SpO2, sleep tracking. 14-day battery. Water resistant to 50m.',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    stock: 41, inStock: true,
    tags: ['tech', 'tracking'],
  },
  // Recovery
  {
    id: 14, category: 'Recovery',
    name: 'Percussion Massage Gun Pro',
    brand: 'RecoverX',
    price: 149.00, originalPrice: 199.00,
    rating: 4.8, reviews: 741,
    badge: 'Best Seller',
    badgeColor: 'bg-amber-500',
    description: '6 attachments, 5 speeds, 3200rpm max. Near-silent motor. 5-hour battery life.',
    image: 'https://images.unsplash.com/photo-1615486364404-38b8bd1b9b6b?w=400&h=400&fit=crop',
    stock: 14, inStock: true,
    tags: ['recovery', 'massage'],
  },
  {
    id: 15, category: 'Recovery',
    name: 'Foam Roller High-Density 18"',
    brand: 'RecoverX',
    price: 28.00, originalPrice: null,
    rating: 4.6, reviews: 389,
    badge: null,
    badgeColor: null,
    description: 'EPP foam construction, 500lb weight capacity. Grid pattern for targeted release.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    stock: 73, inStock: true,
    tags: ['flexibility', 'myofascial'],
  },
  {
    id: 16, category: 'Recovery',
    name: 'Ice Bath Tub Portable',
    brand: 'ColdTherapy',
    price: 219.00, originalPrice: 279.00,
    rating: 4.5, reviews: 163,
    badge: 'Sale',
    badgeColor: 'bg-rose-500',
    description: 'Foldable 80-gallon cold plunge tub. Insulated cover included. Fits most bathrooms.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    stock: 6, inStock: true,
    tags: ['cold therapy', 'recovery'],
  },
];

// ─── Cart Item type ───────────────────────────────────────────────────────────
interface CartItem {
  product: typeof PRODUCTS[0];
  qty: number;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3 h-3 ${s <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-secondary-200 fill-secondary-200'}`}
          />
        ))}
      </div>
      <span className="text-xs text-secondary-400 font-medium">({count.toLocaleString()})</span>
    </div>
  );
}

function ProductCard({
  product,
  onAddToCart,
  onWishlist,
  wishlisted,
}: {
  product: typeof PRODUCTS[0];
  onAddToCart: (p: typeof PRODUCTS[0]) => void;
  onWishlist: (id: number) => void;
  wishlisted: boolean;
  key?: React.Key;
}) {
  const [added, setAdded] = useState(false);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-secondary-200 overflow-hidden group hover:shadow-xl hover:shadow-secondary-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/400x300/e2e8f0/94a3b8?text=${encodeURIComponent(product.category)}`;
          }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`${product.badgeColor} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg`}>
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="bg-rose-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow">
              -{discount}%
            </span>
          )}
        </div>
        {/* Low stock */}
        {product.stock <= 6 && (
          <div className="absolute bottom-3 left-3 bg-secondary-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            Only {product.stock} left
          </div>
        )}
        {/* Wishlist */}
        <button
          onClick={() => onWishlist(product.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <Heart className={`w-4 h-4 transition-colors ${wishlisted ? 'text-rose-500 fill-rose-500' : 'text-secondary-400'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-1">{product.brand}</p>
        <h3 className="font-bold text-secondary-900 text-sm leading-tight mb-2 line-clamp-2 flex-1">{product.name}</h3>

        <StarRating rating={product.rating} count={product.reviews} />

        <div className="flex items-end justify-between mt-3 pt-3 border-t border-secondary-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-secondary-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-secondary-400 line-through font-medium">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              added
                ? 'bg-emerald-500 text-white scale-95'
                : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5'
            }`}
          >
            {added ? (
              <><Check className="w-3.5 h-3.5" /> Added</>
            ) : (
              <><Plus className="w-3.5 h-3.5" /> Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({
  items,
  onClose,
  onUpdateQty,
  onRemove,
  onCheckout,
}: {
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}) {
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-secondary-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-md bg-white flex flex-col shadow-2xl">
        {/* Header */}
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
            <button onClick={onClose} className="mt-2 text-sm font-bold text-primary-600 hover:text-primary-700">
              Continue Shopping →
            </button>
          </div>
        ) : (
          <>
            {/* Free shipping bar */}
            {subtotal < 100 && (
              <div className="px-6 py-3 bg-amber-50 border-b border-amber-100">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs font-bold text-amber-800">
                    ${(100 - subtotal).toFixed(2)} away from free shipping!
                  </p>
                  <Truck className="w-4 h-4 text-amber-600" />
                </div>
                <div className="h-1.5 bg-amber-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / 100) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
            {subtotal >= 100 && (
              <div className="px-6 py-2 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <p className="text-xs font-bold text-emerald-700">You've unlocked free shipping!</p>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4 custom-scrollbar">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary-100 shrink-0 border border-secondary-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/64x64/e2e8f0/94a3b8?text=IMG`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-wider">{product.brand}</p>
                    <p className="text-sm font-bold text-secondary-900 leading-tight line-clamp-1">{product.name}</p>
                    <p className="text-sm font-black text-secondary-700 mt-0.5">${(product.price * qty).toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 bg-secondary-100 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQty(product.id, qty - 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Minus className="w-3 h-3 text-secondary-600" />
                        </button>
                        <span className="w-6 text-center text-xs font-black text-secondary-900">{qty}</span>
                        <button
                          onClick={() => onUpdateQty(product.id, qty + 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Plus className="w-3 h-3 text-secondary-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="text-secondary-300 hover:text-rose-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-secondary-200 px-6 py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-500 font-medium">Subtotal</span>
                <span className="font-bold text-secondary-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary-500 font-medium">Shipping</span>
                <span className={`font-bold ${shipping === 0 ? 'text-emerald-600' : 'text-secondary-900'}`}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-secondary-100 mt-2">
                <span className="font-black text-secondary-900">Total</span>
                <span className="font-black text-secondary-900">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={onCheckout}
                className="w-full bg-secondary-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Checkout
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-xs text-secondary-400 font-medium">
                  <ShieldCheck className="w-3 h-3" /> Secure checkout
                </div>
                <div className="flex items-center gap-1 text-xs text-secondary-400 font-medium">
                  <RotateCcw className="w-3 h-3" /> 30-day returns
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main StorePage ───────────────────────────────────────────────────────────

interface StorePageProps {
  fromDashboard?: boolean;
  onBack?: () => void;
}

function PaymentModal({ onClose, onPay }: { onClose: () => void, onPay: () => void }) {
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

export function StorePage({ fromDashboard = false, onBack }: StorePageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, searchQuery, sortBy]);

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) => prev.map((i) => i.product.id === id ? { ...i, qty } : i));
    }
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);
  };

  const handleCheckoutClick = () => {
    setCartOpen(false);
    setPaymentOpen(true);
  };

  const handlePaymentComplete = () => {
    setPaymentOpen(false);
    setCheckoutDone(true);
    setCartItems([]);
    setTimeout(() => setCheckoutDone(false), 4000);
  };

  const SORT_LABELS: Record<string, string> = {
    featured: 'Featured',
    'price-asc': 'Price: Low to High',
    'price-desc': 'Price: High to Low',
    rating: 'Top Rated',
  };

  return (
    <div className="min-h-screen bg-secondary-50 font-sans">
      
      {paymentOpen && (
        <PaymentModal onClose={() => setPaymentOpen(false)} onPay={handlePaymentComplete} />
      )}

      {/* Toast */}
      {checkoutDone && (
        <div className="fixed top-6 right-6 z-[60] bg-emerald-600 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <Check className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Order placed! 🎉</p>
            <p className="text-xs text-emerald-100">Thank you for your purchase.</p>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={(id) => setCartItems((prev) => prev.filter((i) => i.product.id !== id))}
          onCheckout={handleCheckoutClick}
        />
      )}

      {/* ── Header ── */}
      <div className="bg-white border-b border-secondary-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-sm font-semibold text-secondary-500 hover:text-secondary-900 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">{fromDashboard ? 'Dashboard' : 'Home'}</span>
              </button>
            )}
            {onBack && <div className="w-px h-5 bg-secondary-200" />}
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center shadow-md shadow-primary-500/25">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-black text-secondary-900 text-base uppercase tracking-tight">FitStore</span>
                <span className="hidden sm:inline text-[10px] text-secondary-400 font-bold uppercase tracking-widest ml-2">by FitEcosystem</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-sm hidden md:block">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 bg-secondary-100 rounded-xl text-sm text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-3.5 h-3.5 text-secondary-400" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2.5 bg-secondary-900 hover:bg-black text-white px-4 py-2.5 rounded-xl transition-all font-bold text-sm shadow-lg hover:-translate-y-0.5 group"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Hero banner ── */}
      <div className="bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl -translate-x-1/4 translate-y-1/2" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="sg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#sg)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-3 py-1 mb-4">
              <Zap className="w-3 h-3 text-primary-400" />
              <span className="text-[10px] font-black text-primary-300 uppercase tracking-widest">Member Exclusive Prices</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 leading-tight">
              Gym-Grade Equipment<br />
              <span className="text-primary-400">Delivered to You</span>
            </h1>
            <p className="text-secondary-400 font-medium text-sm max-w-sm">
              Professional equipment, supplements and apparel — curated for serious athletes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Truck, label: 'Free ship over $100' },
              { icon: RotateCcw, label: '30-day returns' },
              { icon: ShieldCheck, label: 'Secure checkout' },
              { icon: Award, label: 'Authentic products' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 bg-secondary-800/60 border border-secondary-700/60 rounded-xl px-3 py-2">
                <b.icon className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-xs font-bold text-secondary-300 whitespace-nowrap">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filters + Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white border border-secondary-200 text-secondary-600 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Mobile search */}
            <div className="relative flex-1 sm:hidden">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-secondary-200 rounded-xl text-sm text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 bg-white border border-secondary-200 hover:border-secondary-300 text-secondary-700 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                {SORT_LABELS[sortBy]}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-secondary-200 py-1 z-20">
                  {Object.entries(SORT_LABELS).map(([val, label]) => (
                    <button
                      key={val}
                      onClick={() => { setSortBy(val as typeof sortBy); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                        sortBy === val
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-secondary-700 hover:bg-secondary-50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-secondary-500 font-medium">
            Showing <span className="font-bold text-secondary-900">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> in <span className="font-bold text-primary-600">{activeCategory}</span></>}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-secondary-500 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span>New arrivals weekly</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-secondary-200">
            <Package className="w-12 h-12 text-secondary-300 mx-auto mb-4" />
            <p className="font-bold text-secondary-600 text-lg">No products found</p>
            <p className="text-secondary-400 text-sm mt-1">Try adjusting your search or filters</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onWishlist={toggleWishlist}
                wishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        )}

        {/* Bottom banner */}
        {filtered.length > 0 && (
          <div className="mt-12 bg-secondary-900 rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary-600/20 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-3 py-1 mb-4">
                <Tag className="w-3 h-3 text-primary-400" />
                <span className="text-[10px] font-black text-primary-300 uppercase tracking-widest">Member Benefit</span>
              </div>
              <h3 className="text-2xl font-black mb-2">Unlock 15% Off Everything</h3>
              <p className="text-secondary-400 font-medium text-sm mb-6 max-w-sm mx-auto">
                Upgrade to a Premium membership and save on every purchase in the store.
              </p>
              <button className="bg-primary-600 hover:bg-primary-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-primary-900/40 hover:-translate-y-0.5 text-sm">
                View Premium Plans
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
