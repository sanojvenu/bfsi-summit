"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { NetworkGraph } from "@/components/ui/network-graph";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[4.5rem]">
      <motion.span
        key={value}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 tabular-nums leading-none"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mt-1.5">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="text-xl sm:text-3xl font-extrabold text-cyan-400/50 pb-4">:</span>
  );
}

function CountdownDisplay() {
  const [countdown, setCountdown] = useState(getCountdown(SUMMIT_DATE));
  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(SUMMIT_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 py-3.5 px-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl" role="timer" aria-label="Countdown to summit">
      <CountdownUnit value={countdown.days} label="Days" />
      <CountdownSeparator />
      <CountdownUnit value={countdown.hours} label="Hours" />
      <CountdownSeparator />
      <CountdownUnit value={countdown.minutes} label="Mins" />
      <CountdownSeparator />
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
      className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden py-14 sm:py-16"
      style={{ background: "radial-gradient(ellipse at 50% 20%, #0d1e3a 0%, #050b14 75%)" }}
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Network graph background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none" aria-hidden="true">
        {mounted && (
          <NetworkGraph nodeCount={55} color="rgba(0,229,255," className="w-full h-full" />
        )}
      </div>

      {/* Ambient glowing halos */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "50%", transform: "translateX(-50%)", width: "65%", height: "55%",
          background: "radial-gradient(circle, rgba(0,242,254,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "35%", right: "15%", width: "40%", height: "45%",
          background: "radial-gradient(circle, rgba(224,0,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Edition badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full border border-[rgba(0,242,254,0.35)] bg-[rgba(0,242,254,0.08)] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300">
              {SUMMIT.edition} Annual Edition · {SUMMIT.year} · Mumbai
            </span>
          </motion.div>

          {/* Official Logo Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="3rd BFSI Tech Innovation Summit 2027"
              width={380}
              height={120}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_0_25px_rgba(0,242,254,0.35)]"
              priority
            />
          </motion.div>

          {/* Value Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-2xl leading-snug mb-3 font-display"
          >
            India's Premier Technology & AI Leadership Forum for Banking, Financial Services & Insurance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-xs sm:text-sm text-slate-400 italic mb-6 max-w-lg font-medium"
          >
            "{SUMMIT.theme}"
          </motion.p>

          {/* Date & Venue Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2.5 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg px-3.5 py-1.5 shadow-sm">
              <Calendar size={13} className="text-cyan-400" />
              {SUMMIT.date} · {SUMMIT.time}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg px-3.5 py-1.5 shadow-sm">
              <MapPin size={13} className="text-cyan-400" />
              Jio World Convention Centre, Mumbai
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-8"
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

          {/* Countdown Display */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              <CountdownDisplay />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
