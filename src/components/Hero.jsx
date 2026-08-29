import React from 'react';
import { Search, MapPin, CheckCircle2, Train, Zap, BadgeCheck } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Hero({ searchQuery, setSearchQuery, selectedType, setSelectedType, maxBudget, setMaxBudget }) {
  const { formatPrice } = useCurrency();

  const roomTypes = ['All', 'Loft Partition', 'Upper Partition', 'Lower Partition', 'Capsule Bed', 'Studio Partition', 'Window Partition'];

  return (
    <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 overflow-hidden">
      {/* Soft Ambient Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FAF4EC] to-transparent pointer-events-none -z-10 rounded-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Verified Highlight Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-xs text-xs font-semibold text-[#C5A059] mb-5 animate-fade-in">
          <BadgeCheck className="w-4 h-4 text-[#278A45] shrink-0" />
          <span>Verified Dubai Flatshares • 100% No Commission & No Deposit</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A2421] max-w-3xl mx-auto leading-snug tracking-tight">
          Affordable Private Rooms in Dubai for{' '}
          <span className="inline-block bg-gradient-to-r from-[#C5A059] to-[#9A7228] bg-clip-text text-transparent pb-1">
            Working Professionals
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#786C66] max-w-2xl mx-auto font-normal leading-relaxed">
          Clean, quiet, and fully furnished partition rooms, loft beds, and capsule spaces right next to Metro exits. Move in today with zero deposit & transparent pricing.
        </p>

        {/* Key Guarantees Badges - Fixed Height & Padding to Prevent Clipping */}
        <div className="my-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-[#2A2421]">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-[#278A45] shrink-0" />
            <span>No Deposit</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-[#278A45] shrink-0" />
            <span>Zero Commission</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <Train className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>1–4 Mins to Metro</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-2xs whitespace-nowrap">
            <Zap className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Free WiFi & DEWA Included</span>
          </div>
        </div>

        {/* Interactive Search & Filter Card - Balanced Heights & Alignment */}
        <div className="mt-8 max-w-4xl mx-auto bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-md border border-[#EFE6DF] text-left">
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
              <div className="h-11 flex items-center px-1 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl">
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
    </section>
  );
}
