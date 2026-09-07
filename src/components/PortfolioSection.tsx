"use client";

export default function PortfolioSection() {
  return (
    <section className="w-full bg-surface-container py-space-3xl md:py-space-4xl border-y border-secondary/20" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-numeric text-label-numeric text-secondary uppercase">
              COMMISSIONS ARCHIVE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Crafted for Moments That Matter</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A glimpse into bespoke commissions created for weddings, state affairs, and private client milestones.
          </p>
        </div>

        {/* Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {/* Column 1 */}
          <div className="space-y-gutter-desktop">
            <div className="group relative overflow-hidden bg-surface-container-lowest border border-secondary/15">
              <img
                className="w-full h-96 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_LgdJ0xzKAQVrZ3yBnxBaOB6IwlhqWgmLT0VEMitYroyoBt9hK7FcJFhurSDxlsOApc7jdCUhj-lsoSTGWXhe7J1VB4zYaLUJfAG7t-P_WBfKgbb9jVVLKjL_wwcdT5qIcLFNEEU-XvSox-gClbBpKb3qjbq72geZUIWdvJtGnXN1btdphXUepuK18pdFIdA6aJ7IH5u9i0EIZx79Z5rPvRdUCSJEoM6la1dmr9x_UNdmjSOv0Nk5kw"
                alt="High society groom wearing ivory off-white bespoke dinner jacket with black silk lapels"
              />
              <div className="p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">Surabaya Nuptials</span>
                <h4 className="font-title-editorial text-title-editorial text-on-surface mt-1">The Ivory Barathea Dinner Jacket</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">Commissioned for an aristocratic estate reception.</p>
              </div>
            </div>

            <div className="p-space-lg bg-primary-container/60 border border-secondary/20 flex flex-col justify-between space-y-space-sm">
              <span className="font-label-uppercase text-[10px] text-secondary tracking-[0.2em]">CRAFT SPECIFICATION</span>
              <p className="font-title-editorial text-sm italic text-on-surface">
                &ldquo;The sleeve pitched 2 degrees forward accommodates natural arm flexion, eradicating horizontal ripples.&rdquo;
              </p>
              <span className="font-sans text-xs text-[#8e9ca8]">Kepala Pemotong Pola Bie Hin</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-gutter-desktop">
            <div className="p-space-lg bg-surface-container-low border border-secondary/20 space-y-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="font-title-editorial text-3xl text-secondary">3,400+</span>
                <div className="w-px h-8 bg-secondary/30" />
                <span className="font-body-sm text-xs text-on-surface-variant">Hand stitches per jacket lapel and collar padding</span>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-surface-container-lowest border border-secondary/15">
              <img
                className="w-full h-[460px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNd3HA4wJd9EM1VOv8cjlQvfMDi2jnNzbpKjdJLQVrxt3gph5M-X_fW44Curx-6KjlQW0b1lEP8HjpPtyGg7dazuaV3E1R1cirzxwYs7aSLgVfjU_fCn8dkB94OZ3xJnOj48FhhHs5y2y6wuJCYP5Q3k9u04TbY426emvGs0hs9oJ5qlbEsbJeO55oO4JPgejQDr4t-JhEjIPTAwWmbBvZD41NUAtWy-saF06G9Yg7Ok8TG917jttTBg"
                alt="Close up detailed macro shot of a master tailor hand stitching a bespoke horn buttonhole"
              />
              <div className="p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">Savile Row Heritage</span>
                <h4 className="font-title-editorial text-title-editorial text-on-surface mt-1">Hand-Cut Buttonholes &amp; Milanese</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">Pure silk twist hand-worked over gimp cord.</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-gutter-desktop">
            <div className="group relative overflow-hidden bg-surface-container-lowest border border-secondary/15">
              <img
                className="w-full h-80 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKsKcHgVzPrWrPRHe_NQhGoznguDE_VP1JWzf6Wb-1_-IljAGW8i3Bge2UCoHxr3Q50EsIRHrUCm-IeRx1IeqpP49X7GtHPgp0nVMx1UZp5k_AwEFDp0cJxR4areOhP8deuR5VPbfwLOvctAMbITfgO-GQfixXCLOgHZoa-LGRO9ey6fagfOuzc51BuBKSfcF_PBIky1fujyTl_yHjUrR3Pw2BKftC23HhVpA9dOYDvOd6ARfEDcWrbA"
                alt="Distinguished corporate leader in charcoal bespoke suit"
              />
              <div className="p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">Executive Leadership</span>
                <h4 className="font-title-editorial text-title-editorial text-on-surface mt-1">Super 160s Power Suiting</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">Constructed for a multinational chairman.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-surface-container-lowest border border-secondary/15">
              <img
                className="w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqHuBSvzHL78-FIpBlDR-wYaxAt4wteEtzA20AP8yiurHsjeRN2V2VJ0qknftLe7eng3oSlevN-zO7ek8dymOdkNQ9ucyZUSPqHQJGzty3a6W0WPQhktFcZYRffsaLXz7upzFdCyChwQTO40_EYgqJyKQRpo8vNf-83oIrj8k2PVM_wSksrAAW5pPAxxQ0U4Xl4oQAponlSgLrJkVR1P9RgjCRwsaJEKQzupkOq9hD4xmwtSbvd9zbuw"
                alt="Bespoke suit trousers drape test with hand polished Oxford leather shoes"
              />
              <div className="p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">Anatomic Precision</span>
                <h4 className="font-title-editorial text-title-editorial text-on-surface mt-1">The Unbroken Trouser Break</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">Custom forward pleats with side adjusters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
