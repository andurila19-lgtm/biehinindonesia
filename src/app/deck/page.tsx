"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "document">("slides");

  const totalSlides = 8;

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
    <div className="min-h-screen bg-[#061d24] text-[#e0e3e4] flex flex-col justify-between selection:bg-[#dfb76c]/20 selection:text-[#faedd1] font-sans print:bg-white print:text-black">
      {/* Top Floating Control Bar (Hidden on print) */}
      <header className="sticky top-0 z-50 bg-[#092831]/95 backdrop-blur-md border-b border-[#dfb76c]/20 px-4 sm:px-8 py-3 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb76c] animate-pulse"></span>
            <span className="font-serif tracking-widest text-[#dfb76c] font-semibold text-sm sm:text-base">
              BIE HIN TAILOR
            </span>
          </div>
          <span className="text-xs text-[#8da3a6] border-l border-[#dfb76c]/30 pl-3 hidden md:inline">
            Strategic Proposal Deck by Reaksy
          </span>
        </div>

        {/* Center slide counter (for slide mode) */}
        {viewMode === "slides" && (
          <div className="flex items-center gap-2 bg-[#061d24] px-3 py-1 rounded-full border border-[#dfb76c]/20 text-xs font-mono text-[#edd79c]">
            <span>Slide</span>
            <span className="font-bold text-[#dfb76c]">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-[#8da3a6]">/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
        )}

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode Switcher */}
          <div className="bg-[#061d24] p-1 rounded-lg border border-[#dfb76c]/20 flex text-xs">
            <button
              onClick={() => setViewMode("slides")}
              className={`px-3 py-1 rounded transition-all ${
                viewMode === "slides"
                  ? "bg-[#dfb76c] text-[#061d24] font-semibold shadow-sm"
                  : "text-[#8da3a6] hover:text-[#faedd1]"
              }`}
            >
              Slide Mode
            </button>
            <button
              onClick={() => setViewMode("document")}
              className={`px-3 py-1 rounded transition-all ${
                viewMode === "document"
                  ? "bg-[#dfb76c] text-[#061d24] font-semibold shadow-sm"
                  : "text-[#8da3a6] hover:text-[#faedd1]"
              }`}
            >
              Document Mode
            </button>
          </div>

          {/* Export / Print PDF Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/40 text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#061d24] transition-all text-xs font-medium"
            title="Cetak atau Simpan PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cetak / Simpan PDF</span>
          </button>

          {/* Live Demo Prototype Link */}
          <Link
            href="https://biehinindonesia.reaksy.com/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dfb76c] text-[#061d24] hover:bg-[#edd79c] transition-all text-xs font-semibold shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Buka Prototype</span>
          </Link>
        </div>
      </header>

      {/* Main Slide / Document Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-center">
        {viewMode === "slides" ? (
          <div className="w-full">
            {/* Active Slide Renderer */}
            <div className="bg-[#092831] border border-[#dfb76c]/25 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden min-h-[580px] flex flex-col justify-between transition-all duration-300 print:shadow-none print:border-none print:p-0">
              {/* Background ambient watermarks */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#dfb76c]/5 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
              <div className="absolute bottom-4 right-6 text-9xl font-serif text-[#dfb76c]/5 pointer-events-none select-none">
                1930
              </div>

              {/* Render Slide Content by Index */}
              {renderSlideContent(currentSlide)}

              {/* Slide Bottom Bar */}
              <div className="mt-8 pt-4 border-t border-[#dfb76c]/15 flex items-center justify-between text-xs text-[#8da3a6]">
                <div className="flex items-center gap-2">
                  <span className="text-[#dfb76c] font-medium">Bie Hin Tailor</span>
                  <span>•</span>
                  <span>Transformasi Digital 2026</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[#edd79c]">
                    Halaman {currentSlide + 1} dari {totalSlides}
                  </span>
                  <span>•</span>
                  <span>Reaksy Digital Studio</span>
                </div>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentSlide((p) => Math.max(0, p - 1))}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#092831] border border-[#dfb76c]/30 text-sm font-medium text-[#faedd1] hover:border-[#dfb76c] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all rounded-full ${
                      idx === currentSlide
                        ? "w-8 bg-[#dfb76c]"
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#dfb76c] text-[#061d24] text-sm font-semibold hover:bg-[#edd79c] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Document Mode: All Slides Stacked vertically */
          <div className="space-y-12 print:space-y-0">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <div
                key={idx}
                className="bg-[#092831] border border-[#dfb76c]/25 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden print:border-none print:shadow-none print:break-after-page print:p-8 print:my-0"
              >
                <div className="absolute top-4 right-6 text-xs font-mono text-[#dfb76c]/60 print:text-black">
                  SLIDE {String(idx + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </div>
                {renderSlideContent(idx)}
                <div className="mt-8 pt-4 border-t border-[#dfb76c]/15 flex items-center justify-between text-xs text-[#8da3a6] print:border-gray-300">
                  <span>Bie Hin Tailor (Est. 1930) — Digital Renaissance</span>
                  <span>Dokumen Rahasia & Eksklusif — Reaksy</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Notes (Hidden on print) */}
      <footer className="w-full text-center py-4 border-t border-[#dfb76c]/10 text-xs text-[#8da3a6] print:hidden">
        <p>
          Tekan tombol panah keyboard <span className="text-[#dfb76c]">←</span> dan{" "}
          <span className="text-[#dfb76c]">→</span> untuk navigasi antar slide.
        </p>
      </footer>

      {/* Print Specific CSS */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 12mm 15mm;
          }
          body {
            background-color: #061d24 !important;
            color: #e0e3e4 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          header, footer, nav, button {
            display: none !important;
          }
          .print\\:break-after-page {
            page-break-after: always !important;
            break-after: page !important;
          }
        }
      `}</style>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Slide Content Subcomponents
// ----------------------------------------------------------------------------

function renderSlideContent(index: number) {
  switch (index) {
    case 0:
      return <SlideCover />;
    case 1:
      return <SlideProblemAudit />;
    case 2:
      return <SlideStrategicVision />;
    case 3:
      return <SlideKeyFeatures />;
    case 4:
      return <SlidePrototypeShowcase />;
    case 5:
      return <SlideTechnicalExcellence />;
    case 6:
      return <SlideImplementationRoadmap />;
    case 7:
      return <SlideNextSteps />;
    default:
      return null;
  }
}

// ----------------------------------------------------------------------------
// SLIDE 1: Cover
// ----------------------------------------------------------------------------
function SlideCover() {
  return (
    <div className="flex flex-col justify-center items-start my-auto py-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/30 text-xs text-[#edd79c] uppercase tracking-widest font-semibold mb-6">
        <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
        Executive Strategy & Concept Blueprint
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#faedd1] leading-tight max-w-4xl tracking-tight">
        Revitalizing a 94-Year Sartorial Legacy in the Modern Digital Era
      </h1>

      <p className="mt-6 text-base sm:text-xl text-[#c1cbce] max-w-3xl leading-relaxed font-light">
        Konsep Transformasi Digital & Pembaruan Menyeluruh Web Flagship Experience untuk{" "}
        <strong className="text-[#dfb76c] font-medium">Bie Hin Tailor (Established 1930)</strong>.
      </p>

      <div className="mt-12 pt-8 border-t border-[#dfb76c]/20 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="block text-xs uppercase tracking-wider text-[#8da3a6]">
            Diajukan Untuk
          </span>
          <span className="font-semibold text-[#faedd1] mt-1 block">
            Ibu Yasmin & Jajaran Manajemen
          </span>
          <span className="text-xs text-[#8da3a6]">Bie Hin Tailor Indonesia</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-[#8da3a6]">
            Disusun Oleh
          </span>
          <span className="font-semibold text-[#dfb76c] mt-1 block">
            Ahmad — Reaksy Digital Studio
          </span>
          <span className="text-xs text-[#8da3a6]">Product Strategist & Full-Stack Engineer</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-[#8da3a6]">
            Fokus Utama
          </span>
          <span className="font-semibold text-[#faedd1] mt-1 block">
            Heritage, Prestige, & Conversion
          </span>
          <span className="text-xs text-[#8da3a6]">Surabaya • Manyar & Siwalankerto</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 2: Problem Audit
// ----------------------------------------------------------------------------
function SlideProblemAudit() {
  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Kondisi & Evaluasi Digital</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-4">
        Audit Realitas Digital: Urgensi Pembaruan Menyeluruh
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Berdasarkan penelusuran kami pada domain resmi{" "}
        <span className="font-mono text-[#edd79c] bg-[#061d24] px-2 py-0.5 rounded border border-[#dfb76c]/20">
          biehinindonesia.com
        </span>
        , website saat ini mengalami <em>critical error</em> dan tidak dapat diakses publik selama
        lebih dari satu tahun.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#061d24]/80 p-5 rounded-xl border border-red-500/30 relative">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Kehilangan Pasar Klien Potensial
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Calon pengantin (wedding suit), eksekutif, dan diaspora yang mencari{" "}
            <em>“Tailor Jas Terbaik di Surabaya”</em> melalui Google langsung dialihkan ke kompetitor
            karena website resmi tidak dapat dibuka.
          </p>
        </div>

        <div className="bg-[#061d24]/80 p-5 rounded-xl border border-[#dfb76c]/25 relative">
          <div className="w-10 h-10 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center text-[#dfb76c] mb-4">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Kesenjangan Reputasi Fisik vs Digital
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Showroom Manyar & Siwalankerto memiliki reputasi 94 tahun yang sangat prestisius secara
            offline, namun tidak memiliki representasi digital resmi yang sepadan untuk mencerminkan
            kemewahan tersebut.
          </p>
        </div>

        <div className="bg-[#061d24]/80 p-5 rounded-xl border border-[#dfb76c]/25 relative">
          <div className="w-10 h-10 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center text-[#dfb76c] mb-4">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Alur Konsultasi Belum Terintegrasi
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Ketiadaan sistem reservasi janji temu digital dan kurasi katalog kain impor (Zegna, Loro
            Piana) membuat calon pelanggan baru kesulitan melakukan eksplorasi sebelum berkunjung.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-start sm:items-center gap-3">
        <span className="text-lg">💡</span>
        <p className="text-xs sm:text-sm text-[#faedd1]">
          <strong>Kesimpulan Strategis:</strong> Daripada menambal sistem lama yang rentan error dan
          usang, langkah terbaik adalah membangun ulang <strong>Modern Heritage Digital Flagship</strong>{" "}
          berkinerja tinggi yang siap digunakan hingga bertahun-tahun ke depan.
        </p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 3: Strategic Vision
// ----------------------------------------------------------------------------
function SlideStrategicVision() {
  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Visi & Reposisi Brand</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-4">
        The Modern Sartorial Flagship: Bukan Sekadar Website
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Kami merancang ekosistem digital baru Bie Hin Tailor setara dengan standar rumah mode
        sartorial internasional (Savile Row London & Milanese Ateliers), dengan 3 pilar fundamental:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-2">
            Pilar 01
          </span>
          <h3 className="font-serif text-xl text-[#faedd1] mb-3">
            Timeless Heritage & Visual Prestige
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Menonjolkan warisan keahlian sejak 1930 dengan visual berkelas, tipografi editorial elegan,
            serta storytelling mendalam mengenai ketelitian jahitan tangan (handcrafted bespoke).
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-2">
            Pilar 02
          </span>
          <h3 className="font-serif text-xl text-[#faedd1] mb-3">
            Frictionless Client Experience
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Memudahkan calon klien VIP dan calon pengantin untuk menjelajahi inspirasi setelan,
            memilih kain bergengsi dunia, dan menjadwalkan fitting langsung ke showroom pilihan.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#061d24] border-t-2 border-t-[#dfb76c] border-x border-b border-[#dfb76c]/20">
          <span className="text-xs font-mono text-[#dfb76c] uppercase tracking-wider block mb-2">
            Pilar 03
          </span>
          <h3 className="font-serif text-xl text-[#faedd1] mb-3">
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
function SlideKeyFeatures() {
  const features = [
    {
      icon: <Layers className="w-5 h-5 text-[#dfb76c]" />,
      title: "Katalog & Lookbook Terkurasi",
      desc: "Galeri karya setelan Two-Piece, Three-Piece, Wedding Tuxedo, Business Suits, hingga Batik Bespoke dengan detail craftsmanship yang tajam.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#dfb76c]" />,
      title: "Kurasi Kain Kelas Dunia",
      desc: "Menampilkan koleksi kain resmi dunia (Ermenegildo Zegna, Loro Piana, Scabal, Dormeuil) untuk menegaskan otoritas mutu Bie Hin.",
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#dfb76c]" />,
      title: "Reservasi Janji Temu & Konsultasi",
      desc: "Sistem booking interaktif yang menghubungkan calon klien langsung dengan concierge WhatsApp di cabang Manyar atau Siwalankerto.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#dfb76c]" />,
      title: "Showroom Hub & Navigasi Lokasi",
      desc: "Informasi lengkap alamat, jam operasional, panduan Google Maps terintegrasi, dan kontak langsung untuk kenyamanan kunjungan klien.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#dfb76c]" />,
      title: "Narasi 'The Craft' & Linimasa 1930",
      desc: "Dokumentasi visual tahapan pembuatan jas (Full Canvas, pengukuran presisi, fitting) yang mendidik dan meyakinkan calon klien.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#dfb76c]" />,
      title: "Kesiapan Dua Bahasa (ID & EN)",
      desc: "Mendukung bahasa Indonesia dan Inggris untuk melayani ekspatriat, tamu internasional, serta kalangan pebisnis multinasional.",
    },
  ];

  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Fitur & Pengalaman Pengguna</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-6">
        Modul Utama Platform Digital Bie Hin Tailor
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-[#061d24]/90 border border-[#dfb76c]/20 hover:border-[#dfb76c]/50 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/30 flex items-center justify-center mb-3">
              {f.icon}
            </div>
            <h3 className="font-semibold text-[#faedd1] text-base mb-1.5">{f.title}</h3>
            <p className="text-xs text-[#8da3a6] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 5: Prototype Showcase
// ----------------------------------------------------------------------------
function SlidePrototypeShowcase() {
  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Bukti Eksekusi & Kesiapan</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-3">
        Purwarupa Interaktif (Live Prototype) Siap Ditinjau
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Kami tidak hanya berbicara konsep di atas kertas. Sebagai wujud keseriusan dan profesionalisme,
        kami telah merancang purwarupa website interaktif yang dapat langsung diuji coba.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-[#061d24] p-6 rounded-2xl border border-[#dfb76c]/30 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#dfb76c]/20 pb-3 mb-4 text-xs font-mono text-[#8da3a6]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-[#dfb76c] font-semibold">biehinindonesia.reaksy.com</span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-1">
                Hero Experience
              </span>
              <p className="text-xs text-[#faedd1]">
                Visual sinematik kemewahan setelan jas dengan tipografi klasik Playfair Display dan
                tombol aksi cepat pemesanan janji temu.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-1">
                Bespoke Services & Fabric Mill
              </span>
              <p className="text-xs text-[#faedd1]">
                Integrasi showcase kain Italia & Inggris terkemuka serta rincian proses jahitan
                tangan khas master tailor.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#092831] border border-[#dfb76c]/20">
              <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-1">
                Showroom Locator
              </span>
              <p className="text-xs text-[#faedd1]">
                Pilihan cabang Manyar Kertoarjo & Siwalankerto dengan navigasi peta instan dan
                concierge WhatsApp direct.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div className="p-5 rounded-xl bg-[#dfb76c]/10 border border-[#dfb76c]/30">
            <h4 className="text-[#dfb76c] font-semibold text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Live & Siap Diuji Coba
            </h4>
            <p className="text-xs text-[#c1cbce] leading-relaxed mb-3">
              Ibu Yasmin dan tim pengambil keputusan dapat langsung membuka dan merasakan alur
              interaksi website di ponsel maupun komputer melalui tautan:
            </p>
            <div className="p-2.5 rounded-lg bg-[#061d24] border border-[#dfb76c]/30 font-mono text-xs text-[#edd79c] break-all select-all">
              https://biehinindonesia.reaksy.com/
            </div>
          </div>

          <Link
            href="https://biehinindonesia.reaksy.com/"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#dfb76c] text-[#061d24] font-bold text-base hover:bg-[#edd79c] transition-all shadow-xl group"
          >
            <span>Jelajahi Live Demo Website</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-center text-xs text-[#8da3a6]">
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
function SlideTechnicalExcellence() {
  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Keunggulan Rekayasa Teknologi</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-4">
        Standar Engineering & Keamanan Tingkat Tinggi
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Website baru ini tidak menggunakan template CMS yang rentan rusak atau lambat. Kami membangun
        arsitektur modern berbasis Next.js App Router dengan standar industri terkini:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-base mb-1">
              Kecepatan Akses Super Cepat (&lt; 1.2 Detik)
            </h3>
            <p className="text-xs text-[#8da3a6] leading-relaxed">
              Optimasi aset gambar otomatis, caching modern, dan server-side rendering menjamin
              website terbuka tanpa jeda waktu tunggu yang mengganggu calon klien.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-base mb-1">
              Bebas Masalah Database & Celah CMS Usang
            </h3>
            <p className="text-xs text-[#8da3a6] leading-relaxed">
              Arsitektur statis-modern menghilangkan risiko database error seperti yang terjadi pada
              website lama, menjaga website selalu aktif 24/7 tanpa downtime.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-base mb-1">
              Mobile-First Precision Experience
            </h3>
            <p className="text-xs text-[#8da3a6] leading-relaxed">
              Lebih dari 85% pengunjung mengakses dari smartphone. Seluruh elemen telah didesain
              sangat ergonomis untuk kenyamanan navigasi satu tangan di ponsel.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#061d24] border border-[#dfb76c]/25 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#dfb76c]/10 text-[#dfb76c] shrink-0">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[#faedd1] text-base mb-1">
              Struktur Google Rich Snippet & Local SEO
            </h3>
            <p className="text-xs text-[#8da3a6] leading-relaxed">
              Dilengkapi Schema.org LocalBusiness terstruktur agar nama Bie Hin Tailor, rating, alamat
              cabang, dan jam buka tampil sempurna di hasil pencarian Google.
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
function SlideImplementationRoadmap() {
  const steps = [
    {
      phase: "Fase 01",
      title: "Discovery & Brand Alignment",
      desc: "Penyelarasan materi arsip sejarah 1930, kurasi foto showroom & katalog produk bersama tim Bie Hin.",
    },
    {
      phase: "Fase 02",
      title: "Design Refinement & Bilingual Copywriting",
      desc: "Penyempurnaan narasi brand dua bahasa (ID & EN) dan finalisasi layout tiap halaman.",
    },
    {
      phase: "Fase 03",
      title: "Technical Assembly & Domain Integration",
      desc: "Penyambungan domain resmi biehinindonesia.com, konfigurasi SSL, integrasi WhatsApp & Google Maps.",
    },
    {
      phase: "Fase 04",
      title: "Quality Assurance & Stakeholder Review",
      desc: "Uji coba menyeluruh di beragam perangkat dan penyesuaian akhir bersama Ibu Yasmin & Manajemen.",
    },
    {
      phase: "Fase 05",
      title: "Official Public Launch & Handover",
      desc: "Peluncuran resmi ke publik, aktivasi Google Search Console, dan panduan pengoperasian mandiri.",
    },
  ];

  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Tahapan Pengerjaan</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-4">
        Roadmap Pelaksanaan & Metodologi Eksekusi
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Proses pengerjaan dijalankan secara terstruktur dan transparan dengan koordinasi berkala
        bersama pihak Bie Hin Tailor:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#061d24] border border-[#dfb76c]/20 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-[#dfb76c] uppercase font-bold tracking-wider block mb-2">
                {s.phase}
              </span>
              <h3 className="font-semibold text-[#faedd1] text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-[#8da3a6] leading-relaxed">{s.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#dfb76c]/10 flex items-center gap-1 text-[11px] text-[#edd79c]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>Milestone {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// SLIDE 8: Next Steps (Pure Professional Next Steps - ZERO talk about price!)
// ----------------------------------------------------------------------------
function SlideNextSteps() {
  return (
    <div className="my-auto py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb76c] font-semibold mb-2">
        <span>Langkah Selanjutnya</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-4xl text-[#faedd1] mb-4">
        Agenda Penyelarasan Strategis & Diskusi Lanjutan
      </h2>
      <p className="text-sm sm:text-base text-[#c1cbce] max-w-3xl mb-8 leading-relaxed">
        Untuk merealisasikan transformasi digital ini dengan tepat sasaran, kami mengusulkan langkah
        berikutnya bersama Ibu Yasmin dan Tim Manajemen:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-8 h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-4 text-sm">
            1
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Eksplorasi Purwarupa Bersama
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Meninjau alur live demo prototype bersama Ibu Yasmin serta Owner / Pengambil Keputusan
            Bie Hin Tailor untuk mendapatkan umpan balik awal.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-8 h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-4 text-sm">
            2
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Penyelarasan Kebutuhan Khusus
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Mendiskusikan preferensi spesifik, seperti penyesuaian nomor kontak concierge cabang,
            kurasi koleksi musiman, maupun materi foto showroom resmi.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#061d24] border border-[#dfb76c]/30">
          <div className="w-8 h-8 rounded-full bg-[#dfb76c] text-[#061d24] font-bold font-mono flex items-center justify-center mb-4 text-sm">
            3
          </div>
          <h3 className="font-semibold text-[#faedd1] text-base mb-2">
            Penetapan Target Peluncuran
          </h3>
          <p className="text-xs sm:text-sm text-[#8da3a6] leading-relaxed">
            Menyelaraskan timeline implementasi dengan agenda promosi, event wedding expo, atau
            momen seasonal operasional Bie Hin Tailor.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#061d24] border border-[#dfb76c]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block mb-1">
            Reaksy Digital Studio
          </span>
          <h4 className="font-serif text-xl text-[#faedd1]">
            Ahmad — Lead Product Strategist & Engineer
          </h4>
          <p className="text-xs text-[#8da3a6] mt-1">
            Siap berdiskusi secara tatap muka (offline) di Surabaya atau daring (Google Meet / Zoom).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Link
            href="https://biehinindonesia.reaksy.com/"
            target="_blank"
            className="px-5 py-2.5 rounded-lg bg-[#dfb76c] text-[#061d24] font-semibold text-xs text-center hover:bg-[#edd79c] transition-all shadow-md"
          >
            Buka Live Prototype (biehinindonesia.reaksy.com)
          </Link>
        </div>
      </div>
    </div>
  );
}
