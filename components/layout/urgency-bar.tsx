"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import { getCountdown, SUMMIT_DATE, SUMMIT } from "@/lib/utils";

export function UrgencyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Check if previously dismissed
    const wasDismissed = sessionStorage.getItem("urgency-bar-dismissed");
    if (wasDismissed) return;

    const update = () => {
      const ct = getCountdown(SUMMIT_DATE);
      setDays(ct.days);
      // Show when ≤ 90 days away
      if (ct.days <= 90 && ct.total > 0) setVisible(true);
    };

    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("urgency-bar-dismissed", "1");
  };

  if (dismissed || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="urgency-bar overflow-hidden no-print"
        role="alert"
        aria-live="polite"
      >
        <div className="container flex items-center justify-between py-2 gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
            <Clock size={14} className="text-[var(--gold-400)] flex-shrink-0" />
            <span>
              <span className="font-bold text-[var(--gold-400)]">{days} days</span>
              {" "}to the {SUMMIT.edition} {SUMMIT.name} ·{" "}
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="underline underline-offset-2 hover:text-[var(--gold-300)] transition-colors"
              >
                Secure your seat →
              </a>
            </span>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss urgency bar"
            className="text-[var(--text-muted)] hover:text-white transition-colors flex-shrink-0"
            id="urgency-bar-dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
