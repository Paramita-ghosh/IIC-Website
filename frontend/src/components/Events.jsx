import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
    {
        id: 1,
        title: "Seed Startups",
        desc: "An idea-igniting event where future founders turn curiosity into business concepts.",
    },
    {
        id: 2,
        title: "InnoVate",
        desc: "An event where students and professionals come together to share their knowledge and experience.",
    },
    {
        id: 3,
        title: "VentureVerse",
        desc: "A dynamic space connecting entrepreneurs, investors, and visionaries under one roof.",
    },
    {
        id: 4,
        title: "IdeaSprint",
        desc: "A high-energy challenge pushing participants to build viable startup ideas in limited time.",
    },
    {
        id: 5,
        title: "Entreprenext",
        desc: "Nurturing the next generation of entrepreneurs with insights, innovation, and inspiration.",
    },
    {
        id: 6,
        title: "Venture Vitals",
        desc: "A quiz decoding the essentials every entrepreneur must know.",
    },
];

const Events = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(
            cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section
            id="tracks"
            ref={containerRef}
            className="py-28 px-6 bg-black relative overflow-hidden"
        >
            {/* Ambient Gold + Blood Glow */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FFD56A]/10 blur-[180px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7A1C1C]/10 blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-20 text-center text-[#F6EEDD]">
                    Event{" "}
                    <span className="bg-gradient-to-r from-[#7A1C1C] via-[#FFD56A] to-[#7A1C1C] bg-clip-text text-transparent">
                        Tracks
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, i) => (
                        <div
                            key={track.id}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="
                                group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer
                                bg-black
                                border border-[#FFD56A]/20
                                transition-all duration-500
                                hover:-translate-y-3 hover:scale-[1.04]
                                hover:border-[#7A1C1C]
                                hover:shadow-[0_0_40px_rgba(122,28,28,0.45)]
                            "
                        >
                            {/* Gloss Layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Blood + Gold Hover Wash */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7A1C1C]/25 via-transparent to-[#FFD56A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                {/* Big Index */}
                                <div className="mb-auto text-6xl opacity-10 font-black font-orbitron absolute top-5 right-5 text-[#FFD56A] group-hover:text-[#7A1C1C]/40 transition-colors duration-500">
                                    0{track.id}
                                </div>

                                <h3 className="text-2xl font-bold font-orbitron mb-3 text-[#FFD56A] group-hover:text-[#7A1C1C] transition-all duration-300 group-hover:translate-x-2">
                                    {track.title}
                                </h3>

                                <p className="text-[#F6EEDD]/60 font-inter text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 leading-relaxed">
                                    {track.desc}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="
                                    h-[3px] w-0 group-hover:w-full
                                    bg-gradient-to-r from-[#7A1C1C] via-[#FFD56A] to-[#7A1C1C]
                                    transition-all duration-500
                                    absolute bottom-0 left-0
                                    shadow-[0_0_20px_rgba(255,213,106,0.8)]
                                " />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
