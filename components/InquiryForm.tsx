"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Mail, ShieldCheck } from "lucide-react";

type InquiryFormProps = {
  turnstileSiteKey?: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  gdprConsent?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function InquiryForm({ turnstileSiteKey }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = "Skriv minst två tecken.";
    }

    if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Skriv en giltig e-postadress.";
    }

    if (messageBody.trim().length < 10) {
      nextErrors.message = "Skriv ett lite tydligare meddelande.";
    }

    if (!gdprConsent) {
      nextErrors.gdprConsent = "Du behöver godkänna detta för att vi ska kunna svara.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: messageBody,
          gdprConsent,
          honeypot,
          turnstileToken: formData.get("cf-turnstile-response") ?? "",
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setStatusMessage(result.message ?? "Meddelandet kunde inte skickas.");
        return;
      }

      setStatus("success");
      setStatusMessage(
        result.message ??
          "Tack! Vi har tagit emot ditt meddelande och återkommer via e-post så snart vi kan.",
      );
      setName("");
      setEmail("");
      setMessageBody("");
      setGdprConsent(false);
      setHoneypot("");
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage("Meddelandet kunde inte skickas just nu.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-[#F1D8DD] bg-white/80 p-5 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-7"
    >
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      ) : null}

      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FDE8EC] text-[#B983A6]">
          <Mail size={20} aria-hidden="true" />
        </span>
        <div>
          <h2 className="editorial-color-kiss font-display text-3xl">Skriv till oss</h2>
          <p className="mt-2 leading-7 text-[#6f5a64]">
            Skicka ett kort meddelande så svarar vi via e-post. Det här är bara
            starten på samtalet, inte en produktinlämning.
          </p>
        </div>
      </div>

      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-black text-[#4B2838]">Namn</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            className="min-h-12 rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] px-4 font-semibold text-[#3E2F3A] outline-none transition focus:border-[#D8788D]"
          />
          {errors.name ? (
            <span className="text-sm font-bold text-[#A53D55]">{errors.name}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black text-[#4B2838]">E-post</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            maxLength={254}
            autoComplete="email"
            className="min-h-12 rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] px-4 font-semibold text-[#3E2F3A] outline-none transition focus:border-[#D8788D]"
          />
          {errors.email ? (
            <span className="text-sm font-bold text-[#A53D55]">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black text-[#4B2838]">Meddelande</span>
          <textarea
            value={messageBody}
            onChange={(event) => setMessageBody(event.target.value)}
            required
            minLength={10}
            maxLength={3000}
            rows={7}
            className="rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] px-4 py-3 font-semibold leading-7 text-[#3E2F3A] outline-none transition focus:border-[#D8788D]"
          />
          {errors.message ? (
            <span className="text-sm font-bold text-[#A53D55]">
              {errors.message}
            </span>
          ) : null}
        </label>

        <label className="flex gap-3 rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] p-4 text-sm font-bold leading-6 text-[#6f5a64]">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(event) => setGdprConsent(event.target.checked)}
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#D8788D]"
          />
          <span>
            Jag godkänner att min e-post och mitt meddelande används för att
            svara mig
          </span>
        </label>
        {errors.gdprConsent ? (
          <span className="text-sm font-bold text-[#A53D55]">
            {errors.gdprConsent}
          </span>
        ) : null}

        {turnstileSiteKey ? (
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D8788D] px-6 text-base font-black text-white shadow-[0_20px_50px_rgba(216,120,141,0.28)] transition hover:bg-[#B983A6] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Skickar..." : "Skicka meddelande"}
        </button>

        {statusMessage ? (
          <p
            role="status"
            className={`rounded-2xl p-4 text-sm font-bold leading-6 ${
              status === "success"
                ? "bg-[#F2FFF7] text-[#2D6B44]"
                : "bg-[#FFF0F2] text-[#A53D55]"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}

        <p className="flex gap-2 text-sm leading-6 text-[#6f5a64]">
          <ShieldCheck
            className="mt-0.5 shrink-0"
            size={16}
            aria-hidden="true"
          />
          Vi använder uppgifterna endast för att svara på din förfrågan. Läs mer
          i vår{" "}
          <Link href="/integritetspolicy" className="font-black underline">
            integritetspolicy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
