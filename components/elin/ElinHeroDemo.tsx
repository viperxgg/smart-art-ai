"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const demoExamples = [
  {
    question: "Jag har torr hud, var börjar jag?",
    answer:
      "Håll det enkelt: mild rengöring + en rik fuktkräm. Du behöver inte allt på en gång 🌿",
  },
  {
    question: "Är ett dyrt serum värt det?",
    answer:
      "Oftast inte – ett prisvärt ger samma resultat. Spara pengarna 💰",
  },
  {
    question: "Bästa mot frizz?",
    answer:
      "Ett anti-frizz serum på fuktigt hår + mindre värme. Jag tipsar gärna om ett prisvärt.",
  },
  {
    question: "Vilken fläkt för sovrummet?",
    answer:
      "Den tystaste du har råd med – kolla nattläge och ljudnivå.",
  },
] as const;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onStoreChange);

  return () => {
    query.removeEventListener("change", onStoreChange);
  };
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export function ElinHeroDemo() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [exampleIndex, setExampleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentExample = prefersReducedMotion ? demoExamples[0] : demoExamples[exampleIndex];
  const visibleQuestion = prefersReducedMotion
    ? currentExample.question
    : currentExample.question.slice(0, typedLength);
  const answerIsVisible = prefersReducedMotion || showAnswer;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (typedLength < currentExample.question.length) {
      const timeout = window.setTimeout(() => {
        setTypedLength((length) => length + 1);
      }, 34);

      return () => window.clearTimeout(timeout);
    }

    if (!showAnswer) {
      const timeout = window.setTimeout(() => {
        setShowAnswer(true);
      }, 420);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setExampleIndex((index) => (index + 1) % demoExamples.length);
      setTypedLength(0);
      setShowAnswer(false);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, [currentExample.question, prefersReducedMotion, showAnswer, typedLength]);

  return (
    <div
      className="w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-[#F1D8DD] bg-[#FFF9F7]/86 p-3 shadow-[0_28px_86px_rgba(75,40,56,0.14)] backdrop-blur-xl sm:rounded-[2rem] sm:p-4"
      aria-label="Exempel på frågor till Elin"
      data-elin-hero-demo
    >
      <div className="flex items-center justify-between gap-3 rounded-[1.25rem] border border-[#F1D8DD] bg-white/72 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-black text-[#4B2838]">Elin</p>
          <p className="mt-0.5 truncate text-xs font-bold text-[#8b6974]">
            kort, ärligt, utan köphets
          </p>
        </div>
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#E8B1BC]" />
          <span className="size-2.5 rounded-full bg-[#D8788D]" />
          <span className="size-2.5 rounded-full bg-[#7B4358]" />
        </div>
      </div>

      <div className="mt-3 min-h-[17.5rem] space-y-3 rounded-[1.35rem] bg-[#fff4f5] p-3 sm:min-h-[18.5rem] sm:p-4">
        <div className="flex justify-end">
          <div className="min-h-[5.75rem] max-w-[90%] rounded-[1.25rem] rounded-tr-md bg-[#D8788D] px-4 py-3 text-[#FFF9F7] shadow-[0_16px_38px_rgba(216,120,141,0.22)] sm:max-w-[82%]">
            <p
              className="break-words text-sm font-black leading-6 sm:text-[0.95rem]"
              data-elin-demo-question
            >
              {visibleQuestion}
              {!prefersReducedMotion && !showAnswer ? (
                <span className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-[#FFF9F7]" />
              ) : null}
            </p>
          </div>
        </div>

        <div
          className={`flex justify-start transition ${
            answerIsVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="min-h-[7.75rem] max-w-[94%] rounded-[1.25rem] rounded-tl-md border border-[#F1D8DD] bg-white px-4 py-3 text-[#4B2838] shadow-[0_18px_46px_rgba(75,40,56,0.08)] sm:max-w-[86%]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Elin
            </p>
            <p
              className="mt-2 break-words text-sm font-bold leading-6 text-[#5f4650] sm:text-[0.95rem]"
              data-elin-demo-answer
            >
              {currentExample.answer}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
        {demoExamples.map((example, index) => (
          <span
            key={example.question}
            className={`h-1.5 rounded-full transition ${
              index === exampleIndex ? "bg-[#D8788D]" : "bg-[#F1D8DD]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
