"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { ElinChat, type ElinFocus } from "@/components/elin/ElinChat";
import { ElinLauncherAvatar } from "@/components/elin/ElinLauncherAvatar";

type ElinContextValue = {
  openElin: (focus?: ElinFocus, initialPrompt?: string) => void;
  closeElin: () => void;
};

// sessionStorage key for the one-time "Fråga mig!" launcher hint (see the
// effects in ElinProvider below) — once set, the hint never shows again for
// the rest of this browser session.
const ELIN_HINT_SEEN_KEY = "elin-launcher-hint-seen";

// First-interaction signals that arm the hint's 2.5s reveal timer.
const HINT_TRIGGER_EVENTS: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart", "scroll"];

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
  const [hintVisible, setHintVisible] = useState(false);
  const isDedicatedPage = pathname === "/fraga-elin";

  // True only for the launcher's very first entrance animation. Flipped to
  // false by onAnimationEnd once that animation actually finishes, so
  // re-opening/closing the chat later never replays it (see the
  // `elin-launcher-btn-entrance` class below). Plain state (not a ref) so
  // it's safe to read during render.
  const [showEntrance, setShowEntrance] = useState(true);
  // True once the "Fråga mig!" hint sequence is permanently done (shown +
  // auto-dismissed, or the chat was opened) — prevents any further trigger
  // this session, independent of React re-renders.
  const hintResolvedRef = useRef(false);
  const hintTimersRef = useRef<{
    show?: ReturnType<typeof setTimeout>;
    hide?: ReturnType<typeof setTimeout>;
  }>({});

  // Cancels the hint forever — called the moment Elin is actually opened
  // (from openElin below), even if that happens before the hint sequence
  // ever fired. Only reads/writes stable refs + the setHintVisible setter,
  // so it's safe to call from a plain event handler (not an effect).
  function cancelHint() {
    hintResolvedRef.current = true;
    setHintVisible(false);
    clearTimeout(hintTimersRef.current.show);
    clearTimeout(hintTimersRef.current.hide);

    try {
      window.sessionStorage.setItem(ELIN_HINT_SEEN_KEY, "1");
    } catch {
      // Storage unavailable (private mode / disabled) — the in-memory ref
      // above still guards the rest of this tab's session.
    }
  }

  // First-interaction, once-per-session "Fråga mig!" tooltip: 2.5s after the
  // visitor's first interaction with the page, show the hint; auto-dismiss
  // it 5s later. Never re-arms once resolved.
  useEffect(() => {
    if (isDedicatedPage || isOpen || hintResolvedRef.current) return;

    try {
      if (window.sessionStorage.getItem(ELIN_HINT_SEEN_KEY)) {
        hintResolvedRef.current = true;
        return;
      }
    } catch {
      // Ignore — fall back to the in-memory guard only.
    }

    // Snapshot the timer box so the cleanup below always clears the same
    // timers it scheduled, regardless of what hintTimersRef.current points
    // to by the time this effect tears down.
    const timers = hintTimersRef.current;

    const triggerHint = () => {
      if (hintResolvedRef.current) return;
      timers.show = setTimeout(() => {
        if (hintResolvedRef.current) return;
        setHintVisible(true);
        timers.hide = setTimeout(() => {
          setHintVisible(false);
          hintResolvedRef.current = true;
          try {
            window.sessionStorage.setItem(ELIN_HINT_SEEN_KEY, "1");
          } catch {
            // Ignore.
          }
        }, 5000);
      }, 2500);
    };

    HINT_TRIGGER_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, triggerHint as EventListener, { once: true, passive: true });
    });

    return () => {
      HINT_TRIGGER_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, triggerHint as EventListener);
      });
      clearTimeout(timers.show);
      clearTimeout(timers.hide);
    };
  }, [isDedicatedPage, isOpen]);

  const value = useMemo<ElinContextValue>(
    () => ({
      openElin(nextFocus, nextPrompt) {
        setFocus(nextFocus ?? null);
        setManualPrompt(nextPrompt ?? null);
        setIsOpen(true);
        setPrefillKey((current) => current + 1);
        cancelHint();
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
              onAnimationEnd={(event) => {
                if (event.animationName === "elin-launcher-entrance") {
                  setShowEntrance(false);
                }
              }}
              className={`elin-launcher-btn${showEntrance ? " elin-launcher-btn-entrance" : ""} fixed right-4 z-[80] grid min-h-16 min-w-16 place-items-center rounded-full bottom-[calc(104px+env(safe-area-inset-bottom))] md:bottom-6 md:right-6 md:min-h-[4.5rem] md:min-w-[4.5rem]`}
              aria-label="Fråga Elin"
            >
              <span className="elin-launcher-pulse-ring" aria-hidden="true" />
              <span className="elin-launcher-pulse-ring elin-launcher-pulse-ring--delay" aria-hidden="true" />
              <span className="elin-launcher-avatar-clip size-16 md:size-[4.5rem]">
                <ElinLauncherAvatar />
              </span>
              <span className={`elin-launcher-hint${hintVisible ? " is-visible" : ""}`} aria-hidden="true">
                Fråga mig! 👋
              </span>
            </button>
          ) : null}

          {isOpen ? (
            <div className="fixed inset-0 z-[90]">
              <button
                type="button"
                aria-label="Stäng Elin"
                onClick={value.closeElin}
                className="elin-backdrop-fade absolute inset-0 bg-[#4B2838]/20 backdrop-blur-sm"
              />
              <aside className="elin-panel-pop absolute inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] top-3 flex min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-[#F1D8DD] bg-[#FFF9F7] shadow-[0_34px_120px_rgba(75,40,56,0.22)] md:inset-auto md:bottom-6 md:right-6 md:h-[min(84vh,46rem)] md:w-[26rem]">
                <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[#F1D8DD] bg-white/72 px-4 py-2.5">
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
