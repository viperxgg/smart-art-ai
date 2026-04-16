"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { XCircle, CheckCircle2, ArrowRight, Terminal } from "lucide-react";

export default function BeforeAfterSection() {
  const t = useTranslations("BeforeAfter");

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto font-mono tracking-wide"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/5 border border-white/10 items-center justify-center backdrop-blur-xl">
             <ArrowRight className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>

          {/* LEFT: BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3.5rem] bg-white/[0.01] border border-red-500/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <XCircle className="w-40 h-40 text-red-500" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 font-mono">
               <Terminal className="w-3 h-3" />
               {t("before_label")}
            </div>
            
            <ul className="space-y-8">
              {[t("before_1"), t("before_2"), t("before_3")].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 text-white/40 text-xl font-light"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3.5rem] bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-400/20 relative overflow-hidden group shadow-[0_0_80px_rgba(0,229,255,0.05)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <CheckCircle2 className="w-40 h-40 text-cyan-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 font-mono shadow-[0_0_20px_rgba(0, 229, 255, 0.2)]">
               <Terminal className="w-3 h-3" />
               {t("after_label")}
            </div>

            <ul className="space-y-8">
              {[t("after_1"), t("after_2"), t("after_3")].map((item, i) => (
                <motion.li 
                   key={i} 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.3 + i * 0.1 }}
                   className="flex items-center gap-6 text-white text-2xl font-black tracking-tighter"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
