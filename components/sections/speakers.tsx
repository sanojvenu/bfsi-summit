"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { speakers, type Speaker } from "@/data/speakers";
import { agendaSessions } from "@/data/agenda";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function SpeakerModal({
  speaker,
  open,
  onClose,
}: {
  speaker: Speaker | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!speaker) return null;
  const session = agendaSessions.find((s) => s.id === speaker.sessionId);

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#060c18]/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0d1627] text-white border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-cyan-500/40 flex-shrink-0 shadow-md">
                {speaker.photo ? (
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-bold text-white text-xl"
                    style={{ background: speaker.avatarColor }}
                  >
                    {speaker.initials}
                  </div>
                )}
              </div>

              <div>
                <Dialog.Title className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {speaker.name}
                </Dialog.Title>
                <p className="text-cyan-400 font-semibold text-sm mt-0.5">{speaker.title}</p>
                <p className="text-slate-300 text-sm">{speaker.company}</p>
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-2 transition-colors"
                  >
                    <ExternalLink size={12} />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Executive Biography
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{speaker.bio}</p>
            </div>

            {/* Speaking Session */}
            {session && (
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Speaking Session
                </span>
                <p className="text-sm font-semibold text-white leading-snug">{session.title}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                  <span>Track: {session.track}</span>
                  <span>•</span>
                  <span>Time: {session.time} IST</span>
                </div>
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [showAll, setShowAll] = useState(false);

  // First 4 featured speakers matching reference image
  const displaySpeakers = showAll ? speakers : speakers.slice(0, 4);

  return (
    <section
      id="speakers"
      className="bg-white py-16 lg:py-24 text-slate-900 relative scroll-mt-24"
      aria-label="Keynote and Panel Speakers"
    >
      <div className="container">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
              SPEAKERS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              The people behind the change.
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-blue-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>{showAll ? "Show Top Speakers" : "View All Speakers"}</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 4 Cards Row matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displaySpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group cursor-pointer relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Speaker Portrait Photo */}
              {speaker.photo ? (
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center font-bold text-white text-4xl"
                  style={{ background: speaker.avatarColor }}
                >
                  {speaker.initials}
                </div>
              )}

              {/* Bottom Dark Vignette Overlay for Crisp Typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/60 to-transparent" />

              {/* Bottom Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1">
                  {speaker.title}
                </p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium line-clamp-1">
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speaker details modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        open={Boolean(selectedSpeaker)}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
}
