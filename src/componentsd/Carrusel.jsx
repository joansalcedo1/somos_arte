import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carrusel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, items.length]); // Añadimos currentIndex para que el intervalo se reinicie al navegar manualmente

    // Funciones de navegación
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    if (!items || items.length === 0) return null;

    return (
        <div className="relative w-full mx-auto overflow-hidden group">
            {/* Contenedor del Carrusel */}
            <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                {items.map((item, i) => (
                    <div key={i} className="min-w-full aspect-video">
                        <img src={item} alt={`Imagen ${i}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </motion.div>

            {/* BOTONES CONTROLADORES */}
            {/* Botón Izquierda */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Botón Derecha */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Indicadores (Puntos) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            currentIndex === i ? "bg-white w-6" : "bg-white/50 w-2"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carrusel;