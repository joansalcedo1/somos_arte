export default function Info_hero() {
    return (
        <div id="dad_text" className="p-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 text-sm font-bold text-accent-gold bg-accent-gold/10 rounded-full">
                ¡El arte corre por nuestras venas!
            </div>
            <div id="titulo" className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-tight uppercase">
                <h1>Academia Artística <br /> <span className="text-accent-gold">Somos Arte</span></h1>
            </div>
            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
                Por medio de talleres artísticos promovemos e incentivamos a la comunidad de la ciudad de Cali en el quehacer 
                artístico, con el fin de contribuir en la sensibilidad, creatividad, identidad cultural y bienestar social.
            </p>
            <div className="flex gap-4 pt-4">
                <button className="bg-accent-gold text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-accent-earth transition-all active:scale-95">
                    Ver Cursos
                </button>
            </div>
        </div>
    )
}
