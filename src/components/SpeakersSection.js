"use client";
import { useState } from "react";

export default function SpeakersSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const speakers = [
    {
      name: "Bode Roberts",
      role: "CEO, Dataleum",
      image: "/dataleum.jpeg",
      imagePosition: "object-center",
      imageStyle: { objectPosition: "50% 20%" },
      bio: {
        tagline: "Tech Leader · Entrepreneur · Digital Inclusion Advocate",
        body: "CEO of Dataleum — promoting digital literacy across Nigeria & the UK.\n\nAwards include Best EdTech Startup in Africa (2023), Most Outstanding CEO (2025), and Future Awards Africa Prize (2025).\n\nFounded the Bode Roberts Endowment Fund & BR Global Consults. Appointed to the UN/UNDP Young Africa Innovates Programme.\n\nHolds PMP®, CBAP®, CAIC™ & GPHR certifications.",
      },
    },
    {
      name: "Jude Oni",
      role: "Convener",
      image: "/jude.jpeg",
      imagePosition: "object-center",
      bio: null,
    },
    {
      name: "Elekwachi Ifeanyichukwu",
      role: "CEO, Sparks & Splendour",
      image: "/splendor.jpeg",
      imagePosition: "object-center",
      bio: {
        tagline: "Serial Entrepreneur · Fashion Visionary · Culture Shaper",
        body: "Visionary CEO of Sparks & Splendour — a fashion brand known for bold creativity & refined craftsmanship. Also leads Rehoboth Furnishings.\n\nCollaborated with leading celebrities, movie producers, and Africa Magic. Featured in The Claire Magazine and Trendsetter Magazine.\n\nUses fashion & entertainment to influence for Christ. Serves clients across Nigeria, the UK, and USA.",
      },
    },
    {
      name: "Love Abolade",
      role: "Music Artiste",
      image: "/love.png",
      imagePosition: "object-center",
      imageStyle: { objectPosition: "40% -30%" },
      bio: null,
    },
  ];

  const handleTap = (index) => {
    if (!speakers[index].bio) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="leaders" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Community <span className="text-gold">Leaders</span></h2>
            <p className="text-gray-600 text-lg">
              Seasoned marketplace ministers and industry leaders who guide, inspire, and pour into our community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
          {speakers.map((speaker, index) => {
            const isActive = activeIndex === index;
            const hasBio = !!speaker.bio;

            return (
              <div
                key={speaker.name}
                className={hasBio ? "cursor-pointer" : "cursor-default"}
                style={{ perspective: "1000px" }}
                onClick={() => handleTap(index)}
              >
                {/* Flip container — fixed height so cards don't affect each other */}
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isActive ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.7s",
                    position: "relative",
                  }}
                >
                  {/* FRONT */}
                  <div style={{ backfaceVisibility: "hidden" }}>
                    <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative group">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className={`w-full h-full object-cover ${speaker.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                        style={speaker.imageStyle || {}}
                      />
                      {hasBio && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                            <span className="bg-gold text-dark text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-500">
                              Tap to read bio
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-bold text-lg">{speaker.name}</h4>
                      <p className="text-gold text-xs uppercase tracking-widest font-semibold">{speaker.role}</p>
                    </div>
                  </div>

                  {/* BACK — absolutely positioned so it doesn't push layout */}
                  {hasBio && (
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      <div className="aspect-[4/5] bg-dark rounded-3xl overflow-hidden flex flex-col p-4 lg:p-5">
                        <p className="text-gold text-xs lg:text-[10px] uppercase tracking-widest font-bold mb-3 shrink-0">{speaker.bio.tagline}</p>
                        <p className="text-gray-300 text-sm lg:text-xs leading-relaxed whitespace-pre-line flex-1">{speaker.bio.body}</p>
                        <p className="text-white/30 text-xs uppercase tracking-widest mt-2 shrink-0 text-center">Tap to close</p>
                      </div>
                      <div className="text-center mt-4">
                        <h4 className="font-bold text-lg">{speaker.name}</h4>
                        <p className="text-gold text-xs uppercase tracking-widest font-semibold">{speaker.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
