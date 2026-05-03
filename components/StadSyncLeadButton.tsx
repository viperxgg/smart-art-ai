"use client";

import { type FormEvent, type ReactNode } from "react";
import { Check, Mail, Phone, Send, User, X } from "lucide-react";

type StadSyncLeadButtonProps = {
  children: ReactNode;
  className: string;
  modalId: string;
  locale?: "sv" | "en";
  planName?: string;
  planSubtitle?: string;
  planPrice?: string;
};

const copy = {
  sv: {
    title: "Boka teknisk genomgång",
    intro:
      "Lämna dina kontaktuppgifter så återkommer vi med ett konkret upplägg för paketet.",
    name: "Namn",
    email: "E-post",
    phone: "Telefonnummer",
    namePlaceholder: "Ditt namn",
    emailPlaceholder: "namn@foretag.se",
    phonePlaceholder: "+46 ...",
    submit: "Skicka förfrågan",
    successTitle: "Tack",
    successBody: "Dina uppgifter har skickats. Vi återkommer vanligtvis inom 24 timmar.",
    requiredError: "Fyll i namn, e-post och telefonnummer.",
    requestError: "Något gick fel. Försök igen eller mejla hello@smartartai.se.",
    close: "Stäng formulär",
    service: "StädSync AI",
    ctaContext: "Teknisk genomgång och 30 dagars utvärdering",
  },
  en: {
    title: "Book technical walkthrough",
    intro:
      "Leave your contact details and we will follow up with a concrete setup for the package.",
    name: "Name",
    email: "Email",
    phone: "Phone number",
    namePlaceholder: "Your name",
    emailPlaceholder: "name@company.com",
    phonePlaceholder: "+46 ...",
    submit: "Send request",
    successTitle: "Thanks",
    successBody: "Your details have been sent. We usually follow up within 24 hours.",
    requiredError: "Fill in name, email, and phone number.",
    requestError: "Something went wrong. Try again or email hello@smartartai.se.",
    close: "Close form",
    service: "StädSync AI",
    ctaContext: "Technical walkthrough and 30-day evaluation",
  },
} as const;

export default function StadSyncLeadButton({
  children,
  className,
  modalId,
  locale = "sv",
  planName = "Tillväxt",
  planSubtitle = "För 6 till 15 anställda",
  planPrice = "1 999 kr/mån",
}: StadSyncLeadButtonProps) {
  const t = copy[locale];

  function openModal() {
    const modal = document.getElementById(modalId);

    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById(modalId);
    const form = modal?.querySelector<HTMLFormElement>("[data-lead-form]");
    const success = modal?.querySelector<HTMLElement>("[data-success]");
    const error = modal?.querySelector<HTMLElement>("[data-error]");
    const submit = modal?.querySelector<HTMLButtonElement>("[data-submit]");

    modal?.classList.add("hidden");
    modal?.classList.remove("flex");
    form?.classList.remove("hidden");
    success?.classList.add("hidden");

    if (error) {
      error.textContent = "";
      error.classList.add("hidden");
    }

    if (submit) {
      submit.disabled = false;
    }

    document.body.style.overflow = "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const modal = document.getElementById(modalId);
    const success = modal?.querySelector<HTMLElement>("[data-success]");
    const error = modal?.querySelector<HTMLElement>("[data-error]");
    const submit = modal?.querySelector<HTMLButtonElement>("[data-submit]");
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!name || !email || !phone) {
      if (error) {
        error.textContent = t.requiredError;
        error.classList.remove("hidden");
      }

      return;
    }

    if (submit) {
      submit.disabled = true;
    }

    if (error) {
      error.textContent = "";
      error.classList.add("hidden");
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phone,
          Service: t.service,
          Product: t.service,
          Plan: planName,
          SourcePage: "/stadsync-ai",
          CTAContext: t.ctaContext,
          Subject:
            locale === "sv"
              ? `Ny förfrågan: StädSync AI - ${planName}`
              : `New request: StädSync AI - ${planName}`,
          Message:
            locale === "sv"
              ? `Kunden vill boka teknisk genomgång för StädSync AI ${planName} (${planSubtitle}) för ${planPrice}.`
              : `The customer wants a technical walkthrough for StädSync AI ${planName} (${planSubtitle}) at ${planPrice}.`,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.classList.add("hidden");
      success?.classList.remove("hidden");
      form.reset();

      setTimeout(() => {
        closeModal();
      }, 2400);
    } catch {
      if (error) {
        error.textContent = t.requestError;
        error.classList.remove("hidden");
      }

      if (submit) {
        submit.disabled = false;
      }
    }
  }

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {children}
      </button>

      <div id={modalId} className="fixed inset-0 z-[9999] hidden items-center justify-center px-4 py-6">
        <button
          type="button"
          aria-label={t.close}
          className="absolute inset-0 bg-black/82 backdrop-blur-xl"
          onClick={closeModal}
        />

        <div className="sai-panel relative w-full max-w-lg overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />

          <div className="relative p-6 md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="sai-eyebrow">StädSync AI</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                  {t.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{t.intro}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/[0.035] text-[var(--text-muted)] transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-white">{planName}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{planSubtitle}</p>
                </div>
                <p className="text-2xl font-black text-white">{planPrice}</p>
              </div>
            </div>

            <div data-success className="hidden py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]">
                <Check className="h-8 w-8" />
              </div>
              <h4 className="mt-5 text-2xl font-black text-white">{t.successTitle}</h4>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{t.successBody}</p>
            </div>

            <form data-lead-form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <label className="block">
                <span className="sai-eyebrow text-[var(--text-muted)]">{t.name}</span>
                <div className="relative mt-2">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="sai-input py-3 pl-11 pr-4 placeholder:text-white/24"
                    placeholder={t.namePlaceholder}
                  />
                </div>
              </label>

              <label className="block">
                <span className="sai-eyebrow text-[var(--text-muted)]">{t.email}</span>
                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="sai-input py-3 pl-11 pr-4 placeholder:text-white/24"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </label>

              <label className="block">
                <span className="sai-eyebrow text-[var(--text-muted)]">{t.phone}</span>
                <div className="relative mt-2">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="sai-input py-3 pl-11 pr-4 placeholder:text-white/24"
                    placeholder={t.phonePlaceholder}
                  />
                </div>
              </label>

              <p data-error className="hidden text-sm font-semibold text-red-300" />

              <button
                type="submit"
                data-submit
                className="sai-button sai-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
