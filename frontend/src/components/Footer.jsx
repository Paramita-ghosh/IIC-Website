import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import logo from '../assets/udbhav-logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="py-16 px-6 bg-black border-t border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-neon-purple)] blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <img src={logo} alt="Udbhav 2026" className="h-16 mb-4 object-contain mx-auto md:mx-0 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                    <p className="text-gray-400 text-sm font-inter max-w-xs">
                        The Annual Youth Summit & Entrepreneurial Extravaganza by IIC MNNIT Allahabad.
                    </p>
                </div>

                <div className="flex gap-8">
                    {[FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord].map((Icon, i) => (
                        <a key={i} href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 text-2xl">
                            <Icon />
                        </a>
                    ))}
                </div>

                <div className="text-center md:text-right text-gray-500 text-xs font-inter">
                    <p>© 2026 Udbhav MNNIT. All rights reserved.</p>
                    <p className="mt-1 hover:text-white transition-colors cursor-pointer">Privacy Policy • Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
