import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/jojobaolja-multitalang`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Jojobaolja – multitalangen värd plats?",
    href: "/guider/jojobaolja-multitalang",
  },
];

const sections = [
  {
    heading: "Därför är jojoba så mångsidig",
    bullets: [
      "Jojoba liknar hudens eget sebum, vilket gör den lätt och sällan fet – den passar även fet och blandhy.",
      "Mjukgör hud, vårdar hårtopparna och kan användas på naglar och nagelband.",
      "En ren, kallpressad olja har få ingredienser och många användningsområden.",
    ],
    closing: "En flaska kan ersätta flera enklare produkter.",
  },
  {
    heading: "Var den inte räcker",
    bullets: [
      "En olja är ett mjukgörande sista steg – den ersätter inte fukt (som hyaluronsyra) eller aktiva serum.",
      "För specifika behov (fett/glans, ojämn ton) gör ett riktat serum mer.",
    ],
    closing: "Se jojoba som en mångsidig bas, inte en mirakelkur.",
  },
] as const;

const faqItems = [
  {
    question: "Passar jojobaolja fet hud?",
    answer:
      "Ofta ja. Jojoba liknar hudens sebum och är lätt, men börja med några få droppar.",
  },
  {
    question: "Kan jojobaolja ersätta fuktkräm?",
    answer:
      "Inte helt. Olja mjukgör men binder inte fukt som en fuktkräm eller hyaluronsyra – de fungerar bäst ihop.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Jojobaolja – en multitalang värd plats i necessären? | Elins val",
  description:
    "Elin går igenom jojobaolja ärligt – varför en enda olja kan ersätta flera produkter, och var den inte räcker.",
  url: pageUrl,
});

export default function JojobaoljaMultitalangPage() {
  return (
    <GuidePage
      h1="Jojobaolja – multitalangen värd plats?"
      intro="Jojobaolja hyllas som en multitalang för hud, hår och naglar. Men håller det – och kan den ersätta dyrare specialprodukter? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha en enkel, prisvärd produkt som gör flera jobb – hud, hår och naglar – är en ren jojobaolja som Kanzys riktigt prisvärd. Komplettera med ett fukt- eller aktivt serum när du har ett specifikt mål.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/jojobaolja",
            label: "Kanzy – mångsidig jojobaolja",
          },
          {
            href: "/skonhet/hyaluronsyra-serum",
            label: "Hyaluronsyra för fukt",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/jojobaolja",
          label: "Elins val",
          text: "Kanzy – mångsidig jojobaolja",
        },
        {
          href: "/skonhet/hyaluronsyra-serum",
          label: "Hudvård",
          text: "Hyaluronsyra för fukt",
        },
      ]}
    />
  );
}
