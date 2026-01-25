"use client";
import { useState } from 'react';
import { audienceCards } from '@/lib/data';

export default function AudienceSection() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardTouch = (idx) => {
    // If user taps the same card, close it; otherwise open the new one
    setActiveCard(activeCard === idx ? null : idx);
  };

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
          {audienceCards.map((item, idx) => {
            const isActive = activeCard === idx;

            return (
              <div 
                key={idx} 
                onClick={() => handleCardTouch(idx)}
                className={`group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-dark transition-all duration-500 cursor-pointer shadow-xl
                  ${isActive ? 'shadow-2xl -translate-y-2 ring-2 ring-gold' : ''}`}
              >
                {/* Audience Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 
                    ${isActive ? 'scale-110 grayscale-0 opacity-100' : 'grayscale opacity-70 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100'}`}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent transition-opacity duration-500
                  ${isActive ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'}`}>
                </div>

                {/* Content */}
                <div className={`absolute bottom-0 left-0 p-8 w-full transform transition-all duration-500 
                  ${isActive ? 'translate-y-[-10px]' : 'group-hover:translate-y-[-10px]'}`}>
                  
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Gold Line */}
                  <div className={`h-1 bg-gold mb-4 transition-all duration-500 
                    ${isActive ? 'w-full' : 'w-12 group-hover:w-full'}`}>
                  </div>

                  {/* Description Text */}
                  <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 
                    ${isActive ? 'opacity-100 h-auto translate-y-0' : 'opacity-0 h-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:h-auto lg:group-hover:translate-y-0'}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Mobile Tap Indicator (Optional - subtle hint) */}
                <div className="absolute top-6 right-6 lg:hidden">
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm transition-transform ${isActive ? 'rotate-45 text-gold' : 'text-white'}`}>
                        {isActive ? '✕' : '+'}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}