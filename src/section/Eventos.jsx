import Carrusel from "../componentsd/Carrusel"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Eventos() {
    const [openIndex, setOpenIndex] = useState(0);
    const divVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    }
    const servicios = [
        { id: 1, titulo: "Psicología y terapia ocupacional", desciprcion: "Contamos con servicios profesionales que contribuyen a la salud mental, emocional y académica, ofreciendo el mejor servicio a tu alcance.", imagen: null,contenidoOculto:"para niños de 3 a 5 años" },
        { id: 2, titulo: "Refuerzo académico", desciprcion: "Contamos con servicios profesionales que contribuyen a la salud mental, emocional y académica, ofreciendo el mejor servicio a tu alcance.", imagen: null,contenidoOculto:"para niños de 5 a 7 años" },
        { id: 3, titulo: "Reales grupo trío", desciprcion: "Contamos con servicios profesionales que contribuyen a la salud mental, emocional y académica, ofreciendo el mejor servicio a tu alcance.", imagen: null,contenidoOculto:"para niños de 7 a 10 años" },
        { id: 4, titulo: "Estudio de grabación", desciprcion: "Contamos con servicios profesionales que contribuyen a la salud mental, emocional y académica, ofreciendo el mejor servicio a tu alcance.", imagen: null, contenidoOculto:"para niños de 10 a 12 años"},
    ]
    return (
        <section className="h-screen bg-amber-300 flex flex-col items-center p-6 ">
            <div id="portafolio_dad" className="w-full h-full flex-1 flex rounded-4xl bg-green-400 m-10">
                <div className="flex-1 flex flex-col">


                    {servicios.map((item, index) => (
                        <div key={item.id} className={`flex-1 flex flex-col bg-white rounded-4xl ${openIndex === index ? "shadow-lg" : ""} mb-6 cursor-pointer transition-shadow`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {/*Truco para hacer la esquina redondeada del bloque azul sin afectar el bloque blanco*/}
                            <div className="flex items-center bg-cyan-900 rounded-t-3xl text-white">
                                <p className="px-4 py-2 bg-cyan-400 rounded-tl-2xl">
                                    {item.id < 10 ? `0${item.id}` : item.id}
                                </p>
                                <h3 className="text-xl font-bold ">{item.titulo}</h3>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center flex-1 p-4"
                                    >
                                        <div className="">
                                            {item.contenidoOculto}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}



                </div>
                <div className="flex-2 bg-cyan-900 ps-4 pt-6 text-white"> {/* Agregué text-white por el fondo oscuro */}
                    <h4 className="font-bold text-2xl text-center mb-4">Ven al psicólogo</h4>

                    <div className="p-4 flex flex-col items-center"> {/* Flex col para apilar en columna */}

                        {/* Contenedor de texto con ancho máximo controlado */}
                        <div className="max-w-md text-center leading-relaxed">
                            <p className="text-balance">
                                Contamos con servicios profesionales que contribuyen
                                a la salud mental, emocional y académica,
                                ofreciendo el mejor servicio a tu alcance.
                            </p>
                        </div>

                        {/* Espacio para el carrusel */}
                        <div className="mt-8 w-full max-w-lg">
                            <div className="aspect-video bg-cyan-800 rounded-lg flex items-center justify-center border-2 border-dashed border-cyan-700">
                                <p className="text-sm italic opacity-70">Aquí va el carrusel de fotos, bro</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}