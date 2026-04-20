export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px w-8 bg-gold" />
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400">About TMMF</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.88] tracking-tight uppercase">
              A COMMUNITY<br />
              <span className="text-gold italic">BUILT ON</span><br />
              PURPOSE
            </h2>
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed font-light">
              <p>
                The Marketplace Ministers' Forum (TMMF) is a faith-driven community for professionals,
                entrepreneurs, and creatives — established under{" "}
                <span className="text-dark font-semibold">The Word Impact Network Global (TWIN Global)</span>.
              </p>
              <p>
                We raise influential leaders from the body of Christ across all spheres — integrating
                spiritual depth with professional excellence, integrity, and lasting impact.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-4 border-gold">
              <p className="italic text-gray-600 text-base leading-relaxed">
                "Through inspired conversations and strategic networking, we equip marketplace
                ministers to influence without borders."
              </p>
            </blockquote>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gold/8 rounded-full blur-[100px]" />
            <div className="absolute -top-6 -right-6 w-20 h-20 border-t-4 border-r-4 border-gold rounded-tr-3xl opacity-60" />
            <div className="relative aspect-[9/16] max-w-[340px] mx-auto overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Zx80RuAbB5Y?autoplay=0&controls=1&rel=0"
                title="TMMF"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
