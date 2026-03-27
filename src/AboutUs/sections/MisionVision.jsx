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
            img: "/fotos/presentacion.png",
            description: "Promover y difundir el arte como una herramienta lúdica y formativa que contribuye al desarrollo personal, espiritual y social del ser humano A través de talleres grupales, clases personalizadas y procesos de formación artística; la academia incentiva la participación de la comunidad de la ciudad de Cali, fortaleciendo la sensibilidad, la creatividad, la identidad cultural y el bienestar psicosocial de niños, jovenes y adultos, impactando positivamente su calidad de vida"
        },
        {
            id: 2,
            title: "Visión",
            img: "/fotos/psicologia.png",
            description: "Para el año 2030 Somos Arte será reconocida en la ciudad de Cali y sus alrededores como una institución líder en formación artística y social, comprometida con el fomento del arte en la comunidad. A través de procesos formaivos de calidad, la academia contribuirá al desarrollo artístico, humano y social de niños, jovenes y adultos, trabajando de la mano con comunidades, escuelas, colegios y entidades públicas y privadas, promoviendo una formación integral que transforme vidas y fortaleca el tejido social "
        }
    ];
    function cambioInfo(index) {
        setOpenIndex(index);
        console.log(datos[openIndex].img)
    }
    return (
        <>
            <section className="relative min-h-screen mx-4 md:mx-40 my-20 p-5 flex flex-col">
                <div className="flex flex-col lg:flex-row items-center p-4 min-h-[600px] m-4 rounded-3xl border-3 border-accent-gold shadow-xl bg-white overflow-hidden">
                    <div className="w-full lg:w-2/3 group relative">
                        <div 
                        style={{ backgroundImage: `url(${datos[openIndex].img})` }}
                            className={`aspect-video bg-cover bg-center rounded-[2rem] flex items-center justify-center overflow-hidden relative`}
                            
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={openIndex}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-8 z-10"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, ease: "easeIn" }}
                                >
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <AnimatePresence mode="wait">
                                        <motion.h4 className="lg:text-6xl font-bold px-10 md:text-3xl text-white leading-none relative z-20"
                                            key={openIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <TextoEscrito texto={`${datos[openIndex].title}`} />
                                        </motion.h4>
                                    </AnimatePresence>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center p-8 z-20">
                        <Magnet padding={40} disabled={false} magnetStrength={10}>
                            <div className="w-full bg-accent-gold py-10 px-12 text-white rounded-3xl shadow-lg">
                                <div className="flex flex-row gap-4 items-center justify-center py-2 mb-4">
                                    <button onClick={() => cambioInfo(0)} className={`transition-all py-2 px-6 rounded-xl font-bold hover:bg-amber-600 hover:cursor-pointer `}>
                                        Misión
                                    </button>
                                    <button onClick={() => cambioInfo(1)} className={`transition-all py-2 px-6 rounded-xl font-bold hover:bg-amber-600 hover:cursor-pointer`}>
                                        Visión
                                    </button>
                                </div>
                                <div className="bg-white/30 w-full h-px mb-6"></div>
                                <div className="min-h-[200px]">
                                    <TextoEscrito
                                        key={openIndex}
                                        texto={`${datos[openIndex].description}`}
                                        duration={0.008}
                                        className="text-lg leading-relaxed"
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
