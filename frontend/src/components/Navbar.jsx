import React from 'react';
import logo from '../assets/udbhav-logo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center glass">
            <a href="#" className="h-16 block">
                <img src={logo} alt="Udbhav 2026" className="h-full w-auto object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium font-inter">
                {['About', 'Tracks', 'Schedule', 'Speakers'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-[var(--color-neon-cyan)] transition-colors uppercase tracking-wider cursor-pointer"
                    >
                        {item}
                    </a>
                ))}
            </div>
            <button className="px-6 py-2 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all cursor-pointer font-orbitron text-sm">
                REGISTER
            </button>
        </nav>
    );
};

export default Navbar;
