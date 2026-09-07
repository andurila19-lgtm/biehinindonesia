"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Clock, Shield, Scissors, Sparkles, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactShowroomSection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full bg-[#fcfbf7] text-[#1e2427] py-10 sm:py-16 md:py-24 border-t border-[#e5dccc]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Tailored Suit Mannequin Photo (Visible on Desktop/Tablet only) */}
          <div className="hidden md:block md:col-span-4 h-full">
            <div className="relative h-full min-h-[480px] w-full shadow-2xl border-4 border-white bg-white overflow-hidden">
              <Image
                src="/images/services/wedding-suits.jpg"
                alt="Bespoke tailored suit in Bie Hin showroom"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2: Stylized Salon Map & Branch Directory (Spacious & Clean) */}
          <div className="md:col-span-4 h-full">
            <div className="relative min-h-[480px] h-full w-full shadow-2xl border-4 border-white bg-[#092831] flex flex-col justify-between p-6 sm:p-7 text-[#fbf9f4]">
              {/* Header & Icon */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0c3b45] border border-[#dfb76c] flex items-center justify-center mx-auto mb-3 shadow-md">
                  <MapPin className="w-6 h-6 text-[#dfb76c]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl tracking-wider text-[#edd79c] font-normal uppercase">
                  {dict.showrooms.label}
                </h3>
                <div className="w-10 h-0.5 bg-[#dfb76c] mx-auto my-2.5" />
                <p className="font-sans text-[11px] sm:text-xs text-[#e0e3e4]/80 leading-relaxed font-light">
                  {dict.showrooms.desc}
                </p>
              </div>

              {/* Branch Locations List with Breathing Room */}
              <div className="my-4 py-3 border-y border-[#dfb76c]/20 space-y-3 font-sans text-left">
                <div>
                  <span className="text-[#dfb76c] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest block mb-1">
                    Surabaya:
                  </span>
                  <div className="grid grid-cols-1 gap-1 text-[11px] text-[#fbf9f4]/90 pl-1 font-light">
                    <p>• Pusat: Jl. Pahlawan No. 79</p>
                    <p>• Timur: Manyar Kartika 69B</p>
                    <p>• Barat: Wisata Bukit Mas II</p>
                  </div>
                </div>

                <div>
                  <span className="text-[#dfb76c] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest block mb-1">
                    Jabodetabek &amp; Semarang:
                  </span>
                  <div className="grid grid-cols-1 gap-1 text-[11px] text-[#fbf9f4]/90 pl-1 font-light">
                    <p>• Jkt Utara: Mitra Sunter (Stitch &amp; Brew)</p>
                    <p>• Tangerang: Greenlake City (Ruko Cordoba)</p>
                    <p>• Semarang: Paramount Square Simongan</p>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-2 text-center">
                <Link
                  href="/showrooms"
                  className="inline-block w-full py-2.5 border border-[#dfb76c] text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#061d24] font-sans text-[11px] font-semibold tracking-widest uppercase transition-colors shadow-sm"
                >
                  {dict.showrooms.getDirections}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info Details (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#092831] tracking-[0.1em] font-normal uppercase">
                ATELIER CONCIERGE
              </h2>
              <div className="w-12 h-0.5 bg-[#dfb76c] mt-3" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[#4e5659] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9c7736] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#092831] font-medium">Surabaya Pusat (Flagship):</p>
                  <p>Jl. Pahlawan No. 79, Bubutan, Surabaya</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#9c7736] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#092831] font-medium">Consultation Policy:</p>
                  <p>{dict.showrooms.consultationNotice}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9c7736] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#092831] font-medium">Private Concierge Email:</p>
                  <p>concierge@biehintailor.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9c7736] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#092831] font-medium">Opening Hours:</p>
                  <p>Monday – Saturday: 09:30 – 19:30 WIB</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact#book-appointment"
                className="inline-block px-7 py-3 bg-[#092831] hover:bg-[#dfb76c] hover:text-[#061d24] text-[#fbf9f4] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md"
              >
                {dict.footer.bookCta}
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom 3 Trust Badges (Exact Peter Mason Reference Footer Element) */}
        <div className="mt-16 pt-10 border-t border-[#e5dccc] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs font-sans text-[#092831] font-medium uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#9c7736]" />
            <span>Private Tailor Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs font-sans text-[#092831] font-medium uppercase tracking-wider">
            <Scissors className="w-4 h-4 text-[#9c7736]" />
            <span>Handmade Full Canvas Craft</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs font-sans text-[#092831] font-medium uppercase tracking-wider">
            <Shield className="w-4 h-4 text-[#9c7736]" />
            <span>Dedicated Fitting Salons</span>
          </div>
        </div>

      </div>
    </section>
  );
}
