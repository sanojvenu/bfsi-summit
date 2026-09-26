"use client";

import { FadeIn } from "@/components/ui/animations";
import { MapPin, Train, Plane, Car, Hotel } from "lucide-react";
import { SUMMIT } from "@/lib/utils";

export function VenueSection() {
  return (
    <section
      id="venue"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-mid)" }}
      aria-labelledby="venue-heading"
    >
      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Venue & Location</div>
          <h2 id="venue-heading" className="section-title text-center">
            <span className="brand-gradient">Jio World Convention Centre</span>
            <br />
            Mumbai, India
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Asia's premier purpose-built convention facility, located at the heart of Mumbai's Bandra Kurla Complex (BKC) financial hub.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Map embed (7 cols) */}
          <FadeIn className="lg:col-span-7 rounded-2xl overflow-hidden border border-[rgba(0,229,255,0.2)] shadow-xl aspect-[16/10] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8639!3d19.0607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e04b06b049%3A0x3cb31fa4fe67ade0!2sJio%20World%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jio World Convention Centre map"
              className="absolute inset-0 w-full h-full"
            />
          </FadeIn>

          {/* Venue details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Address */}
            <FadeIn delay={0.1}>
              <div className="card-surface gradient-strip-top rounded-xl p-5 border border-[rgba(0,229,255,0.2)]">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="text-[var(--cyan-400)] mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Venue Address</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Jio World Convention Centre, Hall 1 & 2<br />
                      G Block, Bandra Kurla Complex (BKC)<br />
                      Mumbai, Maharashtra 400 051
                    </p>
                  </div>
                </div>
                <p className="text-[11px] font-semibold text-[var(--cyan-400)] ml-7">
                  {SUMMIT.date} · {SUMMIT.time}
                </p>
              </div>
            </FadeIn>

            {/* Getting there */}
            <FadeIn delay={0.15}>
              <div className="card-surface rounded-xl p-5 border border-[rgba(0,229,255,0.15)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--cyan-400)] mb-3">Getting There</h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    {
                      icon: Train,
                      title: "Metro",
                      desc: "BKC Metro Station (Line 2B) — 5 min walk",
                    },
                    {
                      icon: Plane,
                      title: "Airport",
                      desc: "Chhatrapati Shivaji Maharaj Airport — 25 min by car (15 km via Expressway)",
                    },
                    {
                      icon: Car,
                      title: "By Car",
                      desc: "Drop-off at Gate 3, G Block BKC. Valet parking provided.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-2.5 text-xs">
                      <Icon size={14} className="text-[var(--cyan-400)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">{title}: </span>
                        <span className="text-[var(--text-secondary)]">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Hotel recommendations */}
            <FadeIn delay={0.2}>
              <div className="card-surface rounded-xl p-5 border border-[rgba(0,229,255,0.15)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--cyan-400)] mb-3 flex items-center gap-2">
                  <Hotel size={14} />
                  Recommended Hotels in BKC
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {[
                    { name: "Grand Hyatt Mumbai", distance: "1.2 km", stars: "5★" },
                    { name: "Sofitel Mumbai BKC", distance: "0.8 km", stars: "5★" },
                    { name: "Trident Bandra Kurla", distance: "1.0 km", stars: "5★" },
                  ].map((hotel) => (
                    <li key={hotel.name} className="flex items-center justify-between text-xs py-1 border-b border-[rgba(0,229,255,0.1)] last:border-0">
                      <span className="text-slate-200">{hotel.stars} {hotel.name}</span>
                      <span className="text-[var(--text-muted)] text-[10px]">{hotel.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
