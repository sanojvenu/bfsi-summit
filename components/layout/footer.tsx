"use client";

import Link from "next/link";
import { X, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SUMMIT } from "@/lib/utils";

const footerLinks = {
  Summit: [
    { label: "About", href: "#about" },
    { label: "Agenda", href: "#agenda" },
    { label: "Speakers", href: "#speakers" },
    { label: "Awards", href: "#awards" },
    { label: "Past Editions", href: "#gallery" },
  ],
  "Get Involved": [
    { label: "Request Invitation", href: "#register" },
    { label: "Sponsor / Partner", href: "#sponsors" },
    { label: "Media Accreditation", href: "#register" },
    { label: "Nominate for Awards", href: "#awards" },
  ],
  Venue: [
    { label: "Venue & Travel", href: "#venue" },
    { label: "Hotel Recommendations", href: "#venue" },
    { label: "Mumbai Travel Guide", href: "#venue" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--navy-950)] border-t border-[var(--border-subtle)] pt-16 pb-8" role="contentinfo">
      <div className="container">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--gold-500)]">
                BFSI Tech
              </span>
              <h2
                className="font-display text-2xl font-bold text-white mt-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Innovation Summit
              </h2>
              <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mt-0.5">
                {SUMMIT.edition} Edition · {SUMMIT.dateShort}
              </p>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mb-6">
              India's premier technology leadership summit for the Banking, Financial Services, and Insurance sector.
            </p>

            {/* Contact */}
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[var(--gold-500)] mt-0.5 flex-shrink-0" />
                <span>{SUMMIT.venue}, {SUMMIT.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--gold-500)] flex-shrink-0" />
                <a href="mailto:summit@bfsiinnovation.in" className="hover:text-white transition-colors">
                  summit@bfsiinnovation.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--gold-500)] flex-shrink-0" />
                <a href="tel:+912240001234" className="hover:text-white transition-colors">
                  +91 22 4000 1234
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                id="footer-linkedin"
                className="w-9 h-9 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold-400)] hover:border-[var(--gold-500)] transition-all"
              >
                <ExternalLink size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                id="footer-twitter"
                className="w-9 h-9 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold-400)] hover:border-[var(--gold-500)] transition-all"
              >
                <X size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-[var(--gold-500)] mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} BFSI Tech Innovation Summit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
