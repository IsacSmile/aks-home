import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { X, CheckCircle2, Send, Calendar, User, Phone, Mail, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

export function EnquiryModal({ room, onClose, onSubmitEnquiry }) {
  if (!room) return null;

  const { formatPrice, currency } = useCurrency();

  const [duration, setDuration] = useState('monthly'); // 'daily' | 'weekly' | 'monthly'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveInDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiryPayload = {
      id: 'enq-' + Date.now(),
      roomId: room.id,
      roomTitle: room.title,
      roomLocation: room.location,
      duration,
      rateAED: room.pricesAED[duration],
      currency,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      moveInDate: formData.moveInDate,
      message: formData.message,
      submittedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitEnquiry) {
        onSubmitEnquiry(enquiryPayload);
      }
    }, 600);
  };

  const getRateForDuration = () => {
    return formatPrice(room.pricesAED[duration]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto modal-overlay flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-xl border border-[#EFE6DF] overflow-hidden my-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#EFE6DF] flex items-center justify-between bg-[#FDF8F3]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Booking Enquiry
            </span>
            <h3 className="text-lg font-bold text-[#2A2421]">Reserve Room Partition</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#F7EFEC] border border-[#EFE6DF] text-[#2A2421] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Submitted Success View */}
        {submitted ? (
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#278A45] border border-[#278A45]/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#2A2421]">Enquiry Received!</h4>
              <p className="text-sm text-[#786C66] max-w-sm mx-auto">
                Thank you <span className="font-semibold text-[#2A2421]">{formData.name}</span>. Our team will contact you on WhatsApp / Phone shortly regarding <span className="font-semibold text-[#2A2421]">{room.title}</span>.
              </p>
            </div>

            <div className="bg-[#FDF8F3] p-4 rounded-2xl border border-[#EFE6DF] text-xs text-[#786C66] text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Move-in Date:</span>
                <span className="font-semibold text-[#2A2421]">{formData.moveInDate || 'Immediate'}</span>
              </div>
              <div className="flex justify-between">
                <span>Rental Option:</span>
                <span className="font-semibold text-[#2A2421] uppercase">{duration} ({getRateForDuration()})</span>
              </div>
              <div className="flex justify-between">
                <span>No Deposit / No Commission:</span>
                <span className="font-semibold text-[#278A45]">Guaranteed</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/971500000000?text=Hi%20AKS%20Home,%20I%20enquired%20for%20${encodeURIComponent(room.title)}%20(${duration}%20stay).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Instant Connect on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-[#EFE6DF] text-sm font-semibold text-[#786C66] hover:bg-[#F7EFEC] transition-colors"
              >
                Back to Listings
              </button>
            </div>
          </div>
        ) : (
          
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Selected Room Summary Box */}
            <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EFE6DF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-12 h-12 rounded-lg object-cover border border-[#EFE6DF]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#2A2421] line-clamp-1">{room.title}</h4>
                  <p className="text-xs text-[#786C66] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span className="truncate">{room.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Duration Selector Tabs */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-[#786C66] flex items-center justify-between">
                <span>Select Booking Duration</span>
                <span className="text-[11px] text-[#C5A059] font-bold">Monthly Recommended</span>
              </label>
              <div className="grid grid-cols-3 gap-2 bg-[#FAF6F0] p-1 rounded-xl border border-[#EFE6DF]">
                {[
                  { key: 'monthly', label: 'Monthly', rate: room.pricesAED.monthly, badge: 'Best Value' },
                  { key: 'weekly', label: 'Weekly', rate: room.pricesAED.weekly },
                  { key: 'daily', label: 'Daily', rate: room.pricesAED.daily }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setDuration(item.key)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold text-center transition-all flex flex-col items-center ${
                      duration === item.key
                        ? 'bg-white text-[#2A2421] shadow-xs border border-[#EFE6DF]'
                        : 'text-[#786C66] hover:text-[#2A2421]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] text-[#C5A059] font-bold">
                      {formatPrice(item.rate)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label className="text-xs font-medium text-[#2A2421] block mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma / John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                  />
                  <User className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-xs font-medium text-[#2A2421] block mb-1">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567 or +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                  />
                  <Phone className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
                </div>
              </div>

              {/* Email & Move-in Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#2A2421] block mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                    />
                    <Mail className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2A2421] block mb-1">
                    Preferred Move-in Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.moveInDate}
                      onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                    />
                    <Calendar className="w-4 h-4 text-[#A39690] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium text-[#2A2421] block mb-1">
                  Message / Special Request (Optional)
                </label>
                <div className="relative">
                  <textarea
                    rows="2"
                    placeholder="e.g. Looking for lower partition, night shift worker..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-sm text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all resize-none"
                  ></textarea>
                  <MessageSquare className="w-4 h-4 text-[#A39690] absolute left-3 top-3" />
                </div>
              </div>

            </div>

            {/* Zero Commission Guarantee Notice */}
            <div className="p-3 bg-[#EBF7EE] rounded-xl border border-[#278A45]/20 flex items-center gap-2 text-xs text-[#278A45]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>No deposit or broker commission will be charged upon move-in.</span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Enquiry ({getRateForDuration()})</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
