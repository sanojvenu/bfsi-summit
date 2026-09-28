"use client";

import { Users, Mic, Layers, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animations";

export function StatStrip() {
  const stats = [
    {
      icon: Users,
      value: 300,
      suffix: "+",
      label: "BFSI Leaders",
    },
    {
      icon: Mic,
      value: 40,
      suffix: "+",
      label: "Speakers",
    },
    {
      icon: Layers,
      value: 6,
      suffix: "",
      label: "Strategic Tracks",
    },
    {
      icon: Star,
      customValue: "1 Day",
      label: "High-Impact Discussions",
    },
  ];

  return (
    <section
      id="stats"
      className="bg-white pt-8 pb-10 sm:pt-10 sm:pb-14 border-y border-slate-200/90 relative z-20 text-slate-900"
      aria-label="Summit statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 sm:gap-4 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:bg-cyan-100/80 transition-colors">
                  <Icon size={22} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-none tracking-tight">
                    {stat.customValue ? (
                      stat.customValue
                    ) : (
                      <>
                        <AnimatedCounter value={stat.value!} duration={1.6} />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
