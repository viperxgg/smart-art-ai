import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  BookOpen,
  Check,
  ChefHat,
  LayoutDashboard,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { CtaButtons } from "@/components/restaurant/CtaButtons";
import { DemoPreviewPanel } from "@/components/demo/DemoPreviewPanel";
import { InfrastructureSecuritySection } from "@/components/restaurant/InfrastructureSecuritySection";
import { PlanOrderButton } from "@/components/restaurant/PlanOrderButton";
import type { AppLocale } from "@/lib/site";
import { getDemoHref, getLocalizedHref } from "@/lib/site";

interface RestaurantHomePageProps {
  locale: AppLocale;
}

export function RestaurantHomePage({ locale }: RestaurantHomePageProps) {
  const isSwedish = locale === "sv";
  const guestDemoHref = getDemoHref(locale, "menu");
  const adminDemoHref = getDemoHref(locale, "admin");
  const kitchenDemoHref = getDemoHref(locale, "kitchen");

  const copy = isSwedish
    ? {
        brand: "Nord Smart Menu",
        heroTitle: "Ett restaurangsystem för gästens första klick.",
        heroBody:
          "QR-meny, adminpanel, köksvy och Call waiter samlas i ett snabbt, mobilt flöde.",
        primaryCta: "Testa gästflödet",
        secondaryCta: "Boka demo",
        problemEyebrow: "Problemet",
        problemTitle: "Restaurangen tappar tid när meny, service och kök ligger isär.",
        problems: [
          "Gästen väntar på meny, personal eller betalfrågor.",
          "Menyn ändras långsamt och skapar fel i service.",
          "Köket får otydliga signaler under hög belastning.",
        ],
        flowEyebrow: "Så fungerar det",
        flowTitle: "Tre steg från QR till kök.",
        steps: [
          "Gästen skannar bordets QR-kod.",
          "Meny, ingredienser, kalorier och Call waiter öppnas direkt.",
          "Beställningen visas i köksvyn med tydlig status.",
        ],
        interfaceEyebrow: "Interface",
        interfaceTitle: "Tre vyer. Ett system.",
        surfaces: [
          {
            title: "Gästvy",
            body: "Mobil meny med kategorier, dish pages, pris, kalorier och ingredienser.",
            href: guestDemoHref,
            image: "/demo/previews/guest-mobile.png",
            icon: ScanLine,
          },
          {
            title: "Adminpanel",
            body: "Tablet-vänlig kontroll för meny, publicering, bilder och priser.",
            href: adminDemoHref,
            image: "/demo/previews/admin-dashboard.png",
            icon: LayoutDashboard,
          },
          {
            title: "Köksvy",
            body: "Läsbar ordervy för nya, aktiva och klara beställningar.",
            href: kitchenDemoHref,
            image: "/demo/previews/kitchen-board.png",
            icon: ChefHat,
          },
        ],
        featureEyebrow: "Nyckelfunktioner",
        featureTitle: "Byggt för verklig service, inte bara en digital meny.",
        features: [
          {
            title: "Call waiter",
            body: "Gästen kan be om hjälp utan att stoppa serveringen.",
            icon: BellRing,
          },
          {
            title: "Egen meny-slug",
            body: "Varje restaurang får en tydlig publik menyadress.",
            icon: QrCode,
          },
          {
            title: "Dish pages",
            body: "Rätter kan visa ingredienser, kalorier och tydliga val.",
            icon: UtensilsCrossed,
          },
          {
            title: "Driftsäker rollstruktur",
            body: "Gäst, admin och kök hålls separerade och begripliga.",
            icon: ShieldCheck,
          },
        ],
        pricingEyebrow: "Pris",
        pricingTitle: "Engångsbetalning för kärnleveransen.",
        pricingBody:
          "Du betalar för ett tydligt projekt: struktur, design, QR-meny och lansering. Framtida uppdateringar, säsongsmenyer och extra support kan köpas till vid behov.",
        plans: [
          {
            name: "Startpaket",
            label: "Caféer och mindre menyer",
            features: ["QR-meny", "Grundläggande menystruktur", "Mobilanpassad design", "Enkel lansering"],
          },
          {
            name: "Restaurangpaket",
            label: "Komplett digital menyupplevelse",
            features: [
              "QR-meny",
              "Digital menydesign",
              "Rättkategorier",
              "Allergener och beskrivningar",
              "Demo / genomgång",
              "Lanseringshjälp",
            ],
          },
          {
            name: "Premium Menyupplevelse",
            label: "Digital meny, tryckdesign och starkare visuell känsla",
            features: [
              "Smart Menu",
              "Digital menyupplevelse",
              "Print-ready menyfiler",
              "Säsongsmenystruktur",
              "Premium layout",
              "Visuell menystrategi",
            ],
          },
        ],
        finalTitle: "Vill du se Nord Smart Menu med din restaurang i åtanke?",
        finalBody: "Vi visar flödet från gäst till kök och anpassar upplägget efter er meny.",
        finalPrimary: "Boka demo",
        finalSecondary: "Testa först",
        serviceType: "Nord Smart Menu demo för restaurang",
      }
    : {
        brand: "Nord Smart Menu",
        heroTitle: "A restaurant system for the guest's first click.",
        heroBody:
          "QR menu, admin panel, kitchen view, and Call waiter in one fast mobile flow.",
        primaryCta: "Try guest flow",
        secondaryCta: "Book a demo",
        problemEyebrow: "Problem",
        problemTitle: "Restaurants lose time when menu, service, and kitchen sit apart.",
        problems: [
          "Guests wait for menus, staff, or service questions.",
          "Menu changes move slowly and create service errors.",
          "The kitchen gets unclear signals during pressure.",
        ],
        flowEyebrow: "How it works",
        flowTitle: "Three steps from QR to kitchen.",
        steps: [
          "Guest scans the table QR code.",
          "Menu, ingredients, calories, and Call waiter open instantly.",
          "The order appears in the kitchen view with clear status.",
        ],
        interfaceEyebrow: "Interface",
        interfaceTitle: "Three views. One system.",
        surfaces: [
          {
            title: "Guest view",
            body: "Mobile menu with categories, dish pages, price, calories, and ingredients.",
            href: guestDemoHref,
            image: "/demo/previews/guest-mobile.png",
            icon: ScanLine,
          },
          {
            title: "Admin panel",
            body: "Tablet-friendly control for menu content, publishing, images, and prices.",
            href: adminDemoHref,
            image: "/demo/previews/admin-dashboard.png",
            icon: LayoutDashboard,
          },
          {
            title: "Kitchen view",
            body: "Readable order board for new, active, and ready tickets.",
            href: kitchenDemoHref,
            image: "/demo/previews/kitchen-board.png",
            icon: ChefHat,
          },
        ],
        featureEyebrow: "Key features",
        featureTitle: "Built for real service, not just a digital menu.",
        features: [
          {
            title: "Call waiter",
            body: "Guests can ask for help without interrupting service flow.",
            icon: BellRing,
          },
          {
            title: "Own menu slug",
            body: "Every restaurant gets a clear public menu address.",
            icon: QrCode,
          },
          {
            title: "Dish pages",
            body: "Dishes can show ingredients, calories, and clear choices.",
            icon: UtensilsCrossed,
          },
          {
            title: "Role-based operations",
            body: "Guest, admin, and kitchen stay separate and easy to understand.",
            icon: ShieldCheck,
          },
        ],
        pricingEyebrow: "Pricing",
        pricingTitle: "One-time project delivery for the core menu.",
        pricingBody:
          "You pay for a clear project: structure, design, QR menu, and launch. Future updates, seasonal menus, and extra support can be purchased when needed.",
        plans: [
          {
            name: "Start package",
            label: "Cafés and smaller menus",
            features: ["QR menu", "Basic menu structure", "Mobile-first design", "Simple launch"],
          },
          {
            name: "Restaurant package",
            label: "Complete digital menu experience",
            features: [
              "QR menu",
              "Digital menu design",
              "Dish categories",
              "Allergens and descriptions",
              "Demo / walkthrough",
              "Launch support",
            ],
          },
          {
            name: "Premium menu experience",
            label: "Digital menu, print design, and stronger visual identity",
            features: [
              "Smart Menu",
              "Digital menu experience",
              "Print-ready menu files",
              "Seasonal menu structure",
              "Premium layout",
              "Visual menu strategy",
            ],
          },
        ],
        finalTitle: "Want to see Nord Smart Menu around your restaurant?",
        finalBody: "We will show the flow from guest to kitchen and adapt the setup to your menu.",
        finalPrimary: "Book a demo",
        finalSecondary: "Try first",
        serviceType: "Nord Smart Menu restaurant demo",
      };
  const readingLinks = isSwedish
    ? [
        {
          slug: "best-digital-menu-sweden",
          title: "Bästa digitala menyn för restauranger i Sverige",
          body: "Kriterierna som hjälper restauranger välja rätt digital meny från början.",
        },
        {
          slug: "digital-menu-vs-paper-menu",
          title: "Digital meny vs pappersmeny",
          body: "Jämför uppdateringar, serviceflöde och gästupplevelse i vardagen.",
        },
        {
          slug: "restaurant-ordering-system-reduce-staff-pressure",
          title: "Beställningssystem som minskar personalpress",
          body: "Se hur tydligare orderstatus och köksflöde minskar avbrott.",
        },
        {
          slug: "smart-menu-alcohol-compliance-sweden",
          title: "Smart meny och alkohol i Sverige",
          body: "Varför alkohol behöver ett separat och mer defensivt digitalt flöde.",
        },
      ]
    : [
        {
          slug: "best-digital-menu-sweden",
          title: "Best digital menu for restaurants in Sweden",
          body: "The criteria that help restaurants choose the right digital menu from the start.",
        },
        {
          slug: "digital-menu-vs-paper-menu",
          title: "Digital menu vs paper menu",
          body: "Compare updates, service flow, and guest experience in daily operations.",
        },
        {
          slug: "restaurant-ordering-system-reduce-staff-pressure",
          title: "Ordering systems that reduce staff pressure",
          body: "See how clearer order status and kitchen flow reduce interruptions.",
        },
        {
          slug: "smart-menu-alcohol-compliance-sweden",
          title: "Smart menus and alcohol in Sweden",
          body: "Why alcohol needs a separate and more defensive digital flow.",
        },
      ];

  return (
    <main className="sai-page">
      <section className="sai-hero">
        <div className="sai-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.82fr)] lg:items-center">
          <div>
            <div className="sai-chip">
              <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
              {copy.brand}
            </div>
            <h1 className="sai-title-xl mt-7">{copy.heroTitle}</h1>
            <p className="sai-copy-lg mt-6">{copy.heroBody}</p>
            <CtaButtons
              locale={locale}
              primaryLabel={copy.primaryCta}
              primaryHref={guestDemoHref}
              primaryOpenInNewTab
              secondaryLabel={copy.secondaryCta}
              sourcePage="/nord-smart-menu"
              ctaContext="nord-smart-menu-hero"
              serviceType={copy.serviceType}
              className="mt-9"
            />
          </div>

          <aside className="sai-panel p-5">
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="sai-eyebrow text-[var(--text-muted)]">Table 12</p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
                    {isSwedish ? "Live menyflöde" : "Live menu flow"}
                  </h2>
                </div>
                <span className="sai-icon">
                  <QrCode className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {[copy.steps[0], copy.steps[1], copy.steps[2]].map((item, index) => (
                  <div key={item} className="sai-card flex items-start gap-3 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-primary)] text-xs font-black text-[#06100A]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.08)] px-4 py-3 text-sm font-bold text-[var(--accent-primary)]">
                {isSwedish ? "Call waiter aktiv" : "Call waiter active"}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="sai-section-soft">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{copy.problemEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{copy.problemTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.problems.map((problem) => (
              <article key={problem} className="sai-card p-6">
                <p className="text-lg font-semibold leading-8 text-white">{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="sai-eyebrow">{copy.flowEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{copy.flowTitle}</h2>
          </div>
          <div className="grid gap-4">
            {copy.steps.map((step, index) => (
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
            <p className="sai-eyebrow">{copy.interfaceEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{copy.interfaceTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {copy.surfaces.map((surface) => {
              const Icon = surface.icon;
              const content = (
                <>
                  <DemoPreviewPanel
                    src={surface.image}
                    alt={surface.title}
                    className="rounded-b-none rounded-t-[1.5rem] border-0 bg-[var(--bg-soft)] shadow-none"
                    imageClassName="h-[250px] object-cover"
                  />
                  <div className="p-6">
                    <span className="sai-icon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="sai-title-md mt-5">{surface.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-muted)]">{surface.body}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                      <span>{isSwedish ? "Öppna vy" : "Open view"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </>
              );

              return surface.href.startsWith("http") ? (
                <a
                  key={surface.title}
                  href={surface.href}
                  target="_blank"
                  rel="noreferrer"
                  className="sai-card sai-card-hover overflow-hidden"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={surface.title}
                  href={surface.href}
                  className="sai-card sai-card-hover overflow-hidden"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container">
          <div className="sai-section-header">
            <p className="sai-eyebrow">{copy.featureEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{copy.featureTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="sai-card sai-card-hover p-6">
                  <span className="sai-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="sai-title-md mt-5">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-muted)]">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <InfrastructureSecuritySection locale={locale} />

      <section className="sai-section">
        <div className="sai-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="sai-eyebrow">{copy.pricingEyebrow}</p>
            <h2 className="sai-title-lg mt-4">{copy.pricingTitle}</h2>
            <p className="sai-copy mx-auto mt-4">{copy.pricingBody}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <article key={plan.name} className="sai-card flex flex-col p-7">
                <p className="sai-eyebrow">{plan.name}</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white">{plan.label}</h3>
                <div className="mt-7 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-5">
                  <p className="text-lg font-black text-white">
                    {isSwedish ? "Tydligt projektpris efter genomgång" : "Clear project proposal after review"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    {isSwedish
                      ? "Ingen månadsavgift för kärnleveransen."
                      : "No monthly fee for the core delivery."}
                  </p>
                </div>
                <div className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-white">
                      <Check className="h-4 w-4 text-[var(--accent-primary)]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <PlanOrderButton locale={locale} planName={plan.name} planLabel={plan.label} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container">
          <div className="max-w-3xl">
            <p className="sai-eyebrow">{isSwedish ? "Guider" : "Guides"}</p>
            <h2 className="sai-title-lg mt-4">
              {isSwedish ? "Läs mer om digitala menyer" : "Read more about digital menus"}
            </h2>
            <p className="sai-copy mt-4">
              {isSwedish
                ? "Fördjupa beslutet med guider om val av digital meny, pappersmenyer, personalpress och alkoholflöden."
                : "Go deeper with guides about choosing a digital menu, paper menus, staff pressure, and alcohol flows."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {readingLinks.map((link) => (
              <Link
                key={link.slug}
                href={getLocalizedHref("/blog/[slug]", locale, { slug: link.slug })}
                className="sai-card sai-card-hover flex h-full flex-col p-5"
              >
                <BookOpen className="h-5 w-5 text-[var(--accent-primary)]" />
                <h3 className="sai-title-md mt-5">{link.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{link.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-white">
                  {isSwedish ? "Läs guiden" : "Read guide"}
                  <ArrowRight className="h-4 w-4 text-[var(--accent-primary)]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sai-section-soft">
        <div className="sai-container">
          <div className="sai-panel grid gap-8 p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="sai-eyebrow">{isSwedish ? "Nästa steg" : "Next step"}</p>
              <h2 className="sai-title-lg mt-4">{copy.finalTitle}</h2>
              <p className="sai-copy mt-4">{copy.finalBody}</p>
              <CtaButtons
                locale={locale}
                primaryLabel={copy.finalPrimary}
                primaryAction="modal"
                secondaryLabel={copy.finalSecondary}
                secondaryAction="link"
                secondaryHref={guestDemoHref}
                secondaryOpenInNewTab
                sourcePage="/nord-smart-menu"
                ctaContext="nord-smart-menu-final"
                serviceType={copy.serviceType}
                className="mt-8"
              />
            </div>
            <Link
              href={getLocalizedHref("/blog", locale)}
              className="sai-card sai-card-hover block p-5 lg:w-80"
            >
              <p className="sai-eyebrow text-[var(--text-muted)]">Proof</p>
              <h3 className="sai-title-md mt-4">
                {isSwedish ? "Läs guider för digital meny" : "Read digital menu guides"}
              </h3>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">
                {isSwedish
                  ? "Fördjupa beslutet innan ni bokar demo."
                  : "Get context before booking a demo."}
              </p>
              <ArrowRight className="mt-5 h-4 w-4 text-[var(--accent-primary)]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
