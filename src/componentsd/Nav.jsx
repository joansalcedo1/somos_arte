import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-semibold p-5 h-20 shadow flex flex-row items-center justify-around
            ${isScrolled ? 'bg-white-600/40 backdrop-blur-md text-[#FCB900]' : 'bg-[#FCB900]'}`}>

                <div id="nav_brand" className="cursor-pointer text-2xl font-semibold">
                    <NavLink to="/"> <h1 className="">Somos arte</h1></NavLink>
                </div>

                <div className="flex flex-row justify-between gap-5 w-1/2">
                    {/* Links con hover states consistentes en dorado */}
                    <NavLink to="/sobreNosotros">
                        <div className="cursor-pointer hover:bg-[#E8B923] hover:text-white rounded px-3 py-2 transition-all duration-300">
                            Sobre nosotros
                        </div>
                    </NavLink>
                    <NavLink to="/galeria">
                    <div className="cursor-pointer hover:bg-[#E8B923] hover:text-white rounded px-3 py-2 transition-all duration-300">
                        Galería
                    </div>
                    </NavLink>
                    <div className="cursor-pointer hover:bg-[#E8B923] hover:text-white rounded px-3 py-2 transition-all duration-300">
                        Servicios
                    </div>
                    <div className="cursor-pointer hover:bg-[#E8B923] hover:text-white rounded px-3 py-2 transition-all duration-300">
                        Contacto
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;