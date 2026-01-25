import { outcomes } from '@/lib/data';

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="section-padding bg-dark text-white overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            WHAT YOU'LL <br /> <span className="text-gold italic">GAIN</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg max-w-md">
            The conference is designed to be a catalyst for your next level of marketplace dominion.
          </p>
        </div>

        <div className="space-y-12">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex gap-6 group">
              <span className="text-gold font-black text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}