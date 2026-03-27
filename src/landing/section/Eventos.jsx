import React from "react";
import { motion } from "framer-motion";

export default function Eventos() {
    const eventos = [
        { titulo: "Ensamble musical", descripcion: "Nuestros estudiantes tienen la oportunidad de participar en un ensamble musical, donde pueden tocar juntos y aprender a colaborar como grupo.", imagen: "/fotos/presentacion.png" },
        { titulo: "Festival de arte", descripcion: "Organizamos un festival de arte anual donde los estudiantes pueden exhibir sus obras de arte. Es una celebración de la creatividad y el talento de nuestros estudiantes.", imagen: "/fotos/arteterapia.png" },
        { titulo: "Solista", descripcion: "Nuestros estudiantes tienen la oportunidad de presentarse como solistas en nuestro festival permitiendo compartir su talento con un público más amplio.", imagen: "/fotos/solista.png" }
    ]

    return (
        <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Lado de los Eventos (Grilla de Tarjetas) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
                    {eventos.map((evento, index) => {
                        const esElTercero = index === 2;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white flex flex-col p-6 rounded-[2.5rem] shadow-xl border border-neutral-100 transition-all hover:shadow-2xl hover:-translate-y-1 ${esElTercero ? "md:col-span-2" : "col-span-1"}`}
                            >
                                <div className="w-full aspect-video rounded-[2rem] mb-6 overflow-hidden shadow-inner bg-neutral-50">
                                    <img src={evento.imagen} alt={evento.titulo} className="h-full w-full object-cover" loading="lazy" />
                                </div>

                                <div className="flex flex-col flex-1 px-2">
                                    <h3 className="text-xl font-black uppercase tracking-tight text-accent-gold mb-3">
                                        {evento.titulo}
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                                        {evento.descripcion}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Lado del Texto (Sticky en Desktop) */}
                <div className="lg:sticky lg:top-32 h-fit order-1 lg:order-2 text-center lg:text-left">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-xs block mb-4">Conoce nuestros eventos</span>
                    <div className="text-4xl md:text-6xl font-black leading-none text-neutral-900 uppercase tracking-tighter mb-8">
                        <h2>Tus hijos</h2>
                        <span className="bg-gradient-to-r from-accent-gold to-amber-600 bg-clip-text text-transparent">
                            podrán presentarse a grandes públicos
                        </span>
                    </div>
                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                        <p>
                            Subirse a un escenario otorga a los niños una voz propia. Les enseña a ocupar un espacio,
                            a proyectar seguridad y a entender que su talento tiene un impacto en la comunidad.
                        </p>
                        <p className="hidden md:block">
                            Es el laboratorio perfecto para formar los líderes del mañana, capaces de conectar con
                            las personas de forma auténtica.
                        </p>
                    </div>
                    
                    <div className="mt-10 flex justify-center lg:justify-start">
                        <div className="w-20 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
