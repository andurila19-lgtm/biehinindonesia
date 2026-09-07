"use client";

import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#fbf9f5] text-[#121617] py-space-3xl md:py-space-4xl relative" id="bespoke-process">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Chapter Heading */}
        <div className="max-w-xl mb-space-3xl space-y-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-numeric text-label-numeric text-[#8c7453]">CHAPTER 03</span>
            <span className="w-8 h-px bg-[#c5a880]" />
            <span className="font-label-uppercase text-label-uppercase text-[#8c7453] tracking-[0.25em]">
              The Craft Journey
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#121617]">Made Exclusively For You</h2>
          <p className="font-body-md text-body-md text-[#555a5c]">
            True bespoke is not altered ready-to-wear; it is a sculpted architectural garment drafted around your anatomy and lifestyle.
          </p>
        </div>

        {/* 4-Step Sartorial Pipeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-[#c5a880]/40 -z-0" />

          {/* Step 01 */}
          <div className="relative z-10 bg-[#f4f1e8] p-space-lg border border-[#c5a880]/30 shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-full bg-[#0d2b33] text-[#e0c298] flex items-center justify-center font-title-editorial text-title-editorial shadow-md">
                01
              </div>
              <span className="font-label-uppercase text-[11px] text-[#8c7453] tracking-[0.2em] block">STAGE ONE</span>
              <h3 className="font-headline-sm text-xl text-[#121617]">Private Consultation</h3>
              <p className="font-body-sm text-body-sm text-[#4d5255] leading-relaxed">
                In the comfort of our salon lounge over vintage espresso, our Master Cutter analyzes your posture, occasion, and guides you through 2,000+ British and Italian textile swatches.
              </p>
            </div>
            <div className="pt-space-sm border-t border-[#c5a880]/20 text-[11px] font-label-numeric text-[#8c7453]">
              TIMEFRAME: DAY 1 • 60 MINS
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative z-10 bg-[#f4f1e8] p-space-lg border border-[#c5a880]/30 shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-full bg-[#0d2b33] text-[#e0c298] flex items-center justify-center font-title-editorial text-title-editorial shadow-md">
                02
              </div>
              <span className="font-label-uppercase text-[11px] text-[#8c7453] tracking-[0.2em] block">STAGE TWO</span>
              <h3 className="font-headline-sm text-xl text-[#121617]">Architectural Measuring</h3>
              <p className="font-body-sm text-body-sm text-[#4d5255] leading-relaxed">
                We record over 30 geometric measurements capturing slope of shoulder, spinal curvature, neck pitch, and stride balance to draft your unique paper pattern.
              </p>
            </div>
            <div className="pt-space-sm border-t border-[#c5a880]/20 text-[11px] font-label-numeric text-[#8c7453]">
              TIMEFRAME: DAY 1 • 45 MINS
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative z-10 bg-[#f4f1e8] p-space-lg border border-[#c5a880]/30 shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-full bg-[#0d2b33] text-[#e0c298] flex items-center justify-center font-title-editorial text-title-editorial shadow-md">
                03
              </div>
              <span className="font-label-uppercase text-[11px] text-[#8c7453] tracking-[0.2em] block">STAGE THREE</span>
              <h3 className="font-headline-sm text-xl text-[#121617]">The Basted Fitting</h3>
              <p className="font-body-sm text-body-sm text-[#4d5255] leading-relaxed">
                You try on a preliminary skeleton garment held only by white basting thread. The tailor adjusts sleeve rotation, collar cling, and jacket skirt balance by hand.
              </p>
            </div>
            <div className="pt-space-sm border-t border-[#c5a880]/20 text-[11px] font-label-numeric text-[#8c7453]">
              TIMEFRAME: WEEK 2 TO 3
            </div>
          </div>

          {/* Step 04 */}
          <div className="relative z-10 bg-[#f4f1e8] p-space-lg border border-[#c5a880]/30 shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-full bg-[#0d2b33] text-[#e0c298] flex items-center justify-center font-title-editorial text-title-editorial shadow-md">
                04
              </div>
              <span className="font-label-uppercase text-[11px] text-[#8c7453] tracking-[0.2em] block">STAGE FOUR</span>
              <h3 className="font-headline-sm text-xl text-[#121617]">The Handover</h3>
              <p className="font-body-sm text-body-sm text-[#4d5255] leading-relaxed">
                Your finished bespoke commission, meticulously pressed with hand-shaped shoulders, custom monogram lining, and archival Bie Hin cedar hanger casing.
              </p>
            </div>
            <div className="pt-space-sm border-t border-[#c5a880]/20 text-[11px] font-label-numeric text-[#8c7453]">
              TIMEFRAME: WEEK 4 TO 6
            </div>
          </div>
        </div>

        {/* Tailor Workshop Accent Note */}
        <div className="mt-space-2xl bg-[#eeebe2] border border-[#c5a880]/40 p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="material-symbols-outlined text-3xl text-[#8c7453]">straighten</span>
            <div>
              <span className="font-headline-sm text-lg text-[#121617] block">Express International Commute Fitting?</span>
              <p className="font-body-sm text-body-sm text-[#4d5255]">We provide expedited flying tailor services for clients in Singapore, Tokyo, and Sydney.</p>
            </div>
          </div>
          <Link
            className="font-label-uppercase text-label-uppercase text-[#0d2b33] border border-[#0d2b33] px-6 py-2.5 hover:bg-[#0d2b33] hover:text-[#e0c298] transition-colors whitespace-nowrap"
            href="#book-consultation"
          >
            Inquire Private Fitting
          </Link>
        </div>
      </div>
    </section>
  );
}
