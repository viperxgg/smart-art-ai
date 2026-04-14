"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";

export default function NextStepsSection() {
  const t = useTranslations("NextSteps");

  const steps = [
    { num: "01", text: t("step1") },
    { num: "02", text: t("step2") },
    { num: "03", text: t("step3") },
    { num: "04", text: t("step4"), highlight: true },
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-xl font-light max-w-2xl mx-auto font-mono tracking-wide"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative mb-24">
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-violet-500/0 via-violet-500/30 to-violet-500/0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center flex-1 relative z-10 ${step.highlight ? 'group' : ''}`}
            >
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border font-mono text-sm font-black transition-all duration-500
                ${step.highlight 
                  ? 'bg-violet-600 border-violet-400 text-white shadow-[0_0_40px_rgba(139,92,246,0.5)]' 
                  : 'bg-white/5 border-white/10 text-white/50'
                }
              `}>
                {step.num}
              </div>
              
              <p className={`
                text-xl font-bold tracking-tight px-4 max-w-[240px]
                ${step.highlight ? 'text-violet-400' : 'text-white/60'}
              `}>
                {step.text}
              </p>

              {i < steps.length - 1 && (
                <div className="md:hidden w-[1px] h-12 bg-white/10 my-6" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/20 text-[10px] uppercase tracking-[0.4em] font-mono">
            <Terminal className="w-3 h-3" />
            {t("micro_text")}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
