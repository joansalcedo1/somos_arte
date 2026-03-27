import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Equipo = () => {
    const equipo = [
        {
            name: "Marcela Herrera",
            role: "Directora Somos Arte",
            description: "Licenciada en música de la Universidad del Valle. Se desempeña como docente de guitarra, teclado y técnica vocal. Integrante de Reales Trío.",
            image: "/fotos/directora.png"
        },
        {
            name: "Yudy Andra Gomez Arcila",
            role: "Directora Somos Arte",
            description: "Diseñadora gráfica y escritora. Autora de varios libros de poemas y educación. Tallerista del programa de expresión escrita.",
            image: "/fotos/diseñadora_grafica.png"
        },
        {
            name: "Hernando Gomez Rios",
            role: "Docente de Música",
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
            role: "Docente de Piano",
            description: "Experto en piano latino y batería, apasionado por transmitir la energía del ritmo a través de la práctica grupal.",        
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
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else setCardsToShow(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (equipo.length - (cardsToShow - 1)));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    return (
        <section className="relative min-h-screen bg-accent-yellow flex flex-col overflow-hidden">
            <div className="max-w-7xl mx-auto py-16 px-6 md:py-24 md:px-12 text-center md:text-left">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="w-full lg:w-1/2">
                        <p className="text-accent-earth-dark font-bold tracking-widest uppercase text-xs">Conoce a los profesionales</p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mt-2 tracking-tighter leading-none">
                            Nuestro <span className="text-accent-earth-dark">equipo</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <p className="text-lg md:text-xl text-accent-earth-dark/80 font-medium">Este es el talentoso equipo de artistas y creativos que hacen posible Somos Arte.</p>

                        {/* Controles del Carrusel */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                aria-label="Anterior"
                                className={`w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-all ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-accent-yellow cursor-pointer shadow-lg active:scale-95"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Siguiente"
                                disabled={currentIndex >= equipo.length - cardsToShow}
                                className={`w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-all ${currentIndex >= equipo.length - cardsToShow ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-accent-yellow cursor-pointer shadow-lg active:scale-95"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex-1 p-6 md:p-12 border-t-4 border-accent-gold relative mt-16 pb-20">
                <div className="mx-auto -mt-24 md:-mt-32 w-full max-w-7xl overflow-hidden md:overflow-visible">
                    <motion.div
                        className="flex gap-6 md:gap-8"
                        animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * 1.5}rem)` }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {equipo.map((miembro, index) => (
                            <motion.div
                                key={index}
                                className="min-w-full sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.33%-2rem)] flex flex-col gap-6 bg-white p-6 md:p-8 rounded-3xl border-t-4 border-accent-gold shadow-2xl transition-all"
                                whileHover={{ y: -10 }}
                            >
                                <div className="overflow-hidden rounded-3xl aspect-[3/4] shadow-inner bg-neutral-100">
                                    <img
                                        src={miembro.image}
                                        alt={miembro.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-2xl text-neutral-900 tracking-tight">{miembro.name}</h3>
                                    <p className="text-md text-accent-gold font-bold uppercase tracking-wider">{miembro.role}</p>
                                </div>
                                <div>
                                    <p className="text-base text-neutral-600 leading-relaxed line-clamp-4">{miembro.description}</p>
                                </div>
                                <div className="flex gap-4 mt-auto pt-4 border-t border-neutral-100">
                                    <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-white transition-all cursor-pointer shadow-sm">
                                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Social" className="w-4 h-4 opacity-70 group-hover:invert" />
                                    </div>
                                    <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-white transition-all cursor-pointer shadow-sm">
                                        <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" alt="Social" className="w-4 h-4 opacity-70 group-hover:invert" />
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
