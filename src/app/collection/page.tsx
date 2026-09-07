"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductItem {
  id: number;
  title: string;
  category: "all" | "business" | "formal";
  fabric: string;
  details: string;
  image: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    title: "Semi Fit Navy Chalkstripe Suit",
    category: "business",
    fabric: "Dormeuil 310g British Wool",
    details: "Full canvas construction • Floating horsehair canvas",
    image: "/images/products/suit-chalkstripe.jpg",
  },
  {
    id: 2,
    title: "Modern Fit Black Tuxedo",
    category: "formal",
    fabric: "Barathea Wool • Silk Grosgrain Lapels",
    details: "Satin peak lapels • Hand-finished Milanese buttonhole",
    image: "/images/products/suit-tuxedo.jpg",
  },
  {
    id: 3,
    title: "Slim Fit Midnight Blue Suit",
    category: "business",
    fabric: "Loro Piana Super 150s Wool",
    details: "Soft natural shoulder • Hand-stitched pick lapels",
    image: "/images/products/suit-midnight.jpg",
  },
  {
    id: 4,
    title: "Traditional Fit Glen Plaid Suit",
    category: "business",
    fabric: "Scabal Fine Wool • Horn Buttons",
    details: "Classical drape • Dual rear vents • Horn buttons",
    image: "/images/products/suit-glenplaid.jpg",
  },
  {
    id: 5,
    title: "Double Breasted Executive Suit",
    category: "business",
    fabric: "High-Twist English Worsted Wool",
    details: "6x2 button configuration • Structured chest balance",
    image: "/images/services/corporate-executive.jpg",
  },
  {
    id: 6,
    title: "Heritage Nuptial Ceremony Suit",
    category: "formal",
    fabric: "Fine Wool Silk Blend",
    details: "Curated for wedding ceremonies • Contoured waist",
    image: "/images/services/wedding-suits.jpg",
  },
  {
    id: 7,
    title: "Classic Black Tie Evening Suit",
    category: "formal",
    fabric: "Deep Midnight Barathea Cloth",
    details: "Formal evening silhouette • Pure silk facings",
    image: "/images/services/formal-wear.jpg",
  },
  {
    id: 8,
    title: "Two-Piece Bespoke Day Suit",
    category: "business",
    fabric: "Four-Season 280g Worsted Cloth",
    details: "Tailored daily poise • Anatomical shoulder line",
    image: "/images/services/custom-suits.jpg",
  },
];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "business" | "formal">("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* 1. Page Header (Editorial Digital Showroom) */}
        <section className="relative w-full pt-28 pb-12 sm:pt-44 sm:pb-24 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/hero-gentleman-hd.jpg"
              alt="Bie Hin Tailor Showroom"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-50"
            />
            <div className="absolute inset-0 bg-[#0c3b45]/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
              <span>Digital Showroom</span>
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              THE COLLECTION
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#edd79c] tracking-[0.22em] uppercase font-light">
              Selected Bespoke Commissions &amp; Tailoring Silhouettes
            </p>
            <div className="pt-1 sm:pt-2">
              <Link
                href="/contact#book-appointment"
                className="inline-block px-7 sm:px-8 py-2.5 sm:py-3 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-md"
              >
                Book Private Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Collection Showcase Grid */}
        <section className="py-10 md:py-20 max-w-[1300px] mx-auto px-4 sm:px-10 lg:px-16 text-center">
          <div className="flex flex-col items-center justify-center space-y-2.5 mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#092831] tracking-[0.14em] font-normal uppercase">
              SELECTED COMMISSIONS
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-xl font-light leading-relaxed">
              Every garment is individually cut and crafted by hand to the client&apos;s unique anatomical measurements.
            </p>
            <div className="w-12 h-0.5 bg-[#dfb76c] mt-2" />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 sm:pt-6">
              {[
                { label: "All", key: "all" },
                { label: "Executive Suits", key: "business" },
                { label: "Ceremonial & Formal", key: "formal" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold transition-all ${
                    activeFilter === filter.key
                      ? "bg-[#092831] text-[#dfb76c] shadow-sm"
                      : "bg-white text-[#4e5659] border border-[#e5dccc] hover:border-[#dfb76c]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Editorial Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {filteredProducts.map((suit) => (
              <div key={suit.id} className="flex flex-col items-center text-center space-y-2 sm:space-y-4 group bg-white p-2.5 sm:p-4 border border-[#e5dccc] shadow-sm rounded-sm">
                <div className="relative w-full h-[190px] sm:h-[340px] lg:h-[380px] overflow-hidden bg-[#fcfbf7]">
                  <Image
                    src={suit.image}
                    alt={suit.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1 flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="font-serif text-xs sm:text-base text-[#092831] font-medium sm:font-normal leading-snug">
                      {suit.title}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-xs text-[#9c7736] font-medium mt-0.5">
                      {suit.fabric}
                    </p>
                    <p className="hidden sm:block font-sans text-[11px] text-[#4e5659]/80 font-light mt-1">
                      {suit.details}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3">
                    <Link
                      href="/contact#book-appointment"
                      className="inline-flex items-center gap-1 text-[#092831] group-hover:text-[#dfb76c] font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <span>Inquire</span>
                      <span className="text-[#dfb76c]">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Bespoke Consultation Callout Banner */}
        <section className="py-16 bg-[#092831] text-[#fbf9f4] text-center border-t border-[#0c3b45]">
          <div className="max-w-2xl mx-auto px-6 space-y-4">
            <span className="font-sans text-xs tracking-[0.24em] text-[#dfb76c] uppercase font-semibold">
              Private Atelier Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fbf9f4] uppercase font-normal">
              COMMISSION YOUR BESPOKE SUIT
            </h2>
            <p className="font-sans text-sm text-[#e0e3e4]/80 font-light leading-relaxed">
              Experience personalized tailoring at our Surabaya, Jakarta, or Semarang showroom. Book a dedicated private consultation.
            </p>
            <div className="pt-3">
              <Link
                href="/contact#book-appointment"
                className="inline-block px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-md"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
