import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { selfTanDecision } from "@/lib/self-tan-decision";
import { bondiTanDecision } from "@/lib/bondi-tan-decision";

export const selfTanComparisonGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/st-tropez-eller-bondi-sands",
  title: "Vilken brun-utan-sol-rutin får plats i din dag?",
  intro: "Jämför Express Bronzing Mousse med Ultra Dark Self Tanning Foam, båda 200 ml. Skillnaden i tid före dusch är dokumenterad; vilken som blir jämnast eller enklast har vi inte testat.",
  decision: {
    reviewedAt: "2026-09-09",
    options: [...selfTanDecision.options, ...bondiTanDecision.options],
    sources: [...selfTanDecision.sources, ...bondiTanDecision.sources].map(source => ({ ...source, checkedAt: "2026-09-09" })),
    payMoreWhen: "En dokumenterad skillnad i rutinen passar ditt behov bättre. Möjligheten att skölja tidigare kan vara praktisk, men vi har inte jämfört aktuella totalpriser, förbrukning eller färgresultat. Dyrare betyder inte automatiskt jämnare.",
    noPurchaseWhen: "Du är nöjd med din hudton eller redan har en produkt som fungerar. En mörkare nyans är inte en förbättring i sig, och du behöver inte köpa två mousser för att kunna välja.",
    swedishContext: "Källorna gäller brittiska förpackningar. Kontrollera Express respektive Ultra Dark, volym, ingredienser och instruktioner för det svenska erbjudandet. Handske och frakt kan påverka totalpriset; inget paket med tillbehör är verifierat.",
    testing: "Vi har återläst tillverkarnas instruktioner och ingredienslistor. Ingen egen applicering eller jämförelse av nyans, doft, jämnhet, färgöverföring eller hållbarhet. Vi utser ingen vinnare för nybörjare.",
    limitations: "Båda innehåller Parfum och används inte som solskydd. Följ respektive förpacknings test- och användningsanvisningar; Bondi Sands anger ett test på underarmen 24 timmar före användning och avråder från skadad eller inflammerad hud. Bilder och aktuella svenska butiksversioner är inte godkända.",
  },
  productPaths: ["/skonhet/brun-utan-sol", "/skonhet/brun-utan-sol-mousse"],
  questions: [
    { question: "Betyder Express att färgen är färdig efter en timme?", answer: "Nej. St.Tropez anger avsköljning efter en, två eller tre timmar för olika färgdjup. Därefter fortsätter färgen utvecklas under åtta timmar. Planera alltså även tiden efter duschen." },
    { question: "Kan jag skölja Ultra Dark lika tidigt?", answer: "Använd inte Express-instruktionen för den andra produkten. Bondi Sands anger sex till åtta timmar före dusch för Ultra Dark. Ultra Express är en annan variant." },
    { question: "Är bara Bondi Sands färgad som appliceringshjälp?", answer: "Nej. St.Tropez beskriver också Express som en färgad mousse som hjälper dig se var du applicerat. Det är inget bevis för vilken som blir enklast eller jämnast för dig." },
    { question: "Ger den mörkare färgen solskydd?", answer: "Nej. Tillverkarnas information anger att dessa produkter inte ger solskydd. Färgresultatet är inte ett mått på skydd mot UV-strålning." },
  ],
  related: [
    { href: "/skonhet/sjalvbrun-vante", text: "Behöver du en appliceringshandske?" },
    { href: "/skonhet/bronzing-drops", text: "Läs om tillfälligt skimmer" },
    { href: "/skonhet", text: "Fler beslut för hudvården" },
  ],
};
