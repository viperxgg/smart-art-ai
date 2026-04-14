"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileUp, Cpu, QrCode } from "lucide-react";

export default function MenuStepByStep() {
  const t = useTranslations("SmartMenu");

  const steps = [
    {
      num: "01",
      title: t("step1_title"),
      desc: t("step1_desc"),
      icon: <FileUp className="w-6 h-6" />
    },
    {
      num: "02",
      title: t("step2_title"),
      desc: t("step2_desc"),
      icon: <Cpu className="w-6 h-6" />
    },
    {
      num: "03",
      title: t("step3_title"),
      desc: t("step3_desc"),
      icon: <QrCode className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {t("how_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gray-200" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-900 mb-8 hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-[240px] text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
