import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import logo from '../assets/udbhav-logo.png';

const Footer = () => {
    return (
        <footer
            id="contact"
            className="py-20 px-6 bg-black border-t border-[#D4AF37]/30 relative overflow-hidden"
        >
            {/* Gold Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] opacity-100 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                
                {/* Logo + Description */}
                <div className="text-center md:text-left">
                    <img
                        src={logo}
                        alt="Udbhav 2026"
                        className="h-16 mb-5 object-contain mx-auto md:mx-0
                        drop-shadow-[0_0_10px_rgba(212,175,55,0.45)]"
                    />
                    <p className="text-[#F6EEDD]/60 text-sm font-inter max-w-xs leading-relaxed hover:text-[#D4AF37]">
                        The Annual Youth Summit & Entrepreneurial Extravaganza by IIC MNNIT Allahabad.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-8">
                    {[FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="
                                text-[#D4AF37]/70
                                hover:text-[#7A1C1C]
                                hover:-translate-y-1
                                transition-all
                                duration-300
                                text-2xl
                                drop-shadow-[0_0_6px_rgba(212,175,55,0.35)]
                                hover:drop-shadow-[0_0_10px_rgba(122,28,28,0.6)]
                            "
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-[#F6EEDD]/40 text-xs font-inter hover:text-[#D4AF37]">
                    <p>© 2026 Udbhav MNNIT. All rights reserved.</p>
                    <p className="mt-2 cursor-pointer transition-colors hover:text-[#D4AF37]">
                        Privacy Policy • Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
