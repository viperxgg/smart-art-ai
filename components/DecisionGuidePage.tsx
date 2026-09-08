import Link from "next/link";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { DecisionCard } from "@/components/DecisionCard";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { validateDecisionRecord, type DecisionRecord } from "@/lib/decision-record";

export type DecisionGuide = {
  parent?: { name: string; href: string };
  path: string;
  title: string;
  intro: string;
  decision: DecisionRecord;
  productPaths: readonly string[];
  questions: readonly { question: string; answer: string }[];
  related: readonly { href: string; text: string }[];
};

export function DecisionGuidePage({ guide }: { guide: DecisionGuide }) {
  validateDecisionRecord(guide.decision, guide.decision.options.map((option) => option.productSlug));
  if (guide.productPaths.length !== guide.decision.options.length) throw new Error("Each guide option needs its product page.");
  const breadcrumbs = [
    { name: "Hem", href: "/" }, guide.parent ?? { name: "Guider", href: "/guider" },
    { name: guide.title, href: guide.path },
  ];
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-8 max-w-3xl">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{guide.intro}</p>
          <EditorialMeta path={guide.path} hideDate className="mt-5" />
        </header>
        <DecisionCard decision={guide.decision} />
        <section className="mt-10" aria-labelledby="guide-questions">
          <h2 id="guide-questions" className="font-display text-2xl font-bold">Frågor före köp</h2>
          {guide.questions.map((item) => (
            <details key={item.question} className="border-b border-line py-4">
              <summary className="min-h-11 cursor-pointer py-2 font-bold">{item.question}</summary>
              <p className="pb-3 leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </section>
        <nav aria-label="Läs om varje produkt" className="mt-10">
          <h2 className="font-display text-2xl font-bold">Fördjupa ditt val</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.decision.options.map((option, index) => (
              <li key={option.productSlug}><Link className="flex min-h-11 items-center rounded-xl border border-line p-4 font-semibold underline underline-offset-4" href={guide.productPaths[index]}>{option.model}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Fler jämförelser" className="mt-8 flex flex-wrap gap-4">
          {guide.related.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center underline underline-offset-4">{link.text}</Link>)}
          <Link href="/fraga-elin" className="inline-flex min-h-11 items-center underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
      </div>
    </main>
  );
}
