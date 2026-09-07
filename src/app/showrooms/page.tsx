import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCtaSection from "@/components/BookingCtaSection";
import { MapPin, Calendar, Clock, Star, ExternalLink } from "lucide-react";
import { branches } from "@/data/branches";

export const metadata = {
  title: "Cabang & Showroom Resmi • Surabaya, Jakarta, Tangerang, Semarang | Bie Hin Tailor",
  description:
    "Kunjungi 6 cabang dan atelier showroom resmi Bie Hin Tailor di Surabaya Pusat (Pahlawan), Surabaya Timur (Manyar), Wisata Bukit Mas, Jakarta Utara (Sunter Stitch & Brew), Tangerang (Greenlake), dan Semarang.",
};

export default function ShowroomsPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* Header Hero */}
        <section className="relative w-full pt-28 pb-12 sm:pt-44 sm:pb-24 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/hero-gentleman-hd.jpg"
              alt="Bie Hin Tailor Showroom"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-40"
              priority
            />
            <div className="absolute inset-0 bg-[#0c3b45]/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
              <span>6 Showrooms Across Indonesia</span>
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              OUR SHOWROOMS
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#e0e3e4]/85 font-light leading-relaxed max-w-xl mx-auto">
              Kunjungi cabang dan fitting salon resmi Bie Hin Tailor di Surabaya, Jakarta, Tangerang, dan Semarang untuk konsultasi personal bersama master tailor kami.
            </p>
          </div>
        </section>

        {/* 6 Showrooms Cards */}
        <section className="py-10 md:py-20 max-w-[1300px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8 md:space-y-14">
          {branches.map((salon) => (
            <div
              key={salon.id}
              id={salon.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center p-5 sm:p-8 bg-white border border-[#e5dccc] shadow-sm rounded-sm hover:border-[#dfb76c]/60 transition-colors"
            >
              {/* Image */}
              <div className="lg:col-span-5 relative h-[240px] sm:h-[340px] overflow-hidden shadow-md bg-[#092831]">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#092831]/90 border border-[#dfb76c]/40 px-2.5 py-1 text-[10px] font-sans font-bold text-[#dfb76c] tracking-widest uppercase">
                  {salon.tag}
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-sans text-xs tracking-[0.25em] text-[#9c7736] uppercase font-bold">
                      {salon.city} • {salon.category}
                    </span>
                    {salon.rating && (
                      <div className="flex items-center gap-1.5 bg-[#fcfbf7] px-2.5 py-1 border border-[#dfb76c]/40 text-xs font-semibold text-[#092831]">
                        <Star className="w-3.5 h-3.5 text-[#dfb76c] fill-[#dfb76c]" />
                        <span>{salon.rating}</span>
                        <span className="text-[#4e5659]/70 font-normal">({salon.reviewCount} ulasan)</span>
                      </div>
                    )}
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-[#092831] uppercase tracking-wide font-normal mt-2 leading-snug">
                    {salon.name}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#dfb76c] mt-2.5" />
                </div>

                <div className="space-y-2.5 font-sans text-xs sm:text-sm text-[#4e5659] font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                    <span className="text-[#1e2427] font-normal leading-relaxed">{salon.fullAddress}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                    <span>{salon.hours}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                    <span>Sesi Konsultasi &amp; Fitting Eksklusif</span>
                  </div>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {salon.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#f7f5ef] border border-[#e5dccc] text-[11px] font-sans text-[#4e5659]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href={`/contact#book-appointment`}
                    className="px-6 py-2.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-sm"
                  >
                    Buat Janji Temu
                  </Link>

                  {salon.mapsUrl && (
                    <a
                      href={salon.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-[#dfb76c] text-[#092831] hover:bg-[#dfb76c]/10 font-sans text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Buka Google Maps (Rute)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#9c7736]" />
                    </a>
                  )}

                  {salon.instagramUrl && (
                    <a
                      href={salon.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-[#e5dccc] text-[#4e5659] hover:text-[#092831] font-sans text-xs font-medium tracking-wider uppercase transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Booking Form */}
        <BookingCtaSection />
      </main>

      <Footer />
    </div>
  );
}
