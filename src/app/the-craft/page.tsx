"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calendar, ChevronRight, Tag } from "lucide-react";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "WHEN TO WEAR A DOUBLE BREASTED SUIT",
    category: "Style Guide",
    date: "SEPTEMBER 4, 2026",
    author: "BIE HIN ATELIER",
    excerpt:
      "A classic double-breasted 6x2 button stance delivers unmatched architectural authority in boardrooms and diplomatic gatherings. Discover how to balance lapel width and posture drape.",
    image: "/images/products/suit-midnight.jpg",
  },
  {
    id: 2,
    title: "CLASSICAL STRUCTURE VS SOFT TAILORING: HOW TO DECIDE",
    category: "Bespoke Anatomy",
    date: "AUGUST 28, 2026",
    author: "BIE HIN ATELIER",
    excerpt:
      "From clean structured roped shoulders to softer natural shoulder constructions, understand which silhouette best complements your natural posture.",
    image: "/images/products/suit-chalkstripe.jpg",
  },
  {
    id: 3,
    title: "THE ANATOMY OF FLOATING HORSEHAIR CANVAS",
    category: "Craftsmanship",
    date: "AUGUST 15, 2026",
    author: "BIE HIN ATELIER",
    excerpt:
      "Why quality tailoring relies on free-floating layers of natural canvas that breathe and mold to your chest silhouette over time.",
    image: "/images/tailor-craft.png",
  },
  {
    id: 4,
    title: "CUSTOM SHIRTS: HOW TO MASTER THE COLLAR SPREAD",
    category: "Style Guide",
    date: "JULY 30, 2026",
    author: "BIE HIN ATELIER",
    excerpt:
      "The collar is the frame for a gentleman's face. How to choose between cutaway, semi-spread, and point collars based on your facial structure and tie preference.",
    image: "/images/products/suit-glenplaid.jpg",
  },
  {
    id: 5,
    title: "TIPS ON PROPER SUIT BUTTONING AND GARMENT PRESERVATION",
    category: "Garment Care",
    date: "JULY 14, 2026",
    author: "BIE HIN ATELIER",
    excerpt:
      "The traditional rule of 'Sometimes, Always, Never' explained. Learn how proper wooden hanger geometry and seasonal wool care protect your bespoke suit.",
    image: "/images/products/suit-tuxedo.jpg",
  },
];

const categories = [
  { name: "Bespoke Anatomy", count: 12 },
  { name: "Style Guides", count: 8 },
  { name: "Fabric Mills & Woolens", count: 15 },
  { name: "Wedding & Ceremonial", count: 6 },
  { name: "Heritage & History", count: 9 },
];

const tags = [
  "Savile Row",
  "Dormeuil",
  "Full Canvas",
  "Horsehair",
  "Double Breasted",
  "Wedding Tuxedo",
  "Silk Batik",
  "Horn Buttons",
  "Loro Piana",
];

export default function TheCraftPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1e2427]">
      <Navbar />

      <main className="w-full">
        {/* Header Hero (Peter Mason Screenshot 3) */}
        <section className="relative w-full pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#092831] text-[#fbf9f4] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/tailor-craft.png"
              alt="Craftsmanship"
              fill
              sizes="100vw"
              className="object-cover object-center filter grayscale"
            />
            <div className="absolute inset-0 bg-[#0c3b45]/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-xs tracking-[0.28em] text-[#dfb76c] uppercase font-sans">
              <span className="w-8 h-px bg-[#dfb76c]" />
              <span>The Sartorial Journal</span>
              <span className="w-8 h-px bg-[#dfb76c]" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fbf9f4] font-normal uppercase tracking-wider">
              THE CRAFT &amp; JOURNAL
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#e0e3e4]/85 font-light leading-relaxed max-w-xl mx-auto">
              Essays on menswear proportion, fabric provenance, classical etiquette, and nine decades of Indonesian bespoke heritage.
            </p>
          </div>
        </section>

        {/* Two-Column Blog Grid (Exact Peter Mason Screenshot 3 Architecture) */}
        <section className="py-20 md:py-28 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Article Feed (8 cols) */}
            <div className="lg:col-span-8 space-y-16">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="space-y-6 pb-14 border-b border-[#e5dccc] last:border-b-0"
                >
                  {/* Article Featured Photo */}
                  <div className="relative h-[340px] sm:h-[440px] w-full shadow-md border-4 border-white bg-white overflow-hidden group">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs font-sans text-[#9c7736] tracking-widest uppercase font-medium">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>BY {article.author}</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#092831] uppercase tracking-wide font-normal hover:text-[#dfb76c] transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-sm sm:text-[15px] text-[#4e5659] leading-relaxed font-light">
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div>
                    <Link
                      href="/contact#book-appointment"
                      className="inline-block px-7 py-3 bg-[#dfb76c] hover:bg-[#edd79c] text-[#061d24] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Column: Sidebar (4 cols - Exact Peter Mason Screenshot 3) */}
            <aside className="lg:col-span-4 space-y-10">
              
              {/* Widget 1: Search Box */}
              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-3">
                <h3 className="font-serif text-base uppercase text-[#092831] tracking-wider">
                  SEARCH JOURNAL
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#fcfbf7] border border-[#e5dccc] px-4 py-2.5 text-xs text-[#092831] focus:outline-none focus:border-[#dfb76c]"
                  />
                  <Search className="w-4 h-4 text-[#9c7736] absolute right-3 top-3" />
                </div>
              </div>

              {/* Widget 2: Categories */}
              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-4">
                <h3 className="font-serif text-base uppercase text-[#092831] tracking-wider border-b border-[#e5dccc] pb-2">
                  CATEGORIES
                </h3>
                <ul className="space-y-2.5 font-sans text-xs text-[#4e5659]">
                  {categories.map((cat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between hover:text-[#092831] cursor-pointer py-1"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[#9c7736]">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Widget 3: Recent Commissions Highlight */}
              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-4">
                <h3 className="font-serif text-base uppercase text-[#092831] tracking-wider border-b border-[#e5dccc] pb-2">
                  RECENT HIGHLIGHTS
                </h3>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((a) => (
                    <div key={a.id} className="flex gap-3 items-center group cursor-pointer">
                      <div className="w-16 h-16 relative shrink-0 overflow-hidden border border-[#e5dccc]">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="font-sans text-[10px] text-[#9c7736] tracking-wider block">
                          {a.date}
                        </span>
                        <h4 className="font-serif text-xs text-[#092831] font-normal leading-snug group-hover:text-[#dfb76c] transition-colors line-clamp-2">
                          {a.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 4: Tags Cloud */}
              <div className="bg-white p-6 border border-[#e5dccc] shadow-sm space-y-4">
                <h3 className="font-serif text-base uppercase text-[#092831] tracking-wider border-b border-[#e5dccc] pb-2">
                  SARTORIAL TAGS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#fcfbf7] border border-[#e5dccc] text-[11px] font-sans text-[#4e5659] hover:border-[#dfb76c] hover:text-[#092831] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
