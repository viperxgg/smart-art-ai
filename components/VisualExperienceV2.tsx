import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  GitCompareArrows,
  Search,
  Shapes,
} from "lucide-react";

import { ElinCtaButton } from "@/components/elin/ElinCtaButton";

import styles from "@/app/preview/visual-v2/preview.module.css";

const navigation = [
  { label: "Skönhet", href: "/skonhet" },
  { label: "Hälsa", href: "/halsa" },
  { label: "Träning", href: "/traning" },
  { label: "Guider", href: "/guider" },
] as const;

const curatedProducts = [
  {
    label: "Hudvård",
    note: "Elins val",
    title: "Hyaluronsyra-serum",
    href: "/skonhet/hyaluronsyra-serum",
    image:
      "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-thumbnail.webp",
    imageAlt: "Minimalist Hyaluronsyra-serum",
    cardClass: styles.productOne,
  },
  {
    label: "Träning",
    note: "Prisvärt",
    title: "Träningsband",
    href: "/traning/traningsband-naturlatex",
    image: "/products/resistance-bands/elin-resistance-band-thumbnail.webp",
    imageAlt: "Person som tränar med ett lila träningsband",
    cardClass: styles.productTwo,
  },
  {
    label: "Resa",
    note: "Nytt",
    title: "Mobilhållare",
    href: "/sommar/resa/mobilhallare-ventil",
    image: "/products/blukar-mobilhallare/mobilhallare-thumbnail.webp",
    imageAlt: "Blukar mobilhållare med ventilklämma",
    cardClass: styles.productThree,
  },
] as const;

const intentPaths = [
  {
    eyebrow: "Jag har ett behov",
    title: "Hitta en tydlig väg in",
    text: "Sök efter problemet, produkten eller märket du funderar på.",
    href: "/sok",
    cta: "Sök bland valen",
    Icon: Search,
  },
  {
    eyebrow: "Jag väljer mellan två",
    title: "Jämför utan köphype",
    text: "Se skillnaden, vem alternativen passar och vad du kan skippa.",
    href: "/jamforelser",
    cta: "Öppna jämförelser",
    Icon: GitCompareArrows,
  },
  {
    eyebrow: "Jag vill upptäcka",
    title: "Börja med Elins urval",
    text: "Utforska tydligt motiverade val i stället för ett ändlöst flöde.",
    href: "/elins-val",
    cta: "Se Elins val",
    Icon: Shapes,
  },
] as const;

export function VisualExperienceV2({ preview = false }: { preview?: boolean }) {
  return (
    <main
      id="content"
      className={styles.previewRoot}
      {...(preview ? { "data-visual-preview": "" } : { "data-visual-v2": "" })}
    >
      {preview ? (
        <div className={styles.previewNotice} role="status">
          Visuell prototyp · inte live
        </div>
      ) : null}

      <header className={styles.previewHeader}>
        <div className={styles.headerInner}>
          <Link href={preview ? "/preview/visual-v2" : "/"} className={styles.wordmark}>
            <span className={styles.avatarWrap}>
              <Image
                src="/elin/elin-avatar.webp"
                alt=""
                fill
                sizes="42px"
                className={styles.avatar}
                priority
              />
            </span>
            <span>Elins val</span>
          </Link>

          <nav aria-label="Huvudnavigering" className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <ElinCtaButton className={styles.headerAction}>Fråga Elin</ElinCtaButton>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="visual-v2-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Ärligt utvalt · tydligt förklarat</p>
          <h1 id="visual-v2-title">Från brus till ett tydligt val.</h1>
          <p className={styles.lede}>
            Elin granskar, jämför och väljer bort – så att du hittar det som
            passar utan köphype.
          </p>

          <div className={styles.heroActions}>
            <a href="#valj-vag" className={styles.primaryAction}>
              Hitta rätt val
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <ElinCtaButton className={styles.secondaryAction}>Fråga Elin</ElinCtaButton>
          </div>

          <div className={styles.proofRow} aria-label="Så fungerar Elins val">
            <span><b>01</b> Välj ett behov</span>
            <span><b>02</b> Se varför</span>
            <span><b>03</b> Läs eller jämför</span>
          </div>
        </div>

        <div className={styles.curationStage} aria-label="Exempel på Elins urval">
          <div className={styles.softShape} aria-hidden="true" />
          <div className={styles.orbitOne} aria-hidden="true" />
          <div className={styles.orbitTwo} aria-hidden="true" />

          <div className={styles.stageLabel}>
            <span>Utvalt med en anledning</span>
            <b>Tre vägar in</b>
          </div>

          {curatedProducts.map((product, index) => (
            <Link
              key={product.href}
              href={product.href}
              className={`${styles.productCard} ${product.cardClass}`}
              style={{ "--card-index": index } as CSSProperties}
              aria-label={`Öppna ${product.title}`}
            >
              <div className={styles.productImageWrap}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 720px) 42vw, 240px"
                  className={styles.productImage}
                  priority={index === 0}
                  {...(index === 0 ? {} : { loading: "lazy" as const })}
                />
              </div>
              <div className={styles.productMeta}>
                <span>{product.label} · {product.note}</span>
                <b>{product.title}</b>
              </div>
              <ArrowUpRight className={styles.productArrow} size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section id="valj-vag" className={styles.intentSection} aria-labelledby="intent-title">
        <div className={styles.intentHeading}>
          <p className={styles.kicker}>Börja med det som är viktigt för dig</p>
          <h2 id="intent-title">Vad vill du lösa idag?</h2>
        </div>

        <div className={styles.intentGrid}>
          {intentPaths.map(({ Icon, ...path }) => (
            <Link key={path.href} href={path.href} className={styles.intentCard}>
              <span className={styles.intentIcon}><Icon size={20} aria-hidden="true" /></span>
              <p>{path.eyebrow}</p>
              <h3>{path.title}</h3>
              <span className={styles.intentText}>{path.text}</span>
              <b className={styles.intentCta}>
                {path.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
