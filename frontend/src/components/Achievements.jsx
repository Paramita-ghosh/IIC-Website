import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Trophy, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            gsap.from('.stat-box', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom-=100',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
                    markers: false
                },
                duration: 1.5,
                y: 60,
                opacity: 0,
                stagger: 0.15,
                ease: 'power3.out'
            });

            
            const counters = gsap.utils.toArray('.counter-number');
            counters.forEach((counter) => {
                const targetValue = parseInt(counter.getAttribute('data-target'));
                const originalText = counter.textContent; 

                gsap.to(counter, {
                    innerHTML: targetValue,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    onUpdate: function () {
                        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerHTML);
                        if (counter.getAttribute('data-target').includes('+')) {
                            
                        }
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { icon: Users, label: 'Active Members', value: '700+' },
        { icon: Trophy, label: 'Events Completed', value: '100+' },
        { icon: Zap, label: 'Startups founded', value: '30+' },
        { icon: Target, label: 'Expert Sessions', value: '100+' }
    ];

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(card, {
            duration: 0.4,
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.08,
            transformPerspective: 1000,
            boxShadow: "0 20px 50px rgba(0, 243, 255, 0.2)",
            borderColor: "var(--color-neon-cyan)",
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            duration: 0.7,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: "none",
            borderColor: "rgba(255,255,255,0.1)",
            ease: 'elastic.out(1, 0.5)'
        });
    };

    return (
        <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[var(--color-neon-cyan)] blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--color-neon-purple)] blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 font-orbitron text-white">
                    Our <span className="text-[var(--color-neon-cyan)]">Achievements</span>
                </h2>
                <p className="text-center text-gray-400 text-base sm:text-lg mb-16 font-inter">
                    Building a thriving innovation community
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        const numValue = stat.value.replace(/\D/g, '');
                        const hasPlus = stat.value.includes('+');

                        return (
                            <div
                                key={i}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="stat-box group relative bg-[#111] border border-white/10 rounded-xl p-6 sm:p-8 text-center transition-none cursor-pointer perspective-1000"
                            >
                                
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                                <div className="relative z-10 pointer-events-none">
                                    <div className="inline-block p-4 bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[var(--color-neon-cyan)]">
                                        <Icon className="text-[var(--color-neon-cyan)]" size={32} />
                                    </div>

                                    <div className="flex justify-center items-baseline font-black font-orbitron text-4xl sm:text-5xl text-white mb-2">
                                        <span className="counter-number" data-target={numValue}>0</span>
                                        {hasPlus && <span className="text-[var(--color-neon-purple)]">+</span>}
                                    </div>

                                    <p className="text-gray-400 text-sm sm:text-base font-inter font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
