"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/animations";
import { CheckCircle, ArrowRight, ArrowLeft, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { SUMMIT } from "@/lib/utils";

const STEPS = [
  {
    id: 1,
    title: "Your Details",
    description: "Tell us about yourself",
    fields: [
      { id: "firstName", label: "First Name", type: "text", placeholder: "Rajesh", required: true },
      { id: "lastName", label: "Last Name", type: "text", placeholder: "Sharma", required: true },
      { id: "email", label: "Work Email", type: "email", placeholder: "r.sharma@bank.com", required: true },
      { id: "phone", label: "Mobile Number", type: "tel", placeholder: "+91 98765 43210", required: true },
    ],
  },
  {
    id: 2,
    title: "Your Organisation",
    description: "Help us understand your context",
    fields: [
      { id: "company", label: "Organisation / Company", type: "text", placeholder: "State Bank of India", required: true },
      {
        id: "sector",
        label: "Sector",
        type: "select",
        options: [
          "Public Sector Bank",
          "Private Sector Bank",
          "Insurance Company",
          "NBFC / Fintech",
          "Capital Markets / MF",
          "Regulatory Body",
          "Technology / Services",
          "Other",
        ],
        placeholder: "Select your sector",
        required: true,
      },
      { id: "title", label: "Job Title / Designation", type: "text", placeholder: "Chief Digital Officer", required: true },
      {
        id: "seniority",
        label: "Seniority Level",
        type: "select",
        options: ["C-Suite / CEO / MD", "VP / SVP / EVP", "Director / Head of", "Senior Manager", "Other"],
        placeholder: "Select level",
        required: true,
      },
    ],
  },
  {
    id: 3,
    title: "Your Interests",
    description: "Help us personalise your experience",
    fields: [
      {
        id: "tracks",
        label: "Preferred Session Tracks (select all that apply)",
        type: "checkboxes",
        options: [
          "AI & ML in Banking",
          "Cybersecurity & Resilience",
          "Digital Payments & Open Finance",
          "RegTech & DPDPA Compliance",
          "Cloud & Core Modernisation",
          "InsurTech & Embedded Finance",
        ],
        required: false,
      },
      { id: "message", label: "Anything specific you'd like to discuss or explore at the Summit?", type: "textarea", placeholder: "Optional — but helps us facilitate relevant connections for you.", required: false },
      {
        id: "newsletter",
        label: "Keep me updated with Summit news and BFSI industry insights",
        type: "checkbox-single",
        required: false,
      },
    ],
  },
];

interface FormState {
  [key: string]: string | string[] | boolean;
}

interface FieldErrors {
  [key: string]: string;
}

export function RegisterSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentStep = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};
    for (const field of currentStep.fields) {
      if (field.required) {
        const val = form[field.id];
        if (!val || (Array.isArray(val) && val.length === 0) || val === "") {
          newErrors[field.id] = "This field is required";
        }
        if (field.type === "email" && val && typeof val === "string") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(val)) newErrors[field.id] = "Please enter a valid email address";
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
      setErrors({});
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Stub: simulate network request
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  const updateField = (id: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => { const n = { ...prev }; delete n[id]; return n; });
  };

  const toggleCheckbox = (id: string, option: string) => {
    setForm((prev) => {
      const current = (prev[id] as string[]) ?? [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [id]: updated };
    });
  };

  if (submitted) {
    return (
      <section id="register" className="section" style={{ background: "var(--surface-dark)" }} aria-label="Registration confirmation">
        <div className="container flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface rounded-2xl p-10 sm:p-14 max-w-lg w-full text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(52,211,153,0.1)] flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-emerald-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Request Received
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              Thank you for your interest in the {SUMMIT.edition} {SUMMIT.name}. Our team reviews all applications and will respond within 5 business days.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              A confirmation has been sent to <span className="text-[var(--gold-400)]">{form.email as string}</span>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="section relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
      aria-labelledby="register-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <div className="section-label justify-center">Registration & Delegate Passes</div>
          <h2 id="register-heading" className="section-title text-center">
            Choose Your <span className="gold-gradient">Summit Pass</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            The {SUMMIT.name} is curated for senior technology and innovation leaders across banking, financial services, and insurance. Select your pass tier below to request an invitation.
          </p>
        </FadeIn>

        {/* GFF-style Delegate Pass Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          {[
            {
              name: "CXO VIP Pass",
              badge: "Invite Only · Complimentary",
              badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
              forWho: "CIOs, CTOs, CISOs, CDOs, Board Members & MDs",
              features: [
                "Full access to all Keynotes & Executive Panels",
                "Exclusive CXO VIP Networking Lounge & Breakfast",
                "Invitation to BFSI Innovation Awards Gala Dinner",
                "1-on-1 Curated Peer Matchmaking & Roundtables",
              ],
              highlight: true,
            },
            {
              name: "Delegate Pass",
              badge: "Practitioners & Leaders",
              badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
              forWho: "VPs, Directors, Tech Architects & Product Heads",
              features: [
                "Access to all 12+ Specialized Session Tracks",
                "Networking Lunch & Refreshment Breaks",
                "Access to Tech Innovation Exhibition Area",
                "Digital Delegate Kit & Post-Event Report",
              ],
              highlight: false,
            },
            {
              name: "Partner & Sponsor Pass",
              badge: "Solution Providers",
              badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
              forWho: "Fintechs, Cloud & Security Vendors, Consultancies",
              features: [
                "Exhibitor Booth / Kiosk in Innovation Showcase",
                "2 Full Conference & VIP Gala Passes",
                "Brand Placement in Summit Collateral & PR",
                "Access to Attendees Lead Capture Portal",
              ],
              highlight: false,
            },
          ].map((pass) => (
            <div
              key={pass.name}
              className={cn(
                "rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative shadow-lg backdrop-blur-md",
                pass.highlight
                  ? "bg-slate-900/90 border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  : "bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"
              )}
            >
              {pass.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-extrabold text-[9px] tracking-widest uppercase px-3 py-0.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base text-white">{pass.name}</h3>
                </div>
                <span className={cn("inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border mb-3", pass.badgeColor)}>
                  {pass.badge}
                </span>
                <p className="text-[11px] text-slate-300 font-medium mb-3 leading-relaxed">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5">Target Audience:</span>
                  {pass.forWho}
                </p>
                <div className="h-px bg-slate-800/80 my-3" />
                <ul className="flex flex-col gap-2 mb-4">
                  {pass.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#register-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "w-full text-center py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all",
                  pass.highlight
                    ? "btn-primary"
                    : "btn-outline"
                )}
              >
                Apply for {pass.name}
              </a>
            </div>
          ))}
        </div>

        <div id="register-form" className="max-w-xl mx-auto pt-2">

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-1.5">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex flex-col items-center gap-1">
                  <div className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-400",
                    i < step
                      ? "bg-[var(--cyan-400)] border-[var(--cyan-400)] text-slate-950"
                      : i === step
                        ? "border-[var(--cyan-400)] text-[var(--cyan-400)]"
                        : "border-[var(--border-subtle)] text-[var(--text-muted)]"
                  )}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={cn(
                    "text-[8px] tracking-widest uppercase hidden sm:block",
                    i === step ? "text-[var(--cyan-400)]" : "text-[var(--text-muted)]"
                  )}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative h-1 bg-[var(--border-subtle)] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--cyan-500), var(--magenta-500))" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Step card */}
          <div className="card-surface rounded-xl p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-6">
                  <h3 className="font-semibold text-lg text-[var(--text-primary)]">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{currentStep.description}</p>
                </div>

                <div className="flex flex-col gap-5">
                  {currentStep.fields.map((field) => (
                    <div key={field.id}>
                      <label htmlFor={`field-${field.id}`} className="form-label">
                        {field.label}
                        {field.required && <span className="text-[var(--gold-400)] ml-0.5">*</span>}
                      </label>

                      {field.type === "textarea" ? (
                        <textarea
                          id={`field-${field.id}`}
                          className="form-input min-h-[100px] resize-none"
                          placeholder={field.placeholder}
                          value={(form[field.id] as string) ?? ""}
                          onChange={(e) => updateField(field.id, e.target.value)}
                          aria-invalid={!!errors[field.id]}
                          aria-describedby={errors[field.id] ? `error-${field.id}` : undefined}
                        />
                      ) : field.type === "select" ? (
                        <select
                          id={`field-${field.id}`}
                          className="form-input"
                          value={(form[field.id] as string) ?? ""}
                          onChange={(e) => updateField(field.id, e.target.value)}
                          aria-invalid={!!errors[field.id]}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : field.type === "checkboxes" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                          {field.options?.map((opt) => {
                            const checked = ((form[field.id] as string[]) ?? []).includes(opt);
                            return (
                              <label
                                key={opt}
                                className={cn(
                                  "flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all duration-200 text-xs",
                                  checked
                                    ? "border-[var(--gold-500)] bg-[rgba(212,165,75,0.08)] text-[var(--gold-300)]"
                                    : "border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-default)]"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  className="sr-only"
                                  checked={checked}
                                  onChange={() => toggleCheckbox(field.id, opt)}
                                />
                                <span className={cn(
                                  "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0",
                                  checked ? "border-[var(--gold-400)] bg-[var(--gold-400)]" : "border-[var(--border-default)]"
                                )}>
                                  {checked && <span className="text-[var(--navy-900)] text-[9px] font-black">✓</span>}
                                </span>
                                {opt}
                              </label>
                            );
                          })}
                        </div>
                      ) : field.type === "checkbox-single" ? (
                        <label className="flex items-start gap-3 cursor-pointer mt-1">
                          <div
                            className={cn(
                              "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all",
                              form[field.id]
                                ? "border-[var(--gold-400)] bg-[var(--gold-400)]"
                                : "border-[var(--border-default)]"
                            )}
                            onClick={() => updateField(field.id, !form[field.id])}
                          >
                            {form[field.id] && <span className="text-[var(--navy-900)] text-[10px] font-black">✓</span>}
                          </div>
                          <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {field.label}
                          </span>
                        </label>
                      ) : (
                        <input
                          id={`field-${field.id}`}
                          type={field.type}
                          className="form-input"
                          placeholder={field.placeholder}
                          value={(form[field.id] as string) ?? ""}
                          onChange={(e) => updateField(field.id, e.target.value)}
                          aria-invalid={!!errors[field.id]}
                          aria-describedby={errors[field.id] ? `error-${field.id}` : undefined}
                          required={field.required}
                        />
                      )}

                      {errors[field.id] && (
                        <p id={`error-${field.id}`} className="text-xs text-red-400 mt-1" role="alert">
                          {errors[field.id]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="btn-outline flex-shrink-0"
                  id="register-back"
                  disabled={loading}
                >
                  <ArrowLeft size={15} />
                  <span>Back</span>
                </button>
              )}
              <button
                onClick={handleNext}
                className="btn-primary flex-1 justify-center"
                id="register-next"
                disabled={loading}
              >
                {loading ? (
                  <><Loader size={15} className="animate-spin" /><span>Submitting...</span></>
                ) : step === STEPS.length - 1 ? (
                  <><span>Submit Application</span><CheckCircle size={15} /></>
                ) : (
                  <><span>Continue</span><ArrowRight size={15} /></>
                )}
              </button>
            </div>

            <p className="text-[10px] text-[var(--text-muted)] text-center mt-4">
              Your data is handled in accordance with India's DPDPA 2023. We will never sell or share your information with third parties without consent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
