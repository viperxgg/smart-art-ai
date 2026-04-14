"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Smartphone, Zap, Languages, Award } from "lucide-react";

export default function MenuSolution() {
  const t = useTranslations("SmartMenu");

  const features = [
    {
      title: t("feature_ai_title"),
      desc: t("feature_ai_desc"),
      icon: <Award className="w-5 h-5" />
    },
    {
      title: t("feature_multi_title"),
      desc: t("feature_multi_desc"),
      icon: <Languages className="w-5 h-5" />
    },
    {
      title: t("feature_speed_title"),
      desc: t("feature_speed_desc"),
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.3em] mb-4 block">
                {t("solution_badge")}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
                {t("solution_title")}
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                {t("solution_desc")}
              </p>

              <div className="space-y-8">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="relative z-10 p-8 pt-20 bg-gray-900 rounded-[3rem] shadow-2xl aspect-[9/16] max-w-[320px] mx-auto border-8 border-gray-800">
                {/* Simulated Phone Screen */}
                <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center">
                  <div className="w-12 h-1 rounded-full bg-gray-800" />
                </div>
                
                <div className="space-y-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700" />
                  <div className="h-4 w-3/4 bg-gray-800 rounded-full" />
                  <div className="h-4 w-1/2 bg-gray-800 rounded-full" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="aspect-square rounded-xl bg-gray-800" />
                    <div className="aspect-square rounded-xl bg-gray-800" />
                  </div>
                </div>

                {/* Floating QR Tag */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                     <div className="w-full h-full border-2 border-dashed border-gray-300 rounded" />
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest text-center">Scan & View</span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/5 rounded-full blur-3xl -z-10" />
           </motion.div>
        </div>

      </div>
    </section>
  );
}
