create extension if not exists pgcrypto;

create table if not exists public.elin_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  context jsonb,
  consent_text text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists elin_subscribers_email_lower_idx
  on public.elin_subscribers (lower(email));

create index if not exists elin_subscribers_created_at_idx
  on public.elin_subscribers (created_at desc);

alter table public.elin_subscribers enable row level security;

-- No anon/authenticated policies: subscribers contain private email data.
-- Inserts are performed only by server-side code using SUPABASE_SERVICE_ROLE_KEY.
revoke all on table public.elin_subscribers from anon, authenticated;

notify pgrst, 'reload schema';
