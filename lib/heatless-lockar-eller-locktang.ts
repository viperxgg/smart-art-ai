import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const curlingMethodDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "kitsch-heatless-curls", model: "Kitsch Satin Heatless Curling Set",
    variant: "Granskad variant: Charcoal, vanlig storlek, med två scrunchies. Staven anges till 34 tum × 1,25 tum i diameter, cirka 86 × 3,2 cm. Inte XL-setet. Hårklämman i instruktionen ingår inte. Färg och ASIN B0CF76VGD5 är inte matchade mot svensk butiksvara.",
    chooseIf: "du vill forma håret utan en uppvärmd tång och kan låta uppsättningen sitta medan håret torkar eller över natten. Märket beskriver att linda håret runt staven och fästa ändarna med scrunchies.",
    avoidIf: "du behöver en förutsägbar sluttid eller vet att du inte vill ha en stav i håret när du sover. Vi har inte testat sovkomfort eller lockarnas hållbarhet. Utan värme betyder inte att vi har bevisat noll friktion eller hårbrott.",
    sourceIds: ["C1"], merchantVariantVerified: false,
  }, {
    productSlug: "babyliss-c325e-locktang", model: "BaByliss C325E",
    variant: "Manuell locktång. BaByliss-manualen som Elon publicerar för C325E gäller PRO 180 Sublim’touch. Katalogens BABYLISS_C325E är en intern platshållare, inte ett verifierat ASIN. Exakt butiksexemplar, diameter och medföljande tillbehör återstår att matcha.",
    chooseIf: "du vill forma en hårslinga i taget med en uppvärmd tång och kan följa instruktionerna för den exakta apparaten. Manualen beskriver tio värmelägen och en klämma som öppnas med hävarm; arbetet är manuellt.",
    avoidIf: "du vill undvika uppvärmda verktyg eller behöver en automatisk lockare. Vi har inte verifierat hela frisyrens arbetstid, ett lägsta gradtal eller att samma inställning passar allt hår. Köp inte utifrån katalogens tidigare löfte om 45 sekunders uppvärmning.",
    sourceIds: ["C2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Den valda metoden passar din tid och ditt arbetssätt bättre än verktygen du har. Räkna in eventuell klämma till Kitsch-setet, men köp ingen extra om en lämplig redan finns. Vi har inte fastställt aktuellt prisvärde eller en snabbhetsvinnare.",
  noPurchaseWhen: "Din befintliga metod ger lockar du trivs med, eller du inte behöver ändra frisyren. Du behöver inte köpa båda verktygen för att de visas tillsammans.",
  swedishContext: "Kitsch-källan är internationell. BaByliss-underlaget har svensk text och ligger hos Elon, men en publicerad manual bevisar inte aktuell lagerstatus eller identiskt butiksexemplar. Kontrollera modellbeteckning, kontakt, bruksanvisning och totalpris före köp.",
  testing: "Vi har läst instruktioner och innehåll, inte provat lockresultat, skador, tidsåtgång eller hur länge lockarna håller. Märkenas bilder, kundbetyg och AI-sammanfattningar är inte våra tester.",
  limitations: "Kitschs installationsminuter är inte en verifierad tid till färdiga lockar. BaByliss-manualen anger 180 °C och lägen, inte verifierade grader för varje läge. Följ säkerhetsanvisningen: undvik kontakt med hårbotten, stäng av, dra ur sladden och låt svalna före förvaring. Bildrättigheter och butiksmatchning är öppna.",
  sources: [
    { id: "C1", title: "Kitsch – Charcoal Satin Heatless Curling Set", url: "https://www.mykitsch.com/products/satin-heatless-curling-set-charcoal", checkedAt: "2026-09-09", supports: "Vanligt set, två scrunchies, mått och klämma som inte ingår. Instruktion: fuktigt eller torrt hår, linda och fäst, låt torka eller bär över natten. Ingen oberoende verifiering av skadefrihet eller färdigt resultat på fem minuter." },
    { id: "C2", title: "BaByliss PRO 180-manual för C325E hos Elon (PDF)", url: "https://static.elongroup.se/Document/Article/184273/manual-har-foner-babyliss-c325e.pdf", checkedAt: "2026-09-09", supports: "Tillverkarens manual på återförsäljarens server, svensk text på sida 2: tio lägen, 180 °C, manuell klämma, avstängning och avsvalning. Exakt hårdvarurevision och diameter är inte verifierade här. Ingen uppmätt prestandajämförelse." },
  ],
};

export const heatlessOrTongGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/heatless-lockar-eller-locktang",
  title: "Lockar utan värme eller med tång – vilken metod passar din tid?",
  intro: "Kitsch-setet behöver sitta i håret; BaByliss-tången kräver aktiv styling med värme. Jämför väntetid, handarbete och rätt modell i stället för att utgå från löften om perfekta lockar.",
  decision: curlingMethodDecision, productPaths: ["/skonhet/heatless-curls", "/skonhet/locktang/babyliss-c325e"],
  questions: [
    { question: "Är lockarna klara på fem minuter?", answer: "Det är inte verifierat. För Kitsch skiljer vi tiden att linda upp håret från tiden det behöver sitta. Instruktionen säger att låta håret torka eller bära setet över natten. Vi har inte mätt total stylingtid för någon av produkterna." },
    { question: "Ingår hårklämman i Kitsch-setet?", answer: "Nej, produktsidans instruktion anger att klämman inte ingår. Två scrunchies ingår. Kontrollera paketet och vad du redan har innan du köper extra tillbehör." },
    { question: "Betyder utan värme att håret inte kan slitas?", answer: "Nej, vi har inte underlag för ett sådant absolut löfte. Det konkreta är att Kitsch-metoden inte använder en uppvärmd tång. Komfort, drag i håret och resultat har vi inte testat." },
  ],
  related: [{ href: "/skonhet/tangle-teezer-eller-harborste", text: "Behöver du en ny utredningsborste?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
