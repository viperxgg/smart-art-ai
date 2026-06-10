import "server-only";

import { createClient } from "@supabase/supabase-js";

type ProductReviewRow = {
  id: string;
  product_slug: string;
  rating: number;
  title: string;
  body: string;
  public_alias: string;
  email: string | null;
  used_product_confirmation: boolean;
  ip_hash: string | null;
  status: "pending" | "approved" | "rejected";
  moderation_note: string | null;
  created_at: string;
  approved_at: string | null;
  updated_at: string;
};

type ApprovedProductReviewRow = Pick<
  ProductReviewRow,
  | "id"
  | "product_slug"
  | "rating"
  | "title"
  | "body"
  | "public_alias"
  | "created_at"
  | "approved_at"
>;

export type ReviewsDatabase = {
  public: {
    Tables: {
      product_reviews: {
        Row: ProductReviewRow;
        Insert: Omit<
          ProductReviewRow,
          | "id"
          | "status"
          | "moderation_note"
          | "created_at"
          | "approved_at"
          | "updated_at"
        > & {
          status?: ProductReviewRow["status"];
          moderation_note?: string | null;
          approved_at?: string | null;
        };
        Update: Partial<ProductReviewRow>;
        Relationships: [];
      };
    };
    Views: {
      approved_product_reviews: {
        Row: ApprovedProductReviewRow;
        Insert: never;
        Update: never;
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: {
      review_status: ProductReviewRow["status"];
    };
    CompositeTypes: Record<string, never>;
  };
};

export function isSupabaseServerConfigured() {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function createSupabaseServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase review storage is not configured.");
  }

  return createClient<ReviewsDatabase>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
