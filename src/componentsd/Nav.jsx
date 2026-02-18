import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";


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
                    <h1 className="">Somos arte</h1>
                </div>

                <div className="flex flex-row justify-between gap-5 w-1/2">
                    {/* ... tus links ... */}
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3 transition-colors">
                        Sobre nosotros mano
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3 transition-colors">
                        Galería de fotos
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3 transition-colors">
                        Somos estilo
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3 transition-colors">
                        Otros servicios
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;