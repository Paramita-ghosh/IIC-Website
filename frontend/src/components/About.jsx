import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import abtvideo from './../assets/aboutvideo/abtvideo.mp4';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Video parallax effect
            gsap.to(videoRef.current, {
                y: "15%", // Reduced for smoother feel
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Smooth Text Reveal
            gsap.from(".reveal-text", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            id="about" 
            ref={containerRef} 
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20 px-6"
        >
            {/* VIDEO LAYER - Increased Opacity */}
            <div className="absolute inset-0 z-0">
                <video 
                    ref={videoRef}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    
                    className="w-full h-[115%] object-cover opacity-70" 
                    src={abtvideo}
                />
                
               
                {/* 1. Gradient to fade top and bottom into the black background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
                
                {/* 2. Subtle Dark Tint - Only enough to make white text readable */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>
            </div>

            {/* CONTENT - Set to z-20 to stay above all masks */}
            <div className="max-w-6xl mx-auto z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
                
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-8" ref={contentRef}>
                    <div className="overflow-hidden">
                        <span className="reveal-text block text-[#F2AE3F] font-semibold tracking-[0.3em] uppercase text-sm">
                            The Legacy of Excellence
                        </span>
                    </div>
                    
                    <h2 className="reveal-text text-5xl md:text-7xl font-serif text-[#F6EEDD] leading-tight">
                        Defining the <span className="text-[#7A1C1C]">Standard</span> <br /> of Innovation.
                    </h2>

                    <div className="reveal-text space-y-6 border-l-2 border-[#7A1C1C] pl-8">
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
                            Udbhav, hosted by the <b className="text-[#F2AE3F]">Institution’s Innovation Council (IIC)</b> at MNNIT Allahabad, is more than an event—it’s a high-stakes arena for the next generation of entrepreneurs.
                        </p>
                        <p className="text-white/60 text-base leading-relaxed">
                            In collaboration with IIHMF, we foster a vibrant ecosystem where cognitive ability meets startup culture, preparing students for the global stage.
                        </p>
                    </div>
                </div>

                {/* Right Cards/Features */}
                <div className="lg:col-span-5 grid gap-4 reveal-text">
                    {[
                        { title: "Vibrant Ecosystem", desc: "Creating a local hub for revolutionary ideas.", color: "#7A1C1C" },
                        { title: "Strategic Mentorship", desc: "Network with industry leaders and investors.", color: "#2F2F2C" },
                        { title: "Global Ranking", desc: "Aligning with ARIIA frameworks for excellence.", color: "#9E3A3A" }
                    ].map((item, i) => (
                        <div key={i} className="group p-6 bg-[#2F2F2C]/60 backdrop-blur-lg border border-white/10 hover:border-[#F2AE3F]/50 transition-all duration-500 rounded-sm">
                            <div className="h-1 w-12 mb-4 bg-[#F2AE3F]" style={{ backgroundColor: item.color }}></div>
                            <h3 className="text-[#F6EEDD] text-xl font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                            <p className="text-white/50 text-sm group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;