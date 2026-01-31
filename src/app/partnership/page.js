import { eventData } from "@/lib/data";

export default function SponsorshipPage() {
  const collaborationAreas = [
    {
      title: "Media & Promotion",
      items: "Publicity, digital campaigns, social media visibility, media coverage"
    },
    {
      title: "Event Production",
      items: "Sound systems, stage setup, lighting, technical services"
    },
    {
      title: "Decoration & Ambience",
      items: "Stage décor, venue styling, branding elements"
    },
    {
      title: "Print & Branding",
      items: "Banners, flyers, souvenirs, branded materials"
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-50 -z-10 translate-x-1/2 skew-x-12" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16 border-b border-gray-100 pb-12">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Official Partnership Invitation
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            SPONSORSHIP & <br />
            <span className="text-gold italic uppercase">Collaboration</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <span>📅 {eventData.date}</span>
            <span>📍 {eventData.venue}</span>
            <span>🎥 {eventData.attendanceMode}</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16 text-gray-700 leading-relaxed text-lg">
            {/* Letter Section */}
            <section className="space-y-8">
              <p className="font-bold text-dark text-2xl">Dear Potential Partner,</p>

              <p>
                We are pleased to share that{" "}
                <span className="text-dark font-bold">{eventData.name}</span>, an
                initiative of TWIN Global, will be hosting its Inaugural
                Conference themed{" "}
                <span className="text-gold font-bold italic">
                  “{eventData.theme.main} — {eventData.theme.sub}”
                </span>.
              </p>

              <p>
                TMMF is a faith-based business and career platform committed to
                raising industry leaders from the Body of Christ across all
                spheres of influence. This conference is designed to equip
                corporate professionals, entrepreneurs, creatives, and skilled
                artisans with practical leadership insight anchored in God’s
                Word.
              </p>

              <p>
                To deliver a world-class experience, we are seeking strategic
                partners and sponsors who share our passion for faith–work
                integration, leadership development, and societal
                transformation.
              </p>
            </section>

            {/* The Need */}
            <section className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">
                The Need
              </h3>
              <p className="text-xl font-medium leading-snug">
                Support is required to cover venue logistics, guest speakers,
                media promotion, event production, and operational costs
                necessary to deliver a premium conference experience.
              </p>
            </section>

            {/* Collaboration Areas - Mobile Optimized */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black tracking-tighter uppercase italic">
                Ways to <span className="text-gold">Collaborate</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {collaborationAreas.map((area, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-3xl border border-gray-100 bg-gray-50/50 
                               hover:border-gold/50 hover:bg-white 
                               active:scale-[0.98] active:border-gold 
                               transition-all duration-200 cursor-pointer select-none"
                  >
                    <h3 className="font-bold text-dark mb-2 group-hover:text-gold transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {area.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Financial Support */}
            <section className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-md">
                  <h2 className="text-2xl font-black mb-4 tracking-tight">
                    Direct Financial Support
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Partners may also support the TMMF vision through direct
                    financial contributions. Your generosity advances
                    faith-driven excellence in the marketplace.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-1 bg-gold" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-gold">
                        Access Bank Plc
                      </p>
                      <p className="text-xl font-mono font-black tracking-wider">
                        0100955724
                      </p>
                      <p className="text-sm font-medium text-gray-300 italic">
                        Jude Motunrayo Oni
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="inline-block bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                      Impact Status
                    </p>
                    <p className="text-2xl font-black text-gold uppercase italic tracking-tighter leading-none">
                      Limitless
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Signature */}
            <section className="pt-8">
              <p className="font-serif text-2xl text-dark italic">Jude Oni</p>
              <p className="font-black text-xs uppercase tracking-widest mt-2">
                JUDE ONI
              </p>
              <p className="text-gray-500 text-sm">Convener, TMMF</p>
              <p className="text-gold text-xs font-bold mt-1 uppercase tracking-tighter italic">
                “Raising Kingdom Leaders for Marketplace Exploit”
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="font-black text-xl mb-6 border-b border-gray-200 pb-4 uppercase tracking-tighter">
                  Partner <span className="text-gold">Benefits</span>
                </h3>
                <ul className="space-y-6">
                  {[
                    "Organization mention as a supporter",
                    "Recognition in select communications",
                    "Acknowledgment during the program"
                  ].map((benefit, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-sm font-medium leading-relaxed"
                    >
                      <span className="text-gold font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold p-10 rounded-[2.5rem] text-black shadow-xl shadow-gold/20">
                <h3 className="font-black text-xl mb-4 uppercase tracking-tighter">
                  Contact Us
                </h3>
                <p className="text-sm font-bold mb-6 opacity-80">
                  We would be delighted to discuss partnership options.
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${eventData.contact.email}`}
                    className="block font-black text-sm border-b border-black/20 pb-2 truncate"
                  >
                    {eventData.contact.email}
                  </a>
                  <a
                    href={`tel:${eventData.contact.phone}`}
                    className="block font-black text-sm border-b border-black/20 pb-2"
                  >
                    {eventData.contact.phone}
                  </a>
                  {/* Second Phone Number */}
                  <a
                    href={`tel:${eventData.contact.phone2}`}
                    className="block font-black text-sm border-b border-black/20 pb-2"
                  >
                    {eventData.contact.phone2}
                  </a>
                </div>
                    <a
                      href="https://tally.so/r/kdE6vJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className="w-full bg-black cursor-pointer text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs mt-8 active:scale-95 transition-transform">
                        Partner Now
                      </button>
                    </a>

              </div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

