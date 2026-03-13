import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Magnet from "../../componentsd/Magnet";
const MisionVision = () => {
    const [openIndex, setOpenIndex] = useState(1);
    const datos = [
        {
            id: 1,
            title: "Misión",
            description: "Promover y difundir el arte como una herramienta lúdica y formativa que contribuye al desarrollo personal, espiritual y social del ser humano A través de talleres grupales, clases personalizadas y procesos de formación artística; la academia incentiva la participación de la comunidad de la ciudad de Cali, fortaleciendo la sensibilidad, la creatividad, la identidad cultural y el bienestar psicosocial de niños, jovenes y adultos, impactando positivamente su calidad de vida"
        },
        {
            id: 2,
            title: "Visión",
            description: "Para el año 2030 Somos Arte será reconocida en la ciudad de Cali y sus alrededores como una institución líder en formación artística y social, comprometida con el fomento del arte en la comunidad. A través de procesos formaivos de calidad, la academia contribuirá al desarrollo artístico, humano y social de niños, jovenes y adultos, trabajando de la mano con comunidades, escuelas, colegios y entidades públicas y privadas, promoviendo una formación integral que transforme vidas y fortaleca el tejido social "
        }
    ];
    function cambioInfo(index) {
        setOpenIndex(index);
    }
    return (
        <>
            <section className="relative h-screen  mx-40 my-20 p-5 flex flex-col ">
                <div className="flex items-center p-4 h-full m-4 rounded-3xl border-3 border-accent-gold shadow-xl">
                    <div className="mt-auto w-full group relative">
                        <div className="aspect-video bg-neutral-50 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-neutral-200 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={openIndex}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-8"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }} // Se activa al llegar
                                    viewport={{ once: true, amount: 0.3 }} // "once: true" para que no se repita, "amount: 0.3" para que inicie cuando se vea el 30% de la sección
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, ease: "easeIn" }}
                                >
                                    <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-gold">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                                        <AnimatePresence mode="wait">
                                            <motion.h4 className="lg:text-6xl font-bold px-10  md:text-3xl  text-neutral-900 leading-none  "
                                                key={openIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }} // Se activa al llegar
                                                viewport={{ once: true, amount: 0.3 }} // "once: true" para que no se repita, "amount: 0.3" para que inicie cuando se vea el 30% de la sección
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                            >
                                                {datos[openIndex]?.title}

                                            </motion.h4>
                                        </AnimatePresence>
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="absolute w-1/3 h-3/4 bottom-1/2 translate-y-1/2 right-0 z-10">
                        <Magnet padding={40} disabled={false} magnetStrength={10}>
                            <div className=" w-full h-1/2 bg-accent-gold py-10 px-12 text-white rounded-3xl shadow-lg md:text-md lg:text-lg">
                                <div className="flex flex-row px-5 gap-8 items-center justify-center py-2 ">
                                    <button onClick={() => cambioInfo(0)} className={`transition-colors py-3 px-9 rounded-2xl h-full font-bold hover:bg-amber-600 hover:cursor-pointer ${openIndex === 0 ? "bg-amber-700" : ""}`}>
                                        Mision
                                    </button>

                                    <button onClick={() => cambioInfo(1)} className={`transition-colors py-3 px-9 rounded-2xl h-full font-bold hover:bg-amber-600 hover:cursor-pointer ${openIndex === 1 ? "bg-amber-700" : ""}`}>
                                        Visión
                                    </button>
                                </div>
                                <div className="bg-white w-full h-0.5 mb-4"></div>
                                <div>
                                    <AnimatePresence mode="wait">

                                        <motion.p
                                            key={openIndex}
                                            initial={{ opacity: 0, y: -20, x: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }} // Se activa al llegar
                                            viewport={{ once: true, amount: 0.3 }} // "once: true" para que no se repita, "amount: 0.3" para que inicie cuando se vea el 30% de la sección
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >{datos[openIndex]?.description}</motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </Magnet>
                    </div>
                    {/*<div className="absolute  bg-blue-800 w-1/2 h-3/4 bottom-1/2 translate-y-1/2 right-0 p-5 rounded-lg text-white
                    md:text-sm ">
                        <div className="flex flex-row px-5 py-2 gap-8 items-center justify-center">
                            <motion.div
                                key={1}
                                onClick={() => setOpenIndex(1)}
                                className="font-bold hover:bg-gray-400 px-9">
                                Mision
                            </motion.div>
                            <motion.div
                                key={2}
                                onClick={() => setOpenIndex(2)}
                                className=" font-bold hover:bg-gray-400 px-9 hover:cursor-pointer">
                                Visión
                            </motion.div>
                        </div>
                        <div className="bg-black w-full h-0.5"></div>
                        <div className="flex justify-center items-center">
                            <p>Somos muy buenos amigos </p>
                            Ofrecer una educación artística de calidad que fomente la creatividad, la expresión y el desarrollo integral de nuestros estudiantes.
                            Promover el amor por el arte y la cultura, inspirando a nuestros alumnos a explorar su potencial artístico y a contribuir positivamente a la sociedad.
                            Crear un ambiente inclusivo y colaborativo donde cada estudiante pueda crecer como artista y como individuo.
                        </div>
                    </div>*/}
                </div>
            </section>
        </>
    )
}
export default MisionVision