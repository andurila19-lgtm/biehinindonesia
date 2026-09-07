"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = [
  { image: "/images/services/custom-suits.jpg", subtitle: "Handcrafted Pattern" },
  { image: "/images/services/wedding-suits.jpg", subtitle: "Ceremonial Distinction" },
  { image: "/images/services/formal-wear.jpg", subtitle: "Refined Posture" },
  { image: "/images/services/corporate-executive.jpg", subtitle: "Precision Cut" },
];

export default function CircularServicesSection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full bg-[#fdfdfc] text-[#1e2427] py-10 sm:py-16 md:py-24 border-t border-[#e5dccc]/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-10 lg:px-16 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-2.5 mb-8 sm:mb-12 md:mb-16">
          <div className="w-10 sm:w-12 h-0.5 bg-[#dfb76c]" />
          <span className="font-sans text-[11px] font-bold text-[#dfb76c] tracking-[0.24em] uppercase block">
            {dict.services.label}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#092831] tracking-[0.08em] font-normal uppercase">
            {dict.services.heading}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-xl font-light leading-relaxed">
            {dict.services.desc}
          </p>
        </div>

        {/* 4 Pillars: 2x2 on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {dict.services.items.map((item, idx) => {
            const imgMeta = serviceImages[idx] || serviceImages[0];
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2.5 sm:space-y-4 group p-2.5 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none border border-[#e5dccc]/60 sm:border-0 shadow-sm sm:shadow-none">
                {/* Circular Editorial Image Frame */}
                <div className="w-[88px] h-[88px] sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative rounded-full p-1 border-2 border-[#dfb76c] bg-white shadow-sm shrink-0">
                  <div className="w-full h-full relative rounded-full overflow-hidden bg-[#092831]">
                    <Image
                      src={imgMeta.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 88px, (max-width: 1024px) 160px, 192px"
                      className="object-cover object-center"
                      priority={idx < 2}
                    />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-serif text-xs sm:text-base lg:text-lg text-[#092831] tracking-[0.08em] font-semibold sm:font-normal uppercase leading-snug">
                    {item.title}
                  </h3>
                  <span className="font-sans text-[8px] sm:text-[10px] text-[#9c7736] tracking-[0.16em] uppercase font-semibold block">
                    {imgMeta.subtitle}
                  </span>
                </div>

                {/* Description: Hidden on small mobile, visible on tablet/desktop to eliminate scroll fatigue */}
                <p className="hidden sm:block font-sans text-xs text-[#4e5659] font-light leading-relaxed px-2">
                  {item.desc}
                </p>

                {/* Link Action */}
                <div className="pt-1">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[#092831] group-hover:text-[#dfb76c] font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>{dict.services.viewAll}</span>
                    <span className="text-[#dfb76c]">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
