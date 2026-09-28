"use client";

import Image from "next/image";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";

export function VenueSection() {
  return (
    <section
      id="venue"
      className="bg-white py-16 lg:py-24 text-slate-900 relative scroll-mt-24"
      aria-label="Summit Venue"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Address & Action Button */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              VENUE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6">
              Mumbai. <br />
              Where the future <br />
              meets.
            </h2>

            <div className="flex items-start gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Jio World Convention Centre
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Bandra Kurla Complex, Mumbai
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Jio+World+Convention+Centre+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue-outline text-sm py-2.5 px-5 rounded-lg font-bold flex items-center gap-2"
              id="venue-directions-btn"
            >
              <span>Get Directions</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column: Architectural Photo of Jio World Convention Centre */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90">
              <Image
                src="/jio-convention.jpg"
                alt="Jio World Convention Centre Mumbai Exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
