"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Loader2, Send, Trash2 } from "lucide-react";
import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";

import type { ProductCategorySlug } from "@/lib/products";

export type ElinFocus = {
  slug: string;
  title: string;
  category: ProductCategorySlug;
};

type ProductCard = {
  slug: string;
  title: string;
  brand: string;
  pageHref: string;
  image: string;
  amazonUrl: string;
  poang: number | null;
  tier: "budget" | "mellan" | "premium";
  tierLabel: string;
  tierIcon: string;
  verdict: string;
  varfor?: string;
  fordelar?: string[];
  uses?: string[];
  rating?: string;
  ratingShort?: string;
  bestseller?: boolean;
  reviewHighlights?: string[];
  caution?: string;
  video?: { src: string; poster: string; title: string } | null;
  reviewQuote?: { name: string; text: string; rating: number } | null;
};

type WishlistCard = Pick<
  ProductCard,
  | "slug"
  | "title"
  | "brand"
  | "pageHref"
  | "image"
  | "amazonUrl"
  | "poang"
  | "tierLabel"
  | "tierIcon"
  | "verdict"
  | "ratingShort"
  | "bestseller"
>;

type ConversationMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  products?: ProductCard[];
  followUps?: string[];
};

type StreamEvent =
  | { type: "delta"; value: string }
  | { type: "meta"; produkter?: ProductCard[]; foljdfragor?: string[] }
  | { type: "error"; value: string }
  | { type: "done" };

type ElinChatProps = {
  focus?: ElinFocus | null;
  initialPrompt?: string;
  prefillKey?: number;
  compact?: boolean;
  hideMobileNav?: boolean;
  showExamples?: boolean;
  emptyTitle?: string;
  emptyText?: string;
  className?: string;
};

const examples = [
  "Kombinerad, känslig hud – var börjar jag?",
  "💫 Bygg en rutin åt mig",
  "Är en dyr massagepistol värt det?",
  "Billigare alternativ till ett dyrt serum?",
];

const storageKey = "elin-chat-v1";
const wishlistStorageKey = "elin-wishlist-v1";
const maxStoredMessages = 20;
const maxWishlistItems = 30;
const elinAvatarSrc = "/elin/elin-avatar.webp";

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isProductCard(value: unknown): value is ProductCard {
  if (!value || typeof value !== "object") {
    return false;
  }

  const card = value as Record<string, unknown>;

  return (
    typeof card.slug === "string" &&
    typeof card.title === "string" &&
    typeof card.brand === "string" &&
    typeof card.pageHref === "string" &&
    typeof card.image === "string" &&
    typeof card.amazonUrl === "string" &&
    (typeof card.poang === "number" || card.poang === null) &&
    (card.tier === "budget" || card.tier === "mellan" || card.tier === "premium") &&
    typeof card.tierLabel === "string" &&
    typeof card.tierIcon === "string" &&
    typeof card.verdict === "string"
  );
}

function isConversationMessage(value: unknown): value is ConversationMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Record<string, unknown>;
  return (
    typeof message.id === "string" &&
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    (typeof message.products === "undefined" ||
      (Array.isArray(message.products) && message.products.every(isProductCard))) &&
    (typeof message.followUps === "undefined" ||
      (Array.isArray(message.followUps) &&
        message.followUps.every((item) => typeof item === "string")))
  );
}

function isWishlistCard(value: unknown): value is WishlistCard {
  if (!value || typeof value !== "object") {
    return false;
  }

  const card = value as Record<string, unknown>;

  return (
    typeof card.slug === "string" &&
    typeof card.title === "string" &&
    typeof card.brand === "string" &&
    typeof card.pageHref === "string" &&
    typeof card.image === "string" &&
    typeof card.amazonUrl === "string" &&
    (typeof card.poang === "number" || card.poang === null) &&
    typeof card.tierLabel === "string" &&
    typeof card.tierIcon === "string" &&
    typeof card.verdict === "string" &&
    (typeof card.ratingShort === "string" || typeof card.ratingShort === "undefined") &&
    (typeof card.bestseller === "boolean" || typeof card.bestseller === "undefined")
  );
}

function toWishlistCard(product: ProductCard): WishlistCard {
  return {
    slug: product.slug,
    title: product.title,
    brand: product.brand,
    pageHref: product.pageHref,
    image: product.image,
    amazonUrl: product.amazonUrl,
    poang: product.poang,
    tierLabel: product.tierLabel,
    tierIcon: product.tierIcon,
    verdict: product.verdict,
    ratingShort: product.ratingShort,
    bestseller: product.bestseller,
  };
}

function useElinAvatarAvailable() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(elinAvatarSrc, { method: "HEAD", cache: "force-cache" })
      .then((response) => {
        if (isMounted) {
          setIsAvailable(response.ok);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsAvailable(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return isAvailable;
}

function ElinAvatar({
  visible,
  size = "md",
}: {
  visible: boolean;
  size?: "sm" | "md";
}) {
  if (!visible) {
    return null;
  }

  const sizeClass = size === "sm" ? "size-8" : "size-11";

  return (
    <span
      className={`${sizeClass} relative shrink-0 overflow-hidden rounded-full border border-[#F1D8DD] bg-[#FFF1F3] shadow-[0_10px_24px_rgba(216,120,141,0.18)]`}
      aria-hidden="true"
    >
      <Image src={elinAvatarSrc} alt="" fill sizes="44px" className="object-cover" />
    </span>
  );
}

function renderInlineMarkdown(text: string) {
  const elements: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      elements.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const href = linkMatch?.[2] ?? "#";
      const isSafeHref = href.startsWith("/") || href.startsWith("https://");
      elements.push(
        <a
          key={`${match.index}-link`}
          href={isSafeHref ? href : "#"}
          target={href.startsWith("https://") ? "_blank" : undefined}
          rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
          className="font-black text-[#D8788D] underline decoration-[#F1D8DD] underline-offset-4"
        >
          {linkMatch?.[1] ?? token}
        </a>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}

function MarkdownText({ text }: { text: string }) {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3 text-sm leading-6 text-[#4B2838] sm:text-[0.95rem] sm:leading-7">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").map((line) => line.trim());
        const listItems = lines
          .filter((line) => /^[-*]\s+/.test(line))
          .map((line) => line.replace(/^[-*]\s+/, ""));

        if (listItems.length === lines.length) {
          return (
            <ul key={blockIndex} className="space-y-2 pl-4">
              {listItems.map((item, itemIndex) => (
                <li key={`${blockIndex}-${itemIndex}`} className="list-disc">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          );
        }

        return <p key={blockIndex}>{renderInlineMarkdown(block)}</p>;
      })}
    </div>
  );
}

function ProductCardView({
  product,
  isSaved,
  onToggleSave,
  onAsk,
}: {
  product: ProductCard;
  isSaved: boolean;
  onToggleSave: (product: ProductCard) => void;
  onAsk: (question: string) => void;
}) {
  const [open, setOpen] = useState<"fordelar" | "anvandning" | "folk" | "video" | null>(null);

  const fordelar = product.fordelar ?? [];
  const uses = product.uses ?? [];
  const highlights = product.reviewHighlights ?? [];
  const hasFolk = Boolean(product.rating || highlights.length || product.reviewQuote);
  const video = product.video ?? null;

  const tabs: { key: "fordelar" | "anvandning" | "folk" | "video"; label: string }[] = [];
  if (fordelar.length) tabs.push({ key: "fordelar", label: "✨ Fördelar" });
  if (uses.length) tabs.push({ key: "anvandning", label: "🧴 Så använder du den" });
  if (hasFolk) tabs.push({ key: "folk", label: "💬 Vad folk säger" });
  if (video) tabs.push({ key: "video", label: "▶ Se videon" });

  return (
    <div className="rounded-[1rem] border border-[#F1D8DD] bg-[#FFF9F7] p-3">
      <div className="flex min-w-0 gap-3">
        <span className="relative size-16 shrink-0 overflow-hidden rounded-[0.85rem] bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#D8788D]">
              {product.brand}
            </span>
            {product.poang != null ? (
              <span className="rounded-full bg-[#4B2838] px-2 py-0.5 text-[0.65rem] font-black text-[#FFF9F7]">
                Elins poäng {product.poang}
              </span>
            ) : null}
            {product.ratingShort ? (
              <span className="rounded-full bg-[#FFF1F3] px-2 py-0.5 text-[0.65rem] font-black text-[#D8788D]">
                ★ {product.ratingShort}
              </span>
            ) : null}
            {product.bestseller ? (
              <span className="rounded-full border border-[#F4D9A5] bg-[#FFF4D6] px-2 py-0.5 text-[0.65rem] font-black text-[#8A5B12]">
                Populärast just nu
              </span>
            ) : null}
          </div>
          <Link
            href={product.pageHref}
            className="mt-1 block text-sm font-black leading-5 text-[#4B2838] hover:underline"
          >
            {product.title}
          </Link>
          <p className="mt-0.5 text-xs text-[#6f5a64]">
            <span className="font-bold">{product.tierIcon} {product.tierLabel}</span>
            {product.verdict ? ` · ${product.verdict}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onToggleSave(product)}
          aria-label={isSaved ? "Ta bort från min lista" : "Spara till min lista"}
          aria-pressed={isSaved}
          className={`grid min-h-10 min-w-10 shrink-0 place-items-center rounded-full border transition hover:-translate-y-0.5 ${
            isSaved
              ? "border-[#D8788D] bg-[#D8788D] text-[#FFF9F7]"
              : "border-[#F1D8DD] bg-white text-[#D8788D] hover:bg-[#FFF1F3]"
          }`}
        >
          <Heart
            className="size-4"
            fill={isSaved ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>
      </div>

      {product.varfor ? (
        <p className="mt-3 rounded-[0.8rem] bg-[#FFF1F3] px-3 py-2 text-xs leading-5 text-[#4B2838]">
          <span className="font-black text-[#D8788D]">Perfekt för dig eftersom </span>
          {product.varfor}
        </p>
      ) : null}

      {tabs.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setOpen((current) => (current === tab.key ? null : tab.key))}
              className={`min-h-8 rounded-full border px-2.5 text-[0.7rem] font-bold transition ${
                open === tab.key
                  ? "border-[#D8788D] bg-[#D8788D] text-[#FFF9F7]"
                  : "border-[#F1D8DD] bg-white text-[#4B2838] hover:bg-[#FFF1F3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : null}

      {open === "fordelar" && fordelar.length ? (
        <ul className="mt-2 space-y-1 rounded-[0.8rem] bg-white p-3 text-xs leading-5 text-[#4B2838]">
          {fordelar.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {open === "anvandning" && uses.length ? (
        <ul className="mt-2 space-y-1 rounded-[0.8rem] bg-white p-3 text-xs leading-5 text-[#4B2838]">
          {uses.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {open === "folk" && hasFolk ? (
        <div className="mt-2 space-y-2 rounded-[0.8rem] bg-white p-3 text-xs leading-5 text-[#4B2838]">
          {product.rating ? <p className="font-bold">{product.rating}</p> : null}
          {highlights.length ? (
            <ul className="space-y-1">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">💬</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {product.reviewQuote ? (
            <p className="rounded-[0.7rem] bg-[#FFF9F7] p-2 italic text-[#6f5a64]">
              «{product.reviewQuote.text}» — {product.reviewQuote.name}
            </p>
          ) : null}
          {product.caution ? (
            <p className="text-[#8a6d75]">
              <span className="font-bold">Att tänka på:</span> {product.caution}
            </p>
          ) : null}
        </div>
      ) : null}

      {open === "video" && video ? (
        <div className="mt-2 rounded-[0.8rem] bg-white p-2">
          <video
            controls
            playsInline
            preload="none"
            poster={video.poster}
            className="w-full rounded-[0.6rem]"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ) : null}

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[#D8788D] px-3 text-xs font-black text-[#FFF9F7] transition hover:-translate-y-0.5 hover:bg-[#c96b80]"
        >
          Se aktuellt pris på Amazon
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
        <Link
          href={product.pageHref}
          className="inline-flex min-h-9 items-center rounded-full border border-[#F1D8DD] bg-white px-3 text-xs font-bold text-[#4B2838] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
        >
          Läs recension
        </Link>
        <button
          type="button"
          onClick={() => onAsk(`Berätta mer om ${product.title} – passar den mig?`)}
          className="inline-flex min-h-9 items-center rounded-full border border-[#F1D8DD] bg-white px-3 text-xs font-bold text-[#4B2838] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
        >
          Fråga om den här
        </button>
      </div>
    </div>
  );
}

function WishlistPanel({
  items,
  onRemove,
}: {
  items: WishlistCard[];
  onRemove: (slug: string) => void;
}) {
  return (
    <div className="border-b border-[#F1D8DD] bg-white/82 px-4 py-4 sm:px-5">
      {items.length === 0 ? (
        <div className="rounded-[1rem] border border-dashed border-[#F1D8DD] bg-[#FFF9F7] p-4 text-sm leading-6 text-[#6f5a64]">
          <p className="font-black text-[#4B2838]">Din lista är tom än så länge.</p>
          <p className="mt-1">
            Spara produkter med hjärtat så hittar du dem här när du vill jämföra igen.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.slug}
                className="rounded-[1rem] border border-[#F1D8DD] bg-[#FFF9F7] p-3"
              >
                <div className="flex min-w-0 gap-3">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-[0.8rem] bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#D8788D]">
                        {item.brand}
                      </span>
                      {item.poang != null ? (
                        <span className="rounded-full bg-[#4B2838] px-2 py-0.5 text-[0.6rem] font-black text-[#FFF9F7]">
                          Elins poäng {item.poang}
                        </span>
                      ) : null}
                      {item.bestseller ? (
                        <span className="rounded-full border border-[#F4D9A5] bg-[#FFF4D6] px-2 py-0.5 text-[0.6rem] font-black text-[#8A5B12]">
                          Populärast just nu
                        </span>
                      ) : null}
                    </div>
                    <Link
                      href={item.pageHref}
                      className="mt-1 block text-sm font-black leading-5 text-[#4B2838] hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-0.5 text-xs text-[#6f5a64]">
                      <span className="font-bold">
                        {item.tierIcon} {item.tierLabel}
                      </span>
                      {item.verdict ? ` · ${item.verdict}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.slug)}
                    aria-label={`Ta bort ${item.title} från min lista`}
                    className="grid min-h-9 min-w-9 shrink-0 place-items-center rounded-full border border-[#F1D8DD] bg-white text-[#6f5a64] transition hover:bg-[#FFF1F3] hover:text-[#D8788D]"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[#D8788D] px-3 text-xs font-black text-[#FFF9F7] transition hover:-translate-y-0.5 hover:bg-[#c96b80]"
                  >
                    Se aktuellt pris på Amazon
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <Link
                    href={item.pageHref}
                    className="inline-flex min-h-9 items-center rounded-full border border-[#F1D8DD] bg-white px-3 text-xs font-bold text-[#4B2838] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
                  >
                    Läs recension
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.65rem] text-[#9b818b]">Annons · innehåller affiliatelänkar</p>
        </div>
      )}
    </div>
  );
}

export function ElinChat({
  focus = null,
  initialPrompt,
  prefillKey = 0,
  compact = false,
  hideMobileNav = false,
  showExamples = true,
  emptyTitle = "Vad funderar du på?",
  emptyText = "Fråga om en produkt, en rutin eller om ett billigare alternativ i sortimentet.",
  className = "",
}: ElinChatProps) {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const persist = !focus;
  const [isStorageReady, setIsStorageReady] = useState(!persist);
  const [hadStoredSession, setHadStoredSession] = useState(false);
  const [wishlist, setWishlist] = useState<WishlistCard[]>([]);
  const [isWishlistReady, setIsWishlistReady] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const hasElinAvatar = useElinAvatarAvailable();

  useEffect(() => {
    if (!hideMobileNav) {
      return;
    }

    document.body.classList.add("fraga-elin-active");

    return () => {
      document.body.classList.remove("fraga-elin-active");
    };
  }, [hideMobileNav]);

  // Restore an earlier session (general advisor chat only).
  useEffect(() => {
    if (!persist) {
      setIsStorageReady(true);
      setHadStoredSession(false);
      return;
    }

    setIsStorageReady(false);
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        setHadStoredSession(false);
        setIsStorageReady(true);
        return;
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const restored = parsed.filter(isConversationMessage).slice(-maxStoredMessages);
        setMessages(restored);
        setHadStoredSession(restored.length > 0);
      } else {
        setHadStoredSession(false);
      }
    } catch {
      setHadStoredSession(false);
      // ignore corrupt storage
    } finally {
      setIsStorageReady(true);
    }
  }, [persist]);

  useEffect(() => {
    if (!persist || !isStorageReady) {
      return;
    }
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(messages.slice(-maxStoredMessages)),
      );
    } catch {
      // storage may be full or unavailable — non-critical
    }
  }, [isStorageReady, messages, persist]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(wishlistStorageKey);
      if (!raw) {
        setWishlist([]);
        return;
      }

      const parsed = JSON.parse(raw);
      setWishlist(
        Array.isArray(parsed)
          ? parsed.filter(isWishlistCard).slice(0, maxWishlistItems)
          : [],
      );
    } catch {
      setWishlist([]);
    } finally {
      setIsWishlistReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isWishlistReady) {
      return;
    }

    try {
      window.localStorage.setItem(
        wishlistStorageKey,
        JSON.stringify(wishlist.slice(0, maxWishlistItems)),
      );
    } catch {
      // storage may be full or unavailable — non-critical
    }
  }, [isWishlistReady, wishlist]);

  useEffect(() => {
    if (!initialPrompt) {
      return;
    }

    setInput(initialPrompt.slice(0, 500));
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  }, [initialPrompt, prefillKey]);

  const history = useMemo(
    () =>
      messages
        .filter((message) => message.content.trim().length > 0)
        .map((message) => ({
          role: message.role,
          content: message.content,
        })),
    [messages],
  );

  const savedSlugs = useMemo(() => new Set(wishlist.map((item) => item.slug)), [wishlist]);

  function toggleWishlist(product: ProductCard) {
    setWishlist((current) => {
      if (current.some((item) => item.slug === product.slug)) {
        return current.filter((item) => item.slug !== product.slug);
      }

      return [
        toWishlistCard(product),
        ...current.filter((item) => item.slug !== product.slug),
      ].slice(0, maxWishlistItems);
    });
  }

  function removeFromWishlist(slug: string) {
    setWishlist((current) => current.filter((item) => item.slug !== slug));
  }

  async function sendMessage(messageText: string) {
    const trimmed = messageText.trim().slice(0, 500);
    if (!trimmed || isSending) {
      return;
    }

    const userMessage: ConversationMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };
    const assistantId = createMessageId();
    const nextHistory = [...history, { role: "user" as const, content: trimmed }];

    setMessages((current) => [
      ...current,
      userMessage,
      { id: assistantId, role: "assistant", content: "", products: [], followUps: [] },
    ]);
    setInput("");
    setIsSending(true);
    setHadStoredSession(false);

    const updateAssistant = (
      updater: (message: ConversationMessage) => ConversationMessage,
    ) =>
      setMessages((current) =>
        current.map((message) => (message.id === assistantId ? updater(message) : message)),
      );

    try {
      const response = await fetch("/api/elin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextHistory,
          ...(focus ? { focus } : {}),
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";
      if (!response.ok || !response.body || !contentType.includes("text/event-stream")) {
        let fallback = "Något gick fel. Prova igen om en stund.";
        try {
          const data = (await response.json()) as { svar?: string };
          if (typeof data.svar === "string" && data.svar.trim()) {
            fallback = data.svar;
          }
        } catch {
          // keep default fallback
        }
        updateAssistant((message) => ({ ...message, content: fallback }));
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const handleEvent = (event: StreamEvent) => {
        if (event.type === "delta") {
          updateAssistant((message) => ({ ...message, content: message.content + event.value }));
        } else if (event.type === "meta") {
          updateAssistant((message) => ({
            ...message,
            products: event.produkter ?? [],
            followUps: event.foljdfragor ?? [],
          }));
        } else if (event.type === "error") {
          updateAssistant((message) => ({
            ...message,
            content: message.content || event.value,
          }));
        }
      };

      for (;;) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";
        for (const part of parts) {
          const line = part.trim();
          if (!line.startsWith("data:")) {
            continue;
          }
          const raw = line.slice(5).trim();
          if (!raw) {
            continue;
          }
          try {
            handleEvent(JSON.parse(raw) as StreamEvent);
          } catch {
            // ignore malformed chunk
          }
        }
      }

      updateAssistant((message) =>
        message.content.trim()
          ? message
          : {
              ...message,
              content:
                "Jag kunde inte formulera ett svar just nu. Prova att fråga lite kortare.",
            },
      );
    } catch {
      updateAssistant((message) => ({
        ...message,
        content: message.content || "Något gick fel när jag skulle svara. Prova igen.",
      }));
    } finally {
      setIsSending(false);
      window.requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function clearChat() {
    setMessages([]);
    setHadStoredSession(false);
    if (persist) {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  }

  const lastIndex = messages.length - 1;

  return (
    <section
      className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.55rem] border border-[#F1D8DD] bg-[#FFF9F7] shadow-[0_28px_80px_rgba(75,40,56,0.12)] ${className}`}
    >
      <div className="flex flex-col gap-3 border-b border-[#F1D8DD] bg-white/64 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <ElinAvatar visible={hasElinAvatar} />
          <div className="min-w-0">
            <p className="text-sm font-black text-[#4B2838]">Elin</p>
            <p className="mt-1 truncate text-xs text-[#6f5a64]">
              {focus
                ? `Utgår från ${focus.title}`
                : "Svarar kort, ärligt och produktdatastyrt"}
            </p>
            {hadStoredSession && messages.length > 0 ? (
              <p className="mt-1 text-[0.7rem] font-bold text-[#D8788D]">
                Fortsätt där du var
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
          <button
            type="button"
            onClick={() => setIsWishlistOpen((current) => !current)}
            aria-expanded={isWishlistOpen}
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-black transition hover:-translate-y-0.5 ${
              isWishlistOpen
                ? "border-[#D8788D] bg-[#D8788D] text-[#FFF9F7]"
                : "border-[#F1D8DD] bg-white text-[#4B2838] hover:bg-[#FFF1F3]"
            }`}
          >
            <Heart
              className="size-3.5"
              fill={wishlist.length > 0 ? "currentColor" : "none"}
              aria-hidden="true"
            />
            Min lista ({wishlist.length})
          </button>
          {messages.length > 0 ? (
            <button
              type="button"
              onClick={clearChat}
              className="shrink-0 rounded-full border border-[#F1D8DD] bg-white px-3 py-1.5 text-xs font-bold text-[#6f5a64] transition hover:bg-[#FFF1F3]"
            >
              Rensa
            </button>
          ) : null}
        </div>
      </div>

      {isWishlistOpen ? (
        <WishlistPanel items={wishlist} onRemove={removeFromWishlist} />
      ) : null}

      <div className="flex-1 space-y-4 overflow-y-auto bg-[#FFF9F7] px-4 py-5 sm:px-5">
        {!isStorageReady ? (
          <div className="grid h-full min-h-[14rem] place-items-center rounded-[1.25rem] border border-dashed border-[#F1D8DD] bg-white/70 p-5 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#6f5a64]">
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Laddar samtalet…
            </span>
          </div>
        ) : messages.length === 0 ? (
          <div className="grid h-full min-h-[14rem] place-items-center rounded-[1.25rem] border border-dashed border-[#F1D8DD] bg-white/70 p-5 text-center">
            <div className="max-w-md">
              <p
                className={`font-display leading-tight text-[#4B2838] ${
                  compact ? "text-2xl" : "text-3xl"
                }`}
              >
                {emptyTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6f5a64]">{emptyText}</p>
              {showExamples ? (
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {examples.map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => {
                        setInput(example);
                        textareaRef.current?.focus();
                      }}
                      className="min-h-10 rounded-full border border-[#F1D8DD] bg-white px-3 text-left text-xs font-bold text-[#4B2838] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <article
              key={message.id}
              className={`flex items-start gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" ? (
                <ElinAvatar visible={hasElinAvatar} size="sm" />
              ) : null}
              <div
                className={`max-w-[88%] rounded-[1.25rem] px-4 py-3 sm:max-w-[78%] ${
                  message.role === "user"
                    ? "bg-[#D8788D] text-[#FFF9F7]"
                    : "border border-[#F1D8DD] bg-white text-[#4B2838] shadow-[0_14px_34px_rgba(75,40,56,0.08)]"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm font-bold leading-6">{message.content}</p>
                ) : (
                  <>
                    {message.content.trim() ? (
                      <MarkdownText text={message.content} />
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#6f5a64]">
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Elin skriver…
                      </span>
                    )}

                    {message.products && message.products.length > 0 ? (
                      <div className="mt-4 space-y-3">
                        <div className="grid gap-3">
                          {message.products.map((product) => (
                            <ProductCardView
                              key={product.slug}
                              product={product}
                              isSaved={savedSlugs.has(product.slug)}
                              onToggleSave={toggleWishlist}
                              onAsk={(question) => void sendMessage(question)}
                            />
                          ))}
                        </div>
                        {message.products.length >= 2 ? (
                          <button
                            type="button"
                            onClick={() =>
                              void sendMessage(
                                `Jämför ${(message.products ?? [])
                                  .map((product) => product.title)
                                  .join(" och ")} – vilken passar mig bäst?`,
                              )
                            }
                            className="min-h-9 rounded-full border border-[#D8788D] bg-white px-3 text-xs font-black text-[#D8788D] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
                          >
                            ⚖️ Jämför dessa
                          </button>
                        ) : null}
                        <p className="text-[0.65rem] text-[#9b818b]">
                          Annons · innehåller affiliatelänkar
                        </p>
                      </div>
                    ) : null}

                    {index === lastIndex &&
                    !isSending &&
                    message.followUps &&
                    message.followUps.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.followUps.map((question) => (
                          <button
                            key={question}
                            type="button"
                            onClick={() => void sendMessage(question)}
                            className="min-h-9 rounded-full border border-[#F1D8DD] bg-[#FFF9F7] px-3 text-left text-xs font-bold text-[#4B2838] transition hover:-translate-y-0.5 hover:bg-[#FFF1F3]"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </article>
          ))
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 border-t border-[#F1D8DD] bg-[#FFF9F7] p-3 sm:p-4"
      >
        <div className="flex items-end gap-2 rounded-[1.3rem] border border-[#F1D8DD] bg-white p-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(event) => setInput(event.target.value.slice(0, 500))}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage(input);
              }
            }}
            placeholder="Beskriv behov, budget eller produkten du undrar över..."
            rows={compact ? 1 : 2}
            className="min-h-12 flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-6 text-[#4B2838] outline-none placeholder:text-[#9b818b]"
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="grid min-h-12 min-w-12 shrink-0 place-items-center rounded-full bg-[#D8788D] text-[#FFF9F7] shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5 hover:bg-[#c96b80] disabled:cursor-not-allowed disabled:opacity-55"
            aria-label="Skicka fråga"
          >
            {isSending ? (
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <p className="mt-2 px-2 text-right text-xs text-[#6f5a64]">{input.length}/500</p>
      </form>
    </section>
  );
}
