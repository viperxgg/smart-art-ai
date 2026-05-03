import { kitchenTickets } from "@/lib/demo-data";
import { buildMetadata } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

const copy = {
  en: {
    title: "Kitchen display system",
    subtitle: "Clear order states with fast visual scanning for the line.",
    columns: {
      new: "New",
      firing: "In progress",
      ready: "Ready",
    },
  },
  sv: {
    title: "Kitchen display system",
    subtitle: "Tydliga orderstatusar med snabb visuell scanning för köket.",
    columns: {
      new: "Nya",
      firing: "På gång",
      ready: "Klara",
    },
  },
} as const;

const statusClasses = {
  new: "border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)]",
  firing: "border-amber-400/20 bg-amber-400/10",
  ready: "border-emerald-400/20 bg-emerald-400/10",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/demo/kitchen",
    title: locale === "sv" ? "Live demo: kökssystem för restaurang" : "Live Demo: Restaurant Kitchen Display",
    description:
      locale === "sv"
        ? "Live demo av restaurangens kitchen display system med tydliga orderstatusar för nya, pågående och klara ordrar."
        : "Live demo of the restaurant kitchen display system with clear states for new, in-progress, and ready orders.",
    noIndex: true,
  });
}

export default async function DemoKitchenPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;

  return (
    <main className="min-h-screen bg-[#020202] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-amber-300/70">Kitchen KDS demo</p>
          <h1 className="text-4xl font-black tracking-tight">{t.title}</h1>
          <p className="mt-3 text-white/60">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {(["new", "firing", "ready"] as const).map((status) => (
            <section key={status} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-black uppercase tracking-[0.16em] text-white/80">
                  {t.columns[status]}
                </h2>
                <span className={`rounded-full border px-3 py-1 text-xs ${statusClasses[status]}`}>
                  {kitchenTickets.filter((ticket) => ticket.status === status).length}
                </span>
              </div>

              <div className="space-y-3">
                {kitchenTickets
                  .filter((ticket) => ticket.status === status)
                  .map((ticket) => (
                    <article
                      key={ticket.id}
                      className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-white/40">{ticket.id}</p>
                          <p className="mt-1 text-2xl font-black">Table {ticket.table}</p>
                        </div>
                        <p className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/65">
                          {ticket.eta}
                        </p>
                      </div>
                      <ul className="space-y-2 text-sm text-white/70">
                        {ticket.items.map((item) => (
                          <li
                            key={`${ticket.id}-${item.name}-${item.quantity}`}
                            className="rounded-2xl border border-white/8 px-3 py-2"
                          >
                            {item.quantity}x {item.name}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
