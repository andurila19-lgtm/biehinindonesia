"use client";

import Link from "next/link";
import { branches } from "@/data/branches";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function StoresSection() {
  return (
    <section className="w-full bg-[#fcfbf7] py-16 md:py-24 border-t border-[#e5dccc]" id="stores">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs tracking-[0.25em] text-[#9c7736] uppercase font-bold">
                JARINGAN ATELIER RESMI
              </span>
              <span className="w-8 h-px bg-[#dfb76c]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] uppercase">Cabang Bie Hin Tailor</h2>
          </div>
          <span className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-sm font-light">
            6 atelier dan showroom resmi di Surabaya, Jakarta, Tangerang, dan Semarang untuk konsultasi bespoke personal.
          </span>
        </div>

        {/* 6 Directory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((salon) => (
            <div
              key={salon.id}
              className="bg-white border border-[#e5dccc] p-6 flex flex-col justify-between space-y-4 hover:border-[#dfb76c] transition-all shadow-sm rounded-sm"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-sans text-[10px] text-[#9c7736] font-bold px-2 py-0.5 bg-[#fcfbf7] border border-[#dfb76c]/40 uppercase tracking-widest">
                    {salon.tag}
                  </span>
                  {salon.rating && (
                    <span className="font-sans text-[11px] text-[#092831] font-semibold">
                      ★ {salon.rating}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-[#092831] leading-snug">{salon.shortName}</h3>
                <p className="font-sans text-xs text-[#4e5659] leading-relaxed font-light">{salon.fullAddress}</p>
                <div className="pt-1 space-y-1 font-sans text-xs text-[#4e5659]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#dfb76c]" />
                    <span>{salon.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5dccc]/70 flex items-center gap-2">
                {salon.mapsUrl && (
                  <a
                    className="flex-1 text-center py-2 border border-[#dfb76c] text-[#092831] font-sans text-[11px] font-semibold tracking-wider hover:bg-[#dfb76c]/10 transition-colors uppercase inline-flex items-center justify-center gap-1"
                    href={salon.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Rute Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <Link
                  className="flex-1 text-center py-2 bg-[#092831] text-[#dfb76c] font-sans text-[11px] font-bold tracking-wider hover:bg-[#dfb76c] hover:text-[#061d24] transition-all uppercase"
                  href="/contact#book-appointment"
                >
                  Janji Temu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
