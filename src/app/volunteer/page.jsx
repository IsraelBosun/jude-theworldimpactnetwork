import { eventData } from "@/lib/data";

export default function VolunteerPage() {
  const volunteerLink = "https://tally.so/r/XxrORg";

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-96 bg-dark -z-10 skew-y-3 origin-top-left scale-110"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Vision */}
          <div className="text-white lg:text-dark">
            <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 lg:text-gold">
              Join the Workforce
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white lg:text-dark">
              SERVE WITH <br />
              <span className="text-gold italic">PURPOSE</span>
            </h1>
            <p className="text-black lg:text-black text-lg mb-8 leading-relaxed max-w-lg">
                The Marketplace Ministers’ Forum is seeking committed individuals who are eager to contribute their skills, time, and passion toward delivering a world-class conference experience.
            </p>
            
            <div className="space-y-6 text-black mb-12">
              {[
                "Experience excellence in event coordination",
                "Network with marketplace leaders",
                "Be a catalyst for societal transformation"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xs">
                    ✓
                  </div>
                  <span className="font-medium text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The CTA Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white border border-gray-100 p-10 md:p-16 rounded-[3rem] shadow-2xl text-center">
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Ready to Start?</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Click the button below to fill out our volunteer recruitment form.
              </p>
              
              <a 
                href={volunteerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full block text-center py-5 text-lg shadow-xl shadow-gold/20"
              >
                Volunteer Now
              </a>

              <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
                A program of TWIN Global
              </p>
            </div>
          </div>

        </div>

        {/* Roles Teaser */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
            <RoleCard title="Media & Tech" desc="Photography, live streaming, and digital engagement." />
            <RoleCard title="Protocol & Logistics" desc="Guest relations, venue management, and security." />
            <RoleCard title="Administration" desc="Registration, participant support, and planning." />
        </div>
      </div>
    </main>
  );
}

function RoleCard({ title, desc }) {
    return (
        <div className="p-8 rounded-3xl border border-gray-100 hover:border-gold/50 transition-all bg-gray-50/50">
            <h3 className="font-black text-xl mb-2 tracking-tight uppercase italic">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}