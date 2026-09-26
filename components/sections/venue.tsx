"use client";

import { FadeIn } from "@/components/ui/animations";
import { MapPin, Train, Plane, Car, Hotel } from "lucide-react";
import { SUMMIT } from "@/lib/utils";

export function VenueSection() {
  return (
    <section
      id="venue"
      className="section"
      style={{ background: "var(--surface-mid)" }}
      aria-labelledby="venue-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Venue & Travel</div>
          <h2 id="venue-heading" className="section-title text-center">
            <span className="gold-gradient">Jio World Convention Centre</span>
            <br />
            Mumbai, India
          </h2>
          <p className="section-subtitle mx-auto text-center">
            One of Asia's largest purpose-built convention facilities, situated at the heart of Mumbai's premium Bandra Kurla Complex financial district.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Map embed */}
          <FadeIn className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] aspect-[4/3] relative">
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

          {/* Venue details */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <FadeIn delay={0.1}>
              <div className="card-surface rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-[var(--gold-400)] mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">Venue Address</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      Jio World Convention Centre
                      <br />
                      G Block, Bandra Kurla Complex (BKC)
                      <br />
                      Mumbai, Maharashtra 400 051
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)] ml-7">
                  {SUMMIT.date} · {SUMMIT.time}
                </p>
              </div>
            </FadeIn>

            {/* Getting there */}
            <FadeIn delay={0.15}>
              <div className="card-surface rounded-xl p-6">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4">Getting There</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    {
                      icon: Train,
                      title: "Metro",
                      desc: "BKC Metro Station (Line 2B) — 5 min walk from venue",
                    },
                    {
                      icon: Plane,
                      title: "From Airport",
                      desc: "Chhatrapati Shivaji Maharaj International Airport — 25 min by car (15 km via Eastern Expressway)",
                    },
                    {
                      icon: Car,
                      title: "By Car",
                      desc: "Drop-off at Gate 3, G Block BKC. Valet parking available for delegates.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                      <Icon size={15} className="text-[var(--teal-400)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-[var(--text-primary)]">{title}: </span>
                        <span className="text-xs text-[var(--text-secondary)]">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Hotel recommendations */}
            <FadeIn delay={0.2}>
              <div className="card-surface rounded-xl p-6">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Hotel size={15} className="text-[var(--gold-400)]" />
                  Recommended Hotels in BKC
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { name: "Grand Hyatt Mumbai", distance: "1.2 km", stars: "5★" },
                    { name: "Sofitel Mumbai BKC", distance: "0.8 km", stars: "5★" },
                    { name: "Renaissance Mumbai Convention", distance: "1.5 km", stars: "5★" },
                    { name: "Trident Bandra Kurla", distance: "1.0 km", stars: "5★" },
                  ].map((hotel) => (
                    <li key={hotel.name} className="flex items-center justify-between text-xs py-1.5 border-b border-[var(--border-subtle)] last:border-0">
                      <span className="text-[var(--text-secondary)]">{hotel.stars} {hotel.name}</span>
                      <span className="text-[var(--text-muted)]">{hotel.distance}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-[var(--text-muted)] mt-3">
                  Delegate room blocks may be available. Contact us for preferential rates.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
