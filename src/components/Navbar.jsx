import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Custom Cakes', path: '/order' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between z-[1000] px-[9%] py-6 bg-white/90 backdrop-blur-md shadow-sm border-b-2 border-pink-50 transition-all">
            <Link to="/" className="text-[2.5rem] font-bold text-pink-600 font-dancing flex items-center gap-2">
                <img src="/image/icon/logo.png" alt="Logo" className="h-12" />
                XOXO Café
            </Link>

            <nav className={`fixed top-full left-0 right-0 bg-white border-t border-pink-100 p-8 clip-polygon transition-all duration-300 md:static md:bg-transparent md:border-none md:p-0 md:flex md:clip-none ${isOpen ? 'active-nav' : 'hidden md:flex'}`}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`block text-[1.7rem] text-brown-800 mx-4 my-4 md:my-0 md:inline-block hover:text-pink-400 font-poppins ${location.pathname === link.path ? 'text-pink-600 font-medium' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center text-[2rem] gap-4">
                <button
                    type="button"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    className="fas fa-bars md:hidden text-brown-800 cursor-pointer hover:text-pink-400 transition"
                    onClick={() => setIsOpen(!isOpen)}
                ></button>
            </div>
        </header>
    );
};

export default Navbar;
