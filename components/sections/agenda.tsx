"use client";

import { useState } from "react";
import { agendaSessions, tracks, trackColors, type TrackType } from "@/data/agenda";
import { formatTime } from "@/lib/utils";
import { Clock, MapPin, ChevronDown, ChevronUp, Bookmark, BookmarkCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineHighlights = [
  {
    time: "08:00",
    title: "Registration & Networking",
    type: "Networking Breakfast",
  },
  {
    time: "09:00",
    title: "Welcome & Opening",
    type: "Opening Address",
  },
  {
    time: "09:15",
    title: "Keynote: AI-First Banking",
    type: "Plenary Keynote",
  },
  {
    time: "10:00",
    title: "Panel Discussion: The Future of Payments",
    type: "Executive Roundtable",
  },
  {
    time: "11:30",
    title: "Fireside: Cybersecurity in BFSI",
    type: "CISO Fireside",
  },
];

export function AgendaSection() {
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>("All Tracks");
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredSessions = agendaSessions.filter((s) => {
    if (selectedTrack === "All Tracks") return true;
    if (selectedTrack === "Saved") return bookmarked.includes(s.id);
    return s.track === selectedTrack;
  });

  return (
    <section
      id="agenda"
      className="bg-white py-16 lg:py-24 text-slate-900 border-t border-slate-100 relative scroll-mt-24"
      aria-label="Summit Agenda"
    >
      <div className="container">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
              AGENDA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              One day. Six themes. Zero filler.
            </h2>
          </div>

          <button
            onClick={() => setShowFullSchedule(!showFullSchedule)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-blue-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>{showFullSchedule ? "Show Timeline Overview" : "View Full Agenda"}</span>
            <ArrowRight size={14} className={showFullSchedule ? "rotate-90 transition-transform" : "transition-transform"} />
          </button>
        </div>

        {/* Horizontal Timeline Track matching Reference Image */}
        <div className="relative py-4 px-2 mb-10 overflow-x-auto pb-6 scrollbar-thin">
          <div className="min-w-[760px] relative">
            {/* The horizontal connecting line */}
            <div className="absolute top-[18px] left-6 right-6 h-[2px] bg-slate-200 z-0" />

            {/* 5 Milestone Nodes */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {timelineHighlights.map((item, idx) => (
                <div key={item.time} className="flex flex-col items-start pr-2 group">
                  {/* Circle Node with Time */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-[#0070f3] shadow-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#0070f3] transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0070f3] group-hover:bg-white" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-950 font-mono">
                      {item.time}
                    </span>
                  </div>

                  {/* Title & Type */}
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0070f3] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 mt-1 font-medium">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Full Schedule View */}
        {showFullSchedule && (
          <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-semibold text-slate-500 mr-2">Filter Track:</span>
              {["All Tracks", "Keynote", "Panel", "Fireside Chat", "Case Study", "Saved"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTrack(t)}
                  className={cn(
                    "text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer",
                    selectedTrack === t
                      ? "bg-[#0070f3] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {t} {t === "Saved" && `(${bookmarked.length})`}
                </button>
              ))}
            </div>

            {/* Sessions List */}
            <div className="space-y-3">
              {filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 flex-shrink-0 text-left">
                      <span className="text-sm font-bold text-[#0070f3] font-mono block">
                        {session.time}
                      </span>
                      {session.endTime && (
                        <span className="text-xs text-slate-500 font-mono">
                          {session.endTime}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100/70 text-blue-800">
                          {session.track}
                        </span>
                        {session.hall && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin size={11} /> {session.hall}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {session.title}
                      </h4>
                      {session.speakerNames && session.speakerNames.length > 0 && (
                        <p className="text-xs font-semibold text-slate-600 mt-0.5">
                          Speaker: {session.speakerNames.join(", ")}
                        </p>
                      )}
                      <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleBookmark(session.id)}
                    className="self-end sm:self-center p-2 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Bookmark session"
                  >
                    {bookmarked.includes(session.id) ? (
                      <BookmarkCheck size={18} className="text-[#0070f3]" />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
