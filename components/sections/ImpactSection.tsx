"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

function Counter({ target, duration = 2, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-6xl md:text-9xl font-black text-white mb-4 md:mb-6 tracking-tighter">
      {count}{suffix}
    </span>
  );
}

export default function ImpactSection() {
  const t = useTranslations("Impact");
  const tr = useTranslations("Trust");



  return (
    <section className="relative z-10 w-full py-40 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 text-white max-w-5xl mx-auto leading-tight"
          >
            {tr("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-xl font-light font-mono tracking-wide"
          >
            {tr("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-32 md:mb-48">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center">
            <Counter target={70} suffix="%" />
            <span className="text-white/20 uppercase tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold font-mono text-center max-w-[250px] md:max-w-none">{t("hours")}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
            <Counter target={24} suffix="/7" />
            <span className="text-white/20 uppercase tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold font-mono text-center max-w-[250px] md:max-w-none">{t("people")}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center">
            <Counter target={100} suffix="%" />
            <span className="text-white/20 uppercase tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold font-mono text-center max-w-[250px] md:max-w-none">{t("uptime")}</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
