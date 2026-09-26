"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[4.5rem]">
      <motion.span
        key={value}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl sm:text-4xl font-extrabold text-blue-900 tabular-nums leading-none"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1.5">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="text-xl sm:text-3xl font-extrabold text-blue-400/60 pb-4">:</span>
  );
}

function CountdownDisplay() {
  const [countdown, setCountdown] = useState(getCountdown(SUMMIT_DATE));
  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(SUMMIT_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 py-3.5 px-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50" role="timer" aria-label="Countdown to summit">
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
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200"
      aria-label="BFSI Tech Innovation Summit 2027 Hero"
    >
      {/* Subtle ambient light gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", left: "50%", transform: "translateX(-50%)", width: "70%", height: "60%",
          background: "radial-gradient(ellipse at top, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Edition badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-blue-900">
              {SUMMIT.edition} Annual Edition · {SUMMIT.year} · Mumbai
            </span>
          </motion.div>

          {/* Official Logo Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="3rd BFSI Tech Innovation Summit 2027"
              width={460}
              height={150}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain drop-shadow-md"
              priority
            />
          </motion.div>

          {/* Value Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 max-w-3xl leading-snug mb-4 font-display"
          >
            India's Premier Technology & AI Leadership Forum for Banking, Financial Services & Insurance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-base text-slate-600 italic mb-8 max-w-xl font-medium"
          >
            "{SUMMIT.theme}"
          </motion.p>

          {/* Date & Venue Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-4 py-2.5 shadow-sm">
              <Calendar size={14} className="text-blue-600" />
              {SUMMIT.date} · {SUMMIT.time}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-4 py-2.5 shadow-sm">
              <MapPin size={14} className="text-blue-600" />
              Jio World Convention Centre, Mumbai
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            <a
              href="#register"
              onClick={(e) => { e.preventDefault(); document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary"
              id="hero-register-cta"
            >
              <span>Request Invitation</span>
              <ArrowRight size={16} />
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CountdownDisplay />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
