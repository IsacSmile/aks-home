import React from 'react';
import { Search, MapPin, CheckCircle2, Train, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Hero({ searchQuery, setSearchQuery, selectedType, setSelectedType, maxBudget, setMaxBudget }) {
  const { formatPrice } = useCurrency();

  const roomTypes = ['All', 'Loft Partition', 'Upper Partition', 'Lower Partition', 'Capsule Bed', 'Studio Partition', 'Window Partition'];

  const scrollToRooms = () => {
    const section = document.getElementById('rooms-grid-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Soft Ambient Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#FAF4EC] via-[#FAF4EC]/60 to-transparent pointer-events-none -z-10 rounded-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2A2421] leading-snug sm:leading-tight tracking-tight max-w-3xl mx-auto">
          Affordable Private Rooms in Dubai for{' '}
          <span className="relative inline-block text-[#C5A059] font-extrabold">
            Working Professionals
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#C5A059]/30 rounded-full" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#786C66] max-w-2xl mx-auto font-normal leading-relaxed">
          Clean partition rooms, loft beds & capsule spaces next to metro stations. Zero deposit. Zero commission.
        </p>

        {/* 4 Clean Minimal Trust Badges */}
        <div className="pt-1 pb-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-[#2A2421]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-[#278A45] shrink-0" />
            <span>No Deposit</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-[#278A45] shrink-0" />
            <span>No Commission</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <Train className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>1–3 Min Walk to Metro</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <Zap className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Free WiFi & DEWA</span>
          </div>
        </div>

        {/* Primary CTA & Secondary WhatsApp Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={scrollToRooms}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B38E46] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Browse Available Rooms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/971507061925"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#EBF7EE] text-[#25D366] border border-[#25D366]/40 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
            <span>WhatsApp Us (+971 50 706 1925)</span>
          </a>
        </div>

        {/* Interactive Search & Filter Card */}
        <div className="pt-6">
          <div className="max-w-4xl mx-auto bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm border border-[#EFE6DF] text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
              
              {/* Column 1: Search Location */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66] flex items-center gap-1 min-h-[20px]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Location / Station
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Baniyas, Al Rigga, Deira..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-9 pr-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] placeholder-[#A39690] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                  />
                  <Search className="w-4 h-4 text-[#A39690] absolute left-3 top-3.5" />
                </div>
              </div>

              {/* Column 2: Room Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66] flex items-center min-h-[20px]">
                  Room Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full h-11 px-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all cursor-pointer"
                >
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === 'All' ? 'All Room Types' : type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Column 3: Max Budget Range */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center min-h-[20px]">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66]">Max Rent</label>
                  <span className="text-xs font-bold text-[#C5A059]">
                    {maxBudget ? formatPrice(maxBudget) : 'Any Price'}
                  </span>
                </div>
                <div className="h-11 flex items-center px-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl">
                  <input
                    type="range"
                    min="600"
                    max="2300"
                    step="50"
                    value={maxBudget || 2300}
                    onChange={(e) => setMaxBudget(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
