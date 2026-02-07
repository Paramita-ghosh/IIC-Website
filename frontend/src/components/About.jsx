import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(textRef.current.children,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                }
            }
        );

        gsap.fromTo(cardRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section id="about" ref={containerRef} className="min-h-screen w-full py-20 px-6 flex items-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full z-10">
                <div ref={textRef}>
                    <h4 className="text-[var(--color-neon-green)] font-inter font-bold tracking-widest uppercase mb-4">Who We Are</h4>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-white leading-tight">
                        Fostering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">Global Innovation</span>
                    </h2>
                    <p className="text-gray-300 font-inter text-lg leading-relaxed mb-6 border-l-2 border-[var(--color-neon-cyan)] pl-6">
                        Udbhav, organized by the Institution’s Innovation Council (IIC) at MNNIT Allahabad in collaboration with IIHMF, is a prominent annual Youth Summit and entrepreneurial event focused on fostering innovation, startup culture, and creativity among students.
                    </p>
                    <p className="text-gray-400 font-inter text-base">
                        We bring together the brightest minds, industry leaders, and tech enthusiasts to collaborate, compete, and create the future.
                    </p>
                </div>

                <div ref={cardRef} className="relative group perspective-1000">
                    <div className="relative w-full aspect-square md:aspect-[4/3] glass rounded-2xl overflow-hidden border border-white/10 p-8 transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6" style={{ backgroundImage: "url('https://iihmf.in/static/media/is1.39daf8667b687d2edccf.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                        {/* <img className="w-full h-full object-cover backdrop-blur-[10px] background-ima" src="https://iihmf.in/static/media/is1.39daf8667b687d2edccf.jpg" alt="IIHMF" /> */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-neon-cyan)]/20 to-[var(--color-neon-purple)]/20 z-0"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="text-6xl text-white/20 font-orbitron font-black"></div>

                            <div className="space-y-4">
                                <div className="h-2 w-20 bg-[var(--color-neon-cyan)] rounded-full"></div>
                                <h3 className="text-2xl font-bold font-inter text-black opacity-80">Innovation First</h3>
                                <p className="text-sm text-gray-800">At Udbhav, we believe that every great idea deserves a platform. Our events are designed to challenge the status quo.</p>
                            </div>
                        </div>
                    </div>
                    {/* glow */}
                    <div className="absolute -inset-4 bg-[var(--color-neon-cyan)] rounded-full blur-[60px] opacity-20 -z-10"></div>
                </div>
            </div>
        </section>
    );
};
export default About;
