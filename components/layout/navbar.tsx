"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { SUMMIT } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#why-attend", label: "About" },
  { href: "#themes", label: "Themes" },
  { href: "#speakers", label: "Speakers" },
  { href: "#agenda", label: "Agenda" },
  { href: "#awards", label: "Awards" },
  { href: "#venue", label: "Venue" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const id = href.slice(1);
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id) || document.getElementById(id === "about" ? "why-attend" : id);
      if (el) {
        const navOffset = 85;
        const targetY = el.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop / Scrolled Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(5,11,20,0.92)] backdrop-blur-xl border-b border-[rgba(0,229,255,0.18)] py-3 shadow-xl"
            : "bg-[rgba(5,11,20,0.6)] backdrop-blur-md py-4 border-b border-[rgba(255,255,255,0.05)]"
        )}
        role="banner"
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="BFSI Tech Innovation Summit 2027 — Home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="relative h-10 md:h-11 w-auto aspect-[1.5/1] flex items-center">
              <Image
                src="/logo.png"
                alt="3rd BFSI Tech Innovation Summit 2027 Logo"
                width={180}
                height={60}
                className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-7"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.startsWith("#") ? link.href.slice(1) : "";
              const isActive = sectionId === activeSection;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-colors duration-200 relative",
                    isActive
                      ? "text-[var(--cyan-400)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--gold-400)]"
                    />
                  )}
                </a>
              );
            })}

            {/* Dark mode toggle */}
            <button
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode(!darkMode)}
              className="text-[var(--text-muted)] hover:text-[var(--gold-400)] transition-colors p-1"
              id="theme-toggle"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#register"
              onClick={(e) => { e.preventDefault(); handleNavClick("#register"); }}
              className="btn-blue text-xs py-2 px-4.5 rounded-lg flex items-center gap-1.5 shadow-md hover:shadow-lg"
              id="nav-register-cta"
            >
              <span>Request Invitation</span>
              <span className="text-sm font-bold">→</span>
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode(!darkMode)}
              className="text-[var(--text-muted)] hover:text-[var(--gold-400)] transition-colors p-1"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-1"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--surface-dark)] flex flex-col pt-24 px-6 pb-10 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-lg font-medium py-3 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="#register"
                onClick={(e) => { e.preventDefault(); handleNavClick("#register"); }}
                className="btn-primary w-full justify-center"
                id="mobile-register-cta"
              >
                <span>Request an Invitation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
