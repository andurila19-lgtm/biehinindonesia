import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Clock, Scissors, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Our Story • Bespoke Tailoring Heritage Since 1930 | Bie Hin Tailor",
  description:
    "Discover the bespoke tailoring heritage of Bie Hin Tailor. Established in 1930 in Surabaya, crafting custom suits and formal attire across Surabaya, Jakarta, and Semarang.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* Page Hero Banner */}
        <section className="relative w-full pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/tailor-craft.png"
              alt="Tailor cutting pattern in Bie Hin atelier"
              fill
              sizes="100vw"
              className="object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#0c3b45]/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-8 h-px bg-[#dfb76c]" />
              <span>Heritage &amp; Craft</span>
              <span className="w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              OUR STORY
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#edd79c] tracking-[0.25em] uppercase font-light">
              BESPOKE TAILORING TRADITIONS SINCE 1930
            </p>
          </div>
        </section>

        {/* Narrative Section with 2 Columns */}
        <section className="py-20 md:py-28 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] overflow-hidden shadow-md border border-[#e5dccc]">
              <Image
                src="/images/hero-gentleman-hd.jpg"
                alt="Gentleman in bespoke suit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="font-sans text-xs tracking-[0.25em] text-[#9c7736] uppercase font-semibold block">
                  ATELIER PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] uppercase tracking-wide font-normal mt-1">
                  DEVOTION TO THE BESPOKE CRAFT
                </h2>
                <div className="w-12 h-0.5 bg-[#dfb76c] mt-3" />
              </div>

              <p className="font-sans text-sm sm:text-base text-[#4e5659] leading-relaxed font-light">
                At Bie Hin Tailor, we believe true elegance begins with an uncompromising commitment to fit, silhouette balance, and authentic bespoke craftsmanship. Every garment is drafted individually, honoring classical menswear geometry while adapting to modern lifestyles.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#4e5659] leading-relaxed font-light">
                From our foundational cutting rooms in Surabaya to our private fitting salons in Jakarta and Semarang, our atelier provides clients with dedicated consultation, fine European wool selections, and attentive service.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-block px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md"
                >
                  Explore Bespoke Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Milestones Timeline */}
        <section className="w-full bg-[#f4f0e8] py-20 border-t border-b border-[#e5dccc]">
          <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <div className="flex flex-col items-center justify-center space-y-3 mb-16">
              <div className="w-12 h-0.5 bg-[#dfb76c]" />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] tracking-widest font-normal uppercase">
                A HERITAGE OF CRAFTSMANSHIP
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-md font-light">
                Dedicated to the art of bespoke tailoring, precision fit, and timeless style since 1930.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 border border-[#e5dccc] shadow-sm text-left space-y-4">
                <span className="font-serif text-4xl text-[#dfb76c] font-normal block">
                  1930
                </span>
                <h3 className="font-serif text-xl text-[#092831] uppercase">
                  Foundations in Surabaya
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4e5659] font-light leading-relaxed">
                  Established in Surabaya, providing bespoke suiting, precision pattern drafting, and fine international fabrics for discerning patrons.
                </p>
              </div>

              <div className="bg-white p-8 border border-[#e5dccc] shadow-sm text-left space-y-4">
                <span className="font-serif text-4xl text-[#dfb76c] font-normal block">
                  Showrooms
                </span>
                <h3 className="font-serif text-xl text-[#092831] uppercase">
                  Surabaya, Jakarta &amp; Semarang
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4e5659] font-light leading-relaxed">
                  Expanding our fitting presence across Surabaya, Jakarta, and Semarang with dedicated private consultation and personal wardrobe fittings.
                </p>
              </div>

              <div className="bg-white p-8 border border-[#e5dccc] shadow-sm text-left space-y-4">
                <span className="font-serif text-4xl text-[#dfb76c] font-normal block">
                  Today
                </span>
                <h3 className="font-serif text-xl text-[#092831] uppercase">
                  Digital Showroom &amp; Modern Atelier
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4e5659] font-light leading-relaxed">
                  Continuing authentic bespoke traditions with floating canvas construction, curated cloths, and dedicated private appointments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Craft */}
        <section className="py-20 md:py-24 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3 p-6">
              <div className="w-14 h-14 rounded-full bg-[#092831] text-[#dfb76c] flex items-center justify-center mx-auto shadow-md">
                <Scissors className="w-6 h-6 stroke-1" />
              </div>
              <h4 className="font-serif text-base uppercase text-[#092831] tracking-wider">
                Hand-Drafted Pattern
              </h4>
              <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                Every patron receives a unique hand-drawn paper pattern stored in our private archives.
              </p>
            </div>

            <div className="text-center space-y-3 p-6">
              <div className="w-14 h-14 rounded-full bg-[#092831] text-[#dfb76c] flex items-center justify-center mx-auto shadow-md">
                <Clock className="w-6 h-6 stroke-1" />
              </div>
              <h4 className="font-serif text-base uppercase text-[#092831] tracking-wider">
                70 Artisan Hours
              </h4>
              <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                From initial basted fitting to hand-rolled lapels and pick-stitching, time is our greatest luxury.
              </p>
            </div>

            <div className="text-center space-y-3 p-6">
              <div className="w-14 h-14 rounded-full bg-[#092831] text-[#dfb76c] flex items-center justify-center mx-auto shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-1" />
              </div>
              <h4 className="font-serif text-base uppercase text-[#092831] tracking-wider">
                Floating Full-Canvas
              </h4>
              <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                Zero glue or synthetic fusing. Pure horsehair and linen interlinings that mold to your physique.
              </p>
            </div>

            <div className="text-center space-y-3 p-6">
              <div className="w-14 h-14 rounded-full bg-[#092831] text-[#dfb76c] flex items-center justify-center mx-auto shadow-md">
                <Award className="w-6 h-6 stroke-1" />
              </div>
              <h4 className="font-serif text-base uppercase text-[#092831] tracking-wider">
                Lifetime Maintenance
              </h4>
              <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                Complimentary seam restyling, seasonal pressing, and structural upkeep for every bespoke piece.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
