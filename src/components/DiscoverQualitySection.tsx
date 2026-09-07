"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DiscoverQualitySection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full bg-[#fcfbf7] text-[#1e2427] py-10 sm:py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Two Overlapping Editorial Photographs */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Primary Main Image */}
            <div className="relative w-[240px] sm:w-[340px] h-[320px] sm:h-[450px] shadow-2xl border-4 border-white bg-white z-10">
              <Image
                src="/images/tailor-craft.png"
                alt="Master tailor crafting suit in Bie Hin atelier"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover"
              />
            </div>

            {/* Overlapping Secondary Image (Suit jacket detail, offset to top-right) */}
            <div className="relative w-[220px] sm:w-[260px] h-[300px] sm:h-[350px] shadow-2xl border-4 border-white bg-white -ml-16 sm:-ml-20 mt-16 z-20">
              <Image
                src="/images/services/custom-suits.jpg"
                alt="Close up fine herringbone bespoke suit jacket"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#dfb76c] tracking-[0.24em] uppercase block mb-2">
                {dict.discover.label}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092831] tracking-[0.04em] font-normal leading-tight">
                {dict.discover.heading}
              </h2>
              {/* Fine Gold Accent Line */}
              <div className="w-16 h-0.5 bg-[#dfb76c] mt-4" />
            </div>

            <p className="font-sans text-sm sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
              {dict.discover.desc}
            </p>

            <div className="pt-2">
              <Link
                href="/our-story"
                className="inline-block px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-sm"
              >
                {dict.discover.cta}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
