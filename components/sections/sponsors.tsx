"use client";

import { sponsors, tierOrder, tierStyles } from "@/data/sponsors";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

function SponsorLogoPlaceholder({ name, tier }: { name: string; tier: string }) {
  // Elegant text-based placeholder for when real logos aren't available
  const initials = name
    .split(/[\s&.]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-xs font-bold tracking-wide text-[var(--text-muted)] text-center leading-tight">
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
      className="section"
      style={{ background: "var(--surface-dark)" }}
      aria-labelledby="sponsors-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-14">
          <div className="section-label justify-center">Partners & Sponsors</div>
          <h2 id="sponsors-heading" className="section-title text-center">
            Industry Leaders{" "}
            <span className="gold-gradient">Powering the Summit</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            The BFSI Tech Innovation Summit is supported by technology and services companies who share our mission: equipping India's financial sector leadership for the digital decade.
          </p>
        </FadeIn>

        {/* Tiered sponsor display */}
        <div className="flex flex-col gap-12 mb-16">
          {Object.entries(grouped).map(([tier, tierSponsors]) => {
            const style = tierStyles[tier as keyof typeof tierStyles];
            return (
              <FadeIn key={tier}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className={cn("text-xs font-bold tracking-[0.15em] uppercase", style.color)}>
                      {style.label}
                    </span>
                    <div className="flex-1 h-px bg-[var(--border-subtle)]" />
                  </div>

                  <div className={cn(
                    "flex flex-wrap gap-4 items-center",
                    tier === "Platinum" ? "justify-center gap-8" : "justify-start"
                  )}>
                    {tierSponsors.map((sponsor) => (
                      <a
                        key={sponsor.id}
                        href={sponsor.website ?? "#"}
                        target={sponsor.website ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={cn(
                          "card-surface rounded-xl px-6 py-4 flex flex-col items-center justify-center gap-1",
                          "hover:border-[var(--border-default)] transition-all duration-300 hover:-translate-y-0.5",
                          tier === "Platinum" ? "min-w-[220px] py-6" : "min-w-[160px]",
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
          <div className="rounded-2xl border border-[var(--gold-500)] bg-gradient-to-br from-[rgba(212,165,75,0.06)] to-[rgba(11,30,61,0.4)] p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why Partner With
                  <br />
                  <span className="gold-gradient">the Summit?</span>
                </h3>
                <ul className="flex flex-col gap-3 mb-6">
                  {[
                    "150+ CXO and VP-level delegates — not mass attendance",
                    "8-hour curated day; delegates stay for every session",
                    "Category exclusivity — no direct competitor in your tier",
                    "Pre-matched 1:1 meetings with decision-makers",
                    "Post-summit delegate list access (opt-in only, DPDPA compliant)",
                    "Featured in all pre-event email campaigns and social promotion",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--gold-400)] mt-0.5 flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "93%", label: "Delegates rate sponsor interactions as 'relevant'" },
                    { value: "4.7/5", label: "Average sponsor satisfaction score, 2025" },
                    { value: "₹12Cr+", label: "Avg. deal pipeline generated per Platinum sponsor" },
                    { value: "2 weeks", label: "Average time to first post-event meeting" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="card-surface rounded-xl p-4 flex flex-col gap-1"
                    >
                      <span className="font-display text-2xl font-bold text-[var(--gold-400)]" style={{ fontFamily: "var(--font-display)" }}>
                        {stat.value}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="mailto:sponsors@bfsiinnovation.in"
                    className="btn-primary flex-1 justify-center"
                    id="sponsor-contact-cta"
                  >
                    <Mail size={15} />
                    <span>Get Sponsorship Pack</span>
                  </a>
                  <button
                    onClick={() => alert("Sponsorship prospectus download — connect your PDF here.")}
                    className="btn-outline flex-1 justify-center"
                    id="sponsor-download-cta"
                  >
                    <FileDown size={15} />
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
