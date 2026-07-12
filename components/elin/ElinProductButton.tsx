"use client";

import { MessageCircle } from "lucide-react";

import type { ElinFocus } from "@/components/elin/ElinChat";
import { useElin } from "@/components/elin/ElinProvider";

type ElinProductButtonProps = {
  product: ElinFocus;
  className?: string;
};

export function ElinProductButton({ product, className = "" }: ElinProductButtonProps) {
  const { openElin } = useElin();

  return (
    <button
      type="button"
      onClick={() => openElin(product)}
      className={`inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-rose/45 bg-surface/82 px-5 text-sm font-black text-wine shadow-[0_16px_42px_rgba(185,131,166,0.14)] transition hover:-translate-y-0.5 hover:bg-rose/8 sm:w-auto ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      Fråga Elin om denna
    </button>
  );
}
