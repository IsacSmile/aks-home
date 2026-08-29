import React, { useState } from 'react';
import { 
  Shield, KeyRound, Plus, Edit2, Trash2, CheckCircle2, 
  X, Lock, Building2, MessageSquare, Phone, Mail, Calendar, Sparkles, Image, RefreshCw, ArrowLeft, Train, MapPin
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function AdminPanel({ 
  rooms, 
  onSaveRoom, 
  onDeleteRoom, 
  enquiries, 
  onDeleteEnquiry, 
  onResetSeed, 
  onClose 
}) {
  const { formatPrice } = useCurrency();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Tab State: 'rooms' | 'enquiries'
  const [activeTab, setActiveTab] = useState('rooms');

  // Add / Edit Modal Form State
  const [editingRoom, setEditingRoom] = useState(null); // null when adding
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    metroDistance: '',
    type: 'Loft Partition',
    availabilityDate: 'Available Now',
    monthlyPriceAED: 1200,
    weeklyPriceAED: 350,
    dailyPriceAED: 60,
    imageUrl: '',
    description: '',
    featured: false
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (passkeyInput === 'aks2026' || passkeyInput === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passkey. Default key: aks2026');
    }
  };

  const openAddModal = () => {
    setEditingRoom(null);
    setFormData({
      title: '',
      location: '',
      metroDistance: '2 mins walk (Exit 1)',
      type: 'Loft Partition',
      availabilityDate: 'Available Now',
      monthlyPriceAED: 1350,
      weeklyPriceAED: 380,
      dailyPriceAED: 65,
      imageUrl: '/images/loft_partition.jpg',
      description: 'Clean private room partition located near metro exit with WiFi, AC, and regular cleaning.',
      featured: false
    });
    setIsFormOpen(true);
  };

  const openEditModal = (room) => {
    setEditingRoom(room);
    setFormData({
      title: room.title,
      location: room.location,
      metroDistance: room.metroDistance,
      type: room.type,
      availabilityDate: room.availabilityDate,
      monthlyPriceAED: room.pricesAED.monthly,
      weeklyPriceAED: room.pricesAED.weekly,
      dailyPriceAED: room.pricesAED.daily,
      imageUrl: room.images[0] || '',
      description: room.description,
      featured: room.featured || false
    });
    setIsFormOpen(true);
  };

  const handleSubmitRoom = (e) => {
    e.preventDefault();

    const roomPayload = {
      id: editingRoom ? editingRoom.id : 'room-' + Date.now(),
      title: formData.title,
      location: formData.location,
      metroDistance: formData.metroDistance,
      type: formData.type,
      availabilityDate: formData.availabilityDate,
      isAvailable: true,
      featured: formData.featured,
      managedBy: 'Managed by AKS',
      allInclusive: true,
      pricesAED: {
        monthly: Number(formData.monthlyPriceAED),
        weekly: Number(formData.weeklyPriceAED),
        daily: Number(formData.dailyPriceAED)
      },
      images: [
        formData.imageUrl || '/images/loft_partition.jpg'
      ],
      amenities: [
        formData.type,
        formData.metroDistance,
        'Available Now',
        'No Deposit',
        'No Commission',
        'WiFi Included',
        'Clean Kitchen',
        'AC Available',
        'Peaceful & Respectful Flatmates'
      ],
      description: formData.description
    };

    onSaveRoom(roomPayload);
    setIsFormOpen(false);
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-md border border-[#EFE6DF] overflow-hidden flex flex-col min-h-[82vh]">
      
      {/* Header Bar - Full Width with High-Contrast Text */}
      <div className="px-6 py-5 border-b border-[#EFE6DF] flex items-center justify-between bg-[#1E1B18] text-white shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-white shadow-sm shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight">
              AKS Home Admin Dashboard
            </h3>
            <p className="text-xs text-[#E6C98B] font-medium mt-0.5">
              Full Access Property & Booking Lead Management
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-[#2A2421] hover:bg-[#38312D] text-xs font-bold text-white flex items-center gap-2 transition-all border border-[#3A332E] shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
          <span className="hidden sm:inline">Exit Admin</span>
          <span className="sm:hidden">Exit</span>
        </button>
      </div>

      {/* Passkey Login Screen if Not Authenticated */}
      {!isAuthenticated ? (
        <div className="p-8 sm:p-16 text-center max-w-md mx-auto my-auto space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#FBF4E6] text-[#C5A059] border border-[#C5A059]/30 mx-auto flex items-center justify-center shadow-xs">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold text-[#2A2421]">Admin Authentication Required</h4>
            <p className="text-xs text-[#786C66]">
              Enter admin passkey to access room management & customer leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold uppercase text-[#786C66] block mb-1">
                Admin Passkey
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter passkey (e.g. aks2026)"
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                />
                <KeyRound className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
              </div>
              {authError && (
                <p className="text-xs text-red-500 mt-1.5 font-medium">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-sm font-bold shadow transition-all"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="pt-2 text-[11px] text-[#A39690]">
            Passkey: <code className="bg-[#FAF6F0] px-2 py-0.5 rounded text-[#2A2421] font-mono font-bold">aks2026</code>
          </div>
        </div>
      ) : (
        
        /* Authenticated Full-Width Dashboard */
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Navigation Tabs - Responsive Layout */}
          <div className="px-4 sm:px-6 pt-4 border-b border-[#EFE6DF] bg-[#FDF8F3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveTab('rooms')}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x shrink-0 ${
                  activeTab === 'rooms'
                    ? 'bg-white text-[#2A2421] border-[#EFE6DF] shadow-xs'
                    : 'border-transparent text-[#786C66] hover:text-[#2A2421]'
                }`}
              >
                <Building2 className="w-4 h-4 text-[#C5A059]" />
                <span>Rooms Management ({rooms.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x shrink-0 ${
                  activeTab === 'enquiries'
                    ? 'bg-white text-[#2A2421] border-[#EFE6DF] shadow-xs'
                    : 'border-transparent text-[#786C66] hover:text-[#2A2421]'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Enquiries ({enquiries.length})</span>
              </button>
            </div>

            <div className="flex items-center justify-end gap-2 pb-2 sm:pb-0">
              <button
                onClick={onResetSeed}
                className="px-3.5 py-2 rounded-xl border border-[#EFE6DF] bg-white text-xs font-semibold text-[#786C66] hover:text-[#2A2421] flex items-center gap-1.5 transition-colors shadow-2xs"
                title="Reset to 6 sample rooms data"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reset Seed Data</span>
              </button>
            </div>
          </div>

          {/* Main Content Area - Full Width */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-6">
            
            {/* TAB 1: ROOMS MANAGEMENT */}
            {activeTab === 'rooms' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#2A2421]">Active Room Listings</h4>
                    <p className="text-xs text-[#786C66]">Manage properties, update pricing, or add new partition rooms in real-time.</p>
                  </div>

                  <button
                    onClick={openAddModal}
                    className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 self-start sm:self-auto shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Room Listing</span>
                  </button>
                </div>

                {/* Rooms Grid - Spacious 2-Column Desktop Grid for Un-truncated Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                  {rooms.map((rm) => (
                    <div 
                      key={rm.id} 
                      className="p-4 sm:p-5 rounded-2xl border border-[#EFE6DF] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs hover:border-[#C5A059]/50 hover:shadow-md transition-all"
                    >
                      
                      {/* Left & Middle Info Section */}
                      <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1 w-full">
                        
                        {/* Fixed Size Thumbnail Image */}
                        <img
                          src={rm.images[0]}
                          alt={rm.title}
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-[#EFE6DF] shrink-0 shadow-2xs"
                        />

                        {/* Room Details Column */}
                        <div className="min-w-0 flex-1 space-y-1 text-left">
                          
                          {/* Room Type & Metro Distance Badges */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-extrabold uppercase text-[#C5A059] bg-[#FBF4E6] px-2.5 py-0.5 rounded-md border border-[#C5A059]/20">
                              {rm.type}
                            </span>
                            {rm.metroDistance && (
                              <span className="text-[11px] font-semibold text-[#786C66] bg-[#FAF6F0] px-2.5 py-0.5 rounded-md border border-[#EFE6DF] flex items-center gap-1">
                                <Train className="w-3 h-3 text-[#C5A059] shrink-0" />
                                <span>{rm.metroDistance}</span>
                              </span>
                            )}
                          </div>

                          {/* Full Title (No Truncation, wraps up to 2 lines max) */}
                          <h5 className="font-extrabold text-base sm:text-lg text-[#2A2421] leading-snug line-clamp-2 mt-1">
                            {rm.title}
                          </h5>

                          {/* Full Location */}
                          <p className="text-xs sm:text-sm text-[#786C66] flex items-center gap-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#A39690] shrink-0" />
                            <span>{rm.location}</span>
                          </p>

                          {/* Clear Price */}
                          <div className="pt-1">
                            <span className="text-base sm:text-lg font-extrabold text-[#2A2421]">
                              {formatPrice(rm.pricesAED.monthly)}
                            </span>
                            <span className="text-xs text-[#786C66] font-medium ml-1">/ month</span>
                          </div>

                        </div>
                      </div>

                      {/* Right Action Buttons Column */}
                      <div className="flex flex-row sm:flex-col items-center justify-end gap-2.5 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[#EFE6DF] shrink-0">
                        <button
                          onClick={() => openEditModal(rm)}
                          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F3EBE1] text-[#2A2421] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#EFE6DF] shadow-2xs"
                          title="Edit Room"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${rm.title}"?`)) {
                              onDeleteRoom(rm.id);
                            }
                          }}
                          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-red-200/70 shadow-2xs"
                          title="Delete Room"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: ENQUIRIES DASHBOARD */}
            {activeTab === 'enquiries' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#2A2421]">Customer Booking Enquiries</h4>
                  <p className="text-xs text-[#786C66]">Real-time customer leads submitted via room detail pages.</p>
                </div>

                {enquiries.length === 0 ? (
                  <div className="p-16 text-center bg-[#FDF8F3] rounded-3xl border border-[#EFE6DF] space-y-3">
                    <MessageSquare className="w-10 h-10 text-[#A39690] mx-auto" />
                    <h5 className="text-base font-bold text-[#2A2421]">No Customer Enquiries Yet</h5>
                    <p className="text-xs text-[#786C66] max-w-sm mx-auto">
                      When users click "Send Enquiry" on any room card, their lead details will appear here instantly.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {enquiries.map((enq) => (
                      <div key={enq.id} className="p-6 rounded-2xl border border-[#EFE6DF] bg-white space-y-4 shadow-2xs hover:border-[#C5A059]/40 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EFE6DF]">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#C5A059] px-2.5 py-0.5 rounded-full">
                              {enq.duration} Stay
                            </span>
                            <h5 className="font-bold text-lg text-[#2A2421] mt-1.5">{enq.name}</h5>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="text-xs text-[#786C66] block">{enq.submittedAt}</span>
                            <span className="text-xs font-bold text-[#278A45] bg-[#EBF7EE] px-2.5 py-0.5 rounded-md inline-block mt-0.5">
                              Move-in: {enq.moveInDate || 'Immediate'}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#786C66]">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                            <span className="truncate font-medium text-[#2A2421]">{enq.roomTitle}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                            <a href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-[#C5A059] font-bold hover:underline">
                              {enq.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                            <span className="truncate">{enq.email}</span>
                          </div>
                        </div>

                        {enq.message && (
                          <div className="p-3.5 bg-[#FDF8F3] rounded-xl text-xs text-[#2A2421] border border-[#EFE6DF]">
                            <span className="font-bold text-[#786C66] block mb-1 uppercase text-[10px]">Customer Note:</span>
                            "{enq.message}"
                          </div>
                        )}

                        <div className="pt-1 flex justify-end">
                          <button
                            onClick={() => onDeleteEnquiry(enq.id)}
                            className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1.5 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Record</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* ADD / EDIT ROOM MODAL POPUP */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[60] modal-overlay flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#EFE6DF] overflow-hidden my-auto max-h-[85vh] flex flex-col">
            
            {/* Fixed Header */}
            <div className="px-6 py-4 border-b border-[#EFE6DF] flex items-center justify-between bg-[#FDF8F3] shrink-0">
              <h4 className="font-bold text-base text-[#2A2421]">
                {editingRoom ? 'Edit Room Listing' : 'Add New Room Listing'}
              </h4>
              <button onClick={() => setIsFormOpen(false)} className="text-[#786C66] hover:text-[#2A2421]">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Element wrapping scrollable content and fixed bottom footer */}
            <form onSubmit={handleSubmitRoom} className="flex-1 flex flex-col overflow-hidden">
              
              {/* Scrollable Form Body */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4 text-left">
                <div>
                  <label className="text-xs font-semibold text-[#786C66] block mb-1">Room Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Loft Partition with Window – Baniyas Square"
                    className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#786C66] block mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Al Maktoum Street, Deira"
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#786C66] block mb-1">Metro Proximity *</label>
                    <input
                      type="text"
                      required
                      value={formData.metroDistance}
                      onChange={(e) => setFormData({ ...formData, metroDistance: e.target.value })}
                      placeholder="e.g. 2 mins walk (Exit 1)"
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#786C66] block mb-1">Room Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                    >
                      <option value="Loft Partition">Loft Partition</option>
                      <option value="Upper Partition">Upper Partition</option>
                      <option value="Lower Partition">Lower Partition</option>
                      <option value="Capsule Bed">Capsule Bed</option>
                      <option value="Studio Partition">Studio Partition</option>
                      <option value="Window Partition">Window Partition</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#786C66] block mb-1">Availability Status</label>
                    <input
                      type="text"
                      value={formData.availabilityDate}
                      onChange={(e) => setFormData({ ...formData, availabilityDate: e.target.value })}
                      placeholder="e.g. Available Now / Available 1st Sept"
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                    />
                  </div>
                </div>

                {/* Base Prices in AED */}
                <div className="p-3.5 bg-[#FDF8F3] rounded-xl border border-[#EFE6DF] space-y-2">
                  <span className="text-xs font-bold uppercase text-[#C5A059] block">
                    Set Rental Rates (Base AED)
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[11px] font-medium text-[#786C66] block">Monthly (AED)</label>
                      <input
                        type="number"
                        required
                        value={formData.monthlyPriceAED}
                        onChange={(e) => setFormData({ ...formData, monthlyPriceAED: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-[#EFE6DF] rounded-lg text-sm text-[#2A2421]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-[#786C66] block">Weekly (AED)</label>
                      <input
                        type="number"
                        required
                        value={formData.weeklyPriceAED}
                        onChange={(e) => setFormData({ ...formData, weeklyPriceAED: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-[#EFE6DF] rounded-lg text-sm text-[#2A2421]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-[#786C66] block">Daily (AED)</label>
                      <input
                        type="number"
                        required
                        value={formData.dailyPriceAED}
                        onChange={(e) => setFormData({ ...formData, dailyPriceAED: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-[#EFE6DF] rounded-lg text-sm text-[#2A2421]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#786C66] block mb-1">Image URL</label>
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="e.g. /images/loft_partition.jpg or https://..."
                    className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#786C66] block mb-1">Room Description</label>
                  <textarea
                    rows="3"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Always Visible Fixed Bottom Action Footer */}
              <div className="p-4 border-t border-[#EFE6DF] bg-[#FDF8F3] flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#EFE6DF] bg-white text-xs font-semibold text-[#786C66] hover:bg-[#FAF6F0] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold shadow-md transition-all"
                >
                  Save Room Listing
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
