import React from 'react';
import { 
  Building2, Train, ShieldCheck, HeartHandshake, CheckCircle2, 
  MapPin, Sparkles, Users, Wifi, DollarSign, DoorOpen 
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function About({ onExploreRooms }) {
  const { formatPrice } = useCurrency();

  const locations = [
    { name: 'Baniyas Square Metro Exit 1', desc: 'Deira commercial hub, 24/7 food courts & supermarkets', dist: '2 mins walk' },
    { name: 'Al Maktoum Street (Clock Tower)', desc: 'Prime corporate area near major office towers & banks', dist: '4 mins walk' },
    { name: 'Al Rigga Metro Station', desc: 'Lively dining district, Nesto Hypermarket & 24hr pharmacies', dist: '1 min walk' },
    { name: 'Gold Souk Metro Station', desc: 'Historic trading district with economical living spaces', dist: '3 mins walk' },
    { name: 'Union Metro Station', desc: 'Direct interchange station for both Red & Green lines', dist: '2 mins walk' },
    { name: 'BurJuman Metro Station', desc: 'Bur Dubai shopping & business hub right next to BurJuman Mall', dist: '3 mins walk' },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16 animate-fade-in">
      
      {/* Hero Banner Section */}
      <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 inline-block">
          About AKS Home Dubai
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2421] leading-tight">
          Hassle-Free Flatshares & Partition Rooms Built for <span className="text-[#C5A059]">Dubai's Professionals</span>
        </h1>

        <p className="text-base sm:text-lg text-[#786C66] leading-relaxed max-w-2xl mx-auto">
          We provide clean, private, affordable partition rooms, loft beds, and capsule spaces near top metro stations in Dubai. No deposit, no commission, peaceful flatmates, and transparent monthly pricing in AED, INR & USD.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Zero Deposit & Broker Fee</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Move in without frozen security deposits or agent fees. Keep your capital for living expenses.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Steps to Metro Stations</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              All properties are located within 1 to 4 minutes walk of key Metro exits, saving commute time & taxi costs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Respectful Flatmates</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Strict noise and hygiene guidelines ensure a quiet, peaceful environment for working professionals & shift workers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">All-Inclusive Utility Bills</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              High-speed 1Gbps WiFi, central AC, cooking gas, and weekly cleaning service are fully covered in one rate.
            </p>
          </div>

        </div>
      </div>

      {/* Prime Location Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE6DF] shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Prime Metro Networks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2421]">
              Our Featured Dubai Neighborhoods
            </h2>
            <p className="text-sm text-[#786C66]">
              Strategic locations chosen for maximum convenience, safety, and dining accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059] transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C5A059] bg-[#FBF4E6] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Train className="w-3 h-3" /> {loc.dist}
                  </span>
                  <MapPin className="w-4 h-4 text-[#A39690]" />
                </div>
                <h4 className="text-base font-bold text-[#2A2421]">{loc.name}</h4>
                <p className="text-xs text-[#786C66] leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onExploreRooms}
              className="px-8 py-3.5 rounded-2xl bg-[#C5A059] hover:bg-[#B38E46] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <DoorOpen className="w-5 h-5" />
              <span>Browse Available Rooms</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
