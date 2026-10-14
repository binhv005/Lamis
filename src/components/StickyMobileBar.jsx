import React from 'react';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function StickyMobileBar() {
  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/95 backdrop-blur-md border-t border-sand-dark/40 p-3 shadow-2xl flex items-center gap-3">
      <a
        href={contactInfo.phoneHref}
        className="flex-1 py-3 px-4 rounded-2xl bg-sand border border-sand-dark/60 text-charcoal font-bold text-xs flex items-center justify-center gap-2 hover:bg-sand-dark/40 transition-colors"
      >
        <PhoneCall className="w-4 h-4 text-taupe" />
        <span>Hotline</span>
      </a>

      <button
        onClick={scrollToBooking}
        className="flex-[1.4] py-3 px-4 rounded-2xl bg-charcoal hover:bg-taupe text-ivory font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors uppercase tracking-wide"
      >
        <CalendarCheck className="w-4 h-4" />
        <span>Đặt lịch chụp ảnh</span>
      </button>
    </div>
  );
}
