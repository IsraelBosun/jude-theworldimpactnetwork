export default function SpeakersSection() {
  const placeholders = [1, 2, 3, 4];

  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Featured <span className="text-gold">Speakers</span></h2>
            <p className="text-gray-600 text-lg">
              TMMF will host seasoned industry leaders, marketplace ministers, and transformational voices with proven impact.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
            Announcing Soon
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholders.map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative group">
                <img 
                  src="https://placehold.co/600x800/1a1a1a/D4AF37?text=?" 
                  alt="Speaker Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg">Industry Leader</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-semibold">TBA</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-400 text-sm italic">
          Expect influential voices shaping faith, leadership, and excellence.
        </p>
      </div>
    </section>
  );
}