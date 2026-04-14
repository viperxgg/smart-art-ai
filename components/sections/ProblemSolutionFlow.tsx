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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 font-mono"
          >
            <Zap className="w-3 h-3" />
            Vår Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]"
          >
            {tNS("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-xl font-light max-w-2xl mx-auto font-mono tracking-wide"
          >
            {tNS("subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0" />
          
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
                  ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_50px_rgba(34,211,238,0.3)] rotate-12' 
                  : 'bg-white/5 border-white/10 text-white/50 group-hover:border-cyan-500/30'
                }
              `}>
                {step.num}
              </div>
              
              <h3 className={`
                text-2xl font-black tracking-tight px-6 leading-tight
                ${step.highlight ? 'text-cyan-400' : 'text-white/80'}
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
          <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/20 text-[10px] uppercase tracking-[0.5em] font-mono">
            {tNS("micro_text")}
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
