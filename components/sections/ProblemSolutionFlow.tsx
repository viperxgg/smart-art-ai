"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Step = {
  num: string;
  text: string;
  highlight?: boolean;
};

const ACTIVE_BREAKPOINTS = [0.28, 0.5, 0.72];

function getActiveIndex(progress: number) {
  if (progress < ACTIVE_BREAKPOINTS[0]) {
    return 0;
  }

  if (progress < ACTIVE_BREAKPOINTS[1]) {
    return 1;
  }

  if (progress < ACTIVE_BREAKPOINTS[2]) {
    return 2;
  }

  return 3;
}

function StepCard({
  step,
  index,
  progress,
  activeIndex,
  isMobile,
  reduceMotion,
}: {
  step: Step;
  index: number;
  progress: MotionValue<number>;
  activeIndex: number;
  isMobile: boolean;
  reduceMotion: boolean;
}) {
  const revealStart = 0.08 + index * 0.15;
  const revealEnd = revealStart + 0.2;
  const revealOpacity = useTransform(progress, [revealStart, revealEnd], [0.18, 1]);
  const revealY = useTransform(progress, [revealStart, revealEnd], [isMobile ? 18 : 30, 0]);
  const blur = useTransform(progress, [revealStart, revealEnd], [7, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  const isActive = activeIndex === index;
  const floatDistance = reduceMotion ? 0 : isMobile ? 2 + (index % 2) : 3 + (index % 3);
  const accentRing = step.highlight
    ? "rgba(34, 211, 238, 0.45)"
    : "rgba(34, 211, 238, 0.2)";
  const activeShadow = step.highlight
    ? "0 0 0 1px rgba(34, 211, 238, 0.55), 0 20px 70px rgba(34, 211, 238, 0.24), 0 0 110px rgba(14, 165, 233, 0.18)"
    : "0 0 0 1px rgba(34, 211, 238, 0.28), 0 18px 46px rgba(34, 211, 238, 0.14)";
  const restingShadow = step.highlight
    ? "0 0 0 1px rgba(34, 211, 238, 0.18), 0 16px 38px rgba(34, 211, 238, 0.08)"
    : "0 0 0 1px rgba(255, 255, 255, 0.08)";

  return (
    <motion.div
      style={{ opacity: revealOpacity, y: revealY, filter }}
      className="relative"
    >
      <motion.article
        animate={{
          scale: reduceMotion ? 1 : isActive ? 1.05 : 1,
          y: reduceMotion ? 0 : [0, -floatDistance, 0],
          boxShadow:
            step.highlight && activeIndex === 3
              ? [
                  "0 0 0 1px rgba(34, 211, 238, 0.45), 0 18px 55px rgba(34, 211, 238, 0.18)",
                  "0 0 0 1px rgba(34, 211, 238, 0.75), 0 24px 78px rgba(34, 211, 238, 0.3)",
                  "0 0 0 1px rgba(34, 211, 238, 0.45), 0 18px 55px rgba(34, 211, 238, 0.18)",
                ]
              : isActive
                ? activeShadow
                : restingShadow,
        }}
        transition={{
          scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          boxShadow:
            step.highlight && activeIndex === 3
              ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.35, ease: "easeOut" },
          y: reduceMotion
            ? { duration: 0 }
            : {
                duration: 5.5 + index,
                delay: index * 0.25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              },
        }}
        className={`group relative h-full overflow-hidden rounded-[28px] border px-5 py-5 text-left backdrop-blur-xl transition-colors duration-500 md:px-6 md:py-6 ${
          isActive
            ? "border-cyan-400/40 bg-white/[0.075]"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <motion.div
          aria-hidden="true"
          animate={{
            opacity: isActive ? (step.highlight ? 0.22 : 0.16) : step.highlight ? 0.12 : 0.06,
          }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.32),transparent_62%)]"
        />

        <div className="relative flex items-start gap-4 md:flex-col md:gap-6">
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.7,
              borderColor: isActive ? accentRing : "rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.35 }}
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] border text-base font-black font-mono md:h-20 md:w-20 md:text-lg ${
              step.highlight
                ? "bg-cyan-400 text-black"
                : "bg-white/6 text-white/80"
            }`}
          >
            {step.num}
          </motion.div>

          <div className="min-w-0 flex-1">
            <motion.p
              animate={{ opacity: isActive ? 1 : 0.58 }}
              transition={{ duration: 0.35 }}
              className="mb-3 text-[11px] uppercase tracking-[0.38em] text-white/45 font-mono"
            >
              {step.num}
            </motion.p>
            <motion.h3
              animate={{ opacity: isActive ? 1 : 0.72 }}
              transition={{ duration: 0.35 }}
              className={`max-w-[16ch] text-xl font-black tracking-tight text-balance md:text-[1.75rem] md:leading-[1.05] ${
                step.highlight ? "text-cyan-300" : "text-white"
              }`}
            >
              {step.text}
            </motion.h3>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ProblemSolutionFlow() {
  const tNS = useTranslations("NextSteps");
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const steps: Step[] = [
    { num: "01", text: tNS("step1") },
    { num: "02", text: tNS("step2") },
    { num: "03", text: tNS("step3") },
    { num: "04", text: tNS("step4"), highlight: true },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "end 34%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.35,
  });

  const lineProgress = useSpring(
    useTransform(smoothProgress, [0.12, 0.86], [0, 1]),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.32,
    }
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const nextActiveIndex = getActiveIndex(latest);
    setActiveIndex((current) =>
      current === nextActiveIndex ? current : nextActiveIndex
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-56 w-[46rem] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-300"
          >
            <Zap className="h-3 w-3" />
            {tNS("micro_text")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-4xl font-black tracking-tighter text-white md:text-7xl md:leading-[0.9]"
          >
            {tNS("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-white/72 md:text-lg"
          >
            {tNS("subtitle")}
          </motion.p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-[1.55rem] top-0 w-px bg-white/8 md:hidden" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineProgress }}
            className="pointer-events-none absolute bottom-0 left-[1.55rem] top-0 w-px origin-top bg-gradient-to-b from-cyan-300 via-sky-400 to-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.7)] md:hidden"
          />

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px bg-white/8 md:block" />
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden overflow-hidden md:block">
            <motion.div
              aria-hidden="true"
              style={{ scaleX: lineProgress }}
              className="h-px origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
            />
          </div>
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px blur-[10px] md:block">
            <motion.div
              aria-hidden="true"
              style={{ scaleX: lineProgress }}
              className="h-full origin-left bg-gradient-to-r from-cyan-300/60 via-sky-400/70 to-cyan-200/60"
            />
          </div>

          <div className="flex flex-col gap-5 pl-8 md:grid md:grid-cols-4 md:gap-6 md:pl-0">
            {steps.map((step, index) => (
              <StepCard
                key={step.num}
                step={step}
                index={index}
                progress={smoothProgress}
                activeIndex={activeIndex}
                isMobile={isMobile}
                reduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-[22rem] w-[54rem] -translate-x-1/2 rounded-full bg-cyan-400/6 blur-[150px]" />
    </section>
  );
}
