import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { 
  X, MapPin, Calendar, CheckCircle2, ShieldCheck, 
  Sparkles, Train, Wifi, Coffee, Wind, Users, ArrowRight, MessageCircle, Eye, BadgeCheck
} from 'lucide-react';

export function RoomDetailModal({ room, onClose, onBookNow }) {
  if (!room) return null;

  const { formatPrice, currency, getMultiCurrencyPrices } = useCurrency();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const monthlyPrices = getMultiCurrencyPrices(room.pricesAED.monthly);
  const weeklyPrices = getMultiCurrencyPrices(room.pricesAED.weekly);
  const dailyPrices = getMultiCurrencyPrices(room.pricesAED.daily);

  const whatsappMessage = `Hi AKS Home, I'm interested in viewing: ${room.title} (${room.location}). Please share viewing availability.`;
  const whatsappUrl = `https://wa.me/971507061925?text=${encodeURIComponent(whatsappMessage)}`;

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
          
          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#EFE6DF]">
              <img
                src={room.images[activeImageIndex] || room.images[0]}
                alt={room.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              
              {/* Metro Distance Badge */}
              <div className="absolute bottom-3 left-3 bg-[#1E1B18]/85 text-white px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-xs">
                <Train className="w-4 h-4 text-[#C5A059]" />
                <span>{room.metroDistance}</span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            {room.images.length > 1 && (
              <div className="flex items-center gap-3">
                {room.images.map((imgUrl, idx) => (
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

          {/* Exact Amenity Badges Checklist Requested */}
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

          {/* Pricing Options Breakdown (Daily / Weekly / Monthly) */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786C66]">
              Rental Rate Options (All Inclusive Rates in AED, INR & USD)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Monthly Rate (Priority & Highlighted) */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#FAF4EC] to-white border-2 border-[#C5A059] shadow-sm flex flex-col justify-between">
                <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059] text-white">
                  Best Value
                </span>
                <div>
                  <span className="text-xs font-bold text-[#786C66] uppercase">Monthly Rent</span>
                  <div className="text-2xl font-extrabold text-[#2A2421] mt-1">
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

              {/* Weekly Rate */}
              <div className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#786C66] uppercase">Weekly Stay</span>
                  <div className="text-xl font-bold text-[#2A2421] mt-1">
                    {formatPrice(room.pricesAED.weekly)}
                    <span className="text-xs font-normal text-[#786C66]"> /week</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFE6DF] space-y-1 text-xs text-[#786C66]">
                  <div className="flex justify-between"><span>AED:</span> <span className="font-medium">{weeklyPrices.AED}</span></div>
                  <div className="flex justify-between"><span>INR:</span> <span className="font-medium">{weeklyPrices.INR}</span></div>
                  <div className="flex justify-between"><span>USD:</span> <span className="font-medium">{weeklyPrices.USD}</span></div>
                </div>
              </div>

              {/* Daily Rate */}
              <div className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#786C66] uppercase">Daily Stay</span>
                  <div className="text-xl font-bold text-[#2A2421] mt-1">
                    {formatPrice(room.pricesAED.daily)}
                    <span className="text-xs font-normal text-[#786C66]"> /day</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFE6DF] space-y-1 text-xs text-[#786C66]">
                  <div className="flex justify-between"><span>AED:</span> <span className="font-medium">{dailyPrices.AED}</span></div>
                  <div className="flex justify-between"><span>INR:</span> <span className="font-medium">{dailyPrices.INR}</span></div>
                  <div className="flex justify-between"><span>USD:</span> <span className="font-medium">{dailyPrices.USD}</span></div>
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
            <span className="text-xs text-[#786C66] block">All-Inclusive Monthly Rent</span>
            <div className="text-xl font-extrabold text-[#2A2421]">
              {formatPrice(room.pricesAED.monthly)} <span className="text-xs font-normal text-[#786C66]">({monthlyPrices.INR} • {monthlyPrices.USD})</span>
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
                onBookNow(room);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
