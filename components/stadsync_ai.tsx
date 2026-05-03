import Link from "next/link";
import StadSyncLeadButton from "@/components/StadSyncLeadButton";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  FileCode2,
  Languages,
  LockKeyhole,
  Route,
  ShieldCheck,
  User,
} from "lucide-react";
import type { AppLocale } from "@/lib/site";
import { getLocalizedHref } from "@/lib/site";
import {
  stadSyncAudienceCards,
  stadSyncComparisonRows,
  stadSyncFaqItems,
  stadSyncPricingOffers,
  stadSyncSeoPages,
  stadSyncSeoSlugs,
} from "@/lib/stadsync-seo";

const copy = {
  sv: {
    productName: "StädSync AI",
    heroTitle: "Ett driftssystem för städföretag som växer ur Excel.",
    heroText:
      "RUT-automation, AI-översättning, personal-PWA och GDPR-klar historik i ett samlat flöde.",
    primaryCta: "Boka teknisk genomgång",
    secondaryCta: "Se flödet",
    problemEyebrow: "Problem",
    problemTitle: "När RUT, instruktioner och personaldata sprids tappar driften fart.",
    processEyebrow: "Så fungerar det",
    processTitle: "Tre steg från kundinstruktion till validerad drift.",
    steps: [
      "Kunddata och uppdrag struktureras i ett tydligt flöde.",
      "AI översätter instruktioner till rätt språk för personalen.",
      "RUT-underlag valideras och exporteras med spårbar historik.",
    ],
    interfaceEyebrow: "Systemflöde",
    interfaceTitle: "Tre motorer som håller ihop den dagliga driften.",
    features: [
      {
        eyebrow: "Kommunikation",
        title: "AI-översättning",
        body: "Svenska kundinstruktioner blir tydliga arbetslistor på rätt språk.",
        change: "Färre missförstånd ute hos kund.",
        icon: Languages,
        visual: "translation" as const,
      },
      {
        eyebrow: "RUT-motor",
        title: "RUT-export",
        body: "Köpare, belopp och XML-underlag kontrolleras innan export.",
        change: "Mindre Excel och färre RUT-fel.",
        icon: FileCode2,
        visual: "rut" as const,
      },
      {
        eyebrow: "Dataskydd",
        title: "GDPR-klar drift",
        body: "Roller, logg och datahygien byggs in i arbetsflödet.",
        change: "Tryggare hantering av kunddata.",
        icon: LockKeyhole,
        visual: "security" as const,
      },
    ],
    comparisonEyebrow: "Före / Efter",
    comparisonTitle: "Från splittrad admin till ett spårbart system.",
    useCasesEyebrow: "Fördjupa",
    useCasesTitle: "Sidor för de vanligaste köpintentionerna.",
    pricingEyebrow: "Pris",
    pricingTitle: "Paket efter teamets storlek.",
    pricingText: "Alla paket bygger på samma grund: AI-kommunikation, RUT-flöde och personal-PWA.",
    standard: "Mest vald",
    evaluationCta: "Starta utvärdering",
    faqTitle: "Vanliga frågor om StädSync AI",
    finalEyebrow: "Nästa steg",
    finalTitle: "Se om StädSync AI passar ert städföretag.",
    finalText: "Vi går igenom RUT-flöde, personalinstruktioner och dataskydd på ett konkret sätt.",
    heroBento: {
      translationTitle: "Instruktioner till rätt språk",
      customer: "Kund",
      customerText: "Kontrollera badrum, ugn och nyckelinstruktioner.",
      worker: "Personal",
      workerText: "Klar arbetslista i PWA.",
      rutSummary: "RUT",
      buyers: "Validerade köpare",
      rows: "XML-rader",
      status: "Redo",
      team: "Team Väst",
      tasks: ["08:30 Villa", "11:15 Kontor", "14:00 Flyttstäd"],
      health: "99.9% spårbart flöde",
    },
  },
  en: {
    productName: "StädSync AI",
    heroTitle: "An operations system for cleaning companies outgrowing Excel.",
    heroText:
      "RUT automation, AI translation, worker PWA, and GDPR-ready history in one connected flow.",
    primaryCta: "Book technical walkthrough",
    secondaryCta: "See the flow",
    problemEyebrow: "Problem",
    problemTitle: "When RUT, instructions, and staff data are scattered, operations slow down.",
    processEyebrow: "How it works",
    processTitle: "Three steps from customer instruction to validated operations.",
    steps: [
      "Customer data and assignments are structured in one clear flow.",
      "AI translates instructions into the right language for workers.",
      "RUT data is validated and exported with traceable history.",
    ],
    interfaceEyebrow: "System flow",
    interfaceTitle: "Three engines that hold daily operations together.",
    features: [
      {
        eyebrow: "Communication",
        title: "AI translation",
        body: "Swedish customer instructions become clear work lists in the right language.",
        change: "Fewer misunderstandings on site.",
        icon: Languages,
        visual: "translation" as const,
      },
      {
        eyebrow: "RUT engine",
        title: "RUT export",
        body: "Buyers, amounts, and XML data are checked before export.",
        change: "Less spreadsheet work and fewer RUT errors.",
        icon: FileCode2,
        visual: "rut" as const,
      },
      {
        eyebrow: "Data protection",
        title: "GDPR-ready operations",
        body: "Roles, logs, and data hygiene are built into the workflow.",
        change: "Safer handling of customer data.",
        icon: LockKeyhole,
        visual: "security" as const,
      },
    ],
    comparisonEyebrow: "Before / After",
    comparisonTitle: "From fragmented admin to one traceable system.",
    useCasesEyebrow: "Explore",
    useCasesTitle: "Pages for the most common buying intents.",
    pricingEyebrow: "Pricing",
    pricingTitle: "Packages by team size.",
    pricingText: "Every package shares the same base: AI communication, RUT flow, and worker PWA.",
    standard: "Most selected",
    evaluationCta: "Start evaluation",
    faqTitle: "Common questions about StädSync AI",
    finalEyebrow: "Next step",
    finalTitle: "See whether StädSync AI fits your cleaning company.",
    finalText: "We walk through RUT flow, staff instructions, and data protection in practical terms.",
    heroBento: {
      translationTitle: "Instructions to the right language",
      customer: "Customer",
      customerText: "Check bathroom, oven, and key instructions.",
      worker: "Worker",
      workerText: "Clear work list in PWA.",
      rutSummary: "RUT",
      buyers: "Validated buyers",
      rows: "XML rows",
      status: "Ready",
      team: "Team West",
      tasks: ["08:30 Villa", "11:15 Office", "14:00 Move-out clean"],
      health: "99.9% traceable flow",
    },
  },
} as const;

export default function StadSyncAI({ locale = "sv" }: { locale?: AppLocale }) {
  const t = copy[locale];
  const audienceCards = stadSyncAudienceCards[locale];
  const comparisonRows = stadSyncComparisonRows[locale];
  const faqItems = stadSyncFaqItems[locale];
  const seoPages = stadSyncSeoSlugs.map((slug) => stadSyncSeoPages[locale][slug]);
  const pricing = stadSyncPricingOffers[locale];

  return (
    <main className="sai-page">
      <section className="sai-hero">
        <div className="sai-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="sai-chip">
              <ShieldCheck className="h-4 w-4 text-[var(--accent-primary)]" />
              {t.productName}
            </div>
            <h1 className="sai-title-xl mt-7">{t.heroTitle}</h1>
            <p className="sai-copy-lg mt-6">{t.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <StadSyncLeadButton
                modalId="stadsync-lead-hero"
                locale={locale}
                className="sai-button sai-button-primary"
              >
                {t.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </StadSyncLeadButton>
              <a href="#flow" className="sai-button sai-button-secondary">
                {t.secondaryCta}
              </a>
            </div>
          </div>

          <HeroBento copy={t.heroBento} />
        </div>
      </section>

      <section className="sai-section-soft">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{t.problemEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{t.problemTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((card) => (
              <article key={card.title} className="sai-card p-6">
                <h3 className="sai-title-md">{card.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="sai-section scroll-mt-28">
        <div className="sai-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
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

      <section className="sai-section-soft">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{t.interfaceEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{t.interfaceTitle}</h2>
          </div>

          <div className="mt-10 grid gap-5">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="sai-card grid gap-6 p-5 md:p-7 lg:grid-cols-2 lg:items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="sai-icon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="sai-eyebrow mt-7 text-[var(--text-muted)]">{feature.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white">{feature.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--text-muted)]">{feature.body}</p>
                    <p className="mt-5 text-sm font-bold text-[var(--accent-primary)]">{feature.change}</p>
                  </div>
                  <FeatureVisual type={feature.visual} reversed={index % 2 === 1} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{t.comparisonEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{t.comparisonTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {comparisonRows.map((row) => (
              <article key={row.label} className="sai-card p-6">
                <h3 className="sai-title-md">{row.label}</h3>
                <div className="mt-5 grid gap-3">
                  <p className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-4 leading-7 text-[var(--text-muted)]">
                    {row.before}
                  </p>
                  <p className="rounded-xl border border-[rgba(124,255,178,0.18)] bg-[rgba(124,255,178,0.06)] p-4 leading-7 text-white">
                    {row.after}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section-soft">
        <div className="sai-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="sai-eyebrow">{t.useCasesEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{t.useCasesTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {seoPages.slice(0, 6).map((page) => (
              <Link
                key={page.slug}
                href={getLocalizedHref(page.pathname, locale)}
                className="sai-card sai-card-hover p-5"
              >
                <p className="sai-eyebrow text-[var(--text-muted)]">{page.eyebrow}</p>
                <h3 className="sai-title-md mt-3">{page.primaryKeyword}</h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="sai-section scroll-mt-28">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{t.pricingEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{t.pricingTitle}</h2>
            <p className="sai-copy mt-4">{t.pricingText}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <article key={plan.name} className="sai-card flex flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="sai-eyebrow">{plan.name}</p>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{plan.audience}</h3>
                  </div>
                  {index === 1 ? <span className="sai-chip text-xs">{t.standard}</span> : null}
                </div>
                <div className="mt-7 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-5">
                  <p className="text-4xl font-black tracking-tight text-white">{plan.price}</p>
                </div>
                <div className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-white">
                      <Check className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <StadSyncLeadButton
                  modalId={`stadsync-lead-plan-${index}`}
                  locale={locale}
                  planName={plan.name}
                  planSubtitle={plan.audience}
                  planPrice={plan.price}
                  className="sai-button sai-button-primary mt-auto w-full"
                >
                  {t.evaluationCta}
                  <ArrowRight className="h-4 w-4" />
                </StadSyncLeadButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section-soft">
        <div className="sai-container">
          <h2 className="sai-title-lg">{t.faqTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.question} className="sai-card p-5">
                <h3 className="sai-title-md">{item.question}</h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container">
          <div className="sai-panel grid gap-8 p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="sai-eyebrow">{t.finalEyebrow}</p>
              <h2 className="sai-title-lg mt-4">{t.finalTitle}</h2>
              <p className="sai-copy mt-4">{t.finalText}</p>
            </div>
            <StadSyncLeadButton
              modalId="stadsync-lead-final"
              locale={locale}
              className="sai-button sai-button-primary w-full lg:w-auto"
            >
              {t.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </StadSyncLeadButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroBento({ copy: t }: { copy: (typeof copy)[AppLocale]["heroBento"] }) {
  return (
    <aside className="sai-panel p-4 md:p-5">
      <div className="grid gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4 md:grid-cols-5">
        <div className="sai-card p-5 md:col-span-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="sai-eyebrow text-[var(--text-muted)]">Translation node</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white">{t.translationTitle}</h2>
            </div>
            <BrainCircuit className="h-7 w-7 text-[var(--accent-primary)]" />
          </div>
          <div className="mt-7 grid gap-3">
            <FlowCard label={t.customer} title="Svenska" text={t.customerText} />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[var(--border-soft)]" />
              <Languages className="h-5 w-5 text-[var(--accent-primary)]" />
              <div className="h-px flex-1 bg-[var(--border-soft)]" />
            </div>
            <FlowCard label={t.worker} title="PWA" text={t.workerText} accent />
          </div>
        </div>

        <div className="sai-card p-5 md:col-span-2">
          <p className="sai-eyebrow text-[var(--text-muted)]">{t.rutSummary}</p>
          <div className="mt-6 grid gap-3">
            <Metric label={t.buyers} value="18" />
            <Metric label={t.rows} value="142" />
            <Metric label="Status" value={t.status} />
          </div>
        </div>

        <div className="sai-card p-5 md:col-span-2">
          <p className="sai-eyebrow text-[var(--text-muted)]">{t.team}</p>
          <div className="mt-5 space-y-3">
            {t.tasks.map((task) => (
              <div key={task} className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-4 py-3">
                <span className="text-sm font-semibold text-white">{task}</span>
                <Route className="h-4 w-4 text-[var(--accent-primary)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="sai-card p-5 md:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="sai-eyebrow text-[var(--text-muted)]">Platform health</p>
              <p className="mt-3 text-2xl font-black text-white">{t.health}</p>
            </div>
            <div className="sai-chip">
              <Check className="h-4 w-4 text-[var(--accent-primary)]" />
              Synced
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-4 py-3">
      <span className="text-sm text-[var(--text-muted)]">{label}</span>
      <span className="font-black text-white">{value}</span>
    </div>
  );
}

function FeatureVisual({
  type,
  reversed,
}: {
  type: (typeof copy)[AppLocale]["features"][number]["visual"];
  reversed: boolean;
}) {
  const className = `rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-5 ${reversed ? "lg:order-1" : ""}`;

  if (type === "translation") {
    return (
      <div className={className}>
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <FlowCard label="Input" title="Svenska" text="Instruktioner, tider och särskilda önskemål." />
          <div className="flex justify-center">
            <span className="sai-icon h-16 w-16">
              <BrainCircuit className="h-7 w-7" />
            </span>
          </div>
          <FlowCard label="Output" title="Arabiska / Engelska" text="Tydlig arbetslista i personalens PWA." accent />
        </div>
      </div>
    );
  }

  if (type === "rut") {
    return (
      <div className={className}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="sai-eyebrow text-[var(--text-muted)]">HushallBegaran.xml</p>
            <h4 className="mt-3 text-2xl font-black text-white">Validated export</h4>
          </div>
          <div className="sai-chip">
            <Check className="h-4 w-4 text-[var(--accent-primary)]" />
            Validated
          </div>
        </div>
        <pre className="mt-6 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5 text-xs leading-6 text-[var(--accent-primary)]">
{`<RutAvdrag status="validated">
  <Buyer checked="true" />
  <Amount currency="SEK">9210</Amount>
  <Export target="Skatteverket" />
</RutAvdrag>`}
        </pre>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Database, title: "Encrypted storage", text: "Server-side handling for sensitive fields." },
          { icon: ShieldCheck, title: "Data hygiene", text: "Automatic cleanup after retention rules." },
          { icon: User, title: "Role control", text: "Separate admin and worker views." },
          { icon: Code2, title: "Traceable log", text: "Clear history for changes and export." },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="sai-card p-4">
              <span className="sai-icon h-11 w-11">
                <Icon className="h-5 w-5" />
              </span>
              <h4 className="mt-5 font-black text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FlowCard({
  label,
  title,
  text,
  accent = false,
}: {
  label: string;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent
          ? "border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)]"
          : "border-[var(--border-soft)] bg-[var(--bg-soft)]"
      }`}
    >
      <p className="sai-eyebrow text-[var(--text-muted)]">{label}</p>
      <h4 className="mt-3 text-xl font-black text-white">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{text}</p>
    </div>
  );
}
