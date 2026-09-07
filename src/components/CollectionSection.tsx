"use client";

import Link from "next/link";

export default function CollectionSection() {
  return (
    <section className="w-full bg-surface py-space-3xl md:py-space-4xl relative" id="collection">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-space-2xl space-y-space-xs">
          <div className="inline-flex items-center gap-space-sm justify-center">
            <span className="w-4 h-px bg-secondary" />
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em]">
              Sartorial Archive
            </span>
            <span className="w-4 h-px bg-secondary" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">The Collection</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            An exploration of classic architectural cuts, natural drape, and timeless silhouette balances.
          </p>
        </div>

        {/* Curated Lookbook Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          {/* Feature 1: Large Vertical Look (7 cols) */}
          <div className="md:col-span-7 relative group overflow-hidden bg-surface-container border border-secondary/20">
            <div className="h-[640px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLclEt5SmYQ517tVqUoULiFuJfrQ19klOZnGNCwiV8kKWPnzAARBU4teRky1MdibrzjUuWk1MIvfYLav1ccfxN6dCyLzJH0iYKLiXBJtSKI28bqR-DTjxcnSBKSuqy2c6Z6Y7xlMHmP0eqgk2RyHjRIfsd1jDqdg7pIRzANCKAXSnHlW_dq2dO6PpYqxfhfZ9mNRw7tM8G2MG1odE8iehpy7W8z2XqcYjRJ5TNwMMnoHnGcFXWyIy1VA"
                alt="Full length portrait of an aristocratic gentleman wearing a bespoke double breasted navy blue chalkstripe suit"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-space-lg flex items-end justify-between">
              <div className="space-y-1">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">
                  Lookbook 01 • Bespoke Classic
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  The Double-Breasted Midnight Wool
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Cut from Dormeuil 310g British wool, featuring 11cm peak lapels and hand-sewn buttonholes.
                </p>
              </div>
              <span className="font-title-editorial text-secondary text-lg italic hidden sm:block">
                No. 1930/08
              </span>
            </div>
          </div>

          {/* Feature 2 & 3: Stacked Editorial Looks (5 cols) */}
          <div className="md:col-span-5 space-y-gutter-desktop">
            {/* Look 02 */}
            <div className="relative group overflow-hidden bg-surface-container border border-secondary/20">
              <div className="h-[300px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnZWVd4vSlLWTkMTDwo0OTn7igiX7hEUmcWdq-5u88-SLQxKyeChSdMewxFNlcyKHwsK4kspb0fqi6MEXmVy687jTyV5WsI6d6dbisVKY_Lz3amE10i_dz5PHHh134gjmsUu8vmVrTeq1xmplffCIlFiUBRbxkTmTeZNWEPA0g7mecEft4v6pVXIuFEC0OWrzZ6fkswr9gBhTXwz5AIp8UDWraIYrzSJ4QY6Wun1HNMHqs3V2llat7-w"
                  alt="Close up bespoke Glen Plaid three piece tweed wool suit jacket with vest"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">
                  Lookbook 02 • Country &amp; Heritage
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  The Heritage Glen Plaid 3-Piece
                </h4>
                <span className="font-body-sm text-xs text-on-surface-variant block mt-1">
                  Super 150s Loro Piana Wool with Hand-Carved Water Buffalo Horn Buttons
                </span>
              </div>
            </div>

            {/* Look 03 */}
            <div className="relative group overflow-hidden bg-surface-container border border-secondary/20">
              <div className="h-[300px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0HqAq28O8UFO8XoA2os1Kgcm5RiZ0nkpkfzgXrQhc-4wno1123N1VXq_JaYLKR-P3CmV3X_OxkPQUqwH71VScKY2nvNB_IDFW6AmlnyAmcSMtyqrmYVH14BZXeqTQQqb6eKSGEi4UrJ2njMm9mLXko5sBGEKXHe_t0Xux_mt7Wxp4PUvO_D4Hiiw_LEaxxuYJ5ahJ4GVckOXS9IJROv7dgNHrGgA8mdTP5xf8xsm605ALeAydIvebqw"
                  alt="Master tailor fitting an immaculate black tuxedo on a client standing on a wooden podium"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-space-md">
                <span className="font-label-numeric text-label-numeric text-secondary uppercase">
                  Lookbook 03 • Evening Aristocracy
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  The Royal Ascot Charcoal Tuxedo
                </h4>
                <span className="font-body-sm text-xs text-on-surface-variant block mt-1">
                  Grosgrain Silk Accents • Milanese Lapel Loop
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-space-xl flex justify-center">
          <Link
            className="px-space-xl py-space-sm border border-secondary text-secondary font-label-uppercase text-label-uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all duration-300"
            href="#book-consultation"
          >
            Request Lookbook Fabric Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
