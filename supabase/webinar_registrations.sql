-- Run this in the Supabase SQL editor before the /webinar page goes live.
-- Kept separate from `members` because one person can register for many
-- webinars over time, while `members` is one row per community member.
--
-- Column set mirrors `members` so registrations can be reconciled against
-- (or promoted into) the community list, plus the webinar-specific fields.

create table webinar_registrations (
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

alter table webinar_registrations enable row level security;

create policy "Allow public inserts" on webinar_registrations
  for insert with check (true);
