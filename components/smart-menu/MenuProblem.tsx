"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { EyeOff, RefreshCcw, Timer } from "lucide-react";

export default function MenuProblem() {
  const t = useTranslations("SmartMenu");

  const blocks = [
    { 
      title: t("pain1_title"), 
      desc: t("pain1_desc"), 
      icon: <EyeOff className="w-6 h-6" /> 
    },
    { 
      title: t("pain2_title"), 
      desc: t("pain2_desc"), 
      icon: <RefreshCcw className="w-6 h-6" /> 
    },
    { 
      title: t("pain3_title"), 
      desc: t("pain3_desc"), 
      icon: <Timer className="w-6 h-6" /> 
    }
  ];

  return (
    <section className="py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
            {t("problem_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {t("problem_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8">
                {block.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{block.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
