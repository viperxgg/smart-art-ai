"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Terminal, Bot } from "lucide-react";

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
            className="text-3xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto font-mono tracking-wide"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative mb-24">
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#0F4C3A]/0 via-[#0F4C3A]/30 to-[#0F4C3A]/0" />
          
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
                  ? 'bg-[#0F4C3A] border-[#0F4C3A] text-white shadow-[0_0_40px_rgba(15,76,58,0.5)]'
                  : 'bg-white/5 border-white/10 text-white/50'
                }
              `}>
                {step.num}
              </div>
              
              <p className={`
                text-xl font-bold tracking-tight px-4 max-w-[240px]
                ${step.highlight ? 'text-emerald-200' : 'text-white/60'}
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-200 text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8 font-mono"
        >
          <Bot className="w-3 h-3" />
          {t("badge")}
        </motion.div>
      </div>
    </section>
  );
}
