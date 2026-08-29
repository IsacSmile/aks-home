import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { MapPin, Train, ArrowRight, ShieldCheck, BadgeCheck, Users, Zap, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export function RoomCard({ room, onSelectRoom, onQuickBook }) {
  const { formatPrice, currency, getMultiCurrencyPrices } = useCurrency();
  const prices = getMultiCurrencyPrices(room.pricesAED.monthly);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = room.images && room.images.length > 0 ? room.images : ['/images/loft_partition.jpg'];

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 35;
    if (distance > minSwipeDistance) {
      nextImage(e);
    } else if (distance < -minSwipeDistance) {
      prevImage(e);
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-[#EFE6DF] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full animate-fade-in relative">
      
      {/* Room Photo Gallery Container with Touch Swipe & Arrow Controls */}
      <div 
        className="relative aspect-[4/3] bg-[#FAF6F0] overflow-hidden cursor-pointer select-none"
        onClick={() => onSelectRoom(room)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[activeImageIndex]}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Left & Right Arrows for Photo Gallery (Shown if > 1 Image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-md border border-white/60 transition-transform active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 text-[#2A2421]" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-md border border-white/60 transition-transform active:scale-95"
            >
              <ChevronRight className="w-4 h-4 text-[#2A2421]" />
            </button>

            {/* Pagination Dots Pill */}
            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeImageIndex ? 'w-3.5 bg-[#C5A059]' : 'w-1.5 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Top Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none z-10">
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#EBF7EE] text-[#278A45] border border-[#278A45]/30 flex items-center gap-1 shadow-xs">
            <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Verified
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#1E1B18]/85 text-white backdrop-blur-md shadow-xs">
            {room.managedBy || 'Managed by AKS'}
          </span>
        </div>

        {/* Bottom Metro Walking Distance Badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/95 text-[#2A2421] text-[11px] sm:text-xs font-extrabold backdrop-blur-md shadow-xs border border-white/70">
            <Train className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span className="truncate">{room.metroDistance}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
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

          {/* Title */}
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
        <div className="pt-3 border-t border-[#EFE6DF] flex items-end justify-between gap-2">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#786C66] block font-extrabold">
              ALL INCLUSIVE MONTHLY RENT
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#2A2421] tracking-tight">
                {formatPrice(room.pricesAED.monthly)}
              </span>
              <span className="text-xs text-[#786C66] font-bold">/mo</span>
            </div>
            
            {/* Multi-currency simultaneous preview */}
            <div className="text-[10px] sm:text-[11px] text-[#786C66] mt-0.5 font-semibold space-x-1">
              {currency !== 'AED' && <span>{prices.AED}</span>}
              {currency !== 'INR' && <span>({prices.INR})</span>}
              {currency !== 'USD' && <span>({prices.USD})</span>}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectRoom(room)}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#FAF0E6] text-[#2A2421] text-xs font-extrabold border border-[#EFE6DF] hover:border-[#C5A059]/40 transition-all shadow-2xs hover:shadow-xs active:scale-95"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(room)}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#2A2421] hover:bg-[#1E1B18] text-[#E6C98B] text-xs font-extrabold transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 group/btn active:scale-95 border border-[#2A2421]"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
