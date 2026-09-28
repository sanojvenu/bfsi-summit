"use client";

import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  CreditCard,
  Users,
  FileText,
  Cloud,
  Umbrella,
  Trophy,
  ArrowRight,
} from "lucide-react";

export function AwardsSection() {
  const categories = [
    { label: "AI Innovation", icon: Sparkles },
    { label: "Cybersecurity Excellence", icon: ShieldCheck },
    { label: "Digital Payments", icon: CreditCard },
    { label: "Financial Inclusion", icon: Users },
    { label: "RegTech", icon: FileText },
    { label: "Cloud Transformation", icon: Cloud },
    { label: "InsurTech", icon: Umbrella },
    { label: "CXO of the Year", icon: Trophy },
  ];

  return (
    <section
      id="awards"
      className="bg-[#050608] py-16 lg:py-20 text-white relative overflow-hidden border-t border-slate-900 scroll-mt-24"
      aria-label="BFSI Innovation Awards 2027"
    >
      <div className="container relative z-10">
        {/* Top Banner Row: Trophy left, Text center, Nominations card right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800/80">
          
          {/* Left: Golden Trophy */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.18)] border border-amber-500/20">
              <Image
                src="/trophy.jpg"
                alt="BFSI Innovation Awards Golden Trophy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Center: Title & Description */}
          <div className="md:col-span-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              BFSI INNOVATION AWARDS 2027
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              Recognising the people and organisations redefining financial services.
            </p>
          </div>

          {/* Right: Nominations Box */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <div className="w-full max-w-[240px] rounded-xl p-4 bg-slate-950/90 border border-slate-800 text-center md:text-right">
              <span className="text-xs font-semibold text-amber-400 block">
                Nominations Open
              </span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5 mb-3">
                1 November 2026
              </span>
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 border border-amber-500/40 hover:border-amber-400 rounded-lg px-3 py-1.5 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: 8 Golden Category Icons matching reference */}
        <div className="pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all">
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300 group-hover:text-amber-300 transition-colors leading-tight">
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
