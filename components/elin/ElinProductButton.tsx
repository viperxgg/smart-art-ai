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
      className={`inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-[#E1A5B0] bg-white/82 px-5 text-sm font-black text-[#7b4656] shadow-[0_16px_42px_rgba(185,131,166,0.14)] transition hover:-translate-y-0.5 hover:bg-[#FFF4F5] sm:w-auto ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      Fråga Elin om denna
    </button>
  );
}
