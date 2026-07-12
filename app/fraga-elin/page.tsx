import { ElinChat } from "@/components/elin/ElinChat";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Fråga Elin – ärlig AI-produktrådgivare | Elins val",
  description:
    "Beskriv vad du funderar på och låt Elin jämföra produkter inom skönhet, träning och hälsa utan köphets.",
  url: `${siteConfig.url}/fraga-elin`,
  type: "website",
});

export default function FragaElinPage() {
  return (
    <main
      id="content"
      className="w-full max-w-full overflow-x-hidden bg-bg text-ink"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,219,0.72),transparent_30rem),radial-gradient(circle_at_8%_76%,rgba(255,237,232,0.78),transparent_24rem),linear-gradient(90deg,rgba(241,216,221,0.34)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-auto flex h-[100dvh] w-full max-w-6xl flex-col px-4 pb-[env(safe-area-inset-bottom)] pt-4 sm:px-6 lg:h-auto lg:min-h-screen lg:px-8 lg:pb-[calc(8rem+env(safe-area-inset-bottom))] lg:pt-5">
        <div className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:py-10">
          <aside className="hidden flex-col justify-between rounded-[1.8rem] border border-line bg-surface/70 p-5 shadow-[0_26px_80px_rgba(216,120,141,0.12)] backdrop-blur-xl sm:p-7 lg:flex">
            <div>
              <span className="inline-flex min-h-10 items-center rounded-full border border-line bg-surface px-4 text-xs font-black uppercase tracking-[0.14em] text-rose">
                Fråga Elin
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.04] tracking-normal text-ink sm:text-5xl lg:text-6xl">
                Ärliga råd utan köphets.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                Beskriv behov, budget eller produkten du undrar över. Elin jämför
                sortimentet och säger till när du kan hoppa över.
              </p>
            </div>

            <div className="mt-7 rounded-[1.2rem] border border-line bg-surface/78 p-4 text-xs leading-5 text-ink-soft">
              <p>
                Elin är en AI-rådgivare som jämför produkter åt dig. Annons: sidan
                innehåller affiliatelänkar.
              </p>
              <p className="mt-2">
                Råden är generella och ersätter inte personlig rådgivning vid medicinska
                besvär.
              </p>
            </div>
          </aside>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="mb-3 shrink-0 lg:hidden">
              <p className="font-display text-2xl leading-tight text-ink">
                Fråga Elin – ärliga råd utan köphets
              </p>
              <p className="mt-1 text-xs leading-5 text-ink-soft">
                Annons: sidan innehåller affiliatelänkar. Råden ersätter inte personlig
                medicinsk rådgivning.
              </p>
            </div>

            <ElinChat
              hideMobileNav
              className="min-h-0 flex-1 lg:min-h-[36rem]"
              emptyText="Fråga om en produkt, en rutin eller om ett billigare alternativ inom skönhet, träning eller hälsa."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
