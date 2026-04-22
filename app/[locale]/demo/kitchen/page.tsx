import { kitchenTickets } from "@/lib/demo-data";

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
    subtitle: "Tydliga orderstatusar med snabb visuell scanning for koket.",
    columns: {
      new: "Nya",
      firing: "Pa gang",
      ready: "Klara",
    },
  },
} as const;

const statusClasses = {
  new: "border-cyan-400/20 bg-cyan-400/10",
  firing: "border-amber-400/20 bg-amber-400/10",
  ready: "border-emerald-400/20 bg-emerald-400/10",
} as const;

export default async function DemoKitchenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as "en" | "sv"] ?? copy.en;
  const statusMeta = {
    new: {
      border: "border-cyan-400/20",
      badge: "bg-cyan-400/12 text-cyan-200",
      glow: "from-cyan-400/16",
    },
    firing: {
      border: "border-amber-400/20",
      badge: "bg-amber-400/12 text-amber-200",
      glow: "from-amber-400/16",
    },
    ready: {
      border: "border-emerald-400/20",
      badge: "bg-emerald-400/12 text-emerald-200",
      glow: "from-emerald-400/16",
    },
  } as const;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#12202b_0%,#050505_38%,#020202_100%)] px-4 py-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1600px] flex-col gap-4">
        <section className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-amber-300/70">Kitchen KDS</p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl xl:text-5xl">{t.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62 sm:text-base">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 xl:min-w-[440px]">
              {(["new", "firing", "ready"] as const).map((status) => (
                <div
                  key={status}
                  className={`rounded-[1.4rem] border ${statusMeta[status].border} bg-white/[0.03] p-4`}
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">{t.columns[status]}</p>
                  <p className="mt-3 text-3xl font-black">
                    {kitchenTickets.filter((ticket) => ticket.status === status).length}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-3">
          {(["new", "firing", "ready"] as const).map((status) => (
            <section
              key={status}
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 xl:min-h-0 ${statusMeta[status].border}`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${statusMeta[status].glow} to-transparent`}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-black uppercase tracking-[0.22em] text-white/82 sm:text-lg">
                    {t.columns[status]}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusMeta[status].badge}`}
                  >
                    {kitchenTickets.filter((ticket) => ticket.status === status).length}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  {kitchenTickets
                    .filter((ticket) => ticket.status === status)
                    .map((ticket) => (
                      <article
                        key={ticket.id}
                        className="flex h-full min-h-[220px] flex-col rounded-[1.6rem] border border-white/10 bg-black/40 p-5"
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-white/38">{ticket.id}</p>
                            <p className="mt-2 text-3xl font-black sm:text-4xl">Table {ticket.table}</p>
                          </div>
                          <p className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70">
                            {ticket.eta}
                          </p>
                        </div>

                        <ul className="mt-auto space-y-2.5 text-sm text-white/74">
                          {ticket.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
