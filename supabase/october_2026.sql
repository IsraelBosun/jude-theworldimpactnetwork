-- Member sign-ups from the /join page, starting October 2026.
-- Run this in the Supabase SQL editor before the /join form goes live.

create table october_2026 (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  profession text not null,
  city text,
  referral_source text,
  created_at timestamp with time zone default now()
);

alter table october_2026 enable row level security;

-- Public can join, but nobody can read the list with the anon key.
create policy "Allow public inserts" on october_2026
  for insert with check (true);
