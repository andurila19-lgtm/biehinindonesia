"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function MediaHighlightSection() {
  return (
    <section className="w-full bg-[#fcfbf7] text-[#1e2427] py-10 sm:py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Video / Feature Photograph with Play Button Overlay */}
          <div className="lg:col-span-6 relative group overflow-hidden shadow-2xl border-4 border-white bg-white">
            <div className="relative h-[240px] sm:h-[400px] w-full overflow-hidden">
              <Image
                src="/images/products/suit-midnight.jpg"
                alt="Master tailor fitting bespoke suit in atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#061d24]/30 group-hover:bg-[#061d24]/10 transition-colors" />

              {/* Circular Golden Play Button (Exact Reference Element) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] flex items-center justify-center shadow-2xl transition-colors duration-300">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Editorial */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092831] tracking-[0.06em] font-normal uppercase leading-tight">
                BIE HIN IN FOCUS
              </h2>
              {/* Fine Gold Accent Line */}
              <div className="w-16 h-0.5 bg-[#dfb76c] mt-4" />
            </div>

            <p className="font-sans text-sm sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
              Step inside our cutting room and private salon lounges in Surabaya, Jakarta, and Semarang. Every commission is a masterclass in bespoke cutting precision married with classic ceremonial distinction.
            </p>

            <p className="font-sans text-sm sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
              From our library of distinguished British and Italian cloths to hand-cut horn buttons and pure silk thread buttonholes, experience the quiet nobility of authentic bespoke tailoring.
            </p>

            <div className="pt-2">
              <Link
                href="/the-craft"
                className="inline-block px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-sm"
              >
                Read The Journal
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
