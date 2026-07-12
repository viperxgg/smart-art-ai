"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScoreBarFillProps = {
  value: number;
  max: number;
  className?: string;
};

/**
 * One "Elins poäng" sub-score bar. Fills in via `transform: scaleX` (never
 * `width`) when it scrolls into view, so the animation stays on the
 * compositor — see fixing-motion-performance guidance. Reduced motion
 * renders at the final width immediately, no animation.
 */
export function ScoreBarFill({ value, max, className = "" }: ScoreBarFillProps) {
  const shouldReduceMotion = useReducedMotion();
  const ratio = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;

  return (
    <div
      className={`h-3 overflow-hidden rounded-full bg-rose/15 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left rounded-full bg-gradient-to-r from-rose to-rose-soft"
        initial={{ scaleX: shouldReduceMotion ? ratio : 0 }}
        whileInView={{ scaleX: ratio }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
