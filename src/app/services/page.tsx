import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCtaSection from "@/components/BookingCtaSection";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Bespoke Services • Custom Tailoring & Weddings | Bie Hin Tailor",
  description:
    "Explore Bie Hin Tailor's bespoke services: Hand-canvassed suits, luxury wedding tuxedos, formal evening wear, and executive tailoring.",
};

const serviceDetails = [
  {
    title: "FULL BESPOKE SUITING",
    subtitle: "Precision Tailoring & Handcrafted Fit",
    desc: "Crafted strictly according to authentic bespoke traditions. Every commission begins with individual anatomical measurements and paper drafting, structured with fine floating canvas that contours naturally to your posture.",
    image: "/images/services/custom-suits.jpg",
    features: [
      "Floating canvas construction for natural drape",
      "Hand-padded lapel roll and pitched sleeve heads",
      "Fine hand-sewn buttonholes and natural horn buttons",
      "Dedicated fitting sessions to guarantee precision fit",
    ],
  },
  {
    title: "WEDDING & GROOM ATTIRE",
    subtitle: "Distinguished Attire for Memorable Celebrations",
    desc: "Your wedding day demands peerless elegance. We craft bespoke morning coats, midnight tuxedos with silk lapels, and tailored wedding suits designed to match the theme of your celebration.",
    image: "/images/services/wedding-suits.jpg",
    features: [
      "Midnight Blue and Classic Black wool selections",
      "Silk satin or grosgrain peak and shawl lapels",
      "Custom monograms and coordinated linings",
      "Private fittings for groom and entourage",
    ],
  },
  {
    title: "FORMAL & EVENING WEAR",
    subtitle: "Black Tie & Gala Distinction",
    desc: "Impeccable evening wear and silk-lined formal commissions shaped with timeless elegance. Perfect for galas, diplomatic receptions, and white/black-tie occasions.",
    image: "/images/services/formal-wear.jpg",
    features: [
      "Deep Barathea wool and luxury evening cloths",
      "Precision-crafted satin and grosgrain lapels",
      "Breathable high-comfort silk linings",
      "Tailored waistbands and tuxedo trousers",
    ],
  },
  {
    title: "CORPORATE & EXECUTIVE SUITS",
    subtitle: "Tailored Poise for the Professional Leader",
    desc: "Authoritative boardroom suits, sharp double-breasted silhouettes, and crease-resistant international wools engineered for comfort during travel and business conferences.",
    image: "/images/services/corporate-executive.jpg",
    features: [
      "High-twist travel-friendly worsted wools",
      "Custom pocket configurations and ticket pockets",
      "Reinforced seams and durable handcrafting",
      "Full and half canvas construction options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* Header Hero */}
        <section className="relative w-full pt-28 pb-12 sm:pt-44 sm:pb-24 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/hero-gentleman-hd.jpg"
              alt="Tailoring showroom"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-50"
            />
            <div className="absolute inset-0 bg-[#0c3b45]/75 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
              <span>Sartorial Disciplines</span>
              <span className="w-6 sm:w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              OUR SERVICES
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#e0e3e4]/85 font-light leading-relaxed max-w-xl mx-auto">
              Each commission is an individual masterpiece sculpted to your posture, lifestyle, and occasion with precision handcraft.
            </p>
          </div>
        </section>

        {/* Detailed Services Alternating Rows */}
        <section className="py-10 md:py-20 max-w-[1300px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10 md:space-y-20">
          {serviceDetails.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-[220px] sm:h-[460px] w-full shadow-2xl border-4 border-white bg-white overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-sans text-xs tracking-[0.25em] text-[#9c7736] uppercase font-semibold block">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] uppercase tracking-wide font-normal">
                      {service.title}
                    </h2>
                    <div className="w-14 h-0.5 bg-[#dfb76c] mt-2" />
                  </div>

                  <p className="font-sans text-sm sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-[#092831] font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact#book-appointment"
                      className="inline-block px-8 py-3.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md"
                    >
                      Commission This Service
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* 4 Steps Journey */}
        <section className="w-full bg-[#f4f0e8] py-20 border-t border-b border-[#e5dccc]">
          <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <div className="flex flex-col items-center justify-center space-y-3 mb-16">
              <div className="w-12 h-0.5 bg-[#dfb76c]" />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] tracking-widest font-normal uppercase">
                THE 4-STEP BESPOKE JOURNEY
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-lg font-light">
                How an idea in your mind transforms into a second-skin bespoke masterpiece.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-3">
                <span className="font-serif text-3xl text-[#dfb76c]">01</span>
                <h3 className="font-serif text-base uppercase text-[#092831]">
                  Consultation &amp; Cloth
                </h3>
                <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                  Personal dialogue discussing your lifestyle, silhouette preferences, and selecting from over 2,000 vintage &amp; modern cloths.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-3">
                <span className="font-serif text-3xl text-[#dfb76c]">02</span>
                <h3 className="font-serif text-base uppercase text-[#092831]">
                  Anatomical Drafting
                </h3>
                <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                  Master Cutter hand-drafts a bespoke 2D paper pattern based on 30+ physical checkpoints, then hand-shears the virgin wool.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-3">
                <span className="font-serif text-3xl text-[#dfb76c]">03</span>
                <h3 className="font-serif text-base uppercase text-[#092831]">
                  The Basted Fitting
                </h3>
                <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                  You try on the semi-assembled suit held together with white basting thread. Balance, drape, and chest roll are refined by eye.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-3">
                <span className="font-serif text-3xl text-[#dfb76c]">04</span>
                <h3 className="font-serif text-base uppercase text-[#092831]">
                  Final Hand-Delivery
                </h3>
                <p className="font-sans text-xs text-[#4e5659] font-light leading-relaxed">
                  Seventy hours of artisan stitching completed with silk buttonholes and horn buttons, pressed with heavy irons for ready wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <BookingCtaSection />
      </main>

      <Footer />
    </div>
  );
}
