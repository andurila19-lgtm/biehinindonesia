"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Compass,
  Layers,
  Smartphone,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  Sliders,
  Award,
  Globe2,
  Lock,
  Zap,
  FileText,
  Presentation,
} from "lucide-react";

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "document">("slides");

  const totalSlides = 8;

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next slide
      setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev slide
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "slides") return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, totalSlides]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#061d24] text-[#e0e3e4] flex flex-col justify-between selection:bg-[#dfb76c]/20 selection:text-[#faedd1] font-sans">
      {/* ========================================================================= */}
      {/* SCREEN VIEW (Hidden on print) */}
      {/* ========================================================================= */}
      <div className="print:hidden flex-1 flex flex-col justify-between">
        {/* Top Responsive Floating Header */}
        <header className="sticky top-0 z-50 bg-[#092831]/95 backdrop-blur-md border-b border-[#dfb76c]/20 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#dfb76c] animate-pulse shrink-0"></span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 truncate">
              <span className="font-serif tracking-wider sm:tracking-widest text-[#dfb76c] font-semibold text-xs sm:text-base whitespace-nowrap">
                BIE HIN TAILOR
              </span>
              <span className="text-[10px] sm:text-xs text-[#8da3a6] sm:border-l sm:border-[#dfb76c]/30 sm:pl-2 hidden md:inline truncate">
                Strategic Proposal Deck by Reaksy
              </span>
            </div>
          </div>

          {/* Slide Indicator (Desktop & Tablet center) */}
          {viewMode === "slides" && (
            <div className="hidden sm:flex items-center gap-1.5 bg-[#061d24] px-3 py-1 rounded-full border border-[#dfb76c]/20 text-xs font-mono text-[#edd79c]">
              <span>Slide</span>
              <span className="font-bold text-[#dfb76c]">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="text-[#8da3a6]">/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
            </div>
          )}

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* View Mode Toggle */}
            <div className="bg-[#061d24] p-0.5 sm:p-1 rounded-lg border border-[#dfb76c]/20 flex text-xs">
              <button
                onClick={() => setViewMode("slides")}
                className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded transition-all text-xs ${
                  viewMode === "slides"
                    ? "bg-[#dfb76c] text-[#061d24] font-semibold shadow-sm"
                    : "text-[#8da3a6] hover:text-[#faedd1]"
                }`}
                title="Mode Presentasi Per-Slide"
              >
                <Presentation className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden md:inline">Slide</span>
              </button>
              <button
                onClick={() => setViewMode("document")}
                className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded transition-all text-xs ${
                  viewMode === "document"
                    ? "bg-[#dfb76c] text-[#061d24] font-semibold shadow-sm"
                    : "text-[#8da3a6] hover:text-[#faedd1]"
                }`}
                title="Mode Dokumen Lengkap (Scroll)"
              >
                <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden md:inline">Dokumen</span>
              </button>
            </div>

            {/* Export / Print PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/40 text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#061d24] transition-all text-xs font-medium"
              title="Cetak atau Simpan Semua Slide ke PDF"
            >
              <Printer className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Simpan PDF</span>
            </button>

            {/* Live Demo Prototype Link */}
            <Link
              href="https://biehinindonesia.reaksy.com/"
              target="_blank"
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#dfb76c] text-[#061d24] hover:bg-[#edd79c] transition-all text-xs font-semibold shadow-md shrink-0"
              title="Kunjungi Live Prototype biehinindonesia.reaksy.com"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Buka Prototype</span>
            </Link>
          </div>
        </header>

        {/* Main Slide / Document Canvas */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col justify-center">
          {viewMode === "slides" ? (
            <div
              className="w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Mobile Slide Indicator Pill (visible on small screens) */}
              <div className="flex sm:hidden items-center justify-between mb-3 text-xs">
                <span className="text-[#8da3a6]">
                  Usap ke kiri/kanan untuk ganti slide
                </span>
                <span className="font-mono px-2 py-0.5 rounded bg-[#092831] border border-[#dfb76c]/30 text-[#dfb76c] font-bold">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>

              {/* Active Slide Container */}
              <div className="bg-[#092831] border border-[#dfb76c]/25 rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden min-h-0 sm:min-h-[580px] flex flex-col justify-between transition-all duration-300">
                {/* Background ambient watermarks */}
                <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-[#dfb76c]/5 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
                <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 text-6xl sm:text-9xl font-serif text-[#dfb76c]/5 pointer-events-none select-none">
                  1930
                </div>

                {/* Render Slide Content by Index */}
                <div className="w-full relative z-10">
                  {renderSlideContent(currentSlide, false)}
                </div>

                {/* Slide Bottom Bar */}
                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#dfb76c]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs text-[#8da3a6] relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[#dfb76c] font-medium">Bie Hin Tailor</span>
                    <span>•</span>
                    <span>Transformasi Digital 2026</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="font-mono text-[#edd79c]">
                      Halaman {currentSlide + 1} dari {totalSlides}
                    </span>
                    <span>•</span>
                    <span>Reaksy Digital Studio</span>
                  </div>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="mt-4 sm:mt-6 flex items-center justify-between gap-2">
                <button
                  onClick={() => setCurrentSlide((p) => Math.max(0, p - 1))}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#092831] border border-[#dfb76c]/30 text-xs sm:text-sm font-medium text-[#faedd1] hover:border-[#dfb76c] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden xs:inline">Sebelumnya</span>
                </button>

                {/* Slide Indicator Dots */}
                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-[180px] sm:max-w-none py-1">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 transition-all rounded-full shrink-0 ${
                        idx === currentSlide
                          ? "w-6 sm:w-8 bg-[#dfb76c]"
                          : "w-2 bg-[#dfb76c]/25 hover:bg-[#dfb76c]/50"
                      }`}
                      title={`Ke Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1))
                  }
                  disabled={currentSlide === totalSlides - 1}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#dfb76c] text-[#061d24] text-xs sm:text-sm font-semibold hover:bg-[#edd79c] disabled:opacity-25 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  <span className="hidden xs:inline">Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Document Mode: All Slides Stacked vertically */
            <div className="space-y-6 sm:space-y-12">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[#092831] border border-[#dfb76c]/25 rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12 shadow-xl relative overflow-hidden"
                >
                  <div className="flex justify-end mb-2 sm:mb-4">
                    <span className="text-[11px] sm:text-xs font-mono text-[#dfb76c]/80 bg-[#061d24] px-2 py-0.5 rounded border border-[#dfb76c]/20">
                      SLIDE {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(totalSlides).padStart(2, "0")}
                    </span>
                  </div>
                  {renderSlideContent(idx, false)}
                  <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#dfb76c]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-[#8da3a6]">
                    <span>Bie Hin Tailor (Est. 1930) — Digital Renaissance</span>
                    <span>Dokumen Rahasia & Eksklusif — Reaksy</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Footer Notes */}
        <footer className="w-full text-center py-3 sm:py-4 border-t border-[#dfb76c]/10 text-[11px] sm:text-xs text-[#8da3a6] px-4">
          <p>
            Navigasi: Tombol panah keyboard <span className="text-[#dfb76c]">←</span> dan{" "}
            <span className="text-[#dfb76c]">→</span>, atau usap (swipe) layar pada smartphone.
          </p>
        </footer>
      </div>

      {/* ========================================================================= */}
      {/* PRINT-ONLY VIEW: Prints ALL 8 slides sequentially in landscape format     */}
      {/* ========================================================================= */}
      <div className="hidden print:block print-canvas">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <section key={idx} className="print-slide-page">
            {/* Header in Print */}
            <div className="flex items-center justify-between border-b border-[#dfb76c]/30 pb-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dfb76c]"></span>
                <span className="font-serif tracking-widest text-[#dfb76c] font-bold text-sm">
                  BIE HIN TAILOR (EST. 1930)
                </span>
                <span className="text-[11px] text-[#8da3a6] border-l border-[#dfb76c]/30 pl-2">
                  Strategic Digital Proposal
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#edd79c] font-semibold">
                SLIDE {String(idx + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </div>
            </div>

            {/* Slide Body */}
            <div className="flex-1 flex flex-col justify-center">
              {renderSlideContent(idx, true)}
            </div>

            {/* Footer in Print */}
            <div className="pt-2 border-t border-[#dfb76c]/20 flex items-center justify-between text-[10px] text-[#8da3a6] mt-4">
              <div>
                <span className="text-[#dfb76c] font-medium">Bie Hin Tailor Indonesia</span> — Manyar & Siwalankerto, Surabaya
              </div>
              <div>
                Disusun oleh <strong className="text-[#edd79c]">Reaksy Digital Studio</strong> (biehinindonesia.reaksy.com)
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Embedded CSS for flawless PDF printing */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0 !important;
          }
          html,
          body {
            background-color: #061d24 !important;
            color: #e0e3e4 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .print-canvas {
            display: block !important;
            width: 100% !important;
            background-color: #061d24 !important;
          }
          .print-slide-page {
            width: 297mm !important;
            height: 210mm !important;
            max-height: 210mm !important;
            box-sizing: border-box !important;
            padding: 16mm 20mm !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            background-color: #061d24 !important;
            color: #e0e3e4 !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: hidden !important;
            position: relative !important;
          }
          /* Ensure backgrounds print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Slide Content Subcomponents
// ----------------------------------------------------------------------------

function renderSlideContent(index: number, isPrint = false) {
  switch (index) {
    case 0:
      return <SlideCover isPrint={isPrint} />;
    case 1:
      return <SlideProblemAudit isPrint={isPrint} />;
    case 2:
      return <SlideStrategicVision isPrint={isPrint} />;
    case 3:
      return <SlideKeyFeatures isPrint={isPrint} />;
    case 4:
      return <SlidePrototypeShowcase isPrint={isPrint} />;
    case 5:
      return <SlideTechnicalExcellence isPrint={isPrint} />;
    case 6:
      return <SlideImplementationRoadmap isPrint={isPrint} />;
    case 7:
      return <SlideNextSteps isPrint={isPrint} />;
    default:
      return null;
  }
}

// ----------------------------------------------------------------------------
// SLIDE 1: Cover
// ----------------------------------------------------------------------------
function SlideCover({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="flex flex-col justify-center items-start my-auto py-2 sm:py-6">
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/30 text-[10px] sm:text-xs text-[#edd79c] uppercase tracking-wider sm:tracking-widest font-semibold mb-3 sm:mb-6">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#dfb76c]" />
        Executive Strategy & Concept Blueprint
      </div>

      <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#faedd1] leading-snug sm:leading-tight max-w-4xl tracking-tight">
        Revitalizing a 94-Year Sartorial Legacy in the Modern Digital Era
      </h1>

      <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-[#c1cbce] max-w-3xl leading-relaxed font-light">
        Konsep Transformasi Digital & Pembaruan Menyeluruh Web Flagship Experience untuk{" "}
        <strong className="text-[#dfb76c] font-medium">Bie Hin Tailor (Established 1930)</strong>.
      </p>

      <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#dfb76c]/20 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
        <div className="p-2 sm:p-0 bg-[#061d24]/50 sm:bg-transparent rounded-lg sm:rounded-none">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#8da3a6]">
            Diajukan Untuk
          </span>
          <span className="font-semibold text-[#faedd1] mt-0.5 sm:mt-1 block">
            Ibu Yasmin & Jajaran Manajemen
          </span>
          <span className="text-[11px] sm:text-xs text-[#8da3a6]">Bie Hin Tailor Indonesia</span>
        </div>
        <div className="p-2 sm:p-0 bg-[#061d24]/50 sm:bg-transparent rounded-lg sm:rounded-none">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#8da3a6]">
            Disusun Oleh
          </span>
          <span className="font-semibold text-[#dfb76c] mt-0.5 sm:mt-1 block">
            Ahmad — Reaksy Digital Studio
          </span>
          <span className="text-[11px] sm:text-xs text-[#8da3a6]">Product Strategist & Full-Stack Engineer</span>
        </div>
        <div className="p-2 sm:p-0 bg-[#061d24]/50 sm:bg-transparent rounded-lg sm:rounded-none">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#8da3a6]">
            Fokus Utama
          </span>
          <span className="font-semibold text-[#faedd1] mt-0.5 sm:mt-1 block">
            Heritage, Prestige, & Conversion
          </span>
          <span className="text-[11px] sm:text-xs text-[#8da3a6]">Surabaya • Manyar & Siwalankerto</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 2: Problem Audit
// ----------------------------------------------------------------------------
function SlideProblemAudit({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Kondisi & Evaluasi Digital</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        Audit Realitas Digital: Urgensi Pembaruan Menyeluruh
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Berdasarkan penelusuran kami pada domain resmi{" "}
        <span className="font-mono text-[#edd79c] bg-[#061d24] px-1.5 py-0.5 rounded border border-[#dfb76c]/20">
          biehinindonesia.com
        </span>
        , website saat ini mengalami <em>critical error</em> dan tidak dapat diakses publik selama
        lebih dari satu tahun.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
        <div className="bg-[#061d24]/80 p-4 sm:p-5 rounded-xl border border-red-500/30 relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-3 sm:mb-4">
            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1.5 sm:mb-2">
            Kehilangan Pasar Klien Potensial
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Calon pengantin (wedding suit) dan eksekutif yang mencari{" "}
            <em>“Tailor Jas Terbaik di Surabaya”</em> di Google beralih ke kompetitor
            karena website resmi tidak dapat dibuka.
          </p>
        </div>

        <div className="bg-[#061d24]/80 p-4 sm:p-5 rounded-xl border border-[#dfb76c]/25 relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center text-[#dfb76c] mb-3 sm:mb-4">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1.5 sm:mb-2">
            Kesenjangan Reputasi Fisik vs Digital
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Showroom Manyar & Siwalankerto memiliki reputasi 94 tahun yang sangat prestisius offline,
            namun belum memiliki representasi digital resmi yang sepadan.
          </p>
        </div>

        <div className="bg-[#061d24]/80 p-4 sm:p-5 rounded-xl border border-[#dfb76c]/25 relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center text-[#dfb76c] mb-3 sm:mb-4">
            <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1.5 sm:mb-2">
            Alur Konsultasi Belum Terintegrasi
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Ketiadaan sistem reservasi janji temu digital dan kurasi katalog kain impor membuat calon
            pelanggan kesulitan mengeksplorasi layanan sebelum berkunjung.
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-start sm:items-center gap-2.5 sm:gap-3">
        <span className="text-base sm:text-lg shrink-0">💡</span>
        <p className="text-xs sm:text-sm text-[#faedd1]">
          <strong>Kesimpulan Strategis:</strong> Langkah terbaik adalah membangun ulang{" "}
          <strong>Modern Heritage Digital Flagship</strong> berkinerja tinggi yang siap digunakan
          hingga bertahun-tahun ke depan.
        </p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 3: Strategic Vision
// ----------------------------------------------------------------------------
function SlideStrategicVision({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Visi & Reposisi Brand</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        The Modern Sartorial Flagship: Bukan Sekadar Website
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Kami merancang ekosistem digital baru Bie Hin Tailor setara dengan standar rumah mode
        sartorial internasional (Savile Row London & Milanese Ateliers), dengan 3 pilar fundamental:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-1.5 sm:mb-2">
            Pilar 01
          </span>
          <h3 className="font-serif text-base sm:text-xl text-[#faedd1] mb-2 sm:mb-3">
            Timeless Heritage & Visual Prestige
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Menonjolkan warisan keahlian sejak 1930 dengan visual berkelas, tipografi editorial elegan,
            serta storytelling mendalam mengenai ketelitian jahitan tangan (handcrafted bespoke).
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-1.5 sm:mb-2">
            Pilar 02
          </span>
          <h3 className="font-serif text-base sm:text-xl text-[#faedd1] mb-2 sm:mb-3">
            Frictionless Client Experience
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Memudahkan calon klien VIP dan calon pengantin untuk menjelajahi inspirasi setelan,
            memilih kain bergengsi dunia, dan menjadwalkan fitting langsung ke showroom pilihan.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-1.5 sm:mb-2">
            Pilar 03
          </span>
          <h3 className="font-serif text-base sm:text-xl text-[#faedd1] mb-2 sm:mb-3">
            Local Search & Market Dominance
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Optimasi SEO mutakhir untuk memastikan Bie Hin menduduki peringkat teratas Google di
            wilayah Surabaya dan sekitarnya ketika calon pelanggan mencari layanan bespoke tailor.
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 4: Key Features
// ----------------------------------------------------------------------------
function SlideKeyFeatures({ isPrint }: { isPrint?: boolean }) {
  const features = [
    {
      icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Katalog & Lookbook Terkurasi",
      desc: "Galeri karya Two-Piece, Three-Piece, Wedding Tuxedo, Business Suits, hingga Batik Bespoke berdetail tajam.",
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Kurasi Kain Kelas Dunia",
      desc: "Menampilkan koleksi kain resmi dunia (Ermenegildo Zegna, Loro Piana, Scabal, Dormeuil) penegas mutu.",
    },
    {
      icon: <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Reservasi Janji Temu & Konsultasi",
      desc: "Sistem booking interaktif menghubungkan calon klien langsung dengan concierge WhatsApp showroom.",
    },
    {
      icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Showroom Hub & Navigasi Peta",
      desc: "Informasi alamat Manyar & Siwalankerto, jam operasional, dan panduan Google Maps terintegrasi.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Narasi 'The Craft' & Linimasa 1930",
      desc: "Dokumentasi visual tahapan pembuatan jas (Full Canvas, pengukuran presisi, fitting) yang edukatif.",
    },
    {
      icon: <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />,
      title: "Kesiapan Dua Bahasa (ID & EN)",
      desc: "Mendukung bahasa Indonesia dan Inggris untuk melayani ekspatriat dan pebisnis multinasional.",
    },
  ];

  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Fitur & Pengalaman Pengguna</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-3 sm:mb-5">
        Modul Utama Platform Digital Bie Hin Tailor
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-3.5 sm:p-4 rounded-xl bg-[#061d24]/90 border border-[#dfb76c]/20 hover:border-[#dfb76c]/50 transition-all"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center mb-2 sm:mb-2.5">
              {f.icon}
            </div>
            <h3 className="font-semibold text-[#faedd1] text-xs sm:text-sm mb-1">{f.title}</h3>
            <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 5: Prototype Showcase
// ----------------------------------------------------------------------------
function SlidePrototypeShowcase({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Bukti Eksekusi & Kesiapan</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        Purwarupa Interaktif (Live Prototype) Siap Ditinjau
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Kami tidak hanya berbicara konsep di atas kertas. Sebagai wujud keseriusan dan profesionalisme,
        kami telah merancang purwarupa website interaktif yang dapat langsung diuji coba.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">
        <div className="lg:col-span-7 bg-[#061d24] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#dfb76c]/30 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#dfb76c]/20 pb-2 sm:pb-3 mb-3 sm:mb-4 text-xs font-mono text-[#8da3a6]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-[#dfb76c] font-semibold text-[11px] sm:text-xs">
              biehinindonesia.reaksy.com
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            <div className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-0.5">
                Hero Experience
              </span>
              <p className="text-xs text-[#faedd1]">
                Visual sinematik kemewahan setelan jas dengan tipografi klasik Playfair Display dan
                tombol aksi cepat pemesanan janji temu.
              </p>
            </div>
            <div className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-0.5">
                Bespoke Services & Fabric Mill
              </span>
              <p className="text-xs text-[#faedd1]">
                Showcase kain Italia & Inggris terkemuka serta rincian proses jahitan tangan khas master tailor.
              </p>
            </div>
            <div className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-0.5">
                Showroom Locator
              </span>
              <p className="text-xs text-[#faedd1]">
                Pilihan cabang Manyar Kertoarjo & Siwalankerto dengan navigasi peta instan dan concierge WhatsApp direct.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4">
          <div className="p-3.5 sm:p-5 rounded-xl bg-[#dfb76c]/10 border border-[#dfb76c]/30">
            <h4 className="text-[#dfb76c] font-semibold text-xs sm:text-sm mb-1 sm:mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Live & Siap Diuji Coba
            </h4>
            <p className="text-xs text-[#c1cbce] leading-relaxed mb-2.5">
              Ibu Yasmin dan tim pengambil keputusan dapat langsung membuka dan merasakan alur
              interaksi website di ponsel maupun komputer melalui tautan:
            </p>
            <div className="p-2 sm:p-2.5 rounded-lg bg-[#061d24] border border-[#dfb76c]/30 font-mono text-[11px] sm:text-xs text-[#edd79c] break-all select-all">
              https://biehinindonesia.reaksy.com/
            </div>
          </div>

          <Link
            href="https://biehinindonesia.reaksy.com/"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#dfb76c] text-[#061d24] font-bold text-xs sm:text-sm hover:bg-[#edd79c] transition-all shadow-xl group"
          >
            <span>Jelajahi Live Demo Website</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-center text-[10px] sm:text-xs text-[#8da3a6]">
            (Membuka https://biehinindonesia.reaksy.com/ di tab baru)
          </span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 6: Technical Excellence
// ----------------------------------------------------------------------------
function SlideTechnicalExcellence({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Keunggulan Rekayasa Teknologi</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        Standar Engineering & Keamanan Tingkat Tinggi
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Website baru ini tidak menggunakan template CMS usang yang rentan error. Kami membangun
        arsitektur modern berbasis Next.js App Router dengan standar industri terkini:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
        <div className="p-3.5 sm:p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-xs sm:text-base mb-1">
              Kecepatan Akses Super Cepat (&lt; 1.2 Detik)
            </h3>
            <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">
              Optimasi aset gambar otomatis, caching modern, dan SSR menjamin website terbuka instan
              tanpa waktu tunggu yang mengganggu calon klien.
            </p>
          </div>
        </div>

        <div className="p-3.5 sm:p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-xs sm:text-base mb-1">
              Bebas Masalah Database & Celah CMS Usang
            </h3>
            <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">
              Arsitektur statis-modern menghilangkan risiko database error seperti pada website lama,
              menjaga website selalu aktif 24/7 tanpa downtime.
            </p>
          </div>
        </div>

        <div className="p-3.5 sm:p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-xs sm:text-base mb-1">
              Mobile-First Precision Experience
            </h3>
            <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">
              Lebih dari 85% pengunjung mengakses dari smartphone. Seluruh elemen didesain
              sangat ergonomis untuk kenyamanan satu tangan di ponsel.
            </p>
          </div>
        </div>

        <div className="p-3.5 sm:p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-xs sm:text-base mb-1">
              Struktur Google Rich Snippet & Local SEO
            </h3>
            <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">
              Schema.org LocalBusiness terstruktur agar nama Bie Hin Tailor, cabang Manyar & Siwalankerto,
              dan kontak tampil sempurna di pencarian Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 7: Implementation Roadmap
// ----------------------------------------------------------------------------
function SlideImplementationRoadmap({ isPrint }: { isPrint?: boolean }) {
  const steps = [
    {
      phase: "Fase 01",
      title: "Discovery & Alignment",
      desc: "Penyelarasan materi arsip 1930 & kurasi foto showroom bersama tim Bie Hin.",
    },
    {
      phase: "Fase 02",
      title: "Bilingual Copywriting",
      desc: "Penyempurnaan narasi dua bahasa (ID & EN) dan finalisasi layout.",
    },
    {
      phase: "Fase 03",
      title: "Domain Integration",
      desc: "Penyambungan domain biehinindonesia.com, SSL, WhatsApp & Google Maps.",
    },
    {
      phase: "Fase 04",
      title: "Quality Assurance",
      desc: "Uji coba menyeluruh multi-perangkat dan penyesuaian akhir bersama manajemen.",
    },
    {
      phase: "Fase 05",
      title: "Official Launch",
      desc: "Peluncuran resmi ke publik, aktivasi Google Search Console & serah terima.",
    },
  ];

  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Tahapan Pengerjaan</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        Roadmap Pelaksanaan & Metodologi Eksekusi
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Proses pengerjaan dijalankan secara terstruktur dan transparan dengan koordinasi berkala
        bersama pihak Bie Hin Tailor:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-4 rounded-xl bg-[#061d24] border border-[#dfb76c]/20 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#dfb76c] uppercase font-bold tracking-wider block mb-1">
                {s.phase}
              </span>
              <h3 className="font-semibold text-[#faedd1] text-xs sm:text-sm mb-1">{s.title}</h3>
              <p className="text-[11px] sm:text-xs text-[#8da3a6] leading-relaxed">{s.desc}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#dfb76c]/10 flex items-center gap-1 text-[10px] sm:text-[11px] text-[#edd79c]">
              <CheckCircle2 className="w-3 h-3 text-[#dfb76c] shrink-0" />
              <span>Milestone {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 8: Next Steps
// ----------------------------------------------------------------------------
function SlideNextSteps({ isPrint }: { isPrint?: boolean }) {
  return (
    <div className="my-auto py-2 sm:py-4">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-1.5 sm:mb-2">
        <span>Langkah Selanjutnya</span>
      </div>
      <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#faedd1] mb-2 sm:mb-3">
        Agenda Penyelarasan Strategis & Diskusi Lanjutan
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-[#c1cbce] max-w-3xl mb-4 sm:mb-6 leading-relaxed">
        Untuk merealisasikan transformasi digital ini dengan tepat sasaran, kami mengusulkan langkah
        berikutnya bersama Ibu Yasmin dan Tim Manajemen:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-2.5 sm:mb-3 text-xs sm:text-sm">
            1
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1 sm:mb-1.5">
            Eksplorasi Purwarupa Bersama
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Meninjau alur live demo prototype bersama Ibu Yasmin serta Owner / Pengambil Keputusan
            Bie Hin Tailor untuk mendapatkan umpan balik awal.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-2.5 sm:mb-3 text-xs sm:text-sm">
            2
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1 sm:mb-1.5">
            Penyelarasan Kebutuhan Khusus
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Mendiskusikan preferensi spesifik, seperti penyesuaian nomor kontak concierge cabang,
            kurasi koleksi musiman, maupun materi foto showroom resmi.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-2.5 sm:mb-3 text-xs sm:text-sm">
            3
          </div>
          <h3 className="font-semibold text-[#faedd1] text-sm sm:text-base mb-1 sm:mb-1.5">
            Penetapan Target Peluncuran
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Menyelaraskan timeline implementasi dengan agenda promosi, event wedding expo, atau
            momen seasonal operasional Bie Hin Tailor.
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#061d24] border border-[#dfb76c]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-0.5 sm:mb-1">
            Reaksy Digital Studio
          </span>
          <h4 className="font-serif text-base sm:text-xl text-[#faedd1]">
            Ahmad — Lead Product Strategist & Engineer
          </h4>
          <p className="text-xs text-[#8da3a6] mt-0.5 sm:mt-1">
            Siap berdiskusi tatap muka (offline) di Surabaya atau daring via Google Meet / Zoom.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <Link
            href="https://biehinindonesia.reaksy.com/"
            target="_blank"
            className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#dfb76c] text-[#061d24] font-semibold text-xs text-center hover:bg-[#edd79c] transition-all shadow-md"
          >
            Buka Live Prototype
          </Link>
        </div>
      </div>
    </div>
  );
}
