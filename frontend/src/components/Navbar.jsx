import React, { useState } from 'react';
import logo from '../assets/udbhav-logo.png';
import { API_BASE_URL } from '../utils/config';

const Navbar = () => {

    const [user, setUser] = useState(() => {
        const savedJwt = localStorage.getItem('jwt');
        const savedName = localStorage.getItem('userName');
        const savedImage = localStorage.getItem('userImage');

        if (savedJwt && savedName && savedImage) {
            return { name: savedName, image: savedImage };
        }
        return null;
    });

    const handleGoogleLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/google`;
    };

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('userName');
        localStorage.removeItem('userImage');
        setUser(null);
    };

    return (
        <nav className="
            fixed top-0 left-0 w-full z-50
            px-6 py-4
            flex justify-between items-center
            bg-black/40
            backdrop-blur-xl
            border-b border-[#FFD56A]/20
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        ">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.05] to-transparent" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#FFD56A]/10 blur-[120px]" />

            {/* Logo */}
            <a href="#" className="h-16 relative z-10">
                <img 
                    src={logo} 
                    alt="Udbhav 2026" 
                    className="
                        h-full w-auto object-contain
                        drop-shadow-[0_0_12px_rgba(255,213,106,0.35)]
                    " 
                />
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-10 text-sm font-medium font-inter relative z-10">
                {['About', 'Tracks', 'Schedule', 'Speakers'].map((item) => (
                    <a
  key={item}
  href={`#${item.toLowerCase()}`}
  className="
    relative uppercase tracking-wider font-inter
    text-[#FFD56A]
    transition-all duration-300

    hover:text-[#7A1C1C]

    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-gradient-to-r
    after:from-[#7A1C1C] after:via-[#FFD56A] after:to-[#7A1C1C]
    after:shadow-[0_0_12px_rgba(122,28,28,0.8)]
    after:transition-all after:duration-300
    hover:after:w-full

    hover:drop-shadow-[0_0_10px_rgba(122,28,28,0.6)]
  "
>
  {item}
</a>

                ))}
            </div>

            {/* User / Login */}
            <div className="relative z-10">
                {user ? (
                    <div className="flex items-center gap-4">
                        {/* Profile capsule */}
                        <div className="
                            flex items-center gap-3
                            px-4 py-1.5
                            rounded-full
                            bg-black/50
                            border border-[#FFD56A]/40
                            backdrop-blur-md
                            shadow-[0_0_20px_rgba(255,213,106,0.25)]
                        ">
                            <img 
                                src={user.image} 
                                alt={user.name}
                                referrerPolicy="no-referrer"
                                className="
                                    w-8 h-8 rounded-full object-cover
                                    border border-[#FFD56A]
                                    shadow-[0_0_12px_rgba(255,213,106,0.6)]
                                "
                                onError={(e) => {e.target.src = 'https://via.placeholder.com/32'}}
                            />
                            <span className="
                                text-[#FFD56A]
                                font-orbitron
                                text-xs sm:text-sm
                                tracking-wide
                                truncate max-w-[100px] sm:max-w-none
                            ">
                                {user.name.split(' ')[0]}
                            </span>
                        </div>

                        {/* Logout */}
                        <button 
                            onClick={handleLogout}
                            className="
                                text-xs uppercase tracking-widest
                                text-[#F6EEDD]/60
                                hover:text-[#7A1C1C]
                                transition-colors
                            "
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={handleGoogleLogin}
                        className="
                            px-7 py-2.5
                            rounded-full
                            border border-[#FFD56A]
                            text-[#FFD56A]
                            font-orbitron text-sm uppercase tracking-wider
                            transition-all
                            hover:bg-gradient-to-r hover:from-[#7A1C1C] hover:to-[#FFD56A]
                            hover:text-black
                            hover:shadow-[0_0_30px_rgba(255,213,106,0.7)]
                        "
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
