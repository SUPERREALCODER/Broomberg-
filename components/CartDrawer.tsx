
import React, { useState } from 'react';
import { X, Trash2, Calendar, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { BOOKING_SLOTS } from '../constants';

interface CartDrawerProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (serviceId: string, tierId: string) => void;
  onCheckout: (slot: string, date: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ items, isOpen, onClose, onRemove, onCheckout }) => {
  const [selectedSlot, setSelectedSlot] = useState(BOOKING_SLOTS[0]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const total = items.reduce((sum, item) => sum + item.tier.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="px-6 py-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-slate-900">Summary</h2>
            <p className="text-xs text-slate-500 font-bold">{items.length} items added</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-10">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-6">
              <div className="bg-slate-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto text-slate-200 border border-slate-100">
                <ShieldCheck size={48} />
              </div>
              <p className="text-slate-400 font-bold">Your booking is empty.</p>
            </div>
          ) : (
            <>
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Selected Services</h3>
                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 relative group">
                      <div className="h-16 w-16 bg-slate-200 rounded-xl overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=100&q=80" className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm truncate">{item.serviceTitle}</h4>
                        <p className="text-xs text-[#20b2aa] font-bold">{item.tier.name} Plan</p>
                        <span className="block mt-2 font-black text-slate-900 text-sm">₹{item.tier.price}</span>
                      </div>
                      <button 
                        onClick={() => onRemove(item.serviceId, item.tier.id)}
                        className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-2xl group focus-within:border-[#20b2aa] transition-colors">
                    <Calendar size={20} className="text-slate-400 group-focus-within:text-[#20b2aa]" />
                    <input 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="flex-1 text-sm font-bold border-none focus:ring-0 outline-none cursor-pointer"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {BOOKING_SLOTS.map(slot => (
                      <button 
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-1 text-[10px] font-black rounded-xl border transition-all ${
                          selectedSlot === slot 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section className="p-5 bg-[#20b2aa]/5 rounded-[2rem] border border-[#20b2aa]/10 flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl text-[#20b2aa] shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">UC Safety Cover</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Insurance of up to ₹10,000 for this service.</p>
                </div>
              </section>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-slate-100 space-y-6 bg-white">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Item Total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>UC Safety & Conveyance</span>
                <span className="text-green-500 font-black">₹49</span>
              </div>
              <div className="flex justify-between text-xl font-black text-slate-900 pt-4">
                <span>Grand Total</span>
                <span>₹{total + 49}</span>
              </div>
            </div>

            <button 
              onClick={() => onCheckout(selectedSlot, selectedDate)}
              className="w-full bg-[#20b2aa] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-[#20b2aa]/30 hover:bg-[#1a928b] transition-all active:scale-[0.98]"
            >
              <CreditCard size={22} />
              Checkout • ₹{total + 49}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
