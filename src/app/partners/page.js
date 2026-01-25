import { eventData } from "@/lib/data";

export default function SponsorshipPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-50 -z-10 translate-x-1/2 skew-x-12"></div>

      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <header className="mb-16 border-b border-gray-100 pb-12">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Official Partnership Invitation
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            BECOME A <br />
            <span className="text-gold italic uppercase">Sponsor</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <span>📅 {eventData.date}</span>
            <span>📍 {eventData.venue}</span>
            <span>🎥 {eventData.attendanceMode}</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Letter Body */}
          <div className="lg:col-span-2 space-y-8 text-gray-700 leading-relaxed text-lg">
            <p className="font-bold text-dark text-2xl">Dear Potential Partner,</p>
            
            <p>
              We are pleased to share that <span className="text-dark font-bold">{eventData.name}</span>, 
              an initiative of TWIN Global, will be hosting its Inaugural Conference, themed 
              <span className="text-gold font-bold italic"> "{eventData.theme.main} — {eventData.theme.sub}"</span>.
            </p>

            <p>
              TMMF is a faith-based business and career platform committed to raising industry leaders 
              from the Body of Christ across all spheres of influence. The conference is designed to 
              equip corporate professionals, entrepreneurs, creatives, and skilled artisans with 
              practical leadership insights and the wisdom of God’s Word.
            </p>

            <div className="bg-dark text-white p-8 rounded-[2rem] shadow-2xl my-10">
              <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">The Need</h3>
              <p className="text-xl font-medium leading-snug">
                To deliver a world-class experience, we are seeking financial support to cover 
                venue logistics, guest speakers, media promotion, and operational costs.
              </p>
            </div>

            <p>
              Your contribution will play a vital role in strengthening faith–work integration and 
              leadership development among professionals committed to societal transformation.
            </p>

            {/* Signature Block */}
            <div className="pt-12">
              <p className="font-serif text-2xl text-dark italic">Jude Oni</p>
              <p className="font-black text-xs uppercase tracking-widest mt-2">JUDE ONI</p>
              <p className="text-gray-500 text-sm">Convener, TMMF</p>
              <p className="text-gold text-xs font-bold mt-1 uppercase tracking-tighter italic">
                “Raising Kingdom Leaders for Marketplace Exploit”
              </p>
            </div>
          </div>

          {/* Sidebar: Benefits & CTA */}
          <aside className="space-y-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
              <h3 className="font-black text-xl mb-6 border-b border-gray-200 pb-4 uppercase tracking-tighter">
                Sponsor <span className="text-gold">Benefits</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Opportunities for organization mention as a supporter",
                  "Recognition in select communications and materials",
                  "Acknowledgment during the program where appropriate"
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4 text-sm font-medium leading-relaxed">
                    <span className="text-gold font-bold">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gold p-10 rounded-[2.5rem] text-black">
              <h3 className="font-black text-xl mb-4 uppercase tracking-tighter">Contact Us</h3>
              <p className="text-sm font-bold mb-6 opacity-80 leading-relaxed">
                We would be delighted to discuss partnership options at your convenience.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${eventData.contact.email}`} className="block font-black text-sm border-b border-black/20 pb-2 truncate">
                  {eventData.contact.email}
                </a>
                <a href={`tel:${eventData.contact.phone}`} className="block font-black text-sm border-b border-black/20 pb-2">
                  {eventData.contact.phone}
                </a>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs mt-8 hover:scale-105 transition-transform">
                Inquire Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}