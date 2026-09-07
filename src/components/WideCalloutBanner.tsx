"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function WideCalloutBanner() {
  const { dict } = useLanguage();

  return (
    <section className="relative w-full py-12 sm:py-20 md:py-28 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
      {/* Background Image: Master Tailor Hands Drafting Cloth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tailor-craft.png"
          alt="Master tailor cutting cloth in Bie Hin atelier"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.3] contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d24]/95 via-[#092831]/80 to-[#061d24]/95" />
      </div>

      {/* Content Banner */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center space-y-5">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-[#fbf9f4] font-normal uppercase">
          {dict.wideBanner.title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#edd79c] tracking-[0.24em] font-light uppercase">
          {dict.wideBanner.desc}
        </p>
        <div className="pt-4">
          <Link
            href="/contact#book-appointment"
            className="inline-block px-9 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-xl"
          >
            {dict.wideBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
