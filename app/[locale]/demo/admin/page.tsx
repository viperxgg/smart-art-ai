import { BarChart3, BellRing, TabletSmartphone, UtensilsCrossed } from "lucide-react";
import { adminMetrics, demoRestaurant } from "@/lib/demo-data";
import { buildMetadata } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Tablet-friendly admin demo",
    title: "Restaurant control center",
    subtitle: "Monitor live demand, service alerts, and menu performance from a single responsive dashboard.",
    section: "Priority actions",
    cards: [
      "Approve menu edits before dinner rush.",
      "Assign waiter requests by zone.",
      "Track dish popularity and service speed.",
    ],
  },
  sv: {
    eyebrow: "Tabletvänlig admin-demo",
    title: "Kontrollcenter för restaurangen",
    subtitle: "Följ efterfrågan, serviceanrop och menyresultat i en och samma responsiva vy.",
    section: "Prioriterade åtgärder",
    cards: [
      "Godkänn menyändringar före kvällsruschen.",
      "Fördela waiter-anrop per zon.",
      "Följ populära rätter och serveringstid.",
    ],
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/demo/admin",
    title:
      locale === "sv"
        ? "Live demo: kontrollcenter för restaurang"
        : "Live Demo: Restaurant Control Center",
    description:
      locale === "sv"
        ? "Tabletvänlig live demo av restaurangens adminvy för order, serviceanrop och menyöverblick."
        : "Tablet-friendly live demo of the restaurant admin view for orders, service alerts, and menu visibility.",
    noIndex: true,
  });
}

export default async function DemoAdminPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-emerald-200/70">{t.eyebrow}</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight">{t.title}</h1>
              <p className="mt-3 max-w-2xl text-white/60">{t.subtitle}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-right">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">{demoRestaurant.name}</p>
              <p className="text-lg font-bold text-emerald-200">Live demo</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminMetrics.map((metric, index) => {
            const icons = [TabletSmartphone, UtensilsCrossed, BellRing, BarChart3];
            const Icon = icons[index] ?? BarChart3;

            return (
              <section
                key={metric.label}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
              >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-white/55">{metric.label}</p>
                <p className="mt-2 text-4xl font-black tracking-tight">{metric.value}</p>
                <p className="mt-3 text-sm text-white/45">{metric.detail}</p>
              </section>
            );
          })}
        </div>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-white/45">{t.section}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.cards.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 text-white/72">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
