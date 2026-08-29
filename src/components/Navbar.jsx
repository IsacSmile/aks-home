import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { Building2, Globe, Shield, Menu, X, Home, Info, DoorOpen } from 'lucide-react';

export function Navbar({ activePage, setActivePage, onOpenAdmin }) {
  const { currency, setCurrency, EXCHANGE_RATES } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rooms', label: 'Explore Rooms', icon: Building2 },
    { id: 'about', label: 'About Us', icon: Info },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass-header transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-11 sm:h-12 w-11 sm:w-12 rounded-xl overflow-hidden shadow-md border border-[#C5A059]/40 bg-[#1E1B18] group-hover:scale-105 group-hover:border-[#C5A059] transition-all duration-300">
              <img 
                src="/images/aks_logo.jpg" 
                alt="AKS HOME Main Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-[#2A2421] group-hover:text-[#C5A059] transition-colors">
                AKS <span className="text-[#C5A059]">HOME</span>
              </span>
              <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#786C66] font-extrabold -mt-1">
                Partition Available
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FAF6F0] p-1.5 rounded-full border border-[#EFE6DF]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-[#2A2421] shadow-sm font-semibold'
                      : 'text-[#786C66] hover:text-[#2A2421] hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Currency Selector & Admin Trigger */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Real-time Currency Selector */}
            <div className="relative flex items-center gap-1.5 bg-white border border-[#EFE6DF] p-1 rounded-full shadow-sm">
              <div className="pl-2.5 text-[#C5A059]">
                <Globe className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-0.5">
                {Object.keys(EXCHANGE_RATES).map((currKey) => (
                  <button
                    key={currKey}
                    onClick={() => setCurrency(currKey)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                      currency === currKey
                        ? 'bg-[#C5A059] text-white shadow-xs'
                        : 'text-[#786C66] hover:text-[#2A2421] hover:bg-[#FDF8F3]'
                    }`}
                  >
                    {currKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Discreet Admin Button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#786C66] hover:text-[#C5A059] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#EFE6DF]"
              title="Admin Panel"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Currency Quick Switcher */}
            <div className="flex items-center bg-white border border-[#EFE6DF] p-1 rounded-full">
              {['AED', 'INR', 'USD'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${
                    currency === c ? 'bg-[#C5A059] text-white' : 'text-[#786C66]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A2421] hover:bg-[#F7EFEC] rounded-xl transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EFE6DF] bg-[#FDF8F3] px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-[#2A2421] shadow-sm font-semibold border border-[#EFE6DF]'
                    : 'text-[#786C66] hover:bg-white/60'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#C5A059]' : ''}`} />
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#EFE6DF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium text-[#786C66] hover:bg-white/60"
            >
              <Shield className="w-5 h-5 text-[#C5A059]" />
              <span>Admin Management</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
