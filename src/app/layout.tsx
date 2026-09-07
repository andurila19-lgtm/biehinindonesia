import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bie Hin Tailor | Bespoke Custom Tailor Since 1930",
  description:
    "Bie Hin Tailor — Bespoke Custom Tailor established in 1930. Luxury menswear, handmade suits, wedding tuxedos, and master craftsmanship across Surabaya, Jakarta, and Semarang.",
  keywords: [
    "Bie Hin Tailor",
    "Bespoke Tailor Surabaya",
    "Custom Suit Jakarta",
    "Tailor Semarang",
    "Wedding Tuxedo Indonesia",
    "Bespoke Menswear Indonesia",
  ],
  authors: [{ name: "Bie Hin Tailor" }],
  openGraph: {
    title: "Bie Hin Tailor — Bespoke Custom Tailor Since 1930",
    description:
      "Embrace Your Style with Bie Hin Tailor. Distinguished bespoke tailoring excellence established in 1930 across Surabaya, Jakarta, and Semarang.",
    url: "https://biehintailor.com",
    siteName: "Bie Hin Tailor",
    images: [
      {
        url: "/images/hero-gentleman.png",
        width: 1200,
        height: 630,
        alt: "Bie Hin Tailor Showroom",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Bie Hin Tailor",
  image: "/images/bie-hin-logo.png",
  description:
    "Bespoke Custom Tailor established in 1930 in Surabaya, Jakarta, and Semarang.",
  foundingDate: "1930",
  telephone: "+62-811-300-1930",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var r of registrations) { r.unregister(); }
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#081d23] font-sans text-[#e4e8eb] antialiased selection:bg-[#c5a880]/30 selection:text-[#fedeb2]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
