import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(".hero-blob", {
                x: xPos,
                y: yPos,
                duration: 2,
                ease: "power2.out"
            });
            gsap.to(".hero-blob-2", {
                x: -xPos,
                y: -yPos,
                duration: 2,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        tl.fromTo(subRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(titleRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
                "-=0.8"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=1"
            );

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-deep-bg)_0%,_#000000_100%)] -z-20"></div>
            <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[var(--color-neon-purple)] rounded-full blur-[120px] opacity-20 -z-10 animate-pulse"></div>
            <div className="hero-blob-2 absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-[var(--color-neon-cyan)] rounded-full blur-[150px] opacity-10 -z-10"></div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 ref={subRef} className="text-[var(--color-neon-cyan)] tracking-[0.3em] md:tracking-[0.5em] mb-4 font-inter text-xs md:text-sm uppercase font-bold">
                    Institution’s Innovation Council • MNNIT Allahabad
                </h2>
                <h1 ref={titleRef} className="text-6xl md:text-[9rem] leading-none font-orbitron font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    UDBHAV
                </h1>
                <p className="mt-8 text-gray-300 text-lg md:text-xl font-light font-inter max-w-2xl mx-auto">
                    Innovate. Create. Disrupt. <br /> Since 2018.
                </p>

                <div ref={ctaRef} className="mt-12 flex justify-center gap-6">
                    <button className="px-8 py-3 bg-white text-black font-orbitron font-bold text-sm tracking-widest hover:scale-105 transition-transform">
                        EXPLORE EVENTS
                    </button>
                    <button className="px-8 py-3 border border-white text-white font-orbitron font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all">
                        REGISTER NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
