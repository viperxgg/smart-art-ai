"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowUpRight,
  Heart,
  Loader2,
  Mail,
  Send,
  SlidersHorizontal,
  Trash2,
  X,
} from "lucide-react";
import { type CSSProperties, FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";

import type { ProductCategorySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    turnstile?: {
      getResponse: (widgetId?: string) => string | undefined;
      reset: (widgetId?: string) => void;
    };
  }
}

export type ElinFocus = {
  slug: string;
  title: string;
  category: ProductCategorySlug;
};

type PriceTier = "budget" | "mellan" | "premium";

type ElinPreferences = {
  skinType?: "torr" | "fet" | "kombinerad" | "känslig" | "normal";
  hairLength?: "kort" | "axellångt" | "långt";
  budget?: PriceTier;
  category?: ProductCategorySlug;
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
  steg?: number;
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

type SubscribeStatus = "idle" | "submitting" | "success" | "error";

const examples = [
  "Kombinerad, känslig hud – var börjar jag?",
  "💫 Bygg en rutin åt mig",
  "Är en dyr massagepistol värt det?",
  "Billigare alternativ till ett dyrt serum?",
];

const storageKey = "elin-chat-v1";
const wishlistStorageKey = "elin-wishlist-v1";
const prefsStorageKey = "elin-prefs-v1";
const subscribeDismissedStorageKey = "elin-subscribe-dismissed-v1";
const maxStoredMessages = 20;
const maxWishlistItems = 30;
const subscriberConsentText = `Jag samtycker till att Smart Art AI sparar min mejladress och mina valda produkt- och rutinuppgifter för att kunna tipsa om prisdroppar och sparade rutiner. Jag kan när som helst begära radering eller avregistrera mig via mejl till ${siteConfig.email}.`;

const budgetFilterChips: { value: PriceTier; label: string; prompt: string }[] = [
  { value: "budget", label: "Budget", prompt: "budgetnivå" },
  { value: "mellan", label: "Mellan", prompt: "mellannivå" },
  { value: "premium", label: "Premium", prompt: "premium" },
];

const categoryFilterChips: {
  value: ProductCategorySlug;
  label: string;
  prompt: string;
}[] = [
  { value: "skonhet", label: "Skönhet", prompt: "skönhet" },
  { value: "traning", label: "Träning", prompt: "träning" },
  { value: "halsa", label: "Hälsa", prompt: "hälsa" },
];

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
    typeof card.verdict === "string" &&
    (typeof card.steg === "number" || typeof card.steg === "undefined")
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

function ElinAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "size-8" : "size-11";
  const imageSizes = size === "sm" ? "32px" : "44px";

  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full ${sizeClass}`}>
      <Image src="/elin/elin-avatar.webp" alt="Elin" fill sizes={imageSizes} className="object-cover" />
    </span>
  );
}

function hasPreferences(preferences: ElinPreferences) {
  return Object.values(preferences).some(Boolean);
}

function isElinPreferences(value: unknown): value is ElinPreferences {
  if (!value || typeof value !== "object") {
    return false;
  }

  const data = value as Record<string, unknown>;
  const validSkinTypes = new Set(["torr", "fet", "kombinerad", "känslig", "normal"]);
  const validHairLengths = new Set(["kort", "axellångt", "långt"]);
  const validBudgets = new Set(["budget", "mellan", "premium"]);
  const validCategories = new Set(["skonhet", "traning", "halsa"]);

  return (
    (!data.skinType || validSkinTypes.has(data.skinType as string)) &&
    (!data.hairLength || validHairLengths.has(data.hairLength as string)) &&
    (!data.budget || validBudgets.has(data.budget as string)) &&
    (!data.category || validCategories.has(data.category as string))
  );
}

function mergePreferences(
  current: ElinPreferences,
  next: ElinPreferences,
): ElinPreferences {
  return {
    ...current,
    ...next,
  };
}

function inferPreferences(
  text: string,
  selectedBudget: PriceTier | null,
  selectedCategory: ProductCategorySlug | null,
): ElinPreferences {
  const normalized = text.toLocaleLowerCase("sv-SE");
  const preferences: ElinPreferences = {};

  if (selectedBudget) {
    preferences.budget = selectedBudget;
  } else if (/\bbudget\b|billig|prisvärd/.test(normalized)) {
    preferences.budget = "budget";
  } else if (/\bpremium\b|lyx|dyr/.test(normalized)) {
    preferences.budget = "premium";
  } else if (/\bmellan\b|mellannivå/.test(normalized)) {
    preferences.budget = "mellan";
  }

  if (selectedCategory) {
    preferences.category = selectedCategory;
  } else if (/hud|serum|kräm|skönhet|beauty|hår/.test(normalized)) {
    preferences.category = "skonhet";
  } else if (/träning|massagepistol|gym|återhämtning/.test(normalized)) {
    preferences.category = "traning";
  } else if (/hälsa|avkoppling|wellness/.test(normalized)) {
    preferences.category = "halsa";
  }

  if (/känslig/.test(normalized)) {
    preferences.skinType = "känslig";
  } else if (/kombinerad/.test(normalized)) {
    preferences.skinType = "kombinerad";
  } else if (/\btorr\b|torr hud|torr hy/.test(normalized)) {
    preferences.skinType = "torr";
  } else if (/\bfet\b|oljig/.test(normalized)) {
    preferences.skinType = "fet";
  } else if (/\bnormal\b/.test(normalized)) {
    preferences.skinType = "normal";
  }

  if (/axellång/.test(normalized)) {
    preferences.hairLength = "axellångt";
  } else if (/kort hår|kortare hår/.test(normalized)) {
    preferences.hairLength = "kort";
  } else if (/långt hår|långt/.test(normalized)) {
    preferences.hairLength = "långt";
  }

  return preferences;
}

function buildScopePrefix(
  selectedBudget: PriceTier | null,
  selectedCategory: ProductCategorySlug | null,
) {
  const parts = [
    selectedBudget
      ? `budget: ${budgetFilterChips.find((chip) => chip.value === selectedBudget)?.prompt}`
      : null,
    selectedCategory
      ? `område: ${categoryFilterChips.find((chip) => chip.value === selectedCategory)?.prompt}`
      : null,
  ].filter(Boolean);

  return parts.length ? `[Valda filter: ${parts.join(", ")}]` : "";
}

function describePreferences(preferences: ElinPreferences) {
  const parts = [
    preferences.budget ? `budget ${preferences.budget}` : null,
    preferences.category
      ? categoryFilterChips.find((chip) => chip.value === preferences.category)?.label
      : null,
    preferences.skinType ? `${preferences.skinType} hud` : null,
    preferences.hairLength ? `${preferences.hairLength} hår` : null,
  ].filter(Boolean);

  return parts.join(" · ");
}

function hasRoutineSteps(products: ProductCard[] | undefined) {
  return Boolean(products?.some((product) => typeof product.steg === "number"));
}

function getDisplayProducts(products: ProductCard[]) {
  if (!hasRoutineSteps(products)) {
    return products;
  }

  return [...products].sort(
    (left, right) => (left.steg ?? 99) - (right.steg ?? 99),
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
          className="font-black text-rose underline decoration-line underline-offset-4"
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
    <div className="space-y-3 text-sm leading-6 text-ink sm:text-[0.95rem] sm:leading-7">
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
    <div className="rounded-[1rem] border border-line bg-bg p-3">
      <div className="flex min-w-0 gap-3">
        <span className="relative size-16 shrink-0 overflow-hidden rounded-[0.85rem] bg-surface">
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
            {typeof product.steg === "number" ? (
              <span className="rounded-full bg-ink px-2 py-0.5 text-[0.65rem] font-black text-bg">
                Steg {product.steg}
              </span>
            ) : null}
            <span className="text-xs font-black uppercase tracking-[0.12em] text-rose">
              {product.brand}
            </span>
            {product.poang != null ? (
              <span className="rounded-full bg-ink px-2 py-0.5 text-[0.65rem] font-black text-bg">
                Elins poäng {product.poang}
              </span>
            ) : null}
            {product.ratingShort ? (
              <span className="rounded-full bg-rose/8 px-2 py-0.5 text-[0.65rem] font-black text-rose">
                ★ {product.ratingShort}
              </span>
            ) : null}
            {product.bestseller ? (
              <span className="rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 text-[0.65rem] font-black text-[#8A5B12]">
                Populärast just nu
              </span>
            ) : null}
          </div>
          <Link
            href={product.pageHref}
            className="mt-1 block text-sm font-black leading-5 text-ink hover:underline"
          >
            {product.title}
          </Link>
          <p className="mt-0.5 text-xs text-ink-soft">
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
              ? "border-rose bg-rose text-bg"
              : "border-line bg-surface text-rose hover:bg-rose/8"
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
        <p className="mt-3 rounded-[0.8rem] bg-rose/8 px-3 py-2 text-xs leading-5 text-ink">
          <span className="font-black text-rose">Perfekt för dig eftersom </span>
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
                  ? "border-rose bg-rose text-bg"
                  : "border-line bg-surface text-ink hover:bg-rose/8"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : null}

      {open === "fordelar" && fordelar.length ? (
        <ul className="mt-2 space-y-1 rounded-[0.8rem] bg-surface p-3 text-xs leading-5 text-ink">
          {fordelar.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {open === "anvandning" && uses.length ? (
        <ul className="mt-2 space-y-1 rounded-[0.8rem] bg-surface p-3 text-xs leading-5 text-ink">
          {uses.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {open === "folk" && hasFolk ? (
        <div className="mt-2 space-y-2 rounded-[0.8rem] bg-surface p-3 text-xs leading-5 text-ink">
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
            <p className="rounded-[0.7rem] bg-bg p-2 italic text-ink-soft">
              «{product.reviewQuote.text}» — {product.reviewQuote.name}
            </p>
          ) : null}
          {product.caution ? (
            <p className="text-ink-soft">
              <span className="font-bold">Att tänka på:</span> {product.caution}
            </p>
          ) : null}
        </div>
      ) : null}

      {open === "video" && video ? (
        <div className="mt-2 rounded-[0.8rem] bg-surface p-2">
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
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-1 rounded-full bg-rose px-3 text-xs font-black text-bg transition hover:-translate-y-0.5 hover:bg-rose/90"
        >
          Köp {product.brand} på Amazon
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
        <Link
          href={product.pageHref}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-surface px-3 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-rose/8"
        >
          Läs recension
        </Link>
        <button
          type="button"
          onClick={() => onAsk(`Berätta mer om ${product.title} – passar den mig?`)}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-surface px-3 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-rose/8"
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
    <div className="border-b border-line bg-surface/82 px-4 py-4 sm:px-5">
      {items.length === 0 ? (
        <div className="rounded-[1rem] border border-dashed border-line bg-bg p-4 text-sm leading-6 text-ink-soft">
          <p className="font-black text-ink">Din lista är tom än så länge.</p>
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
                className="rounded-[1rem] border border-line bg-bg p-3"
              >
                <div className="flex min-w-0 gap-3">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-[0.8rem] bg-surface">
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
                      <span className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-rose">
                        {item.brand}
                      </span>
                      {item.poang != null ? (
                        <span className="rounded-full bg-ink px-2 py-0.5 text-[0.6rem] font-black text-bg">
                          Elins poäng {item.poang}
                        </span>
                      ) : null}
                      {item.bestseller ? (
                        <span className="rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 text-[0.6rem] font-black text-[#8A5B12]">
                          Populärast just nu
                        </span>
                      ) : null}
                    </div>
                    <Link
                      href={item.pageHref}
                      className="mt-1 block text-sm font-black leading-5 text-ink hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-0.5 text-xs text-ink-soft">
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
                    className="grid min-h-9 min-w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-soft transition hover:bg-rose/8 hover:text-rose"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="inline-flex min-h-9 items-center gap-1 rounded-full bg-rose px-3 text-xs font-black text-bg transition hover:-translate-y-0.5 hover:bg-rose/90"
                  >
                    Köp {item.brand} på Amazon
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <Link
                    href={item.pageHref}
                    className="inline-flex min-h-9 items-center rounded-full border border-line bg-surface px-3 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-rose/8"
                  >
                    Läs recension
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.65rem] text-ink-soft">Annons · innehåller affiliatelänkar</p>
        </div>
      )}
    </div>
  );
}

function SubscriberCard({
  email,
  consent,
  status,
  error,
  onEmailChange,
  onConsentChange,
  onDismiss,
  onSubmit,
}: {
  email: string;
  consent: boolean;
  status: SubscribeStatus;
  error: string;
  onEmailChange: (value: string) => void;
  onConsentChange: (value: boolean) => void;
  onDismiss: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const isSubmitting = status === "submitting";

  return (
    <aside className="rounded-[1.2rem] border border-line bg-surface p-4 shadow-[0_16px_42px_rgba(91,52,65,0.08)]">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-rose/8 text-rose">
          <Mail className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-black text-ink">
                Vill du att jag sparar dina val och tipsar när något blir billigare?
              </p>
              <p className="mt-1 text-xs leading-5 text-ink-soft">Lämna din mejl.</p>
            </div>
            <button
              type="button"
              onClick={onDismiss}
              className="grid min-h-9 min-w-9 shrink-0 place-items-center rounded-full border border-line bg-bg text-ink-soft transition hover:bg-rose/8 hover:text-rose"
              aria-label="Stäng mejlfrågan"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          {status === "success" ? (
            <p className="mt-3 rounded-[0.9rem] bg-mint/24 p-3 text-sm font-bold leading-6 text-[#356a5f]">
              Klart. Jag har sparat mejlen och samtycket.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-3 space-y-3">
              <label className="block">
                <span className="sr-only">Mejladress</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => onEmailChange(event.target.value.slice(0, 254))}
                  placeholder="dinmejl@exempel.se"
                  autoComplete="email"
                  className="min-h-11 w-full rounded-full border border-line bg-bg px-4 text-sm font-bold text-ink outline-none transition focus:border-rose"
                />
              </label>

              <label className="flex items-start gap-3 rounded-[1rem] border border-line bg-bg p-3 text-xs leading-5 text-ink-soft">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => onConsentChange(event.target.checked)}
                  className="mt-1 size-4 shrink-0 accent-rose"
                />
                <span>{subscriberConsentText}</span>
              </label>

              {error ? <p className="text-xs font-bold text-[#B94A62]">{error}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting || !email.trim() || !consent}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-black text-bg transition hover:-translate-y-0.5 hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-55"
              >
                {isSubmitting ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : null}
                Spara mina val
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
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
  const [preferences, setPreferences] = useState<ElinPreferences>({});
  const [selectedBudget, setSelectedBudget] = useState<PriceTier | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategorySlug | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const persist = !focus;
  const [isStorageReady, setIsStorageReady] = useState(!persist);
  const [hadStoredSession, setHadStoredSession] = useState(false);
  const [wishlist, setWishlist] = useState<WishlistCard[]>([]);
  const [isWishlistReady, setIsWishlistReady] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const [isSubscribeReady, setIsSubscribeReady] = useState(false);
  const [isSubscribeDismissed, setIsSubscribeDismissed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberConsent, setSubscriberConsent] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<SubscribeStatus>("idle");
  const [subscribeError, setSubscribeError] = useState("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Grow the composer with its content instead of showing a scrollbar inside a
  // one-line box (which clipped the text and rendered scroll arrows on Windows).
  useEffect(() => {
    const node = textareaRef.current;
    if (!node) {
      return;
    }
    node.style.height = "auto";
    node.style.height = `${Math.min(node.scrollHeight, 128)}px`;
  }, [input]);

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
    try {
      setIsSubscribeDismissed(
        window.localStorage.getItem(subscribeDismissedStorageKey) === "1",
      );
    } catch {
      setIsSubscribeDismissed(false);
    } finally {
      setIsSubscribeReady(true);
    }
  }, []);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(prefsStorageKey);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw);
      if (isElinPreferences(parsed)) {
        setPreferences(parsed);
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  useEffect(() => {
    try {
      if (!hasPreferences(preferences)) {
        window.localStorage.removeItem(prefsStorageKey);
        return;
      }
      window.localStorage.setItem(prefsStorageKey, JSON.stringify(preferences));
    } catch {
      // storage may be unavailable
    }
  }, [preferences]);

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
  const recommendedSlugs = useMemo(
    () =>
      Array.from(
        new Set(
          messages.flatMap((message) => (message.products ?? []).map((product) => product.slug)),
        ),
      ).slice(0, 20),
    [messages],
  );
  const showSubscriberCard =
    isSubscribeReady &&
    recommendedSlugs.length > 0 &&
    (!isSubscribeDismissed || subscribeStatus === "success");

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

  function saveProductsToWishlist(products: ProductCard[]) {
    const cards = products.map(toWishlistCard);
    const slugs = new Set(cards.map((item) => item.slug));

    setWishlist((current) =>
      [
        ...cards,
        ...current.filter((item) => !slugs.has(item.slug)),
      ].slice(0, maxWishlistItems),
    );
  }

  function removeFromWishlist(slug: string) {
    setWishlist((current) => current.filter((item) => item.slug !== slug));
  }

  function dismissSubscriberCard() {
    setIsSubscribeDismissed(true);
    setSubscribeStatus("idle");
    try {
      window.localStorage.setItem(subscribeDismissedStorageKey, "1");
    } catch {
      // storage may be unavailable
    }
  }

  async function submitSubscriber(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = subscriberEmail.trim();
    if (!email || !subscriberConsent || subscribeStatus === "submitting") {
      return;
    }

    setSubscribeStatus("submitting");
    setSubscribeError("");

    try {
      const response = await fetch("/api/elin/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent: subscriberConsent,
          consentText: subscriberConsentText,
          source: "elin-chat",
          context: {
            productSlugs: recommendedSlugs,
            wishlistSlugs: wishlist.map((item) => item.slug).slice(0, 20),
            ...(focus
              ? {
                  focusSlug: focus.slug,
                  focusTitle: focus.title,
                }
              : {}),
          },
        }),
      });

      if (!response.ok) {
        setSubscribeStatus("error");
        setSubscribeError(
          response.status === 429
            ? "För många försök just nu. Prova igen lite senare."
            : "Jag kunde inte spara mejlen just nu. Prova igen om en stund.",
        );
        return;
      }

      setSubscribeStatus("success");
      setSubscriberEmail("");
      setSubscriberConsent(false);
      try {
        window.localStorage.setItem(subscribeDismissedStorageKey, "1");
      } catch {
        // storage may be unavailable
      }
    } catch {
      setSubscribeStatus("error");
      setSubscribeError("Jag kunde inte spara mejlen just nu. Prova igen om en stund.");
    }
  }

  async function sendMessage(messageText: string) {
    const trimmed = messageText.trim();
    if (!trimmed || isSending) {
      return;
    }

    const scopePrefix = buildScopePrefix(selectedBudget, selectedCategory);
    const scopedText = `${scopePrefix ? `${scopePrefix} ` : ""}${trimmed}`.slice(0, 500);
    const nextPreferences = mergePreferences(
      preferences,
      inferPreferences(scopedText, selectedBudget, selectedCategory),
    );
    const userMessage: ConversationMessage = {
      id: createMessageId(),
      role: "user",
      content: scopedText,
    };
    const assistantId = createMessageId();
    const nextHistory = [...history, { role: "user" as const, content: scopedText }];

    setMessages((current) => [
      ...current,
      userMessage,
      { id: assistantId, role: "assistant", content: "", products: [], followUps: [] },
    ]);
    setInput("");
    setPreferences(nextPreferences);
    setSelectedBudget(null);
    setSelectedCategory(null);
    setIsSending(true);
    setHadStoredSession(false);

    const updateAssistant = (
      updater: (message: ConversationMessage) => ConversationMessage,
    ) =>
      setMessages((current) =>
        current.map((message) => (message.id === assistantId ? updater(message) : message)),
      );

    try {
      const turnstileToken =
        typeof window !== "undefined" && window.turnstile
          ? window.turnstile.getResponse()
          : undefined;

      const response = await fetch("/api/elin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextHistory,
          ...(turnstileToken ? { turnstileToken } : {}),
          ...(hasPreferences(nextPreferences) ? { preferences: nextPreferences } : {}),
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
      if (typeof window !== "undefined" && window.turnstile) {
        try {
          window.turnstile.reset();
        } catch {
          // widget not ready yet — ignore
        }
      }
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
    setPreferences({});
    setSelectedBudget(null);
    setSelectedCategory(null);
    if (persist) {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
    try {
      window.localStorage.removeItem(prefsStorageKey);
    } catch {
      // ignore
    }
  }

  const lastIndex = messages.length - 1;
  const preferenceText = describePreferences(preferences);
  const hasStoredPreferences = hasPreferences(preferences);

  return (
    <section
      className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.55rem] border border-line bg-bg shadow-[0_28px_80px_rgba(91,52,65,0.12)] ${className}`}
    >
      <div
        className={`flex flex-col gap-3 border-b border-line bg-surface/64 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
          compact ? "py-2.5" : "py-4"
        }`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <ElinAvatar />
          <div className="min-w-0">
            <p className="text-sm font-black text-ink">Elin</p>
            {/* In the drawer the header above already introduces Elin, so the
                strapline only takes reading space away from the messages. */}
            {compact && messages.length > 0 ? null : (
              <p className="mt-1 truncate text-xs text-ink-soft">
                {focus
                  ? `Utgår från ${focus.title}`
                  : "Svarar kort, ärligt och produktdatastyrt"}
              </p>
            )}
            {hadStoredSession && messages.length > 0 ? (
              <p className="mt-1 text-[0.7rem] font-bold text-rose">
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
                ? "border-rose bg-rose text-bg"
                : "border-line bg-surface text-ink hover:bg-rose/8"
            }`}
          >
            <Heart
              className="size-3.5"
              fill={wishlist.length > 0 ? "currentColor" : "none"}
              aria-hidden="true"
            />
            Min lista ({wishlist.length})
          </button>
          {messages.length > 0 || hasStoredPreferences ? (
            <button
              type="button"
              onClick={clearChat}
              className="shrink-0 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-soft transition hover:bg-rose/8"
            >
              Rensa
            </button>
          ) : null}
        </div>
      </div>

      {isWishlistOpen ? (
        <WishlistPanel items={wishlist} onRemove={removeFromWishlist} />
      ) : null}

      <div className="flex-1 space-y-4 overflow-y-auto bg-bg px-4 py-5 sm:px-5">
        {!isStorageReady ? (
          <div className="grid h-full min-h-[8rem] place-items-center rounded-[1.25rem] border border-dashed border-line bg-surface/70 p-4 text-center sm:p-5">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-ink-soft">
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Laddar samtalet…
            </span>
          </div>
        ) : messages.length === 0 ? (
          <div className="grid h-full min-h-[8rem] place-items-center rounded-[1.25rem] border border-dashed border-line bg-surface/70 p-4 text-center sm:p-5">
            <div className="max-w-md">
              <p
                className={`font-display leading-tight text-ink ${
                  compact ? "text-2xl" : "text-3xl"
                }`}
              >
                {emptyTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{emptyText}</p>
              {showExamples ? (
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {examples.map((example, exampleIndex) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => {
                        setInput(example);
                        textareaRef.current?.focus();
                      }}
                      className="reveal-fade min-h-10 rounded-full border border-line bg-surface px-3 text-left text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-rose/8"
                      style={{ "--i": exampleIndex } as CSSProperties}
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
                <ElinAvatar size="sm" />
              ) : null}
              <div
                className={`max-w-[88%] rounded-[1.25rem] px-4 py-3 sm:max-w-[78%] ${
                  message.role === "user"
                    ? "bg-rose text-bg"
                    : "border border-line bg-surface text-ink shadow-[0_14px_34px_rgba(91,52,65,0.08)]"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm font-bold leading-6">{message.content}</p>
                ) : (
                  <>
                    {message.content.trim() ? (
                      <MarkdownText text={message.content} />
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-ink-soft">
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Elin skriver…
                      </span>
                    )}

                    {message.products && message.products.length > 0 ? (
                      <div className="mt-4 space-y-3">
                        <div className="grid gap-3">
                          {getDisplayProducts(message.products).map((product) => (
                            <ProductCardView
                              key={product.slug}
                              product={product}
                              isSaved={savedSlugs.has(product.slug)}
                              onToggleSave={toggleWishlist}
                              onAsk={(question) => void sendMessage(question)}
                            />
                          ))}
                        </div>
                        {hasRoutineSteps(message.products) ? (
                          <button
                            type="button"
                            onClick={() =>
                              saveProductsToWishlist(getDisplayProducts(message.products ?? []))
                            }
                            disabled={getDisplayProducts(message.products ?? []).every(
                              (product) => savedSlugs.has(product.slug),
                            )}
                            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-rose bg-surface px-3 text-xs font-black text-rose transition hover:-translate-y-0.5 hover:bg-rose/8 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Heart
                              className="size-3.5"
                              fill={
                                getDisplayProducts(message.products ?? []).every((product) =>
                                  savedSlugs.has(product.slug),
                                )
                                  ? "currentColor"
                                  : "none"
                              }
                              aria-hidden="true"
                            />
                            {getDisplayProducts(message.products ?? []).every((product) =>
                              savedSlugs.has(product.slug),
                            )
                              ? "Rutinen är sparad"
                              : "Spara hela rutinen"}
                          </button>
                        ) : null}
                        {message.products.length >= 2 ? (
                          <button
                            type="button"
                            onClick={() =>
                              void sendMessage(
                                `Jämför ${getDisplayProducts(message.products ?? [])
                                  .map((product) => product.title)
                                  .join(" och ")} – vilken passar mig bäst?`,
                              )
                            }
                            className="min-h-9 rounded-full border border-rose bg-surface px-3 text-xs font-black text-rose transition hover:-translate-y-0.5 hover:bg-rose/8"
                          >
                            ⚖️ Jämför dessa
                          </button>
                        ) : null}
                        <p className="text-[0.65rem] text-ink-soft">
                          Annons · innehåller affiliatelänkar
                        </p>
                      </div>
                    ) : null}

                    {index === lastIndex &&
                    !isSending &&
                    message.followUps &&
                    message.followUps.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.followUps.map((question, followUpIndex) => (
                          <button
                            key={question}
                            type="button"
                            onClick={() => void sendMessage(question)}
                            className="reveal-fade min-h-9 rounded-full border border-line bg-bg px-3 text-left text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-rose/8"
                            style={{ "--i": followUpIndex } as CSSProperties}
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

        {showSubscriberCard ? (
          <SubscriberCard
            email={subscriberEmail}
            consent={subscriberConsent}
            status={subscribeStatus}
            error={subscribeError}
            onEmailChange={setSubscriberEmail}
            onConsentChange={setSubscriberConsent}
            onDismiss={dismissSubscriberCard}
            onSubmit={submitSubscriber}
          />
        ) : null}
      </div>

      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 z-10 border-t border-line bg-bg p-3 sm:p-4"
      >
        {turnstileSiteKey ? (
          <>
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js"
              strategy="lazyOnload"
            />
            <div
              className="cf-turnstile mb-2 px-1"
              data-sitekey={turnstileSiteKey}
              data-appearance="interaction-only"
              data-size="flexible"
            />
          </>
        ) : null}
        {compact && messages.length > 0 && !areFiltersOpen ? (
          <button
            type="button"
            onClick={() => setAreFiltersOpen(true)}
            className="mb-2 ml-1 inline-flex min-h-8 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[0.72rem] font-bold text-ink-soft transition hover:bg-rose/8"
          >
            <SlidersHorizontal className="size-3.5" aria-hidden="true" />
            {selectedBudget || selectedCategory ? "Filter (aktivt)" : "Filter"}
          </button>
        ) : null}
        <div
          className={`mb-2 flex-wrap gap-1.5 px-1 ${
            compact && messages.length > 0 && !areFiltersOpen ? "hidden" : "flex"
          }`}
        >
          {budgetFilterChips.map((chip) => {
            const active = selectedBudget === chip.value;
            return (
              <button
                key={chip.value}
                type="button"
                aria-pressed={active}
                disabled={isSending}
                onClick={() =>
                  setSelectedBudget((current) => (current === chip.value ? null : chip.value))
                }
                className={`min-h-8 rounded-full border px-3 text-[0.72rem] font-black transition ${
                  active
                    ? "border-rose bg-rose text-bg"
                    : "border-line bg-surface text-ink hover:bg-rose/8"
                } disabled:cursor-not-allowed disabled:opacity-55`}
              >
                {chip.label}
              </button>
            );
          })}
          {categoryFilterChips.map((chip) => {
            const active = selectedCategory === chip.value;
            return (
              <button
                key={chip.value}
                type="button"
                aria-pressed={active}
                disabled={isSending}
                onClick={() =>
                  setSelectedCategory((current) => (current === chip.value ? null : chip.value))
                }
                className={`min-h-8 rounded-full border px-3 text-[0.72rem] font-bold transition ${
                  active
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface text-ink hover:bg-rose/8"
                } disabled:cursor-not-allowed disabled:opacity-55`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
        {preferenceText ? (
          <p className="mb-2 px-2 text-xs font-bold text-ink-soft">
            Kommer ihåg: {preferenceText}
          </p>
        ) : null}
        <div className="flex items-end gap-2 rounded-[1.3rem] border border-line bg-surface p-2">
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
            placeholder="Beskriv behov eller produkt..."
            rows={1}
            className="max-h-32 min-h-11 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-2 text-sm leading-6 text-ink outline-none placeholder:text-ink-soft"
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="grid min-h-12 min-w-12 shrink-0 place-items-center rounded-full bg-rose text-bg shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5 hover:bg-rose/90 disabled:cursor-not-allowed disabled:opacity-55"
            aria-label="Skicka fråga"
          >
            {isSending ? (
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {input.length > 0 ? (
          <p className="mt-2 px-2 text-right text-xs text-ink-soft">
            {input.length}/500
          </p>
        ) : null}
      </form>
    </section>
  );
}
