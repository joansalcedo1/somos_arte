export default function Location() {
    return (
        <>
            <section className="px-20 py-10 ">
                <div className="h-full w-full flex gap-5 ">
                    <div className="flex-1 flex flex-col justify-center items-start">
                        <h3 className="py-5 sm:text-4xl md:text-5xl font-extrabold leading-tight  tracking-tighter">Nuestra Ubicación</h3>
                        <p className="font-light">
                            Visítanos en nuestra academia ubicada en el corazón de la ciudad. 
                            Estamos comprometidos a brindar un espacio seguro y acogedor para que tus hijos puedan 
                            explorar su creatividad y desarrollar sus habilidades artísticas. ¡Te esperamos con los brazos abiertos!
                        </p>
                    </div>
                    <div className="flex-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.20286139206!2d-76.52711816848196!3d3.4201043264627247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6bf8705b7c7%3A0x4c7aca48ffaa381!2sAcademia%20Art%C3%ADstica%20Musical%20Somos%20Arte!5e0!3m2!1ses!2sco!4v1772747040767!5m2!1ses!2sco" // Asegúrate de usar la URL completa de "Embed"
                            width="900"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Somos Arte" // Es buena práctica por accesibilidad
                            className="rounded-2xl shadow-lg w-full" // Puedes usar Tailwind aquí
                        >
                        </iframe>
                    </div>

                </div>
            </section>
        </>
    )
}