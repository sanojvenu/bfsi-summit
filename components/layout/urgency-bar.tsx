"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, X } from "lucide-react";
import { SUMMIT } from "@/lib/utils";

export function UrgencyBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("gff-urgency-dismissed");
    if (wasDismissed) setDismissed(true);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("gff-urgency-dismissed", "1");
  };

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-blue-500/20 text-white text-xs font-medium py-2 px-4 relative z-50">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 font-semibold text-[11px] uppercase tracking-wider">
            {SUMMIT.edition} Edition
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
            <Calendar size={12} className="text-cyan-400" />
            {SUMMIT.dateShort} · {SUMMIT.year}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
            <MapPin size={12} className="text-cyan-400" />
            {SUMMIT.venue}, {SUMMIT.city}
          </span>
          <span className="text-slate-200 font-semibold hidden lg:inline">
            "{SUMMIT.theme}"
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors group"
          >
            <span>Request Pass</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
