import React from 'react';
import { 
  ShieldCheck, Users, Zap, Train, Globe, CheckCircle2, 
  Star, Quote, UserCheck, Eye, DoorOpen, MessageCircle 
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function TrustSections({ onExploreRooms }) {
  const { formatPrice } = useCurrency();

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

  const testimonials = [
    {
      quote: "Clean room, peaceful environment, metro is 2 minutes away. No hidden charges. Highly recommended for working professionals.",
      name: "Rahul M.",
      role: "IT Professional",
      origin: "India",
      location: "Baniyas Square Metro",
      rating: 5
    },
    {
      quote: "Moving to Dubai was stressful until I found AKS Home. Zero deposit, zero commission, and super fast WiFi. The flatmates are quiet and respectful.",
      name: "Priya S.",
      role: "Financial Accountant",
      origin: "India",
      location: "Al Rigga Metro",
      rating: 5
    },
    {
      quote: "Exact walking distance to Metro as advertised. Managed professionally with regular deep cleaning. Best partition room value in Deira.",
      name: "Ahmed K.",
      role: "Retail Store Manager",
      origin: "Pakistan",
      location: "Clock Tower Area",
      rating: 5
    },
    {
      quote: "No broker fees and clear monthly rent in USD & INR. Very smooth move-in experience and 7-day viewing availability.",
      name: "Daniel T.",
      role: "Hospitality Executive",
      origin: "Philippines",
      location: "Union Metro Exit 3",
      rating: 5
    }
  ];

  return (
    <div className="space-y-16 py-12">
      
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

      {/* 2. HOW IT WORKS (SIMPLE 3-STEP PROCESS) */}
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

      {/* 3. REAL TENANT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] bg-[#FBF4E6] px-3 py-1 rounded-full border border-[#C5A059]/20 inline-block">
            Verified Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421]">
            Real Tenant Reviews
          </h2>
          <p className="text-sm text-[#786C66]">
            Hear from working professionals who found clean, peaceful partition rooms with AKS Home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white border border-[#EFE6DF] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-xs text-[#2A2421] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE6DF] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#2A2421]">{t.name}</h4>
                  <p className="text-[11px] text-[#786C66]">{t.role} • {t.origin}</p>
                </div>
                <span className="text-[10px] font-semibold text-[#C5A059] bg-[#FBF4E6] px-2 py-0.5 rounded">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
