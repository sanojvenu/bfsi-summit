"use client";

import { Brain, ShieldCheck, CreditCard, FileText, Cloud, Umbrella, ArrowRight } from "lucide-react";

export function ThemesSection() {
  const themes = [
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "From copilots to AI-native banking",
      icon: Brain,
      iconColor: "text-cyan-400 bg-cyan-950/80 border-cyan-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Trust in a zero-friction world",
      icon: ShieldCheck,
      iconColor: "text-cyan-400 bg-cyan-950/80 border-cyan-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
    {
      id: "payments",
      title: "Payments",
      description: "The next evolution of digital finance",
      icon: CreditCard,
      iconColor: "text-cyan-400 bg-cyan-950/80 border-cyan-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
    {
      id: "regtech",
      title: "RegTech",
      description: "Compliance without compromise",
      icon: FileText,
      iconColor: "text-fuchsia-400 bg-fuchsia-950/80 border-fuchsia-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
    {
      id: "cloud",
      title: "Cloud & Core",
      description: "Modernising the financial backbone",
      icon: Cloud,
      iconColor: "text-blue-400 bg-blue-950/80 border-blue-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
    {
      id: "insurtech",
      title: "InsurTech",
      description: "Reinventing insurance for the digital era",
      icon: Umbrella,
      iconColor: "text-pink-400 bg-pink-950/80 border-pink-800/80",
      btnBg: "bg-cyan-950/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    },
  ];

  return (
    <section
      id="themes"
      className="bg-[#070d18] py-16 lg:py-20 text-white relative overflow-hidden scroll-mt-24"
      aria-label="Strategic Themes"
    >
      <div className="container">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-2">
              STRATEGIC THEMES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Six themes. Deeper conversations.
            </h2>
          </div>

          <a
            href="#agenda"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore All Themes</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <div
                key={theme.id}
                className="group relative rounded-xl bg-[#0d1627]/90 border border-slate-800/90 hover:border-cyan-500/50 p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,229,255,0.08)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 ${theme.iconColor}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {theme.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {theme.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${theme.btnBg}`}
                >
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
