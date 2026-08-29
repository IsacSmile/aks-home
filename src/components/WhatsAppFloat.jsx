import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat({ roomName }) {
  const phoneNumber = '971507061925';
  const defaultText = roomName
    ? `Hi AKS Home, I'm interested in viewing: ${roomName}`
    : `Hi AKS Home, I'm interested in a partition room in Dubai.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      
      <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
      
      <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
        WhatsApp Us (+971 50 706 1925)
      </span>
      <span className="text-xs font-bold tracking-wide sm:hidden">
        WhatsApp
      </span>
    </a>
  );
}
