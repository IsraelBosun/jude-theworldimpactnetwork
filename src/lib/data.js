export const eventData = {
  name: "THE MARKETPLACE MINISTERS' FORUM (TMMF)",
  theme: {
    main: "LIMITLESS",
    sub: "A Community for Marketplace Ministers",
    scripture: "Luke 1:37"
  },
  heroSubheading: "Join a growing network of believers transforming industries, careers, and businesses through faith, purpose, and professional excellence.",
  contact: {
    phone: "+234 814 344 2367",
    phone2: "+234 906 504 9121",
    email: "thewordimpactnetwork@gmail.com"
  },
  whatsappUrl: "https://chat.whatsapp.com/JXPlztmVXC2DTaZIwYz8xh?mode=gi_t"
};

export const webinarData = {
  title: "September Webinar",
  theme: "Marketplace Leadership II",
  venue: "Google Meet",
  // Each webinar gets its own registrations table. See supabase/.
  table: "september_webinar_registrations",
  meetUrl: "https://meet.google.com/yje-fzyo-idq",
  dateLabel: "Saturday, 26th September 2026",
  timeLabel: "11:00 AM",
  // West Africa Time (UTC+1). Used to build calendar links.
  startUtc: "2026-09-26T10:00:00Z",
  endUtc: "2026-09-26T11:00:00Z",
  speaker: {
    name: "Jude Oni",
    role: "Founder, The Marketplace Ministers' Forum (TMMF)",
  },
};

// Shared by the /join and /webinar forms so the options stay in sync.
export const referralOptions = [
  "From a Friend",
  "WhatsApp Status",
  "The TMMF Inaugural Event (March 2026)",
  "Instagram",
  "YouTube",
  "Facebook",
  "TikTok",
  "Other",
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Who Should Join", href: "#who-should-join" },
  { name: "Monthly Webinar", href: "/webinar" },
  { name: "LIMITLESS Highlights", href: "/gathering" },
];

export const audienceCards = [
  {
    title: "Corporate Professionals",
    desc: "Bankers, lawyers, engineers, and administrators seeking purpose-driven leadership.",
    image: "./corporate.png"
  },
  {
    title: "Entrepreneurs",
    desc: "Startup founders and business owners building sustainable enterprises.",
    image: "./entrepreneur.png"
  },
  {
    title: "Creatives",
    desc: "Designers, content creators, and influencers shaping culture.",
    image: "./creatives.png"
  },
  {
    title: "Skilled Artisans",
    desc: "Caterers, technicians, and professionals committed to excellence.",
    image: "./artisans.png"
  }
];
