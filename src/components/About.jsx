import React from 'react';
import { 
  Building2, Train, ShieldCheck, HeartHandshake, CheckCircle2, 
  MapPin, Sparkles, Users, Wifi, DollarSign, DoorOpen, ArrowRight, MessageCircle, Clock, Award, Check
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function About({ onExploreRooms }) {
  const { formatPrice } = useCurrency();

  const locations = [
    { name: 'Baniyas Square Metro Exit 1', desc: 'Deira commercial hub, 24/7 food courts, hypermarkets & banks', dist: '2 mins walk' },
    { name: 'Al Maktoum Street (Clock Tower)', desc: 'Prime corporate area near major office towers, airline offices & dining', dist: '4 mins walk' },
    { name: 'Al Rigga Metro Station', desc: 'Lively dining district, Nesto Hypermarket & 24hr pharmacies', dist: '1 min walk' },
    { name: 'Gold Souk Metro Station', desc: 'Historic trading district with economical living spaces & bus terminal', dist: '3 mins walk' },
    { name: 'Union Metro Station', desc: 'Direct interchange station for both Red & Green metro lines', dist: '2 mins walk' },
    { name: 'BurJuman Metro Station', desc: 'Bur Dubai shopping & business hub right next to BurJuman Mall', dist: '3 mins walk' },
  ];

  const steps = [
    {
      step: '01',
      title: 'Explore & Choose Your Room',
      desc: 'Browse verified partition rooms, loft beds, or capsule spaces near top Dubai Metro exits. Select your preferred stay duration (Monthly, Weekly, Daily).'
    },
    {
      step: '02',
      title: 'Book a Viewing on WhatsApp',
      desc: 'Connect directly with our accommodation team on WhatsApp (+971 50 706 1925) for instant photos, videos, or same-day physical property viewings.'
    },
    {
      step: '03',
      title: 'Zero Deposit Move-In',
      desc: 'Pay transparent monthly rent with Zero Deposit and Zero Commission. Sign your simple agreement and move in hassle-free.'
    }
  ];

  return (
    <div className="py-6 sm:py-12 space-y-12 sm:space-y-16 animate-fade-in text-left">
      
      {/* 1. Hero Header Banner */}
      <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E1B18] text-[#E6C98B] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-xs border border-[#C5A059]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>ABOUT AKS HOME DUBAI</span>
        </div>
        
        <h1 className="text-2xl sm:text-5xl font-extrabold text-[#2A2421] leading-tight tracking-tight">
          Hassle-Free Flatshares Built for <span className="text-[#C5A059]">Dubai's Professionals</span>
        </h1>

        <p className="text-xs sm:text-base text-[#786C66] leading-relaxed max-w-2xl mx-auto font-normal">
          We offer clean, private, and budget-friendly partition rooms, loft beds, and capsule spaces next to major Metro stations in Dubai. No deposit, no commission, peaceful flatmates, and transparent all-inclusive monthly rates.
        </p>

        {/* Trust Stats Bar */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="p-3.5 bg-white rounded-2xl border border-[#EFE6DF] shadow-2xs text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#278A45] block">0 AED</span>
            <span className="text-[11px] font-bold text-[#786C66] uppercase">Deposit Required</span>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-[#EFE6DF] shadow-2xs text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#C5A059] block">1–3 Mins</span>
            <span className="text-[11px] font-bold text-[#786C66] uppercase">Walk to Metro</span>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-[#EFE6DF] shadow-2xs text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#2A2421] block">1Gbps</span>
            <span className="text-[11px] font-bold text-[#786C66] uppercase">High-Speed WiFi</span>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-[#EFE6DF] shadow-2xs text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#278A45] block">0 AED</span>
            <span className="text-[11px] font-bold text-[#786C66] uppercase">Broker Commission</span>
          </div>
        </div>
      </div>

      {/* 2. Three Simple Booking Step Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A059]">
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2421]">
            How Moving In Works
          </h2>
          <p className="text-xs sm:text-sm text-[#786C66]">
            From online selection to key handover in less than 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EFE6DF] shadow-sm hover:shadow-md hover:border-[#C5A059]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#C5A059] font-extrabold text-sm flex items-center justify-center border border-[#EFE6DF]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase text-[#278A45] bg-[#EBF7EE] px-2.5 py-0.5 rounded-md">
                    Fast Track
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2A2421]">{item.title}</h3>
                <p className="text-xs text-[#786C66] leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EFE6DF] flex items-center text-xs text-[#C5A059] font-bold gap-1">
                <span>Learn details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A059]">
            WHY CHOOSE AKS HOME
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2421]">
            Designed for Comfort & Savings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#2A2421]">Zero Deposit & Agent Fees</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Move in without frozen security deposits or heavy agency commissions. Keep your capital accessible.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <Train className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#2A2421]">Steps to Metro Station</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Properties are located 1 to 4 minutes walk from Metro exits, saving commute time & expensive taxi fares.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#2A2421]">Respectful Flatmates</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Strict quiet hours & hygiene codes ensure peaceful living for corporate workers, IT professionals & shift staff.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#2A2421]">All-Inclusive Utility Rate</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              1Gbps high-speed WiFi, central AC, cooking gas, and regular cleaning services are included in a single fee.
            </p>
          </div>

        </div>
      </div>

      {/* 4. Prime Location Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-10 border border-[#EFE6DF] shadow-sm space-y-6 sm:space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A059]">
              PRIME METRO NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2421]">
              Featured Dubai Neighborhoods
            </h2>
            <p className="text-xs sm:text-sm text-[#786C66]">
              Strategic locations chosen for safety, convenience, dining options & instant Metro access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {locations.map((loc, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059] transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#C5A059] bg-[#FBF4E6] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#C5A059]/20">
                    <Train className="w-3 h-3" /> {loc.dist}
                  </span>
                  <MapPin className="w-4 h-4 text-[#A39690]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#2A2421]">{loc.name}</h4>
                <p className="text-xs text-[#786C66] leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 5. Bottom Action Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#1E1B18] text-white shadow-xl space-y-6 text-center border border-[#C5A059]/30">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/20 px-3 py-1 rounded-full inline-block border border-[#C5A059]/30">
              INSTANT VIEWINGS AVAILABLE 7 DAYS A WEEK
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Find Your New Room in Dubai?
            </h3>
            <p className="text-xs sm:text-sm text-[#A39690]">
              Browse available partition rooms or chat directly with our manager on WhatsApp for immediate viewings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreRooms}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] active:scale-95 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <DoorOpen className="w-4 h-4" />
              <span>Browse All Rooms</span>
            </button>

            <a
              href="https://wa.me/971507061925"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Us (+971 50 706 1925)</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
