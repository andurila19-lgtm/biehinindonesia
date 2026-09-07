"use client";

import Image from "next/image";

export default function BrandSignatureSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-2xl border-t border-secondary/20">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex flex-col items-center justify-center text-center space-y-space-md">
        {/* Signature Brand Crest Image from Provided Asset */}
        <div className="w-28 h-28 relative rounded-full overflow-hidden border border-secondary/40 shadow-2xl p-2 bg-primary-container">
          <Image
            alt="Bie Hin Est 1930 gold scripted signature brand crest on dark teal textured suede"
            src="/images/bie-hin-logo.png"
            fill
            sizes="112px"
            className="object-cover rounded-full p-1"
          />
        </div>

        <div className="space-y-1">
          <span className="font-title-editorial text-2xl text-secondary italic tracking-wider block">
            Bie Hin Tailor
          </span>
          <span className="font-label-uppercase text-label-uppercase text-on-surface-variant tracking-[0.3em] block">
            SURABAYA • JAKARTA • SEMARANG • EST. 1930
          </span>
        </div>

        <div className="w-24 h-px bg-secondary/30 my-2" />

        <p className="font-title-editorial text-sm italic text-on-surface-variant max-w-md">
          &ldquo;Crafting confidence, one suit at a time. Since 1930.&rdquo;
        </p>
      </div>
    </section>
  );
}
