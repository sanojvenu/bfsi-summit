"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export function InvitationModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    title: "",
    company: "",
    sector: "Private Sector Bank",
  });

  useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false);
      setOpen(true);
    };

    // Global event listener
    window.addEventListener("open-invitation-modal", handleOpen);

    // Intercept clicks on any link targeting #register
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="#register"]');
      if (target) {
        e.preventDefault();
        handleOpen();
      }
    };
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("open-invitation-modal", handleOpen);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#060c18]/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-[#0d1627] text-white border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <CheckCircle size={30} />
                </div>
                <Dialog.Title className="text-2xl font-bold text-white mb-2">
                  Request Received
                </Dialog.Title>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-white">{form.fullName}</span>. Your request for an executive invitation to the BFSI Tech Innovation Summit 2027 has been submitted.
                </p>
                <p className="text-xs text-slate-400 mb-6">
                  Our delegate concierge team will review your application and send confirmation to <span className="text-cyan-400">{form.email}</span> within 2 business days.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="btn-blue text-xs py-2 px-6 rounded-lg font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-1">
                  EXCLUSIVE EXECUTIVE PASS
                </span>
                <Dialog.Title className="text-2xl font-black text-white leading-tight mb-2">
                  Request an Invitation
                </Dialog.Title>
                <p className="text-xs text-slate-400 mb-6">
                  19 February 2027 · Jio World Convention Centre, Mumbai. Complimentary for qualified BFSI CXOs & Senior Leaders.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.sharma@bank.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Designation / Role *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. CIO / CTO / Head of AI"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. State Bank of India"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Sector
                    </label>
                    <select
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Public Sector Bank">Public Sector Bank</option>
                      <option value="Private Sector Bank">Private Sector Bank</option>
                      <option value="Insurance Company">Insurance Company</option>
                      <option value="NBFC / Fintech">NBFC / Fintech</option>
                      <option value="Capital Markets">Capital Markets</option>
                      <option value="Technology & Solutions">Technology & Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-blue w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 mt-2 shadow-lg cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Invitation Request</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
