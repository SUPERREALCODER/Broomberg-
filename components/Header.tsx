
import React from 'react';
import { ShoppingBag, User, MapPin, Search } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  location: string;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, location }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-6 shrink-0">
          <div className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-1">
            BROOMBERG<span className="text-[#20b2aa]">PRO</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-100 transition">
            <MapPin size={16} className="text-[#20b2aa]" />
            <span>{location}</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search for 'Deep Cleaning' or 'Sofa'" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#20b2aa] focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <button 
            onClick={onOpenCart}
            className="group relative p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
          >
            <ShoppingBag size={22} className="text-slate-700 group-hover:text-[#20b2aa]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
          <button className="hidden sm:flex items-center gap-2 text-slate-900 font-bold text-sm px-4 py-3 hover:bg-slate-50 rounded-xl transition">
            <User size={20} />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
