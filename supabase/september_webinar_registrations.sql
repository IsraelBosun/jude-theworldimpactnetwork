-- Registrations for the September 2026 webinar (Marketplace Leadership II).
-- Run this in the Supabase SQL editor before the /webinar page goes live.
--
-- Deliberately a separate table from `webinar_registrations` (the August run)
-- so each webinar's list stays self-contained. Same column set, so the two can
-- still be unioned or reconciled against `members` later.

create table september_webinar_registrations (
  id uuid default gen_random_uuid() primary key,

  -- same shape as `members`
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  profession text,
  city text,
  referral_source text,
  reason text,

  -- webinar-specific
  webinar_title text,
  webinar_date timestamp with time zone,

  created_at timestamp with time zone default now()
);

alter table september_webinar_registrations enable row level security;

-- Public can register, but nobody can read the list with the anon key.
-- Reading it back (to email registrants) needs the service role key.
create policy "Allow public inserts" on september_webinar_registrations
  for insert with check (true);
