"use client";

import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative py-20 lg:py-28 overflow-hidden text-white border-t border-slate-800"
      aria-label="Call to action"
    >
      {/* Background Skyline Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mumbai-skyline.jpg"
          alt="Mumbai Skyline at Night"
          fill
          className="object-cover object-bottom brightness-90"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/95 via-[#060b14]/85 to-[#060b14]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/80" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 block mb-3">
            BFSI TECH INNOVATION SUMMIT 2027
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-6">
            Be part of what&apos;s next <br className="hidden sm:inline" />
            in India&apos;s BFSI journey.
          </h2>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm text-slate-200 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-cyan-400 flex-shrink-0" />
              <span>19 February 2027</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
              <span>Jio World Convention Centre, Mumbai</span>
            </div>
          </div>

          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-blue text-sm py-3 px-6 rounded-lg font-bold inline-flex items-center gap-2 shadow-xl"
            id="bottom-cta-request-btn"
          >
            <span>Request Invitation</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
