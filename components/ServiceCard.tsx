
import React, { useState } from 'react';
import { Star, Clock, CheckCircle2, ShoppingCart, Info, Zap } from 'lucide-react';
import { Service, PricingTier } from '../types';

interface ServiceCardProps {
  service: Service;
  onAddToCart: (tier: PricingTier) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAddToCart }) => {
  const [selectedTier, setSelectedTier] = useState<PricingTier>(service.tiers[1]); 

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col">
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-6 left-6 flex gap-2">
           <div className="bg-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10px] font-black shadow-lg">
             <Star size={14} className="text-yellow-500 fill-yellow-500" />
             {service.rating}
           </div>
           <div className="bg-slate-900 text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10px] font-black shadow-lg">
             <Zap size={14} className="text-[#20b2aa]" />
             BESTSELLER
           </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">{service.title}</h3>
        </div>
        <p className="text-xs text-slate-500 mb-8 font-medium line-clamp-2">{service.description}</p>

        <div className="flex bg-slate-50 p-1 rounded-2xl mb-8 border border-slate-100">
          {service.tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier)}
              className={`flex-1 py-3 text-[10px] font-black rounded-xl transition-all ${
                selectedTier.id === tier.id 
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-100' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tier.name}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-10 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Included</span>
            <span className="text-[10px] font-black text-slate-400">{selectedTier.duration}</span>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {selectedTier.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-xs text-slate-700 font-bold">
                <CheckCircle2 size={16} className="text-[#20b2aa] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Price</span>
            <span className="text-2xl font-black text-slate-900">₹{selectedTier.price}</span>
          </div>
          <button 
            onClick={() => onAddToCart(selectedTier)}
            className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-slate-800 transition-all active:scale-90 shadow-xl shadow-slate-900/10"
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
