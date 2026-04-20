export interface BlogPost {
  slug: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  image?: string;
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string;
      metaTitle: string;
      metaDescription: string;
      tags: string[];
    };
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-sweden",
    date: "2024-04-16",
    author: "SmartArt Team",
    category: "Automation",
    readingTime: "5 min",
    translations: {
      sv: {
        title: "Hur AI-automatisering hjälper småföretag i Sverige",
        excerpt:
          "Upptäck hur svenska småföretag kan använda AI för att spara tid, minska kostnader och öka sin konkurrenskraft.",
        metaTitle: "AI-automatisering för svenska småföretag | SmartArt AI",
        metaDescription:
          "Lär dig hur AI kan transformera ditt småföretag i Sverige. Vi går igenom konkreta exempel från restauranger till bokningssystem.",
        tags: ["AI", "Automatisering", "Sverige", "Innovation"],
        content: `
## Vad är AI-automatisering egentligen?
AI-automatisering handlar om att använda intelligent programvara för att hantera uppgifter som tidigare krävde mänsklig inblandning. Det handlar inte om att ersätta människor, utan om att befria dem från repetitivt och tråkigt administrativt arbete.

I förlängningen handlar det om att låta algoritmer sköta datainmatning, sortering och enklare kundkommunikation så att ditt team kan fokusera på det som faktiskt skapar värde: kreativitet och mellanmänskliga relationer.

[AUTOMATION_VIDEO]

## Varför behöver svenska företag det nu?
Det svenska affärslandskapet är känt för höga arbetskostnader och en hög grad av digitalisering. Genom att implementera AI kan småföretag uppnå fördelar som tidigare bara var tillgängliga för stora koncerner:

- **Sänka kostnader:** Automatisera kundtjänst och administration minskar behovet av övertid eller extra personal för enkla uppgifter.
- **Skala snabbare:** Hantera en plötslig ökning av förfrågningar eller order utan att systemet havererar.
- **Minska fel marginalerna:** Eliminera den mänskliga faktorn i tröttsam datahantering där fel annars lätt uppstår.

## Verkliga exempel på transformation
Här är några områden där vi ser störst effekt just nu på den svenska marknaden:

1. **Restauranger & Kaféer:** Digitala QR-menyer som automatiskt anpassar sig efter lagerstatus och föreslår relevanta tillbehör baserat på gästens val.
2. **Bokning & Tidsbokning:** AI-assistenter som hanterar bokningar via WhatsApp och SMS dygnet runt, året om.
3. **E-handel & Logistik:** Automatiserad spårning och lagerhantering som kommunicerar direkt med leverantörer när lagret börjar sina.

## Hur du kommer igång utan att det blir krångligt
Många tror att AI är ett jätteprojekt som tar månader att implementera. Så behöver det inte vara. På SmartArt AI förespråkar vi en stegvis strategi:

1. **Identifiera flaskhalsen:** Var lägger ni mest tid på tråkiga uppgifter?
2. **Bygg en brygga:** Vi skapar en koppling mellan dina nuvarande verktyg och en intelligent motor.
3. **Mät & Skala:** Se resultaten direkt och utöka systemet efter behov.

Det är här SmartArt AI kommer in i bilden – vi hjälper dig att bygga bron mellan manuellt arbete och framtidens automatisering.
        `,
      },
      en: {
        title: "How AI Automation Helps Small Businesses in Sweden",
        excerpt:
          "Discover how Swedish small businesses can use AI to save time, reduce costs, and increase their competitiveness.",
        metaTitle: "AI Automation for Swedish Small Businesses | SmartArt AI",
        metaDescription:
          "Learn how AI can transform your small business in Sweden. We explore concrete examples from restaurants to booking systems.",
        tags: ["AI", "Automation", "Sweden", "Innovation"],
        content: `
## What does AI automation actually mean?
AI automation involves using intelligent software to handle tasks that previously required human intervention. It's not about replacing people, but about freeing them from repetitive and tedious administrative work.

By letting algorithms handle data entry, sorting, and simple customer communication, your team can focus on what actually creates value: creativity and interpersonal relationships.

[AUTOMATION_VIDEO]

## Why do Swedish businesses need it now?
The Swedish business landscape is known for high labor costs and a high degree of digitalization. By implementing AI, small businesses can achieve benefits that were previously only available to large corporations:

- **Reduce costs:** Automating customer service and administration reduces the need for overtime or extra staff for simple tasks.
- **Scale faster:** Handle a sudden increase in inquiries or orders without the system failing.
- **Reduce margins for error:** Eliminate the human factor in tiresome data handling where errors otherwise easily occur.

## Real examples of transformation
Here are some areas where we see the greatest impact right now in the Swedish market:

1. **Restaurants & Cafes:** Digital QR menus that automatically adapt based on stock status and suggest relevant sides based on the guest's choices.
2. **Booking & Appointments:** AI assistants that handle bookings via WhatsApp and SMS 24/7, year-round.
3. **E-commerce & Logistics:** Automated tracking and inventory management that communicates directly with suppliers when stock runs low.

## How to get started without complexity
Many believe that AI is a giant project that takes months to implement. It doesn't have to be. At SmartArt AI, we advocate for a step-by-step strategy:

1. **Identify the bottleneck:** Where do you spend most of your time on boring tasks?
2. **Build a bridge:** We create a connection between your current tools and an intelligent engine.
3. **Measure & Scale:** See the results immediately and expand the system as needed.

That's where SmartArt AI comes into play – we help you build the bridge between manual work and the automation of the future.
        `,
      },
    },
  },
  {
    slug: "future-of-digital-work",
    date: "2024-04-18",
    author: "Zarah Lind",
    category: "Future Tech",
    readingTime: "4 min",
    translations: {
      sv: {
        title: "Framtidens digitala arbetsplats: Bortom skärmarna",
        excerpt:
          "Hur ser arbetslivet ut när AI blivit en naturlig del av vår vardag? Vi utforskar de kommande trenderna.",
        metaTitle: "Framtidens digitala arbetsplats 2024 | SmartArt AI",
        metaDescription:
          "Utforska trenderna inom AI och digitalt arbete. Lär dig hur din organisation kan förbereda sig för framtiden.",
        tags: ["Framtid", "Digitalisering", "AI Trender"],
        content: `
## Visionen om den intelligenta arbetsplatsen
Vi är på väg mot en tid där tekniken inte bara är ett verktyg, utan en medarbetare. Framtidens digitala arbetsplats handlar mindre om vilka program vi använder och mer om hur sömlöst informationen flödar.

## Hyper-automatisering
Det räcker inte längre att automatisera enstaka uppgifter. Vi rör oss mot hyper-automatisering, där hela affärsprocesser sköts av autonoma agenter som samarbetar.

- **Beslutsstöd:** AI som analyserar data i realtid och ger rekommendationer innan problem uppstår.
- **Personliga assistenter:** Varje anställd har en skräddarsydd AI som känner till deras arbetsvanor och prioriterar deras schema.

## Det mänskliga värdet ökar
När allt som kan automatiseras blir automatiserat, ökar värdet på de genuint mänskliga egenskaperna. Empati, etiskt omdöme och visionärt tänkande blir de viktigaste kompetenserna på arbetsmarknaden.
        `,
      },
      en: {
        title: "The Future of Digital Work: Beyond the Screens",
        excerpt:
          "What does work life look like when AI has become a natural part of our daily lives? We explore the upcoming trends.",
        metaTitle: "Future of Digital Work 2024 | SmartArt AI",
        metaDescription:
          "Explore trends in AI and digital work. Learn how your organization can prepare for the future.",
        tags: ["Future", "Digitalization", "AI Trends"],
        content: `
## The vision of the intelligent workplace
We are moving towards a time where technology is not just a tool, but a co-worker. The future digital workplace is less about which programs we use and more about how seamlessly information flows.

## Hyper-automation
It's no longer enough to automate individual tasks. We are moving towards hyper-automation, where entire business processes are handled by collaborating autonomous agents.

- **Decision support:** AI that analyzes data in real-time and provides recommendations before problems arise.
- **Personal assistants:** Every employee has a tailored AI that knows their work habits and prioritizes their schedule.

## Human value increases
When everything that can be automated becomes automated, the value of genuinely human qualities increases. Empathy, ethical judgment, and visionary thinking become the most important competencies in the labor market.
        `,
      },
    },
  },
  {
    slug: "scandinavian-digital-menu",
    date: "2024-04-18",
    author: "SmartArt Team",
    category: "Case Study",
    readingTime: "6 min",
    translations: {
      sv: {
        title:
          "Digital meny för restauranger: QR-meny, live-dashboard och KDS i ett enkelt flöde",
        excerpt:
          "En säljdriven översikt av hur en modern QR-meny förenklar beställning, service och köksflöde för restauranger i Sverige.",
        metaTitle: "Digital meny för restaurang med QR, dashboard och KDS",
        metaDescription:
          "Se hur en digital QR-meny för restaurang gör beställning, service och köksflöde enklare. Testa live-menyn, admin och kökssystemet.",
        tags: [
          "Digital Menu",
          "QR Menu",
          "Restaurant Operations",
          "Kitchen Display System",
        ],
        content: `
## Digital meny för modern restaurangservice
Scandinavian Digital Menu samlar QR-meny, serviceöverblick och köksflöde i ett tydligt system för restauranger som vill arbeta snabbare och mer strukturerat.

[LIVE_DEMO]

## Redo att testa själv?
Öppna live-menyn, se dashboarden och boka en demo för er restaurang.

👉 **Boka din demo idag**
        `,
      },
      en: {
        title:
          "Digital menu for restaurants: QR menu, live dashboard, and kitchen flow in one system",
        excerpt:
          "A conversion-focused overview of how a modern QR menu simplifies ordering, service, and kitchen coordination.",
        metaTitle: "Digital menu for restaurants with QR, dashboard, and KDS",
        metaDescription:
          "See how a digital QR menu helps restaurants improve ordering, service, and kitchen flow. Try the live menu, admin, and kitchen system.",
        tags: [
          "Digital Menu",
          "QR Menu",
          "Restaurant Operations",
          "Kitchen Display System",
        ],
        content: `
## Digital menu for modern restaurant service
Scandinavian Digital Menu brings together QR ordering, service coordination, and kitchen flow in one clear system for modern restaurants.

[LIVE_DEMO]

## Ready to try it?
Open the live menu, review the dashboard, and book a demo for your restaurant.

👉 **Book your demo today**
        `,
      },
    },
  },
];

export async function getPosts(locale: string) {
  return blogPosts
    .map((post) => ({
      ...post,
      ...(post.translations[locale] || post.translations["sv"]),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string, locale: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  return {
    ...post,
    ...(post.translations[locale] || post.translations["sv"]),
  };
}

export async function getRelatedPosts(
  currentSlug: string,
  locale: string,
  limit = 2,
) {
  const allPosts = await getPosts(locale);
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
