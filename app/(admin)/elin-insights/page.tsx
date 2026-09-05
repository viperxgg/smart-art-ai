import { timingSafeEqual } from "crypto";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import {
  createSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabaseServer";
import { getProductBySlug } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Elin insights | Elins val",
  robots: {
    index: false,
    follow: false,
  },
};

type ElinLogRow = {
  id: string;
  question: string;
  category: string | null;
  product_slugs: string[];
  answered: boolean;
  focus_slug: string | null;
  created_at: string;
};

type QuestionAggregate = {
  question: string;
  count: number;
  latestAt: string;
};

type ProductAggregate = {
  slug: string;
  title: string;
  brand: string;
  count: number;
};

function getBasicAuthPassword(value: string) {
  try {
    const decoded = Buffer.from(value, "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    return separator >= 0 ? decoded.slice(separator + 1) : decoded;
  } catch {
    return "";
  }
}

function tokensMatch(candidate: string | null, expected: string) {
  if (!candidate) {
    return false;
  }

  const candidateBuffer = Buffer.from(candidate);
  const expectedBuffer = Buffer.from(expected);
  return (
    candidateBuffer.length === expectedBuffer.length &&
    timingSafeEqual(candidateBuffer, expectedBuffer)
  );
}

function isAuthorized(requestHeaders: { get(name: string): string | null }) {
  const token = process.env.ELIN_INSIGHTS_TOKEN;
  if (!token) {
    return false;
  }

  const headerToken = requestHeaders.get("x-elin-insights-token");
  if (tokensMatch(headerToken, token)) {
    return true;
  }

  const authorization = requestHeaders.get("authorization") ?? "";
  if (
    authorization.startsWith("Bearer ") &&
    tokensMatch(authorization.slice("Bearer ".length), token)
  ) {
    return true;
  }

  if (authorization.startsWith("Basic ")) {
    return tokensMatch(
      getBasicAuthPassword(authorization.slice("Basic ".length)),
      token,
    );
  }

  return false;
}

function normalizeQuestion(question: string) {
  return question
    .toLocaleLowerCase("sv-SE")
    .replace(/\s+/g, " ")
    .replace(/[?!.,;:]+$/g, "")
    .trim();
}

function aggregateQuestions(logs: ElinLogRow[]) {
  const grouped = new Map<string, QuestionAggregate>();

  for (const log of logs) {
    const key = normalizeQuestion(log.question);
    if (!key) {
      continue;
    }

    const current = grouped.get(key);
    if (!current) {
      grouped.set(key, {
        question: log.question.trim(),
        count: 1,
        latestAt: log.created_at,
      });
      continue;
    }

    current.count += 1;
    if (new Date(log.created_at) > new Date(current.latestAt)) {
      current.latestAt = log.created_at;
      current.question = log.question.trim();
    }
  }

  return [...grouped.values()]
    .sort((left, right) => right.count - left.count || right.latestAt.localeCompare(left.latestAt))
    .slice(0, 12);
}

function aggregateProducts(logs: ElinLogRow[]) {
  const counts = new Map<string, number>();

  for (const log of logs) {
    for (const slug of log.product_slugs ?? []) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map<ProductAggregate>(([slug, count]) => {
      const product = getProductBySlug(slug);
      return {
        slug,
        title: product?.title ?? slug,
        brand: product?.brand ?? "Okänd",
        count,
      };
    })
    .sort((left, right) => right.count - left.count || left.title.localeCompare(right.title))
    .slice(0, 12);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("sv-SE", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

async function getLogs() {
  if (!isSupabaseServerConfigured()) {
    return { logs: [] as ElinLogRow[], error: "Supabase är inte konfigurerat." };
  }

  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("elin_logs")
    .select("id, question, category, product_slugs, answered, focus_slug, created_at")
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(1000);

  if (error) {
    return { logs: [] as ElinLogRow[], error: error.message };
  }

  return { logs: (data ?? []) as ElinLogRow[], error: "" };
}

export default async function ElinInsightsPage() {
  const requestHeaders = await headers();
  if (!isAuthorized(requestHeaders)) {
    notFound();
  }

  const { logs, error } = await getLogs();
  const unanswered = logs
    .filter((log) => !log.answered || (log.product_slugs ?? []).length === 0)
    .slice(0, 16);
  const commonQuestions = aggregateQuestions(logs);
  const topProducts = aggregateProducts(logs);

  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#4B2838]">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <section className="rounded-[1.5rem] border border-[#F1D8DD] bg-white p-6 shadow-[0_28px_80px_rgba(75,40,56,0.10)]">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Intern vy
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-4xl leading-tight text-[#4B2838]">
                Elin insights
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f5a64]">
                Read-only sammanställning från `elin_logs`, senaste 30 dagarna.
              </p>
            </div>
            <div className="rounded-full bg-[#FFF1F3] px-4 py-2 text-sm font-black text-[#D8788D]">
              {logs.length} frågor
            </div>
          </div>
          {error ? (
            <p className="mt-4 rounded-[0.9rem] border border-[#F1D8DD] bg-[#FFF9F7] px-4 py-3 text-sm font-bold text-[#6f5a64]">
              {error}
            </p>
          ) : null}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[1.2rem] border border-[#F1D8DD] bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Vanligaste frågorna
            </p>
            <div className="mt-4 space-y-3">
              {commonQuestions.length ? (
                commonQuestions.map((item) => (
                  <div key={`${item.question}-${item.latestAt}`} className="rounded-[0.9rem] bg-[#FFF9F7] p-3">
                    <p className="text-sm font-bold leading-5">{item.question}</p>
                    <p className="mt-1 text-xs text-[#6f5a64]">
                      {item.count} st · senast {formatDate(item.latestAt)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[#6f5a64]">Ingen data ännu.</p>
              )}
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-[#F1D8DD] bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Content gaps
            </p>
            <div className="mt-4 space-y-3">
              {unanswered.length ? (
                unanswered.map((item) => (
                  <div key={item.id} className="rounded-[0.9rem] bg-[#FFF9F7] p-3">
                    <p className="text-sm font-bold leading-5">{item.question}</p>
                    <p className="mt-1 text-xs text-[#6f5a64]">
                      {item.category ?? "okänd kategori"} · {formatDate(item.created_at)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[#6f5a64]">Inga obesvarade frågor i urvalet.</p>
              )}
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-[#F1D8DD] bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Mest rekommenderade
            </p>
            <div className="mt-4 space-y-3">
              {topProducts.length ? (
                topProducts.map((item) => (
                  <div key={item.slug} className="rounded-[0.9rem] bg-[#FFF9F7] p-3">
                    <p className="text-sm font-bold leading-5">{item.title}</p>
                    <p className="mt-1 text-xs text-[#6f5a64]">
                      {item.brand} · {item.count} rekommendationer
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[#6f5a64]">Inga produktrekommendationer ännu.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
