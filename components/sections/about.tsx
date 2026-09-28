"use client";

import { motion } from "framer-motion";
import { summitTracks } from "@/data/stats";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { GridPattern } from "@/components/ui/network-graph";
import { Brain, Shield, Smartphone, FileCheck, Cloud, Zap, Users, Mic, Globe, Network } from "lucide-react";
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

        {/* Executive Overview & Who Should Attend Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8">
          
          <FadeIn className="lg:col-span-6">
            <div className="section-label">About the Summit</div>
            <h2 id="about-heading" className="section-title">
              India's Premier BFSI{" "}
              <span className="brand-gradient">Leadership Forum</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              The {SUMMIT.name} is India's highest-density annual gathering of tech, digital, cybersecurity, and AI decision-makers across banking, insurance, NBFCs, and fintech.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Every speaker is an active practitioner sharing real playbooks, architectures, and lessons learned from India's rapidly evolving financial ecosystem.
            </p>
          </FadeIn>

          {/* "Who Should Attend" Compact Card */}
          <FadeIn delay={0.15} className="lg:col-span-6">
            <div className="card-surface rounded-xl p-5 border border-[rgba(0,229,255,0.2)]">
              <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider uppercase mb-3.5 flex items-center gap-2">
                <span className="w-3 h-px bg-[var(--cyan-400)]" />
                Who Should Attend
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { role: "CIOs & CTOs", description: "Next-gen banking infrastructure" },
                  { role: "CISOs & Risk Officers", description: "Cybersecurity & DPDPA compliance" },
                  { role: "Chief Digital Officers", description: "Customer digital experience" },
                  { role: "AI & Analytics Leaders", description: "GenAI & enterprise ML at scale" },
                ].map((item) => (
                  <div key={item.role} className="flex gap-2 items-start bg-[rgba(255,255,255,0.03)] border border-[rgba(0,229,255,0.1)] rounded-lg p-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--cyan-400)] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[var(--text-primary)] leading-tight">{item.role}</p>
                      <p className="text-[10px] text-[var(--text-muted)] leading-snug mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Strategic Conference Themes */}
        <FadeIn className="text-center mb-5">
          <div className="section-label justify-center">Conference Themes</div>
          <h2 className="section-title text-center">
            Six <span className="brand-gradient">Strategic Tracks</span>
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {summitTracks.map((track) => {
            const Icon = iconMap[track.icon] ?? Brain;
            return (
              <StaggerItem key={track.id}>
                <div className="card-surface gradient-strip-top rounded-xl p-4 h-full group hover:border-[var(--cyan-400)] transition-all duration-300">
                  <div className="flex items-start gap-2.5 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${track.color}20` }}
                    >
                      <Icon size={14} style={{ color: track.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--cyan-300)] transition-colors">
                        {track.label}
                      </h3>
                      <span className="text-[9px] tracking-wider uppercase font-semibold text-[var(--text-muted)]">
                        {track.sessions} Sessions
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {track.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
}
