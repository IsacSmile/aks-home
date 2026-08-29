import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { 
  X, Send, CheckCircle2, Calendar, Phone, Mail, User, 
  MessageSquare, ShieldCheck, MapPin, Train, Sparkles, MessageCircle 
} from 'lucide-react';

export function EnquiryModal({ room, initialDuration = 'Monthly', onClose, onSubmitEnquiry }) {
  if (!room) return null;

  const { formatPrice, currency } = useCurrency();

  const [duration, setDuration] = useState(initialDuration || 'Monthly');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveInDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiryData = {
      id: 'enq-' + Date.now(),
      roomId: room.id,
      roomTitle: room.title,
      roomLocation: room.location,
      duration,
      ...formData,
      submittedAt: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    onSubmitEnquiry(enquiryData);
    setIsSubmitted(true);
  };

  const getPriceForDuration = () => {
    if (duration === 'Daily') return room.pricesAED.daily;
    if (duration === 'Weekly') return room.pricesAED.weekly;
    return room.pricesAED.monthly;
  };

  const whatsappDirectMessage = `Hi AKS Home, I submitted an enquiry for ${room.title} (${duration} stay). My name is ${formData.name || 'a customer'}.`;
  const whatsappDirectUrl = `https://wa.me/971507061925?text=${encodeURIComponent(whatsappDirectMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto modal-overlay flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl sm:rounded-3xl shadow-xl border border-[#EFE6DF] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#EFE6DF] flex items-center justify-between bg-[#FDF8F3]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
            <h3 className="font-bold text-base text-[#2A2421]">
              Room Enquiry & Booking Request
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#F7EFEC] border border-[#EFE6DF] text-[#2A2421] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#278A45] border border-[#278A45]/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-[#2A2421]">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-sm text-[#786C66] max-w-md mx-auto">
                Thank you, <span className="font-bold text-[#2A2421]">{formData.name}</span>. We usually reply within <span className="text-[#C5A059] font-bold">30–60 minutes</span> on WhatsApp.
              </p>
            </div>

            <div className="p-4 bg-[#FDF8F3] rounded-2xl border border-[#EFE6DF] text-left text-xs space-y-2">
              <div className="flex justify-between text-[#786C66]">
                <span>Room Reserved:</span>
                <span className="font-bold text-[#2A2421]">{room.title}</span>
              </div>
              <div className="flex justify-between text-[#786C66]">
                <span>Stay Duration:</span>
                <span className="font-bold text-[#2A2421]">{duration} Option</span>
              </div>
              <div className="flex justify-between text-[#786C66]">
                <span>Move-in Date:</span>
                <span className="font-bold text-[#278A45]">{formData.moveInDate || 'Immediate'}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Connect Instantly on WhatsApp (+971 50 706 1925)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FAF6F0] text-[#2A2421] text-xs font-bold border border-[#EFE6DF]"
              >
                Close & Return to Listings
              </button>
            </div>
          </div>
        ) : (
          
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-left flex-1">
            
            {/* Selected Room Preview Strip */}
            <div className="p-3.5 rounded-2xl bg-[#FDF8F3] border border-[#EFE6DF] flex items-center gap-3">
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-14 h-14 rounded-xl object-cover border border-[#EFE6DF] shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                  {room.type}
                </span>
                <h4 className="font-bold text-xs text-[#2A2421] truncate">{room.title}</h4>
                <p className="text-[11px] text-[#786C66] truncate">{room.location}</p>
              </div>
            </div>

            {/* Stay Duration Selector */}
            <div>
              <label className="text-xs font-bold uppercase text-[#786C66] block mb-1.5">
                Select Stay Option
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Monthly', 'Weekly', 'Daily'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setDuration(opt)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      duration === opt
                        ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-xs'
                        : 'bg-[#FAF6F0] text-[#786C66] border-[#EFE6DF] hover:bg-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#A39690] mt-1">
                Estimated Rate: <span className="font-bold text-[#2A2421]">{formatPrice(getPriceForDuration())}</span> ({duration})
              </p>
            </div>

            {/* Form Input Fields */}
            <div className="space-y-3">
              
              <div>
                <label className="text-xs font-semibold text-[#786C66] block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Faiz Imam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white"
                  />
                  <User className="w-4 h-4 text-[#A39690] absolute left-3 top-2.5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#786C66] block mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white"
                    />
                    <Phone className="w-4 h-4 text-[#A39690] absolute left-3 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#786C66] block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="faiz@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white"
                    />
                    <Mail className="w-4 h-4 text-[#A39690] absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#786C66] block mb-1">
                  Preferred Move-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white"
                  />
                  <Calendar className="w-4 h-4 text-[#A39690] absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#786C66] block mb-1">
                  Additional Note / Message
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Looking for a quiet space, working in IT at Deira."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#EFE6DF] rounded-xl text-xs text-[#2A2421] focus:outline-none focus:border-[#C5A059] focus:bg-white resize-none"
                />
              </div>

            </div>

            {/* Response Time Guarantee Note */}
            <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EFE6DF] flex items-center gap-2 text-xs text-[#786C66]">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>We usually reply within <strong className="text-[#2A2421]">30–60 minutes</strong> on WhatsApp (+971 50 706 1925).</span>
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#786C66]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Room Enquiry</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
