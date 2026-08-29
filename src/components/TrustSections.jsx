import React, { useState } from 'react';
import { 
  ShieldCheck, Users, Zap, Train, Globe, CheckCircle2, 
  Star, UserCheck, DoorOpen, MessageCircle, Quote,
  ChevronLeft, ChevronRight, MapPin, Sparkles, Building2, Briefcase
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const tenantFeedback = [
  {
    id: 'reshma',
    shortName: 'Reshma',
    name: 'Reshma Varghese',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    company: 'Fintech Corp, Business Bay',
    role: 'Senior Data Analyst',
    badge: '⚡ ZERO DEPOSIT',
    badgeType: 'Direct Landlord Rate',
    quote: '"The zero deposit move-in and direct landlord pricing saved me so much initial money when relocating to Dubai. Being 2 minutes walk from Baniyas Metro exit makes my daily commute effortless!"',
    location: 'Baniyas Square, Dubai'
  },
  {
    id: 'karthik',
    shortName: 'Karthik',
    name: 'Karthik Raja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    company: 'Tech Hub, Internet City',
    role: 'AI & Cloud Engineer',
    badge: '✈ METRO WELCOME',
    badgeType: 'On-Ground Support',
    quote: '"On-the-ground support in Dubai is what sets them apart. Being met near the Al Rigga Metro exit and helped into my clean partition room made day 1 feel like home."',
    location: 'Al Rigga, Dubai'
  },
  {
    id: 'faiz',
    shortName: 'Faiz',
    name: 'Faiz Imam',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    company: 'Consulting Group, DIFC',
    role: 'Software Consultant',
    badge: '🔒 ALL BILLS COVERED',
    badgeType: '1Gbps WiFi Included',
    quote: '"Everything from 1Gbps high-speed fiber WiFi to DEWA central AC is fully included in one transparent monthly rate. The flatmates are respectful and very quiet."',
    location: 'Clock Tower Area, Dubai'
  },
  {
    id: 'priya',
    shortName: 'Priya',
    name: 'Priya Sundaram',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    company: 'Audit Firm, Deira',
    role: 'Financial Accountant',
    badge: '🛡 RESPECTFUL LIVING',
    badgeType: 'Quiet Hours Enforced',
    quote: '"The partition rooms are private, clean, and sturdy. Strict quiet hours after 10 PM make it ideal for working professionals who need peaceful rest after work."',
    location: 'Deira Hub, Dubai'
  },
  {
    id: 'ahmed',
    shortName: 'Ahmed',
    name: 'Ahmed Al-Mansoori',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    company: 'Retail Group, BurJuman',
    role: 'Operations Manager',
    badge: '🚇 1-MIN METRO WALK',
    badgeType: 'Prime Metro Location',
    quote: '"Exact walking distance to the Metro exit as advertised. Weekly deep cleaning services keep the washrooms and kitchen in top hygienic condition."',
    location: 'Union Hub, Dubai'
  },
  {
    id: 'fatima',
    shortName: 'Fatima',
    name: 'Fatima Khan',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    company: 'Digital Agency, Downtown',
    role: 'Marketing Executive',
    badge: '✨ FEMALE FRIENDLY',
    badgeType: 'Secure Access',
    quote: '"Safe, modern, and very well maintained flatshares. The manager arranged a virtual video viewing on WhatsApp within minutes and I moved in the same evening."',
    location: 'Baniyas Square, Dubai'
  },
  {
    id: 'daniel',
    shortName: 'Daniel',
    name: 'Daniel Torres',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    company: 'Luxury Hotel, SZR Dubai',
    role: 'Hospitality Executive',
    badge: '💼 NO BROKERAGE FEE',
    badgeType: 'Transparent Rates',
    quote: '"Clear rates in AED, USD & INR simultaneously. Zero deposit meant no frozen cash upon landing in Dubai. Superior customer service and super friendly team!"',
    location: 'Al Rigga, Dubai'
  },
  {
    id: 'sneha',
    shortName: 'Sneha',
    name: 'Sneha Patel',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    company: 'Logistics Hub, JAFZA',
    role: 'Supply Chain Analyst',
    badge: '🔑 INSTANT MOVE-IN',
    badgeType: 'Verified Space',
    quote: '"Quick, professional, and friendly move-in process. The room looks exactly like the photos on the website. Extremely satisfied with AKS Home!"',
    location: 'Union Hub, Dubai'
  }
];

export function TrustSections({ onExploreRooms }) {
  const { formatPrice } = useCurrency();
  const [activeTenantIndex, setActiveTenantIndex] = useState(1);

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
    <div className="space-y-16 py-10 sm:py-16 text-left">
      
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

      {/* 2. FEEDBACK SECTION (Seamless Home Page Background + Refined Palette) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E1B18] text-[#E6C98B] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-xs border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>VERIFIED TENANT SUCCESS STORIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421] tracking-tight">
            Real Residents. Proven Pathways.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#786C66] max-w-lg mx-auto leading-relaxed font-normal">
            Hear directly from working professionals successfully living in top Dubai metro flatshares.
          </p>
        </div>

        {/* Staggered Avatar Pills Container */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-xl mx-auto px-2">
          {tenantFeedback.map((tenant, idx) => {
            const isActive = idx === activeTenantIndex;
            return (
              <button
                key={tenant.id}
                onClick={() => setActiveTenantIndex(idx)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-2xs border ${
                  isActive
                    ? 'bg-[#1E1B18] text-white border-[#1E1B18] shadow-md scale-105'
                    : 'bg-white text-[#2A2421] border-[#EFE6DF] hover:bg-[#FAF6F0] hover:border-[#C5A059]/40'
                }`}
              >
                <img
                  src={tenant.avatar}
                  alt={tenant.name}
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                />
                <span>{tenant.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Review Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-9 shadow-lg shadow-black/[0.03] border border-[#EFE6DF] space-y-5">
          
          {/* Big Quote Watermark in top right */}
          <div className="absolute top-5 right-6 text-[#C5A059]/15 pointer-events-none select-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 fill-[#C5A059]/10 text-[#C5A059]" />
          </div>

          {/* Header: Photo + Rating + Name + Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
            
            {/* Avatar Photo with VERIFIED ~ Badge overlapping bottom */}
            <div className="relative shrink-0">
              <img
                src={activeTenant.avatar}
                alt={activeTenant.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#EFE6DF] shadow-sm"
              />
              <span className="absolute -bottom-2 -left-1 bg-[#D93025] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-xs flex items-center gap-1 tracking-tight">
                <span>VERIFIED</span>
                <span className="text-[10px]">~</span>
              </span>
            </div>

            {/* Stars + Badge + Name + Details */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-0.5 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                
                {/* Gold Pill Badge */}
                <span className="bg-[#FBF4E6] text-[#C5A059] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#C5A059]/20">
                  {activeTenant.badge}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A2421]">
                {activeTenant.name}
              </h3>

              {/* Company & Role Details */}
              <div className="space-y-0.5 text-xs text-[#786C66]">
                <p className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{activeTenant.company}</span>
                </p>
                <p className="flex items-center gap-1.5 font-bold text-[#2A2421]">
                  <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{activeTenant.role}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <hr className="border-[#EFE6DF] my-2" />

          {/* Quote Paragraph */}
          <p className="text-xs sm:text-sm text-[#2A2421] leading-relaxed italic font-medium">
            {activeTenant.quote}
          </p>

          {/* Card Bottom Footer */}
          <div className="pt-2 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-[#2A2421] font-semibold">
              <MapPin className="w-4 h-4 text-[#278A45]" />
              <span>{activeTenant.location}</span>
            </div>

            <span className="bg-[#EBF7EE] text-[#278A45] text-[11px] font-bold px-3 py-1 rounded-xl border border-[#278A45]/20">
              ✓ {activeTenant.badgeType}
            </span>
          </div>

        </div>

        {/* Bottom Pagination & Controls */}
        <div className="flex items-center justify-between pt-2 px-1 text-xs font-semibold text-[#786C66]">
          <div>
            <span>Resident </span>
            <span className="font-extrabold text-[#2A2421]">{activeTenantIndex + 1}</span>
            <span> of {tenantFeedback.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevTenant}
              aria-label="Previous resident"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#FAF6F0] text-[#2A2421] border border-[#EFE6DF] flex items-center justify-center shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextTenant}
              aria-label="Next resident"
              className="w-10 h-10 rounded-full bg-[#1E1B18] hover:bg-[#C5A059] text-white flex items-center justify-center shadow-md transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </section>

      {/* 3. HOW IT WORKS (SIMPLE 3-STEP PROCESS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
        
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] bg-[#FBF4E6] px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421]">
            How Move-In Works with AKS Home
          </h2>
          <p className="text-xs sm:text-sm text-[#786C66]">
            No complicated contracts or agent commissions. Move into your private partition room in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3 relative hover:shadow-md hover:border-[#C5A059]/40 transition-all">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center font-bold text-sm border border-[#C5A059]/20">
              1
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <DoorOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Browse Verified Rooms</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Explore real photos of compact partition rooms, loft beds, and capsule spaces near metro stations. Check rates in AED, INR & USD.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3 relative hover:shadow-md hover:border-[#C5A059]/40 transition-all">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center font-bold text-sm border border-[#C5A059]/20">
              2
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Send Enquiry or WhatsApp</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Click "Send Enquiry" or WhatsApp us directly at <span className="text-[#C5A059] font-bold">+971 50 706 1925</span>. Our team responds within 30–60 minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs space-y-3 relative hover:shadow-md hover:border-[#C5A059]/40 transition-all">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center font-bold text-sm border border-[#C5A059]/20">
              3
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FBF4E6] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/20">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2A2421]">Visit & Move In</h3>
            <p className="text-xs text-[#786C66] leading-relaxed">
              Schedule a viewing 7 days a week (10 AM – 9 PM). Move in with zero deposit, zero commission, and all bills included.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
