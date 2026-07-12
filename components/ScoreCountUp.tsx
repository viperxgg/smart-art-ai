"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type ScoreCountUpProps = {
  value: number;
  className?: string;
};

/**
 * Animates a headline "Elins poäng" number: counts up from 0 the first time
 * it scrolls into view. Mutates `textContent` directly inside the animation
 * callback instead of calling setState every frame, so this never triggers a
 * React re-render while it runs (see fixing-motion-performance guidance).
 *
 * SSR/no-JS/initial paint always shows the final `value` — only once this
 * hydrates, is in view, and the user has no reduced-motion preference does
 * it reset to 0 and count up. Wired straight to lib/scores.ts — zero manual
 * work per product.
 */
export function ScoreCountUp({ value, className }: ScoreCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px 0px 0px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;

    if (!node || !inView || shouldReduceMotion) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = String(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className={className} data-score-value={value}>
      {value}
    </span>
  );
}
