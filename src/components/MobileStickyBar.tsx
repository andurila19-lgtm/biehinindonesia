"use client";

import Link from "next/link";
import { Calendar, MessageSquare } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d2b33]/95 backdrop-blur-md border-t border-gold/30 p-2.5 px-4 shadow-[0_-8px_25px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3">
      <Link
        href="#book-consultation"
        className="flex-1 py-2.5 bg-gold text-[#0a2228] font-sans text-xs font-semibold tracking-[0.18em] uppercase text-center flex items-center justify-center gap-2"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Consultation</span>
      </Link>
      
      <a
        href="https://wa.me/628113001930?text=Halo%20Bie%20Hin%20Tailor,%20saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20bespoke%20suit."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="px-3.5 py-2.5 border border-gold/40 text-gold-light bg-[#081d23] hover:border-gold transition-colors flex items-center justify-center"
      >
        <MessageSquare className="w-4 h-4 text-gold" />
      </a>
    </div>
  );
}
