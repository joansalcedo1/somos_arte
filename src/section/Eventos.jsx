import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";

export default function Eventos() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50);
    });

    const eventos = [
        { titulo: "Esamble musical", descripcion: "Nuestros estudiantes tienen la oportunidad de participar en un ensamble musical, donde pueden tocar juntos y aprender a colaborar como grupo. ", imagen: null },
        { titulo: "Festival de arte", descripcion: "Organizamos un festival de arte anual donde los estudiantes pueden exhibir sus obras de arte. Es una celebración de la creatividad y el talento de nuestros estudiantes", imagen: null },
        { titulo: "Solista", descripcion: "Nuestros estudiantes tienen la oportunidad de presentarse como solistas en nuestro festival permitiendo compartir su talento con un público más amplio.", imagen: null }
    ]

    return (
        <>
            <section className="h-screen relative bg-white grid grid-cols-2 gap-6 py-15 px-25 m-10">
                <div className="grid grid-cols-2 gap-4 p-4">
                    {eventos.map((evento, index) => {
                        // Lógica para el tercer elemento cuando solo hay 3 en total
                        const esElTerceroDeTres = eventos.length === 3 && index === 2;

                        return (
                            <div
                                key={index}
                                className={`bg-white flex flex-col p-6 rounded-3xl shadow-lg border border-slate-100 transition-all hover:scale-[1.02]
          ${esElTerceroDeTres ? "col-span-2" : "col-span-1"}`}
                            >
                                {/* Contenedor de imagen o color (Bento Style) */}
                                <div className="w-full h-32 bg-neutral-light rounded-2xl mb-4 overflow-hidden">
                                    {/* Aquí podrías poner evento.imagen */}
                                    <div className="w-full h-full bg-gradient-to-br from-[#FDD835]/20 to-[#D4AF37]/20" />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-[#8B6F47] mb-2">
                                        {evento.titulo}
                                    </h3>
                                    <p className="text-neutral-gray text-sm leading-relaxed text-balance">
                                        {evento.descripcion}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="p-5 sticky self-start top-40 h-fit">
                    <p className=" text-sm font-light font-sans">Conoce nuestros eventos</p>
                    <div className="py-5 sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-dark uppercase tracking-tighter ">
                        <h2 className="">
                            Tus hijos
                        </h2>
                        <span className=" bg-gradient-to-r from-[#FCB900] to-[#D4AF37] bg-clip-text text-transparent">
                            podrán presentarse a grandes públicos
                        </span>
                    </div>
                    <p>
                        Subirse a un escenario otorga a los niños una voz propia. Les enseña a ocupar un espacio,
                        a proyectar seguridad y a entender que su talento tiene un impacto en la comunidad.
                        Es el laboratorio perfecto para formar los líderes del mañana, capaces de conectar con
                        las personas de forma auténtica.
                    </p>
                </div>
            </section>
        </>
    )
}