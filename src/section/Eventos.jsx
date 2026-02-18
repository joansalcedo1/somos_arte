import Carrusel from "../componentsd/Carrusel"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { button, div } from "framer-motion/client";

export default function Eventos() {
    const [openIndex, setOpenIndex] = useState("null");
    const divVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    }
    const servicios = [
        { id: 1, titulo: "Psicología y terapia ocupacional", desciprcion: "Contamos con servicios profesionales que contribuyen a la salud mental, emocional y académica, ofreciendo el mejor servicio a tu alcance.", imagen: null, contenidoOculto: "para niños de 3 a 5 años" },
        { id: 2, titulo: "Refuerzo académico", desciprcion: "Tenemos abierto un espacio de apoyo  académico donde los niños de nivel de básica primaria  podrán realizar refuerzo en el área de matemáticas, literatura e inglés y acompañamiento en tareas", imagen: null, contenidoOculto: "para niños de 5 a 7 años" },
        { id: 3, titulo: "Reales grupo trío", desciprcion: "agrupacion musical reconocida en Cali por incorporar a su instrumentacion el piano e instrumentos de cuerda. A lo largo de su carrera se han presentado en diferentes festivales importatnes municipales", imagen: null, contenidoOculto: "para niños de 7 a 10 años" },
        { id: 4, titulo: "Estudio de grabación", desciprcion: "Somos arte cuenta con un estudio de grabación aquí encontraras la mejor asesoría y todo lo necesario para hacer realidad tu creación musical.", imagen: null, contenidoOculto: "para niños de 10 a 12 años" },
    ]
    console.log(openIndex)
    return (
        <section className="h-screen bg-amber-300 items-center px-15 py-10 ">
            <div id="portafolio_dad" className="w-full  flex-1 flex rounded-4xl bg-green-400 ">
                <div className="p-4 gap-4 flex flex-col"> {/* Agregué gap para separar los bloques */}
                    {servicios.map((item, index) => (
                        <div key={item.id} className={` bg-white rounded-4xl ${openIndex === index ? "w-100 p-0 shadow-xl flex-2" : "flex-0"} cursor-pointer transition-shadow`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
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
                                            className="bg-amber-400 rounded-2xl text-center font-extrabold items-center flex justify-center p-4 transition-colors duration-300 hover:bg-amber-500">
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
                    <h4 className="font-bold text-2xl text-center mb-4">
                        {openIndex !== null ? servicios[openIndex].titulo : "Nuestros servicios"}
                    </h4>

                    <div className="p-4 flex flex-col items-center"> {/* Flex col para apilar en columna */}

                        {/* Contenedor de texto con ancho máximo controlado */}
                        <div className="max-w-md text-center leading-relaxed">
                            <p className="text-balance">
                                {openIndex !== null ? servicios[openIndex].desciprcion :"Presiona una tarjeta para conocer más"}
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