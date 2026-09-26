"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agendaSessions, tracks, trackColors, type TrackType } from "@/data/agenda";
import { speakers } from "@/data/speakers";
import { FadeIn } from "@/components/ui/animations";
import { formatTime } from "@/lib/utils";
import { ChevronDown, Bookmark, BookmarkCheck, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

function TrackBadge({ track, size = "sm" }: { track: TrackType; size?: "xs" | "sm" }) {
  const colorClass = trackColors[track] ?? "track-keynote";
  return (
    <span
      className={cn(
        "border rounded-full font-semibold uppercase tracking-wider flex-shrink-0",
        colorClass,
        size === "xs"
          ? "text-[9px] px-2 py-0.5"
          : "text-[10px] px-2.5 py-0.5"
      )}
    >
      {track}
    </span>
  );
}

interface SessionCardProps {
  session: typeof agendaSessions[0];
  starred: boolean;
  onStar: () => void;
}

function SessionCard({ session, starred, onStar }: SessionCardProps) {
  const [expanded, setExpanded] = useState(false);

  const sessionSpeakers = (session.speakerIds ?? [])
    .map((id) => speakers.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300 relative",
        session.isBreak
          ? "border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)]"
          : "card-surface hover:border-[var(--border-default)]",
        session.isHighlight && !session.isBreak && "border-l-2 border-l-[var(--gold-500)]"
      )}
    >
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <div
        role={!session.isBreak ? "button" : undefined}
        tabIndex={!session.isBreak ? 0 : undefined}
        onClick={() => !session.isBreak && setExpanded(!expanded)}
        onKeyDown={(e) => { if (!session.isBreak && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setExpanded(!expanded); } }}
        className={cn(
          "w-full text-left p-4 sm:p-5 flex gap-4 items-start",
          !session.isBreak ? "cursor-pointer pr-14" : ""
        )}
        aria-expanded={!session.isBreak ? expanded : undefined}
        aria-controls={`session-${session.id}-body`}
      >
        {/* Time */}
        <div className="flex-shrink-0 text-right w-[4.5rem]">
          <span className="text-xs font-bold text-[var(--gold-400)] block">
            {formatTime(session.time)}
          </span>
          {session.endTime && (
            <span className="text-[10px] text-[var(--text-muted)]">
              {formatTime(session.endTime)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <TrackBadge track={session.track} />
            {session.isHighlight && (
              <span className="text-[9px] font-bold tracking-widest uppercase text-[var(--gold-400)] bg-[rgba(212,165,75,0.1)] px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>
          <h3 className={cn(
            "font-semibold leading-tight",
            session.isBreak ? "text-xs text-[var(--text-muted)]" : "text-sm text-[var(--text-primary)]"
          )}>
            {session.title}
          </h3>
          {session.subtitle && (
            <p className="text-xs text-[var(--text-muted)] italic mt-0.5">{session.subtitle}</p>
          )}
          {session.speakerNames && session.speakerNames.length > 0 && !session.isBreak && (
            <p className="text-xs text-[var(--teal-400)] mt-1">
              {session.speakerNames.join(", ")}
            </p>
          )}
        </div>

        {/* Chevron — no interactive elements inside role=button */}
        {!session.isBreak && (
          <ChevronDown
            size={14}
            className={cn(
              "flex-shrink-0 self-center text-[var(--text-muted)] transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        )}
      </div>

      {/* Bookmark — absolutely positioned sibling, NOT inside the role=button div */}
      {!session.isBreak && (
        <button
          onClick={onStar}
          aria-label={starred ? "Remove from planner" : "Add to planner"}
          className={cn(
            "absolute top-3.5 right-9 p-1.5 rounded-lg transition-colors z-10",
            starred
              ? "text-[var(--gold-400)] bg-[rgba(212,165,75,0.1)]"
              : "text-[var(--text-muted)] hover:text-[var(--gold-400)]"
          )}
        >
          {starred ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
        </button>
      )}

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {expanded && !session.isBreak && (
          <motion.div
            id={`session-${session.id}-body`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[var(--border-subtle)] ml-[4.5rem] space-y-3">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {session.description}
              </p>

              {session.hall && (
                <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <MapPin size={11} className="text-[var(--gold-500)]" />
                  {session.hall}
                </p>
              )}

              {/* Speaker cards within session */}
              {sessionSpeakers.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {sessionSpeakers.map((sp) => sp && (
                    <div key={sp.id} className="flex items-center gap-2 bg-[rgba(255,255,255,0.04)] border border-[var(--border-subtle)] rounded-lg px-3 py-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                        style={{ background: sp.avatarColor }}
                        aria-hidden="true"
                      >
                        {sp.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] leading-tight">{sp.name}</p>
                        <p className="text-[10px] text-[var(--text-muted)]">{sp.title} · {sp.companyShort}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AgendaSection() {
  const [activeTrack, setActiveTrack] = useState<TrackType | "All">("All");
  const [starredIds, setStarredIds] = useState<Set<string>>(new Set());
  const [showPlannerOnly, setShowPlannerOnly] = useState(false);

  const toggleStar = (id: string) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = agendaSessions.filter((s) => {
    if (showPlannerOnly && !starredIds.has(s.id) && !s.isBreak) return false;
    if (activeTrack !== "All" && s.track !== activeTrack) return false;
    return true;
  });

  return (
    <section
      id="agenda"
      className="section"
      style={{ background: "var(--surface-mid)" }}
      aria-labelledby="agenda-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Full-Day Programme</div>
          <h2 id="agenda-heading" className="section-title text-center">
            Summit <span className="gold-gradient">Agenda</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            19 February 2027 · 08:00 AM – 6:30 PM IST · Jio World Convention Centre, Mumbai
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by track">
            {(["All", ...tracks] as const).map((track) => (
              <button
                key={track}
                onClick={() => setActiveTrack(track as TrackType | "All")}
                className={cn(
                  "text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200",
                  activeTrack === track
                    ? "bg-gradient-to-r from-[#00F2FE] via-[#0066FF] to-[#9D00FF] text-white border-transparent shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                    : "text-[var(--text-secondary)] bg-[rgba(255,255,255,0.03)] border-[rgba(0,229,255,0.18)] hover:border-[var(--cyan-400)] hover:text-white"
                )}
                aria-pressed={activeTrack === track}
              >
                {track}
              </button>
            ))}
          </div>

          {/* My Planner toggle */}
          <button
            onClick={() => setShowPlannerOnly(!showPlannerOnly)}
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all",
              showPlannerOnly
                ? "bg-[rgba(0,242,254,0.15)] text-[var(--cyan-400)] border-[var(--cyan-400)] shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                : "text-[var(--text-muted)] border-[rgba(0,229,255,0.18)] hover:text-[var(--cyan-400)] hover:border-[var(--cyan-400)]"
            )}
            aria-pressed={showPlannerOnly}
            id="planner-toggle"
          >
            <BookmarkCheck size={13} />
            My Planner {starredIds.size > 0 && `(${starredIds.size})`}
          </button>
        </FadeIn>

        {/* Session list */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-[var(--text-muted)] text-sm">
              No sessions match your selection. {showPlannerOnly && "Star some sessions to build your planner."}
            </div>
          ) : (
            filtered.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                starred={starredIds.has(session.id)}
                onStar={() => toggleStar(session.id)}
              />
            ))
          )}
        </div>

        {/* Planner export hint */}
        {starredIds.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex items-center justify-center gap-4 text-sm"
          >
            <span className="text-[var(--text-muted)]">
              📋 {starredIds.size} session{starredIds.size !== 1 ? "s" : ""} in your planner
            </span>
            <button
              onClick={() => {
                const planned = agendaSessions
                  .filter((s) => starredIds.has(s.id))
                  .map((s) => `${formatTime(s.time)} — ${s.title}`)
                  .join("\n");
                navigator.clipboard?.writeText(planned).then(() => alert("Planner copied to clipboard!"));
              }}
              className="text-[var(--gold-400)] underline underline-offset-2 hover:text-[var(--gold-300)] transition-colors"
              id="copy-planner"
            >
              Copy to clipboard
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
