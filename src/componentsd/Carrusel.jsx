    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import Tag from "./Tag";

    const Carrusel = ({ items }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 5000);
            return () => clearInterval(interval);
        }, [items.length]);

        return (
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                {/* Contenedor del Carrusel */}
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {items.map((item, i) => (
                        <div key={i} id="card-hero" className="min-w-full px-4">
                            <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                                {/* Contenedor Superior: Título + Píldoras */}
                                <div className="flex justify-between items-start">

                                    {/* Info Izquierda */}
                                    <div className="p-8 pb-4">
                                        <h3 className="text-3xl font-bold text-black">{item.titulo}</h3>
                                        <p className="text-gray-500 text-lg">{item.edad}</p>
                                    </div>

                                    {/* Sección Blanca de Píldoras */}
                                    <div className="relative bg-white p-4 rounded-bl-3xl">
                                        {/* --- TRUCO: Esquinas Invertidas --- */}
                                        {/* Esquina superior izquierda (afuera del bloque blanco) */}
                                        <div className="absolute top-0 -left-6 w-6 h-6 bg-white">
                                            <div className="w-full h-full bg-gray-200 rounded-tr-3xl"></div>
                                        </div>
                                        {/* Esquina inferior derecha (afuera del bloque blanco) */}
                                        <div className="absolute -bottom-6 right-0 w-6 h-6 bg-white">
                                            <div className="w-full h-full bg-gray-200 rounded-tr-3xl"></div>
                                        </div>
                                        {/* ---------------------------------- */}

                                        {/* Grid de Píldoras */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <Tag color="bg-red-500" text="Música" />
                                            <Tag color="bg-yellow-500" text="Teatro" />
                                            <Tag color="bg-green-600" text="Baile" />
                                            <Tag color="bg-blue-800" text="Artes plásticas" />
                                        </div>
                                    </div>
                                </div>

                                {/* Contenedor Inferior: Imagen/Video + Descripción */}
                                <div className="p-8 pt-0 grid grid-cols-2 gap-6">
                                    <div className="aspect-video bg-gray-300 rounded-xl border-2 border-gray-400 flex items-center justify-center italic">
                                        {item.imagen ? item.imagen : "Sin imagen"}
                                    </div>
                                    <div className="flex flex-col justify-between py-2">
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.desciprcion}
                                        </p>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-max">
                                            ¡Agenda ya!
                                            <div id="id_oculto" className="hidden">
                                                {item.id}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Indicadores (Puntos) 
                <div className="flex justify-center mt-4 gap-2">
                    {items.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full transition-all ${currentIndex === i ? "bg-blue-600 w-4" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>*/}
            </div>
        );
    }

    export default Carrusel;