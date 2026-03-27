import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Magnet from "../../componentsd/Magnet";
import TextoEscrito from "../../componentsd/TextoEscrito";

const MisionVision = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const datos = [
        {
            id: 1,
            title: "Misión",
            img: "/fotos/presentacion.png",
            description: "Promover y difundir el arte como una herramienta lúdica y formativa que contribuye al desarrollo personal, espiritual y social del ser humano. A través de talleres grupales, clases personalizadas y procesos de formación artística; la academia incentiva la participación de la comunidad de la ciudad de Cali, fortaleciendo la sensibilidad, la creatividad, la identidad cultural y el bienestar psicosocial."
        },
        {
            id: 2,
            title: "Visión",
            img: "/fotos/psicologia.png",
            description: "Para el año 2030 Somos Arte será reconocida en la ciudad de Cali y sus alrededores como una institución líder en formación artística y social, comprometida con el fomento del arte en la comunidad. A través de procesos formativos de calidad, la academia contribuirá al desarrollo artístico, humano y social de niños, jóvenes y adultos, promoviendo una formación integral."
        }
    ];

    function cambioInfo(index) {
        setOpenIndex(index);
    }

    return (
        <section className="relative min-h-screen py-20 px-4 md:px-12 flex items-center justify-center bg-neutral-50 overflow-hidden">
            <div className="max-w-7xl w-full relative flex flex-col items-center">
                
                {/* Contenedor Principal (Blanco de fondo) */}
                <div className="w-full relative flex flex-col lg:flex-row items-center p-4 md:p-10 lg:p-16 rounded-[3rem] border-4 border-accent-gold shadow-2xl bg-white overflow-visible">
                    
                    {/* 1. La Imagen (Base) */}
                    <div className="w-full lg:w-3/4 relative z-0">
                        <div 
                            style={{ backgroundImage: `url(${datos[openIndex]?.img})` }}
                            className="aspect-video bg-cover bg-center rounded-[2rem] flex items-center justify-center overflow-hidden relative shadow-inner "
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={openIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10 text-center p-6"
                                >
                                    <h4 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none uppercase tracking-tighter">
                                        <TextoEscrito texto={datos[openIndex]?.title} />
                                    </h4>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 2. El Cuadro Dorado (El que flota encima) */}
                    {/* En LG es absoluto a la derecha. En movil es relativo con margen negativo para subir */}
                    <div className="w-full lg:w-[42%] lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 z-20 -mt-16 lg:mt-0 px-4 lg:px-0">
                        <Magnet padding={40} disabled={false} magnetStrength={10}>
                            <div className="w-full bg-accent-gold p-8 md:p-12 text-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-4 border-white/20">
                                <div className="flex flex-row gap-3 mb-8">
                                    <button 
                                        onClick={() => cambioInfo(0)} 
                                        className={`flex-1 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all border-2 
                                        ${openIndex === 0 ? "bg-white text-accent-gold border-white" : "bg-transparent text-white border-white/30 hover:bg-white/10"}`}
                                    >
                                        Misión
                                    </button>
                                    <button 
                                        onClick={() => cambioInfo(1)} 
                                        className={`flex-1 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all border-2
                                        ${openIndex === 1 ? "bg-white text-accent-gold border-white" : "bg-transparent text-white border-white/30 hover:bg-white/10"}`}
                                    >
                                        Visión
                                    </button>
                                </div>
                                
                                <div className="bg-white/30 w-full h-px mb-8"></div>
                                
                                <div className="min-h-[220px] md:min-h-[180px]">
                                    <TextoEscrito
                                        key={openIndex}
                                        texto={datos[openIndex]?.description}
                                        duration={0.005}
                                        className="text-lg md:text-xl leading-relaxed font-bold"
                                    />
                                </div>
                            </div>
                        </Magnet>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MisionVision
