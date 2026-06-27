import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

import { getElinKnowledge } from "@/lib/elin-knowledge";
import { getProductBySlug, getProductPageHref, type ProductCategorySlug } from "@/lib/products";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ElinFocus = {
  slug: string;
  title: string;
  category?: ProductCategorySlug;
};

type ElinModelResponse = {
  svar: string;
  produkter: string[];
};

const maxMessages = 6;
const maxUserInputLength = 500;
const model = "claude-sonnet-4-6";
const categories = new Set<ProductCategorySlug>(["skonhet", "traning", "halsa"]);
const jsonFormatReminder =
  'Returnera endast ett giltigt JSON-objekt i formatet {"svar":"<markdown på svenska>","produkter":["<slug>",...]}. För rena kunskaps- och rådgivningsfrågor ska "produkter" vara en tom lista. Första tecknet ska vara { och sista tecknet ska vara }. Använd aldrig markdown-kodblock, skriv inte ```json och skriv ingen text före eller efter JSON.';

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string"
  );
}

function sanitizeMessages(payload: unknown): ChatMessage[] | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const messages = (payload as Record<string, unknown>).messages;
  if (!Array.isArray(messages)) {
    return null;
  }

  const sanitized = messages
    .filter(isChatMessage)
    .slice(-maxMessages)
    .map((message) => ({
      role: message.role,
      content:
        message.role === "user"
          ? message.content.trim().slice(0, maxUserInputLength)
          : message.content.trim().slice(0, 1200),
    }))
    .filter((message) => message.content.length > 0);

  return sanitized.length > 0 ? sanitized : null;
}

function withJsonFormatReminder(messages: ChatMessage[]): ChatMessage[] {
  const lastIndex = messages.length - 1;
  const lastMessage = messages[lastIndex];

  if (lastMessage?.role === "user") {
    return messages.map((message, index) =>
      index === lastIndex
        ? { ...message, content: `${message.content}\n\n${jsonFormatReminder}` }
        : message,
    );
  }

  return [...messages, { role: "user", content: jsonFormatReminder }];
}

function sanitizeFocus(payload: unknown): ElinFocus | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const focus = (payload as Record<string, unknown>).focus;
  if (!focus || typeof focus !== "object") {
    return null;
  }

  const data = focus as Record<string, unknown>;
  const slug = typeof data.slug === "string" ? data.slug.trim().slice(0, 120) : "";
  const title = typeof data.title === "string" ? data.title.trim().slice(0, 180) : "";
  const category = categories.has(data.category as ProductCategorySlug)
    ? (data.category as ProductCategorySlug)
    : undefined;

  if (!slug || !title) {
    return null;
  }

  return {
    slug,
    title,
    ...(category ? { category } : {}),
  };
}

function buildSystemPrompt(productJson: string, focus: ElinFocus | null) {
  const focusLine = focus
    ? `Användaren tittar just nu på: ${focus.title} (${focus.slug}). Utgå från den, men var ärlig – passar den inte, säg det och föreslå ett bättre/billigare alternativ.\n\n`
    : "";

  return `Du är Elin – en varm, kunnig skönhets- och produktexpert för smartartai.se (Elins val). Du täcker skönhet/hudvård, hår, träning och hälsa. Du pratar svenska som en påläst väninna som kan sina grejer. Din lojalitet är till personens behov och plånbok – aldrig till att sälja.

Vad du gör:
- Du LÄR ut: förklarar ingredienser och funktioner, bygger rutiner, reder ut myter, ger konkreta råd – kort och begripligt.
- Du svarar på riktiga frågor även utan att nämna en produkt. En produkt tipsar du om BARA när den verkligen hjälper – och då helst en prisvärd. Du vågar säga "hoppa över", "du behöver inte mer", "spara pengarna".
- Du ställer gärna EN kort följdfråga (hudtyp/behov/vad de redan har) för bättre råd, och kan erbjuda att bygga en enkel rutin.
- Du är ärlig om vad som är väl belagt och vad som är osäkert. Du hittar ALDRIG på fakta. Är du osäker – säg det.

VIKTIGT – din gräns (du är expert, inte läkare):
- Du ger kosmetiska, funktionella och allmänna råd. Du ställer ALDRIG diagnos och behandlar ALDRIG sjukdom eller skada.
- Vid tecken på något medicinskt – svår eller plötslig akne, eksem, utslag, klåda, sår, smärta, svullnad, något som sprider sig, en allergisk reaktion eller en träningsskada – säg det ärligt och hänvisa till läkare, apotek, hudterapeut eller fysioterapeut. Gissa aldrig om sånt.

Ton & regler:
- Varm, lugn, rakt på sak. Som en kunnig kompis, inte en säljare. Korrekt svenska (å ä ö). Var koncis – hellre tydlig än lång.
- Skönhet: endast kosmetiska formuleringar (fukt, lyster, dewy, slät, jämnare hudton). Aldrig medicinska påståenden (läker/botar/behandlar), aldrig SPF/solskyddslöften, aldrig anti-age/"tar bort rynkor".
- Träning/Hälsa: funktion, komfort, avkoppling. Aldrig medicinska eller hälsopåståenden.
- Inga fasta priser – tala relativt ("prisvärd", "ett billigare alternativ", "se aktuellt pris på Amazon").
- Du har inte testat produkterna själv – säg "jag har gått igenom/jämfört", aldrig "jag har testat".

Sortiment & svarformat:
- Du får vårt sortiment nedan. Tipsa BARA ur det och länka via pageHref – och bara när en produkt verkligen hjälper.
- För rena kunskaps- och rådgivningsfrågor är "produkter" en TOM lista. Tvinga aldrig in en produkt.
- Svara ENBART med giltig JSON: {"svar":"<markdown på svenska>","produkter":["<slug>", ...]} (max 3 slugs).

PRODUKTER:
${focusLine}${productJson}`;
}

function getAssistantText(response: Anthropic.Message) {
  return response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

function parseElinResponse(rawText: string): ElinModelResponse {
  try {
    const parsed = JSON.parse(rawText) as Partial<ElinModelResponse>;

    return {
      svar: typeof parsed.svar === "string" ? parsed.svar : rawText,
      produkter: Array.isArray(parsed.produkter)
        ? parsed.produkter.filter((slug): slug is string => typeof slug === "string")
        : [],
    };
  } catch {
    return {
      svar: rawText,
      produkter: [],
    };
  }
}

function toProductCard(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) {
    return null;
  }

  return {
    slug: product.slug,
    title: product.title,
    brand: product.brand,
    pageHref: getProductPageHref(product),
    image: product.image,
  };
}

type ProductCard = NonNullable<ReturnType<typeof toProductCard>>;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { svar: "Jag kunde inte läsa frågan. Prova att skicka igen.", produkter: [] },
      { status: 400 },
    );
  }

  const messages = sanitizeMessages(payload);
  if (!messages) {
    return NextResponse.json(
      { svar: "Skriv en kort fråga om produkten eller behovet, så hjälper jag dig.", produkter: [] },
      { status: 400 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { svar: "Elin är inte konfigurerad ännu. Lägg till ANTHROPIC_API_KEY på servern.", produkter: [] },
      { status: 500 },
    );
  }

  const focus = sanitizeFocus(payload);
  const knowledge = getElinKnowledge(focus?.category ? { category: focus.category } : undefined);
  const allowedSlugs = new Set(knowledge.map((product) => product.slug));
  const anthropic = new Anthropic({ apiKey });

  try {
    const response = await anthropic.messages.create({
      model,
      max_tokens: 1500,
      temperature: 0,
      system: buildSystemPrompt(JSON.stringify(knowledge), focus),
      messages: withJsonFormatReminder(messages),
    });

    const rawText = getAssistantText(response);
    const parsed = parseElinResponse(rawText);
    const productCards = parsed.produkter
      .filter((slug) => allowedSlugs.has(slug))
      .slice(0, 3)
      .map(toProductCard)
      .filter((product): product is ProductCard => Boolean(product));

    return NextResponse.json({
      svar: parsed.svar,
      produkter: productCards,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Anthropic error";
    const status =
      error && typeof error === "object" && "status" in error
        ? (error as { status?: unknown }).status
        : undefined;
    console.error("Elin Anthropic request failed", { status, message });

    return NextResponse.json(
      {
        svar: "Jag kunde inte jämföra produkterna just nu. Prova igen om en stund.",
        produkter: [],
      },
      { status: 500 },
    );
  }
}
