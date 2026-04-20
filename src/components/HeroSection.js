"use client";
import { eventData } from "@/lib/data";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex flex-col bg-dark text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          className="w-full h-full object-cover opacity-25 scale-105"
          alt="TMMF"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
      </div>

      {/* Decorative grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-gold" />
            <p className="text-gold font-bold tracking-[0.5em] uppercase text-[10px]">
              {eventData.name}
            </p>
          </div>

          {/* Massive headline */}
          <h1
            className="font-black tracking-tighter leading-[0.82] uppercase italic text-white mb-10 -ml-1"
            style={{ fontSize: "clamp(2.8rem, 13vw, 20rem)" }}
          >
            {eventData.theme.main}
          </h1>

          {/* Subtitle row */}
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px w-16 bg-gold/60" />
            <h2 className="text-sm md:text-lg font-light tracking-[0.25em] text-white/70 uppercase">
              {eventData.theme.sub}
            </h2>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 max-w-4xl">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
              {eventData.heroSubheading}
            </p>
            <a
              href="/join"
              className="shrink-0 inline-flex items-center gap-3 bg-gold text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] active:scale-95 transition-all duration-300"
            >
              Join the Community
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Community", value: "Open Membership" },
              { label: "Focus", value: "Faith & Work" },
              { label: "Location", value: "Lagos & Beyond" },
              { label: "For", value: "Young Professionals" },
            ].map((item, i) => (
              <div key={i} className="py-6 px-4 md:px-8">
                <p className="text-[9px] uppercase tracking-[0.35em] text-gold font-black mb-1.5">{item.label}</p>
                <p className="text-sm font-semibold text-white/60">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
