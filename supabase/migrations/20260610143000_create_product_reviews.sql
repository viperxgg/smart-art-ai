create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'review_status') then
    create type public.review_status as enum ('pending', 'approved', 'rejected');
  end if;
end
$$;

create table if not exists public.product_reviews (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  rating smallint not null check (rating between 1 and 5),
  title text not null check (char_length(title) between 3 and 90),
  body text not null check (char_length(body) between 20 and 1200),
  public_alias text not null check (char_length(public_alias) between 2 and 60),
  email text,
  used_product_confirmation boolean not null default false,
  ip_hash text,
  status public.review_status not null default 'pending',
  moderation_note text,
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  updated_at timestamptz not null default now()
);

create index if not exists product_reviews_status_product_idx
  on public.product_reviews (product_slug, status, created_at desc);

create index if not exists product_reviews_ip_hash_created_idx
  on public.product_reviews (ip_hash, created_at desc)
  where ip_hash is not null;

create or replace function public.set_product_reviews_timestamps()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();

  if new.status = 'approved' and new.approved_at is null then
    new.approved_at = now();
  end if;

  if new.status <> 'approved' then
    new.approved_at = null;
  end if;

  return new;
end;
$$;

drop trigger if exists set_product_reviews_timestamps on public.product_reviews;

create trigger set_product_reviews_timestamps
before update on public.product_reviews
for each row
execute function public.set_product_reviews_timestamps();

alter table public.product_reviews enable row level security;

-- Deliberately no anon/authenticated policies: the base table stores email.
-- All reads/writes must go through server-side code using SUPABASE_SERVICE_ROLE_KEY.
revoke all on table public.product_reviews from anon, authenticated;

create or replace view public.approved_product_reviews
with (security_invoker = true)
as
select
  id,
  product_slug,
  rating,
  title,
  body,
  public_alias,
  created_at,
  approved_at
from public.product_reviews
where status = 'approved';

revoke all on table public.approved_product_reviews from anon, authenticated;

notify pgrst, 'reload schema';
