import React from "react";
import bgNosotros from "../../data/nosotros.png";
import { motion, MotionConfig } from "framer-motion";
import TextoEscrito from "../../componentsd/TextoEscrito";
function Nosotros() {
    return (
        <section className="min-h-screen bg-neutral-300 mx-5 rounded-3xl relative">
            <div className="absolute top-1/2 left-1/2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="gray">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full items-center bg-cover bg-center rounded-3xl">

                {/* Columna izquierda */}
                <div className="flex flex-col px-12 my-3 gap-4 h-screen justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-bold text-2xl"
                    >
                        Nosotros
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-bold text-2xl"
                    >
                        Conoce sobre nuestra historia
                    </motion.span>
                </div>

                {/* Columna derecha — overflow visible y texto que respira */}
                <div className="flex flex-col px-10 my-3 gap-6 h-screen justify-center overflow-visible">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-bold text-2xl"
                    >
                        Somos arte
                    </motion.span>

                    <TextoEscrito
                        texto="Somos Arte nació el 9 de junio de 2009 como la materialización de un sueño compartido: Sembrar el amor por la cultura en el corazón de Candelaria. Lo que comenzó como un grupo de profesionales apasionados por la danza, la música y las artes plásticas, evolucionó en una misión de vida."
                        className="text-base leading-relaxed"
                        duration={0.008}
                    />

                    <TextoEscrito
                        texto="En 2011, impulsados por el deseo de expandir nuestro impacto, nos trasladamos a Cali. Nuestra visión trascendió la enseñanza para convertirnos en una fundación artística dedicada a fortalecer el tejido social del Valle del Cauca a través del arte."
                        className="text-base leading-relaxed"
                        duration={0.03}
                    />
                </div>
                <div className="absolute top-150 left-1/2 -translate-x-1/2">
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 10.5 }}
                    >
                        <span className="text-xs tracking-widest text-neutral-dark">SCROLL</span>
                        <div className="h-10 w-px bg-gradient-to-b from-neutral-gray/50 to-transparent"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;