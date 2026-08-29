import React, { useState, useEffect } from 'react';
import { Search, MapPin, CheckCircle2, Train, Zap, ArrowRight, MessageCircle, ChevronLeft, ChevronRight, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const heroSlides = [
  {
    url: '/images/loft_partition.jpg',
    title: 'Loft Partition with Window',
    location: 'Baniyas Square Metro Exit 1',
    price: '1,350 AED/mo'
  },
  {
    url: '/images/blue_partition.jpg',
    title: 'Compact Lower Partition',
    location: 'Al Rigga Metro Exit 2',
    price: '1,150 AED/mo'
  },
  {
    url: '/images/compact_bed.jpg',
    title: 'Executive Upper Partition',
    location: 'Al Maktoum St (Clock Tower)',
    price: '1,550 AED/mo'
  },
  {
    url: '/images/capsule_pod.jpg',
    title: 'Japanese Capsule Bed',
    location: 'Gold Souk Metro Station',
    price: '990 AED/mo'
  }
];

export function Hero({ searchQuery, setSearchQuery, selectedType, setSelectedType, maxBudget, setMaxBudget, compactMode = false }) {
  const { formatPrice } = useCurrency();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile Touch Swipe State
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const roomTypes = ['All', 'Loft Partition', 'Upper Partition', 'Lower Partition', 'Capsule Bed', 'Studio Partition', 'Window Partition'];

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (compactMode) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [compactMode]);

  const scrollToRooms = () => {
    const section = document.getElementById('rooms-grid-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
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
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const isFiltered = searchQuery || selectedType !== 'All' || maxBudget < 2300;

  // Compact Mode: Ultra-Modern Filter Bar for Explore Rooms Catalog Page
  if (compactMode) {
    return (
      <div className="bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl shadow-black/[0.03] border border-[#EFE6DF] space-y-4 text-left">
        
        {/* Quick Filter Type Chips (Horizontally Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A39690] shrink-0 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C5A059]" /> Quick Filter:
          </span>
          {roomTypes.map((type) => {
            const isSelected = selectedType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                  isSelected
                    ? 'bg-[#2A2421] text-white border-[#2A2421] shadow-xs'
                    : 'bg-[#FAF6F0] text-[#786C66] border-[#EFE6DF] hover:bg-white hover:border-[#C5A059]/40'
                }`}
              >
                {type === 'All' ? 'All Rooms' : type}
              </button>
            );
          })}
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 items-end pt-1">
          
          {/* Column 1: Search Location */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#786C66] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Location / Metro Station
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search station or area (e.g. Baniyas, Rigga)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 sm:h-12 pl-9 pr-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs sm:text-sm text-[#2A2421] placeholder-[#A39690] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
              />
              <Search className="w-4 h-4 text-[#A39690] absolute left-3 top-3.5 sm:top-4" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3.5 sm:top-4 text-xs font-bold text-[#A39690] hover:text-[#2A2421]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Column 2: Room Type Dropdown */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#786C66] flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" /> Room Layout Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full h-11 sm:h-12 px-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs sm:text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all cursor-pointer shadow-2xs"
            >
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'All' ? 'All Room Layouts' : type}
                </option>
              ))}
            </select>
          </div>

          {/* Column 3: Max Budget Range */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#786C66]">Max Budget</label>
              <span className="text-xs font-extrabold text-[#C5A059] bg-[#FDF8F3] px-2.5 py-0.5 rounded-md border border-[#C5A059]/20">
                {maxBudget ? formatPrice(maxBudget) : 'Any Price'}
              </span>
            </div>
            <div className="h-11 sm:h-12 flex items-center px-3 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl shadow-2xs">
              <input
                type="range"
                min="600"
                max="2300"
                step="50"
                value={maxBudget || 2300}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
            </div>
          </div>

        </div>

        {/* Active Filter Indicator & Clear Button */}
        {isFiltered && (
          <div className="pt-2 border-t border-[#EFE6DF] flex items-center justify-between text-xs text-[#786C66]">
            <span>Active filters applied</span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setMaxBudget(2300);
              }}
              className="flex items-center gap-1 text-[#C5A059] hover:text-[#99732F] font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    );
  }

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-[#FDF8F3]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-[#FAF4EC] via-[#FAF4EC]/50 to-transparent pointer-events-none -z-10 rounded-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Two-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 1. Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1B18] text-[#E6C98B] text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>PRIME METRO LOCATIONS</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#2A2421] leading-[1.15] tracking-tight">
              Affordable Private Rooms in Dubai{' '}
              <span className="block text-[#C5A059] font-extrabold mt-1">
                for Working Professionals
              </span>
            </h1>

            {/* 3. Short Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#786C66] max-w-xl leading-relaxed font-normal">
              Clean partition rooms, loft beds & capsule spaces next to metro stations. Zero deposit. Zero commission. Move in with peace of mind.
            </p>

            {/* 4. Two Action Buttons Side-by-Side */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={scrollToRooms}
                className="px-7 py-3.5 rounded-full bg-[#2A2421] hover:bg-[#1E1B18] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Browse Rooms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </button>

              <a
                href="https://wa.me/971507061925"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#EBF7EE] text-[#25D366] border border-[#25D366]/40 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 5. Bottom Small Trust Line */}
            <div className="pt-3 border-t border-[#EFE6DF] flex flex-wrap items-center gap-2 text-xs font-medium text-[#786C66]">
              <span className="flex items-center gap-1 font-semibold text-[#2A2421]">
                📍 Baniyas Square • Clock Tower • Deira
              </span>
              <span className="text-[#C5A059] font-bold hidden sm:inline">|</span>
              <span className="font-semibold text-[#278A45] bg-[#EBF7EE] px-2.5 py-0.5 rounded-full">
                No Deposit • No Commission
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: Large Image Carousel Card with Touch & Arrow Navigation */}
          <div className="lg:col-span-5">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EFE6DF] bg-[#FAF6F0] aspect-[4/3] sm:aspect-[4/3] group select-none cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Slides */}
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Subtle Dark Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Visible Left & Right Navigation Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-lg transition-transform active:scale-95 border border-white/70"
              >
                <ChevronLeft className="w-5 h-5 text-[#2A2421]" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2421] flex items-center justify-center shadow-lg transition-transform active:scale-95 border border-white/70"
              >
                <ChevronRight className="w-5 h-5 text-[#2A2421]" />
              </button>

              {/* Bottom Caption Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-sm text-left max-w-[75%] border border-white/40">
                  <span className="text-[10px] font-extrabold uppercase text-[#C5A059] block tracking-wider">
                    {heroSlides[currentSlide].title}
                  </span>
                  <p className="text-xs font-bold text-[#2A2421] truncate mt-0.5">
                    {heroSlides[currentSlide].location}
                  </p>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-2 rounded-full border border-white/20 pointer-events-auto">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-5 bg-[#C5A059]' : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Search & Filter Bar */}
        <div className="pt-2">
          <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-[#EFE6DF] text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
              
              {/* Column 1: Search Location */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66] flex items-center gap-1 min-h-[20px]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Search Location / Station
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Baniyas, Al Rigga, Deira..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-9 pr-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] placeholder-[#A39690] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                  />
                  <Search className="w-4 h-4 text-[#A39690] absolute left-3 top-3.5" />
                </div>
              </div>

              {/* Column 2: Room Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66] flex items-center min-h-[20px]">
                  Room Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full h-11 px-3.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all cursor-pointer"
                >
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === 'All' ? 'All Room Types' : type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Column 3: Max Budget Range */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center min-h-[20px]">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#786C66]">Max Rent</label>
                  <span className="text-xs font-bold text-[#C5A059]">
                    {maxBudget ? formatPrice(maxBudget) : 'Any Price'}
                  </span>
                </div>
                <div className="h-11 flex items-center px-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl">
                  <input
                    type="range"
                    min="600"
                    max="2300"
                    step="50"
                    value={maxBudget || 2300}
                    onChange={(e) => setMaxBudget(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
