import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCtaSection from "@/components/BookingCtaSection";
import ContactShowroomSection from "@/components/ContactShowroomSection";
import BrandMillsCarousel from "@/components/BrandMillsCarousel";

export const metadata = {
  title: "Contact & Concierge • Private Fittings | Bie Hin Tailor",
  description:
    "Schedule a private bespoke consultation at Bie Hin Tailor salons across Surabaya, Jakarta, Tangerang, and Semarang.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* Header Hero */}
        <section className="relative w-full pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/hero-gentleman.png"
              alt="Bie Hin Concierge"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-40"
            />
            <div className="absolute inset-0 bg-[#0c3b45]/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-8 h-px bg-[#dfb76c]" />
              <span>Private Concierge</span>
              <span className="w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              CONTACT &amp; CONCIERGE
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#e0e3e4]/85 font-light leading-relaxed max-w-xl mx-auto">
              We welcome patrons by private appointment to ensure dedicated one-on-one attention from our Master Cutter.
            </p>
          </div>
        </section>

        {/* 3-Column Contact Showroom Section */}
        <ContactShowroomSection />

        {/* Interactive Booking Section */}
        <BookingCtaSection />

        {/* Mills Carousel */}
        <BrandMillsCarousel />
      </main>

      <Footer />
    </div>
  );
}
