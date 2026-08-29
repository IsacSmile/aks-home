import React from 'react';
import { Search, MapPin, Sparkles, ShieldCheck, CheckCircle2, Train, Zap } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Hero({ searchQuery, setSearchQuery, selectedType, setSelectedType, maxBudget, setMaxBudget }) {
  const { formatPrice, currency } = useCurrency();

  const roomTypes = ['All', 'Loft Partition', 'Upper Partition', 'Lower Partition', 'Capsule Bed', 'Studio Partition'];

  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FAF4EC] to-transparent pointer-events-none -z-10 rounded-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Highlight Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EFE6DF] shadow-xs text-xs font-semibold text-[#C5A059] mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Prime Dubai Metro Locations • Direct Flatshare</span>
        </div>

        {/* Hero Tagline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2A2421] max-w-4xl mx-auto leading-tight sm:leading-none">
          Affordable Private Rooms in Dubai for <span className="text-[#C5A059] underline decoration-1 underline-offset-8">Working Professionals</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#786C66] max-w-2xl mx-auto font-normal">
          Clean, quiet, and fully furnished partition rooms, loft beds, and capsule spaces right next to metro exits. Move in today with zero deposit.
        </p>

        {/* Key Guarantees Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-[#2A2421]">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE6DF] shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> No Deposit
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE6DF] shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> No Commission
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE6DF] shadow-2xs">
            <Train className="w-4 h-4 text-[#C5A059]" /> 1–3 Mins Walk to Metro
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE6DF] shadow-2xs">
            <Zap className="w-4 h-4 text-[#C5A059]" /> Free High-Speed WiFi & DEWA
          </span>
        </div>

        {/* Interactive Search & Filter Card */}
        <div className="mt-10 max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md border border-[#EFE6DF] text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-[#786C66] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Location / Station
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Baniyas, Al Rigga, Deira..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] placeholder-[#A39690] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                />
                <Search className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
              </div>
            </div>

            {/* Room Type Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-[#786C66]">Room Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Room Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Budget Filter */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase text-[#786C66]">Max Monthly Rent</label>
                <span className="text-xs font-bold text-[#C5A059]">
                  {maxBudget ? formatPrice(maxBudget) : 'Any Price'}
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="2500"
                step="50"
                value={maxBudget || 2500}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
