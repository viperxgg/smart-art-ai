"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Heart, Terminal } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactFormModal from "@/components/ui/ContactFormModal";
import type { AppLocale } from "@/lib/site";

export default function FinalCTASection() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const t = useTranslations("FinalCTA");
  const tr = useTranslations("Trust");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logos = [
    { name: "rsmhfjallsjo.se" },
    { name: "Granne" },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 py-40 text-center">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <div className="mb-16 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 w-full text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic md:text-[12px] md:tracking-[0.4em]"
            >
              {tr("proud_participation")}
            </motion.p>
            <div className="flex items-center gap-12 opacity-40 md:gap-24">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl font-black tracking-tighter text-white md:text-6xl"
                >
                  {logo.name}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 shadow-[0_0_20px_rgba(255,255,255,0.02)] md:text-[12px] md:tracking-[0.4em]"
          >
            <Terminal className="h-3 w-3 text-emerald-200" />
            {tr("micro_trust")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 max-w-4xl text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div onClick={() => setIsModalOpen(true)}>
              <MagneticButton>{t("button")}</MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="mb-4 h-12 w-px bg-gradient-to-b from-white/10 to-transparent" />
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-[#0F4C3A] italic">
              <Heart className="h-4 w-4 fill-[#0F4C3A]" />
              <span>After Sales Service</span>
            </div>
            <p className="text-sm font-medium text-white/60 italic">"{tr("after_sales")}"</p>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
        serviceType={locale === "sv" ? "Allmän demo" : "General demo"}
        sourcePage={pathname}
        ctaContext="final-cta"
      />
    </>
  );
}
