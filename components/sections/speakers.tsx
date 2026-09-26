"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { speakers, type Speaker } from "@/data/speakers";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animations";
import { agendaSessions } from "@/data/agenda";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackColors } from "@/data/agenda";

function SpeakerAvatar({
  speaker,
  size = "md",
}: {
  speaker: Speaker;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-base",
    lg: "w-24 h-24 text-xl",
  };
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white flex-shrink-0",
        sizeMap[size]
      )}
      style={{ background: speaker.avatarColor }}
      aria-hidden="true"
    >
      {speaker.initials}
    </div>
  );
}

function SpeakerModal({ speaker }: { speaker: Speaker }) {
  const session = agendaSessions.find((s) => s.id === speaker.sessionId);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-[rgba(6,17,31,0.85)] backdrop-blur-sm" />
      <Dialog.Content
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-describedby={`speaker-${speaker.id}-bio`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-surface rounded-2xl"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[var(--border-subtle)]">
            <div className="flex items-start gap-5">
              <SpeakerAvatar speaker={speaker} size="lg" />
              <div className="flex-1 min-w-0">
                <Dialog.Title className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {speaker.name}
                </Dialog.Title>
                <p className="text-sm text-[var(--gold-400)] font-medium">{speaker.title}</p>
                <p className="text-sm text-[var(--text-muted)]">{speaker.company}</p>
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--teal-400)] hover:text-[var(--teal-300)] mt-2 transition-colors"
                  >
                    <ExternalLink size={12} />
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="p-6 sm:p-8">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-3">
              Biography
            </h3>
            <p id={`speaker-${speaker.id}-bio`} className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {speaker.bio}
            </p>

            {/* Session */}
            {session && (
              <div className="rounded-xl bg-[rgba(212,165,75,0.06)] border border-[var(--border-subtle)] p-5">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-3">
                  Speaking At
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={cn(
                    "text-[10px] border rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wider",
                    trackColors[session.track]
                  )}>
                    {session.track}
                  </span>
                  <span className="text-xs font-semibold text-[#00E5FF]">
                    {session.time.replace(":", ":")} AM–
                    {session.endTime}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{session.title}</p>
              </div>
            )}
          </div>

          {/* Close button */}
          <Dialog.Close
            className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface-hover)] rounded-lg transition-colors"
            aria-label="Close speaker profile"
          >
            <X size={18} />
          </Dialog.Close>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="speaker-card card-surface gradient-strip-top rounded-xl text-left w-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan-400)] overflow-hidden"
          aria-label={`View ${speaker.name}'s profile`}
          id={`speaker-card-${speaker.id}`}
        >
          <div className="p-5">
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar with glow */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md"
                  style={{ background: speaker.avatarColor }}
                  aria-hidden="true"
                >
                  {speaker.initials}
                </div>
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: `0 0 20px ${speaker.avatarColor}77` }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--cyan-400)] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs text-[var(--cyan-300)] mt-0.5 leading-snug font-medium">{speaker.title}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate">{speaker.company}</p>
              </div>
            </div>

            {speaker.sessionTitle && (
              <div className="border-t border-[rgba(0,229,255,0.12)] pt-3">
                <p className="text-[10px] font-semibold tracking-wide uppercase text-[var(--text-muted)] mb-1">
                  Speaking on
                </p>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed font-normal">
                  {speaker.sessionTitle}
                </p>
              </div>
            )}

            <div className="flex items-center gap-1 mt-3 text-[10px] font-semibold text-[var(--cyan-400)] opacity-70 group-hover:opacity-100 transition-opacity">
              View full profile <ChevronRight size={10} />
            </div>
          </div>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        <SpeakerModal speaker={speaker} />
      </AnimatePresence>
    </Dialog.Root>
  );
}

export function SpeakersSection() {
  const featured = speakers.filter((s) => s.featured);
  const rest = speakers.filter((s) => !s.featured);

  return (
    <section
      id="speakers"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
      aria-labelledby="speakers-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Speakers & Thought Leaders</div>
          <h2 id="speakers-heading" className="section-title text-center">
            Learn From{" "}
            <span className="brand-gradient">Operators, Not Pundits</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Every speaker at the Summit is a practitioner — a CXO or senior leader who has done the work, shipped the product, and can show you the results.
          </p>
        </FadeIn>

        {/* Featured speakers */}
        {featured.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--cyan-400)] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#00F2FE] to-[#E000FF]" />
              Featured Speakers
            </h3>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {featured.map((sp) => (
                <StaggerItem key={sp.id}>
                  <SpeakerCard speaker={sp} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* All speakers */}
        {rest.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--cyan-400)] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#00F2FE] to-[#E000FF]" />
              Also Speaking
            </h3>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {rest.map((sp) => (
                <StaggerItem key={sp.id}>
                  <SpeakerCard speaker={sp} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* More TBA */}
        <FadeIn className="mt-10 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            Additional speakers to be announced. More confirmed shortly.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
