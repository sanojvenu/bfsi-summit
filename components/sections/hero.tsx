"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, ChevronDown, Users, Mic, Star, Award } from "lucide-react";
import { NetworkGraph } from "@/components/ui/network-graph";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";
import { speakers } from "@/data/speakers";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3rem]">
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="countdown-digit tabular-nums"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)] mt-0.5">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="text-2xl sm:text-3xl font-bold text-[var(--cyan-400)] pb-5 opacity-50">:</span>
  );
}

/** Right-side floating card — social proof + featured speaker peek */
function HeroSidePanel({ mounted }: { mounted: boolean }) {
  const featured = speakers.filter((s) => s.featured).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:flex flex-col gap-4 w-full max-w-xs xl:max-w-sm"
    >
      {/* Stats card */}
      <div
        className="rounded-2xl border border-[var(--border-subtle)] p-5"
        style={{ background: "rgba(10,21,43,0.65)", backdropFilter: "blur(20px)" }}
      >
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--cyan-400)] mb-4">
          Summit At a Glance
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Users, value: "150+", label: "Senior Leaders" },
            { icon: Mic, value: "30+", label: "Expert Speakers" },
            { icon: Star, value: "3rd", label: "Annual Edition" },
            { icon: Award, value: "8", label: "Award Categories" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <Icon size={12} className="text-[var(--cyan-400)]" />
                <span className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-wider">{label}</span>
              </div>
              <span className="font-display text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-[var(--cyan-400)] flex-shrink-0" />
            <span className="text-[10px] text-[var(--text-secondary)] leading-snug">
              Jio World Convention Centre, BKC, Mumbai
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <Calendar size={11} className="text-[var(--cyan-400)] flex-shrink-0" />
            <span className="text-[10px] text-[var(--text-secondary)]">19 February 2027 · Full Day</span>
          </div>
        </div>
      </div>

      {/* Speaker spotlight card */}
      <div
        className="rounded-2xl border border-[var(--border-subtle)] p-5"
        style={{ background: "rgba(10,21,43,0.65)", backdropFilter: "blur(20px)" }}
      >
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--cyan-400)] mb-3">
          Featured Speakers
        </p>
        <div className="flex flex-col gap-3">
          {featured.map((sp) => (
            <div key={sp.id} className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                style={{ background: sp.avatarColor }}
                aria-hidden="true"
              >
                {sp.initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white leading-tight truncate">{sp.name}</p>
                <p className="text-[10px] text-[var(--text-muted)] truncate">{sp.title}</p>
                <p className="text-[10px] text-[var(--cyan-400)] truncate">{sp.companyShort}</p>
              </div>
            </div>
          ))}
          <a
            href="#speakers"
            onClick={(e) => { e.preventDefault(); document.getElementById("speakers")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-[10px] font-semibold text-[var(--cyan-400)] hover:text-[var(--cyan-300)] flex items-center gap-1 mt-1 transition-colors"
          >
            View all speakers <ArrowRight size={10} />
          </a>
        </div>
      </div>

      {/* Countdown mini-card */}
      {mounted && (
        <div
          className="rounded-2xl border border-[var(--border-default)] p-4"
          style={{ background: "rgba(0,242,254,0.04)", backdropFilter: "blur(20px)" }}
        >
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--cyan-400)] mb-3 text-center">
            Time to Summit
          </p>
          <CountdownDisplay />
        </div>
      )}
    </motion.div>
  );
}

function CountdownDisplay() {
  const [countdown, setCountdown] = useState(getCountdown(SUMMIT_DATE));
  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(SUMMIT_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex items-end justify-center gap-2" role="timer" aria-label="Countdown to summit">
      <CountdownUnit value={countdown.days} label="Days" />
      <CountdownSeparator />
      <CountdownUnit value={countdown.hours} label="Hrs" />
      <CountdownSeparator />
      <CountdownUnit value={countdown.minutes} label="Min" />
      <CountdownSeparator />
      <CountdownUnit value={countdown.seconds} label="Sec" />
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050b14 0%, #0a152b 45%, #0f1d3a 80%, #050b14 100%)" }}
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Network graph background */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        {mounted && (
          <NetworkGraph nodeCount={60} color="rgba(0,242,254," className="w-full h-full" />
        )}
      </div>

      {/* Radial cyan & purple glows behind hero */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%", left: "-5%", width: "55%", height: "60%",
          background: "radial-gradient(ellipse, rgba(0,242,254,0.12) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%", right: "10%", width: "45%", height: "50%",
          background: "radial-gradient(ellipse, rgba(224,0,255,0.1) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050b14, transparent)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* ── Left column ── */}
          <div className="flex-1 min-w-0">
            {/* Logo Banner in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <Image
                src="/logo.png"
                alt="3rd BFSI Tech Innovation Summit 2027"
                width={360}
                height={120}
                className="w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-[0_0_35px_rgba(0,242,254,0.35)]"
                priority
              />
            </motion.div>

            {/* Edition badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[rgba(0,242,254,0.4)] bg-[rgba(0,242,254,0.06)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--cyan-400)] animate-pulse-cyan" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--cyan-400)]">
                {SUMMIT.edition} Edition · {SUMMIT.year} · Mumbai
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white leading-[1.06] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                fontWeight: 700,
              }}
            >
              BFSI Tech<br />
              <span className="gold-gradient">Innovation Summit</span>
            </motion.h1>

            {/* Theme */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[var(--text-secondary)] italic mb-5 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "{SUMMIT.theme}"
            </motion.p>

            {/* Date + Venue pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { Icon: Calendar, text: `${SUMMIT.date} · ${SUMMIT.time}` },
                { Icon: MapPin, text: "Jio World Convention Centre, Mumbai" },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border-subtle)] rounded-full px-3 py-1.5"
                >
                  <Icon size={11} className="text-[var(--gold-400)]" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#register"
                onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary animate-pulse-gold"
                id="hero-register-cta"
              >
                <span>Request an Invitation</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#agenda"
                onClick={(e) => { e.preventDefault(); document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline"
                id="hero-agenda-cta"
              >
                <span>View Agenda</span>
              </a>
            </motion.div>

            {/* Mobile countdown */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden inline-flex items-end gap-3 bg-[rgba(11,30,61,0.6)] border border-[var(--border-subtle)] rounded-xl px-5 py-3 backdrop-blur-sm"
              >
                <span className="text-[9px] font-bold tracking-widest uppercase text-[var(--text-muted)] self-center mr-1">
                  Begins In
                </span>
                <CountdownDisplay />
              </motion.div>
            )}
          </div>

          {/* ── Right column — floating panel ── */}
          <HeroSidePanel mounted={mounted} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--gold-400)] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
