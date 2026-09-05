import type { BastITestPage } from "@/lib/bast-i-test/types";
import {
  dreoCruiserProFlaktProduct,
  getProductBySlug,
  honeywellTurboforceFlaktProduct,
  mideaFz10FlaktProduct,
  xiaomiStandingFanProduct,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";

// "Tyst fläkt till sovrummet - bäst i test 2026" (Fas 1, batch A1).
// Every product is the shared record from the data layer; midea-golvflakt lives
// in lib/wave-products.ts and is reached through the uniform slug lookup. Noise
// figures are manufacturer/buyer information, never our own measurement.

const mideaGolvflaktProduct = getProductBySlug("midea-golvflakt");

if (!mideaGolvflaktProduct) {
  throw new Error(
    'Product "midea-golvflakt" is missing from the data layer; the tyst-flakt-sovrum page needs it.',
  );
}

/**
 * Elins poäng cell for the comparison table. Read from lib/scores.ts like the
 * score pills are, so the table can never drift from the rest of the page.
 */
function scoreCell(slug: string, suffix = "") {
  const score = getEditorialScore(slug);

  if (!score) {
    throw new Error(`Missing editorial score for "${slug}".`);
  }

  return `${score.total}${suffix}`;
}

export const tystFlaktSovrum: BastITestPage = {
  slug: "tyst-flakt-sovrum",
  path: "/guider/tyst-flakt-sovrum",
  category: "Tyst fläkt till sovrummet",
  title: "Tyst fläkt till sovrummet – bäst i test 2026",
  metaTitle: "Tyst fläkt till sovrummet – bäst i test 2026 | Elins val",
  metaDescription:
    "Elin jämför fem fläktar för sovrummet: ljudnivå, nattläge, timer och köparnas omdömen. Se vilken som är tystast – och vilken du hoppar över. (Annons)",
  h1: "Tyst fläkt till sovrummet – bäst i test 2026",
  intro:
    "En fläkt i sovrummet ska göra en enda sak: svalka utan att höras. Här jämför Elin fem fläktar med ljudnivån på lägsta läget som tyngsta kriterium – två tornfläktar, en golvfläkt, en smart golv- och bordsfläkt och en kompakt bordsfläkt. Fyra av dem rankas för sovrummet. Den femte, Honeywell TurboForce, är med som kontrast: kraftfull och prisvärd, men enligt köparna runt 56 dB och därför fel val bredvid sängen. Elins poäng bygger på köparnas omdömen och tillverkarnas uppgifter, inte på egna mätningar. Längre ner finns jämförelsetabellen, en köpguide och svar på de frågor svenskar faktiskt söker på.",
  picks: [
    {
      product: dreoCruiserProFlaktProduct,
      slug: "dreo-cruiser-pro-tornflakt",
      badge: "Bäst i test",
      verdict:
        "Tystast i jämförelsen och den enda med en display som slocknar helt – premiumvalet för dig som vaknar av minsta ljud.",
      pros: [
        "Köparna beskriver den som tyst: ”tystare än min gamla AC”.",
        "Cirka 20 dB på lägsta läget enligt tillverkaren – lägst i jämförelsen.",
        "9 hastigheter gör att du kan finjustera svalkan nattetid.",
        "Displayen slocknar helt, så inget lyser mot sängen.",
        "Oscillering, timer och fjärrkontroll att sköta från sängen.",
      ],
      cons: [
        "Någon köpare tycker att basen känns plastig och lite ostadig.",
        "Den låter tydligt mer på högsta läget (9).",
        "106 cm hög – den tar mer golvyta än en bordsfläkt.",
      ],
      whoFor:
        "Dreo Cruiser Pro passar dig som vill svalka hela sovrummet utan att höra fläkten. Sover du lätt, eller stör du dig på displayer som lyser i mörkret, är det här modellen med minst att irritera sig på. Vill du bara ha riktad luft vid skrivbordet är den mer fläkt än du behöver.",
      productHref: "/halsa/flakt/dreo-cruiser-pro",
      comparisonHrefs: [
        "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e",
        "/halsa/tornflakt-eller-bordsflakt",
      ],
    },
    {
      product: mideaFz10FlaktProduct,
      slug: "midea-fz10-tornflakt",
      badge: "Bästa budget",
      verdict:
        "Nattläge, 7-timmarstimer och fjärrkontroll till mellanpris – tyst nog på de lägre lägena för de flesta sovrum.",
      pros: [
        "Tyst på de lägre hastigheterna – fungerar i sovrummet enligt köparna.",
        "Nattläge som sänker både ljudet och ljuset från displayen.",
        "7-timmarstimer, så den stänger av sig medan du sover.",
        "90 graders oscillering och fjärrkontroll ingår.",
        "Bästsäljare bland tornfläktar med 4,4 av 5 från 2 659 omdömen.",
      ],
      cons: [
        "Cirka 38 dB på drift – hörbart mer än Dreo på lägsta läget.",
        "Den låter mer på högsta läget (3).",
        "Enstaka köpare har fått paketet utan fjärrkontrollen.",
      ],
      whoFor:
        "Midea FZ10 passar dig som vill ha en sovrumsvänlig tornfläkt utan att lägga premiumnivå på tystnaden. Du får nattläge, timer och fjärrkontroll – det som faktiskt gör skillnad på natten – och får leva med att den hörs tydligare när du drar upp den. För de flesta sovrum räcker det lägsta läget hela natten.",
      productHref: "/halsa/flakt/midea-fz10",
      comparisonHrefs: [
        "/halsa/golvflakt-eller-tornflakt",
        "/guider/flakt-dyr-vs-billig",
      ],
    },
    {
      product: mideaGolvflaktProduct,
      slug: "midea-golvflakt",
      badge: "Bäst för större sovrum",
      verdict:
        "DC-motor, fjärrkontroll och timer i ett golvformat som flyttar mer luft än en bordsfläkt – valet när rummet är stort.",
      pros: [
        "DC-motorn är byggd för lägre ljudnivå än en vanlig AC-motor.",
        "Fjärrkontroll och timer, så du slipper gå upp ur sängen.",
        "Golvformatet flyttar mer luft än en liten bordsfläkt.",
        "4,5 av 5 från 658 omdömen på Amazon, kontrollerat juli 2026.",
      ],
      cons: [
        "Golvformatet tar mer plats än en smal tornfläkt.",
        "dB-uppgifterna är säljar- och köparinformation, inget vi kan bekräfta.",
        "Produktdatan anger varken antal lägen eller oscillering.",
      ],
      whoFor:
        "Midea MFS400 passar dig med ett större sovrum, eller ett rum där luften står still och en smal tornfläkt inte räcker hela vägen. Du styr den med fjärrkontroll och timer från sängen. Har du ont om golvyta är en tornfläkt den bättre kompromissen.",
      productHref: "/halsa/flakt/midea-golvflakt",
      comparisonHrefs: [
        "/halsa/golvflakt-eller-tornflakt",
        "/halsa/tornflakt-eller-bordsflakt",
      ],
    },
    {
      product: xiaomiStandingFanProduct,
      slug: "xiaomi-bordsflakt",
      badge: null,
      verdict:
        "Smart styrning och tyst drift enligt köparna – men ännu få omdömen bakom betyget, så den får ingen placering.",
      pros: [
        "Köparna beskriver den som tyst nog att ha på under arbete och sömn.",
        "Appstyrning och knappar gör den enkel att ställa in.",
        "Flera hastighetslägen att finjustera svalkan med.",
        "Lagom storlek för både skrivbordet och sovrummet.",
      ],
      cons: [
        "Betyget 4,7 vilar på bara 22 omdömen och kan ändras över tid.",
        "Appstyrningen kräver app och uppkoppling, vilket inte passar alla.",
        "Produktdatan saknar dB-uppgift och besked om oscillering.",
      ],
      caution:
        "Betyget 4,7 ser bäst ut i hela jämförelsen, men 25 944 omdömen väger tyngre än 22. Därför får Xiaomi ingen placering bland de tre toppvalen – inte för att den är sämre, utan för att underlaget ännu är för tunt.",
      whoFor:
        "Xiaomi Mi Smart Standing Fan 2 Lite passar dig som redan använder Xiaomis app och vill styra fläkten därifrån. Den är lagom stor för både skrivbord och sovrum, och de som köpt den beskriver den som tyst. Vill du ha ett betyg med tusentals omdömen bakom sig är Dreo eller Midea tryggare val just nu.",
      productHref: "/halsa/bordsflakt",
      comparisonHrefs: [
        "/halsa/tornflakt-eller-bordsflakt",
        "/halsa/handflakt-eller-bordsflakt",
      ],
    },
  ],
  contrast: {
    product: honeywellTurboforceFlaktProduct,
    slug: "honeywell-turboforce-ht900e",
    badge: null,
    verdict:
      "Kraftfull och prisvärd bordsfläkt – men runt 56 dB enligt köparna, och därmed fel fläkt att ha igång medan du sover.",
    pros: [
      "Kraftfullt luftflöde för en så liten fläkt.",
      "Prisvärd och smidig att flytta eller väggmontera.",
      "3 hastigheter och 90 graders lutning för riktad luft.",
      "Bästsäljare bland bordsfläktar med 4,4 av 5 från 28 253 omdömen.",
    ],
    cons: [
      "Bullrig, runt 56 dB – inte tyst trots marknadsföringen, särskilt nattetid.",
      "Plastig känsla.",
      "Varken oscillering eller fjärrkontroll.",
      "Ingen timer, så den går tills du stänger av den för hand.",
    ],
    caution:
      "Honeywells 87 poäng är satta som bordsfläkt vid skrivbordet, inte som sovrumsfläkt. Poängen står kvar – men i den här kategorin rankas den inte, eftersom ljudnivån väger tyngst.",
    whoFor:
      "Honeywell TurboForce passar dig som vill ha snabb, riktad svalka vid skrivbordet eller i ett mindre rum utan att lägga mycket pengar. Den är med här av en anledning: många köper den till sovrummet på grund av betyget och prisnivån, och blir besvikna på ljudet. Ska fläkten stå på medan du sover, välj en av tornfläktarna i stället.",
    productHref: "/halsa/flakt/honeywell-turboforce",
    comparisonHrefs: [
      "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e",
      "/halsa/tornflakt-eller-bordsflakt",
    ],
  },
  skip: {
    text: "Beurer LV 50 Fresh Breeze är den enda produkten i fläktfamiljen som Elin sätter omdömet ”Rekommenderas inte” på: 58 poäng och 3,6 av 5 från 242 omdömen. En luftkylare med vattentank ger en personlig bris precis framför sig, inte sval rumsluft, och betyget speglar att många köpare väntat sig något annat. Söker du svalka i sovrummet är den inte vägen dit – men vill du förstå skillnaden mellan luftkylare och fläkt innan du bestämmer dig finns hela genomgången kvar.",
    href: "/halsa/luftkylare",
  },
  table: {
    rowHeader: "Kolumn",
    columns: [
      { name: "Dreo Cruiser Pro T1", href: "/halsa/flakt/dreo-cruiser-pro" },
      { name: "Midea FZ10-17JR", href: "/halsa/flakt/midea-fz10" },
      { name: "Midea MFS400", href: "/halsa/flakt/midea-golvflakt" },
      { name: "Xiaomi Fan 2 Lite", href: "/halsa/bordsflakt" },
      { name: "Honeywell HT900E", href: "/halsa/flakt/honeywell-turboforce" },
    ],
    rows: [
      {
        label: "Typ",
        cells: [
          "Bladlös tornfläkt, 106 cm",
          "Tornfläkt, 96,5 cm",
          "Golvfläkt, DC-motor",
          "Smart golv-/bordsfläkt",
          "Kompakt bordsfläkt, 27,7 cm",
        ],
      },
      {
        label: "Ljudnivå, lägsta läget (enligt tillverkare/köpare)",
        cells: [
          "ca 20 dB",
          "ca 38 dB",
          "— (dB-uppgifter är säljarinformation)",
          "— (”tyst drift” enligt köpare)",
          "ca 56 dB",
        ],
      },
      {
        label: "Hastigheter/lägen",
        cells: [
          "9",
          "3 + 3 lägen (inkl. nattläge)",
          "—",
          "Flera hastighetslägen",
          "3",
        ],
      },
      {
        label: "Oscillering",
        cells: ["Ja", "Ja, 90 grader", "—", "—", "Nej (90 graders lutning)"],
      },
      {
        label: "Timer",
        cells: ["Ja", "Ja, 7 h", "Ja", "—", "Nej"],
      },
      {
        label: "Styrning",
        cells: [
          "Fjärrkontroll, display som slocknar",
          "Fjärrkontroll",
          "Fjärrkontroll",
          "App + knappar",
          "Knappar; väggmontering",
        ],
      },
      {
        label: "Elins poäng",
        cells: [
          scoreCell("dreo-cruiser-pro-tornflakt"),
          scoreCell("midea-fz10-tornflakt"),
          scoreCell("midea-golvflakt"),
          scoreCell("xiaomi-bordsflakt"),
          scoreCell("honeywell-turboforce-ht900e", " (som bordsfläkt)"),
        ],
      },
    ],
  },
  criteria: [
    {
      name: "Ljudnivå på lägsta läget",
      weight: 35,
      note: "”Tystare än min gamla AC” mot ”bullrig” avgör om fläkten får stå på hela natten.",
    },
    {
      name: "Nattfunktioner: nattläge, display som slocknar, timer",
      weight: 20,
      note: "En display som lyser, eller en fläkt som inte stänger av sig, väcker fler än man tror.",
    },
    {
      name: "Luftflöde och räckvidd",
      weight: 20,
      note: "Tornfläkt och golvfläkt svalkar hela rummet, bordsfläkten bara den som sitter framför den.",
    },
    {
      name: "Styrning och lägen",
      weight: 10,
      note: "Fjärrkontroll eller app från sängen, och antal lägen att finjustera med.",
    },
    {
      name: "Köparomdömen (betyg gånger volym)",
      weight: 15,
      note: "25 944 omdömen väger tyngre än 22 – därför får Xiaomi en varning trots 4,7.",
    },
  ],
  guide: [
    {
      heading: "Ljudnivå i dB – vad ”tyst” faktiskt betyder",
      body: "Ett sovrum upplevs tyst runt 20–35 dB. Skillnaden mellan 20 och 38 dB låter liten på pappret, men decibelskalan är logaritmisk: 38 dB upplevs ungefär dubbelt så starkt. Jämför alltid det lägsta läget, aldrig det högsta, för det är på lägsta läget fläkten ska gå medan du sover. Tillverkarnas dB-uppgifter är dessutom mätta under ideala förhållanden, så läs dem tillsammans med vad köparna skriver. En fläkt som beskrivs som ”jämnt brus” stör oftast mindre än en som beskrivs som ”surrande”, även vid samma siffra.",
    },
    {
      heading: "Nattläge och display – lamporna som väcker",
      body: "Många fläktar har en display som lyser hela natten, och i ett mörkt sovrum räcker det för att störa. Ett riktigt nattläge gör två saker: sänker hastigheten stegvis och dämpar eller släcker displayen helt. Dreo Cruiser Pro släcker sin display, Midea FZ10 har ett nattläge som dämpar både ljud och ljus. Saknar fläkten den funktionen får du tejpa över lampan – en vanligare lösning än man tror. Kolla också om fjärrkontrollen har en egen lysdiod som blinkar.",
    },
    {
      heading: "Timer – låt fläkten stänga av sig själv",
      body: "En timer på 2–7 timmar löser två problem samtidigt. Du slipper vakna av att det blir för kallt mot morgonen, och fläkten går inte i onödan resten av natten. Midea FZ10 har 7 timmar, Midea MFS400 har timer via fjärrkontrollen, och Dreo har timerfunktion. Honeywell HT900E har ingen: den går tills du stiger upp och stänger av den. Är timern viktig för dig, kontrollera att den går att ställa i steg och inte bara som ett enda fast intervall.",
    },
    {
      heading: "Tornfläkt, golvfläkt eller bordsfläkt – räckvidd mot yta",
      body: "Tornfläkten är den smala kompromissen: den tar liten golvyta men fördelar luft på höjden genom hela rummet. Golvfläkten flyttar mest luft och passar större sovrum eller rum där luften står still, men den tar plats. Bordsfläkten svalkar den som sitter rakt framför den och nästan ingen annan – utmärkt vid skrivbordet, sällan tillräckligt för ett helt sovrum. Utgå från rummets storlek och var fläkten faktiskt ska stå, inte från vilken modell som ser prisvärdast ut.",
    },
    {
      heading: "Oscillering – jämn svalka utan att blåsa rakt på dig",
      body: "Oscillering betyder att fläkten vrider sig i sidled, oftast 90 grader, så att luften sveper över rummet i stället för att träffa samma punkt hela tiden. I sovrummet är det ofta skillnaden mellan behaglig svalka och att vakna med torr hals. Dreo och Midea FZ10 oscillerar; Honeywell HT900E gör det inte, den lutas bara manuellt. För Midea MFS400 och Xiaomi anger produktdatan ingen uppgift, så räkna inte med funktionen förrän du sett den i produktbeskrivningen.",
    },
    {
      heading: "Styrning från sängen – fjärrkontroll eller app",
      body: "Det låter som en lyxdetalj tills natten då du behöver sänka en hastighet och fläkten står tre meter bort. Fjärrkontroll ingår hos Dreo, Midea FZ10 och Midea MFS400. Xiaomi styrs i stället via app, vilket är smidigt om du redan har appen men ett extra steg om du inte har den. Honeywell HT900E har bara knappar på fläkten. Har du fjärrkontroll: bestäm en fast plats för den, den är liten och lätt att tappa bort mellan sängen och nattduksbordet.",
    },
    {
      heading: "Placering och luftväg – fönster, dörr och avstånd till sängen",
      body: "En fläkt kyler inte luften, den flyttar den. Störst effekt får du genom att skapa ett drag: ställ fläkten så att den drar in svalare luft från ett öppet fönster på kvällen, eller så att den skickar luften mot en öppen dörr. Ställ den inte direkt mot huvudkudden – ett par meters avstånd med oscillering på ger jämnare svalka. Står fläkten på ett hårt golv nära väggen kan ljudet dessutom studsa och upplevas starkare än det är.",
    },
  ],
  faq: [
    {
      question: "Hur tyst ska en sovrumsfläkt vara?",
      answer:
        "Sikta på 20–35 dB på lägsta läget. Där hamnar tystgående tornfläktar, och de flesta upplever det som ett jämnt bakgrundsbrus snarare än ett ljud man lyssnar på. En tornfläkt med nattläge klarar oftast den nivån. Billiga bordsfläktar ligger däremot ofta över 50 dB även på lägsta läget – Honeywell HT900E i den här jämförelsen ligger enligt köparna runt 56 dB, vilket är för mycket bredvid sängen.",
    },
    {
      question: "Tornfläkt eller golvfläkt i sovrummet?",
      answer:
        "Tornfläkten är det säkra sovrumsvalet: smal, tyst och lätt att placera i ett hörn. Golvfläkten flyttar mer luft och är bättre i ett större sovrum eller ett rum där luften står still, men den tar mer golvyta och syns mer. Har du ett normalstort sovrum, välj torn. Har du ett stort rum eller vill ha kännbart drag på flera meter, välj golv. Hela avvägningen finns i vår jämförelse mellan golvfläkt och tornfläkt.",
    },
    {
      question: "Fläkt eller luftkylare – vad svalkar sovrummet bäst?",
      answer:
        "En fläkt, i de allra flesta sovrum. En luftkylare med vattentank ger en svalare bris precis framför sig, men den sänker inte temperaturen i rummet och tillför fukt – i ett redan varmt och fuktigt sovrum kan det upplevas sämre, inte bättre. Fläkten skapar i stället luftrörelse som gör att kroppen kyls av effektivare. Vi går igenom skillnaden i detalj i jämförelsen mellan luftkylare och fläkt.",
    },
    {
      question: "Finns det helt ljudlösa fläktar?",
      answer:
        "Nej. En fläkt som flyttar luft skapar alltid ljud – ”tystgående” betyder att ljudet är jämnt och lågfrekvent, inte att det är borta. Det du kan påverka är hur mycket: en DC-motor är tystare än en AC-motor vid samma luftflöde, och det lägsta läget är alltid tystast. Lägsta uppgivna nivån i den här jämförelsen är cirka 20 dB för Dreo Cruiser Pro, och det är ungefär så tyst en fläkt blir i praktiken.",
    },
    {
      question: "Vad betyder nattläge på en fläkt?",
      answer:
        "Nattläget gör två saker samtidigt: det sänker hastigheten stegvis under natten, så att det inte blir för kallt mot morgonen, och det dämpar eller släcker displayen så att ingenting lyser i mörkret. Midea FZ10 har ett sådant läge, och Dreo Cruiser Pro har en display som slocknar helt. Funktionen låter liten, men den är ofta skillnaden mellan en fläkt som får stå på hela natten och en som stängs av efter en timme.",
    },
    {
      question: "Räcker en bordsfläkt för sovrummet?",
      answer:
        "För en person som sover nära fläkten kan den räcka. För ett helt sovrum gör den det sällan: räckvidden är kort och luften fördelas inte i rummet. Det stora problemet är dock ljudet. Honeywell HT900E är ett bra exempel – kraftfull, prisvärd och bästsäljare, men runt 56 dB enligt köparna. Den fungerar utmärkt vid skrivbordet på dagen och sämre bredvid sängen på natten.",
    },
    {
      question: "Varför låter fläkten mer på högsta läget?",
      answer:
        "Ljudet följer luftflödet. Ju snabbare rotorn går, desto mer luft flyttas och desto mer turbulens skapas – och turbulensen är det du hör. Därför låter i princip varje fläkt betydligt mer på högsta läget än på det lägsta. Slutsatsen för sovrummet är enkel: välj inte den fläkt som är tystast på högsta läget, välj den som är tyst nog på läge 1–3, för det är där den kommer att stå medan du sover.",
    },
    {
      question: "Hur mycket el drar en fläkt på natten?",
      answer:
        "En tornfläkt eller golvfläkt för hemmabruk ligger typiskt på några tiotal watt – långt under vad en luftkonditionering drar. En modell med DC-motor, som Midea MFS400, drar mindre än en jämförbar AC-motor vid samma luftflöde. På lägsta läget drar alla modeller minst. Vill du hålla förbrukningen nere: kör på ett lågt läge och använd timern, så att fläkten stänger av sig efter att du somnat i stället för att gå hela natten.",
    },
    {
      question: "Kan jag ställa tornfläkten nära sängen?",
      answer:
        "Det går, men de flesta trivs bättre med ett par meters avstånd och oscilleringen påslagen. Då sveper luften över sängen i stället för att blåsa konstant mot samma punkt, vilket annars gör halsen och ögonen torra mot morgonen. Tänk också på luftvägen: ställ fläkten så att den drar in svalare luft från fönstret eller skickar luften mot en öppen dörr, och undvik att ha den inklämd mot en vägg där ljudet studsar.",
    },
    {
      question: "Är Dreo Cruiser Pro värd priset jämfört med Midea FZ10?",
      answer:
        "Det du betalar extra för är tystnaden och kontrollen: cirka 20 dB mot cirka 38 dB på lägsta läget, 9 hastigheter mot 3, och en display som slocknar helt i stället för att lysa. Sover du lätt är det precis den skillnaden som avgör. Klarar du ett jämnt brus på låg fart ger Midea FZ10 dig nattläge, timer och fjärrkontroll för mindre. Se aktuellt pris på Amazon innan du bestämmer dig – prisbilden ändras över tid.",
    },
  ],
  related: [
    {
      href: "/halsa/tornflakt-eller-bordsflakt",
      label: "Jämför",
      text: "Tornfläkt eller bordsfläkt – vilken passar rummet?",
    },
    {
      href: "/halsa/golvflakt-eller-tornflakt",
      label: "Jämför",
      text: "Golvfläkt eller tornfläkt – luftflöde mot golvyta.",
    },
    {
      href: "/halsa/luftkylare-eller-flakt",
      label: "Jämför",
      text: "Luftkylare eller fläkt – vad svalkar sovrummet?",
    },
    {
      href: "/halsa/handflakt-eller-bordsflakt",
      label: "Jämför",
      text: "Handfläkt eller bordsfläkt – för skrivbordet och resan.",
    },
    {
      href: "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e",
      label: "Jämför",
      text: "Dreo Cruiser Pro eller Honeywell HT900E?",
    },
    {
      href: "/guider/flakt-dyr-vs-billig",
      label: "Guide",
      text: "Fläkt: dyr vs billig – värt det?",
    },
    {
      href: "/halsa/flakt",
      label: "Hub",
      text: "Alla Elins fläktval samlade på ett ställe.",
    },
    {
      href: "/halsa/handflakt",
      label: "Resa",
      text: "Jisulife handfläkt – för resan och kontoret.",
    },
  ],
};
