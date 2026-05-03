import { CheckCircle2, Database, FileCheck2, LockKeyhole, ServerCog, ShieldCheck } from "lucide-react";
import type { AppLocale } from "@/lib/site";

interface InfrastructureSecuritySectionProps {
  locale: AppLocale;
}

const copy = {
  sv: {
    eyebrow: "Trust / Proof",
    title: "Byggt som ett riktigt driftsystem.",
    description:
      "Nord Smart Menu separerar gästyta, adminpanel och köksvy med tydlig rolllogik och teknisk validering innan överlämning.",
    reportTitle: "System Validation",
    reportBody:
      "Varje kundprojekt kan få en intern valideringsrapport som visar vad som har testats.",
    reportStatus: "Verifierad",
    reportScore: "Produktionsberedskap",
    checks: ["Skyddad admin- och köksyta", "Verifierat orderflöde", "Databasbaserad lagring"],
    pillars: [
      {
        title: "Skyddade personalytor",
        text: "Admin och kök hålls separerade från den publika menyn.",
        icon: LockKeyhole,
      },
      {
        title: "Verifierat orderflöde",
        text: "QR till köksvy testas så att beställningar landar rätt.",
        icon: CheckCircle2,
      },
      {
        title: "Databas & stabilitet",
        text: "Serverbaserad lagring minskar risken för tappad driftdata.",
        icon: Database,
      },
      {
        title: "Teknisk validering",
        text: "Status, skydd och funktion dokumenteras före lansering.",
        icon: FileCheck2,
      },
    ],
  },
  en: {
    eyebrow: "Trust / Proof",
    title: "Built as a real operations system.",
    description:
      "Nord Smart Menu separates guest surface, admin panel, and kitchen view with clear role logic and technical validation before handover.",
    reportTitle: "System Validation",
    reportBody:
      "Each customer project can receive an internal validation report showing what has been tested.",
    reportStatus: "Verified",
    reportScore: "Production readiness",
    checks: ["Protected admin and kitchen surfaces", "Verified order flow", "Database-backed storage"],
    pillars: [
      {
        title: "Protected staff surfaces",
        text: "Admin and kitchen stay separate from the public guest menu.",
        icon: LockKeyhole,
      },
      {
        title: "Verified order flow",
        text: "QR to kitchen view is tested so orders land correctly.",
        icon: CheckCircle2,
      },
      {
        title: "Database & stability",
        text: "Server-backed storage reduces the risk of lost operating data.",
        icon: Database,
      },
      {
        title: "Technical validation",
        text: "Status, protection, and functionality are documented before launch.",
        icon: FileCheck2,
      },
    ],
  },
} as const;

export function InfrastructureSecuritySection({ locale }: InfrastructureSecuritySectionProps) {
  const t = copy[locale];

  return (
    <section className="sai-section-soft">
      <div className="sai-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="sai-chip">
            <ShieldCheck className="h-4 w-4 text-[var(--accent-primary)]" />
            {t.eyebrow}
          </div>
          <h2 className="sai-title-lg mt-6">{t.title}</h2>
          <p className="sai-copy-lg mt-5">{t.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.pillars.map(({ title, text, icon: Icon }) => (
              <article key={title} className="sai-card p-5">
                <span className="sai-icon">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="sai-title-md mt-5">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="sai-panel p-5 md:p-6">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="sai-eyebrow text-[var(--text-muted)]">Nord Smart Menu</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white">{t.reportTitle}</h3>
              </div>
              <span className="sai-icon hidden sm:inline-flex">
                <ServerCog className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-5 leading-7 text-[var(--text-muted)]">{t.reportBody}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="sai-card p-4">
                <p className="sai-eyebrow text-[var(--text-muted)]">Status</p>
                <p className="mt-3 font-bold text-white">{t.reportStatus}</p>
              </div>
              <div className="sai-card p-4">
                <p className="sai-eyebrow text-[var(--text-muted)]">{t.reportScore}</p>
                <p className="mt-3 text-4xl font-black tracking-tight text-white">
                  9.6<span className="text-base text-[var(--text-muted)]">/10</span>
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {t.checks.map((item) => (
                <div key={item} className="sai-card flex items-center gap-3 px-4 py-3 text-sm font-medium text-white">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
