import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. Import Router components
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import OverlapSection from './components/OverlapSection';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import LoginSuccess from './components/LoginSuccess'; // 2. Import your Success Page


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
    // 3. Wrap the entire application in BrowserRouter
    <BrowserRouter>
      <div className="bg-[var(--color-deep-bg)] min-h-screen text-white selection:bg-[var(--color-neon-cyan)] selection:text-black font-inter overflow-hidden">
        <CustomCursor />
        
        <Routes>
          {/* Route 1: Main Landing Page 
             This renders your entire existing scrollable website at the home path "/"
          */}
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Achievements />
                <OverlapSection />
                <Events />
                <Schedule />
                <Speakers />
                <Faqs />
              </main>
              <Footer />
            </>
          } />

          {/* Route 2: Login Success Callback
             This handles the redirect from Google (http://localhost:5000/login/success?token=...)
          */}
          <Route path="/login/success" element={<LoginSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;