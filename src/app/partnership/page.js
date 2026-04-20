import { eventData } from "@/lib/data";

export default function SponsorshipPage() {
  const collaborationAreas = [
    {
      title: "Media & Promotion",
      items: "Publicity, digital campaigns, social media visibility, media coverage"
    },
    {
      title: "Community Events",
      items: "Sound systems, stage setup, lighting, technical services"
    },
    {
      title: "Decoration & Ambience",
      items: "Venue styling, stage décor, branding elements"
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
            PARTNERSHIP & <br />
            <span className="text-gold italic uppercase">Collaboration</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Partner with TMMF and invest in the next generation of faith-driven marketplace leaders across Nigeria and beyond.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16 text-gray-700 leading-relaxed text-lg">
            {/* Letter Section */}
            <section className="space-y-8">
              <p className="font-bold text-dark text-2xl">Dear Potential Partner,</p>

              <p>
                We are pleased to invite you into partnership with{" "}
                <span className="text-dark font-bold">{eventData.name}</span>, a
                faith-driven community platform under TWIN Global, themed{" "}
                <span className="text-gold font-bold italic">
                  "{eventData.theme.main} — {eventData.theme.sub}"
                </span>.
              </p>

              <p>
                TMMF is a growing community of marketplace ministers — corporate professionals,
                entrepreneurs, creatives, and skilled artisans — committed to building sustainable
                impact anchored in God's Word.
              </p>

              <p>
                To build and sustain this community platform, we are seeking strategic partners
                and sponsors who share our passion for faith–work integration, leadership
                development, and societal transformation.
              </p>
            </section>

            {/* The Need */}
            <section className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">
                The Need
              </h3>
              <p className="text-xl font-medium leading-snug">
                Support is required to cover community operations, media promotion,
                event production for community gatherings, and resources that deliver
                a premium experience to our growing membership.
              </p>
            </section>

            {/* Collaboration Areas */}
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
                    Partners may also support the TMMF vision through direct financial
                    contributions. Your generosity advances faith-driven excellence in the marketplace.
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
                      Community Vision
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
                "Raising Kingdom Leaders for Marketplace Exploit"
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
                    "Organization mention as a community supporter",
                    "Recognition in TMMF communications",
                    "Acknowledgment at community gatherings"
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
