import "server-only";

import { createClient } from "@supabase/supabase-js";

import { isSupabaseServerConfigured } from "@/lib/supabaseServer";

export type ElinLogEntry = {
  question: string;
  category: string | null;
  productSlugs: string[];
  answered: boolean;
  focusSlug: string | null;
  variant?: "A" | "B";
};

// Fire-and-forget analytics of Elin questions → feeds the content-gap loop
// (which questions get asked, which products get surfaced, what went unanswered).
// Never throws and never blocks the user response: no-ops silently when Supabase
// isn't configured or the `elin_logs` table is missing.
export async function logElinInteraction(entry: ElinLogEntry): Promise<void> {
  if (!isSupabaseServerConfigured()) {
    return;
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL as string;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

    const client = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const payload = {
      question: entry.question.slice(0, 500),
      category: entry.category,
      product_slugs: entry.productSlugs,
      answered: entry.answered,
      focus_slug: entry.focusSlug,
    };

    const { error } = await client.from("elin_logs").insert({
      ...payload,
      ...(entry.variant ? { variant: entry.variant } : {}),
    });

    if (error && entry.variant && /variant|column|schema cache/i.test(error.message)) {
      await client.from("elin_logs").insert(payload);
    }
  } catch {
    // Logging must never affect the user experience — swallow all errors.
  }
}
