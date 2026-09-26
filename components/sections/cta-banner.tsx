"use client";

import { FadeIn } from "@/components/ui/animations";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SUMMIT, getCountdown, SUMMIT_DATE } from "@/lib/utils";
import { useState, useEffect } from "react";

export function CtaBanner() {
  const [days, setDays] = useState(getCountdown(SUMMIT_DATE).days);

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(getCountdown(SUMMIT_DATE).days);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(135deg, #06111f 0%, #0B1E3D 40%, #112e61 70%, #06111f 100%)",
      }}
      aria-label="Register interest call to action"
    >
      {/* Animated gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,165,75,0.6), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,165,75,0.6), transparent)" }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(212,165,75,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold-500)] bg-[rgba(212,165,75,0.07)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] animate-pulse-gold" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold-400)]">
              {days} Days Remaining
            </span>
          </div>

          <h2
            className="font-display mb-4 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Secure Your Place at{" "}
            <br className="hidden sm:block" />
            India's Premier BFSI Summit
          </h2>

          <p className="text-[var(--text-secondary)] mb-2 text-sm sm:text-base max-w-xl mx-auto">
            {SUMMIT.edition} Edition · {SUMMIT.date}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-[var(--text-muted)] mb-8">
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-[var(--gold-400)]" />
              {SUMMIT.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-[var(--gold-400)]" />
              {SUMMIT.venue}, {SUMMIT.city}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary animate-pulse-gold"
              id="cta-banner-register"
            >
              <span>Request an Invitation</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#sponsors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
              id="cta-banner-sponsor"
            >
              <span>Partner With Us</span>
            </a>
          </div>

          <p className="text-[10px] text-[var(--text-muted)] mt-6">
            Invite-only event. All applications are reviewed by our curation team.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
