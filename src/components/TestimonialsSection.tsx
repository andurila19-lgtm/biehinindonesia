"use client";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-surface py-space-3xl relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center space-y-space-lg">
          <span className="material-symbols-outlined text-4xl text-secondary opacity-60">format_quote</span>
          <blockquote className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface italic font-normal leading-relaxed">
            &ldquo;Every detail matters when the suit is made for you. In an era of instant disposable luxury, Bie Hin remains a true temple of Indonesian and European tailoring honor.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center justify-center space-y-1 pt-space-xs">
            <span className="font-title-editorial text-lg text-secondary">Ir. H. Hartono Soedirdjo</span>
            <span className="font-label-uppercase text-label-uppercase text-on-surface-variant tracking-[0.2em]">
              Bespoke Patron since 1978 • 14 Garments
            </span>
          </div>

          {/* 3 Patron Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop pt-space-xl text-left">
            <div className="p-space-md bg-surface-container-low border border-secondary/15 space-y-2">
              <div className="flex text-secondary text-sm">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                &ldquo;My wedding tuxedo moved like second skin. Even during the reception hours, the chest canvas never shifted.&rdquo;
              </p>
              <span className="font-label-numeric text-[11px] text-secondary block pt-2">
                ADITYA W. • WEDDING BESPOKE
              </span>
            </div>

            <div className="p-space-md bg-surface-container-low border border-secondary/15 space-y-2">
              <div className="flex text-secondary text-sm">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                &ldquo;The only maison in Indonesia that truly understands shoulder pitch. My father wore Bie Hin, and now my sons do.&rdquo;
              </p>
              <span className="font-label-numeric text-[11px] text-secondary block pt-2">
                DR. TAN T.H. • SURABAYA
              </span>
            </div>

            <div className="p-space-md bg-surface-container-low border border-secondary/15 space-y-2">
              <div className="flex text-secondary text-sm">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                &ldquo;The Scabal Glen Plaid suit they delivered exceeds suits I previously purchased on Savile Row and Milan.&rdquo;
              </p>
              <span className="font-label-numeric text-[11px] text-secondary block pt-2">
                RAYMOND K. • PRIVATE ATELIER JAKARTA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
