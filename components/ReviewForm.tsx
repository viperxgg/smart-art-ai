"use client";

import { FormEvent, useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";

import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function ReviewForm({ product }: { product: Product }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("4");
  const [comment, setComment] = useState("");
  const [context, setContext] = useState("");

  const mailto = useMemo(() => {
    const subject = `Ärlig kommentar: ${product.title}`;
    const body = [
      `Produkt: ${product.title}`,
      `ASIN: ${product.asin}`,
      `Namn: ${name || "-"}`,
      `Betyg: ${rating}/5`,
      "",
      "Hur använde du produkten?",
      context || "-",
      "",
      "Din ärliga kommentar:",
      comment || "-",
    ].join("\n");

    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [comment, context, name, product.asin, product.title, rating]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        <span>Namn eller alias</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex. Elin, Sara eller anonym"
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
        <span>Hur använde du produkten?</span>
        <textarea
          value={context}
          onChange={(event) => setContext(event.target.value)}
          placeholder="Ex. hemmaträning, frukost, kontor, resa..."
          rows={3}
        />
      </label>

      <label>
        <span>Din ärliga kommentar</span>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Vad fungerade bra? Vad bör andra veta innan de köper?"
          rows={6}
          required
        />
      </label>

      <button type="submit">
        <Send size={18} aria-hidden="true" />
        Skicka via e-post
      </button>

      <p className="flex gap-2 text-sm leading-6 text-white/55">
        <Mail className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
        Kommentaren skickas till {siteConfig.email} för manuell granskning innan
        den används på sidan.
      </p>
    </form>
  );
}
