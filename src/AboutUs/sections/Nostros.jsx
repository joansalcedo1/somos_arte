import React from "react";
import bgNosotros from "../../data/nosotros.png";
import { motion, MotionConfig } from "framer-motion";
import TextoEscrito from "../../componentsd/TextoEscrito";
function Nosotros() {
    return (
        <section className="min-h-screen bg-neutral-300  rounded-3xl relative bg-[url('/fotos/equipo_somosarte.png')] bg-cover bg-center">
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full items-center bg-cover bg-center rounded-3xl">

                {/* Columna izquierda */}
                <div className="flex flex-col px-12 my-3 gap-4 h-screen justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-bold text-lg"
                    >
                        <div id="dad_text h-full" className="p-4">
                            <div className="text-center p-4 text-sm font-bold text-accent-gold bg-accent-earth mx-60 rounded-2xl">
                                ¡El arte corre por nuestras venas!
                            </div>
                            <div id="titulo" className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter">
                                <h1 className="text-center">Academia artistica somos arte</h1>
                            </div>

                        </div>
                    </motion.span>
                </div>

                {/* Columna derecha — overflow visible y texto que respira */}
                <div className="flex flex-col px-10 my-3 gap-6 h-screen justify-center overflow-visible">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-lg md:text-lg text-accent-gold bg-accent-earth mx-60 rounded-2xl font-bold tracking-tighter"
                    >
                        <p className="text-center">Conoce sobre nuestra historia</p>
                    </motion.span>
                    <div className=" p-3 rounded-2xl">
                        <TextoEscrito
                            texto="Somos Arte nació el 9 de junio de 2009 como la materialización de un sueño compartido: Sembrar el amor por la cultura en el corazón de Candelaria. Lo que comenzó como un grupo de profesionales apasionados por la danza, la música y las artes plásticas, evolucionó en una misión de vida."
                            className="text-base leading-relaxed text-white"
                            duration={0.008}
                        />
                    </div>
                    <div className=" p-3 rounded-2xl">
                        <TextoEscrito
                            texto="En 2011, impulsados por el deseo de expandir nuestro impacto, nos trasladamos a Cali. Nuestra visión 
          trascendió la enseñanza para convertirnos en una fundación artística dedicada a fortalecer el tejido social del Valle del Cauca a través del arte."
                            className="text-base leading-relaxed text-white "
                            duration={0.03}
                        />
                    </div>
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