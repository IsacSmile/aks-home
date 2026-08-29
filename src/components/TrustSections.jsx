import React, { useState } from 'react';
import { 
  ShieldCheck, Users, Zap, Train, Globe, CheckCircle2, 
  Star, Quote, UserCheck, Eye, DoorOpen, MessageCircle, 
  ChevronLeft, ChevronRight, MapPin, Sparkles, Building2, Briefcase
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const tenantFeedback = [
  {
    id: 'reshma',
    shortName: 'Reshma',
    name: 'Reshma Varghese',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    role: 'Senior Data Analyst',
    company: 'Fintech Corp, Business Bay',
    location: 'Baniyas Square Metro (2 mins walk)',
    badge: 'ZERO DEPOSIT MOVE-IN',
    tagColor: 'bg-[#EBF7EE] text-[#278A45]',
    quote: '"The zero deposit move-in and direct landlord pricing saved me so much initial capital when relocating to Dubai. Being 2 minutes walk from Baniyas Metro exit makes my daily office commute effortless and stress-free!"',
    city: 'Baniyas Square, Dubai'
  },
  {
    id: 'karthik',
    shortName: 'Karthik',
    name: 'Karthik Raja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    role: 'AI & Cloud Engineer',
    company: 'Tech Hub, Internet City',
    location: 'Al Rigga Metro Exit 2 (1 min walk)',
    badge: 'VERIFIED LOFT PARTITION',
    tagColor: 'bg-[#FBF4E6] text-[#C5A059]',
    quote: '"On-the-ground support is what sets AKS Home apart. The apartment is sparkling clean, the 1Gbps WiFi is lightning fast for remote work, and flatmates are quiet working professionals like myself."',
    city: 'Al Rigga, Dubai'
  },
  {
    id: 'rahul',
    shortName: 'Rahul',
    name: 'Rahul Sharma',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    role: 'Software Consultant',
    company: 'Consulting Group, DIFC',
    location: 'Al Maktoum St (Clock Tower)',
    badge: 'ALL BILLS INCLUDED',
    tagColor: 'bg-[#FBF4E6] text-[#C5A059]',
    quote: '"Clean room, peaceful environment, and zero hidden broker commissions. Everything from DEWA central AC to 1Gbps fiber internet is included in one transparent monthly rate. Highly recommended!"',
    city: 'Clock Tower Area, Dubai'
  },
  {
    id: 'priya',
    shortName: 'Priya',
    name: 'Priya Sundaram',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    role: 'Financial Accountant',
    company: 'Audit Firm, Deira',
    location: 'Gold Souk Metro Station',
    badge: 'RESPECTFUL FLATMATES',
    tagColor: 'bg-[#EBF7EE] text-[#278A45]',
    quote: '"I was concerned about privacy in flatsharing, but the partition rooms are sturdy, private, and fully air-conditioned. The flatmates observe strict quiet hours after 10 PM. A really peaceful place."',
    city: 'Deira Commercial Hub'
  },
  {
    id: 'ahmed',
    shortName: 'Ahmed',
    name: 'Ahmed Al-Mansoori',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    role: 'Retail Operations Manager',
    company: 'Retail Group, BurJuman',
    location: 'Union Metro Interchange',
    badge: '1-MIN METRO ACCESS',
    tagColor: 'bg-[#FBF4E6] text-[#C5A059]',
    quote: '"Exact walking distance to the Metro as advertised. The management team conducts regular deep cleaning of shared areas. Truly the best value flatshare in central Dubai!"',
    city: 'Union Hub, Dubai'
  },
  {
    id: 'fatima',
    shortName: 'Fatima',
    name: 'Fatima Khan',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    role: 'Marketing Executive',
    company: 'Digital Agency, Downtown',
    location: 'Baniyas Square Metro Exit 1',
    badge: 'FEMALE FRIENDLY & SECURE',
    tagColor: 'bg-[#EBF7EE] text-[#278A45]',
    quote: '"Safe, modern, and very well maintained. The manager was extremely polite on WhatsApp and set up my room viewing within an hour. Moved in same day with total peace of mind."',
    city: 'Baniyas Square, Dubai'
  },
  {
    id: 'daniel',
    shortName: 'Daniel',
    name: 'Daniel Torres',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    role: 'Hospitality Executive',
    company: 'Luxury Hotel, SZR Dubai',
    location: 'Al Rigga Metro Exit 2',
    badge: 'NO BROKERAGE FEE',
    tagColor: 'bg-[#FBF4E6] text-[#C5A059]',
    quote: '"Clear multi-currency pricing in AED, USD & INR. Zero deposit meant I didn\'t have thousands of Dirhams frozen upon arrival. Excellent service and super responsive management team!"',
    city: 'Al Rigga, Dubai'
  }
];

export function TrustSections({ onExploreRooms }) {
  const { formatPrice } = useCurrency();
  const [activeTenantIndex, setActiveTenantIndex] = useState(0);

  const activeTenant = tenantFeedback[activeTenantIndex];

  const handlePrevTenant = () => {
    setActiveTenantIndex((prev) => (prev - 1 + tenantFeedback.length) % tenantFeedback.length);
  };

  const handleNextTenant = () => {
    setActiveTenantIndex((prev) => (prev + 1) % tenantFeedback.length);
  };

  const trustPillars = [
    {
      icon: ShieldCheck,
      title: 'Zero Deposit & Zero Commission',
      desc: 'No heavy upfront security deposits or broker fees. Move in smoothly keeping your capital safe.'
    },
    {
      icon: Users,
      title: 'Peaceful & Respectful Flatmates',
      desc: 'All tenants are verified working professionals. Strict hygiene and quiet hour rules enforced.'
    },
    {
      icon: Zap,
      title: 'All-Inclusive Utilities & 1Gbps WiFi',
      desc: 'Free high-speed fiber internet, central AC, cooking gas, and weekly cleaning included.'
    },
    {
      icon: Train,
      title: '1 to 4 Mins Walk to Metro',
      desc: 'Strategic locations near Baniyas Square, Al Rigga, Clock Tower, and Union Metro exits.'
    },
    {
      icon: Globe,
      title: 'Transparent Multi-Currency Pricing',
      desc: 'Clear rates in AED, INR & USD simultaneously. What you see is exactly what you pay.'
    }
  ];

  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* 1. WHY PROFESSIONALS TRUST AKS HOME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE6DF] shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] bg-[#FBF4E6] px-3 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Guaranteed Satisfaction
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421]">
              Why Professionals Trust AKS Home
            </h2>
            <p className="text-sm text-[#786C66]">
              Built specifically for Dubai's working expats seeking clean, budget-friendly, and quiet living spaces near metro stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] hover:border-[#C5A059] transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#C5A059] border border-[#EFE6DF] flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#2A2421] leading-tight">{pillar.title}</h3>
                  <p className="text-xs text-[#786C66] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE TENANT REVIEWS & FEEDBACK CAROUSEL (Avatar Switcher UI) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E1B18] text-[#E6C98B] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-xs border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>VERIFIED TENANT REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421] tracking-tight">
            Real Residents. Genuine Feedback.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#786C66] max-w-lg mx-auto leading-relaxed font-medium">
            Hear directly from working professionals living in our Dubai metro flatshares.
          </p>
        </div>

        {/* Avatar Switcher Chips Bar (Scrollable on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-thin select-none px-1">
          {tenantFeedback.map((tenant, idx) => {
            const isActive = idx === activeTenantIndex;
            return (
              <button
                key={tenant.id}
                onClick={() => setActiveTenantIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border shrink-0 ${
                  isActive
                    ? 'bg-[#1E1B18] text-white border-[#1E1B18] shadow-md scale-105'
                    : 'bg-white text-[#786C66] border-[#EFE6DF] hover:bg-[#FAF6F0] hover:border-[#C5A059]/40'
                }`}
              >
                <img
                  src={tenant.avatar}
                  alt={tenant.name}
                  className={`w-6 h-6 rounded-full object-cover border ${
                    isActive ? 'border-[#C5A059]' : 'border-gray-200'
                  }`}
                />
                <span>{tenant.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tenant Feedback Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE6DF] shadow-xl shadow-black/[0.03] space-y-6 overflow-hidden transition-all duration-300">
          
          {/* Decorative Large Watermark Quote Icon */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[#C5A059]/10 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-1 fill-[#C5A059]/10 text-[#C5A059]" />
          </div>

          {/* Tenant Profile Top Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            
            <div className="flex items-center gap-4">
              {/* Tenant Photo with Verified Badge */}
              <div className="relative">
                <img
                  src={activeTenant.avatar}
                  alt={activeTenant.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#C5A059] shadow-md"
                />
                <span className="absolute -bottom-2 -right-1 bg-[#D93025] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs flex items-center gap-0.5 tracking-wider">
                  VERIFIED ✓
                </span>
              </div>

              {/* Name & Job Title */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C5A059] pb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-[#2A2421]">
                  {activeTenant.name}
                </h3>
                
                <p className="text-xs text-[#786C66] flex items-center gap-1.5 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{activeTenant.role}</span>
                  <span className="text-[#A39690]">•</span>
                  <span className="text-[#2A2421] font-semibold">{activeTenant.company}</span>
                </p>
              </div>
            </div>

            {/* Feature Tag Pill */}
            <div className="self-start sm:self-auto">
              <span className={`text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1.5 rounded-xl border border-[#C5A059]/20 shadow-2xs tracking-wider inline-block ${activeTenant.tagColor}`}>
                {activeTenant.badge}
              </span>
            </div>

          </div>

          {/* Quote Body Text */}
          <div className="pt-2 border-t border-[#EFE6DF] relative z-10">
            <p className="text-sm sm:text-lg text-[#2A2421] leading-relaxed italic font-medium">
              {activeTenant.quote}
            </p>
          </div>

          {/* Location Footer Bar inside Card */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#786C66] relative z-10">
            <div className="flex items-center gap-1.5 font-semibold text-[#2A2421]">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>{activeTenant.location}</span>
            </div>
            <span className="text-[11px] font-bold text-[#278A45] bg-[#EBF7EE] px-2.5 py-1 rounded-lg self-start sm:self-auto">
              📍 {activeTenant.city}
            </span>
          </div>

        </div>

        {/* Carousel Prev/Next Footer Controls */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold text-[#786C66]">
            Resident <span className="text-[#2A2421] font-extrabold">{activeTenantIndex + 1}</span> of {tenantFeedback.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevTenant}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#1E1B18] text-[#2A2421] hover:text-white border border-[#EFE6DF] flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextTenant}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-[#1E1B18] hover:bg-[#C5A059] text-white border border-[#1E1B18] flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </section>

      {/* 3. HOW IT WORKS (SIMPLE 3-STEP PROCESS) */}
      <section className="bg-[#1E1B18] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              How Move-In Works with AKS Home
            </h2>
            <p className="text-sm text-[#A39690]">
              No complicated contracts or agent commissions. Move into your private partition room in 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="p-6 rounded-2xl bg-[#2A2421] border border-[#38312D] space-y-3 relative">
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-white flex items-center justify-center">
                <DoorOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Browse Verified Rooms</h3>
              <p className="text-xs text-[#A39690] leading-relaxed">
                Explore real photos of compact partition rooms, loft beds, and capsule spaces near metro stations. Check rates in AED, INR & USD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#2A2421] border border-[#38312D] space-y-3 relative">
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-white flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Send Enquiry or WhatsApp</h3>
              <p className="text-xs text-[#A39690] leading-relaxed">
                Click "Send Enquiry" or WhatsApp us directly at <span className="text-[#C5A059] font-bold">+971 50 706 1925</span>. Our team responds within 30–60 minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#2A2421] border border-[#38312D] space-y-3 relative">
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-white flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Visit & Move In</h3>
              <p className="text-xs text-[#A39690] leading-relaxed">
                Schedule a viewing 7 days a week (10 AM – 9 PM). Move in with zero deposit, zero commission, and all bills included.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
