"use client";

import Image from "next/image";
import { Lightbulb, Users, BarChart3, ArrowRight } from "lucide-react";

export function WhyAttendSection() {
  return (
    <section
      id="why-attend"
      className="bg-white pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-32 text-slate-900 relative scroll-mt-24"
      aria-label="Why Attend BFSI Tech Innovation Summit 2027"
    >
      <span id="about" className="absolute -top-24" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              WHY ATTEND
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] mb-5">
              The industry is at an <br className="hidden sm:inline" />
              <span className="text-[#0070f3]">inflection point.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              AI, data, payments and digital infrastructure are reshaping financial services.
              This summit brings together India&apos;s leading BFSI leaders to exchange ideas, share
              real-world insights and shape what&apos;s next.
            </p>

            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-blue text-sm py-3 px-6 rounded-lg font-bold flex items-center gap-2 shadow-md hover:shadow-lg"
              id="why-attend-cta"
            >
              <span>Request Invitation</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Column: Conference Photo & 3 Mini Features */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 mb-6">
              <Image
                src="/conference-hall.jpg"
                alt="Auditorium with IDEAS PARTNERSHIPS REAL IMPACT presentation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* 3 Pillars Below Photo matching reference */}
            <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start p-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0070f3] flex items-center justify-center mb-2">
                  <Lightbulb size={18} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Learn
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  from peers
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start p-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0070f3] flex items-center justify-center mb-2">
                  <Users size={18} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Build
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  meaningful connections
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start p-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0070f3] flex items-center justify-center mb-2">
                  <BarChart3 size={18} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Explore
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  real-world solutions
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
