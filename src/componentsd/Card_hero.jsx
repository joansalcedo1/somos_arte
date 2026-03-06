import Tag from "./Tag";

const CardHero = ( titulo,edad, desciprcion) => {
    return (
        <div className="card-hero">
            <div className="bg-neutral-light rounded-3xl overflow-hidden relative shadow-md">
                    {/* Contenedor Superior: Título + Píldoras */}
                    <div className="flex justify-between items-start">

                        {/* Info Izquierda */}
                        <div className="p-8 pb-4">
                            <h3 className="text-3xl font-bold text-neutral-dark">{titulo}</h3>
                            <p className="text-neutral-gray text-lg">{edad}</p>
                        </div>

                        {/* Sección Blanca de Píldoras */}
                        <div className="relative bg-white p-4 rounded-bl-3xl">
                            {/* --- TRUCO: Esquinas Invertidas --- */}
                            {/* Esquina superior izquierda (afuera del bloque blanco) */}
                            <div className="absolute top-0 -left-6 w-6 h-6 bg-white">
                                <div className="w-full h-full bg-neutral-light rounded-tr-3xl"></div>
                            </div>
                            {/* Esquina inferior derecha (afuera del bloque blanco) */}
                            <div className="absolute -bottom-6 right-0 w-6 h-6 bg-white">
                                <div className="w-full h-full bg-neutral-light rounded-tr-3xl"></div>
                            </div>
                            {/* ---------------------------------- */}

                            {/* Grid de Píldoras */}
                            <div className="grid grid-cols-2 gap-2">
                                <Tag color="bg-[#D4AF37]" text="Música" />
                                <Tag color="bg-[#FCB900]" text="Teatro" />
                                <Tag color="bg-[#E8B923]" text="Baile" />
                                <Tag color="bg-[#8B6F47]" text="Artes plásticas" />
                            </div>
                        </div>
                    </div>

                    {/* Contenedor Inferior: Imagen/Video + Descripción */}
                    <div className="p-8 pt-0 grid grid-cols-2 gap-6">
                        <div className="aspect-video bg-neutral-light rounded-xl border-2 border-neutral-border flex items-center justify-center italic text-neutral-gray">
                            "imagen en mp4"
                        </div>
                        <div className="flex flex-col justify-between py-2">
                            <p className="text-neutral-gray leading-relaxed">
                                {desciprcion}
                            </p>
                            <button className="bg-[#FCB900] hover:bg-[#E8B923] text-neutral-dark font-bold py-3 px-6 rounded-lg transition-colors w-max">
                                ¡Agenda ya!
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}



export default CardHero;