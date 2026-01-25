"use client";
import { useState, useEffect } from "react";
import { eventData } from "@/lib/data";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date("March 28, 2026 09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center bg-dark text-white overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/hero.png" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_infinite]" 
          alt="TMMF Hero" 
        />
        {/* Darkening overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Main Brand & Headline */}
          <div className="max-w-4xl text-left">
            <p className="text-gold font-bold tracking-[0.4em] mb-4 uppercase text-xs md:text-sm">
              {eventData.name}
            </p>
            
            <div className="relative inline-block mb-4">
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none italic uppercase">
                {eventData.theme.main}
              </h1>
              {/* Gold Accent Line */}
              <div className="h-2 w-1/2 bg-gold mt-2"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white/90 uppercase mt-2">
              {eventData.theme.sub}
            </h2>
            
            <p className="text-gray-400 mt-8 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              {eventData.heroSubheading}
            </p>

            {/* Integrated Timer */}
            <div className="flex gap-10 mt-12 mb-12">
              <TimerUnit value={timeLeft.days} label="Days" />
              <TimerUnit value={timeLeft.hours} label="Hours" />
              <TimerUnit value={timeLeft.mins} label="Minutes" />
              <TimerUnit value={timeLeft.secs} label="Seconds" />
            </div>

            <div className="flex flex-wrap gap-5">
              <button className="btn-primary px-12">Register Now</button>
              <button className="bg-white/5 border border-white/20 px-12 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-wider text-sm">
                Attend Online
              </button>
            </div>
          </div>

          {/* Right Side: Glassmorphism Info Card */}
          <div className="lg:w-[400px] w-full mt-12 lg:mt-0">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative">
              {/* Subtle light effect top right */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-[50px] rounded-full"></div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-2xl">📅</div>
                  <div>
                    <p className="font-bold text-xl text-gold">{eventData.date}</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest">{eventData.time} WAT PROMPT</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <p className="font-bold text-xl">{eventData.venue}</p>
                    <p className="text-sm text-gray-400">Victoria Island, Lagos</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3 font-black">Scripture Foundation</p>
                  <p className="italic text-gray-300 font-serif text-lg leading-relaxed">
                    "{eventData.theme.scripture}: For with God nothing shall be impossible."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

function TimerUnit({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl md:text-6xl font-black text-white tabular-nums tracking-tighter">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-black mt-2">
        {label}
      </span>
    </div>
  );
}