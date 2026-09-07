import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Digital Proposal | Bie Hin Tailor x Reaksy",
  description:
    "Executive Digital Renaissance Proposal & Modern Sartorial Web Experience for Bie Hin Tailor (Est. 1930). Prepared by Reaksy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#061d24] text-[#e0e3e4] font-sans antialiased selection:bg-[#dfb76c]/20 selection:text-[#faedd1]">
      {children}
    </div>
  );
}
