"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Send, ShieldCheck } from "lucide-react";

import type { Product } from "@/lib/products";

type ReviewFormProps = {
  product: Product;
  turnstileSiteKey?: string;
};

export function ReviewForm({ product, turnstileSiteKey }: ReviewFormProps) {
  const [publicAlias, setPublicAlias] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("4");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [usedProductConfirmation, setUsedProductConfirmation] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productSlug: product.slug,
          rating: Number(rating),
          title,
          body,
          publicAlias,
          email,
          usedProductConfirmation,
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
        setMessage(result.message ?? "Recensionen kunde inte skickas.");
        return;
      }

      setStatus("success");
      setMessage(
        result.message ??
          "Tack! Din recension publiceras först efter manuell granskning.",
      );
      setTitle("");
      setBody("");
      setPublicAlias("");
      setEmail("");
      setRating("4");
      setUsedProductConfirmation(false);
      setGdprConsent(false);
      setHoneypot("");
    } catch {
      setStatus("error");
      setMessage("Recensionen kunde inte skickas just nu.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      ) : null}

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

      <label>
        <span>Alias som visas offentligt</span>
        <input
          value={publicAlias}
          onChange={(event) => setPublicAlias(event.target.value)}
          placeholder="Ex. Sara, M eller anonym"
          minLength={2}
          maxLength={60}
          required
        />
      </label>

      <label>
        <span>E-post (frivilligt, visas aldrig offentligt)</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="namn@example.com"
          maxLength={254}
        />
      </label>

      <label>
        <span>Betyg</span>
        <select value={rating} onChange={(event) => setRating(event.target.value)}>
          <option value="5">5 - Väldigt nöjd</option>
          <option value="4">4 - Bra</option>
          <option value="3">3 - Okej</option>
          <option value="2">2 - Tveksam</option>
          <option value="1">1 - Inte nöjd</option>
        </select>
      </label>

      <label>
        <span>Rubrik</span>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ex. Smidig för korta pass hemma"
          minLength={3}
          maxLength={90}
          required
        />
      </label>

      <label>
        <span>Din ärliga recension</span>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Vad fungerade bra? Vad bör andra veta innan de köper?"
          rows={6}
          minLength={20}
          maxLength={1200}
          required
        />
      </label>

      <label className="review-confirmation">
        <input
          type="checkbox"
          checked={usedProductConfirmation}
          onChange={(event) =>
            setUsedProductConfirmation(event.target.checked)
          }
          required
        />
        <span>
          Jag bekräftar att recensionen bygger på min egen erfarenhet av
          produkten.
        </span>
      </label>

      <label className="review-confirmation">
        <input
          type="checkbox"
          checked={gdprConsent}
          onChange={(event) => setGdprConsent(event.target.checked)}
          required
        />
        <span>
          Jag godkänner att Smart Art AI sparar mitt alias, min recension och
          eventuell e-post för att hantera och moderera recensionen.
        </span>
      </label>

      {turnstileSiteKey ? (
        <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
      ) : null}

      <button type="submit" disabled={status === "submitting"}>
        <Send size={18} aria-hidden="true" />
        {status === "submitting" ? "Skickar..." : "Skicka för granskning"}
      </button>

      {message ? (
        <p
          className={`review-form-message ${
            status === "success" ? "review-form-message-success" : ""
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}

      <p className="flex gap-2 text-sm leading-6 text-ink-soft">
        <ShieldCheck className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
        Recensioner publiceras först efter manuell granskning. Vi visar bara
        ditt alias offentligt. E-post är frivillig, lagras privat och kan raderas
        på begäran enligt vår{" "}
        <Link href="/integritetspolicy" className="font-black underline">
          integritetspolicy
        </Link>
        .
      </p>
    </form>
  );
}
