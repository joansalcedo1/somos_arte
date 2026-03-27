import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serviciosData from "../../data/servicios.json";

export default function Servicios() {
    const [openIndex, setOpenIndex] = useState(0);
    const servicios = serviciosData || [];

    return (
        <section className="bg-neutral-50 min-h-screen flex flex-col items-center py-12 px-6 md:py-20 md:px-12 lg:px-24">
            <header className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-gold font-bold tracking-widest uppercase text-xs"
                >
                    Nuestra Propuesta
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 tracking-tighter">
                    Servicios de <span className="text-accent-earth-dark">Inmersión Artística</span>
                </h2>
            </header>

            <div id="portafolio_dad" className="w-full max-w-7xl mx-auto relative flex flex-col lg:flex-row gap-8 items-start">

                {/* LADO IZQUIERDO: SELECTOR */}
                <div className="w-full lg:w-1/3 flex flex-col h-max gap-4 lg:sticky lg:top-32 z-20">
                    {servicios.map((item, index) => {
                        const isActive = openIndex === index;
                        return (
                            <motion.div
                                key={item.id}
                                onClick={() => setOpenIndex(index)}
                                className={`cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 border-2
                                    ${isActive ? "bg-white border-accent-gold shadow-2xl scale-[1.02] lg:scale-105 z-10" : "bg-white/50 border-transparent hover:border-neutral-200 opacity-70"}`}
                            >
                                <div className="flex items-center p-4">
                                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-mono font-bold text-sm transition-colors
                                        ${isActive ? "bg-accent-gold text-white" : "bg-neutral-100 text-neutral-400"}`}>
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </div>
                                    <h3 className={`ml-4 font-bold text-sm uppercase tracking-wider transition-colors ${isActive ? "text-neutral-900" : "text-neutral-500"}`}>
                                        {item.titulo}
                                    </h3>
                                </div>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                                                {item.contenidoOculto}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* LADO DERECHO: EL CANVAS DE DETALLE */}
                <motion.div
                    layout
                    className="flex-1 w-full bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-neutral-100 overflow-hidden flex flex-col min-h-[500px]"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={openIndex}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="p-8 md:p-12 flex flex-col h-full"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                                <h4 className="text-2xl md:text-4xl font-black text-neutral-900 leading-tight max-w-sm">
                                    {servicios[openIndex]?.titulo}
                                </h4>
                                <div className="px-4 py-1 bg-neutral-100 rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                                    Detalle del Servicio
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-10 max-w-2xl border-l-4 border-accent-gold pl-6">
                                {servicios[openIndex]?.descripcion}
                            </p>

                            <div className="mt-auto w-full group relative">
                                <div className="aspect-video bg-neutral-50 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-neutral-200 overflow-hidden shadow-inner">
                                    {servicios[openIndex]?.imagen ? (
                                        <motion.img 
                                            whileHover={{ scale: 1.05 }}
                                            src={servicios[openIndex]?.imagen} 
                                            alt={servicios[openIndex]?.titulo} 
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-neutral-300 font-bold uppercase tracking-widest">Vista previa no disponible</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
