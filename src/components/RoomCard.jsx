import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { MapPin, Train, Check, Sparkles, ArrowRight, ShieldCheck, BadgeCheck, Users, Zap, Calendar } from 'lucide-react';

export function RoomCard({ room, onSelectRoom, onQuickBook }) {
  const { formatPrice, currency, getMultiCurrencyPrices } = useCurrency();
  const prices = getMultiCurrencyPrices(room.pricesAED.monthly);

  return (
    <div className="group bg-white rounded-2xl border border-[#EFE6DF] overflow-hidden shadow-sm hover:shadow-md hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full animate-fade-in relative">
      
      {/* Room Photo Gallery Container */}
      <div className="relative aspect-[4/3] bg-[#FAF6F0] overflow-hidden cursor-pointer" onClick={() => onSelectRoom(room)}>
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
          {/* Verified Listing Badge */}
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#EBF7EE] text-[#278A45] border border-[#278A45]/30 flex items-center gap-1 shadow-xs">
            <BadgeCheck className="w-3.5 h-3.5" /> Verified Listing
          </span>

          {/* Managed By Label */}
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#1E1B18]/85 text-white backdrop-blur-md shadow-xs">
            {room.managedBy || 'Managed by AKS'}
          </span>
        </div>

        {/* Bottom Metro Walking Distance Badge */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 text-[#2A2421] text-xs font-bold backdrop-blur-md shadow-sm border border-white/60">
            <Train className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="truncate">{room.metroDistance}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Room Type & Availability Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#C5A059] bg-[#FBF4E6] px-2.5 py-0.5 rounded-md border border-[#C5A059]/20">
              {room.type}
            </span>
            <span className="text-xs font-semibold text-[#278A45] bg-[#EBF7EE] px-2 py-0.5 rounded-md flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {room.availabilityDate}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectRoom(room)}
            className="text-base sm:text-lg font-bold text-[#2A2421] group-hover:text-[#C5A059] transition-colors cursor-pointer line-clamp-1"
          >
            {room.title}
          </h3>

          {/* Location */}
          <p className="text-xs text-[#786C66] flex items-center gap-1 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#A39690] shrink-0" />
            <span>{room.location}</span>
          </p>
        </div>

        {/* Key Trust Checklist Pills */}
        <div className="space-y-1.5 pt-2 border-t border-[#EFE6DF]">
          <div className="flex items-center justify-between text-xs text-[#786C66]">
            <span className="flex items-center gap-1 text-[#278A45] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> No Deposit • No Commission
            </span>
            <span className="flex items-center gap-1 text-[#C5A059] font-medium">
              <Zap className="w-3 h-3" /> All Inclusive
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#786C66] bg-[#FAF6F0] px-2.5 py-1 rounded-lg border border-[#EFE6DF]">
            <Users className="w-3 h-3 text-[#C5A059] shrink-0" />
            <span className="truncate">Peaceful & Respectful Flatmates</span>
          </div>
        </div>

        {/* Pricing & CTA Buttons */}
        <div className="pt-3 border-t border-[#EFE6DF] flex items-end justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#786C66] block font-bold">
              All Inclusive Monthly Rent
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-extrabold text-[#2A2421] tracking-tight">
                {formatPrice(room.pricesAED.monthly)}
              </span>
              <span className="text-xs text-[#786C66]">/mo</span>
            </div>
            
            {/* Multi-currency simultaneous preview */}
            <div className="text-[11px] text-[#A39690] mt-0.5 font-medium space-x-1">
              {currency !== 'AED' && <span>({prices.AED})</span>}
              {currency !== 'INR' && <span>({prices.INR})</span>}
              {currency !== 'USD' && <span>({prices.USD})</span>}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onSelectRoom(room)}
              className="px-3 py-2 rounded-xl bg-[#FAF6F0] hover:bg-[#F7EFEC] text-[#2A2421] text-xs font-semibold border border-[#EFE6DF] transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(room)}
              className="px-3.5 py-2 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold transition-all shadow-xs hover:shadow flex items-center gap-1"
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
