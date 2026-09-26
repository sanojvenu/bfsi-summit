"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    id: "h1",
    stat: "148",
    unit: "delegates",
    context: "CXO-level attendance at the 2025 Edition",
    edition: "2025 Edition",
  },
  {
    id: "h2",
    stat: "26",
    unit: "speakers",
    context: "Practitioners from India's top 30 BFSI organisations",
    edition: "2025 Edition",
  },
  {
    id: "h3",
    stat: "4.8/5",
    unit: "rating",
    context: "Average delegate satisfaction score",
    edition: "2025 Edition",
  },
  {
    id: "h4",
    stat: "94%",
    unit: "would return",
    context: "Of 2025 delegates confirmed they'd attend again",
    edition: "2025 Edition",
  },
];

const testimonials = [
  {
    id: "t1",
    quote: "The single best BFSI conference I've attended in five years. Every session earned its slot — no filler, no sales pitches. The peer conversations were worth the trip alone.",
    name: "CISO, Leading Private Sector Bank",
    year: "2025 Delegate",
  },
  {
    id: "t2",
    quote: "I came expecting a vendor showcase. I left with three new implementation ideas, two partnerships, and a headhunting call I definitely didn't expect. This is the right room.",
    name: "Head of Digital Transformation, NBFC",
    year: "2025 Delegate",
  },
  {
    id: "t3",
    quote: "The quality of dialogue — especially the roundtables — was exceptional. Peers who have actually done what we're trying to do, sharing honestly. Rare.",
    name: "Chief Technology Officer, Mid-Market Insurer",
    year: "2025 Delegate",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="section"
      style={{ background: "var(--surface-mid)" }}
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Past Editions</div>
          <h2 id="gallery-heading" className="section-title text-center">
            A Summit With a{" "}
            <span className="gold-gradient">Proven Track Record</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Two editions. 300+ senior leaders. The 3rd edition builds on that foundation.
          </p>
        </FadeIn>

        {/* Stats */}
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {highlights.map((h) => (
            <StaggerItem key={h.id}>
              <div className="card-surface-glass rounded-xl p-6 text-center">
                <span
                  className="font-display block text-3xl sm:text-4xl font-bold text-[var(--gold-400)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {h.stat}
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)] block mb-1">
                  {h.unit}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] leading-tight">{h.context}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Delegate testimonials */}
        <FadeIn className="mb-4">
          <h3
            className="font-display text-xl font-bold text-[var(--text-primary)] mb-6 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Delegates Say
          </h3>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="card-surface rounded-xl p-6 h-full flex flex-col">
                {/* Quote mark */}
                <span
                  className="font-display text-5xl leading-none text-[var(--gold-500)] opacity-40 mb-3 block"
                  aria-hidden="true"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  "
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4 italic">
                  {t.quote}
                </p>
                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">{t.year}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Gallery placeholder */}
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 text-center">
            <p className="text-sm text-[var(--text-muted)] mb-4">
              📸 Photo and video highlights from the 2024 and 2025 Editions will appear here.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Connect with us on{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold-400)] hover:underline"
              >
                LinkedIn
              </a>{" "}
              for session recordings and highlights from past editions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
