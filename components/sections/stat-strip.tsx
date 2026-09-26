"use client";

import { eventStats, sectorStats } from "@/data/stats";
import { AnimatedCounter, FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { TrendingUp, TrendingDown, Award, Users, Mic, Layers } from "lucide-react";

const allSponsors = [
  "Infosys Finacle", "Microsoft Azure", "TCS BaNCS", "Wipro",
  "Google Cloud", "Salesforce", "Temenos", "Mphasis",
  "IBM India", "Palo Alto Networks", "Razorpay", "PhonePe",
  "NASSCOM", "DSCI", "ET BFSI", "Signzy",
];

const statIcons = [Users, Mic, Layers, Award];

export function StatStrip() {
  return (
    <section
      id="stats"
      className="section bg-[var(--surface-mid)] relative overflow-hidden"
      aria-label="Summit statistics"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">

        {/* 4 High-Impact Metric Cards */}
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {eventStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <StaggerItem key={stat.label}>
                <div className="card-surface gradient-strip-top p-6 sm:p-7 rounded-2xl flex flex-col justify-between h-full shadow-xl hover:border-[var(--cyan-400)] transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-[rgba(0,242,254,0.1)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center text-[var(--cyan-400)] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--cyan-400)] bg-[rgba(0,242,254,0.08)] px-2.5 py-0.5 rounded-full border border-[rgba(0,229,255,0.15)]">
                      Key Metric
                    </span>
                  </div>

                  <div>
                    <span
                      className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#E000FF] tabular-nums leading-tight block mb-1"
                      aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""} ${stat.label}`}
                    >
                      {stat.prefix}
                      <AnimatedCounter value={stat.value} duration={1.8} />
                      {stat.suffix}
                    </span>
                    <span className="text-sm font-bold text-[var(--text-primary)] block">
                      {stat.label}
                    </span>
                    {stat.description && (
                      <span className="text-xs text-[var(--text-muted)] leading-relaxed font-normal block mt-1">
                        {stat.description}
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Sector Pulse Section Header */}
        <FadeIn className="text-center mb-8">
          <div className="section-label justify-center">Industry Benchmark</div>
          <h2 className="section-title text-center">
            India BFSI <span className="brand-gradient">Sector Pulse</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Key macroeconomic metrics driving digital transformation and technology investment decisions across India's financial sector.
          </p>
        </FadeIn>

        {/* Sector Stats Cards Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {sectorStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="card-surface-glass rounded-xl p-5 h-full flex flex-col justify-between border border-[rgba(0,229,255,0.15)] hover:border-[var(--cyan-400)] transition-all">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                      className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </span>
                    {stat.trend && (
                      <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        stat.trend === "up"
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/15 text-red-300 border border-red-500/30"
                      }`}>
                        {stat.trend === "up"
                          ? <TrendingUp size={11} />
                          : <TrendingDown size={11} />
                        }
                        {stat.trendLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[var(--text-primary)] leading-snug mb-3">
                    {stat.label}
                  </p>
                </div>

                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[var(--cyan-400)] hover:underline flex items-center gap-1 mt-auto"
                  aria-label={`Source: ${stat.source}`}
                >
                  Source: {stat.source} ↗
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Marquee Sponsor Logo Ticker */}
        <div className="pt-6 border-t border-[rgba(0,229,255,0.12)]">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--cyan-400)] mb-6">
            Participating Organisations & Technology Partners
          </p>
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--surface-mid), transparent)" }}
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--surface-mid), transparent)" }}
              aria-hidden="true"
            />

            <div className="flex">
              <div className="marquee-track flex gap-10 items-center whitespace-nowrap">
                {[...allSponsors, ...allSponsors].map((name, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-[var(--text-secondary)] hover:text-white transition-colors cursor-default px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(0,229,255,0.1)]"
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
