import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import OverlapSection from './components/OverlapSection';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[var(--color-deep-bg)] min-h-screen text-white selection:bg-[var(--color-neon-cyan)] selection:text-black font-inter overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <OverlapSection />
        <Events />
        <Schedule />
        <Speakers />
      </main>
      <Footer />
    </div>
  )
}

export default App
