import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, ArrowRight, Mail, Lock } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

const authImages = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1574680093665-09f11eb142b4?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=1200&q=80&fit=crop",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&fit=crop"
];

export function Login() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % authImages.length);
    }, 5000); // 5 sec interval for smoother transitions
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a brief delay for UX
    setTimeout(() => {
      if (email === 'che@gmail.com' && password === 'che123') {
        login();
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans text-secondary-900">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24">
        <div className="w-full max-w-[420px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-secondary-900">NexFit</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">Welcome Back</h1>
          <p className="text-secondary-500 font-medium mb-10 text-lg">Enter your details to access the dashboard.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="text-rose-600 border border-rose-200 bg-rose-50 font-medium text-sm px-4 py-3 rounded-xl flex items-center">
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-secondary-900 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-secondary-400" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="block w-full pl-11 pr-4 py-3.5 rounded-xl border border-secondary-200 bg-secondary-50/50 text-secondary-900 font-medium placeholder:font-normal focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
               <div className="flex items-center justify-between ml-1">
                 <label className="block text-sm font-bold text-secondary-900">Password</label>
                 <a href="#" className="text-sm font-black tracking-wide text-primary-600 hover:text-primary-700 transition-colors">Forgot?</a>
               </div>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Lock className="h-5 w-5 text-secondary-400" />
                 </div>
                 <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3.5 rounded-xl border border-secondary-200 bg-secondary-50/50 text-secondary-900 font-medium placeholder:font-normal focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                  required
                 />
               </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-secondary-900 hover:bg-black disabled:bg-secondary-800 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-secondary-900/20 hover:shadow-xl hover:-translate-y-0.5 mt-8 group h-14"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-secondary-500 font-medium">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 font-black tracking-wide hover:text-primary-700 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image Slider */}
      <div className="hidden lg:block lg:w-1/2 relative bg-secondary-900 overflow-hidden">
        {authImages.map((src, index) => (
          <div 
             key={src}
             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
             <img src={src} className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Fitness ecosystem" />
          </div>
        ))}
        {/* Overlay Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/40 to-transparent"></div>
        
        <div className="absolute bottom-20 left-16 right-16">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl text-white shadow-2xl">
            <div className="mb-4">
              <span className="bg-primary-500 text-white text-xs font-black px-3 py-1 uppercase tracking-widest rounded-full">Pro Dashboard</span>
            </div>
            <h2 className="text-3xl font-black mb-4 tracking-tight leading-tight">Elevate Your Fitness Ecosystem</h2>
            <p className="text-white/80 font-medium leading-relaxed text-lg max-w-xl">
              Connect trainers, physical products, and eager clients into a seamless global platform. Built for performance and scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
