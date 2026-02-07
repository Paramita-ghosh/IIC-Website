import React, { useState, useEffect } from 'react';
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

    // 2. Login Handler
    const handleGoogleLogin = () => {
        // Redirects to your backend Google Auth route
        window.location.href = `${API_BASE_URL}/auth/google`;
    };

    // 3. Logout Handler
    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('userName');
        localStorage.removeItem('userImage');
        setUser(null);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center glass">
            {/* Logo Section */}
            <a href="#" className="h-16 block">
                <img 
                    src={logo} 
                    alt="Udbhav 2026" 
                    className="h-full w-auto object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" 
                />
            </a>

            {/* Navigation Links (Hidden on Mobile) */}
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

            {/* User Profile / Login Section */}
            <div>
                {user ? (
                    // --- LOGGED IN STATE ---
                    <div className="flex items-center gap-4">
                        {/* Profile Image & Name Container */}
                        <div className="flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                            <img 
                                src={user.image} 
                                alt={user.name}
                                referrerPolicy="no-referrer"
                                className="w-8 h-8 rounded-full object-cover border border-[var(--color-neon-cyan)]"
                                onError={(e) => {e.target.src = 'https://via.placeholder.com/32'}}
                            />
                            {/* Hide name on very small screens, show on others */}
                            <span className="text-[var(--color-neon-cyan)] font-orbitron text-xs sm:text-sm tracking-wide truncate max-w-[100px] sm:max-w-none">
                                {user.name.split(' ')[0]} {/* Display first name only to save space */}
                            </span>
                        </div>

                        {/* Logout Button */}
                        <button 
                            onClick={handleLogout}
                            className="text-xs text-white/70 hover:text-white uppercase tracking-wider transition-colors font-inter"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    // --- LOGGED OUT STATE ---
                    <button 
                        onClick={handleGoogleLogin}
                        className="px-6 py-2 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all cursor-pointer font-orbitron text-sm uppercase"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;