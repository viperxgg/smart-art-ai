"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export default function MenuPricing() {
  const t = useTranslations("SmartMenu");

  const plans = [
    {
      name: t("price_starter_name"),
      desc: t("price_starter_desc"),
      price: "499",
      features: ["Basic QR Menu", "Clean Design", "Single Language", "Support 9-17"],
      isPopular: false
    },
    {
      name: t("price_standard_name"),
      desc: t("price_standard_desc"),
      price: "999",
      features: ["Full Menu + Categories", "AI Visual Preview", "2 Languages (SV/EN)", "Upsell Suggestions", "Priority Support"],
      isPopular: true
    },
    {
      name: t("price_premium_name"),
      desc: t("price_premium_desc"),
      price: "1999",
      features: ["Advanced Animations", "Dashboard Editing", "Visitor Tracking", "Custom Domain", "Dedicated Success Manager"],
      isPopular: false
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            {t("pricing_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border ${
                plan.isPopular ? "border-gray-900 bg-white shadow-2xl scale-105 z-10" : "border-gray-100 bg-gray-50/50"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {t("pricing_standard_tag")}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 font-light text-sm">{plan.desc}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-400 font-light font-mono text-sm leading-none">SEK / mo</span>
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 ${plan.isPopular ? "text-green-500" : "text-gray-300"}`} />
                    <span className="text-sm text-gray-600 font-light">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.isPopular ? "bg-black text-white hover:bg-gray-800" : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
              }`}>
                {t("cta_start")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
