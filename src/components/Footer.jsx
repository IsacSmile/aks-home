import React from 'react';
import { DoorOpen, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

// Official Original WhatsApp SVG Icon Component
function WhatsAppOriginalIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L.055 23.415l5.728-1.503A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" fill="#25D366"/>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" fill="#FFF"/>
    </svg>
  );
}

// Official Original Instagram Radial Gradient SVG Icon Component
function InstagramOriginalIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad-bg" cx="30%" cy="107%" r="125%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#ig-grad-bg)" />
      <path
        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.25-8.65a1.17 1.17 0 11-2.34 0 1.17 1.17 0 012.34 0zM12 4.2c2.54 0 2.84.01 3.84.05 1.01.05 1.55.21 1.92.36.49.19.84.41 1.2.78.37.36.59.71.78 1.2.15.37.31.91.36 1.92.04 1 .05 1.3.05 3.84s-.01 2.84-.05 3.84c-.05 1.01-.21 1.55-.36 1.92-.19.49-.41.84-.78 1.2-.36.37-.71.59-1.2.78-.37.15-.91.31-1.92.36-1 .04-1.3.05-3.84.05s-2.84-.01-3.84-.05c-1.01-.05-1.55-.21-1.92-.36-.49-.19-.84-.41-1.2-.78-.37-.36-.59-.71-.78-1.2-.15-.37-.31-.91-.36-1.92C4.21 14.84 4.2 14.54 4.2 12s.01-2.84.05-3.84c.05-1.01.21-1.55.36-1.92.19-.49.41-.84.78-1.2.36-.37.71-.59 1.2-.78.37-.15.91-.31 1.92-.36 1-.04 1.3-.05 3.84-.05M12 2.5c-2.58 0-2.91.01-3.92.06-1.02.05-1.71.21-2.32.44A5.02 5.02 0 003.94 4.8 5.02 5.02 0 002.14 6.6c-.23.61-.39 1.3-.44 2.32C1.65 9.93 1.64 10.26 1.64 12.84s.01 2.91.06 3.92c.05 1.02.21 1.71.44 2.32.25.65.59 1.2 1.12 1.74.54.53 1.09.87 1.74 1.12.61.23 1.3.39 2.32.44 1.01.05 1.34.06 3.92.06s2.91-.01 3.92-.06c1.02-.05 1.71-.21 2.32-.44a5.02 5.02 0 001.8-1.12c.53-.54.87-1.09 1.12-1.74.23-.61.39-1.3.44-2.32.05-1.01.06-1.34.06-3.92s-.01-2.91-.06-3.92c-.05-1.02-.21-1.71-.44-2.32a5.02 5.02 0 00-1.12-1.8 5.02 5.02 0 00-1.74-1.12c-.61-.23-1.3-.39-2.32-.44-1.01-.05-1.34-.06-3.92-.06z"
        fill="#FFF"
      />
    </svg>
  );
}

export function Footer({ setActivePage, onOpenAdmin }) {
  const { currency, setCurrency, EXCHANGE_RATES } = useCurrency();

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-[#A39690] pt-14 pb-8 border-t border-[#2A2421] transition-colors text-left">
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

          {/* Direct Contact Info & Official Social Icons */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Contact & Support</h4>
            <div className="space-y-3 text-xs">
              
              {/* Standalone Official Social Icon Buttons Bar */}
              <div className="flex items-center gap-3">
                
                {/* Official WhatsApp Button */}
                <a
                  href="https://wa.me/971507061925"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  title="WhatsApp: +971 50 706 1925"
                  className="w-10 h-10 rounded-xl bg-[#2A2421] border border-[#38312D] hover:border-[#25D366] flex items-center justify-center transition-all shadow-sm hover:scale-105 group"
                >
                  <WhatsAppOriginalIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

                {/* Official Instagram Button */}
                <a
                  href="https://instagram.com/akshomedubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  title="Instagram: @akshomedubai"
                  className="w-10 h-10 rounded-xl bg-[#2A2421] border border-[#38312D] hover:border-[#E1306C] flex items-center justify-center transition-all shadow-sm hover:scale-105 group"
                >
                  <InstagramOriginalIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

              </div>

              {/* Direct Text Contacts */}
              <div className="space-y-1.5 pt-1">
                <a
                  href="https://wa.me/971507061925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] font-bold hover:underline"
                >
                  <span>WhatsApp: +971 50 706 1925</span>
                </a>

                <a
                  href="https://instagram.com/akshomedubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E1306C] font-bold hover:underline"
                >
                  <span>Instagram: @akshomedubai</span>
                </a>

                <div className="flex items-center gap-2 text-[#A39690] pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>contact@akshome.ae</span>
                </div>
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
          <p className="flex items-center gap-1.5 font-medium">
            <span>Engineered by</span>
            <a
              href="https://www.instagram.com/faiz_imam__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] font-bold hover:text-white hover:underline transition-colors flex items-center gap-1 bg-[#2A2421] px-2.5 py-1 rounded-md border border-[#38312D]"
            >
              <span>Faiz.I</span>
              <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
