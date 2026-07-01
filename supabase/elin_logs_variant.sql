-- Elin A/B copy variant logging.
-- Run manually in the Supabase SQL editor after reviewing.

alter table public.elin_logs
  add column if not exists variant text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'elin_logs_variant_check'
  ) then
    alter table public.elin_logs
      add constraint elin_logs_variant_check
      check (variant is null or variant in ('A', 'B'));
  end if;
end $$;

create index if not exists elin_logs_variant_idx
  on public.elin_logs (variant);
