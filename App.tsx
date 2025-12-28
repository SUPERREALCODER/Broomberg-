
import React, { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ChatAgent from './components/ChatAgent';
import CartDrawer from './components/CartDrawer';
import { SERVICES } from './constants';
import { PricingTier, CartItem, ServiceCategory } from './types';
import { CheckCircle, ShieldCheck, Award, ThumbsUp, ChevronRight, Clock, Star, Zap, ShieldAlert, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');
  const [location, setLocation] = useState('New Delhi, NCR');

  const addToCart = (service: typeof SERVICES[0], tier: PricingTier) => {
    setCart(prev => {
      const existing = prev.find(item => item.serviceId === service.id && item.tier.id === tier.id);
      if (existing) return prev;
      return [...prev, { serviceId: service.id, serviceTitle: service.title, tier, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (serviceId: string, tierId: string) => {
    setCart(prev => prev.filter(item => !(item.serviceId === serviceId && item.tier.id === tierId)));
  };

  const handleCheckout = (slot: string, date: string) => {
    alert(`Thank you! Booking confirmed for ${date} at ${slot}. A professional will reach out shortly.`);
    setCart([]);
    setIsCartOpen(false);
  };

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        location={location} 
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-slate-900/10">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                4.8 Rating • 1.2M+ Bookings
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Home services <br />
                <span className="text-[#20b2aa]">simplified.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium">
                Professional cleaning, pest control, and sanitization. <br />
                Verified experts. Fixed pricing. Guaranteed results.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: <Zap />, label: 'Deep Clean' },
                  { icon: <ShieldCheck />, label: 'Pest Control' },
                  { icon: <Heart />, label: 'Bathrooms' },
                  { icon: <Award />, label: 'Painting' }
                ].map((item, i) => (
                  <button key={i} className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#20b2aa] hover:bg-white transition-all group">
                    <div className="text-slate-400 group-hover:text-[#20b2aa] transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative hidden lg:block">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                {/* Updated hero image with verified Unsplash ID that mirrors the user's provided aesthetic */}
                <img 
                  src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-[600px] object-cover" 
                  alt="Professional cleaning experts in blue uniform" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating UC-style safety card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 max-w-[280px] animate-bounce-slow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#20b2aa]/10 p-3 rounded-2xl">
                    <ShieldCheck className="text-[#20b2aa]" size={28} />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 text-lg">UC Safe</span>
                    <span className="text-xs text-slate-500">100% Insurance Covered</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#20b2aa] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UC Trust Bar */}
        <section className="bg-slate-50 border-y border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-10">
            {[
              { icon: <ShieldAlert size={28} />, title: "Premium Quality", sub: "Standardized equipment" },
              { icon: <ThumbsUp size={28} />, title: "Best Price", sub: "Upfront fixed costs" },
              { icon: <Star size={28} />, title: "Expert Pros", sub: "Verified & trained staff" },
              { icon: <Clock size={28} />, title: "On-time Service", sub: "Reschedule anytime" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-[#20b2aa]">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Broomberg Plus Membership */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="inline-block bg-[#20b2aa] text-white px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase">
                Member Exclusive
              </div>
              <h2 className="text-4xl font-black">Broomberg <span className="text-[#20b2aa]">Plus</span></h2>
              <p className="text-slate-400 max-w-md font-medium">Save ₹2,000+ annually with free visits, discounted rates, and priority booking.</p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition shadow-lg shadow-white/5">
                Join Now for ₹299
              </button>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl font-bold">15%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Member Discount</span>
               </div>
               <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl font-bold">Free</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Sanitization</span>
               </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#20b2aa]/10 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Services</h2>
              <div className="flex flex-wrap gap-2">
                {['All', ...Object.values(ServiceCategory)].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onAddToCart={(tier) => addToCart(service, tier)} 
              />
            ))}
          </div>
        </section>

        {/* Reviews Section - UC Social Proof */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">What our customers say</h2>
              <p className="text-slate-500 font-medium">Join 60,000+ satisfied homeowners in Delhi NCR.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Priya Sharma", role: "Vasant Kunj", review: "The deep cleaning was incredible. Every corner was scrubbed and sanitized. Highly professional staff!", rating: 5 },
                { name: "Rahul Verma", role: "Gurgaon Sec 45", review: "Best pest control service I have used. Totally odorless and very effective. No cockroaches for 4 months now.", rating: 5 },
                { name: "Anita Kapoor", role: "Greater Kailash", review: "On-time arrival and great attention to detail. The sofa shampooing made it look brand new. Recommended!", rating: 4 }
              ].map((rev, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} className="text-[#20b2aa] fill-[#20b2aa]" />)}
                  </div>
                  <p className="text-slate-700 italic font-medium leading-relaxed">"{rev.review}"</p>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-10 w-10 bg-slate-300 rounded-full" />
                    <div>
                      <span className="block font-bold text-slate-900">{rev.name}</span>
                      <span className="text-xs text-slate-500">{rev.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-24 mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Experience a cleaner home today.</h2>
            <p className="text-xl text-slate-500 font-medium">Book in under 60 seconds. Professionals arrive at your doorstep.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#20b2aa] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1a928b] transition shadow-xl shadow-[#20b2aa]/20 active:scale-95">
                Book a Cleaning
              </button>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition shadow-xl shadow-slate-900/10 active:scale-95">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-2 lg:col-span-1 space-y-8">
             <div className="text-3xl font-black text-white tracking-tighter">
              BROOMBERG<span className="text-[#20b2aa]">PRO</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Broomberg is India's premium destination for professional home services. 
              We use science, technology, and training to deliver perfect results every time.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition">Full Home Deep Clean</a></li>
              <li><a href="#" className="hover:text-white transition">Pest Control</a></li>
              <li><a href="#" className="hover:text-white transition">Sofa & Carpet</a></li>
              <li><a href="#" className="hover:text-white transition">Painting</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">About</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">Safety Protocols</a></li>
              <li><a href="#" className="hover:text-white transition">Join as a Pro</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Anti-Discrimination</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 text-center text-[10px] font-bold tracking-widest uppercase">
          © 2024 Broomberg Services Private Limited. Made in New Delhi.
        </div>
      </footer>

      <CartDrawer 
        items={cart} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <ChatAgent />
    </div>
  );
};

export default App;
