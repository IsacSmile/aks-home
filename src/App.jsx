import React, { useState, useEffect } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { initialRooms } from './data/initialRooms';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomCard } from './components/RoomCard';
import { RoomDetailModal } from './components/RoomDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { About } from './components/About';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import { TrustSections } from './components/TrustSections';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { DoorOpen, Sparkles, Building2, Train, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  // 1. Rooms State with LocalStorage Persistence
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('aks_rooms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved rooms', e);
      }
    }
    return initialRooms;
  });

  useEffect(() => {
    localStorage.setItem('aks_rooms', JSON.stringify(rooms));
  }, [rooms]);

  // 2. Enquiries State with LocalStorage Persistence
  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('aks_enquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved enquiries', e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('aks_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  // 3. Navigation & Router State
  const [activePage, setActivePage] = useState('home'); // 'home' | 'rooms' | 'about'

  // 4. Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [maxBudget, setMaxBudget] = useState(2300);

  // 5. Modal Controllers
  const [selectedDetailRoom, setSelectedDetailRoom] = useState(null);
  const [selectedEnquiryRoom, setSelectedEnquiryRoom] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Handlers for Room CRUD
  const handleSaveRoom = (roomPayload) => {
    setRooms((prev) => {
      const exists = prev.some((r) => r.id === roomPayload.id);
      if (exists) {
        return prev.map((r) => (r.id === roomPayload.id ? roomPayload : r));
      } else {
        return [roomPayload, ...prev];
      }
    });
  };

  const handleDeleteRoom = (roomId) => {
    setRooms((prev) => prev.filter((r) => r.id !== roomId));
  };

  const handleResetSeed = () => {
    if (confirm('Reset rooms data to original 6 sample listings?')) {
      setRooms(initialRooms);
    }
  };

  // Handler for New Enquiry Submission
  const handleSubmitEnquiry = (enquiryPayload) => {
    console.log('New Enquiry Received:', enquiryPayload);
    setEnquiries((prev) => [enquiryPayload, ...prev]);
  };

  const handleDeleteEnquiry = (enquiryId) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== enquiryId));
  };

  // Filtered Rooms List
  const filteredRooms = rooms.filter((room) => {
    // 1. Text Search (title, location, metro distance)
    const matchesSearch =
      !searchQuery ||
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.metroDistance.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Room Type
    const matchesType = selectedType === 'All' || room.type === selectedType;

    // 3. Max Budget (Monthly AED)
    const matchesBudget = !maxBudget || room.pricesAED.monthly <= maxBudget;

    return matchesSearch && matchesType && matchesBudget;
  });

  return (
    <CurrencyProvider>
      <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#2A2421]">
        
        {/* Top Navbar */}
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Main Page View Area */}
        <main className="flex-1">
          
          {/* HOME PAGE */}
          {activePage === 'home' && (
            <div>
              {/* Hero Banner with Search Bar */}
              <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                maxBudget={maxBudget}
                setMaxBudget={setMaxBudget}
              />

              {/* Rooms Grid Section */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EFE6DF] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                        Verified Private Flatshares
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A2421] mt-1">
                      Available Room Partitions & Loft Beds
                    </h2>
                  </div>

                  <div className="text-xs text-[#786C66] font-semibold bg-white px-3 py-1.5 rounded-xl border border-[#EFE6DF] self-start sm:self-auto">
                    Showing <span className="text-[#C5A059] font-bold">{filteredRooms.length}</span> of {rooms.length} rooms
                  </div>
                </div>

                {/* Rooms Grid */}
                {filteredRooms.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-3xl border border-[#EFE6DF] space-y-4 my-8">
                    <Building2 className="w-12 h-12 text-[#A39690] mx-auto" />
                    <h3 className="text-xl font-bold text-[#2A2421]">No Rooms Found</h3>
                    <p className="text-sm text-[#786C66] max-w-sm mx-auto">
                      No listings match your search criteria. Try adjusting your location query or budget slider.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedType('All');
                        setMaxBudget(2300);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-white text-xs font-bold"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredRooms.map((room) => (
                      <RoomCard
                        key={room.id}
                        room={room}
                        onSelectRoom={(r) => setSelectedDetailRoom(r)}
                        onQuickBook={(r) => setSelectedEnquiryRoom(r)}
                      />
                    ))}
                  </div>
                )}
              </section>

              {/* New Trust Sections: Why Trust Us, How It Works, Real Reviews */}
              <TrustSections onExploreRooms={() => setActivePage('rooms')} />
            </div>
          )}

          {/* ROOMS CATALOG PAGE */}
          {activePage === 'rooms' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Complete Catalog
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2421]">
                  Explore Dubai Rooms & Partitions
                </h1>
                <p className="text-sm text-[#786C66]">
                  Filter by station location or room type below. All listings guaranteed no deposit & no commission.
                </p>
              </div>

              {/* Filter controls */}
              <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl border border-[#EFE6DF] shadow-xs">
                <Hero
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  maxBudget={maxBudget}
                  setMaxBudget={setMaxBudget}
                />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredRooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onSelectRoom={(r) => setSelectedDetailRoom(r)}
                    onQuickBook={(r) => setSelectedEnquiryRoom(r)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ABOUT PAGE */}
          {activePage === 'about' && (
            <About onExploreRooms={() => setActivePage('rooms')} />
          )}

        </main>

        {/* Room Detail View Modal */}
        {selectedDetailRoom && (
          <RoomDetailModal
            room={selectedDetailRoom}
            onClose={() => setSelectedDetailRoom(null)}
            onBookNow={(roomToBook) => setSelectedEnquiryRoom(roomToBook)}
          />
        )}

        {/* Booking / Enquiry Form Modal */}
        {selectedEnquiryRoom && (
          <EnquiryModal
            room={selectedEnquiryRoom}
            onClose={() => setSelectedEnquiryRoom(null)}
            onSubmitEnquiry={handleSubmitEnquiry}
          />
        )}

        {/* Admin CRUD Management Panel */}
        {isAdminOpen && (
          <AdminPanel
            rooms={rooms}
            onSaveRoom={handleSaveRoom}
            onDeleteRoom={handleDeleteRoom}
            enquiries={enquiries}
            onDeleteEnquiry={handleDeleteEnquiry}
            onResetSeed={handleResetSeed}
            onClose={() => setIsAdminOpen(false)}
          />
        )}

        {/* Sticky Floating WhatsApp Action Button */}
        <WhatsAppFloat roomName={selectedDetailRoom ? selectedDetailRoom.title : null} />

        {/* Bottom Footer */}
        <Footer
          setActivePage={setActivePage}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

      </div>
    </CurrencyProvider>
  );
}
