import { AnimatePresence, motion } from "framer-motion";

const Equipo = () => {
    const equipo = [
        {
            animationAmount: 0.5,
            name: "Marcela Herrera",
            role: "Directora somos arte",
            description: "Licenciada  en música de la universidad del valle, estudiante en trabajo de grado de musicología en la misma universidad. Con  experiencia laboral como docente de música y expresión corporal en fundaciones, jardines infantiles y academias musicales. A demás de directiva,  se desempeña como docente de guitarra, teclado, técnica vocal en la academia somos arte. Es integrante de la agrupación musical reales trío como vocalista e intérprete de teclado y guitarra.",
            image: "https://previews.123rf.com/images/whiteshoes91/whiteshoes911802/whiteshoes91180200173/96147813-people-sport-4k-emotions-natural-and-lifestyle-concept-portrait-of-pretty-cute-girl-smiling.jpg"
        },
        {
            animationAmount: 0.7,
            name: "Yudy Andra Gomez Arcila",
            role: "Directora somos arte",
            description: "Egresada de la tecnología en Diseño gráfico de la Autónoma del Pacifico el año 2008. Escritora y Diseñadora de el libro de poemas “Mariposario”, Y es diseñadora de los libros Ventana de fragmentación , Cuentos Alígeros y el libro educativo “MiMar”.  además de ser directiva y diseñadora se desempeña como tallerista del programa de expresión escrita.",
            image: "https://previews.123rf.com/images/whiteshoes91/whiteshoes911802/whiteshoes91180200173/96147813-people-sport-4k-emotions-natural-and-lifestyle-concept-portrait-of-pretty-cute-girl-smiling.jpg"
        },
        {
            animationAmount: 0.9,
            name: "Hernando Gomez Rios",
            role: "Docente de música",
            description: "Músico profesional, experto en formación de grupos vocales e instrumentales. Perteneció a  la junta directiva y fue director artístico de la fundación del artista colombiano. Ha integrado importantes agrupaciones musicales de la ciudad de Cali. Actualmente es director del grupo musical “Reales Trió” y en la academia “Somos Arte” además de ser directivo se desempeña como Tallerista de guitarra y ensamble de voces.",
            image: "https://previews.123rf.com/images/whiteshoes91/whiteshoes911802/whiteshoes91180200173/96147813-people-sport-4k-emotions-natural-and-lifestyle-concept-portrait-of-pretty-cute-girl-smiling.jpg"
        },
        {
            animationAmount: 1,
            name: "Diana Fernanda Gómez",
            role: "Psicologa y tallerista",
            description: "Psicóloga con formación en áreas educativa, clínica y social. Conocimientos y experiencia en creación y ejecución de proyectos de intervención con población vulnerable. Experiencia en programas de prevención y promoción de la salud mental. Se ha desempeñado como  coordinadora de programas comunitarios y educativos, como Orientadora y directora de programas de educación para el trabajo y el desarrollo humano, Centro de desarrollo Infantil y Coordinación de programas de Inserción Laboral y empleabilidad. En la Academia Somos arte se desempeña como coordinadora de programas y psicóloga orientadora.",
            image: "https://previews.123rf.com/images/whiteshoes91/whiteshoes911802/whiteshoes91180200173/96147813-people-sport-4k-emotions-natural-and-lifestyle-concept-portrait-of-pretty-cute-girl-smiling.jpg"
        }
    ];
    return (
        <section className="relative h-screen bg-accent-yellow ">
            <div className="mx-40 my-30 py-20 px-5 grid">
                <div className="flex flex-row justify-center items-center gap-10 px-10 pt-8">
                    <div>
                        <p className="text-accent-earth-dark font-bold tracking-widest uppercase text-xs ">Conoce a los profesionales</p>
                        <h2 className="lg:text-6xl md:text-4xl font-black text-white mt-2 tracking-tighter">
                            Nuestro <span className="text-accent-earth-dark">equipo</span>
                        </h2>
                    </div>
                    <p className="text-lg">Este es el talentoso equipo de artistas y creativos que hacen posible Somos Arte.</p>
                </div>
            </div>
            <div className=" bg-white h-full grid grid-rows-1 p-4 border-t-3 border-accent-gold">
                <div className="bg-white absolute top-55 left-1/2 -translate-x-1/2 w-3/4 h-3/4 grid grid-cols-4 gap-8 p-10 border-t-3 rounded-3xl border-accent-gold">
                    {
                        equipo.map((miembro, index) => {
                            return (
                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -150, rotateX: 40 }}
                                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }} // Se activa al llegar
                                        viewport={{ once: true, amount: miembro.animationAmount }} // "once: true" para que no se repita, "amount: 0.3" para que inicie cuando se vea el 30% de la sección
                                        exit={{ opacity: 0, y: 20 }}
                                        whileHover={{ scale: 1.03, y: -5, shadow: "0px 25px 50px rgba(0, 0, 0, 0.15)" }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 80,   // Rigidez: Controla qué tan rápido "rebota" al final
                                            damping: 15
                                        }}
                                        className="flex flex-col gap-6 ">
                                        <img src={miembro.image}
                                            alt="Miembro del equipo"
                                            className="rounded-3xl" />
                                        <div className="">
                                            <p className="font-bold text-xl">{miembro.name}</p>
                                            <p className="text-md text-accent-yellow">{miembro.role}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-black">{miembro.description}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" className="w-8" />
                                            <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" alt="" className="w-8" />
                                            <img src="https://cdn-icons-png.flaticon.com/512/4926/4926635.png" alt="" className="w-8" />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}
export default Equipo;
