"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="w-full bg-[#092831] text-[#e0e3e4] border-t border-[#0c3b45]">
      {/* Upper Footer Links */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 md:py-16">
        
        {/* ========================================================================= */}
        {/* 1. MOBILE FOOTER: Ultra-Compact, Simple, Not Long, Heavyweight SEO (<260px) */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-5 text-center">
          {/* Brand Emblem & Authority Tagline */}
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="h-6 w-auto aspect-[565/160] relative">
                <Image
                  src="/images/bie-hin-logo-transparent.png"
                  alt="Bie Hin Tailor Signature Logo"
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-lg text-[#fbf9f4] tracking-[0.14em] font-normal">
                BIE HIN TAILOR
              </span>
            </Link>
            <p className="font-sans text-[10px] tracking-[0.22em] text-[#dfb76c] uppercase font-semibold mt-1">
              Bespoke Custom Tailor • Est. 1930
            </p>
          </div>

          {/* High-Intent SEO Semantic Links (2-Column Compact Grid) */}
          <div className="grid grid-cols-2 gap-4 text-left border-y border-[#0c3b45]/70 py-4 max-w-sm mx-auto">
            <div>
              <span className="font-serif text-[11px] tracking-[0.16em] text-[#dfb76c] uppercase block mb-1.5 font-semibold">
                {dict.nav.services}
              </span>
              <ul className="space-y-1 font-sans text-xs text-[#e0e3e4]/80 font-light">
                <li>
                  <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                    Custom Suits
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                    Wedding Tuxedos
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="hover:text-[#dfb76c] transition-colors">
                    Bespoke Collection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-serif text-[11px] tracking-[0.16em] text-[#dfb76c] uppercase block mb-1.5 font-semibold">
                Maison
              </span>
              <ul className="space-y-1 font-sans text-xs text-[#e0e3e4]/80 font-light">
                <li>
                  <Link href="/showrooms" className="hover:text-[#dfb76c] transition-colors">
                    Showrooms
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="hover:text-[#dfb76c] transition-colors">
                    {dict.nav.story}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#dfb76c] transition-colors">
                    {dict.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* GEO SEO Citations (Surabaya, Jakarta, Tangerang, Semarang) */}
          <div className="text-[11px] font-sans text-[#e0e3e4]/70 leading-relaxed max-w-sm mx-auto font-light">
            <span className="text-[#dfb76c] font-medium">Showrooms:</span> Surabaya (Pahlawan • Manyar • Bukit Mas) • Jakarta (Sunter) • Tangerang (Greenlake) • Semarang (Simongan)
          </div>

          {/* Instant CTA Button */}
          <div className="pt-1">
            <Link
              href="/contact#book-appointment"
              className="inline-block w-full max-w-xs py-2.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-md text-center"
            >
              {dict.footer.bookCta}
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP FOOTER: Expansive, Editorial 4-Column Architecture */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-8 w-auto aspect-[565/160] relative">
                <Image
                  src="/images/bie-hin-logo-transparent.png"
                  alt="Bie Hin Tailor"
                  fill
                  sizes="130px"
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-2xl text-[#fbf9f4] tracking-wider group-hover:text-[#dfb76c] transition-colors">
                BIE HIN TAILOR
              </span>
            </Link>
            <p className="font-sans text-xs sm:text-sm text-[#e0e3e4]/80 leading-relaxed max-w-sm font-light">
              {dict.footer.brandDesc}
            </p>
            <div className="pt-2">
              <span className="font-sans text-[10px] tracking-widest text-[#dfb76c] uppercase block font-semibold">
                {dict.footer.consultationTitle}
              </span>
              <p className="font-sans text-sm text-[#fbf9f4] font-medium">
                Surabaya • Jakarta • Tangerang • Semarang
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#dfb76c] uppercase font-semibold">
              {dict.nav.services}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#e0e3e4]/75 font-light">
              <li>
                <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                  Custom Tailored Suits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                  Wedding &amp; Tuxedos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                  Heritage Silk Batik
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                  Full Floating Canvas
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#dfb76c] transition-colors">
                  Garment Alterations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Showrooms */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#dfb76c] uppercase font-semibold">
              {dict.footer.showroomsTitle}
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-[#e0e3e4]/75 font-light">
              <div>
                <Link href="/showrooms#surabaya-pahlawan" className="hover:text-[#dfb76c] transition-colors block">
                  <p className="text-[#fbf9f4] font-medium">Surabaya Pusat (Flagship)</p>
                  <p className="text-[#e0e3e4]/60">Jl. Pahlawan No. 79</p>
                </Link>
              </div>
              <div>
                <Link href="/showrooms#surabaya-manyar" className="hover:text-[#dfb76c] transition-colors block">
                  <p className="text-[#fbf9f4] font-medium">Surabaya Timur (Manyar)</p>
                  <p className="text-[#e0e3e4]/60">Manyar Kartika No. 69B</p>
                </Link>
              </div>
              <div>
                <Link href="/showrooms#jakarta-sunter" className="hover:text-[#dfb76c] transition-colors block">
                  <p className="text-[#fbf9f4] font-medium">Jakarta Utara (Stitch &amp; Brew)</p>
                  <p className="text-[#e0e3e4]/60">Ruko Mitra Sunter Blok A15</p>
                </Link>
              </div>
              <div>
                <Link href="/showrooms#semarang-simongan" className="hover:text-[#dfb76c] transition-colors block">
                  <p className="text-[#fbf9f4] font-medium">Semarang (Paramount Square)</p>
                  <p className="text-[#e0e3e4]/60">Jl. Simongan No. 195</p>
                </Link>
              </div>
              <div className="pt-1">
                <Link href="/showrooms" className="text-[#dfb76c] font-semibold text-[11px] hover:underline uppercase tracking-wider">
                  Lihat Semua 6 Cabang →
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Action */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#dfb76c] uppercase font-semibold">
              {dict.footer.consultationTitle}
            </h4>
            <p className="font-sans text-xs text-[#e0e3e4]/70 font-light leading-relaxed">
              {dict.footer.consultationDesc}
            </p>
            <div className="pt-2">
              <Link
                href="/contact#book-appointment"
                className="inline-block px-5 py-2.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-[11px] font-bold tracking-widest uppercase transition-colors shadow-sm"
              >
                {dict.footer.bookCta}
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Dark Minimal Copyright Bar */}
      <div className="border-t border-[#0c3b45] bg-[#061d24] py-6 px-6 text-center text-[11px] font-sans text-[#e0e3e4]/60 tracking-wider">
        <p>Bie Hin Tailor © 1930 – 2026. {dict.footer.rights} {dict.footer.seoTag}.</p>
      </div>
    </footer>
  );
}
