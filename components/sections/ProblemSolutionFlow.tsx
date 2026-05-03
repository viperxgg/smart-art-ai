"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Terminal, Zap } from "lucide-react";

export default function ProblemSolutionFlow() {
  const tNS = useTranslations("NextSteps");

  const steps = [
    { num: "01", text: tNS("step1") },
    { num: "02", text: tNS("step2") },
    { num: "03", text: tNS("step3") },
    { num: "04", text: tNS("step4"), highlight: true },
  ];

  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4C3A]/20 border border-[#0F4C3A]/40 text-emerald-200 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 font-mono"
          >
            <Zap className="w-3 h-3" />
            {tNS("micro_text")}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] font-jakarta"
          >
            {tNS("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl font-light max-w-2xl mx-auto font-mono tracking-wide font-body"
          >
            {tNS("subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-[#0F4C3A]/0 via-[#0F4C3A]/20 to-[#0F4C3A]/0" />
          
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
                w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-12 border font-mono text-lg font-black transition-all duration-700
                ${step.highlight
                  ? 'bg-[#0F4C3A] border-[#0F4C3A] text-white shadow-[0_0_50px_rgba(15,76,58,0.3)] rotate-12'
                  : 'bg-white/5 border-white/10 text-white/50 group-hover:border-[#0F4C3A]/30'
                }
              `}>
                {step.num}
              </div>
              
              <h3 className={`
                text-2xl font-black tracking-tight px-6 leading-tight
                ${step.highlight ? 'text-emerald-200' : 'text-white/80'}
              `}>
                {step.text}
              </h3>

              {i < steps.length - 1 && (
                <div className="md:hidden w-[1px] h-16 bg-white/5 my-8" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32 flex flex-col items-center"
        >
          <div className="px-8 py-3 rounded-full bg-red-500/5 border border-red-500/20 text-red-500 text-[11px] uppercase tracking-[0.4em] font-mono shadow-[0_0_20px_rgba(239,68,68,0.1)] flex items-center gap-2">
            <span className="opacity-50">{"root@smartart:~$"}</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear", delay: 1.2 }}
              className="overflow-hidden whitespace-nowrap inline-block"
            >
              {tNS("micro_text")}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4 bg-red-500 inline-block shadow-[0_0_10px_#ef4444]"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0F4C3A]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
