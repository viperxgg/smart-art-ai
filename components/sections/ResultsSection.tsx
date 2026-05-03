"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TrendingUp, ShieldCheck, Zap, Users } from "lucide-react";

export default function ResultsSection() {
  const t = useTranslations("Results");

  const results = [
    { icon: <Zap className="w-5 h-5 text-yellow-500" />, text: t("benefit1") },
    { icon: <TrendingUp className="w-5 h-5 text-green-500" />, text: t("benefit2") },
    { icon: <ShieldCheck className="w-5 h-5 text-blue-500" />, text: t("benefit3") },
    { icon: <Users className="w-5 h-5 text-emerald-200" />, text: t("benefit4") },
  ];

  return (
    <section className="py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5">
                {res.icon}
              </div>
              <p className="text-white text-xl font-light tracking-tight leading-relaxed">{res.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
