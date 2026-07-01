-- Elin chat analytics (content-gap loop).
-- Run once in the Supabase SQL editor. Server writes with the service-role key
-- (bypasses RLS); no public/anon access is granted.

create table if not exists public.elin_logs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  category text,
  product_slugs text[] not null default '{}',
  answered boolean not null default false,
  focus_slug text,
  created_at timestamptz not null default now()
);

create index if not exists elin_logs_created_at_idx on public.elin_logs (created_at desc);
create index if not exists elin_logs_category_idx on public.elin_logs (category);

alter table public.elin_logs enable row level security;
-- No policies = no anon/public access. Only the service-role key can read/write.
