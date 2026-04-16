export interface BlogPost {
  slug: string;
  date: string;
  author: string;
  category: string;
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string; // Markdown or HTML string
      metaTitle: string;
      metaDescription: string;
    };
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-sweden",
    date: "2024-04-16",
    author: "SmartArt Team",
    category: "Automation",
    translations: {
      sv: {
        title: "Hur AI-automatisering hjälper småföretag i Sverige",
        excerpt: "Upptäck hur svenska småföretag kan använda AI för att spara tid, minska kostnader och öka sin konkurrenskraft.",
        metaTitle: "AI-automatisering för svenska småföretag | SmartArt AI",
        metaDescription: "Lär dig hur AI kan transformera ditt småföretag i Sverige. Vi går igenom konkreta exempel från restauranger till bokningssystem.",
        content: `
## Vad är AI-automatisering?
AI-automatisering handlar om att använda intelligent programvara för att hantera uppgifter som tidigare krävde mänsklig inblandning. Det handlar inte om att ersätta människor, utan om att befria dem från repetitivt och tråkigt administrativt arbete.

## Varför behöver svenska företag det nu?
Det svenska affärslandskapet är känt för höga arbetskostnader och en hög grad av digitalisering. Genom att implementera AI kan småföretag:
- **Sänka kostnader:** Automatisera kundtjänst och administration.
- **Skala snabbare:** Hantera fler kunder utan att anställa mer personal direkt.
- **Minska fel:** Eliminera den mänskliga faktorn i datahantering.

## Verkliga exempel
1. **Restauranger:** Digitala QR-menyer som automatiskt föreslår tillbehör och hanterar beställningar direkt till köket.
2. **Bokningssystem:** AI-botar som bokar tider via WhatsApp eller webbplatsen dygnet runt.
3. **E-handel:** Automatiserad lagerhantering och kundsegmentering.

## Hur du kommer igång
Börja smått. Identifiera en process som tar tid varje dag men som inte kräver kreativt tänkande. Det är där SmartArt AI kommer in i bilden – vi hjälper dig att bygga bron mellan manuellt arbete och framtidens automatisering.
        `
      },
      en: {
        title: "How AI Automation Helps Small Businesses in Sweden",
        excerpt: "Discover how Swedish small businesses can use AI to save time, reduce costs, and increase their competitiveness.",
        metaTitle: "AI Automation for Swedish Small Businesses | SmartArt AI",
        metaDescription: "Learn how AI can transform your small business in Sweden. We explore concrete examples from restaurants to booking systems.",
        content: `
## What is AI Automation?
AI automation involves using intelligent software to handle tasks that previously required human intervention. It's not about replacing people, but about freeing them from repetitive and tedious administrative work.

## Why do Swedish businesses need it now?
The Swedish business landscape is known for high labor costs and a high degree of digitalization. By implementing AI, small businesses can:
- **Reduce costs:** Automate customer service and administration.
- **Scale faster:** Handle more customers without immediately hiring more staff.
- **Reduce errors:** Eliminate the human factor in data handling.

## Real Examples
1. **Restaurants:** Digital QR menus that automatically suggest sides and handle orders directly to the kitchen.
2. **Booking Systems:** AI bots that book appointments via WhatsApp or the website 24/7.
3. **E-commerce:** Automated inventory management and customer segmentation.

## How to Get Started
Start small. Identify a process that takes time every day but doesn't require creative thinking. That's where SmartArt AI comes into play – we help you build the bridge between manual work and the automation of the future.
        `
      }
    }
  }
];

export async function getPosts(locale: string) {
  return blogPosts.map(post => ({
    ...post,
    ...post.translations[locale] || post.translations['sv']
  }));
}

export async function getPostBySlug(slug: string, locale: string) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  return {
    ...post,
    ...post.translations[locale] || post.translations['sv']
  };
}
