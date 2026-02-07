import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronDown } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What is Udbhav 2.0?", a: "Udbhav 2.0 is the 2026 edition of MNNIT Allahabad's flagship entrepreneurship summit, focusing on deep-tech and blockchain innovation in partnership with IIML EIC." },
  { q: "Who organizes this event?", a: "It is jointly organized by the Institute Innovation Council (IIC) and the MNNIT Innovation & Incubation Hub (IIHMF)." },
  { q: "What is the Seed Start Summit?", a: "A dedicated segment of Udbhav designed to provide early-stage startups with mentorship and direct access to venture capital funding." },
  { q: "Can non-MNNIT students join?", a: "Yes, Udbhav is a national-level summit. We welcome student entrepreneurs and innovators from across the country." },
  { q: "What is 'Case Clash'?", a: "Case Clash is our signature business case challenge where participants solve real-world industry problems under time pressure." },
  { q: "What are the primary focus areas for 2026?", a: "We are heavily prioritizing startups in Deep-Tech, Blockchain, AI, and Sustainable Engineering." },
  { q: "Is there a registration fee?", a: "Basic entry to the summit is free, but specific competitions like 'Pitch Wars' may have a nominal registration fee for logistics." },
  { q: "What is 'Stall Mania'?", a: "An exhibition-style event where startups can showcase their products/prototypes to a crowd of investors and 5000+ students." },
  { q: "How can I find a mentor during Udbhav?", a: "Networking sessions are built into the schedule, allowing direct 1-on-1 interaction with industry experts and IIM alumni." },
  { q: "What is the total prize pool?", a: "The 2026 edition boasts a cumulative prize pool and incubation support worth over ₹10 Lakhs." }
];

const FaqItem = ({ faq, index, activeIdx, setActiveIdx }) => {
  const isOpen = activeIdx === index;

  return (
    <div className="faq-box opacity-0 translate-y-20 mb-10">
      <div
        className={`
          relative overflow-hidden rounded-2xl transition-all duration-500
          ${isOpen
            ? 'shadow-[0_0_45px_rgba(212,175,55,0.35)]'
            : 'hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]'}
        `}
      >
        {/* Deep Gold Border */}
        <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-[#B8962E] via-[#D4AF37] to-[#8A6E1E] pointer-events-none" />

        {/* Pure Black Card */}
        <div className="relative rounded-2xl bg-black">
          {/* Subtle glossy highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

          <button
            onClick={() => setActiveIdx(isOpen ? null : index)}
            className="w-full py-7 px-8 flex justify-between items-center text-left group"
          >
            <div className="flex items-center gap-6">
              <span
                className={`font-mono text-sm tracking-widest transition-colors duration-500
                ${isOpen ? 'text-[#D4AF37]' : 'text-[#D4AF37]/70'}`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* QUESTION TEXT */}
              <span
                className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-500
                ${
                  isOpen
                    ? 'text-[#F6EEDD]'
                    : 'text-[#F6EEDD]/70 group-hover:text-[#7A1C1C]'
                }`}
              >
                {faq.q}
              </span>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="flex-shrink-0 ml-4 text-[#D4AF37]"
            >
              <FiChevronDown size={24} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Prominent Separator */}
                <div className="mx-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

                <div className="px-8 pb-8 pt-6 text-[#F6EEDD]/65 leading-relaxed text-base">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = document.querySelectorAll('.faq-box');

    boxes.forEach((box, i) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top bottom-=100px",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        delay: i % 2 * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen pb-32">
      <div className="max-w-4xl mx-auto px-6 pt-48">
        {/* Header */}
        <div className="mb-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F6EEDD]">
            You Asked,{" "}
            <span className="bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent">
              We Answered.
            </span>
          </h1>
        </div>

        {/* FAQ List */}
        <div className="relative z-10">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
