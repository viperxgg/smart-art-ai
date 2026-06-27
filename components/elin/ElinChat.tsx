"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
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
};

type ConversationMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  products?: ProductCard[];
};

type ApiResponse = {
  svar?: string;
  produkter?: ProductCard[];
};

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
  "Är en dyr massagepistol värt det?",
  "Billigare alternativ till ett dyrt serum?",
];

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
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
          className="font-black text-[#f0a6b2] underline decoration-white/20 underline-offset-4"
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
    <div className="space-y-3 text-sm leading-6 text-white/78 sm:text-[0.95rem] sm:leading-7">
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

  useEffect(() => {
    if (!hideMobileNav) {
      return;
    }

    document.body.classList.add("fraga-elin-active");

    return () => {
      document.body.classList.remove("fraga-elin-active");
    };
  }, [hideMobileNav]);

  useEffect(() => {
    if (!initialPrompt) {
      return;
    }

    setInput(initialPrompt.slice(0, 500));
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  }, [initialPrompt, prefillKey]);

  const history = useMemo(
    () =>
      messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    [messages],
  );

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

    const nextHistory = [...history, { role: "user" as const, content: trimmed }];
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/elin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextHistory,
          ...(focus ? { focus } : {}),
        }),
      });

      const data = (await response.json()) as ApiResponse;
      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          content:
            data.svar ??
            "Jag kunde inte läsa svaret just nu. Prova att formulera frågan lite kortare.",
          products: data.produkter ?? [],
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          content: "Något gick fel när jag skulle jämföra produkterna. Prova igen.",
          products: [],
        },
      ]);
    } finally {
      setIsSending(false);
      window.requestAnimationFrame(() => {
        textareaRef.current?.focus();
        textareaRef.current?.scrollIntoView({ block: "center" });
      });
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <section
      className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#171117]/94 shadow-[0_34px_100px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="border-b border-white/10 px-4 py-4 sm:px-5">
        <p className="text-sm font-black text-white">Elin</p>
        <p className="mt-1 text-xs text-white/50">
          {focus
            ? `Utgår från ${focus.title}`
            : "Svarar kort, ärligt och produktdatastyrt"}
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
        {messages.length === 0 ? (
          <div className="grid h-full min-h-[14rem] place-items-center rounded-[1.25rem] border border-dashed border-white/12 bg-white/[0.035] p-5 text-center">
            <div className="max-w-md">
              <p
                className={`font-display leading-tight text-white ${
                  compact ? "text-2xl" : "text-3xl"
                }`}
              >
                {emptyTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/60">{emptyText}</p>
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
                      className="min-h-10 rounded-full border border-white/12 bg-white/[0.08] px-3 text-left text-xs font-bold text-white/76 transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <article
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-[1.25rem] px-4 py-3 sm:max-w-[78%] ${
                  message.role === "user"
                    ? "bg-white text-[#5b3441]"
                    : "border border-white/10 bg-white/[0.08] text-white"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm font-bold leading-6">{message.content}</p>
                ) : (
                  <>
                    <MarkdownText text={message.content} />
                    {message.products && message.products.length > 0 ? (
                      <div className="mt-4 grid gap-3">
                        {message.products.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.pageHref}
                            className="group flex min-w-0 gap-3 rounded-[1rem] border border-white/10 bg-black/16 p-3 transition hover:-translate-y-0.5 hover:bg-black/24"
                          >
                            <span className="relative size-16 shrink-0 overflow-hidden rounded-[0.85rem] bg-white/8">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-xs font-black uppercase tracking-[0.12em] text-[#efa4ad]">
                                {product.brand}
                              </span>
                              <span className="mt-1 block text-sm font-black leading-5 text-white">
                                {product.title}
                              </span>
                            </span>
                            <ArrowUpRight
                              className="mt-1 size-4 shrink-0 text-white/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </article>
          ))
        )}

        {isSending ? (
          <div className="flex justify-start">
            <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 text-sm font-bold text-white/60">
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Elin jämför
            </div>
          </div>
        ) : null}
      </div>

      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 border-t border-white/10 bg-[#171117] p-3 sm:p-4"
      >
        <div className="flex items-end gap-2 rounded-[1.3rem] border border-white/10 bg-white/[0.07] p-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(event) => setInput(event.target.value.slice(0, 500))}
            placeholder="Beskriv behov, budget eller produkten du undrar över..."
            rows={compact ? 1 : 2}
            className="min-h-12 flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/35"
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="grid min-h-12 min-w-12 shrink-0 place-items-center rounded-full bg-[#d8788d] text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
            aria-label="Skicka fråga"
          >
            {isSending ? (
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <p className="mt-2 px-2 text-right text-xs text-white/40">{input.length}/500</p>
      </form>
    </section>
  );
}
