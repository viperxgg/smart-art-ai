"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

interface PricingTableProps {
  locale: string;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  yearly: string;
  setup: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  badge?: string;
}

const plansByLocale: Record<string, Plan[]> = {
  sv: [
    {
      id: "essential",
      name: "ESSENTIAL",
      tagline: "En tydlig start för mindre restauranger",
      price: "349",
      yearly: "3 490",
      setup: "1 490",
      features: [
        "QR-meny med egen restauranglänk",
        "Kategorier, priser, ingredienser och kalorier",
        "Waiter requests direkt från bordet",
        "Live-dashboard för serviceflödet",
        "Tabletvänlig administration och upp till 2 språk",
      ],
      buttonText: "Boka Essential",
    },
    {
      id: "signature",
      name: "SIGNATURE",
      tagline: "Vår mest balanserade lösning för modern restaurangdrift",
      price: "599",
      yearly: "5 990",
      setup: "2 990",
      features: [
        "Allt i Essential",
        "Flera menyer för lunch, middag och dryck",
        "Upp till 5 språk och starkare visuell profil",
        "Otillgängliga rätter, highlights och kampanjytor",
        "Prioriterad support och djupare dashboardöverblick",
      ],
      buttonText: "Boka Signature",
      featured: true,
      badge: "Rekommenderas",
    },
  ],
  en: [
    {
      id: "essential",
      name: "ESSENTIAL",
      tagline: "A clean starting point for smaller venues",
      price: "349",
      yearly: "3,490",
      setup: "1,490",
      features: [
        "QR menu with your own restaurant link",
        "Categories, prices, ingredients and calories",
        "Waiter requests directly from the table",
        "Live dashboard for service flow",
        "Tablet-friendly admin and up to 2 languages",
      ],
      buttonText: "Book Essential",
    },
    {
      id: "signature",
      name: "SIGNATURE",
      tagline: "Our most balanced setup for modern restaurant operations",
      price: "599",
      yearly: "5,990",
      setup: "2,990",
      features: [
        "Everything in Essential",
        "Multiple menus for lunch, dinner and drinks",
        "Up to 5 languages and stronger visual branding",
        "Unavailable dishes, highlights and campaign areas",
        "Priority support and deeper dashboard visibility",
      ],
      buttonText: "Book Signature",
      featured: true,
      badge: "Recommended",
    },
  ],
};

export const PricingTable: React.FC<PricingTableProps> = ({ locale }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentPlans = plansByLocale[locale] || plansByLocale.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          Tjanst: `Scandinavian Digital Menu - ${selectedPlan}`,
          Subject:
            locale === "sv"
              ? `Ny förfrågan: ${selectedPlan}`
              : `New inquiry: ${selectedPlan}`,
        }),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copy = {
    launchLabel: locale === "sv" ? "Lanseringserbjudande" : "Launch Offer",
    launchBody:
      locale === "sv"
        ? "De första 10 restaurangerna får gratis setup och fast pris i 12 månader."
        : "The first 10 restaurants get free setup and locked pricing for 12 months.",
    perMonth: locale === "sv" ? "SEK / mån" : "SEK / mo",
    setupLabel: locale === "sv" ? "Setup" : "Setup",
    setupNote: locale === "sv" ? "(engångsavgift)" : "(one-time fee)",
    yearlyLabel: locale === "sv" ? "Årspris" : "Yearly",
    inquiryLabel: locale === "sv" ? "Förfrågan" : "Inquiry",
    inquiryBody:
      locale === "sv"
        ? "Fyll i formuläret så återkommer vi med mer information."
        : "Fill out the form and we will get back to you with more information.",
    thankYou: locale === "sv" ? "Tack!" : "Thank you!",
    thankYouBody:
      locale === "sv"
        ? "Vi har mottagit din förfrågan och återkommer via e-post inom kort."
        : "We have received your request and will contact you by email shortly.",
    closeWindow: locale === "sv" ? "Stäng fönstret" : "Close window",
    yourName: locale === "sv" ? "Ditt namn" : "Your name",
    company: locale === "sv" ? "Restaurang / Företag" : "Restaurant / Company",
    phone: locale === "sv" ? "Telefon" : "Phone",
    send: locale === "sv" ? "Skicka förfrågan" : "Send inquiry",
  };

  return (
    <div className="w-full py-12 relative">
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="rounded-[2rem] border border-[#0F4C3A]/20 bg-gradient-to-r from-[#0F4C3A]/10 via-white/[0.03] to-transparent px-6 py-5">
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-emerald-200/80 mb-2">
            {copy.launchLabel}
          </p>
          <p className="text-white/75 text-sm leading-relaxed">{copy.launchBody}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {currentPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative group p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
              plan.featured
                ? "bg-gradient-to-br from-[#0F4C3A]/10 via-blue-500/5 to-transparent border-[#0F4C3A]/50 shadow-[0_0_40px_rgba(15,76,58,0.15)]"
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            {plan.badge ? (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0F4C3A] text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(15,76,58,0.5)]">
                {plan.badge}
              </div>
            ) : null}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/50 text-sm">{plan.tagline}</p>
            </div>

            <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="text-4xl font-bold text-white tracking-tighter">
                  {plan.price}
                </span>
                <span className="text-sm text-white/50 uppercase tracking-widest font-mono">
                  {copy.perMonth}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] text-emerald-200 font-mono leading-relaxed">
                  {copy.setupLabel}:{" "}
                  <span className="text-white font-bold">{plan.setup} SEK</span>
                  <br />
                  <span className="opacity-50 italic">{copy.setupNote}</span>
                  <br />
                  <span className="opacity-70">
                    {copy.yearlyLabel}: {plan.yearly} SEK
                  </span>
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <div className="mt-1 w-4 h-4 rounded-full bg-[#0F4C3A]/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-200" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <MagneticButton
              onClick={() => setSelectedPlan(plan.name)}
              className={`w-full py-4 rounded-xl text-sm font-bold transition-all ${
                plan.featured
                  ? "bg-[#0F4C3A] text-white hover:bg-[#0F4C3A]"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              {plan.buttonText}
            </MagneticButton>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPlan ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isLoading) setSelectedPlan(null);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isFormSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-[#0F4C3A]/20 flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10 text-emerald-200" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{copy.thankYou}</h2>
                  <p className="text-white/60 mb-8 leading-relaxed">{copy.thankYouBody}</p>
                  <button
                    onClick={() => {
                      setSelectedPlan(null);
                      setIsFormSubmitted(false);
                    }}
                    className="text-emerald-200 font-mono text-sm underline hover:text-emerald-200"
                  >
                    {copy.closeWindow}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-emerald-200 font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
                      {copy.inquiryLabel}
                    </span>
                    <h2 className="text-3xl font-bold text-white">{selectedPlan}</h2>
                    <p className="text-white/40 mt-3 text-sm">{copy.inquiryBody}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="Plan" value={selectedPlan} />
                    <input type="hidden" name="_replyto" value="hello@smartartai.se" />

                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-white/50 uppercase tracking-wider ml-1">
                          {copy.yourName}
                        </label>
                        <input
                          required
                          name="Name"
                          type="text"
                          placeholder="Erik Svensson"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-[#0F4C3A]/50 outline-none transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-white/50 uppercase tracking-wider ml-1">
                            {copy.company}
                          </label>
                          <input
                            required
                            name="Company"
                            type="text"
                            placeholder="Vasa Grillen"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-[#0F4C3A]/50 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-white/50 uppercase tracking-wider ml-1">
                            {copy.phone}
                          </label>
                          <input
                            required
                            name="Phone"
                            type="tel"
                            placeholder="070 000 00 00"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-[#0F4C3A]/50 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-white/50 uppercase tracking-wider ml-1">
                          Email
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="erik@restaurang.se"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-[#0F4C3A]/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <button
                      disabled={isLoading}
                      className="w-full bg-[#0F4C3A] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0F4C3A] transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          {copy.send}
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
