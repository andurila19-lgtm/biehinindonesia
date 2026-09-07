"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingCtaSection() {
  const { dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    salon: "Surabaya (Flagship Maison)",
    occasion: "Wedding & Groom Attire",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-appointment" className="w-full bg-[#092831] text-[#fbf9f4] py-10 sm:py-16 md:py-24 relative overflow-hidden border-t border-[#0c3b45]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-[#dfb76c] uppercase font-semibold">
              {dict.appointment.badge}
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-[0.06em] text-[#fbf9f4] font-normal uppercase">
            {dict.appointment.heading}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#e0e3e4]/80 font-light max-w-xl mx-auto leading-relaxed">
            {dict.appointment.desc}
          </p>

          {/* Form Card */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-10 bg-[#061d24]/95 border border-[#dfb76c]/30 shadow-2xl text-left max-w-full overflow-hidden">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#dfb76c] mx-auto" />
                <h3 className="font-serif text-2xl text-[#fbf9f4] uppercase tracking-wider">
                  {dict.appointment.submittedTitle}
                </h3>
                <p className="font-sans text-sm text-[#e0e3e4]/85 max-w-md mx-auto leading-relaxed font-light">
                  {dict.appointment.submittedDesc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-[#dfb76c] text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#061d24] text-xs font-semibold uppercase tracking-widest transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full min-w-0">
                  {/* 1. Full Name */}
                  <div className="space-y-1.5 w-full min-w-0">
                    <label className="font-sans text-[10px] text-[#dfb76c] tracking-widest uppercase font-semibold block">
                      {dict.appointment.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={dict.appointment.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-w-0 max-w-full box-border bg-[#092831] border border-[#dfb76c]/30 px-3.5 py-3 text-sm text-[#fbf9f4] placeholder-[#e0e3e4]/30 focus:border-[#dfb76c] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* 2. WhatsApp */}
                  <div className="space-y-1.5 w-full min-w-0">
                    <label className="font-sans text-[10px] text-[#dfb76c] tracking-widest uppercase font-semibold block">
                      {dict.appointment.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={dict.appointment.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-w-0 max-w-full box-border bg-[#092831] border border-[#dfb76c]/30 px-3.5 py-3 text-sm text-[#fbf9f4] placeholder-[#e0e3e4]/30 focus:border-[#dfb76c] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full min-w-0">
                  {/* 3. Showroom */}
                  <div className="space-y-1.5 w-full min-w-0">
                    <label className="font-sans text-[10px] text-[#dfb76c] tracking-widest uppercase font-semibold block">
                      {dict.appointment.cityLabel}
                    </label>
                    <select
                      value={formData.salon}
                      onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
                      className="w-full min-w-0 max-w-full box-border bg-[#092831] border border-[#dfb76c]/30 px-3 py-3 text-xs sm:text-sm text-[#fbf9f4] focus:border-[#dfb76c] focus:outline-none transition-colors truncate"
                    >
                      <option value="Surabaya Pusat (Pahlawan)">Surabaya Pusat (Jl. Pahlawan No. 79)</option>
                      <option value="Surabaya Timur (Manyar Kartika)">Surabaya Timur (Manyar Kartika No. 69B)</option>
                      <option value="Surabaya Barat (Wisata Bukit Mas)">Surabaya Barat (Wisata Bukit Mas II)</option>
                      <option value="Jakarta Utara (Mitra Sunter - Stitch & Brew)">Jakarta Utara (Mitra Sunter - Stitch &amp; Brew)</option>
                      <option value="Tangerang (Greenlake City)">Tangerang (Greenlake City - Ruko Cordoba)</option>
                      <option value="Semarang (Paramount Square Simongan)">Semarang (Paramount Square Simongan)</option>
                    </select>
                  </div>

                  {/* 4. Occasion */}
                  <div className="space-y-1.5 w-full min-w-0">
                    <label className="font-sans text-[10px] text-[#dfb76c] tracking-widest uppercase font-semibold block">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full min-w-0 max-w-full box-border bg-[#092831] border border-[#dfb76c]/30 px-3 py-3 text-xs sm:text-sm text-[#fbf9f4] focus:border-[#dfb76c] focus:outline-none transition-colors truncate"
                    >
                      <option value="Wedding & Groom Suit">Wedding &amp; Groom Suit</option>
                      <option value="Business & Executive Suit">Business &amp; Executive Suit</option>
                      <option value="Formal Wear & Tuxedo">Formal Wear &amp; Tuxedo</option>
                      <option value="Bespoke Daily Wear">Bespoke Daily Wear</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* 5. Preferred Date (Strictly contained for mobile) */}
                  <div className="space-y-1.5 w-full min-w-0">
                    <label className="font-sans text-[10px] text-[#dfb76c] tracking-widest uppercase font-semibold block">
                      {dict.appointment.dateLabel}
                    </label>
                    <div className="w-full min-w-0 overflow-hidden">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full min-w-0 max-w-full box-border bg-[#092831] border border-[#dfb76c]/30 px-3 py-3 text-sm text-[#fbf9f4] focus:border-[#dfb76c] focus:outline-none transition-colors [color-scheme:dark] block"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#e0e3e4]/70">
                    <ShieldCheck className="w-4 h-4 text-[#dfb76c]" />
                    <span>{dict.appointment.privacyNote}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md"
                  >
                    {dict.appointment.submit}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
