import React from 'react';
import { DoorOpen, Phone, Mail, MapPin, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Footer({ setActivePage, onOpenAdmin }) {
  const { currency, setCurrency, EXCHANGE_RATES } = useCurrency();

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-[#A39690] pt-14 pb-8 border-t border-[#2A2421] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-white">
                <DoorOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  AKS <span className="text-[#C5A059]">HOME</span>
                </span>
                <p className="text-[10px] tracking-wider uppercase text-[#A39690] font-medium -mt-1">
                  Dubai Flatshares
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A39690] leading-relaxed">
              Minimal, clean, and affordable partition rooms & capsule spaces for working professionals in Dubai. Zero deposit & zero commission guarantee.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2421] border border-[#38312D] text-[11px] text-[#C5A059] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent Pricing • No Hidden Fees</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('rooms')} className="hover:text-white transition-colors">
                  Explore Partition Rooms
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">
                  About AKS Home
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-[#C5A059] hover:underline transition-colors font-semibold">
                  Admin Portal Login
                </button>
              </li>
            </ul>
          </div>

          {/* Metro Areas Covered */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Prime Metro Areas</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Baniyas Square Metro Exit 1</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Al Maktoum St / Clock Tower</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Al Rigga Metro Station Exit 2</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Gold Souk & Union Metro Hubs</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>BurJuman Metro Station Exit 1</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Contact & Support</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/971507061925"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-bold hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
                <span>WhatsApp: +971 50 706 1925</span>
              </a>

              <div className="flex items-center gap-2 text-[#A39690]">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>contact@akshome.ae</span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-white block mb-1">Global Currency Display:</span>
                <div className="flex items-center gap-1">
                  {Object.keys(EXCHANGE_RATES).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                        currency === c
                          ? 'bg-[#C5A059] text-white'
                          : 'bg-[#2A2421] text-[#A39690] hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#2A2421] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#786C66]">
          <p>© {new Date().getFullYear()} AKS Home Dubai. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Dubai Working Expatriates</span>
            <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
          </p>
        </div>

      </div>
    </footer>
  );
}
