"use client";

import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full bg-primary-container text-on-surface py-space-3xl md:py-space-4xl relative border-t border-secondary/20" id="services">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div className="space-y-space-xs max-w-xl">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-numeric text-label-numeric text-secondary">CHAPTER 02</span>
              <span className="w-6 h-px bg-secondary/40" />
              <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em]">
                Sartorial Disciplines
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The Art of Bespoke</h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
              Individually patterned from scratch. Hand-cut and sculpted over multiple private fittings in our master atelier salons.
            </p>
          </div>
          <div className="font-label-uppercase text-[11px] text-secondary tracking-[0.2em] border border-secondary/30 px-4 py-2 bg-surface-container-lowest/60">
            World-Class English &amp; Italian Cloth
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {/* Card 1: Custom Suit */}
          <div className="group bg-surface-container-low border border-secondary/15 hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between">
            <div className="relative overflow-hidden h-72">
              <img
                className="w-full h-full object-cover"
                alt="Bespoke charcoal pinstripe three piece suit on tailored mannequin in vintage wooden haberdashery"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE333A2UfNoFgYtiLFjASBujzAXX28rhXpaPEtM8LcEXbiC06C9MC0o5Pa8wD4ji3lCh9QE2xspSk-tMWCkLivKDdYOGsy9WaCurD4MSo7aS8GTJ_wePtzj380ZXJ-AB7xZm7Xqa2Z3IAAvmik6bt_hAaUwUof2KPEWQAIJ4rqMvzxSemuX_0kylqztt-DNtfP99i4uIIeTAuaUVpOt3YdhAoUa2NKQ5oIVKBJjMpllW_IuzlBPGDcBQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-sm text-secondary font-label-numeric text-label-numeric px-2 py-0.5 border border-secondary/30">
                DISCIPLINE 01
              </span>
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                  The Bespoke Lounge Suit
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tailored precisely to your anatomy, stance, and personality. Created with a floating full canvas and zero adhesive corners.
                </p>
              </div>
              <div className="pt-space-sm border-t border-secondary/15">
                <span className="font-label-uppercase text-[10px] text-secondary/80 block mb-1">Recommended Cloth</span>
                <span className="font-body-sm text-xs text-on-surface-variant">Loro Piana Australis • Scabal Golden Carat</span>
              </div>
            </div>
          </div>

          {/* Card 2: Wedding Suit */}
          <div className="group bg-surface-container-low border border-secondary/15 hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between">
            <div className="relative overflow-hidden h-72">
              <img
                className="w-full h-full object-cover"
                alt="Refined groom in midnight blue bespoke tuxedo with silk satin shawl lapel"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKUQcxXPZotXlmt-U3VphVBpnyjPoEj4fBiMJI4FxDE05XKyjS9oOQNAZjWc97JtKCgyn7jwfV12a9evBxGJBk1nOnfr74VStbFUEUkwoyhxUKbGq7T1ZeqoGIyY6oYxS5a08__EKq9DEPTPgikrGJ4SkP-E0K85FhD6yhLrXL26tq78ZTIh9K6QkqPonmhRuIXxP7l7Hbhn_Kemo7j1fR2r3EVllK8RpFTJUR7RkkQqF-nSA0VCCkQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-sm text-secondary font-label-numeric text-label-numeric px-2 py-0.5 border border-secondary/30">
                DISCIPLINE 02
              </span>
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                  Nuptial &amp; Wedding
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Sculpted for life's most unforgettable covenant. Majestic silhouettes balanced with featherlight comfort for long celebrations.
                </p>
              </div>
              <div className="pt-space-sm border-t border-secondary/15">
                <span className="font-label-uppercase text-[10px] text-secondary/80 block mb-1">Recommended Cloth</span>
                <span className="font-body-sm text-xs text-on-surface-variant">Dormeuil Ceremonial • Holland &amp; Sherry Silk Blends</span>
              </div>
            </div>
          </div>

          {/* Card 3: Formal Wear & Tuxedos */}
          <div className="group bg-surface-container-low border border-secondary/15 hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between">
            <div className="relative overflow-hidden h-72">
              <img
                className="w-full h-full object-cover"
                alt="High contrast black tie dinner jacket black barathea wool with grosgrain peak lapels"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF7Fi1OryXcZjZPknfEr01_f2PHInXhSY3eYZFDrSK2yGYbcL-ZsIw_kyYKL9pDJGq1ykzmBSbEVjMLmybcRsu-l-WjMIpLyVtu0Ni4qp1fZBnc9Esbimf4zUyj3pKUTV3o2grqO0hUqkN7G8ijr3Cldw9shBVMs8p3SsUWvfsK_7Rbc4XGSqxGvo0HaI7UzvpHe9-I4csgNpkUjMH9uzKhpDq9BCwTPsUsZiGusTaF2CFfgbUi7ZNuA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-sm text-secondary font-label-numeric text-label-numeric px-2 py-0.5 border border-secondary/30">
                DISCIPLINE 03
              </span>
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                  Evening Black Tie
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Deep barathea wools, grosgrain silk lapels, and hand-embroidered monogramming for State galas, opera evenings, and high dinners.
                </p>
              </div>
              <div className="pt-space-sm border-t border-secondary/15">
                <span className="font-label-uppercase text-[10px] text-secondary/80 block mb-1">Recommended Cloth</span>
                <span className="font-body-sm text-xs text-on-surface-variant">Ermenegildo Zegna Trofeo • Fox Brothers Flannel</span>
              </div>
            </div>
          </div>

          {/* Card 4: Corporate & Executive */}
          <div className="group bg-surface-container-low border border-secondary/15 hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between">
            <div className="relative overflow-hidden h-72">
              <img
                className="w-full h-full object-cover"
                alt="Sharp navy blue executive double breasted wool suit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE29pmatKMPdSj97Vtefq21V216SG02C5GdHmODutYhdbpozLp5afjFb3cEvlsHMRgCTWHI3RpGQXZfDarOPc1FCf7vJdmdRQcYu8uVD_0rRAOqbbjZBGdhieH6z2u0iVix0XrEV3pJKtxe7Y5zjxyGHdQmuiA1zl9wSOELeDLRxEfQWM7tlKsl4_AdtD27GrqqxiP0pJavw8w6W2ZeUvZJeVgiz9uv_dc1QzxkFYBg58ekM3iciC92w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-sm text-secondary font-label-numeric text-label-numeric px-2 py-0.5 border border-secondary/30">
                DISCIPLINE 04
              </span>
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                  Executive &amp; Heritage Batik
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Commanding presence for the boardroom, alongside our proprietary bespoke hand-drawn silk batik evening jackets.
                </p>
              </div>
              <div className="pt-space-sm border-t border-secondary/15">
                <span className="font-label-uppercase text-[10px] text-secondary/80 block mb-1">Recommended Cloth</span>
                <span className="font-body-sm text-xs text-on-surface-variant">Archival Solo Batik Silk • Caccioppoli Tropical High Twist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cloth Mills Emblem Ribbon */}
        <div className="mt-space-2xl pt-space-lg border-t border-secondary/15 flex flex-wrap items-center justify-between gap-space-md text-on-surface-variant/70 font-label-uppercase text-label-uppercase">
          <span className="text-secondary">Official Cloth Stockists:</span>
          <span>Loro Piana • Italy</span>
          <span>Ermenegildo Zegna • Trivero</span>
          <span>Scabal • Savile Row</span>
          <span>Dormeuil • Paris/England</span>
          <span>Holland &amp; Sherry • Peebles</span>
        </div>
      </div>
    </section>
  );
}
