"use client";

import type { FormEvent, ReactNode } from "react";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CheckCircle2, Loader2, Mail, Phone, Send, User, X } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: "sv" | "en";
  serviceType?: string;
  sourcePage?: string;
  ctaContext?: string;
  introMessage?: string;
}

const copy = {
  sv: {
    title: "Boka konsultation",
    subtitle:
      "Lämna dina kontaktuppgifter så återkommer vi med ett konkret nästa steg.",
    name: "Namn",
    email: "E-postadress",
    emailHint: "Viktigast",
    organization: "Restaurang / företag",
    phone: "Telefonnummer",
    optional: "frivilligt",
    submit: "Skicka förfrågan",
    successTitle: "Tack",
    successBody: "Vi har mottagit din förfrågan och återkommer vanligtvis via e-post inom 24 timmar.",
    error: "Något gick fel. Försök igen.",
    close: "Stäng formulär",
  },
  en: {
    title: "Book a consultation",
    subtitle:
      "Leave your contact details and we will follow up with a concrete next step.",
    name: "Name",
    email: "Email address",
    emailHint: "Required",
    organization: "Restaurant / company",
    phone: "Phone number",
    optional: "optional",
    submit: "Send request",
    successTitle: "Thanks",
    successBody: "We received your request and usually follow up by email within 24 hours.",
    error: "Something went wrong. Please try again.",
    close: "Close form",
  },
} as const;

export default function ContactFormModal({
  isOpen,
  onClose,
  locale = "sv",
  serviceType = "Smart Art AI Consultation",
  sourcePage = "/",
  ctaContext = "generic",
  introMessage,
}: ContactFormModalProps) {
  const t = copy[locale];
  const titleId = useId();
  const descriptionId = useId();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
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
          Name: formData.fullName,
          Email: formData.email,
          Phone: formData.phone || "",
          Organization: formData.organization || "",
          Service: serviceType,
          Locale: locale,
          SourcePage: sourcePage,
          CTAContext: ctaContext,
          Subject:
            locale === "sv"
              ? `Ny demoförfrågan: ${serviceType}`
              : `New demo request: ${serviceType}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
        });
        onClose();
      }, 2200);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label={t.close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/82 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="sai-panel relative w-full max-w-xl overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="sai-eyebrow">Smart Art AI</p>
                  <h3 id={titleId} className="mt-3 text-3xl font-black tracking-tight text-white">{t.title}</h3>
                  <p id={descriptionId} className="mt-4 max-w-lg leading-7 text-[var(--text-muted)]">{t.subtitle}</p>
                  {introMessage ? (
                    <div className="mt-5 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] px-4 py-3 text-sm font-medium leading-6 text-[var(--accent-primary)]">
                      {introMessage}
                    </div>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/[0.035] text-[var(--text-muted)] transition hover:text-white"
                  aria-label={t.close}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-14 text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight text-white">{t.successTitle}</h4>
                  <p className="mt-3 max-w-sm leading-7 text-[var(--text-muted)]">{t.successBody}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label={t.name} icon={<User className="h-4 w-4" />}>
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, fullName: event.target.value }))
                        }
                        className="sai-input py-4 pl-12 pr-4"
                      />
                    </Field>

                    <Field label={t.email} hint={t.emailHint} icon={<Mail className="h-4 w-4" />}>
                      <input
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, email: event.target.value }))
                        }
                        className="sai-input py-4 pl-12 pr-4"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label={`${t.organization} (${t.optional})`} icon={<Building2 className="h-4 w-4" />}>
                      <input
                        name="organization"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, organization: event.target.value }))
                        }
                        className="sai-input py-4 pl-12 pr-4"
                      />
                    </Field>

                    <Field label={`${t.phone} (${t.optional})`} icon={<Phone className="h-4 w-4" />}>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, phone: event.target.value }))
                        }
                        className="sai-input py-4 pl-12 pr-4"
                      />
                    </Field>
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

function Field({
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
