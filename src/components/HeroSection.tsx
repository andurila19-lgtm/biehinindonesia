"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { dict } = useLanguage();

  return (
    <section className="relative w-full min-h-[100dvh] bg-[#061d24] text-[#fbf9f4] flex flex-col justify-end lg:justify-center overflow-hidden pt-24 pb-12 sm:pb-16 lg:py-0">
      {/* 1. Cinematic Background: Dual Native HD Architecture (Mobile 9:16 + Desktop 16:9) */}
      <div className="absolute inset-0 z-0">
        
        {/* Mobile Native 9:16 Portrait Ultra HD Image (Brighter visibility) */}
        <div className="block lg:hidden absolute inset-0">
          <Image
            src="/images/hero-mobile-hd.jpg"
            alt="Bie Hin Tailor bespoke gentleman in salon atelier"
            fill
            sizes="(max-width: 1023px) 100vw, 1px"
            priority
            quality={95}
            className="object-cover object-[center_top] filter brightness-[0.78] contrast-[1.04]"
          />
        </div>

        {/* Desktop Native 16:9 Landscape Ultra HD Image (High headroom so gentleman is completely unclipped) */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/images/hero-gentleman-hd.jpg"
            alt="Bie Hin Tailor bespoke salon showroom"
            fill
            sizes="(min-width: 1024px) 100vw, 1px"
            priority
            quality={95}
            className="object-cover object-[62%_top] xl:object-[60%_top] 2xl:object-[58%_top] filter brightness-[0.82] contrast-[1.04]"
          />
        </div>

        {/* 2. Tuned Responsive Gradients: Preserves Craftsmanship & Interior Visibility */}

        {/* Mobile Bottom Vignette: Soft gradient anchoring the text without muddying the image */}
        <div className="absolute bottom-0 left-0 right-0 h-[58%] sm:h-[48%] lg:hidden bg-gradient-to-t from-[#061d24] via-[#061d24]/75 to-transparent z-10 pointer-events-none" />

        {/* Desktop Left Vignette: Softened so fabrics, table, and tailoring interior are visible */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#061d24]/90 via-[#061d24]/55 to-transparent z-10 w-1/2 pointer-events-none" />

        {/* Subtle signature logo teal wash */}
        <div className="absolute inset-0 bg-[#092831]/15 mix-blend-multiply z-10 pointer-events-none" />
      </div>


      {/* 4. Hero Content Composition */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 w-full">
        <div className="max-w-xl lg:max-w-xl xl:max-w-2xl text-left space-y-5 sm:space-y-6">
          
          {/* Heritage Eyebrow */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-sans tracking-[0.26em] sm:tracking-[0.28em] text-[#edd79c] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
            <span>Surabaya • Jakarta • Semarang</span>
            <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
          </div>

          {/* Master Headline: EMBRACE your STYLE with Breathing Room */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.04em] text-[#fbf9f4] font-normal leading-[1.1] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
            EMBRACE <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#dfb76c] font-normal lowercase">your</span> STYLE
          </h1>

          {/* Editorial Subtext: Safe, Accurate, Premium Copy Verified for Bie Hin */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#e0e3e4] font-light leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {dict.hero.desc}
          </p>

          {/* Action CTAs: Taller buttons on mobile, translated labels */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/collection"
              className="px-7 sm:px-9 py-3.5 sm:py-4 min-h-[46px] bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(223,183,108,0.3)] hover:-translate-y-0.5 flex items-center justify-center"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact#book-appointment"
              className="px-6 sm:px-9 py-3.5 sm:py-4 min-h-[46px] bg-black/25 backdrop-blur-sm border border-[#dfb76c]/75 hover:border-[#dfb76c] text-[#fbf9f4] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#dfb76c]/15 flex items-center justify-center"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
