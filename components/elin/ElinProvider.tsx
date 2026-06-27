"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { ElinChat, type ElinFocus } from "@/components/elin/ElinChat";

type ElinContextValue = {
  openElin: (focus?: ElinFocus, initialPrompt?: string) => void;
  closeElin: () => void;
};

const ElinContext = createContext<ElinContextValue | null>(null);

export function useElin() {
  const context = useContext(ElinContext);

  if (!context) {
    throw new Error("useElin must be used within ElinProvider");
  }

  return context;
}

export function ElinProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState<ElinFocus | null>(null);
  const [manualPrompt, setManualPrompt] = useState<string | null>(null);
  const [prefillKey, setPrefillKey] = useState(0);
  const isDedicatedPage = pathname === "/fraga-elin";

  const value = useMemo<ElinContextValue>(
    () => ({
      openElin(nextFocus, nextPrompt) {
        setFocus(nextFocus ?? null);
        setManualPrompt(nextPrompt ?? null);
        setIsOpen(true);
        setPrefillKey((current) => current + 1);
      },
      closeElin() {
        setIsOpen(false);
      },
    }),
    [],
  );

  const initialPrompt = manualPrompt ?? (focus ? `Passar ${focus.title} för mig?` : undefined);

  return (
    <ElinContext.Provider value={value}>
      {children}

      {!isDedicatedPage ? (
        <>
          {!isOpen ? (
            <button
              type="button"
              onClick={() => value.openElin()}
              className="fixed right-4 z-[80] grid min-h-16 min-w-16 place-items-center rounded-full border border-[#F1D8DD] bg-[#D8788D] text-[#FFF9F7] shadow-[0_22px_70px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5 hover:bg-[#c96b80] bottom-[calc(104px+env(safe-area-inset-bottom))] md:bottom-6 md:right-6 md:min-h-[4.5rem] md:min-w-[4.5rem]"
              aria-label="Fråga Elin"
            >
              <MessageCircle className="size-7" aria-hidden="true" />
            </button>
          ) : null}

          {isOpen ? (
            <div className="fixed inset-0 z-[90]">
              <button
                type="button"
                aria-label="Stäng Elin"
                onClick={value.closeElin}
                className="absolute inset-0 bg-[#4B2838]/20 backdrop-blur-sm"
              />
              <aside className="absolute inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] top-3 flex min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-[#F1D8DD] bg-[#FFF9F7] shadow-[0_34px_120px_rgba(75,40,56,0.22)] md:inset-auto md:bottom-6 md:right-6 md:h-[70vh] md:max-h-[46rem] md:w-[25rem]">
                <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[#F1D8DD] bg-white/72 px-4 py-3">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-2 text-sm font-black text-[#4B2838]">
                      <Sparkles className="size-4 text-[#D8788D]" aria-hidden="true" />
                      Fråga Elin
                    </p>
                    <p className="mt-1 truncate text-xs text-[#6f5a64]">
                      Elin är en AI-rådgivare. Annons: affiliatelänkar.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={value.closeElin}
                    className="grid min-h-10 min-w-10 shrink-0 place-items-center rounded-full border border-[#F1D8DD] bg-white text-[#4B2838] transition hover:bg-[#FFF1F3]"
                    aria-label="Stäng Elin"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </header>
                <ElinChat
                  compact
                  focus={focus}
                  initialPrompt={initialPrompt}
                  prefillKey={prefillKey}
                  showExamples={!focus}
                  emptyTitle={focus ? "Fråga om den här produkten" : "Vad vill du jämföra?"}
                  emptyText={
                    focus
                      ? "Startfrågan är förifylld. Lägg till hudtyp, budget eller hur du tänker använda produkten innan du skickar."
                      : "Beskriv vad du funderar på, så jämför Elin sortimentet utan köphets."
                  }
                  className="min-h-0 flex-1 rounded-none border-0 shadow-none"
                />
              </aside>
            </div>
          ) : null}
        </>
      ) : null}
    </ElinContext.Provider>
  );
}
