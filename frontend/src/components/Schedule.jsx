import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
    { day: "Day 1", time: "10:00 AM", title: "Opening Ceremony", desc: "Inauguration by faculty members and guests." },
    { day: "Day 1", time: "12:00 PM", title: "Event Begins", desc: "All events begin." },
    { day: "Day 2", time: "11:00 AM", title: "Speaker Sessions", desc: "Industry leaders and speacial guests share their insights." },
    { day: "Day 2", time: "04:00 PM", title: "Project Evaluation", desc: "Evaluation of projects and ideas by faculty members." },
    { day: "Day 3", time: "06:00 PM", title: "Closing Ceremony", desc: "Results announcement and closing ceremony." },
];

const Schedule = () => {
    const listRef = useRef(null);

    useEffect(() => {
        const items = listRef.current.children;

        Array.from(items).forEach((item) => {
            const dot = item.querySelector('.timeline-dot');
            const card = item.querySelector('.timeline-card');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                },
            });

            tl.fromTo(
                dot,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: "back.out(2)",
                }
            ).fromTo(
                card,
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                },
                "-=0.15"
            );
        });
    }, []);

    return (
        <section className="py-28 px-6 bg-black flex justify-center relative overflow-hidden">
            {/* Strong ambient glow */}
            <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#7A1C1C]/30 blur-[200px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#FFD56A]/25 blur-[220px] pointer-events-none" />

            <div className="w-full max-w-4xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-20 text-center text-[#FFF3D6]">
                    Event{" "}
                    <span className="bg-gradient-to-r from-[#8A6A20] via-[#FFF1A8] to-[#8A6A20] bg-clip-text text-transparent">
                        Timeline
                    </span>
                </h2>

                <div
                    ref={listRef}
                    className="
                        space-y-10
                        relative
                        before:absolute
                        before:inset-0
                        before:ml-5
                        before:-translate-x-px
                        md:before:mx-auto
                        md:before:translate-x-0
                        before:h-full
                        before:w-[2px]
                        before:bg-gradient-to-b
                        before:from-transparent
                        before:via-[#7A1C1C]
                        before:via-[#FFD56A]
                        before:to-transparent
                        before:shadow-[0_0_45px_rgba(255,213,106,0.55)]
                    "
                >
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Timeline dot */}
                            <div
                                className="
                                    timeline-dot
                                    flex items-center justify-center
                                    w-12 h-12
                                    rounded-full
                                    bg-black
                                    border border-[#FFD56A]
                                    shrink-0
                                    md:order-1
                                    md:group-odd:-translate-x-1/2
                                    md:group-even:translate-x-1/2
                                    shadow-[0_0_28px_rgba(255,213,106,0.9)]
                                "
                            >
                                <div className="w-3 h-3 bg-[#7A1C1C] rounded-full shadow-[0_0_16px_#7A1C1C]" />
                            </div>

                            {/* Card */}
                            <div
                                className="
                                    timeline-card
                                    relative
                                    w-[calc(100%-4rem)]
                                    md:w-[calc(50%-2.75rem)]
                                    bg-black/95
                                    p-7
                                    rounded-2xl
                                    border border-[#FFD56A]/70
                                    transition-all
                                    duration-300
                                    hover:border-[#7A1C1C]
                                    hover:shadow-[0_0_45px_rgba(255,213,106,0.45)]
                                "
                            >
                                {/* Strong gold gloss */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFF1A8]/18 via-white/[0.08] to-transparent pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-orbitron font-bold text-[#FFF1A8] tracking-widest">
                                            {item.time}
                                        </span>
                                        <span className="text-xs text-[#7A1C1C] border border-[#7A1C1C]/70 px-2 py-1 rounded bg-[#7A1C1C]/10">
                                            {item.day}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#FFF3D6] mb-2 group-hover:text-[#7A1C1C] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#FFF3D6]/65 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
