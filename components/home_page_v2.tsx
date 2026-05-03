"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  FileCode2,
  LayoutDashboard,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useLocale } from "next-intl";
import ContactFormModal from "@/components/ui/ContactFormModal";
import { getLocalizedHref, type AppLocale } from "@/lib/site";

const HERO_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const RING_RADIUS = 44;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const RING_TARGET = RING_CIRCUMFERENCE * 0.12;

const heroNodes = [
  { left: "7%", top: "30%", size: "4px", delay: "0s" },
  { left: "18%", top: "68%", size: "3px", delay: "1.4s" },
  { left: "46%", top: "22%", size: "3px", delay: "2.2s" },
  { left: "72%", top: "18%", size: "4px", delay: "0.8s" },
  { left: "85%", top: "58%", size: "3px", delay: "2.8s" },
  { left: "62%", top: "82%", size: "2px", delay: "1.8s" },
] as const;

function splitHeadline(title: string) {
  const words = title.split(" ");

  if (words.length <= 5) {
    return [title];
  }

  const chunkSize = words.length <= 8 ? Math.ceil(words.length / 2) : Math.ceil(words.length / 3);

  return Array.from({ length: Math.ceil(words.length / chunkSize) }, (_, index) =>
    words.slice(index * chunkSize, (index + 1) * chunkSize).join(" "),
  ).filter(Boolean);
}

const copy = {
  sv: {
    badge: "Smart Art AI",
    title: "AI-system som driver verksamheten efter första klicket.",
    subtitle:
      "Vi bygger fokuserade SaaS-system för restauranger och servicebolag: tydliga flöden, mindre admin och bättre beslut i vardagen.",
    primaryCta: "Utforska systemen",
    secondaryCta: "Boka konsultation",
    valueEyebrow: "Vad som förändras",
    valueTitle: "Ett lugnare sätt att driva digitala operationer.",
    values: [
      {
        title: "Det samlar arbetet",
        body: "Meny, RUT, personalflöden och beslut får en tydlig plats.",
        change: "Färre glapp mellan system.",
        icon: Workflow,
      },
      {
        title: "Det styr nästa steg",
        body: "Varje vy visar vad som behöver göras utan extra förklaring.",
        change: "Snabbare handoff i teamet.",
        icon: Activity,
      },
      {
        title: "Det skyddar driften",
        body: "Roller, data och kundflöden byggs med kontroll från start.",
        change: "Tryggare produktion.",
        icon: ShieldCheck,
      },
    ],
    systemsEyebrow: "Produkter",
    systemsTitle: "Två fokuserade system. Samma visuella språk.",
    products: [
      {
        title: "Nord Smart Menu",
        audience: "Restauranger",
        body: "Digital QR-meny, adminpanel, köksvy och Call waiter i ett snabbt mobilt flöde.",
        change: "Gästen beställer tydligare. Köket arbetar lugnare.",
        href: "/om-oss" as const,
        icon: ReceiptText,
      },
      {
        title: "StädSync AI",
        audience: "Städföretag",
        body: "RUT-automation, AI-översättning, personal-PWA och GDPR-klar drift.",
        change: "Mindre manuell kontroll. Färre fel i RUT och uppdrag.",
        href: "/stadsync-ai" as const,
        icon: Bot,
      },
    ],
    processEyebrow: "Process",
    processTitle: "Från idé till fungerande system utan onödiga lager.",
    steps: [
      "Kartlägg flödet som tar mest tid.",
      "Bygg en tydlig första version med riktiga vyer.",
      "Mät användning och skär bort det som inte hjälper.",
    ],
    trustEyebrow: "Trust",
    trustTitle: "Byggt för verksamheter som behöver stabilitet.",
    trust: [
      "TypeScript och Next.js App Router",
      "Server actions där det gör flödet säkrare",
      "Mobil-först med stora touchytor",
      "Inga hemligheter i klientkod",
    ],
    finalTitle: "Redo att göra ett arbetsflöde tydligare?",
    finalBody: "Skicka en kort beskrivning av verksamheten. Vi återkommer med ett konkret första steg.",
    serviceType: "AI-system för digital drift",
    introMessage:
      "Berätta vad som tar tid i dag, så föreslår vi ett tydligt nästa steg.",
    dashboard: {
      title: "Nordic Operations",
      status: "Live system",
      signal: "88",
      signalLabel: "klarhet",
      cards: ["Menyflöde", "RUT-motor", "Adminvy"],
    },
  },
  en: {
    badge: "Smart Art AI",
    title: "AI systems that run your business after the first click.",
    subtitle:
      "We build focused SaaS systems for restaurants and service teams: clearer flows, less admin, and better daily decisions.",
    primaryCta: "Explore systems",
    secondaryCta: "Book consultation",
    valueEyebrow: "What changes",
    valueTitle: "A calmer way to run digital operations.",
    values: [
      {
        title: "It connects the work",
        body: "Menus, RUT, staff flows, and decisions get one clear place.",
        change: "Fewer gaps between systems.",
        icon: Workflow,
      },
      {
        title: "It guides the next step",
        body: "Every view shows what needs attention without extra explanation.",
        change: "Faster handoff across the team.",
        icon: Activity,
      },
      {
        title: "It protects operations",
        body: "Roles, data, and customer flows are built with control from day one.",
        change: "Safer production.",
        icon: ShieldCheck,
      },
    ],
    systemsEyebrow: "Products",
    systemsTitle: "Two focused systems. One visual language.",
    products: [
      {
        title: "Nord Smart Menu",
        audience: "Restaurants",
        body: "Digital QR menu, admin panel, kitchen view, and Call waiter in one fast mobile flow.",
        change: "Guests order clearly. Kitchens work calmer.",
        href: "/om-oss" as const,
        icon: ReceiptText,
      },
      {
        title: "StädSync AI",
        audience: "Cleaning companies",
        body: "RUT automation, AI translation, worker PWA, and GDPR-ready operations.",
        change: "Less manual checking. Fewer RUT and assignment errors.",
        href: "/stadsync-ai" as const,
        icon: Bot,
      },
    ],
    processEyebrow: "Process",
    processTitle: "From idea to working system without unnecessary layers.",
    steps: [
      "Map the workflow that costs the most time.",
      "Build a clear first version with real product views.",
      "Measure usage and remove what does not help.",
    ],
    trustEyebrow: "Trust",
    trustTitle: "Built for teams that need stable operations.",
    trust: [
      "TypeScript and Next.js App Router",
      "Server actions where they make flows safer",
      "Mobile-first with large touch targets",
      "No secrets exposed in client code",
    ],
    finalTitle: "Ready to make one workflow clearer?",
    finalBody: "Send a short description of the business. We will return with a concrete first step.",
    serviceType: "AI systems for digital operations",
    introMessage:
      "Tell us what takes time today, and we will suggest a clear next step.",
    dashboard: {
      title: "Nordic Operations",
      status: "Live system",
      signal: "88",
      signalLabel: "clarity",
      cards: ["Menu flow", "RUT engine", "Admin view"],
    },
  },
} as const;

function SystemVisual({ locale }: { locale: AppLocale }) {
  const t = copy[locale].dashboard;
  const bars = [64, 82, 48, 92, 70, 86];

  return (
    <motion.aside
      className="sai-panel sai-hero-dashboard p-4 md:p-5"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: HERO_EASE, delay: 0.35 }}
    >
      <div className="sai-hero-dashboard-float rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="sai-eyebrow text-[var(--text-muted)]">{t.status}</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">{t.title}</h2>
          </div>
          <span className="sai-icon">
            <LayoutDashboard className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            className="sai-card p-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: HERO_EASE, delay: 0.58 }}
          >
            <div className="sai-hero-ring mx-auto flex aspect-square max-w-36 items-center justify-center rounded-full border border-[rgba(124,255,178,0.18)] p-3">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="var(--accent-primary)"
                  strokeLinecap="round"
                  strokeWidth="6"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: RING_TARGET }}
                  transition={{ duration: 1.35, ease: HERO_EASE, delay: 0.72 }}
                />
              </svg>
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-[var(--bg-card)]">
                <span className="text-4xl font-black">{t.signal}</span>
                <span className="text-xs font-bold uppercase text-[var(--accent-primary)]">
                  {t.signalLabel}
                </span>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-[var(--text-muted)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--accent-primary)]" />
              {t.status}
            </p>
          </motion.div>

          <div className="grid gap-3">
            {t.cards.map((item, index) => (
              <motion.div
                key={item}
                className="sai-card flex items-center justify-between gap-4 p-4"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.56, ease: HERO_EASE, delay: 0.7 + index * 0.1 }}
              >
                <div>
                  <p className="text-sm font-bold text-white">{item}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">Synced</p>
                </div>
                {index === 0 ? (
                  <ReceiptText className="h-5 w-5 text-[var(--accent-primary)]" />
                ) : index === 1 ? (
                  <FileCode2 className="h-5 w-5 text-[var(--accent-secondary)]" />
                ) : (
                  <ShieldCheck className="h-5 w-5 text-[var(--accent-purple)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-4 sai-card p-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: HERO_EASE, delay: 0.9 }}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[var(--text-muted)]">System load</p>
            <p className="text-sm font-bold text-[var(--accent-primary)]">Stable</p>
          </div>
          <div className="flex h-24 items-end gap-2">
            {bars.map((height, index) => (
              <div key={`${height}-${index}`} className="flex h-full flex-1 items-end rounded-full bg-white/[0.05]">
                <motion.div
                  className="sai-hero-bar w-full rounded-full bg-[var(--accent-primary)]"
                  initial={{ height: "16%" }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.76, ease: HERO_EASE, delay: 1.05 + index * 0.07 }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
}

export default function HomePageV2() {
  const locale = useLocale() as AppLocale;
  const t = copy[locale];
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const headlineLines = splitHeadline(t.title);

  return (
    <>
      <main className="sai-page">
        <MotionConfig reducedMotion="user">
          <section className="sai-hero sai-hero-cinematic">
            <div className="sai-hero-nodes" aria-hidden="true">
              {heroNodes.map((node, index) => (
                <span
                  key={`${node.left}-${node.top}`}
                  style={
                    {
                      "--node-left": node.left,
                      "--node-top": node.top,
                      "--node-size": node.size,
                      "--node-delay": node.delay,
                    } as CSSProperties
                  }
                  data-node={index}
                />
              ))}
            </div>

            <div className="sai-container relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:items-center">
              <div>
                <motion.div
                  className="sai-chip"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.56, ease: HERO_EASE, delay: 0.05 }}
                >
                  <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
                  {t.badge}
                </motion.div>
                <h1 className="sai-title-xl mt-7" aria-label={t.title}>
                  {headlineLines.map((line, index) => (
                    <span key={`${line}-${index}`} className="contents">
                      <motion.span
                        aria-hidden="true"
                        className="block"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.76, ease: HERO_EASE, delay: 0.18 + index * 0.11 }}
                      >
                        {line}
                      </motion.span>
                      {index < headlineLines.length - 1 ? " " : null}
                    </span>
                  ))}
                </h1>
                <motion.p
                  className="sai-copy-lg mt-6"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.62,
                    ease: HERO_EASE,
                    delay: 0.34 + headlineLines.length * 0.1,
                  }}
                >
                  {t.subtitle}
                </motion.p>
                <motion.div
                  className="mt-9 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.62,
                    ease: HERO_EASE,
                    delay: 0.48 + headlineLines.length * 0.1,
                  }}
                >
                  <a href="#systems" className="sai-button sai-button-primary sai-hero-primary-cta">
                    {t.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsConsultationOpen(true)}
                    className="sai-button sai-button-secondary"
                  >
                    {t.secondaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              </div>

              <SystemVisual locale={locale} />
            </div>
          </section>
        </MotionConfig>

        <section className="sai-section-soft">
          <div className="sai-container">
            <div className="sai-section-header">
              <p className="sai-eyebrow">{t.valueEyebrow}</p>
              <h2 className="sai-title-lg mt-4">{t.valueTitle}</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.values.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="sai-card sai-card-hover p-6">
                    <span className="sai-icon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="sai-title-md mt-6">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-muted)]">{item.body}</p>
                    <p className="mt-5 text-sm font-bold text-[var(--accent-primary)]">
                      {item.change}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="systems" className="sai-section scroll-mt-28">
          <div className="sai-container">
            <div className="sai-section-header">
              <p className="sai-eyebrow">{t.systemsEyebrow}</p>
              <h2 className="sai-title-lg mt-4">{t.systemsTitle}</h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {t.products.map((product) => {
                const Icon = product.icon;

                return (
                  <Link
                    key={product.title}
                    href={getLocalizedHref(product.href, locale)}
                    className="sai-card sai-card-hover group flex min-h-[340px] flex-col p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="sai-icon">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="sai-chip text-xs">{product.audience}</span>
                    </div>
                    <h3 className="mt-8 text-3xl font-black tracking-tight text-white">
                      {product.title}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
                      {product.body}
                    </p>
                    <p className="mt-5 text-sm font-bold text-[var(--accent-primary)]">
                      {product.change}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-black text-white transition group-hover:text-[var(--accent-primary)]">
                      <span>{locale === "sv" ? "Öppna systemet" : "Open system"}</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sai-section-soft">
          <div className="sai-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="sai-eyebrow">{t.processEyebrow}</p>
              <h2 className="sai-title-lg mt-4">{t.processTitle}</h2>
            </div>

            <div className="grid gap-4">
              {t.steps.map((step, index) => (
                <article key={step} className="sai-card flex gap-4 p-5">
                  <span className="sai-icon shrink-0 text-sm font-black">0{index + 1}</span>
                  <p className="pt-2 text-lg font-semibold leading-7 text-white">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sai-section">
          <div className="sai-container">
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
              <div>
                <p className="sai-eyebrow">{t.trustEyebrow}</p>
                <h2 className="sai-title-lg mt-4">{t.trustTitle}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.trust.map((item) => (
                  <article key={item} className="sai-card flex items-center gap-3 p-5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-primary)]" />
                    <p className="font-semibold leading-7 text-white">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sai-section-soft">
          <div className="sai-container">
            <div className="sai-panel grid gap-8 p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="sai-eyebrow">{locale === "sv" ? "Nästa steg" : "Next step"}</p>
                <h2 className="sai-title-lg mt-4">{t.finalTitle}</h2>
                <p className="sai-copy mt-4">{t.finalBody}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="sai-button sai-button-primary w-full lg:w-auto"
              >
                {t.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <ContactFormModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        locale={locale}
        serviceType={t.serviceType}
        sourcePage="/"
        ctaContext="home-page"
        introMessage={t.introMessage}
      />
    </>
  );
}
