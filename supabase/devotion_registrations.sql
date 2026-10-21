-- Sign-ups from the /devotion page (devotion WhatsApp group).
-- Run this in the Supabase SQL editor before the /devotion form goes live.

create table devotion_registrations (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  gender text not null,
  born_again text not null,
  reason text not null,
  city text,
  referral_source text,
  created_at timestamp with time zone default now()
);

alter table devotion_registrations enable row level security;

-- Public can register, but nobody can read the list with the anon key.
create policy "Allow public inserts" on devotion_registrations
  for insert with check (true);
