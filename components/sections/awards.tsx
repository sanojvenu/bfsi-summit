"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { awardCategories, pastWinners } from "@/data/awards";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import {
  Brain, Shield, CreditCard, Users, FileCheck, Cloud, Zap, Trophy,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Brain, Shield, CreditCard, Users, FileCheck, Cloud, Zap, Trophy,
};

export function AwardsSection() {
  const [activeWinner, setActiveWinner] = useState(0);
  const total = pastWinners.length;

  const prev = () => setActiveWinner((a) => (a - 1 + total) % total);
  const next = () => setActiveWinner((a) => (a + 1) % total);

  const winner = pastWinners[activeWinner];
  const category = awardCategories.find((c) => c.id === winner.categoryId);

  return (
    <section
      id="awards"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-mid)" }}
      aria-labelledby="awards-heading"
    >
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" aria-hidden="true" />

      <div className="container">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Recognising Excellence</div>
          <h2 id="awards-heading" className="section-title text-center">
            BFSI Innovation{" "}
            <span className="gold-gradient">Awards 2027</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Eight categories recognising outstanding achievement in digital transformation, cybersecurity, financial inclusion, and technological innovation across India's BFSI sector.
          </p>
        </FadeIn>

        {/* Award categories grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {awardCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Trophy;
            return (
              <StaggerItem key={cat.id}>
                <div className="card-surface gradient-strip-top rounded-xl p-5 h-full group hover:border-[var(--cyan-400)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,242,254,0.08)] flex items-center justify-center mb-4 group-hover:bg-[rgba(0,242,254,0.18)] transition-colors">
                    <Icon size={20} className="text-[var(--cyan-400)]" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 leading-tight group-hover:text-[var(--cyan-300)] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Past winners — 2-column list + detail */}
        <FadeIn>
          <div className="mb-8 text-center">
            <div className="section-label justify-center">Past Winners · 2025</div>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              Award-Winning <span className="brand-gradient">Initiatives</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Left: winner selector list */}
            <div className="lg:col-span-2 flex flex-col gap-2">
              {pastWinners.map((w, i) => {
                const cat = awardCategories.find((c) => c.id === w.categoryId);
                const CatIcon = cat ? (iconMap[cat.icon] ?? Trophy) : Trophy;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveWinner(i)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-250 w-full",
                      i === activeWinner
                        ? "border-[var(--cyan-400)] bg-[rgba(0,242,254,0.08)] shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                        : "border-[var(--border-subtle)] hover:border-[var(--border-default)]"
                    )}
                    aria-pressed={i === activeWinner}
                    id={`award-winner-tab-${i}`}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                      i === activeWinner ? "bg-[rgba(0,242,254,0.18)]" : "bg-[rgba(255,255,255,0.04)]"
                    )}>
                      <CatIcon size={15} className={i === activeWinner ? "text-[var(--cyan-400)]" : "text-[var(--text-muted)]"} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={cn("text-xs font-bold leading-tight truncate", i === activeWinner ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]")}>{w.organization}</p>
                      <p className="text-[10px] text-[var(--text-muted)] leading-tight truncate mt-0.5">{cat?.title}</p>
                    </div>
                    {i === activeWinner && (
                      <ChevronRight size={14} className="text-[var(--cyan-400)] flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: animated detail panel */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={winner.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="card-surface gradient-strip-top rounded-2xl p-6 sm:p-8 h-full"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,242,254,0.08)] border border-[rgba(0,229,255,0.2)] mb-5">
                    {category && (() => {
                      const Icon = iconMap[category.icon] ?? Trophy;
                      return <Icon size={13} className="text-[var(--cyan-400)]" />;
                    })()}
                    <span className="text-xs font-semibold text-[var(--cyan-400)] tracking-wide">{category?.title}</span>
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {winner.organization}
                  </h4>
                  <p className="text-sm font-medium text-[var(--cyan-300)] mb-4 italic">{winner.projectTitle}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{winner.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--cyan-400)] px-3 py-1.5 rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,242,254,0.05)]">
                    🏆 Winner {winner.year}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* Nomination CTA */}
        <FadeIn className="text-center mt-12">
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Nominations for the BFSI Innovation Awards 2027 open on 1 November 2026.
          </p>
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
            id="awards-nominate-cta"
          >
            <Trophy size={15} />
            <span>Nominate an Organisation</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
