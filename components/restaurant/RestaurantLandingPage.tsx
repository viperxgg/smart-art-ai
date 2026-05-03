import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  QrCode,
  TabletSmartphone,
  UtensilsCrossed,
} from "lucide-react";
import { CtaButtons } from "@/components/restaurant/CtaButtons";
import { DemoSection } from "@/components/restaurant/DemoSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRestaurantDemoSections } from "@/lib/demo";
import { getFaqSchema, getServiceSchema } from "@/lib/seo";
import {
  getDemoHref,
  getLocalizedHref,
  primaryRestaurantPage,
  type AppLocale,
} from "@/lib/site";
import {
  type RestaurantPageContent,
  type RestaurantVisualProof,
} from "@/lib/restaurant-pages";

interface RestaurantLandingPageProps {
  locale: AppLocale;
  page: RestaurantPageContent;
}

function ProofPlaceholder({ type }: { type: RestaurantVisualProof["type"] }) {
  // Replace these placeholder compositions with real product screenshots when available.
  if (type === "table") {
    return (
      <div className="rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-5">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-emerald-100">
            <QrCode className="h-8 w-8" />
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/45">
            Bord 12
          </div>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_auto] gap-4">
          <div className="space-y-2">
            <div className="h-3 rounded-full bg-white/12" />
            <div className="h-3 w-4/5 rounded-full bg-white/8" />
            <div className="h-3 w-3/5 rounded-full bg-white/8" />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-[#0F4C3A]/20 bg-[#0F4C3A]/10 text-emerald-100">
            <UtensilsCrossed className="h-8 w-8" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "guest") {
    return (
      <div className="rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-5">
        <div className="mx-auto flex w-44 flex-col rounded-[1.8rem] border border-white/10 bg-black/40 p-4">
          <div className="mb-4 h-2 w-16 self-center rounded-full bg-white/12" />
          <div className="space-y-3">
            <div className="h-16 rounded-[1.2rem] bg-white/[0.06]" />
            <div className="h-3 rounded-full bg-white/12" />
            <div className="h-3 w-5/6 rounded-full bg-white/8" />
            <div className="h-10 rounded-full bg-[#0F4C3A]/16" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "admin") {
    return (
      <div className="rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="h-3 w-16 rounded-full bg-white/12" />
            <div className="mt-4 h-10 rounded-2xl bg-[#0F4C3A]/14" />
          </div>
          <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="h-3 w-12 rounded-full bg-white/12" />
            <div className="mt-4 h-10 rounded-2xl bg-white/[0.08]" />
          </div>
          <div className="col-span-2 rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-white/12" />
              <TabletSmartphone className="h-4 w-4 text-emerald-100" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 rounded-xl bg-white/[0.06]" />
              <div className="h-14 rounded-xl bg-[#0F4C3A]/10" />
              <div className="h-14 rounded-xl bg-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-3 w-24 rounded-full bg-white/12" />
        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/45">
          KDS
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-[1.2rem] border border-[#0F4C3A]/12 bg-[#0F4C3A]/10 p-3">
          <div className="h-3 w-16 rounded-full bg-[#0F4C3A]/40" />
          <div className="mt-3 h-8 rounded-xl bg-[#0F4C3A]/14" />
        </div>
        <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-3">
          <div className="h-3 w-14 rounded-full bg-white/12" />
          <div className="mt-3 h-8 rounded-xl bg-white/[0.08]" />
        </div>
        <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-3">
          <div className="h-3 w-12 rounded-full bg-white/12" />
          <div className="mt-3 h-8 rounded-xl bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}

export function RestaurantLandingPage({ locale, page }: RestaurantLandingPageProps) {
  const isPrimaryPage = page.pathname === primaryRestaurantPage;
  const isOrderingSystemPage = page.pathname === "/restaurant-ordering-system";
  const isSwedenPage = page.pathname === "/restaurant-digital-menu-sweden";
  const isSwedishPrimaryPage = isPrimaryPage && locale === "sv";
  const heroHighlights =
    page.heroHighlights ?? page.benefits.slice(0, 3).map((benefit) => benefit.title);
  const heroPanelTitle =
    page.heroPanelTitle ??
    (locale === "sv" ? "Det här får restaurangen direkt" : "What the restaurant gets first");
  const heroPanelBody =
    page.heroPanelBody ??
    (locale === "sv"
      ? "Sidan fokuserar på den snabbaste vägen från pappersmeny till tydligare menyupplevelse."
      : "This page focuses on the fastest path from printed menus to a clearer digital menu experience.");
  const heroPanelPoints =
    page.heroPanelPoints ?? page.features.slice(0, 3).map((feature) => feature.title);
  const defaultPrimaryCtaLabel = isPrimaryPage
    ? page.primaryCta
    : locale === "sv"
      ? "Se hur digital meny fungerar"
      : "See how the digital menu works";
  const primaryDemoHref = getDemoHref(locale, "menu");
  const primaryCtaHref = isPrimaryPage ? primaryDemoHref : primaryRestaurantPage;
  const demoFlowSectionHref = isSwedishPrimaryPage ? "#demo-flow-section" : primaryCtaHref;
  const heroPrimaryCtaHref = isSwedishPrimaryPage ? demoFlowSectionHref : primaryCtaHref;
  const solutionPrimaryCtaHref = demoFlowSectionHref;
  const finalSecondaryCtaHref = isSwedishPrimaryPage ? demoFlowSectionHref : primaryDemoHref;
  const defaultSecondaryCtaLabel = isPrimaryPage
    ? page.secondaryCta
    : locale === "sv"
      ? "Boka demo"
      : "Book a demo";
  const heroPrimaryCtaLabel = isSwedishPrimaryPage ? "Se hur det fungerar" : defaultPrimaryCtaLabel;
  const heroSecondaryCtaLabel = isSwedishPrimaryPage ? "Boka demo" : defaultSecondaryCtaLabel;
  const demoPrimaryCtaLabel = isSwedishPrimaryPage ? "Testa live demo" : defaultPrimaryCtaLabel;
  const demoSecondaryCtaLabel = isSwedishPrimaryPage ? "Boka demo" : defaultSecondaryCtaLabel;
  const finalPrimaryCtaLabel = isSwedishPrimaryPage ? "Boka demo" : defaultPrimaryCtaLabel;
  const finalSecondaryCtaLabel = isSwedishPrimaryPage ? "Testa själv först" : defaultSecondaryCtaLabel;
  const repeatedCtaCopy = locale === "sv"
    ? "Se flödet först och boka demo när ni vill prata om ert eget upplägg."
    : "See the flow first, then book a demo when you want to discuss your own setup.";
  const supportCard = locale === "sv"
    ? {
        eyebrow: "Huvudsida för denna sprint",
        title: "Starta med digital meny för restauranger",
        body:
          "Om ni jämför QR-meny, beställningsflöde eller svensk marknadsanpassning är detta den tydligaste sidan att börja på.",
        linkLabel: "Se sidan om digital meny för restauranger",
      }
    : {
        eyebrow: "Main page for this sprint",
        title: "Start with the digital menu for restaurants",
        body:
          "If you are comparing QR menu, ordering flow, or Sweden-specific rollout, this is the clearest page to start from.",
        linkLabel: "See the digital menu page",
      };
  const visualEyebrow = locale === "sv" ? "Så ser flödet ut" : "Visual proof";
  const comparisonEyebrow = locale === "sv" ? "Jämför" : "Comparison";
  const solutionEyebrow = locale === "sv" ? "Lösning" : "Solution";
  const benefitsEyebrow = locale === "sv" ? "Fördelar" : "Benefits";
  const relatedEyebrow = locale === "sv" ? "Stödjande sida" : "Supporting page";
  const mainPageCard = locale === "sv"
    ? {
        pathname: primaryRestaurantPage,
        label: "Digital meny för restauranger",
        description: "Se huvudlösningen för restauranger som vill gå från papper till en tydligare och mer säljande meny.",
      }
    : {
        pathname: primaryRestaurantPage,
        label: "Digital menu for restaurants",
        description: "See the main page for restaurants moving from print to a clearer and more effective digital menu.",
      };
  const relatedPages = isPrimaryPage
    ? page.relatedPages
    : [mainPageCard, ...page.relatedPages.filter((related) => related.pathname !== primaryRestaurantPage)];
  const serviceType = isPrimaryPage
    ? locale === "sv"
      ? "Digital meny för restauranger"
      : "Digital menu for restaurants"
    : page.title;
  const demoSections = getRestaurantDemoSections(locale, page.pathname);
  const systemOverviewItems = isOrderingSystemPage
    ? locale === "sv"
      ? [
          {
            title: "Digital meny",
            description: "QR-baserad meny där gästen kan se och beställa direkt",
          },
          {
            title: "Adminpanel",
            description: "Hantera meny, priser och innehåll utan kod",
          },
          {
            title: "Köksvy (KDS)",
            description: "Se beställningar i realtid och prioritera rätt",
          },
          {
            title: "Orderflöde",
            description: "Beställningar går direkt från gäst till kök utan fördröjning",
          },
          {
            title: "Roller & åtkomst",
            description: "Separera admin, servering och kök",
          },
        ]
      : [
          {
            title: "Digital menu",
            description: "QR-based menu where guests can view and order directly",
          },
          {
            title: "Admin panel",
            description: "Manage menu, prices, and content without code",
          },
          {
            title: "Kitchen view (KDS)",
            description: "See orders in real time and prioritize correctly",
          },
          {
            title: "Order flow",
            description: "Orders move directly from guest to kitchen without delay",
          },
          {
            title: "Roles & access",
            description: "Separate admin, service, and kitchen responsibilities",
          },
        ]
    : [];
  const orderingFeatureItems = isOrderingSystemPage
    ? locale === "sv"
      ? [
          "Realtidsuppdateringar",
          "Mobiloptimerad upplevelse",
          "Ingen installation krävs",
          "Draft / Publish system",
          "Anpassningsbar menystruktur",
          "Fungerar under hög belastning",
        ]
      : [
          "Real-time updates",
          "Mobile-optimized experience",
          "No installation required",
          "Draft / Publish system",
          "Flexible menu structure",
          "Works under high load",
        ]
    : [];
  const securityItems = isOrderingSystemPage
    ? locale === "sv"
      ? [
          "Säker hantering av beställningar",
          "Rollbaserad åtkomst (admin / kök / servering)",
          "Stabil drift även under rusningstid",
          "Designad för verklig restaurangmiljö",
        ]
      : [
          "Secure order handling",
          "Role-based access (admin / kitchen / service)",
          "Stable operation during rush periods",
          "Designed for real restaurant environments",
        ]
    : [];
  const swedenContextItems = isSwedenPage
    ? locale === "sv"
      ? [
          "Snabb lunchservice kräver tempo",
          "Personal behöver enkla system",
          "Gäster förväntar sig mobil upplevelse",
        ]
      : [
          "Fast lunch service needs pace",
          "Staff need simple systems",
          "Guests expect a mobile experience",
        ]
    : [];
  const swedenFitItems = isSwedenPage
    ? locale === "sv"
      ? [
          "Anpassad för svenska restauranger",
          "Enkel att använda utan träning",
          "Fungerar i verkliga arbetssituationer",
          "Byggd för mobil först",
        ]
      : [
          "Adapted for Swedish restaurants",
          "Easy to use without training",
          "Works in real operating situations",
          "Built mobile-first",
        ]
    : [];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <JsonLd
        data={[
          getServiceSchema({
            locale,
            name: page.h1,
            description: page.description,
            serviceType: page.primaryKeyword,
            pathname: page.pathname,
          }),
          getFaqSchema(page.faqs),
        ]}
      />

      <section className="relative overflow-hidden border-b border-white/6 px-6 pb-20 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(133,190,255,0.18),_transparent_32%),radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.38em] text-emerald-200/72">
            {page.eyebrow}
          </p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl md:leading-[0.92]">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                {page.intro}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <CtaButtons
                locale={locale}
                primaryLabel={heroPrimaryCtaLabel}
                primaryHref={heroPrimaryCtaHref}
                primaryOpenInNewTab={false}
                secondaryLabel={heroSecondaryCtaLabel}
                sourcePage={page.pathname}
                ctaContext="hero"
                serviceType={serviceType}
                className="mt-10"
              />

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/48">
                {page.heroMicrocopy ?? repeatedCtaCopy}
              </p>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)]">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/42">
                {heroPanelTitle}
              </p>
              <p className="mt-4 text-lg leading-8 text-white/68">{heroPanelBody}</p>
              <div className="mt-8 space-y-3">
                {heroPanelPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-white/68"
                  >
                    {point}
                  </div>
                ))}
              </div>

              {!isPrimaryPage ? (
                <Link
                  href={getLocalizedHref(primaryRestaurantPage, locale)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 transition hover:text-white"
                >
                  <span>{supportCard.linkLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      {isSwedenPage ? (
        <section className="border-b border-white/6 bg-[#080808] px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">
                {locale === "sv" ? "Svensk restaurangvardag" : "Swedish restaurant context"}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                {locale === "sv"
                  ? "Restaurangvardagen i Sverige ser annorlunda ut"
                  : "Restaurant operations in Sweden work differently"}
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {swedenContextItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#0F4C3A]/14 bg-[#0F4C3A]/10 text-emerald-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold leading-7 text-white/78">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {demoSections.featured ? (
        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <DemoSection {...demoSections.featured} />
          </div>
        </section>
      ) : null}

      {!isPrimaryPage && !isSwedenPage ? (
        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#0F4C3A]/12 bg-[#0F4C3A]/6 p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/72">{supportCard.eyebrow}</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white">{supportCard.title}</h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/68">{supportCard.body}</p>
              </div>
              <Link
                href={getLocalizedHref(primaryRestaurantPage, locale)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0F4C3A] px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                <span>{supportCard.linkLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {!isSwedenPage ? (
      <section className={`px-6 ${isSwedenPage ? "py-14" : "py-20"}`}>
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            {locale === "sv" ? "Problem" : "Problem"}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
            {page.problemTitle}
          </h2>
          <div
            className={`mt-8 grid gap-4 ${
              page.problems.length > 3 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {page.problems.map((problem) => (
              <article
                key={problem}
                className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6 text-lg leading-8 text-white/78"
              >
                {problem}
              </article>
            ))}
          </div>
          {page.problemFooter ? (
            <p className="mt-8 text-xl font-semibold tracking-tight text-white/82">
              {page.problemFooter}
            </p>
          ) : null}
        </div>
      </section>
      ) : null}

      <section className={`border-y border-white/6 bg-[#080808] px-6 ${isSwedenPage ? "py-14" : "py-20"}`}>
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">{solutionEyebrow}</p>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{page.featureTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              {page.solutionIntro ?? page.description}
            </p>
          </div>
          <div
            className={`mt-12 grid gap-4 ${
              page.features.length > 3 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0F4C3A]/10 text-emerald-100">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{feature.description}</p>
              </article>
            ))}
          </div>
          {isOrderingSystemPage ? (
            <>
              <div className="mt-14 border-t border-white/8 pt-12">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                    {locale === "sv" ? "Vad systemet innehåller" : "What the system includes"}
                  </h2>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {systemOverviewItems.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/8 bg-black/20 p-5"
                    >
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#0F4C3A]/14 bg-[#0F4C3A]/10 text-emerald-100">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-white/66">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-white/8 pt-12">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                    {locale === "sv" ? "Funktioner som gör skillnad" : "Features that make a difference"}
                  </h2>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {orderingFeatureItems.map((item) => (
                    <article
                      key={item}
                      className="flex min-h-20 items-center gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-5 py-4"
                    >
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F4C3A]/14 bg-[#0F4C3A]/10 text-emerald-100">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="font-semibold leading-6 text-white/78">{item}</p>
                    </article>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {page.solutionClosingLine ? (
            <p className="mt-8 max-w-3xl text-xl font-semibold tracking-tight text-white/84">
              {page.solutionClosingLine}
            </p>
          ) : null}
          {!isSwedenPage ? (
          <div className="mt-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 md:p-8">
            <CtaButtons
              locale={locale}
              primaryLabel={heroPrimaryCtaLabel}
              primaryHref={solutionPrimaryCtaHref}
              secondaryLabel={heroSecondaryCtaLabel}
              sourcePage={page.pathname}
              ctaContext="solution"
              serviceType={serviceType}
            />
          </div>
          ) : null}
        </div>
      </section>

      <section className={`px-6 ${isSwedenPage ? "py-14" : "py-20"}`}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">
              {locale === "sv" ? "I praktiken" : "In practice"}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
              {page.howTitle}
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/68">{page.howIntro ?? repeatedCtaCopy}</p>
          </div>
          <div className="space-y-4">
            {page.steps.map((step, index) => (
              <article
                key={step}
                className="flex gap-4 rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F4C3A] text-sm font-black text-white">
                  0{index + 1}
                </div>
                <p className="pt-2 leading-7 text-white/72">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isSwedenPage ? (
        <section className="border-y border-white/6 bg-[#080808] px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">
                {locale === "sv" ? "Lokal passform" : "Local fit"}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                {locale === "sv" ? "Varför det fungerar i Sverige" : "Why it works in Sweden"}
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {swedenFitItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#0F4C3A]/14 bg-[#0F4C3A]/10 text-emerald-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="font-semibold leading-7 text-white/76">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!isSwedenPage ? (
      <section className="border-y border-white/6 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">{benefitsEyebrow}</p>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{page.benefitTitle}</h2>
          </div>
          <div
            className={`mt-12 grid gap-4 ${
              page.benefits.length > 3 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {page.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.8rem] border border-white/8 bg-[#0e0e0e] p-6"
              >
                <h3 className="text-2xl font-black tracking-tight text-white">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      ) : null}

      {page.visualProofs?.length ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">{visualEyebrow}</p>
            <div className="mt-5 max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{page.trustTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/68">{page.trustBody}</p>
            </div>
            <div className="mt-12 grid gap-5 xl:grid-cols-2">
              {page.visualProofs.map((proof) => (
                <article
                  key={proof.title}
                  className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6"
                >
                  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-white">{proof.title}</h3>
                      <p className="mt-4 leading-7 text-white/68">{proof.description}</p>
                      <div className="mt-6 space-y-3">
                        {proof.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-white/68"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                    <ProofPlaceholder type={proof.type} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.comparisonRows?.length ? (
        <section className="border-y border-white/6 bg-[#080808] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">{comparisonEyebrow}</p>
            <div className="mt-5 max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{page.comparisonTitle}</h2>
              {page.comparisonIntro ? (
                <p className="mt-5 text-lg leading-8 text-white/68">{page.comparisonIntro}</p>
              ) : null}
            </div>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03]">
              <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/8 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white/72">
                <div>{locale === "sv" ? "Vad jämförs" : "What changes"}</div>
                <div>{locale === "sv" ? "Pappersmeny" : "Printed menu"}</div>
                <div>{locale === "sv" ? "Digital meny" : "Digital menu"}</div>
              </div>
              {page.comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[0.9fr_1fr_1fr] gap-4 border-t border-white/8 px-5 py-5 text-sm leading-7 text-white/68"
                >
                  <div className="font-semibold text-white">{row.label}</div>
                  <div>{row.before}</div>
                  <div>{row.after}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {demoSections.primary ? (
        <section id="demo-flow-section" className={`scroll-mt-32 px-6 ${isSwedenPage ? "py-14" : "py-20"}`}>
          <div className="mx-auto max-w-6xl">
            <DemoSection {...demoSections.primary} />
            <CtaButtons
              locale={locale}
              primaryLabel={demoPrimaryCtaLabel}
              primaryHref={primaryCtaHref}
              primaryOpenInNewTab={false}
              secondaryLabel={demoSecondaryCtaLabel}
              sourcePage={page.pathname}
              ctaContext="demo-hook"
              serviceType={serviceType}
              className="mt-10 justify-start"
            />
          </div>
        </section>
      ) : null}

      {isOrderingSystemPage ? (
        <section className="border-y border-white/6 bg-[#080808] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">
                {locale === "sv" ? "Trygg drift" : "Operational trust"}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                {locale === "sv" ? "Säkerhet och stabilitet" : "Security and reliability"}
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {securityItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#0F4C3A]/14 bg-[#0F4C3A]/10 text-emerald-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="font-semibold leading-7 text-white/76">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-white/6 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70">
              {locale === "sv" ? "Vanliga frågor" : "FAQ"}
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
              {page.faqTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-black tracking-tight text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-white/68">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/8 bg-white/[0.03] p-8 md:p-10">
          <div className={isPrimaryPage ? "mx-auto max-w-3xl text-center" : "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                {locale === "sv" ? "Nästa steg" : "Next step"}
              </p>
              <h2
                className={`mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl ${
                  isPrimaryPage ? "mx-auto" : ""
                }`.trim()}
              >
                {page.ctaTitle}
              </h2>
              <p
                className={`mt-5 max-w-2xl text-lg leading-8 text-white/72 ${
                  isPrimaryPage ? "mx-auto" : ""
                }`.trim()}
              >
                {page.ctaBody}
              </p>
              <CtaButtons
                locale={locale}
                primaryLabel={finalPrimaryCtaLabel}
                primaryAction={isSwedishPrimaryPage ? "modal" : "link"}
                primaryHref={isSwedishPrimaryPage ? undefined : primaryCtaHref}
                secondaryLabel={finalSecondaryCtaLabel}
                secondaryAction={isSwedishPrimaryPage ? "link" : "modal"}
                secondaryHref={isSwedishPrimaryPage ? finalSecondaryCtaHref : undefined}
                secondaryOpenInNewTab={false}
                sourcePage={page.pathname}
                ctaContext="final"
                serviceType={serviceType}
                className={`mt-8 ${isPrimaryPage ? "justify-center" : ""}`.trim()}
              />
            </div>
            {!isPrimaryPage ? (
              <div className="grid gap-4 md:grid-cols-2">
                {relatedPages.map((related) => (
                  <Link
                    key={related.pathname}
                    href={getLocalizedHref(related.pathname, locale)}
                    className="group rounded-[1.7rem] border border-white/8 bg-black/25 p-5 transition hover:border-[#0F4C3A]/35 hover:bg-black/35"
                  >
                    <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-emerald-200/72">
                      {relatedEyebrow}
                      <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{related.label}</h3>
                    <p className="mt-3 leading-7 text-white/65">{related.description}</p>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
