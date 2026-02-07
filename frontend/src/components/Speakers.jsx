import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import speaker1 from '../assets/speakers/speaker1.png';
import speaker2 from '../assets/speakers/speaker2.png';
import speaker3 from '../assets/speakers/speaker3.png';

gsap.registerPlugin(ScrollTrigger);

const speakersData = [
    {
        name: "Gajendra Purohit",
        role: "Famous Mathematician and YT mentor",
        img: speaker1,
        topic: "How to ace in college"
    },
    {
        name: "Alakh Pandey",
        role: "Founder of Physics Wallah(PW)",
        img: speaker2,
        topic: "How edtech is shaping India's future"
    },
    {
        name: "Aman Dhattarwal",
        role: "Founder of Apna College, Mentor of 1000+ students",
        img: speaker3,
        topic: "How to start a startup"
    },
];

const Speakers = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        gsap.fromTo(".speaker-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                },
                onComplete: () => {
                    gsap.to(".speaker-card", {
                        y: -10,
                        duration: 2,
                        ease: "sine.inOut",
                        stagger: {
                            each: 0.5,
                            yoyo: true,
                            repeat: -1
                        }
                    });
                }
            }
        );
    }, []);

    return (
        <section id="speakers" ref={containerRef} className="py-24 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-white">
                    Keynote <span className="text-[var(--color-neon-cyan)]">Speakers</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {speakersData.map((s, i) => (
                        <div key={i} className="speaker-card group relative overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                            {/* Image Container */}
                            <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-125 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold font-orbitron text-white">{s.name}</h3>
                                <p className="text-[var(--color-neon-cyan)] text-sm font-inter font-medium mb-2">{s.role}</p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                                    <p className="text-gray-400 text-xs mt-2 font-inter">Speaking on: {s.topic}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Speakers;
