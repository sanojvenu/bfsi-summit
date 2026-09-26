"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, ShieldCheck, Users, Building2 } from "lucide-react";
import { NetworkGraph } from "@/components/ui/network-graph";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[2.75rem]">
      <motion.span
        key={value}
        initial={{ y: -3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#E000FF] tabular-nums leading-none"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[8px] font-semibold tracking-wider uppercase text-slate-400 mt-0.5">
        {label}
      </span>
    </div>
  );
}

function CountdownDisplay() {
  const [countdown, setCountdown] = useState(getCountdown(SUMMIT_DATE));
  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(SUMMIT_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2.5 py-1.5 px-3 rounded-lg bg-slate-950/80 border border-slate-800/90 backdrop-blur-md shadow-md" role="timer" aria-label="Countdown to summit">
      <CountdownUnit value={countdown.days} label="Days" />
      <span className="text-sm font-bold text-cyan-400/50 pb-1.5">:</span>
      <CountdownUnit value={countdown.hours} label="Hours" />
      <span className="text-sm font-bold text-cyan-400/50 pb-1.5">:</span>
      <CountdownUnit value={countdown.minutes} label="Mins" />
      <span className="text-sm font-bold text-cyan-400/50 pb-1.5">:</span>
      <CountdownUnit value={countdown.seconds} label="Secs" />
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-20 pb-8"
      style={{ background: "radial-gradient(ellipse at 30% 30%, #0d1e3a 0%, #050b14 80%)" }}
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Background network graph */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        {mounted && (
          <NetworkGraph nodeCount={40} color="rgba(0,229,255," className="w-full h-full" />
        )}
      </div>

      {/* Ambient background glowing halos */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%", left: "10%", width: "45%", height: "55%",
          background: "radial-gradient(circle, rgba(0,242,254,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", right: "10%", width: "40%", height: "50%",
          background: "radial-gradient(circle, rgba(224,0,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column (7 cols): Content, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Edition badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 mb-3 rounded-full border border-[rgba(0,242,254,0.35)] bg-[rgba(0,242,254,0.08)] backdrop-blur-md"
            >
              <Sparkles size={12} className="text-cyan-400" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-cyan-300">
                {SUMMIT.edition} Edition · {SUMMIT.year} · Mumbai
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2.5 font-display"
            >
              India's Premier Technology & AI Forum for{" "}
              <span className="brand-gradient">Banking, FS & Insurance</span>
            </motion.h1>

            {/* Subtitle / Theme */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-xs sm:text-sm text-slate-300 italic mb-4 font-medium leading-relaxed max-w-xl"
            >
              "{SUMMIT.theme}"
            </motion.p>

            {/* Date & Location bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1 shadow-sm">
                <Calendar size={12} className="text-cyan-400" />
                {SUMMIT.date} · {SUMMIT.time}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1 shadow-sm">
                <MapPin size={12} className="text-cyan-400" />
                Jio World Convention Centre, Mumbai
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              <a
                href="#register"
                onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
                id="hero-register-cta"
              >
                <span>Request Invitation</span>
                <ArrowRight size={13} />
              </a>
              <a
                href="#agenda"
                onClick={(e) => { e.preventDefault(); document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline"
                id="hero-agenda-cta"
              >
                <span>Explore Agenda</span>
              </a>
            </motion.div>

            {/* Compact Live Countdown */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2.5"
              >
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">
                  Event Starts In:
                </span>
                <CountdownDisplay />
              </motion.div>
            )}

          </div>

          {/* Right Column (5 cols): Glowing Logo Feature Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="card-surface gradient-strip-top rounded-xl p-4 sm:p-5 relative overflow-hidden shadow-xl border border-[rgba(0,229,255,0.22)] bg-[rgba(9,19,38,0.85)]">
              
              {/* Logo Presentation Frame */}
              <div className="flex justify-center p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 mb-4 shadow-inner">
                <Image
                  src="/logo.png"
                  alt="3rd BFSI Tech Innovation Summit 2027"
                  width={280}
                  height={90}
                  className="w-full max-w-[210px] sm:max-w-[230px] h-auto object-contain drop-shadow-[0_0_18px_rgba(0,242,254,0.35)]"
                  priority
                />
              </div>

              {/* Quick Summit Stats Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3.5">
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-2.5 text-left">
                  <div className="flex items-center gap-1 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Users size={12} />
                    <span>150+</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-medium">CXO Decision Makers</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-2.5 text-left">
                  <div className="flex items-center gap-1 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Building2 size={12} />
                    <span>40+</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-medium">Practitioner Speakers</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-2.5 text-left">
                  <div className="flex items-center gap-1 text-cyan-400 text-xs font-semibold mb-0.5">
                    <ShieldCheck size={12} />
                    <span>6 Tracks</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-medium">Focused Themes</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-2.5 text-left">
                  <div className="flex items-center gap-1 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Sparkles size={12} />
                    <span>Awards Gala</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-medium">Excellence Recognition</p>
                </div>
              </div>

              {/* Pass Tier Quick Access Bar */}
              <div className="pt-2.5 border-t border-[rgba(0,229,255,0.15)] flex items-center justify-between text-[10px]">
                <span className="font-medium text-slate-300">
                  Complimentary CXO Pass Available
                </span>
                <a
                  href="#register"
                  onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  Apply <ArrowRight size={10} />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
