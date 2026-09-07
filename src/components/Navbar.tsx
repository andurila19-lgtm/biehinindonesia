"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, dict } = useLanguage();

  const navLinks = [
    { label: dict.nav.home, href: "/" },
    { label: dict.nav.story, href: "/our-story" },
    { label: dict.nav.services, href: "/services" },
    { label: dict.nav.collection, href: "/collection" },
    { label: dict.nav.showrooms, href: "/showrooms" },
    { label: dict.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page bleed-through
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen || scrolled
            ? "bg-[#092831] shadow-[0_10px_30px_rgba(0,0,0,0.55)] border-b border-[#dfb76c]/30 py-3"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* 1. Left: Brand Identity & Transparent Gold Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3.5 group min-w-0"
          >
            <div className="h-6 sm:h-9 w-auto aspect-[565/160] relative shrink-0">
              <Image
                src="/images/bie-hin-logo-transparent.png"
                alt="Bie Hin Tailor Signature Gold Crest"
                fill
                sizes="(max-width: 640px) 90px, 140px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-[15px] sm:text-xl text-[#fbf9f4] tracking-[0.06em] sm:tracking-[0.08em] font-normal leading-none group-hover:text-[#dfb76c] transition-colors drop-shadow-md whitespace-nowrap">
                BIE HIN TAILOR
              </span>
              <span className="font-sans text-[7px] sm:text-[9px] text-[#dfb76c] tracking-[0.2em] sm:tracking-[0.26em] font-semibold mt-1 uppercase drop-shadow-sm whitespace-nowrap">
                EST. 1930 • BESPOKE MAISON
              </span>
            </div>
          </Link>

          {/* 2. Center: Simplified, Spacious Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11px] font-sans tracking-[0.2em] uppercase font-semibold text-[#fbf9f4]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#dfb76c] font-bold"
                      : "text-[#fbf9f4]/85 hover:text-[#dfb76c]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#dfb76c] shadow-[0_0_8px_rgba(223,183,108,0.7)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Desktop Language Switcher + Clean, Prestigious CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Bilingual Switcher (ID | EN) */}
            <div className="flex items-center border border-[#dfb76c]/40 rounded-full px-2.5 py-1 bg-[#061d24]/60 backdrop-blur-sm shadow-inner text-[11px] tracking-wider">
              <button
                type="button"
                onClick={() => setLocale("id")}
                className={`px-1.5 py-0.5 font-bold transition-all ${
                  locale === "id"
                    ? "text-[#dfb76c] drop-shadow-[0_0_6px_rgba(223,183,108,0.6)]"
                    : "text-[#fbf9f4]/50 hover:text-[#fbf9f4]"
                }`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <span className="text-[#dfb76c]/30 text-[10px] select-none">|</span>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-1.5 py-0.5 font-bold transition-all ${
                  locale === "en"
                    ? "text-[#dfb76c] drop-shadow-[0_0_6px_rgba(223,183,108,0.6)]"
                    : "text-[#fbf9f4]/50 hover:text-[#fbf9f4]"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link
              href="/contact#book-appointment"
              className="px-5 py-2.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_18px_rgba(223,183,108,0.3)] hover:shadow-[0_6px_22px_rgba(223,183,108,0.45)] hover:-translate-y-0.5"
            >
              {dict.nav.bookAppointment}
            </Link>
          </div>

          {/* Mobile Right: BOOK Button + Menu Toggle (No collision, clean & spacious) */}
          <div className="flex items-center gap-2.5 lg:hidden shrink-0 ml-2">
            <Link
              href="/contact#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans font-bold text-[10px] tracking-wider uppercase shadow-sm rounded-sm shrink-0"
            >
              {dict.nav.book}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 text-[#fbf9f4] hover:text-[#dfb76c] transition-colors rounded-lg bg-[#092831] border border-[#dfb76c]/50 shadow-md shrink-0 flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel: Attached to bottom of header, clean & spacious */}
        {mobileMenuOpen && (
          <div
            style={{ backgroundColor: "#092831" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#092831] border-b-2 border-[#dfb76c]/40 shadow-[0_25px_45px_rgba(0,0,0,0.7)] px-5 py-3.5 flex flex-col"
          >
            {/* Mobile Language Switcher (Prominent, Elegant, Easy to Tap) */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#dfb76c]/20">
              <span className="font-sans text-[11px] text-[#edd79c] uppercase tracking-widest font-medium">
                Language / Bahasa
              </span>
              <div className="flex items-center border border-[#dfb76c]/50 rounded-full p-0.5 bg-[#061d24] text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLocale("id")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    locale === "id"
                      ? "bg-[#dfb76c] text-[#061d24] shadow-sm font-extrabold"
                      : "text-[#fbf9f4]/60 hover:text-[#fbf9f4]"
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    locale === "en"
                      ? "bg-[#dfb76c] text-[#061d24] shadow-sm font-extrabold"
                      : "text-[#fbf9f4]/60 hover:text-[#fbf9f4]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Navigation Links (Compact & Elegant) */}
            <div className="flex flex-col divide-y divide-[#dfb76c]/15">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    href={link.href}
                    className={`py-2.5 font-serif text-[15px] tracking-[0.16em] uppercase transition-colors flex items-center justify-between ${
                      isActive ? "text-[#dfb76c] font-bold" : "text-[#fbf9f4] hover:text-[#dfb76c]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-[#dfb76c] text-xs">◆</span>}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action Card */}
            <div className="pt-3 mt-2 border-t border-[#dfb76c]/20 flex items-center gap-3">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/contact#book-appointment"
                className="w-full text-center py-2.5 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans font-bold text-xs tracking-[0.2em] uppercase shadow-md active:scale-[0.99] transition-transform"
              >
                {dict.nav.bookAppointment}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop outside header so tapping below the menu closes it */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden transition-opacity"
        />
      )}
    </>
  );
}
