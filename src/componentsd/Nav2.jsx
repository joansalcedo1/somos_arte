import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: "/sobreNosotros", label: "Sobre nosotros" },
        { to: "/galeria", label: "Galería" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-2">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div id="nav_brand" className="cursor-pointer bg-accent-yellow hover:translate-y-1 px-4 py-2 rounded-3xl transition-all duration-200 shadow-md">
                    <NavLink to="/">
                        <img 
                            src="https://academiartisticasomosarte.com/wp-content/uploads/2020/01/Imagen-Academia-PNG.png" 
                            alt="Logo" 
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-stretch bg-accent-yellow rounded-3xl px-2 shadow-md">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to} className={({ isActive }) => `
                            px-6 py-3 flex items-center transition-all duration-200 font-medium
                            ${isActive ? 'bg-white text-accent-primary rounded-3xl font-bold px-2 transition-colors' : ' hover:bg-white hover:rounded-2xl hover:translate-y-1 hover:text-accent-primary'}
                        `}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <a href="https://www.instagram.com/academia_somosarte/" target="_blank" rel="noopener noreferrer">
                        <div className='px-6 py-2 cursor-pointer text-white font-bold bg-accent-gold hover:bg-accent-earth hover:translate-y-1 rounded-2xl transition-all duration-200 shadow-md'>
                            Contáctanos
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden p-3 bg-accent-yellow rounded-2xl shadow-md text-accent-earth-dark focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-accent-gold/20 md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.to} 
                                    to={link.to} 
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `
                                        px-6 py-4 rounded-2xl transition-all font-bold text-lg
                                        ${isActive ? 'bg-accent-yellow text-accent-earth-dark' : 'hover:bg-neutral-100'}
                                    `}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <a 
                                href="https://www.instagram.com/academia_somosarte/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 px-6 py-4 bg-accent-gold text-white text-center rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                            >
                                Contáctanos en Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Nav2
