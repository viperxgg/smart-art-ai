"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Clock, MousePointerClick, AlertTriangle, Terminal } from "lucide-react";

export default function ProblemSection() {
  const t = useTranslations("Problem");

  const pains = [
    { icon: <MousePointerClick className="w-5 h-5 text-red-500" />, title: t("pain1_title"), desc: t("pain1_desc") },
    { icon: <Clock className="w-5 h-5 text-orange-500" />, title: t("pain2_title"), desc: t("pain2_desc") },
    { icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />, title: t("pain3_title"), desc: t("pain3_desc") },
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 font-mono"
          >
            <Terminal className="w-3 h-3" />
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white max-w-4xl mx-auto tracking-tighter leading-tight"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight font-mono uppercase text-xs opacity-40">{pain.title}</h3>
              <p className="text-white/60 leading-relaxed font-light text-lg">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
