"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeritageSection() {
  return (
    <section className="w-full bg-[#fbf9f5] text-[#121617] py-space-3xl md:py-space-4xl relative" id="our-story">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Editorial Section Marker */}
        <div className="flex items-center justify-between mb-space-2xl border-b border-[#c5a880]/30 pb-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-numeric text-label-numeric text-[#8c7453]">CHAPTER 01</span>
            <span className="w-8 h-px bg-[#c5a880]" />
            <span className="font-label-uppercase text-label-uppercase text-[#8c7453] tracking-[0.25em]">
              Maison Heritage
            </span>
          </div>
          <span className="font-title-editorial text-sm italic text-[#555a5c]">Surabaya • Batavia • 1930</span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Photography with Archival Stamp (7 cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden shadow-2xl bg-[#eeebe2]">
              <div className="relative w-full h-[520px] md:h-[620px]">
                <Image
                  alt="Master tailor hand drawing chalk lines on fine herringbone wool"
                  src="/images/tailor-craft.png"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Framing Inner Hairline */}
              <div className="absolute inset-4 pointer-events-none border border-[#c5a880]/40" />

              {/* Archival Seal Stamp Overlay */}
              <div className="absolute top-8 left-8 bg-[#0d2b33]/90 backdrop-blur-md text-[#e0c298] p-4 border border-[#e0c298]/30 max-w-[180px]">
                <div className="border border-[#e0c298]/20 p-2 text-center">
                  <span className="font-label-uppercase text-[9px] tracking-[0.25em] block text-[#c5a880]">
                    HISTORIC PROVENANCE
                  </span>
                  <span className="font-headline-sm text-lg block my-1 text-white">SURABAYA</span>
                  <span className="font-label-numeric text-[11px] block text-[#e0c298]/80">
                    EST. 1930 • ATELIER
                  </span>
                </div>
              </div>

              {/* Tailor Note Card */}
              <div className="absolute bottom-6 right-6 hidden sm:block bg-[#fbf9f5]/95 backdrop-blur-md text-[#121617] p-4 border-l-2 border-[#8c7453] shadow-lg max-w-xs">
                <span className="font-label-uppercase text-[10px] text-[#8c7453] tracking-widest block mb-1">
                  CRAFT MANIFESTO
                </span>
                <p className="font-title-editorial text-sm italic text-[#2d3132]">
                  &ldquo;Every seam carries the weight of dignity. We cut not for vanity, but for enduring presence.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative & Stats (5 cols) */}
          <div className="lg:col-span-5 space-y-space-md lg:pl-space-md">
            <span className="font-label-uppercase text-label-uppercase text-[#8c7453] tracking-[0.2em] block">
              Sartorial Lineage
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#121617] leading-tight">
              Crafted with intention <br />
              <span className="italic font-normal text-[#8c7453]">since 1930.</span>
            </h2>

            <div className="space-y-space-sm text-[#313536] font-body-md text-body-md leading-relaxed">
              <p>
                <span className="float-left font-headline-lg text-4xl leading-none pr-3 pt-1 text-[#0d2b33] font-serif">
                  F
                </span>
                ounded in 1930, Bie Hin Tailor has dressed dignitaries, industrial titans, statesmen, and discerning gentlemen across three generations. Every stitch preserves the golden age of European bespoke pattern-drafting, married with the bespoke sensibilities of Indonesian ceremonial grace.
              </p>
              <p className="text-sm text-[#4d5255]">
                Unlike industrial suiting, our garments employ floating full-canvas horsehair interlinings, hand-padded lapels that softly roll across the chest, and sleeve heads pitched precisely to your natural posture.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="py-space-sm border-y border-[#c5a880]/30 grid grid-cols-2 gap-space-sm font-label-uppercase text-[11px] text-[#272b2c] tracking-wider">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c7453] text-base">check_box_outline_blank</span>
                <span>Pure Horsehair Canvas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c7453] text-base">check_box_outline_blank</span>
                <span>Hand-Stitched Milanese</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c7453] text-base">check_box_outline_blank</span>
                <span>Horn &amp; Mother of Pearl</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c7453] text-base">check_box_outline_blank</span>
                <span>Generational Archive</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                className="inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-[#0d2b33] border-b-2 border-[#8c7453] pb-1 hover:text-[#8c7453] transition-colors"
                href="#bespoke-process"
              >
                <span>Explore The Tailoring Doctrine</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
