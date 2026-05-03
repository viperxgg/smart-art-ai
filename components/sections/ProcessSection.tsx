"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("Process");

  const steps = [
    { num: "01", title: t("step1_title"), desc: t("step1_desc") },
    { num: "02", title: t("step2_title"), desc: t("step2_desc") },
    { num: "03", title: t("step3_title"), desc: t("step3_desc") },
    { num: "04", title: t("step4_title"), desc: t("step4_desc") },
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#0F4C3A]/0 via-[#0F4C3A]/30 to-[#0F4C3A]/0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-200 font-black text-2xl mb-8 shadow-[0_0_30px_rgba(15,76,58,0.1)] group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-[12px] font-bold text-white/70 mb-4 tracking-[0.2em] uppercase font-mono">{step.title}</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
