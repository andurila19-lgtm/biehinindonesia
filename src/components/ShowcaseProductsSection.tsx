"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const suitImages = [
  "/images/products/suit-chalkstripe.jpg",
  "/images/products/suit-tuxedo.jpg",
  "/images/products/suit-midnight.jpg",
  "/images/products/suit-glenplaid.jpg",
];

export default function ShowcaseProductsSection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full bg-[#ffffff] text-[#1e2427] py-10 sm:py-16 md:py-24 border-t border-[#e5dccc]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-10 lg:px-16 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-2.5 mb-8 sm:mb-12 md:mb-16">
          <div className="w-10 sm:w-12 h-0.5 bg-[#dfb76c]" />
          <span className="font-sans text-[11px] font-bold text-[#dfb76c] tracking-[0.24em] uppercase block">
            {dict.collection.label}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#092831] tracking-[0.08em] font-normal uppercase">
            {dict.collection.heading}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-xl font-light">
            {dict.collection.desc}
          </p>
        </div>

        {/* 4 Suits Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {dict.collection.items.map((item, idx) => {
            const img = suitImages[idx] || suitImages[0];
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 sm:space-y-4 group p-2 sm:p-0 bg-[#fcfbf7] sm:bg-transparent border border-[#e5dccc]/60 sm:border-0 rounded-sm sm:rounded-none">
                <div className="relative w-full h-[200px] sm:h-[320px] lg:h-[360px] overflow-hidden shadow-sm border border-[#e5dccc] bg-[#fcfbf7]">
                  <Image
                    src={img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-serif text-xs sm:text-base text-[#092831] font-medium sm:font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs text-[#9c7736] font-medium">
                    {item.category}
                  </p>
                </div>

                <Link
                  href="/collection"
                  className="inline-flex items-center gap-1 text-[#092831] group-hover:text-[#dfb76c] font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-colors pt-1"
                >
                  <span>{dict.collection.consult}</span>
                  <span className="text-[#dfb76c]">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12">
          <Link
            href="/collection"
            className="inline-block px-7 sm:px-8 py-2.5 sm:py-3 bg-[#092831] hover:bg-[#0c3b45] text-[#dfb76c] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-sm"
          >
            {dict.collection.viewCollection}
          </Link>
        </div>

      </div>
    </section>
  );
}
