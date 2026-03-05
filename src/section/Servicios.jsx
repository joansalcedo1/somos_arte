import Carrusel from "../componentsd/Carrusel"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { button, div } from "framer-motion/client";
import serviciosData from "../data/servicios.json"
export default function Servicios() {
    const [openIndex, setOpenIndex] = useState(0);
    const [servicios, setServicios] = useState(serviciosData)

    useEffect(() => {
        // Simulamos una llamada a una API para obtener los servicios
        // En este caso, simplemente usamos los datos importados
        setServicios(serviciosData);
    }, []);

    return (
        <section className="h-screen flex flex-col bg-amber-300 items-center px-15 py-10 ">
            <h3 className="text-center text-2xl font-bold">Nuestros Servicios</h3>
            <div id="portafolio_dad" className="w-full  flex-3 flex rounded-4xl bg-green-400 ">
                <div className="p-4 gap-4 flex  flex-col"> {/* Agregué gap para separar los bloques */}
                    {servicios.map((item, index) => (
                        <div key={item.id} className={` bg-white rounded-4xl ${openIndex === index ? "shadow-xl flex-2" : "flex-0"} transition-all duration-400 cursor-pointer`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {/*Truco para hacer la esquina redondeada del bloque azul sin afectar el bloque blanco*/}
                            <div className={`flex items-center bg-cyan-900 text-white ${openIndex === index ? "rounded-s-2xl" : "rounded-t-3xl"}`}>
                                <p className="px-2 py-2 bg-cyan-400 rounded-tl-2xl">
                                    {item.id < 10 ? `0${item.id}` : item.id}
                                </p>
                                <h3 className="text-xl font-bold ">{item.titulo}</h3>
                            </div>
                            <AnimatePresence>
                                {
                                    openIndex !== index && (
                                        <motion.div

                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="bg-white text-center font- rounded-b-2xl items-center flex justify-center p-4 transition-all duration-300 hover:bg-gray-300">
                                            Ver más
                                        </motion.div>
                                    )
                                }
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
                    ))
                    }
                </div>
                <div className="flex-2 rounded-e-4xl bg-cyan-900 ps-4 pt-6 text-white"> {/* Agregué text-white por el fondo oscuro */}
                    <h4 className="font-bold text-xl text-center ">
                        {openIndex !== null && servicios[openIndex]
                            ? servicios[openIndex].titulo
                            : "Selecciona un servicio"}
                    </h4>

                    <div className="p-4 flex flex-col items-center"> {/* Flex col para apilar en columna */}

                        {/* Contenedor de texto con ancho máximo controlado */}
                        <div className="max-w-md text-center leading-relaxed">
                            <p className="text-md">
                                {openIndex !== null ? servicios[openIndex].desciprcion : "Presiona una tarjeta para conocer más"}
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
            </div>{/*
            <div className="flex-1 text-center ms-4">
                <h4 className="text-4xl font-bold">Servicios</h4>
                <p className="font-light">
                    Atrevete a sorprender a tu hijo con el arte
                </p>
            </div>*/}
        </section>
    )
}