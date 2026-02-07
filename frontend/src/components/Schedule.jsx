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
        gsap.fromTo(items,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 70%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section id="schedule" className="py-24 px-6 bg-[var(--color-deep-bg)] flex justify-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center text-white">
                    Event <span className="text-[var(--color-neon-purple)]">Timeline</span>
                </h2>

                <div ref={listRef} className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-neon-cyan)] before:to-transparent">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-neon-cyan)] bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_var(--color-neon-cyan)]">
                                <div className="w-3 h-3 bg-[var(--color-neon-cyan)] rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[var(--color-neon-cyan)] transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-orbitron font-bold text-white">{item.time}</span>
                                    <span className="text-xs font-inter text-[var(--color-neon-purple)] border border-[var(--color-neon-purple)] px-2 py-1 rounded">{item.day}</span>
                                </div>
                                <h3 className="text-xl font-bold font-inter text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm font-inter">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Schedule;
