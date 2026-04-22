import { BarChart3, BellRing, TabletSmartphone, UtensilsCrossed } from "lucide-react";
import { adminMetrics, demoRestaurant } from "@/lib/demo-data";

const copy = {
  en: {
    eyebrow: "Tablet-friendly admin",
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
    eyebrow: "Tablet-vanlig admin",
    title: "Kontrollcenter for restaurangen",
    subtitle: "Folj efterfragan, serviceanrop och menyresultat i en och samma responsiva vy.",
    section: "Prioriterade atgarder",
    cards: [
      "Godkann menyandringar fore kvallsruschen.",
      "Fördela waiter-anrop per zon.",
      "Folj populara ratter och serveringstid.",
    ],
  },
} as const;

export default async function DemoAdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as "en" | "sv"] ?? copy.en;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#12202b_0%,#050505_38%,#020202_100%)] px-4 py-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1600px] flex-col gap-4">
        <section className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-cyan-400/70">{t.eyebrow}</p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl xl:text-5xl">{t.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62 sm:text-base">{t.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 xl:min-w-[420px]">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">{demoRestaurant.name}</p>
                <p className="mt-3 text-2xl font-black text-cyan-300">Live demo</p>
              </div>
              <div className="rounded-[1.4rem] border border-cyan-400/20 bg-cyan-400/8 p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Service health</p>
                <p className="mt-3 text-2xl font-black">Stable</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Live metrics</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Operations snapshot</h2>
              </div>
              <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/55">
                Updated now
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {adminMetrics.map((metric, index) => {
                const icons = [TabletSmartphone, UtensilsCrossed, BellRing, BarChart3];
                const Icon = icons[index] ?? BarChart3;

                return (
                  <section
                    key={metric.label}
                    className="rounded-[1.8rem] border border-white/10 bg-black/30 p-5"
                  >
                    <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-white/55">{metric.label}</p>
                    <p className="mt-2 text-4xl font-black tracking-tight">{metric.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/45">{metric.detail}</p>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">{t.section}</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Shift priorities</h2>
            <div className="mt-5 flex h-full flex-col gap-4">
              {t.cards.map((item, index) => (
                <div
                  key={item}
                  className="flex flex-1 gap-4 rounded-[1.6rem] border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-300">
                    0{index + 1}
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-white/74">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
