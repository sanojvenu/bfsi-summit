"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-2 rounded-xl bg-slate-950/80 border border-slate-800/90 shadow-inner">
      <motion.span
        key={value}
        initial={{ y: -3, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300 font-mono tabular-nums leading-none"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-2">
        {label}
      </span>
    </div>
  );
}

function BigCountdownDisplay() {
  const [countdown, setCountdown] = useState(getCountdown(SUMMIT_DATE));
  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(SUMMIT_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full" role="timer" aria-label="Countdown to summit">
      <CountdownUnit value={countdown.days} label="Days" />
      <CountdownUnit value={countdown.hours} label="Hours" />
      <CountdownUnit value={countdown.minutes} label="Mins" />
      <CountdownUnit value={countdown.seconds} label="Secs" />
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden pt-28 pb-16 lg:py-24"
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Background Image: Mumbai Skyline & Bandra-Worli Sea Link */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mumbai-skyline.jpg"
          alt="Mumbai Skyline and Bandra-Worli Sea Link at Night"
          fill
          priority
          className="object-cover object-right md:object-center brightness-95"
        />
        {/* Dark Left/Top/Bottom Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/95 via-[#060b14]/85 to-[#060b14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/70" />
      </div>

      <div className="container relative z-10 w-full">
        {/* Top bar row inside hero: Kicker texts */}
        <div className="flex justify-between items-start mb-6">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400"
          >
            THE 3RD ANNUAL EDITION
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:block text-right"
          >
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300/80 leading-snug">
              WHERE<br />
              INDIA&apos;S BFSI<br />
              FUTURE<br />
              TAKES SHAPE.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Layout: Left Content & Right Mid Countdown Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Main Title & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Stacked Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4"
            >
              BFSI TECH <br />
              <span className="text-[#00e5ff]">INNOVATION</span> <br />
              SUMMIT 2027
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="text-base sm:text-lg text-slate-200 font-medium mb-7"
            >
              Intelligence. Integrity. Innovation.
            </motion.p>

            {/* Date & Location Chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm"
            >
              <div className="flex items-center gap-2 text-slate-100 font-semibold bg-[#070c18]/80 border border-slate-800/90 rounded-lg px-3.5 py-2 backdrop-blur-md">
                <Calendar size={16} className="text-cyan-400 flex-shrink-0" />
                <span>19 February 2027</span>
              </div>

              <div className="flex items-center gap-2 text-slate-100 font-semibold bg-[#070c18]/80 border border-slate-800/90 rounded-lg px-3.5 py-2 backdrop-blur-md">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <div>
                  <span>Jio World Convention Centre</span>
                  <span className="block text-xs font-normal text-slate-400">Bandra Kurla Complex, Mumbai</span>
                </div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-blue text-sm py-3 px-6 rounded-lg font-bold flex items-center gap-2 shadow-lg"
                id="hero-request-cta"
              >
                <span>Request Invitation</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#agenda"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-dark-outline text-sm py-3 px-6 rounded-lg font-medium"
                id="hero-view-agenda-cta"
              >
                <span>View Agenda</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Logo + Bigger Prominent Countdown in Mid-Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#070d18]/90 border border-slate-700/80 backdrop-blur-xl rounded-2xl pt-6 sm:pt-8 px-6 sm:px-8 pb-7 sm:pb-9 shadow-[0_16px_50px_rgba(0,0,0,0.65)] flex flex-col items-center text-center">
              
              {/* Logos above the countdown: Summit Logo + Partner Logo */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
                <div className="relative w-44 sm:w-60 h-20 sm:h-24 flex items-center justify-center flex-1">
                  <Image
                    src="/logo.png"
                    alt="BFSI Tech Innovation Summit 2027 Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_24px_rgba(0,229,255,0.4)]"
                    priority
                  />
                </div>

                <div className="h-14 w-px bg-slate-700/60 flex-shrink-0" />

                <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0 flex items-center justify-center p-2 rounded-xl bg-white shadow-md">
                  <Image
                    src="/partner-logo.png"
                    alt="Event Partner Logo"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
              </div>

              {/* Horizontal Divider cleanly ABOVE the pill (no overlap) */}
              <div className="w-full h-px bg-slate-800/90 mt-4 mb-3.5" />

              {/* Countdown Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1322] border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Event Countdown</span>
              </div>

              {/* Bigger Prominent Countdown */}
              {mounted && <BigCountdownDisplay />}

              {/* Bottom Note with clean margin and padding */}
              <div className="mt-5 pt-3.5 pb-1 border-t border-slate-800/90 w-full flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Sparkles size={13} className="text-cyan-400" />
                  Live in Mumbai
                </span>
                <span className="text-cyan-400 font-semibold font-mono">19 Feb 2027</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
