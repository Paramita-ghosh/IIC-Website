import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Trophy, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stat-box', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom-=100',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
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
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { icon: Users, label: 'Active Members', value: '700+' },
        { icon: Trophy, label: 'Events Completed', value: '100+' },
        { icon: Zap, label: 'Startups Founded', value: '30+' },
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
            rotateX,
            rotateY,
            scale: 1.08,
            transformPerspective: 1000,
            boxShadow: '0 20px 50px rgba(212,175,55,0.25)',
            borderColor: '#D4AF37',
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            duration: 0.7,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: 'none',
            borderColor: 'rgba(212,175,55,0.25)',
            ease: 'elastic.out(1, 0.5)'
        });
    };

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        >
            {/* Ambient Gold Glow */}
            <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[180px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[180px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 font-orbitron text-[#F6EEDD]">
                    Our{' '}
                    <span className="bg-gradient-to-r from-[#6F5520] via-[#FFD56A] to-[#6F5520] bg-clip-text text-transparent">
                        Achievements
                    </span>
                </h2>
                <p className="text-center text-[#9E3A3A] text-base sm:text-lg mb-16 font-inter">
                    Building a thriving innovation community
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        const numValue = stat.value.replace(/\D/g, '');
                        const hasPlus = stat.value.includes('+');

                        return (
                            <div
                                key={i}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="
                                    stat-box
                                    group
                                    relative
                                    bg-black
                                    border
                                    border-[#D4AF37]/30
                                    rounded-2xl
                                    p-6 sm:p-8
                                    text-center
                                    transition-none
                                    cursor-pointer
                                    perspective-1000
                                "
                            >
                                {/* Gold hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                                {/* Gloss layer */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent rounded-2xl pointer-events-none"></div>

                                <div className="relative z-10 pointer-events-none">
                                    <div className="inline-block p-4 bg-black rounded-full mb-6 transition-transform duration-300 border border-[#D4AF37]/30 group-hover:scale-110">
                                        <Icon className="text-[#D4AF37]" size={32} />
                                    </div>

                                    <div className="flex justify-center items-baseline font-black font-orbitron text-4xl sm:text-5xl text-[#F6EEDD] mb-2">
                                        <span className="counter-number" data-target={numValue}>0</span>
                                        {hasPlus && <span className="text-[#D4AF37]">+</span>}
                                    </div>

                                    <p className="text-[#9E3A3A] text-sm sm:text-base font-inter font-medium uppercase tracking-wider group-hover:text-[#F6EEDD] transition-colors">
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
