import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Equipo = () => {
    const equipo = [
        {
            name: "Marcela Herrera",
            role: "Directora somos arte",
            description: "Licenciada en música de la Universidad del Valle. Se desempeña como docente de guitarra, teclado y técnica vocal. Integrante de Reales Trío.",
            image: "/fotos/directora.png"
        },
        {
            name: "Yudy Andra Gomez Arcila",
            role: "Directora somos arte",
            description: "Diseñadora gráfica y escritora. Autora de varios libros de poemas y educación. Tallerista del programa de expresión escrita.",
            image: "/fotos/diseñadora_grafica.png"
        },
        {
            name: "Hernando Gomez Rios",
            role: "Docente de música",
            description: "Músico profesional experto en formación de grupos vocales. Director del grupo Reales Trío y tallerista de guitarra.",
            image: "/fotos/guitarrista.png"
        },
        {
            name: "Diana Fernanda Gómez",
            role: "Psicóloga y tallerista",
            description: "Psicóloga con experiencia en proyectos de intervención social. Coordinadora de programas y orientadora en la academia.",
            image: "/fotos/psicologa.png"
        },
        {
            name: "Dario",
            role: "Docente de Percusión",
            description: "Especialista en percusión folclórica y contemporánea, con gran experiencia en la formación de ritmos tradicionales.",
            image: "/fotos/percusion.png"
        },
        {
            name: "Samuel",
            role: "Docente de piano",
            description: "Experto en piano latina y batería, apasionado por transmitir la energía del ritmo a través de la práctica grupal.",
            image: "/fotos/pianista.png"
        },
        {
            name: "Amelia",
            role: "Docente de Violín",
            description: "Violinista con formación clásica, dedicada a despertar la sensibilidad musical en niños y jóvenes mediante el violín.",
            image: "/fotos/violin.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3; // Número de tarjetas visibles a la vez en desktop

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (equipo.length - (cardsToShow - 1)));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    return (
        <section className="relative min-h-screen bg-accent-yellow flex flex-col overflow-hidden">
            <div className="mx-4 md:mx-40 py-20 px-5 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div>
                        <p className="text-accent-earth-dark font-bold tracking-widest uppercase text-xs">Conoce a los profesionales</p>
                        <h2 className="lg:text-6xl md:text-4xl font-black text-white mt-2 tracking-tighter">
                            Nuestro <span className="text-accent-earth-dark">equipo</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 max-w-xl">
                        <p className="text-lg">Este es el talentoso equipo de artistas y creativos que hacen posible Somos Arte.</p>
                        
                        {/* Controles del Carrusel */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <button 
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-all ${currentIndex === 0 ? "opacity-30" : "hover:bg-white hover:text-accent-yellow cursor-pointer"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextSlide}
                                disabled={currentIndex >= equipo.length - cardsToShow}
                                className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-all ${currentIndex >= equipo.length - cardsToShow ? "opacity-30" : "hover:bg-white hover:text-accent-yellow cursor-pointer"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white flex-1 p-8 border-t-3 border-accent-gold relative mt-20">
                <div className="mx-auto -mt-32 w-full max-w-7xl overflow-visible">
                    <motion.div 
                        className="flex gap-8"
                        animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * 2}rem)` }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {equipo.map((miembro, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[calc(100%/1-1rem)] md:min-w-[calc(100%/3-2rem)] flex flex-col gap-6 bg-white p-6 rounded-3xl border-t-3 border-accent-gold shadow-2xl"
                                whileHover={{ y: -10 }}
                            >
                                <div className="overflow-hidden rounded-3xl aspect-[3/4]">
                                    <img 
                                        src={miembro.image}
                                        alt={miembro.name}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-neutral-dark">{miembro.name}</p>
                                    <p className="text-md text-accent-gold font-semibold">{miembro.role}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-gray leading-relaxed">{miembro.description}</p>
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors cursor-pointer">
                                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Social" className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors cursor-pointer">
                                        <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" alt="Social" className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Equipo;
