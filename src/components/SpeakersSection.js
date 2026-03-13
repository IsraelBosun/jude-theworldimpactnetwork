export default function SpeakersSection() {
  const speakers = [
    {
      name: "Bode Roberts",
      role: "CEO, Dataleum",
      image: "/dataleum.jpeg",
      imagePosition: "object-center",
      imageStyle: { objectPosition: "50% 20%" },
    },
    {
      name: "Jude Oni",
      role: "Convener",
      image: "/jude.jpeg",
      imagePosition: "object-center",
    },
    {
      name: "Elekwachi Ifeanyichukwu",
      role: "CEO, Sparks & Splendour",
      image: "/splendor.jpeg",
      imagePosition: "object-center",
    },
  ];

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="space-y-4">
              <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative group">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`w-full h-full object-cover ${speaker.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  style={speaker.imageStyle || {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg">{speaker.name}</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-semibold">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
