import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { MapPin, Train, ArrowRight, ShieldCheck, BadgeCheck, Users, Zap, Calendar } from 'lucide-react';

export function RoomCard({ room, onSelectRoom, onQuickBook }) {
  const { formatPrice, currency, getMultiCurrencyPrices } = useCurrency();
  const prices = getMultiCurrencyPrices(room.pricesAED.monthly);

  return (
    <div className="group bg-white rounded-2xl border border-[#EFE6DF] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full animate-fade-in relative">
      
      {/* Room Photo Gallery Container */}
      <div className="relative aspect-[4/3] bg-[#FAF6F0] overflow-hidden cursor-pointer" onClick={() => onSelectRoom(room)}>
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges Overlay - Compact Mobile Padding */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none gap-1.5">
          {/* Verified Listing Badge */}
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#EBF7EE] text-[#278A45] border border-[#278A45]/30 flex items-center gap-1 shadow-xs">
            <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Verified
          </span>

          {/* Managed By Label */}
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#1E1B18]/85 text-white backdrop-blur-md shadow-xs">
            {room.managedBy || 'Managed by AKS'}
          </span>
        </div>

        {/* Bottom Metro Walking Distance Badge - Compact */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/95 text-[#2A2421] text-[11px] sm:text-xs font-extrabold backdrop-blur-md shadow-xs border border-white/70">
            <Train className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span className="truncate">{room.metroDistance}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body - Reduced Mobile Padding & Compact Spacing */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Room Type & Availability Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-[#C5A059] bg-[#FBF4E6] px-2 py-0.5 rounded-md border border-[#C5A059]/20">
              {room.type}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#278A45] bg-[#EBF7EE] px-2 py-0.5 rounded-md flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {room.availabilityDate}
            </span>
          </div>

          {/* Title - Optimized Font Size & Line Height for Mobile */}
          <h3 
            onClick={() => onSelectRoom(room)}
            className="text-base sm:text-lg font-bold text-[#2A2421] leading-snug group-hover:text-[#C5A059] transition-colors cursor-pointer line-clamp-2 mt-1"
          >
            {room.title}
          </h3>

          {/* Location */}
          <p className="text-xs text-[#786C66] flex items-center gap-1 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#A39690] shrink-0" />
            <span className="truncate">{room.location}</span>
          </p>
        </div>

        {/* Key Trust Checklist Pills */}
        <div className="space-y-1 pt-2 border-t border-[#EFE6DF]">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#786C66]">
            <span className="flex items-center gap-1 text-[#278A45] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> No Deposit • No Commission
            </span>
            <span className="flex items-center gap-1 text-[#C5A059] font-medium hidden sm:flex">
              <Zap className="w-3 h-3 shrink-0" /> All Inclusive
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#786C66] bg-[#FAF6F0] px-2.5 py-1 rounded-lg border border-[#EFE6DF]">
            <Users className="w-3 h-3 text-[#C5A059] shrink-0" />
            <span className="truncate">Peaceful & Respectful Flatmates</span>
          </div>
        </div>

        {/* Pricing & Compact Action Buttons */}
        <div className="pt-2.5 border-t border-[#EFE6DF] flex items-end justify-between gap-2">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#786C66] block font-bold">
              ALL INCLUSIVE MONTHLY RENT
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-lg sm:text-2xl font-extrabold text-[#2A2421] tracking-tight">
                {formatPrice(room.pricesAED.monthly)}
              </span>
              <span className="text-xs text-[#786C66]">/mo</span>
            </div>
            
            {/* Multi-currency simultaneous preview */}
            <div className="text-[10px] sm:text-[11px] text-[#A39690] mt-0.5 font-medium space-x-1">
              {currency !== 'AED' && <span>({prices.AED})</span>}
              {currency !== 'INR' && <span>({prices.INR})</span>}
              {currency !== 'USD' && <span>({prices.USD})</span>}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onSelectRoom(room)}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#FAF6F0] hover:bg-[#F7EFEC] text-[#2A2421] text-xs font-semibold border border-[#EFE6DF] transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(room)}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold transition-all shadow-xs hover:shadow flex items-center gap-1"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
