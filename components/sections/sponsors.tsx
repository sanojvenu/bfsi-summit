"use client";

import { sponsors, tierOrder, tierStyles } from "@/data/sponsors";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { ArrowRight, FileDown, Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SponsorLogoPlaceholder({ name, tier }: { name: string; tier: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-xs font-bold tracking-wide text-white text-center leading-tight group-hover:text-[var(--cyan-400)] transition-colors">
        {name}
      </div>
    </div>
  );
}

export function SponsorsSection() {
  const grouped = tierOrder.reduce<Record<string, typeof sponsors>>((acc, tier) => {
    const tierSponsors = sponsors.filter((s) => s.tier === tier);
    if (tierSponsors.length > 0) acc[tier] = tierSponsors;
    return acc;
  }, {});

  return (
    <section
      id="sponsors"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
      aria-labelledby="sponsors-heading"
    >
      <div className="container relative z-10">
        <FadeIn className="text-center mb-8">
          <div className="section-label justify-center">Partners & Sponsors</div>
          <h2 id="sponsors-heading" className="section-title text-center">
            Industry Leaders{" "}
            <span className="brand-gradient">Powering the Summit</span>
          </h2>
          <p className="section-subtitle mx-auto text-center max-w-2xl">
            Premier technology and services companies supporting India's BFSI leadership for the digital decade.
          </p>
        </FadeIn>

        {/* Tiered sponsor display */}
        <div className="flex flex-col gap-7 mb-10">
          {Object.entries(grouped).map(([tier, tierSponsors]) => {
            const style = tierStyles[tier as keyof typeof tierStyles];
            return (
              <FadeIn key={tier}>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-[var(--cyan-400)] bg-[rgba(0,242,254,0.08)] px-3 py-1 rounded-full border border-[rgba(0,229,255,0.2)]">
                      {style.label}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,229,255,0.3)] to-transparent" />
                  </div>

                  <div className={cn(
                    "flex flex-wrap gap-4 items-center",
                    tier === "Platinum" ? "justify-center gap-6" : "justify-start"
                  )}>
                    {tierSponsors.map((sponsor) => (
                      <a
                        key={sponsor.id}
                        href={sponsor.website ?? "#"}
                        target={sponsor.website ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={cn(
                          "card-surface rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-1 group border border-[rgba(0,229,255,0.15)] hover:border-[var(--cyan-400)] transition-all duration-300 hover:-translate-y-1",
                          tier === "Platinum" ? "min-w-[200px] py-5 gradient-strip-top" : "min-w-[150px]",
                        )}
                        aria-label={sponsor.name}
                        id={`sponsor-${sponsor.id}`}
                      >
                        <SponsorLogoPlaceholder name={sponsor.name} tier={tier} />
                        {sponsor.tagline && tier === "Platinum" && (
                          <span className="text-[9px] tracking-wide text-[var(--text-muted)] mt-1">
                            {sponsor.tagline}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* ROI / Partner pitch section */}
        <FadeIn>
          <div className="card-surface gradient-strip-top rounded-2xl border border-[rgba(0,229,255,0.3)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Why Partner With <span className="brand-gradient">the Summit?</span>
                </h3>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {[
                    "150+ CXO & VP decision-makers — strictly curated audience",
                    "Single-track & 6 theme streams with 100% attendee retention",
                    "Category exclusivity option — zero direct competitors in your tier",
                    "Pre-scheduled 1-on-1 bilateral executive matchmakings",
                    "Post-summit delegate lead portal access (DPDPA 2023 compliant)",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 size={14} className="text-[var(--cyan-400)] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "93%", label: "Delegates rate sponsor sessions 'highly relevant'" },
                    { value: "4.7/5", label: "Average sponsor satisfaction score" },
                    { value: "₹12Cr+", label: "Avg. pipeline generated per Platinum partner" },
                    { value: "2 Weeks", label: "Avg. turnaround time to initial executive meeting" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="card-surface rounded-xl p-3.5 flex flex-col gap-1 border border-[rgba(0,229,255,0.15)]"
                    >
                      <span className="font-display text-xl sm:text-2xl font-bold text-[var(--cyan-400)]" style={{ fontFamily: "var(--font-display)" }}>
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] leading-tight font-medium">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-1">
                  <a
                    href="mailto:sponsors@bfsiinnovation.in"
                    className="btn-primary flex-1 justify-center text-xs"
                    id="sponsor-contact-cta"
                  >
                    <Mail size={14} />
                    <span>Get Partnership Pack</span>
                  </a>
                  <button
                    onClick={() => alert("Sponsorship prospectus download — connect your PDF here.")}
                    className="btn-outline flex-1 justify-center text-xs"
                    id="sponsor-download-cta"
                  >
                    <FileDown size={14} />
                    <span>Download Prospectus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
