export const metadata = {
  title: "Highlights | TMMF",
  description: "Moments from the TMMF inaugural gathering.",
};

const placeholders = [
  { span: "col-span-2 row-span-2", aspect: "aspect-square" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  { span: "col-span-1 row-span-2", aspect: "aspect-[3/4]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  { span: "col-span-2 row-span-1", aspect: "aspect-[16/6]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { span: "col-span-2 row-span-1", aspect: "aspect-[16/6]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
];

export default function GatheringPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero header */}
      <div className="bg-dark text-white pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-gold" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold/70">TMMF · March 2026</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tight uppercase mb-6">
            FORUM<br />
            <span className="text-gold italic">HIGHLIGHTS</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Moments from our inaugural gathering — the Marketplace Ministers' Forum, Lagos 2026.
          </p>
        </div>
      </div>

      {/* Photo grid */}
      <div className="px-6 py-20">
        <div className="container mx-auto">

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {placeholders.map((p, i) => (
              <div
                key={i}
                className={`${p.span} ${p.aspect} relative rounded-2xl overflow-hidden bg-gray-100 group`}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18M3 3l18 18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3M21 3v18" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-[10px] uppercase tracking-widest font-bold">Photo {i + 1}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-8 py-4">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="text-gray-400 text-sm font-medium">
                Full gallery coming soon — photos will be uploaded here.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
