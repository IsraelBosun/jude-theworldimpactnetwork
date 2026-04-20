# TMMF — The Marketplace Ministers' Forum

## Project Overview
This is the official website for **The Marketplace Ministers' Forum (TMMF)**, an initiative of **The Word Impact Network Global (TWIN Global)**, led by **Jude Oni**.

The site started as a one-time event marketing page for the inaugural conference (March 28, 2026, Lagos). It has since been **pivoted into a community platform** for young intellectuals, professionals, entrepreneurs, and creatives who integrate faith with their marketplace calling.

---

## The Goal
Build a living community platform where:
- Visitors learn about TMMF and who it's for
- Interested members register via a form (saved to Supabase)
- Upon registration they immediately receive a WhatsApp group link
- The community grows organically around the TWIN Global brand

The long-term vision (Option B) is a full forum with member profiles, discussion threads, and a resource library — but the current build is **Option A**: a clean community landing site that funnels people into WhatsApp.

---

## Tech Stack
- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (members table)
- **Language:** JavaScript (no TypeScript)
- **Fonts:** Inter
- **Deployment:** Vercel (assumed)

---

## Site Structure

### Pages
| Route | Description |
|---|---|
| `/` | Homepage — Hero, About, Who Should Join, CTA |
| `/join` | Standalone join page — split layout form + benefits |
| `/gathering` | Highlights page — photo grid of inaugural forum |
| `/partnership` | Partnership/sponsorship invitation |
| `/volunteer` | Volunteer recruitment |

### Navigation
- **About** → `#about`
- **Who Should Join** → `#who-should-join`
- **Highlights** → `/gathering`
- **Join Now** button (CTA, top right) → `/join`

---

## Key Components
| File | Purpose |
|---|---|
| `HeroSection.js` | Full-viewport hero, massive LIMITLESS headline, bottom info strip |
| `AboutSection.js` | Community mission, YouTube video embed |
| `AudienceSection.js` | "Who Should Join" — 4 editorial image cards |
| `CTASection.js` | Bottom homepage CTA → /join |
| `Navbar.js` | Fixed, transparent-to-filled on scroll, mobile overlay menu |
| `Footer.js` | Brand, nav links, social icons, contact |
| `MainLayout.js` | Wraps all pages with Navbar + Footer |

---

## Supabase Setup

### Table: `members`
```sql
create table members (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  profession text not null,
  reason text,
  created_at timestamp with time zone default now()
);

alter table members enable row level security;

create policy "Allow public inserts" on members
  for insert with check (true);
```

### Environment Variables (`.env.local`)
```
NEXT_PUBLIC_SUPABASE_URL=https://cqmekliunldfbalucmem.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_key_here
```

### Join Flow
1. User fills form on `/join` (name, email, phone, profession, reason)
2. On submit → row inserted into `members` table in Supabase
3. Success screen shown with WhatsApp group link
4. `localStorage` key `tmmf_joined` is set to `"true"` so refreshing the page still shows the WhatsApp link

---

## WhatsApp Link
Stored in `src/lib/data.js` as `eventData.whatsappUrl`.
Currently set to placeholder: `https://chat.whatsapp.com/placeholder`
**Replace this with the real WhatsApp group invite link before going live.**

---

## Design System
- **Primary dark:** `#173574` (navy blue)
- **Gold accent:** `#D4AF37`
- **Font:** Inter (system fallback)
- **Border radius:** `rounded-2xl` / `rounded-3xl` throughout
- **Section padding:** `py-32 px-6` via `.section-padding` utility
- **Button:** `.btn-primary` — gold bg, black text, rounded-full

---

## Brand
- **Name:** TMMF — The Marketplace Ministers' Forum
- **Theme:** LIMITLESS / Influence Without Borders
- **Scripture:** Luke 1:37 — "For with God nothing shall be impossible."
- **Convener:** Jude Oni
- **Parent org:** The Word Impact Network Global (TWIN Global)
- **Contact:** thewordimpactnetwork@gmail.com
- **Phone:** +234 814 344 2367 / +234 906 504 9121
- **Social:** YouTube, Instagram, Facebook, TikTok — all @thewordimpactnetwork(global)

---

## Pending / Next Steps
- Replace `whatsappUrl` placeholder in `data.js` with real link
- Upload real photos to `/gathering` page (replace placeholder grid)
- Set up Supabase email notifications (optional) so members get confirmation
- Future: full forum/community platform (Option B) with auth, profiles, threads
