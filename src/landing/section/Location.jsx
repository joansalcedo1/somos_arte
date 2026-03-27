export default function Location() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-2">Encuéntranos</span>
                    <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">Nuestra <br /> <span className="text-accent-earth-dark">Ubicación</span></h3>
                    <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        Visítanos en nuestra academia ubicada en el corazón de la ciudad. 
                        Estamos comprometidos a brindar un espacio seguro y acogedor para que tus hijos puedan 
                        explorar su creatividad y desarrollar sus habilidades artísticas. ¡Te esperamos con los brazos abiertos!
                    </p>
                    <div className="mt-8 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                        <p className="font-bold text-neutral-900">Dirección:</p>
                        <p className="text-neutral-600">Cali, Valle del Cauca, Colombia</p>
                    </div>
                </div>
                
                <div className="w-full lg:w-2/3 h-[400px] md:h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.20286139206!2d-76.52711816848196!3d3.4201043264627247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6bf8705b7c7%3A0x4c7aca48ffaa381!2sAcademia%20Art%C3%ADstica%20Musical%20Somos%20Arte!5e0!3m2!1ses!2sco!4v1772747040767!5m2!1ses!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Somos Arte"
                        className="rounded-[2.5rem] shadow-2xl border-4 border-white"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}
