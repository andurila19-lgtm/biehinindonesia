"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function DarkTestimonialsBanner() {
  const { dict } = useLanguage();

  return (
    <section className="relative w-full py-12 sm:py-20 md:py-28 bg-[#061d24] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
      {/* Background: Moody tailored jacket with silk tie */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/suit-tuxedo.jpg"
          alt="Bespoke suit background"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.22] contrast-125"
        />
        <div className="absolute inset-0 bg-[#092831]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d24] via-transparent to-[#061d24]" />
      </div>

      {/* Centered Testimonial Text */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#dfb76c] tracking-[0.16em] font-normal uppercase">
          {dict.testimonials.label}
        </h2>

        {/* Delicate Golden Knot / Ornament */}
        <div className="flex items-center justify-center gap-2 text-[#dfb76c] opacity-75">
          <span className="w-8 h-px bg-[#dfb76c]" />
          <span className="text-xs">✦</span>
          <span className="w-8 h-px bg-[#dfb76c]" />
        </div>

        <blockquote className="font-serif text-base sm:text-lg md:text-xl text-[#fbf9f4] italic font-light leading-relaxed">
          &ldquo;{dict.testimonials.quote}&rdquo;
        </blockquote>

        <div className="pt-2 space-y-1">
          <p className="font-serif text-sm sm:text-base text-[#edd79c] tracking-wider uppercase">
            {dict.testimonials.author}
          </p>
          <p className="font-sans text-[11px] text-[#e0e3e4]/60 tracking-widest uppercase">
            {dict.testimonials.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
