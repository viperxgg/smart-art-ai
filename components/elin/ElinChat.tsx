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
      className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.55rem] border border-[#F1D8DD] bg-[#FFF9F7] shadow-[0_28px_80px_rgba(75,40,56,0.12)] ${className}`}
    >
      <div className="border-b border-[#F1D8DD] bg-white/64 px-4 py-4 sm:px-5">
        <p className="text-sm font-black text-[#4B2838]">Elin</p>
        <p className="mt-1 text-xs text-[#6f5a64]">
          {focus
            ? `Utgår från ${focus.title}`
            : "Svarar kort, ärligt och produktdatastyrt"}
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto bg-[#FFF9F7] px-4 py-5 sm:px-5">
        {messages.length === 0 ? (
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
          messages.map((message) => (
            <article
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
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
                    <MarkdownText text={message.content} />
                    {message.products && message.products.length > 0 ? (
                      <div className="mt-4 grid gap-3">
                        {message.products.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.pageHref}
                            className="group flex min-w-0 gap-3 rounded-[1rem] border border-[#F1D8DD] bg-[#FFF9F7] p-3 transition hover:-translate-y-0.5 hover:bg-white"
                          >
                            <span className="relative size-16 shrink-0 overflow-hidden rounded-[0.85rem] bg-white">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-xs font-black uppercase tracking-[0.12em] text-[#D8788D]">
                                {product.brand}
                              </span>
                              <span className="mt-1 block text-sm font-black leading-5 text-[#4B2838]">
                                {product.title}
                              </span>
                            </span>
                            <ArrowUpRight
                              className="mt-1 size-4 shrink-0 text-[#D8788D] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
            <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F1D8DD] bg-white px-4 text-sm font-bold text-[#6f5a64]">
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Elin jämför
            </div>
          </div>
        ) : null}
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
