import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
    {
        id: 1,
        title: "Seed Startups",
        desc: "An idea-igniting event where future founders turn curiosity into business concepts.",
        color: "var(--color-neon-cyan)"
    },
    {
        id: 2,
        title: "InnoVate",
        desc: "An event where students and professionals come together to share their knowledge and experience.",
        color: "var(--color-neon-purple)"
    },
    {
        id: 3,
        title: "VentureVerse",
        desc: "A dynamic space connecting entrepreneurs, investors, and visionaries under one roof.",
        color: "var(--color-neon-green)"
    },
    {
        id: 4,
        title: "IdeaSprint",
        desc: "A high-energy challenge pushing participants to build viable startup ideas in limited time.",
        color: "#ff0055"
    },
    {
        id: 5,
        title: "Entreprenext",
        desc: "Nurturing the next generation of entrepreneurs with insights, innovation, and inspiration.",
        color: "#ffaa00"
    },
    {
        id: 6,
        title: "Venture Vitals",
        desc: "A quiz decoding the essentials every entrepreneur must know.",
        color: "#0088ff"
    },
];

const Events = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(cardsRef.current,
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
                }
            }
        );
    }, []);

    return (
        <section id="tracks" ref={containerRef} className="py-24 px-6 bg-[#080808] relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center text-white">
                    Event <span className="text-gradient">Tracks</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track, i) => (
                        <div
                            key={track.id}
                            ref={el => cardsRef.current[i] = el}
                            className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-[#111] hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
                        >
                            {/* Hover Background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ backgroundColor: track.color }}
                            ></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="mb-auto text-6xl opacity-10 font-black font-orbitron absolute top-4 right-4 transition-transform group-hover:scale-110 group-hover:text-white/20">
                                    0{track.id}
                                </div>

                                <h3 className="text-2xl font-bold font-orbitron mb-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                                    {track.title}
                                </h3>
                                <p className="text-gray-400 font-inter text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {track.desc}
                                </p>

                                <div
                                    className="h-1 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"
                                    style={{ backgroundColor: track.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
