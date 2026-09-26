"use client";

import { eventStats, sectorStats } from "@/data/stats";
import { AnimatedCounter, FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { TrendingUp, TrendingDown } from "lucide-react";

const allSponsors = [
  "Infosys Finacle", "Microsoft Azure", "TCS BaNCS", "Wipro",
  "Google Cloud", "Salesforce", "Temenos", "Mphasis",
  "IBM India", "Palo Alto Networks", "Razorpay", "PhonePe",
  "NASSCOM", "DSCI", "ET BFSI", "Signzy",
];

export function StatStrip() {
  return (
    <section
      id="stats"
      className="section bg-[var(--surface-mid)] relative overflow-hidden"
      aria-label="Summit statistics"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <div className="container relative z-10">

        {/* Event stats (Rich Executive Dark Cards) */}
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {eventStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 p-4 sm:p-5 rounded-xl flex flex-col gap-1.5 h-full shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span
                  className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 tabular-nums leading-tight"
                  aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""} ${stat.label}`}
                >
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} duration={1.8} />
                  {stat.suffix}
                </span>
                <span className="text-xs font-bold text-slate-100 tracking-wide">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-[11px] text-slate-400 leading-snug font-medium">
                    {stat.description}
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Sector pulse */}
        <FadeIn>
          <div className="section-label justify-center mb-4">
            India BFSI Sector Pulse
          </div>
          <p className="text-center text-[var(--text-muted)] text-[11px] mb-6">
            Real, cited statistics — not invented.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {sectorStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="card-surface-glass rounded-xl p-4 sm:p-5 h-full flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="font-display font-bold text-xl sm:text-2xl text-white leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className={`flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                      stat.trend === "up"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}>
                      {stat.trend === "up"
                        ? <TrendingUp size={9} />
                        : <TrendingDown size={9} />
                      }
                      {stat.trendLabel}
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-[var(--text-primary)]">
                  {stat.label}
                </p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[var(--text-muted)] hover:text-[var(--cyan-400)] transition-colors mt-auto"
                  aria-label={`Source: ${stat.source}`}
                >
                  Source: {stat.source} ↗
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Marquee sponsor strip */}
        <div className="mt-10">
          <p className="text-center text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-4">
            Trusted by leaders from
          </p>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--surface-mid), transparent)" }}
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--surface-mid), transparent)" }}
              aria-hidden="true"
            />

            <div className="flex">
              <div className="marquee-track flex gap-12 items-center whitespace-nowrap">
                {[...allSponsors, ...allSponsors].map((name, i) => (
                  <span
                    key={i}
                    className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--gold-400)] transition-colors cursor-default px-2"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
