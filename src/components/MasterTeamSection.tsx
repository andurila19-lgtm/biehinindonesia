"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "FELIX HANDOKO",
    role: "HEAD MASTER CUTTER",
    image: "/images/team/team-felix.jpg",
  },
  {
    name: "CANDY WIDJAJA",
    role: "SENIOR DRAPING SPECIALIST",
    image: "/images/team/team-candy.jpg",
  },
  {
    name: "REBECCA TAN",
    role: "BESPOKE FINISHING ARTISAN",
    image: "/images/team/team-rebecca.jpg",
  },
];

export default function MasterTeamSection() {
  return (
    <section className="w-full bg-[#ffffff] text-[#1e2427] py-20 md:py-28 border-t border-[#e5dccc]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-16">
          <div className="w-12 h-0.5 bg-[#dfb76c]" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#092831] tracking-[0.14em] font-normal uppercase">
            OUR TEAM
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4e5659] max-w-xl font-light">
            Decades of dedicated sartorial mastery dedicated to drafting, shaping, and hand-stitching your garments.
          </p>
        </div>

        {/* 3 Team Cards (Exact Peter Mason Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
              <div className="relative w-full h-[320px] sm:h-[360px] overflow-hidden shadow-md border-2 border-white bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="pt-2 space-y-1">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#9c7736] uppercase font-semibold block">
                  {member.role}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#092831] tracking-[0.08em] font-normal uppercase">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
