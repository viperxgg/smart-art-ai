"use client";

import Image from "next/image";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  ChefHat,
  Coffee,
  ConciergeBell,
  FileText,
  GlassWater,
  Hotel,
  Mail,
  Pizza,
  Printer,
  QrCode,
  ScanLine,
  Sparkles,
  Utensils,
  Wine,
} from "lucide-react";
import ContactFormModal from "@/components/ui/ContactFormModal";
import MenuUploadModal from "@/components/ui/MenuUploadModal";
import { getDemoHref, type AppLocale } from "@/lib/site";
import { ParallaxImage } from "@/components/restaurant-home/ParallaxImage";
import { RestaurantFooter } from "@/components/restaurant-home/RestaurantFooter";
import { RestaurantNavbar } from "@/components/restaurant-home/RestaurantNavbar";
import { Reveal } from "@/components/restaurant-home/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/restaurant-home/StaggerGroup";

type RestaurantRepositionHomeProps = {
  locale: AppLocale;
};

const trustChips = [
  "Engångsbetalning",
  "Ingen månadsavgift för kärnleveransen",
  "Digitalt + tryck",
  "Byggt för svenska restauranger",
];

const problems = [
  {
    title: "PDF-menyer känns gamla",
    body: "Gästen får en statisk fil i mobilen när menyn borde kännas lika genomtänkt som lokalen.",
    icon: FileText,
  },
  {
    title: "Personalen tappar tid",
    body: "Enkla frågor om innehåll, allergener och service tar fokus från upplevelsen vid bordet.",
    icon: ConciergeBell,
  },
  {
    title: "Generiska QR-menyer sänker känslan",
    body: "En mall utan restaurangens rytm, bilder och struktur gör maten svårare att välja.",
    icon: QrCode,
  },
  {
    title: "Tryckta menyer blir snabbt inaktuella",
    body: "Säsongsrätter, priser och kampanjer ändras snabbare än pappersmenyn hinner följa med.",
    icon: Printer,
  },
];

const services = [
  {
    id: "smart-menu",
    title: "Smart QR Menu",
    price: "Från 2 490 kr",
    priceType: "Ingen månadsavgift",
    body: "En mobilanpassad meny som gästen öppnar direkt via QR-kod — snabb, tydlig och enkel att uppdatera vid behov.",
    priceNote: "Framtida ändringar kan beställas separat från 259 kr.",
    icon: ScanLine,
    features: [
      "QR-meny",
      "Kategorier & rätter",
      "Allergener & beskrivningar",
      "Mobil först",
      "Möjlighet till beställningsflöde",
    ],
  },
  {
    id: "menu-design",
    title: "Digital Menu Design",
    price: "Från 1 990 kr",
    priceType: "Engångspris",
    body: "Vi designar din meny så att maten känns mer attraktiv, tydlig och lätt att välja från mobilen.",
    icon: BookOpen,
    features: [
      "Visuell menystruktur",
      "Bättre rätt-hierarki",
      "Matbeskrivningar",
      "Premium digital layout",
      "Anpassad restaurangkänsla",
    ],
  },
  {
    id: "print-ready-menu",
    title: "Print-Ready Menu Design",
    price: "Från 3 490 kr",
    priceType: "Engångspris",
    body: "Vi skapar tryckklara menyfiler för bord, vägg, take-away eller säsongskampanjer.",
    priceNote: "Tryckkostnad ingår ej.",
    icon: Printer,
    features: ["A4 / A3 menyer", "Bordskort", "Take-away menyer", "QR-inlägg", "Print-ready PDF"],
  },
];

const demoSteps = [
  { title: "Gästen skannar QR-koden", body: "Bordet, disken eller rummet får en tydlig kod.", icon: QrCode },
  { title: "Menyn öppnas på mobilen", body: "Ingen app behövs. Menyn är byggd för snabb läsning.", icon: ScanLine },
  { title: "Gästen bläddrar bland rätter", body: "Kategorier, rätter och visuella val blir enkla att förstå.", icon: Utensils },
  { title: "Detaljerna blir tydliga", body: "Allergener, beskrivningar och valfri kaloriinfo kan visas per rätt.", icon: BookOpen },
  { title: "Restaurangen får struktur", body: "Admin/köksvy visas bara där flödet är implementerat och relevant.", icon: ChefHat },
];

const restaurantTypes = [
  { title: "Café", body: "Perfekt för frukost, fika, dagens erbjudanden och säsongsmenyer.", icon: Coffee },
  { title: "Lunchrestaurang", body: "Dagens rätter och snabba ändringar kan visas utan omtryck.", icon: ChefHat },
  { title: "Pizzeria", body: "Kategorier, storlekar och tillval blir lättare att skanna i mobilen.", icon: Pizza },
  {
    title: "Bar",
    body: "Tydlig menystruktur för dryck, snacks och alkoholfri information utan att lova självservering utan personal.",
    icon: GlassWater,
  },
  { title: "Fine dining", body: "Mer utrymme för råvaror, berättelse, dryckesförslag och säsong.", icon: Wine },
  { title: "Hotellrestaurang", body: "Frukost, lobby, room service och restaurangmeny kan hållas ihop.", icon: Hotel },
];

const processSteps = [
  {
    title: "Vi går igenom din nuvarande meny",
    body: "Du skickar din meny, bilder eller idéer. Vi analyserar struktur, tydlighet och presentation.",
  },
  {
    title: "Vi skapar struktur och design",
    body: "Vi bygger en menyupplevelse som passar din restaurang, dina rätter och dina gäster.",
  },
  {
    title: "Vi lanserar QR-menyn",
    body: "Du får en färdig digital meny med QR-kod och tydlig mobilupplevelse.",
  },
  {
    title: "Du kan lägga till tryck eller uppdateringar",
    body: "Behöver du säsongsmeny, nya rätter eller tryckfiler kan det beställas separat.",
  },
];

const packages = [
  {
    name: "Startpaket",
    target: "Caféer och mindre menyer",
    features: ["QR-meny", "Grundläggande menystruktur", "Mobilanpassad design", "Enkel lansering"],
  },
  {
    name: "Restaurangpaket",
    target: "Restauranger som vill ha en komplett digital menyupplevelse",
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
    target: "Restauranger som vill kombinera digital meny, tryckdesign och starkare visuell känsla",
    features: [
      "Smart Menu",
      "Digital menyupplevelse",
      "Print-ready menyfiler",
      "Säsongsmenystruktur",
      "Premium layout",
      "Visuell menystrategi",
    ],
  },
];

export default function RestaurantRepositionHome({ locale }: RestaurantRepositionHomeProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const demoHref = getDemoHref(locale, "menu");
  const openContact = () => setIsContactOpen(true);
  const openUpload = () => setIsUploadOpen(true);

  return (
    <div className="restaurant-page min-h-screen bg-[var(--restaurant-bg)] text-[var(--restaurant-text)]">
      <MotionConfig reducedMotion="user">
        <RestaurantNavbar />
        <main>
          <HeroSection demoHref={demoHref} onContact={openContact} />
          <TrustStrip />
          <ProblemSection />
          <CoreServicesSection />
          <DemoExperienceSection demoHref={demoHref} />
          <MenuDesignSection />
          <BeforeAfterSection />
          <RestaurantTypeSection />
          <ProcessSection />
          <PricingSection onContact={openContact} />
          <FinalCtaSection onContact={openContact} onUpload={openUpload} />
        </main>
        <RestaurantFooter locale={locale} />
      </MotionConfig>

      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        locale={locale}
        serviceType="Nord Smart Menu och menydesign"
        sourcePage="/"
        ctaContext="restaurant-home"
        variant="restaurant"
      />
      <MenuUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        sourcePage="/"
      />
    </div>
  );
}

function HeroSection({ demoHref, onContact }: { demoHref: string; onContact: () => void }) {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden px-5 pb-12 pt-32 md:px-6 md:pt-36">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/demo/previews/guest-mobile.png"
        aria-hidden="true"
      >
        <source src="/homepage/videos/restaurant-table-menu.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,15,11,0.86),rgba(22,15,11,0.58)_46%,rgba(22,15,11,0.2)),linear-gradient(180deg,rgba(22,15,11,0.08),rgba(22,15,11,0.78))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,430px)] lg:items-center">
        <div className="min-w-0 max-w-4xl text-white">
          <Reveal>
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f7d9a8] backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              För restauranger, caféer, barer & hotell i Sverige
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-5xl break-words text-4xl font-black leading-[1] tracking-normal sm:text-5xl md:text-7xl md:leading-[0.95]">
              Smarta menyer som gör restaurangupplevelsen modern från första skanningen.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
              Vi skapar QR-menyer, digitala menyupplevelser och tryckklara menydesigner —
              anpassade för riktiga restauranger, inte generiska mallar.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onContact}
                className="restaurant-button restaurant-button-primary restaurant-button-on-dark w-full sm:w-auto"
              >
                Boka gratis menygenomgång
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href={demoHref} className="restaurant-button restaurant-button-glass w-full sm:w-auto">
                Se Smart Menu-demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <StaggerGroup className="mt-8 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <StaggerItem key={chip}>
                <span className="inline-flex min-h-10 items-center rounded-full border border-white/14 bg-white/10 px-4 text-sm font-bold text-white/82 backdrop-blur-xl">
                  {chip}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <HeroPhoneMockup />
      </div>
    </section>
  );
}

function HeroPhoneMockup() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay: 0.3 },
        scale: { duration: 0.7, delay: 0.3 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
      }}
      className="mx-auto w-full max-w-[390px] rounded-[2.25rem] border border-white/18 bg-white/12 p-4 shadow-[0_34px_110px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
    >
      <div className="overflow-hidden rounded-[1.8rem] border border-white/14 bg-[#fff8ef] text-[#241711]">
        <div className="relative h-48">
          <Image
            src="/demo/previews/guest-mobile.png"
            alt="Mobil vy av Nord Smart Menu"
            fill
            priority
            sizes="(max-width: 768px) 86vw, 390px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f7d9a8]">Bord 12</p>
            <p className="mt-1 text-2xl font-black">Nordisk middag</p>
          </div>
        </div>
        <div className="space-y-3 p-4">
          {[
            ["Röding med örter", "189 kr"],
            ["Grön soppa", "129 kr"],
            ["Äppeldessert", "89 kr"],
          ].map(([name, price], index) => (
            <div
              key={name}
              className={`rounded-2xl border p-4 ${
                index === 0
                  ? "border-[rgba(217,79,48,0.24)] bg-[#fff0e6]"
                  : "border-[var(--restaurant-border)] bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-black">{name}</p>
                  <p className="mt-1 text-xs font-semibold text-[var(--restaurant-muted)]">
                    Ingredienser och allergener
                  </p>
                </div>
                <p className="font-black text-[var(--restaurant-tomato)]">{price}</p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2">
            <div className="restaurant-mini-button">Call waiter</div>
            <div className="restaurant-mini-button bg-[var(--restaurant-dark)] text-white">Öppna meny</div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-[var(--restaurant-border)] bg-[var(--restaurant-surface-warm)] px-5 py-8 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {trustChips.map((item) => (
          <div key={item} className="rounded-2xl border border-[var(--restaurant-border)] bg-white/55 px-4 py-4 text-sm font-black text-[var(--restaurant-text)]">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="restaurant-section bg-[var(--restaurant-surface)]">
      <div className="restaurant-container">
        <Reveal className="max-w-3xl">
          <p className="restaurant-eyebrow">Menyproblemet</p>
          <h2 className="restaurant-title mt-4">
            En meny ska hjälpa gästen att välja, förstå och känna förtroende.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <StaggerItem key={problem.title}>
                <article className="restaurant-card h-full p-6">
                  <span className="restaurant-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-black">{problem.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--restaurant-muted)]">{problem.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CoreServicesSection() {
  return (
    <section id="smart-menu" className="restaurant-section scroll-mt-28 bg-[var(--restaurant-bg)]">
      <div className="restaurant-container">
        <Reveal className="max-w-3xl">
          <p className="restaurant-eyebrow">Kärntjänster</p>
          <h2 className="restaurant-title mt-4">
            En komplett menylösning för moderna restauranger.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--restaurant-muted)]">
            Tydliga startpriser för restauranger som vill komma igång med QR-meny, digital menydesign eller
            tryckklara menyfiler utan löpande abonnemang.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} className="scroll-mt-28">
                <article
                  id={service.id === "menu-design" ? "menu-design" : undefined}
                  className="restaurant-card restaurant-lift group relative flex h-full flex-col overflow-hidden p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--restaurant-tomato)] via-[var(--restaurant-saffron)] to-[var(--restaurant-basil)]" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="restaurant-icon transition duration-300 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-[rgba(217,79,48,0.2)] bg-[#fff0e6] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--restaurant-tomato)]">
                      {service.priceType}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                  <div className="mt-5 rounded-2xl border border-[rgba(84,52,34,0.12)] bg-[linear-gradient(135deg,#fff8ef_0%,#fffdf8_54%,#f7eadb_100%)] p-4 shadow-[0_18px_44px_rgba(84,52,34,0.08)]">
                    <p className="text-3xl font-black tracking-normal text-[var(--restaurant-text)]">{service.price}</p>
                    <p className="mt-1 text-sm font-extrabold text-[var(--restaurant-basil)]">{service.priceType}</p>
                  </div>
                  <p className="mt-4 leading-7 text-[var(--restaurant-muted)]">{service.body}</p>
                  {service.priceNote ? (
                    <p className="mt-4 rounded-2xl border border-[rgba(73,107,69,0.18)] bg-[rgba(73,107,69,0.07)] px-4 py-3 text-sm font-bold leading-6 text-[var(--restaurant-basil)]">
                      {service.priceNote}
                    </p>
                  ) : null}
                  <div className="mt-6 grid gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-bold">
                        <span className="h-2 w-2 rounded-full bg-[var(--restaurant-tomato)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function DemoExperienceSection({ demoHref }: { demoHref: string }) {
  return (
    <section id="examples" className="restaurant-section scroll-mt-28 bg-[var(--restaurant-dark)] text-white">
      <div className="restaurant-container">
        <Reveal className="max-w-3xl">
          <p className="restaurant-eyebrow text-[var(--restaurant-gold)]">Så fungerar Nord Smart Menu</p>
          <h2 className="restaurant-title mt-4 text-white">
            Från QR-kod till tydlig menyupplevelse — utan att gästen behöver ladda ner en app.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-5">
          {demoSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <span className="text-sm font-black text-[var(--restaurant-gold)]">0{index + 1}</span>
                  <Icon className="mt-5 h-7 w-7 text-[var(--restaurant-gold)]" />
                  <h3 className="mt-5 font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{step.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <Reveal delay={0.1} className="mt-10">
          <a href={demoHref} className="restaurant-button restaurant-button-primary restaurant-button-on-dark">
            Se Smart Menu-demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function MenuDesignSection() {
  return (
    <section className="restaurant-section bg-[var(--restaurant-surface)]">
      <div className="restaurant-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="restaurant-eyebrow">Menydesign</p>
          <h2 className="restaurant-title mt-4">
            Digital och tryckklar meny som gör maten lättare att välja.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--restaurant-muted)]">
            Vi arbetar med rätt-hierarki, beskrivningar, sektioner, QR-inlägg och print-ready filer så att
            menyn känns professionell både i mobilen och vid bordet.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Digital layout", "Print-ready PDF", "Bättre rätt-hierarki", "Anpassad restaurangkänsla"].map((item) => (
              <div key={item} className="restaurant-card p-5">
                <p className="text-lg font-black">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="restaurant-section bg-[var(--restaurant-bg)]">
      <div className="restaurant-container">
        <Reveal className="max-w-3xl">
          <p className="restaurant-eyebrow">Före / efter</p>
          <h2 className="restaurant-title mt-4">
            Från rörig meny till modern restaurangupplevelse.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--restaurant-muted)]">
            En bra meny hjälper gästen att välja snabbare, förstå rätterna bättre och känna mer
            förtroende för restaurangen.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="restaurant-card overflow-hidden">
              <div className="bg-[#efe0ce] p-6">
                <p className="restaurant-eyebrow">Före</p>
                <h3 className="mt-3 text-2xl font-black">Trång PDF-meny</h3>
                <div className="mt-6 rounded-2xl border border-[var(--restaurant-border)] bg-white p-5">
                  <div className="h-4 w-2/3 rounded-full bg-[#d8c6b5]" />
                  <div className="mt-5 grid gap-3">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div key={index} className="grid grid-cols-[1fr_auto] gap-4">
                        <div className="h-3 rounded-full bg-[#e7d8c9]" />
                        <div className="h-3 w-12 rounded-full bg-[#d8c6b5]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="restaurant-card overflow-hidden">
              <ParallaxImage
                src="/demo/previews/guest-mobile.png"
                alt="Modern digital QR-meny i mobil"
                className="h-[360px] bg-[var(--restaurant-dark)]"
                imageClassName="object-top"
              />
              <div className="p-6">
                <p className="restaurant-eyebrow">Efter</p>
                <h3 className="mt-3 text-2xl font-black">Modern mobile QR menu</h3>
                <p className="mt-3 leading-7 text-[var(--restaurant-muted)]">
                  Rätter, kategorier, bilder och beskrivningar får en tydlig premium presentation.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RestaurantTypeSection() {
  return (
    <section className="restaurant-section bg-[var(--restaurant-surface)]">
      <div className="restaurant-container">
        <Reveal className="max-w-3xl">
          <p className="restaurant-eyebrow">Olika koncept</p>
          <h2 className="restaurant-title mt-4">Byggt för olika typer av matställen.</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {restaurantTypes.map((type) => {
            const Icon = type.icon;
            return (
              <StaggerItem key={type.title}>
                <article className="restaurant-card restaurant-lift h-full p-6">
                  <Icon className="h-7 w-7 text-[var(--restaurant-tomato)]" />
                  <h3 className="mt-5 text-xl font-black">{type.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--restaurant-muted)]">{type.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="restaurant-section scroll-mt-28 bg-[var(--restaurant-bg)]">
      <div className="restaurant-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="restaurant-eyebrow">Process</p>
          <h2 className="restaurant-title mt-4">Så enkelt går det till.</h2>
        </Reveal>
        <div className="grid gap-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="restaurant-card flex gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--restaurant-dark)] text-sm font-black text-[var(--restaurant-gold)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-black leading-7">{step.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--restaurant-muted)]">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onContact }: { onContact: () => void }) {
  return (
    <section id="pricing" className="restaurant-section scroll-mt-28 bg-[var(--restaurant-surface)]">
      <div className="restaurant-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="restaurant-eyebrow">Engångsbetalning</p>
          <h2 className="restaurant-title mt-4">
            Ingen månadsavgift för kärnleveransen.
          </h2>
          <p className="mt-5 leading-8 text-[var(--restaurant-muted)]">
            Du betalar för ett tydligt projekt: struktur, design, QR-meny och lansering.
            Framtida uppdateringar, säsongsmenyer och extra support kan köpas till vid behov.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <StaggerItem key={item.name}>
              <article className="restaurant-card restaurant-lift flex h-full flex-col p-6">
                <p className="restaurant-eyebrow">{item.name}</p>
                <h3 className="mt-5 text-2xl font-black">{item.target}</h3>
                <div className="mt-6 grid gap-3">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold">
                      <span className="h-2 w-2 rounded-full bg-[var(--restaurant-tomato)]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button type="button" onClick={onContact} className="restaurant-button restaurant-button-primary mt-auto">
                  Be om prisförslag
                </button>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FinalCtaSection({ onContact, onUpload }: { onContact: () => void; onUpload: () => void }) {
  return (
    <section className="restaurant-section bg-[var(--restaurant-dark)] text-white">
      <div className="restaurant-container">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 md:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="restaurant-eyebrow text-[var(--restaurant-gold)]">Nästa steg</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Redo att göra din meny modernare?
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/68">
                Boka en gratis menygenomgång eller maila din nuvarande meny så tar vi fram ett konkret förslag.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 lg:mt-0">
              <button type="button" onClick={onContact} className="restaurant-button restaurant-button-primary restaurant-button-on-dark">
                Boka gratis menygenomgång
                <CalendarClock className="h-4 w-4" />
              </button>
              <button type="button" onClick={onUpload} className="restaurant-button restaurant-button-glass">
                Skicka din nuvarande meny
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
