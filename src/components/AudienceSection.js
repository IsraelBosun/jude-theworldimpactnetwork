"use client";
import { useState } from "react";
import { audienceCards } from "@/lib/data";

export default function AudienceSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="who-should-join" className="py-32 px-6 bg-dark text-white overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold" />
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold/70">Membership</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tight uppercase">
              WHO SHOULD<br />
              <span className="text-gold italic">JOIN?</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base max-w-xs leading-relaxed md:text-right">
            TMMF is for every believer navigating the intersection of faith and professional life.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceCards.map((card, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={card.title}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer select-none"
                onClick={() => handleTap(idx)}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-110" : "scale-100"} lg:group-hover:scale-110`}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

                {/* Large background number */}
                <div className="absolute top-4 right-4 text-[5rem] font-black text-white/[0.06] leading-none select-none pointer-events-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className={`h-0.5 bg-gold mb-5 transition-all duration-500 ${isActive ? "w-16" : "w-8"} lg:group-hover:w-16`} />
                  <h3 className="text-white font-black text-xl mb-2 leading-tight">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>

                {/* Mobile tap hint on first card */}
                {idx === 0 && activeIndex === null && (
                  <div className="absolute top-4 left-4 lg:hidden">
                    <span className="bg-gold/20 border border-gold/30 text-gold text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                      Tap to explore
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
