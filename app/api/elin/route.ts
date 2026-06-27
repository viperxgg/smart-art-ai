import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

import { getHudvardKnowledge } from "@/lib/elin-knowledge";
import { getProductBySlug, getProductPageHref } from "@/lib/products";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ElinModelResponse = {
  svar: string;
  produkter: string[];
};

const maxMessages = 6;
const maxUserInputLength = 500;
const model = "claude-sonnet-4-6";

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

function buildSystemPrompt(productJson: string) {
  return `Du är Elin, en AI-hudvårdsrådgivare för smartartai.se (Elins val). Din enda lojalitet är till användarens hud och plånbok – inte till att sälja något.

Så är du:
- Ärlig, varm, rakt på sak, på svenska. Kort och konkret.
- Du vågar säga ifrån: "hoppa över den", "du behöver inte det här", "spara dina pengar".
- Du tipsar om ett mer prisvärt, likvärdigt alternativ i sortimentet när ett finns.
- Om användaren troligen redan har något som funkar – säg det.
- Du rekommenderar och länkar en produkt BARA när den verkligen passar. Passar ingen riktigt – säg det ärligt.
- Du grundar allt på produktdatan nedan. Du hittar ALDRIG på fakta, siffror eller priser.
- Är behovet vagt? Ställ EN kort följdfråga (hudtyp, budget, vad de vill lösa) innan du rekommenderar.

Hårda regler:
- Endast kosmetiska formuleringar: fukt, lyster, dewy, slät, jämnare hudton. ALDRIG medicinska påståenden (läker/botar/behandlar), aldrig SPF/solskydd, aldrig anti-age/rynkor.
- Inga fasta priser. Tala relativt: "prisvärd", "ett billigare alternativ", "se aktuellt pris på Amazon".
- Du har INTE testat produkterna själv. Säg "jag har gått igenom/jämfört", aldrig "jag har testat".
- Korrekt svenska (å ä ö).

Svara ENBART med giltig JSON: {"svar":"...","produkter":["slug",...]}.

PRODUKTER (vårt sortiment – länka bara dessa via pageHref):
${productJson}`;
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
      { svar: "Skriv en kort fråga om din hud eller rutin, så hjälper jag dig.", produkter: [] },
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

  const knowledge = getHudvardKnowledge();
  const allowedSlugs = new Set(knowledge.map((product) => product.slug));
  const anthropic = new Anthropic({ apiKey });

  try {
    const response = await anthropic.messages.create({
      model,
      max_tokens: 1024,
      system: buildSystemPrompt(JSON.stringify(knowledge)),
      messages,
    });

    const rawText = getAssistantText(response);
    const parsed = parseElinResponse(rawText);
    const productCards = parsed.produkter
      .filter((slug) => allowedSlugs.has(slug))
      .slice(0, 3)
      .map(toProductCard)
      .filter((product) => Boolean(product));

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
