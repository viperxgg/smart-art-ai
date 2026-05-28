"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  Check,
  LayoutDashboard,
  QrCode,
  ScanLine,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const heroBenefits = [
  "Beställning utan stress för gästen",
  "Full kontroll över din meny",
  "Tydligt flöde i köket",
];

const featureCards = [
  {
    title: "Gäst",
    body: "Snabb och enkel beställning",
    icon: ScanLine,
  },
  {
    title: "Admin",
    body: "Full kontroll över meny och innehåll",
    icon: LayoutDashboard,
  },
  {
    title: "Kök",
    body: "Tydlig översikt i realtid",
    icon: ChefHat,
  },
];

export default function NordSmartMenu() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#10130f] to-[#1a1a1a] text-[#f7f2ea]">
      <section className="relative overflow-hidden border-b border-white/8 px-6 pb-24 pt-32 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,228,201,0.12),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,76,58,0.18),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_48%)]" />
        <div className="absolute right-[9%] top-28 h-72 w-72 rounded-full bg-[#0F4C3A]/24 blur-[110px]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,460px)] lg:items-center">
          <div className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0F4C3A]/18 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-100 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Nord Smart Menu by Smart Art Ai</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-4xl text-5xl font-black tracking-[-0.04em] text-white md:text-7xl md:leading-[0.95]"
            >
              Nord Smart Menu
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl"
            >
              Ta beställningar snabbare. Färre misstag. Full kontroll i köket.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {heroBenefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/76 shadow-sm backdrop-blur-md"
                >
                  {benefit}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#demo-flow-section"
                className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0F4C3A] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Se hur det fungerar</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/82 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#0F4C3A]/70 hover:bg-[#0F4C3A]/18"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#8ee6c7]/18 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Boka demo</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-2xl text-sm leading-6 text-white/48"
            >
              Riktig meny, tydligt adminläge och fokuserad köksvy i samma produkt.
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
            transition={{
              opacity: { delay: 0.35, duration: 0.7 },
              scale: { delay: 0.35, duration: 0.7 },
              y: {
                delay: 0.9,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/35 backdrop-blur-md md:p-6"
          >
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#10120f] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-100/70">
                    Live meny
                  </p>
                  <p className="mt-1 text-sm font-black text-white">Bord 12</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#0F4C3A]/40 bg-[#0F4C3A]/20 text-emerald-200">
                  <QrCode className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-black text-white">Nordisk lunch</p>
                      <p className="mt-2 text-sm leading-6 text-white/58">
                        Välj, anpassa och skicka direkt till köket.
                      </p>
                    </div>
                    <UtensilsCrossed className="h-5 w-5 text-emerald-100" />
                  </div>
                </div>

                {[
                  { name: "Röding med örter", price: "189 kr", active: true },
                  { name: "Grön soppa", price: "129 kr", active: false },
                  { name: "Äppeldessert", price: "89 kr", active: false },
                ].map((dish) => (
                  <div
                    key={dish.name}
                    className={`rounded-2xl border p-4 transition ${
                      dish.active
                        ? "border-[#0F4C3A]/50 bg-[#0F4C3A]/18"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-white">{dish.name}</p>
                        <p className="mt-1 text-xs text-white/46">Ingredienser och kalorier</p>
                      </div>
                      <p className="text-sm font-black text-emerald-100">{dish.price}</p>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-white/72">Status</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      <Check className="h-3.5 w-3.5" />
                      Klar för beställning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {featureCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.58 + index * 0.12,
                    duration: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0F4C3A]/16 text-emerald-200 transition group-hover:border-[#0F4C3A]/60 group-hover:bg-[#0F4C3A]/24">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-tight text-white">{card.title}</h3>
                  <p className="mt-2 leading-7 text-white/66">{card.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
