import "server-only";

import { createHash } from "crypto";

import { getProductBySlug } from "@/lib/products";
import {
  createSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabaseServer";

export type ApprovedProductReview = {
  id: string;
  productSlug: string;
  rating: number;
  title: string;
  body: string;
  publicAlias: string;
  createdAt: string;
  approvedAt: string | null;
};

export type ReviewAggregate = {
  count: number;
  average: number;
};

export type ReviewSubmissionInput = {
  productSlug: string;
  rating: number;
  title: string;
  body: string;
  publicAlias: string;
  email?: string;
  usedProductConfirmation: boolean;
  gdprConsent: boolean;
  honeypot?: string;
  ipHash?: string | null;
};

type ValidationResult =
  | { ok: true; data: ReviewSubmissionInput }
  | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function cleanBody(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function hashIpAddress(ipAddress: string | null) {
  if (!ipAddress) {
    return null;
  }

  const salt =
    process.env.REVIEW_IP_HASH_SALT ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    "smartartai-review-salt";

  return createHash("sha256").update(`${salt}:${ipAddress}`).digest("hex");
}

export function validateReviewSubmission(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "Ogiltig förfrågan." };
  }

  const data = payload as Record<string, unknown>;
  const productSlug = cleanText(data.productSlug);
  const product = getProductBySlug(productSlug);

  if (!product) {
    return { ok: false, message: "Produkten finns inte." };
  }

  const rating = Number(data.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { ok: false, message: "Välj ett betyg mellan 1 och 5." };
  }

  const title = cleanText(data.title);
  if (title.length < 3 || title.length > 90) {
    return { ok: false, message: "Rubriken behöver vara 3-90 tecken." };
  }

  const body = cleanBody(data.body);
  if (body.length < 20 || body.length > 1200) {
    return { ok: false, message: "Texten behöver vara 20-1200 tecken." };
  }

  const publicAlias = cleanText(data.publicAlias);
  if (publicAlias.length < 2 || publicAlias.length > 60) {
    return { ok: false, message: "Alias behöver vara 2-60 tecken." };
  }

  const email = cleanText(data.email).toLowerCase();
  if (email && (email.length > 254 || !emailPattern.test(email))) {
    return { ok: false, message: "Ange en giltig e-postadress eller lämna tomt." };
  }

  if (data.usedProductConfirmation !== true) {
    return {
      ok: false,
      message: "Bekräfta att recensionen bygger på din egen erfarenhet.",
    };
  }

  if (data.gdprConsent !== true) {
    return {
      ok: false,
      message: "Godkänn hur vi hanterar uppgifterna för att skicka recensionen.",
    };
  }

  const honeypot = cleanText(data.honeypot);
  if (honeypot) {
    return { ok: false, message: "Recensionen kunde inte skickas." };
  }

  return {
    ok: true,
    data: {
      productSlug,
      rating,
      title,
      body,
      publicAlias,
      email: email || undefined,
      usedProductConfirmation: true,
      gdprConsent: true,
      honeypot,
      ipHash:
        typeof data.ipHash === "string" && data.ipHash ? data.ipHash : null,
    },
  };
}

export async function countRecentSubmissionsByIp(ipHash: string | null) {
  if (!ipHash || !isSupabaseServerConfigured()) {
    return 0;
  }

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const supabase = createSupabaseServerClient();
  const { count, error } = await supabase
    .from("product_reviews")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if (error) {
    throw error;
  }

  return count ?? 0;
}

export async function submitProductReview(input: ReviewSubmissionInput) {
  if (!isSupabaseServerConfigured()) {
    throw new Error("Supabase review storage is not configured.");
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("product_reviews").insert({
    product_slug: input.productSlug,
    rating: input.rating,
    title: input.title,
    body: input.body,
    public_alias: input.publicAlias,
    email: input.email ?? null,
    used_product_confirmation: input.usedProductConfirmation,
    ip_hash: input.ipHash ?? null,
    status: "pending",
  });

  if (error) {
    throw error;
  }
}

export async function getApprovedReviews(productSlug: string) {
  if (!isSupabaseServerConfigured()) {
    return [];
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("approved_product_reviews")
    .select("*")
    .eq("product_slug", productSlug)
    .order("approved_at", { ascending: false })
    .limit(12);

  if (error) {
    return [];
  }

  return (data ?? []).map<ApprovedProductReview>((review) => ({
    id: review.id,
    productSlug: review.product_slug,
    rating: review.rating,
    title: review.title,
    body: review.body,
    publicAlias: review.public_alias,
    createdAt: review.created_at,
    approvedAt: review.approved_at,
  }));
}

export async function getApprovedReviewAggregate(productSlug: string) {
  if (!isSupabaseServerConfigured()) {
    return null;
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("approved_product_reviews")
    .select("rating")
    .eq("product_slug", productSlug);

  if (error) {
    return null;
  }

  const ratings = data ?? [];
  if (ratings.length < 3) {
    return null;
  }

  const total = ratings.reduce((sum, review) => sum + review.rating, 0);

  return {
    count: ratings.length,
    average: Number((total / ratings.length).toFixed(1)),
  } satisfies ReviewAggregate;
}
