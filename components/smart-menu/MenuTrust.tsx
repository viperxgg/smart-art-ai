"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function MenuTrust() {
  const t = useTranslations("SmartMenu");

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Trusted by modern venues</h2>
          <div className="w-12 h-1 bg-gray-100 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              text: t("trust_quote1"),
              author: t("trust_author1"),
              role: t("trust_role1")
            },
            {
              text: t("trust_quote2"),
              author: t("trust_author2"),
              role: t("trust_role2")
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-start gap-8"
            >
              <Quote className="w-8 h-8 text-gray-200" />
              <p className="text-xl text-gray-700 font-light italic leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-gray-900">{t.author}</div>
                <div className="text-sm text-gray-400 font-mono tracking-widest uppercase">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
