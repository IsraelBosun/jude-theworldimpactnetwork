export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Text Content */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            About The <br />
            <span className="text-gold uppercase italic">Conference</span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
            <p>
              The Marketplace Ministers’ Forum (TMMF) is a faith-driven business and career platform 
              established under the umbrella of <span className="text-dark font-bold">The Word Impact Network Global (TWIN Global)</span>.
            </p>
            <p>
              TMMF exists to raise influential leaders from the body of Christ across all spheres 
              of society by integrating spiritual depth with professional excellence, integrity, 
              and leadership.
            </p>
            <p className="text-sm border-l-4 border-gold pl-6 py-2 italic bg-gray-50">
              Through inspired teaching and strategic conversations, we equip professionals for 
              marketplace exploits.
            </p>
          </div>
        </div>

        {/* Video Content */}
        <div className="relative group">
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px]"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-gold rounded-tr-3xl"></div>
          
          <div className="relative aspect-video md:aspect-[9/16] max-w-[400px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-gold/20">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Zx80RuAbB5Y?autoplay=0&controls=1&rel=0" 
              title="TMMF Inaugural Conference" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Floating Badge */}
          {/* <div className="absolute -bottom-8 -left-8 bg-brand-dark text-white p-8 rounded-3xl hidden md:block shadow-2xl z-10">
            <div className="flex flex-col gap-1">
              <span className="text-gold font-black text-3xl">Lagos</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-60">Inaugural Host</span>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
}