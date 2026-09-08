"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Native modal semantics keep background controls out of keyboard navigation.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    dialog.querySelector<HTMLButtonElement>("[data-elin-close]")?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Navigating from a chat link must not leave a modal over the destination.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const value = useMemo<ElinContextValue>(
    () => ({
      openElin(nextFocus, nextPrompt) {
        triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setFocus(nextFocus ?? null);
        setManualPrompt(nextPrompt ?? null);
        setIsOpen(true);
        setPrefillKey((current) => current + 1);
      },
      closeElin() {
        dialogRef.current?.close();
        setIsOpen(false);
      },
    }),
    [],
  );

  const initialPrompt = manualPrompt ?? (focus ? `Passar ${focus.title} för mig?` : undefined);

  return (
    <ElinContext.Provider value={value}>
      {children}

      <dialog
        ref={dialogRef}
        id="elin-dialog"
        aria-labelledby="elin-dialog-title"
        aria-describedby="elin-dialog-description"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const elements = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
            'button, a[href], input, select, textarea, [tabindex]',
          )).filter((element) => element.tabIndex >= 0
            && !element.matches(":disabled") && element.getClientRects().length > 0);
          const first = elements[0];
          const last = elements.at(-1);
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setIsOpen(false);
          if (triggerRef.current?.isConnected) triggerRef.current.focus({ preventScroll: true });
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-0 bg-transparent p-0 text-ink backdrop:bg-[#4B2838]/20 backdrop:backdrop-blur-sm"
      >
          {isOpen ? (
            <div className="h-full w-full">
              <button
                type="button"
                aria-label="Stäng Elin via bakgrunden"
                tabIndex={-1}
                onClick={value.closeElin}
                className="absolute inset-0"
              />
              <aside className="elin-panel-pop absolute inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] top-3 flex min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-[#F1D8DD] bg-[#FFF9F7] shadow-[0_34px_120px_rgba(75,40,56,0.22)] md:inset-auto md:bottom-6 md:right-6 md:h-[min(84vh,46rem)] md:w-[26rem]">
                <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[#F1D8DD] bg-white/72 px-4 py-2.5">
                  <div className="min-w-0">
                    <h2 id="elin-dialog-title" className="inline-flex items-center gap-2 text-sm font-black text-[#4B2838]">
                      <Sparkles className="size-4 text-[#D8788D]" aria-hidden="true" />
                      Fråga Elin · AI
                    </h2>
                    <p id="elin-dialog-description" className="mt-1 text-xs text-[#6f5a64]">
                      Elin är en AI-rådgivare. Annons: affiliatelänkar.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={value.closeElin}
                    className="grid min-h-11 min-w-11 shrink-0 place-items-center rounded-full border border-[#F1D8DD] bg-white text-[#4B2838] transition hover:bg-[#FFF1F3]"
                    data-elin-close
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
      </dialog>
    </ElinContext.Provider>
  );
}
