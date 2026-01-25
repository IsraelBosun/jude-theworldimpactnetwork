import { audienceCards } from '@/lib/data';

export default function AudienceSection() {
  return (
    <section id="audience" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Who Should <span className="text-gold">Attend</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            TMMF is designed for believers called to influence the marketplace through excellence, leadership, and faith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-dark transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Audience Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-gold mb-4 transition-all duration-500 group-hover:w-full"></div>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}