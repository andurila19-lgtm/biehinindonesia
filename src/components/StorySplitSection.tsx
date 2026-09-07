"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function StorySplitSection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full bg-[#fcfbf7] text-[#1e2427] py-10 sm:py-16 md:py-24 border-t border-[#e5dccc]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="font-sans text-[11px] font-bold text-[#dfb76c] tracking-[0.24em] uppercase block">
              {dict.storySplit.label}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#092831] tracking-[0.06em] font-normal uppercase">
              {dict.storySplit.heading}
            </h2>

            <div className="w-12 sm:w-16 h-0.5 bg-[#dfb76c]" />

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
              <p>{dict.storySplit.p1}</p>
              <p className="hidden sm:block">{dict.storySplit.p2}</p>
            </div>

            <div className="pt-1 sm:pt-2">
              <Link
                href="/our-story"
                className="inline-block px-7 sm:px-8 py-2.5 sm:py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-sm"
              >
                {dict.storySplit.cta}
              </Link>
            </div>
          </div>

          {/* Right: Master Tailor Working Photo */}
          <div className="lg:col-span-6">
            <div className="relative h-[220px] sm:h-[420px] w-full shadow-2xl border-4 border-white bg-white overflow-hidden">
              <Image
                src="/images/tailor-craft.png"
                alt="Master tailor cutting paper pattern in Bie Hin atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
