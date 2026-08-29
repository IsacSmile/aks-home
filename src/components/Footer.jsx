import React from 'react';
import { DoorOpen, MapPin, Phone, Mail, Shield, Globe, Heart } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Footer({ setActivePage, onOpenAdmin }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <footer className="bg-[#1E1B18] text-white pt-12 pb-8 border-t border-[#332E2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#332E2A]">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-white font-bold">
                <DoorOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  AKS <span className="text-[#C5A059]">HOME</span>
                </span>
                <p className="text-[10px] tracking-wider uppercase text-[#A39690]">
                  Dubai Partition Rooms
                </p>
              </div>
            </div>
            
            <p className="text-xs text-[#A39690] leading-relaxed">
              Premium, budget-friendly partition rooms and loft beds near metro stations in Dubai. No deposit, no commission.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#D6CB99]">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('rooms')} className="hover:text-white transition-colors">
                  Explore Rooms & Partitions
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">
                  About AKS Home
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#C5A059]" />
                  <span>Admin Panel</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Metro Stations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Metro Locations</h4>
            <ul className="space-y-2 text-xs text-[#D6CB99]">
              <li>Baniyas Square Metro (Exit 1)</li>
              <li>Al Maktoum St / Clock Tower</li>
              <li>Al Rigga Metro (Exit 2)</li>
              <li>Gold Souk Metro Station</li>
              <li>Union Metro (Exit 3)</li>
              <li>BurJuman Metro Station</li>
            </ul>
          </div>

          {/* Currency & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Display Currency</h4>
            <div className="flex items-center gap-2">
              {['AED', 'INR', 'USD'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    currency === c
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#2A2421] text-[#A39690] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#A39690] pt-1">
              Prices updated in real-time. Base currency AED (1 AED ≈ 22.5 INR ≈ 0.272 USD).
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39690]">
          <p>© {new Date().getFullYear()} AKS Home Dubai. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Guaranteed Zero Commission & No Deposit</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
