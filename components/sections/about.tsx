"use client";

import { motion } from "framer-motion";
import { summitTracks, whyAttend } from "@/data/stats";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { GridPattern } from "@/components/ui/network-graph";
import {
  Brain, Shield, Smartphone, FileCheck, Cloud, Zap,
  Users, Mic, Globe, Network
} from "lucide-react";
import { SUMMIT } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Brain, Shield, Smartphone, FileCheck, Cloud, Zap, Users, Mic, Globe, Network,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
        <GridPattern />
      </div>

      <div className="container relative z-10">

        {/* About overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">
          <FadeIn>
            <div className="section-label">About the Summit</div>
            <h2 id="about-heading" className="section-title">
              India's Premier BFSI
              <br />
              <span className="gold-gradient">Technology Leadership Forum</span>
            </h2>
            <p className="section-subtitle mb-6">
              The {SUMMIT.name} is India's highest-density annual gathering of technology, digital transformation, cybersecurity, and innovation leaders from across banking, insurance, capital markets, and fintech.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              Now in its {SUMMIT.edition}, the Summit convenes over 150 senior decision-makers for a single curated day of practitioner-led keynotes, executive panels, and intimate roundtables — all rooted in the regulatory, economic, and infrastructure realities of India's rapidly evolving financial sector.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Unlike large-format conferences driven by vendor showcases, every speaker at the BFSI Tech Innovation Summit is a practitioner — an operator who has navigated India's unique BFSI landscape and can share authentic insights, real failure stories, and proven playbooks.
            </p>
          </FadeIn>

          {/* "Who Should Attend" */}
          <FadeIn delay={0.15}>
            <div className="card-surface rounded-2xl p-8">
              <h3 className="font-semibold text-[var(--text-primary)] text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--gold-500)]" />
                Who Should Attend
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { role: "CIOs & CTOs", description: "Building next-gen banking and insurance infrastructure" },
                  { role: "CISOs", description: "Leading cybersecurity, fraud prevention, and operational resilience" },
                  { role: "Chief Digital Officers", description: "Driving customer-facing digital transformation" },
                  { role: "Heads of AI & Analytics", description: "Operationalising ML and data strategy at scale" },
                  { role: "Chief Compliance Officers", description: "Navigating RegTech, DPDPA, and RBI guidelines" },
                  { role: "Innovation & Fintech Leads", description: "Shaping embedded finance, open banking, and InsurTech" },
                  { role: "VPs of Product & Engineering", description: "From India's leading banks, NBFCs, and insurers" },
                ].map((item) => (
                  <li key={item.role} className="flex gap-3 items-start bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-subtle)] rounded-lg px-3 py-2.5 transition-colors">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{item.role}</p>
                      <p className="text-xs text-[var(--text-muted)] leading-snug mt-0.5">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Why Attend */}
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Why Attend</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Engineered for{" "}
            <span className="gold-gradient">Senior Decision-Makers</span>
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {whyAttend.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Brain;
            return (
              <StaggerItem key={item.title}>
                <div className="card-surface-glass rounded-xl p-6 h-full group hover:border-[var(--gold-500)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,165,75,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(212,165,75,0.18)] transition-colors">
                    <Icon size={20} className="text-[var(--gold-400)]" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Tracks Grid */}
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Conference Tracks</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Six{" "}<span className="gold-gradient">Strategic Themes</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Each track is independently programmable. Filter the agenda to build a day aligned with your role and priorities.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {summitTracks.map((track) => {
            const Icon = iconMap[track.icon] ?? Brain;
            return (
              <StaggerItem key={track.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="card-surface rounded-xl p-6 h-full cursor-default group relative overflow-hidden"
                >
                  {/* Color accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${track.color}, transparent)`, opacity: 0.6 }}
                  />

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${track.color}15` }}
                    >
                      <Icon size={20} style={{ color: track.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[var(--text-primary)] leading-tight mb-1">
                        {track.label}
                      </h3>
                      <span className="text-[10px] tracking-wide uppercase font-medium" style={{ color: track.color }}>
                        {track.sessions} Sessions
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {track.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
