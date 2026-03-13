import React from "react";
// Importamos la imagen directamente
import bgNosotros from "../../data/nosotros.png";
import { motion } from "framer-motion";
function Nosotros() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center m-5 rounded-3xl bg-gray-300">
            <div className="bg-gray-500">
                <h2 className="text-lg font-semibold text-white drop-shadow-lg">
                    Conoce sobre nuestra historia
                </h2>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Nosotros
            </h1>
            <div className="">
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 10.5 }}
                >
                <span className="text-xs tracking-widest text-gray-500">SCROLL</span>
                <div className="h-10 w-px bg-gradient-to-b from-gray-500/50 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default Nosotros;