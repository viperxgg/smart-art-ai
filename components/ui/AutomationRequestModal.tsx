"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Lightbulb,
  Loader2,
  Mail,
  Phone,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";

type Locale = "sv" | "en";

interface AutomationRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
  sourcePage?: string;
  ctaContext?: string;
}

const copy = {
  sv: {
    eyebrow: "AI-automation",
    title: "Beskriv processen du vill automatisera.",
    subtitle:
      "Skriv kort vad som tar tid, var informationen finns och vad som ska hända automatiskt.",
    promptLabel: "Vad vill du automatisera?",
    promptPlaceholder:
      "Exempel: Vi kopierar kunddata från mejl till Excel varje dag och vill automatisera sortering, uppföljning och rapportering.",
    contactTitle: "Kontaktuppgifter",
    name: "Namn",
    email: "E-postadress",
    emailHint: "Viktigast",
    organization: "Företag",
    phone: "Telefonnummer",
    optional: "frivilligt",
    submit: "Skicka förfrågan",
    successTitle: "Tack",
    successBody:
      "Vi har mottagit din beskrivning och återkommer via e-post med ett konkret nästa steg.",
    error: "Något gick fel. Försök igen.",
    close: "Stäng formulär",
  },
  en: {
    eyebrow: "AI automation",
    title: "Describe the process you want to automate.",
    subtitle:
      "Briefly explain what takes time, where the information lives, and what should happen automatically.",
    promptLabel: "What do you want to automate?",
    promptPlaceholder:
      "Example: We copy customer data from email to Excel every day and want to automate sorting, follow-up, and reporting.",
    contactTitle: "Contact details",
    name: "Name",
    email: "Email address",
    emailHint: "Required",
    organization: "Company",
    phone: "Phone number",
    optional: "optional",
    submit: "Send request",
    successTitle: "Thanks",
    successBody:
      "We received your description and will follow up by email with a concrete next step.",
    error: "Something went wrong. Please try again.",
    close: "Close form",
  },
} as const;

export default function AutomationRequestModal({
  isOpen,
  onClose,
  locale = "sv",
  sourcePage = "/",
  ctaContext = "navbar-discover",
}: AutomationRequestModalProps) {
  const t = copy[locale];
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    message: "",
    fullName: "",
    email: "",
    organization: "",
    phone: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.message.trim() || !formData.fullName.trim() || !formData.email.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Subject:
            locale === "sv"
              ? "Ny automationsförfrågan - Smart Art AI"
              : "New automation request - Smart Art AI",
          Name: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          Organization: formData.organization,
          Service: locale === "sv" ? "AI-automation" : "AI automation",
          Message: formData.message,
          Locale: locale,
          SourcePage: sourcePage,
          CTAContext: ctaContext,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          message: "",
          fullName: "",
          email: "",
          organization: "",
          phone: "",
        });
        onClose();
      }, 2400);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4">
          <motion.button
            type="button"
            aria-label={t.close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/84 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.98 }}
            className="sai-panel relative my-8 w-full max-w-3xl overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />

            <div className="relative p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="sai-chip">
                    <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
                    {t.eyebrow}
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
                    {t.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">{t.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/[0.035] text-[var(--text-muted)] transition hover:text-white"
                  aria-label={t.close}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight text-white">{t.successTitle}</h4>
                  <p className="mt-3 max-w-md leading-7 text-[var(--text-muted)]">{t.successBody}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <label className="block space-y-3">
                    <span className="sai-eyebrow flex items-center gap-2 text-[var(--text-muted)]">
                      <Lightbulb className="h-4 w-4 text-[var(--accent-primary)]" />
                      {t.promptLabel}
                    </span>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, message: event.target.value }))
                      }
                      placeholder={t.promptPlaceholder}
                      className="sai-input min-h-40 resize-none px-5 py-4 placeholder:text-white/28"
                    />
                  </label>

                  <div className="sai-card p-4 md:p-5">
                    <h4 className="sai-eyebrow text-[var(--text-muted)]">{t.contactTitle}</h4>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <InputField label={t.name} icon={<User className="h-4 w-4" />}>
                        <input
                          required
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={(event) =>
                            setFormData((current) => ({ ...current, fullName: event.target.value }))
                          }
                          className="sai-input py-4 pl-11 pr-4"
                        />
                      </InputField>

                      <InputField label={t.email} hint={t.emailHint} icon={<Mail className="h-4 w-4" />}>
                        <input
                          required
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(event) =>
                            setFormData((current) => ({ ...current, email: event.target.value }))
                          }
                          className="sai-input py-4 pl-11 pr-4"
                        />
                      </InputField>

                      <InputField label={`${t.organization} (${t.optional})`} icon={<Building2 className="h-4 w-4" />}>
                        <input
                          autoComplete="organization"
                          value={formData.organization}
                          onChange={(event) =>
                            setFormData((current) => ({ ...current, organization: event.target.value }))
                          }
                          className="sai-input py-4 pl-11 pr-4"
                        />
                      </InputField>

                      <InputField label={`${t.phone} (${t.optional})`} icon={<Phone className="h-4 w-4" />}>
                        <input
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(event) =>
                            setFormData((current) => ({ ...current, phone: event.target.value }))
                          }
                          className="sai-input py-4 pl-11 pr-4"
                        />
                      </InputField>
                    </div>
                  </div>

                  {error ? <p className="text-sm text-red-300">{error}</p> : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="sai-button sai-button-primary w-full disabled:opacity-60"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span>{t.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function InputField({
  label,
  hint,
  icon,
  children,
}: {
  label: string;
  hint?: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="sai-eyebrow text-[var(--text-muted)]">{label}</span>
        {hint ? <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-primary)]">{hint}</span> : null}
      </div>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">{icon}</span>
        {children}
      </div>
    </label>
  );
}
