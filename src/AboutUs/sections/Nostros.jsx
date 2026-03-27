import React from "react";
import bgNosotros from "../../data/nosotros.png";
import { motion } from "framer-motion";
import TextoEscrito from "../../componentsd/TextoEscrito";

function Nosotros() {
    return (
        <section className="min-h-screen bg-neutral-900  relative bg-[url('/fotos/equipo_somosarte.png')] bg-cover bg-center overflow-hidden">
            {/* Capa de superposicion para legibilidad del texto */}
            <div className="absolute inset-0 bg-black/50 "></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen items-center z-10 px-6 md:px-16 py-20 lg:py-0">

                {/* Columna izquierda: Titulo Impactante */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                    >
                        <div className="inline-block px-6 py-2 text-sm font-bold text-accent-gold bg-accent-earth/80 backdrop-blur-sm rounded-full shadow-lg">
                            ¡El arte corre por nuestras venas!
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
                            Academia Artística <br />
                            <span className="text-accent-gold">Somos Arte</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Columna derecha: Historia con mejor contraste */}
                <div className="flex flex-col justify-center mt-10 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-black/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto lg:mx-0"
                    >
                        <p className="text-accent-gold font-bold mb-6 uppercase tracking-widest text-sm border-b border-accent-gold/30 pb-2 inline-block">
                            Conoce nuestra historia
                        </p>
                        
                        <div className="space-y-6">
                            <TextoEscrito
                                texto="Somos Arte nació el 9 de junio de 2009 como la materialización de un sueño compartido: Sembrar el amor por la cultura en el corazón de Candelaria. Lo que comenzó como un grupo de profesionales apasionados por la danza, la música y las artes plásticas, evolucionó en una misión de vida."
                                className="text-lg md:text-xl leading-relaxed text-white font-medium"
                                duration={0.005}
                            />
                            
                            <TextoEscrito
                                texto="En 2011, impulsados por el deseo de expandir nuestro impacto, nos trasladamos a Cali. Nuestra visión trascendió la enseñanza para convertirnos en una fundación artística dedicada a fortalecer el tejido social del Valle del Cauca a través del arte."
                                className="text-lg md:text-xl leading-relaxed text-white/90"
                                duration={0.01}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Indicador de Scroll optimizado */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">Desliza</span>
                        <div className="h-12 w-px bg-gradient-to-b from-accent-gold to-transparent"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;
