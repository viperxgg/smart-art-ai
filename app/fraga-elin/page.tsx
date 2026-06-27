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
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#130e12] text-white"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,120,141,0.22),transparent_28rem),radial-gradient(circle_at_8%_76%,rgba(159,201,187,0.12),transparent_24rem),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-5 sm:px-6 lg:px-8">
        <div className="grid flex-1 gap-6 py-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:py-10">
          <aside className="flex flex-col justify-between rounded-[1.8rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-7">
            <div>
              <span className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/[0.08] px-4 text-xs font-black uppercase tracking-[0.14em] text-[#efa4ad]">
                Fråga Elin
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
                Ärliga råd utan köphets.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Beskriv behov, budget eller produkten du undrar över. Elin jämför
                sortimentet och säger till när du kan hoppa över.
              </p>
            </div>

            <div className="mt-7 rounded-[1.2rem] border border-white/10 bg-black/18 p-4 text-xs leading-5 text-white/55">
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

          <ElinChat
            hideMobileNav
            className="mt-16 min-h-[36rem] lg:mt-0"
            emptyText="Fråga om en produkt, en rutin eller om ett billigare alternativ inom skönhet, träning eller hälsa."
          />
        </div>
      </section>
    </main>
  );
}
