import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverQualitySection from "@/components/DiscoverQualitySection";
import CircularServicesSection from "@/components/CircularServicesSection";
import WideCalloutBanner from "@/components/WideCalloutBanner";
import DarkTestimonialsBanner from "@/components/DarkTestimonialsBanner";
import StorySplitSection from "@/components/StorySplitSection";
import ShowcaseProductsSection from "@/components/ShowcaseProductsSection";
import ContactShowroomSection from "@/components/ContactShowroomSection";
import BookingCtaSection from "@/components/BookingCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fbf9f5] text-[#1e2427] font-sans antialiased selection:bg-[#c5a880] selection:text-[#051419]">
      {/* 1. Header with Top Utility Bar, Centered Logo Emblem, and Horizontal Nav */}
      <Navbar />

      <main className="w-full">
        {/* 2. Cinematic Hero Section: EMBRACE your STYLE */}
        <HeroSection />

        {/* 3. Discover True Quality: Overlapping Dual Photographs */}
        <DiscoverQualitySection />

        {/* 4. Our Services: 4 Circular Photo Pillars */}
        <CircularServicesSection />

        {/* 5. Wide Callout Banner: YOUR DESIGN, WE DELIVER */}
        <WideCalloutBanner />

        {/* 6. Full-Width Dark Testimonials Banner with Patron Quote */}
        <DarkTestimonialsBanner />

        {/* 9. Our Story: Split Editorial Narrative & Atelier Pattern Work */}
        <StorySplitSection />

        {/* 10. Recent Commissions: 4 Suits Row with Fabric Info & CTAs */}
        <ShowcaseProductsSection />

        {/* 11. Contact Info & Showrooms with Map Graphic + 3 Trust Badges */}
        <ContactShowroomSection />

        {/* 12. Bespoke Private Appointment Form */}
        <BookingCtaSection />

      </main>

      {/* 14. Editorial Footer & Dark Copyright Bar */}
      <Footer />
    </div>
  );
}
