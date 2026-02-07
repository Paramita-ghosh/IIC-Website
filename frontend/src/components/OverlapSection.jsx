import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, DollarSign, Users, BarChart3, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OverlapSection() {
    const sectionRef = useRef(null);

    const kpis = [
        { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'from-[var(--color-neon-cyan)] to-[#00abf0]' },
        { icon: DollarSign, value: '₹2Cr+', label: 'Funding Raised', color: 'from-[#0aff00] to-emerald-600' },
        { icon: Users, value: '1000+', label: 'Innovators', color: 'from-[var(--color-neon-purple)] to-violet-600' },
        { icon: Rocket, value: '30+', label: 'Startups Launched', color: 'from-[#ff0055] to-rose-600' },
    ];

    const loremTexts = [
        "Innovation is the catalyst that transforms ideas into reality. At our hub, we nurture creative minds and empower them to build the future.",
        "Every breakthrough begins with a single spark of curiosity. We provide the fuel to turn that spark into a blazing trail of success.",
        "Join a community of visionaries who are redefining what's possible. Together, we're building tomorrow's solutions today."
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=1000%',
                    pin: true,
                    scrub: 1,
                }
            });

            const kpiCards = gsap.utils.toArray('.kpi-overlap-card');
            const loremBlocks = gsap.utils.toArray('.lorem-reveal');

            gsap.set(kpiCards, {
                y: 300,
                opacity: 0,
                scale: 0.8,
                rotateX: 45,
                rotateY: (Math.random() - 0.5) * 30
            });

            gsap.set('.lorem-container', { y: 200, opacity: 0 });
            gsap.set(loremBlocks, { y: 50, opacity: 0 });

            kpiCards.forEach((card, index) => {
                tl.to(card, {
                    y: index * -15,
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: 'expo.out'
                }, index * 0.8);
            });

            tl.to('.kpi-main-content', {
                y: -350,
                scale: 0.8,
                opacity: 0.3,
                filter: "blur(5px)",
                duration: 2,
                ease: 'power2.inOut'
            }, "+=0.5");

            tl.to('.lorem-container', {
                y: -300,
                opacity: 1,
                duration: 2,
                ease: 'power2.out'
            }, "<");

            loremBlocks.forEach((block, index) => {
                tl.to(block, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.2)'
                }, `-=${index === 0 ? 1 : 0.5}`);
            });

            gsap.to('.bg-pulse-glow', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=1000%',
                    scrub: true
                },
                scale: 2,
                opacity: 0,
                rotate: 180
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[100vh] bg-[#050510] overflow-hidden flex flex-col justify-center perspective-1000">
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-neon-purple)] blur-[150px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

                <div className="kpi-main-content">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                            Our <span className="text-gradient">Impact</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-inter">
                            Numbers that define our legacy.
                        </p>
                    </div>

                    <div className="relative h-[400px] flex justify-center items-center">
                        {kpis.map((kpi, index) => {
                            const Icon = kpi.icon;
                            return (
                                <div
                                    key={index}
                                    className="kpi-overlap-card absolute w-[300px] md:w-[380px] bg-[#000]/80 border border-white/20 rounded-xl p-8 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
                                    style={{ zIndex: index + 1 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-50 rounded-xl pointer-events-none border border-white/5`}></div>
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${kpi.color}`}></div>

                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className={`p-5 rounded-full bg-gradient-to-br ${kpi.color} bg-opacity-10 mb-6 shadow-lg shadow-${kpi.color.split('-')[1]}-500/20 ring-1 ring-white/10`}>
                                            <Icon className="text-black w-8 h-8 drop-shadow-md" strokeWidth={2.5} />
                                        </div>

                                        <div className="text-6xl font-black font-orbitron text-white mb-2 tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                                            {kpi.value}
                                        </div>

                                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${kpi.color} mb-4`}></div>

                                        <p className="text-gray-300 font-inter font-bold uppercase tracking-[0.2em] text-xs">
                                            {kpi.label}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay rounded-xl pointer-events-none"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="lorem-container absolute top-[60%] left-0 w-full px-4 md:px-0">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {loremTexts.map((text, i) => (
                            <div key={i} className="lorem-reveal bg-[#0a0a0a]/80 border border-[var(--color-neon-cyan)]/30 p-6 rounded-xl backdrop-blur-md relative overflow-hidden group hover:border-[var(--color-neon-cyan)] transition-colors">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-neon-cyan)]"></div>
                                <p className="text-gray-200 font-inter text-lg leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
