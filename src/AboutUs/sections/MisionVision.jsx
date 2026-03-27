import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Magnet from "../../componentsd/Magnet";
import TextoEscrito from "../../componentsd/TextoEscrito";
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
            <section className="relative min-h-screen mx-4 md:mx-40 my-20 p-5 flex flex-col">
                <div className="flex flex-col lg:flex-row items-center p-4 min-h-[600px] m-4 rounded-3xl border-3 border-accent-gold shadow-xl bg-white">
                    <div className="w-full lg:w-2/3 group relative">
                        <div className="aspect-video bg-neutral-50 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-neutral-200 overflow-hidden relative">
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
                                                <TextoEscrito texto={`${datos[openIndex]?.title}`} />

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
                                    <TextoEscrito
                                        key={openIndex}
                                        texto={`${datos[openIndex]?.description}`}
                                        duration={0.008}
                                    />
                                </div>
                            </div>
                        </Magnet>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MisionVision