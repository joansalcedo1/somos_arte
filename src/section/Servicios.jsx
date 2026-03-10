import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serviciosData from "../data/servicios.json";

export default function Servicios() {
    const [openIndex, setOpenIndex] = useState(0); 
    const servicios = serviciosData || [];

    return (
        <section className="bg-neutral-50 min-h-screen flex flex-col items-center py-15 px-25 m-10 md:px-40">
            <header className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-gold font-bold tracking-widest uppercase text-xs"
                >
                    Nuestra Propuesta
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mt-2 tracking-tighter">
                    Servicios de <span className="text-accent-earth-dark">Inmersión Artística</span>
                </h2>
            </header>

            <div id="portafolio_dad" className="w-full relative flex flex-col lg:flex-row gap-8 items-start">

                {/* LADO IZQUIERDO: SELECTOR */}
                <div className="w-full lg:w-1/3 flex flex-col h-max gap-4 sticky top-60">
                    {servicios.map((item, index) => {
                        const isActive = openIndex === index;
                        return (
                            <motion.div
                                key={item.id}

                                onClick={() => setOpenIndex(index)}
                                className={`cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 border-2
                                    ${isActive ? "bg-white border-accent-gold shadow-2xl scale-105 z-10 top-20": " bg-white/50 border-transparent hover:border-neutral-200 opacity-70"}`}
                            >
                                <div className="flex items-center p-4 ">
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
                    className="flex-1 w-full bg-white rounded-[3rem] shadow-2xl border border-neutral-100 overflow-hidden flex flex-col min-h-[500px]"
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
                            <div className="flex justify-between items-start mb-8">
                                <h4 className="text-2xl md:text-3xl font-black text-neutral-900 leading-none max-w-sm">
                                    {servicios[openIndex]?.titulo}
                                </h4>
                                <div className="hidden md:block px-4 py-1 bg-neutral-100 rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                                    Detalle del Servicio
                                </div>
                            </div>

                            <p className="text-md text-neutral-600 leading-relaxed mb-10 max-w-2xl border-l-4 border-accent-gold pl-6">
                                {servicios[openIndex]?.descripcion}
                            </p>

                            {/* CARRUSEL O MULTIMEDIA PLACEHOLDER */}
                            <div className="mt-auto w-full group relative">
                                <div className="aspect-video bg-neutral-50 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-neutral-200 overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-8"
                                    >
                                        <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-gold">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                                            Explora la Galería Multimedia
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}