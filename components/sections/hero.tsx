"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, ShieldCheck, Users, Building2 } from "lucide-react";
import { NetworkGraph } from "@/components/ui/network-graph";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3rem]">
      <motion.span
        key={value}
        initial={{ y: -4, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#E000FF] tabular-nums leading-none"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[9px] font-semibold tracking-wider uppercase text-slate-400 mt-1">
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
    <div className="flex items-center gap-2 sm:gap-3 py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md shadow-lg" role="timer" aria-label="Countdown to summit">
      <CountdownUnit value={countdown.days} label="Days" />
      <span className="text-lg font-bold text-cyan-400/50 pb-2">:</span>
      <CountdownUnit value={countdown.hours} label="Hours" />
      <span className="text-lg font-bold text-cyan-400/50 pb-2">:</span>
      <CountdownUnit value={countdown.minutes} label="Mins" />
      <span className="text-lg font-bold text-cyan-400/50 pb-2">:</span>
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
      className="relative min-h-[82vh] flex items-center overflow-hidden py-10 lg:py-16"
      style={{ background: "radial-gradient(ellipse at 30% 30%, #0d1e3a 0%, #050b14 80%)" }}
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Background network graph */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        {mounted && (
          <NetworkGraph nodeCount={45} color="rgba(0,229,255," className="w-full h-full" />
        )}
      </div>

      {/* Ambient background glowing halos */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%", left: "10%", width: "45%", height: "55%",
          background: "radial-gradient(circle, rgba(0,242,254,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", right: "10%", width: "40%", height: "50%",
          background: "radial-gradient(circle, rgba(224,0,255,0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (7 cols): Content, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Edition badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[rgba(0,242,254,0.35)] bg-[rgba(0,242,254,0.08)] backdrop-blur-md"
            >
              <Sparkles size={13} className="text-cyan-400" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300">
                {SUMMIT.edition} Edition · {SUMMIT.year} · Mumbai
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 font-display"
            >
              India's Premier Technology & AI Forum for{" "}
              <span className="brand-gradient">Banking, FS & Insurance</span>
            </motion.h1>

            {/* Subtitle / Theme */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-xs sm:text-sm text-slate-300 italic mb-5 font-medium leading-relaxed max-w-xl"
            >
              "{SUMMIT.theme}"
            </motion.p>

            {/* Date & Location bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 shadow-sm">
                <Calendar size={13} className="text-cyan-400" />
                {SUMMIT.date} · {SUMMIT.time}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 shadow-sm">
                <MapPin size={13} className="text-cyan-400" />
                Jio World Convention Centre, Mumbai
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="#register"
                onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
                id="hero-register-cta"
              >
                <span>Request Invitation</span>
                <ArrowRight size={14} />
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                className="flex items-center gap-3"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  Event Starts In:
                </span>
                <CountdownDisplay />
              </motion.div>
            )}

          </div>

          {/* Right Column (5 cols): Glowing Logo Feature Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="card-surface gradient-strip-top rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-2xl border border-[rgba(0,229,255,0.25)] bg-[rgba(9,19,38,0.85)]">
              
              {/* Logo Presentation Frame */}
              <div className="flex justify-center p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6 shadow-inner">
                <Image
                  src="/logo.png"
                  alt="3rd BFSI Tech Innovation Summit 2027"
                  width={340}
                  height={110}
                  className="w-full max-w-[260px] sm:max-w-[290px] h-auto object-contain drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]"
                  priority
                />
              </div>

              {/* Quick Summit Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-3 text-left">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Users size={13} />
                    <span>150+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">CXO Decision Makers</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-3 text-left">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Building2 size={13} />
                    <span>40+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">Practitioner Speakers</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-3 text-left">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                    <ShieldCheck size={13} />
                    <span>6 Tracks</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">Focused Themes</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-lg p-3 text-left">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                    <Sparkles size={13} />
                    <span>Awards Gala</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">Excellence Recognition</p>
                </div>
              </div>

              {/* Pass Tier Quick Access Bar */}
              <div className="pt-3 border-t border-[rgba(0,229,255,0.15)] flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-300">
                  Complimentary CXO Pass Available
                </span>
                <a
                  href="#register"
                  onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  Apply <ArrowRight size={11} />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
