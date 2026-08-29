import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { 
  X, MapPin, Calendar, CheckCircle2, ShieldCheck, 
  Sparkles, Train, Wifi, Coffee, Wind, Users, ArrowRight, MessageCircle, Eye, BadgeCheck, ChevronLeft, ChevronRight, Check
} from 'lucide-react';

export function RoomDetailModal({ room, onClose, onBookNow }) {
  if (!room) return null;

  const { formatPrice, currency, getMultiCurrencyPrices } = useCurrency();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState('Monthly'); // 'Monthly' | 'Weekly' | 'Daily'

  // Mobile Touch Swipe State
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = room.images && room.images.length > 0 ? room.images : ['/images/loft_partition.jpg'];

  const monthlyPrices = getMultiCurrencyPrices(room.pricesAED.monthly);
  const weeklyPrices = getMultiCurrencyPrices(room.pricesAED.weekly);
  const dailyPrices = getMultiCurrencyPrices(room.pricesAED.daily);

  const getCurrentPrice = () => {
    if (selectedDuration === 'Daily') return room.pricesAED.daily;
    if (selectedDuration === 'Weekly') return room.pricesAED.weekly;
    return room.pricesAED.monthly;
  };

  const getCurrentPrices = () => {
    if (selectedDuration === 'Daily') return dailyPrices;
    if (selectedDuration === 'Weekly') return weeklyPrices;
    return monthlyPrices;
  };

  const whatsappMessage = `Hi AKS Home, I'm interested in viewing: ${room.title} (${room.location}, ${selectedDuration} option). Please share viewing availability.`;
  const whatsappUrl = `https://wa.me/971507061925?text=${encodeURIComponent(whatsappMessage)}`;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
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

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto modal-overlay flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-xl border border-[#EFE6DF] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#EFE6DF] flex items-center justify-between bg-[#FDF8F3]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C5A059] text-white">
              {room.type}
            </span>
            <span className="text-xs font-bold text-[#278A45] bg-[#EBF7EE] px-2.5 py-1 rounded-full flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" /> Verified Listing
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#F7EFEC] border border-[#EFE6DF] text-[#2A2421] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body - Scrollable */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Photo Gallery with Touch Swipe & Arrows */}
          <div className="space-y-3">
            <div 
              className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#EFE6DF] select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[activeImageIndex] || images[0]}
                alt={room.title}
                className="w-full h-full object-cover transition-all duration-300 pointer-events-none"
              />
              
              {/* Photo Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-lg border border-white/70 transition-transform active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#2A2421]" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-lg border border-white/70 transition-transform active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5 text-[#2A2421]" />
                  </button>
                </>
              )}

              {/* Metro Distance Badge */}
              <div className="absolute bottom-3 left-3 bg-[#1E1B18]/85 text-white px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-xs">
                <Train className="w-4 h-4 text-[#C5A059]" />
                <span>{room.metroDistance}</span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-3">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A059] scale-105 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Location Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2421]">
              {room.title}
            </h2>
            <p className="text-sm text-[#786C66] mt-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{room.location}</span>
            </p>
          </div>

          {/* Key Amenities Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786C66]">
              Key Amenities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>✨</span> <span>{room.type} with Window</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>📍</span> <span>{room.metroDistance}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>🗓️</span> <span>{room.availabilityDate}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EBF7EE] border border-[#278A45]/20 text-xs font-semibold text-[#278A45]">
                <span>✅</span> <span>No Deposit Required</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EBF7EE] border border-[#278A45]/20 text-xs font-semibold text-[#278A45]">
                <span>✅</span> <span>No Commission</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>✅</span> <span>High-Speed 1Gbps WiFi Included</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>✅</span> <span>Clean & Sanitized Kitchen</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>✅</span> <span>24/7 Centralized AC</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF8F3] border border-[#EFE6DF] text-xs font-semibold text-[#2A2421]">
                <span>✅</span> <span>Peaceful & Respectful Flatmates</span>
              </div>
            </div>
          </div>

          {/* Pricing Options Breakdown - Fully Interactive Click-to-Select */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#786C66]">
                Rental Rate Options (Click Card to Select Duration)
              </h4>
              <span className="text-[11px] font-bold text-[#C5A059] bg-[#FBF4E6] px-2.5 py-0.5 rounded-md border border-[#C5A059]/30">
                Selected: {selectedDuration}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Monthly Rate Option Card */}
              <div 
                onClick={() => setSelectedDuration('Monthly')}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between select-none ${
                  selectedDuration === 'Monthly'
                    ? 'bg-gradient-to-b from-[#FAF4EC] to-white border-2 border-[#C5A059] shadow-md scale-[1.02]'
                    : 'bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059]/60 hover:bg-white opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#786C66] uppercase">Monthly Rent</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    selectedDuration === 'Monthly'
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#EFE6DF] text-[#786C66]'
                  }`}>
                    {selectedDuration === 'Monthly' ? '✓ SELECTED' : 'BEST VALUE'}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-extrabold text-[#2A2421]">
                    {formatPrice(room.pricesAED.monthly)}
                    <span className="text-xs font-normal text-[#786C66]"> /month</span>
                  </div>
                </div>
                
                {/* Simultaneous Multi-currency preview */}
                <div className="mt-4 pt-3 border-t border-[#EFE6DF] space-y-1 text-xs text-[#786C66]">
                  <div className="flex justify-between">
                    <span>AED Rate:</span>
                    <span className="font-semibold text-[#2A2421]">{monthlyPrices.AED}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>INR Equivalent:</span>
                    <span className="font-semibold text-[#2A2421]">{monthlyPrices.INR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>USD Equivalent:</span>
                    <span className="font-semibold text-[#2A2421]">{monthlyPrices.USD}</span>
                  </div>
                </div>
              </div>

              {/* Weekly Rate Option Card */}
              <div 
                onClick={() => setSelectedDuration('Weekly')}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between select-none ${
                  selectedDuration === 'Weekly'
                    ? 'bg-gradient-to-b from-[#FAF4EC] to-white border-2 border-[#C5A059] shadow-md scale-[1.02]'
                    : 'bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059]/60 hover:bg-white opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#786C66] uppercase">Weekly Stay</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    selectedDuration === 'Weekly'
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#EFE6DF] text-[#786C66]'
                  }`}>
                    {selectedDuration === 'Weekly' ? '✓ SELECTED' : 'FLEXIBLE'}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-extrabold text-[#2A2421]">
                    {formatPrice(room.pricesAED.weekly)}
                    <span className="text-xs font-normal text-[#786C66]"> /week</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE6DF] space-y-1 text-xs text-[#786C66]">
                  <div className="flex justify-between"><span>AED:</span> <span className="font-semibold text-[#2A2421]">{weeklyPrices.AED}</span></div>
                  <div className="flex justify-between"><span>INR:</span> <span className="font-semibold text-[#2A2421]">{weeklyPrices.INR}</span></div>
                  <div className="flex justify-between"><span>USD:</span> <span className="font-semibold text-[#2A2421]">{weeklyPrices.USD}</span></div>
                </div>
              </div>

              {/* Daily Rate Option Card */}
              <div 
                onClick={() => setSelectedDuration('Daily')}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between select-none ${
                  selectedDuration === 'Daily'
                    ? 'bg-gradient-to-b from-[#FAF4EC] to-white border-2 border-[#C5A059] shadow-md scale-[1.02]'
                    : 'bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059]/60 hover:bg-white opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#786C66] uppercase">Daily Stay</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    selectedDuration === 'Daily'
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#EFE6DF] text-[#786C66]'
                  }`}>
                    {selectedDuration === 'Daily' ? '✓ SELECTED' : 'SHORT STAY'}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-extrabold text-[#2A2421]">
                    {formatPrice(room.pricesAED.daily)}
                    <span className="text-xs font-normal text-[#786C66]"> /day</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE6DF] space-y-1 text-xs text-[#786C66]">
                  <div className="flex justify-between"><span>AED:</span> <span className="font-semibold text-[#2A2421]">{dailyPrices.AED}</span></div>
                  <div className="flex justify-between"><span>INR:</span> <span className="font-semibold text-[#2A2421]">{dailyPrices.INR}</span></div>
                  <div className="flex justify-between"><span>USD:</span> <span className="font-semibold text-[#2A2421]">{dailyPrices.USD}</span></div>
                </div>
              </div>

            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-2 pt-2 border-t border-[#EFE6DF]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786C66]">
              About This Space
            </h4>
            <p className="text-sm text-[#786C66] leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Viewing Available Note */}
          <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EFE6DF] flex items-center justify-between text-xs text-[#2A2421]">
            <div className="flex items-center gap-2 font-semibold">
              <Eye className="w-4 h-4 text-[#C5A059]" />
              <span>Viewing available 7 days a week (10:00 AM – 9:00 PM)</span>
            </div>
            <span className="text-[11px] font-bold text-[#278A45] bg-[#EBF7EE] px-2.5 py-0.5 rounded">
              Instant Booking
            </span>
          </div>

        </div>

        {/* Bottom CTA Actions */}
        <div className="p-4 sm:p-6 bg-[#FDF8F3] border-t border-[#EFE6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs text-[#786C66] block">
              All-Inclusive {selectedDuration} Rate
            </span>
            <div className="text-xl font-extrabold text-[#2A2421]">
              {formatPrice(getCurrentPrice())} <span className="text-xs font-normal text-[#786C66]">({getCurrentPrices().INR} • {getCurrentPrices().USD})</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Now (+971 50 706 1925)</span>
            </a>
            
            <button
              onClick={() => {
                onClose();
                onBookNow(room, selectedDuration);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] active:scale-95 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Send Enquiry ({selectedDuration})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
