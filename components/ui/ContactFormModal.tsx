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
  variant?: "default" | "restaurant";
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
  variant = "default",
}: ContactFormModalProps) {
  const t = copy[locale];
  const isRestaurant = variant === "restaurant";
  const title =
    isRestaurant && locale === "sv"
      ? "Boka gratis menygenomgång"
      : isRestaurant
        ? "Book a free menu review"
        : t.title;
  const subtitle =
    isRestaurant && locale === "sv"
      ? "Lämna dina kontaktuppgifter så återkommer vi med ett konkret förslag för din meny."
      : isRestaurant
        ? "Leave your contact details and we will follow up with a concrete menu proposal."
        : t.subtitle;
  const eyebrow = isRestaurant ? "Nord Smart Menu" : "Smart Art AI";
  const submitLabel =
    isRestaurant && locale === "sv"
      ? "Skicka menyförfrågan"
      : isRestaurant
        ? "Send menu request"
        : t.submit;
  const panelClassName = isRestaurant
    ? "relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-[var(--restaurant-border)] bg-[var(--restaurant-surface)] text-[var(--restaurant-text)] shadow-[0_34px_110px_rgba(60,32,18,0.28)]"
    : "sai-panel relative w-full max-w-xl overflow-hidden";
  const overlayClassName = isRestaurant
    ? "absolute inset-0 bg-[rgba(22,15,11,0.72)] backdrop-blur-xl"
    : "absolute inset-0 bg-black/82 backdrop-blur-xl";
  const topLineClassName = isRestaurant
    ? "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--restaurant-tomato)] to-transparent"
    : "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent";
  const eyebrowClassName = isRestaurant
    ? "restaurant-eyebrow"
    : "sai-eyebrow";
  const titleClassName = isRestaurant
    ? "mt-3 text-3xl font-black tracking-normal text-[var(--restaurant-text)]"
    : "mt-3 text-3xl font-black tracking-tight text-white";
  const subtitleClassName = isRestaurant
    ? "mt-4 max-w-lg leading-7 text-[var(--restaurant-muted)]"
    : "mt-4 max-w-lg leading-7 text-[var(--text-muted)]";
  const closeClassName = isRestaurant
    ? "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--restaurant-border)] bg-[var(--restaurant-surface-warm)] text-[var(--restaurant-muted)] transition hover:text-[var(--restaurant-tomato)]"
    : "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/[0.035] text-[var(--text-muted)] transition hover:text-white";
  const inputClassName = isRestaurant
    ? "h-14 w-full rounded-xl border border-[var(--restaurant-border)] bg-white py-0 pl-12 pr-4 text-[var(--restaurant-text)] outline-none transition focus:border-[rgba(217,79,48,0.45)] focus:bg-[#fff8ef]"
    : "sai-input py-4 pl-12 pr-4";
  const submitClassName = isRestaurant
    ? "restaurant-button restaurant-button-primary w-full disabled:opacity-60"
    : "sai-button sai-button-primary w-full disabled:opacity-60";
  const successIconClassName = isRestaurant
    ? "mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(217,79,48,0.22)] bg-[#fff0e6] text-[var(--restaurant-tomato)]"
    : "mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]";
  const successTitleClassName = isRestaurant
    ? "text-2xl font-black tracking-normal text-[var(--restaurant-text)]"
    : "text-2xl font-black tracking-tight text-white";
  const successBodyClassName = isRestaurant
    ? "mt-3 max-w-sm leading-7 text-[var(--restaurant-muted)]"
    : "mt-3 max-w-sm leading-7 text-[var(--text-muted)]";
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
            className={overlayClassName}
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
            className={panelClassName}
          >
            <div className={topLineClassName} />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={eyebrowClassName}>{eyebrow}</p>
                  <h3 id={titleId} className={titleClassName}>{title}</h3>
                  <p id={descriptionId} className={subtitleClassName}>{subtitle}</p>
                  {introMessage && !isRestaurant ? (
                    <div className="mt-5 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] px-4 py-3 text-sm font-medium leading-6 text-[var(--accent-primary)]">
                      {introMessage}
                    </div>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className={closeClassName}
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
                  <div className={successIconClassName}>
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className={successTitleClassName}>{t.successTitle}</h4>
                  <p className={successBodyClassName}>{t.successBody}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={isRestaurant ? "mt-7 space-y-5" : "mt-8 space-y-4"}>
                  <div className={isRestaurant ? "grid items-start gap-x-5 gap-y-4 sm:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
                    <Field label={t.name} icon={<User className="h-4 w-4" />} variant={variant}>
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, fullName: event.target.value }))
                        }
                        className={inputClassName}
                      />
                    </Field>

                    <Field label={t.email} hint={t.emailHint} icon={<Mail className="h-4 w-4" />} variant={variant}>
                      <input
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, email: event.target.value }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                    <Field label={`${t.organization} (${t.optional})`} icon={<Building2 className="h-4 w-4" />} variant={variant}>
                      <input
                        name="organization"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, organization: event.target.value }))
                        }
                        className={inputClassName}
                      />
                    </Field>

                    <Field label={`${t.phone} (${t.optional})`} icon={<Phone className="h-4 w-4" />} variant={variant}>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, phone: event.target.value }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  {error ? <p className={isRestaurant ? "text-sm text-[#b42318]" : "text-sm text-red-300"}>{error}</p> : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className={submitClassName}
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span>{submitLabel}</span>
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
  variant = "default",
}: {
  label: string;
  hint?: string;
  icon: ReactNode;
  children: ReactNode;
  variant?: "default" | "restaurant";
}) {
  const isRestaurant = variant === "restaurant";

  return (
    <label className={isRestaurant ? "grid min-w-0 gap-2" : "space-y-2"}>
      <div className={isRestaurant ? "flex min-h-8 items-end justify-between gap-3" : "flex items-center justify-between gap-3"}>
        <span className={isRestaurant ? "text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-[var(--restaurant-muted)]" : "sai-eyebrow text-[var(--text-muted)]"}>{label}</span>
        {hint ? <span className={isRestaurant ? "shrink-0 text-[10px] font-black uppercase leading-4 tracking-[0.18em] text-[var(--restaurant-tomato)]" : "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-primary)]"}>{hint}</span> : null}
      </div>
      <div className="relative">
        <span className={isRestaurant ? "absolute left-4 top-1/2 -translate-y-1/2 text-[var(--restaurant-muted)]" : "absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"}>{icon}</span>
        {children}
      </div>
    </label>
  );
}
