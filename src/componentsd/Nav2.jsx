import React from 'react'
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
    return (
        <section>
            <nav className="fixed mx-2 top-0 left-0 right-0 z-50 transition-all flex flex-col-1 justify-between ">

                <div id="nav_brand" className="cursor-pointer text-2xl font-semibold bg-accent-yellow hover:translate-y-2.5  px-4 py-2 rounded-b-3xl transition-all duration-200">
                    <NavLink to="/"><img src="https://academiartisticasomosarte.com/wp-content/uploads/2020/01/Imagen-Academia-PNG.png"></img></NavLink>
                </div>

                <div className="flex flex-row  w-fit px-3 gap-2 bg-accent-yellow items-stretch rounded-b-3xl">
                    {/* Links con hover states consistentes en dorado */}
                    <NavLink to="/sobreNosotros">
                        <div className="cursor-pointer hover:bg-white hover:text-accent-primary hover:rounded-b-3xl hover:font-bold rounded px-4 py-2 h-full flex items-center transition-all duration-100">
                            Sobre nosotros
                        </div>
                    </NavLink>
                    <NavLink to="/galeria">
                        <div className="cursor-pointer hover:bg-white hover:text-accent-primary hover:rounded-b-3xl hover:font-bold rounded px-4 py-2 h-full flex items-center transition-all duration-300">
                            Galería
                        </div>
                    </NavLink>
                </div>
                <div className='flex mx-2 items-center justify-center  px-3 py-2 cursor-pointer my-1 text-white font-bold bg-accent-gold hover:font-bold  hover:bg-accent-earth hover:translate-y-2.5 hover:rounded-2xl rounded-2xl transition-all duration-200'>

                    <p className=''>Contactanos</p>

                </div>
            </nav>
        </section>
    )
}

export default Nav2
