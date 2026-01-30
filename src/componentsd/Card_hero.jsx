import Tag from "./Tag";

const CardHero = ( titulo,edad, desciprcion) => {
    return (
        <div className="card-hero">
            <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                    {/* Contenedor Superior: Título + Píldoras */}
                    <div className="flex justify-between items-start">

                        {/* Info Izquierda */}
                        <div className="p-8 pb-4">
                            <h3 className="text-3xl font-bold text-black">{titulo}</h3>
                            <p className="text-gray-500 text-lg">{edad}</p>
                        </div>

                        {/* Sección Blanca de Píldoras */}
                        <div className="relative bg-white p-4 rounded-bl-3xl">
                            {/* --- TRUCO: Esquinas Invertidas --- */}
                            {/* Esquina superior izquierda (afuera del bloque blanco) */}
                            <div className="absolute top-0 -left-6 w-6 h-6 bg-white">
                                <div className="w-full h-full bg-gray-200 rounded-tr-3xl"></div>
                            </div>
                            {/* Esquina inferior derecha (afuera del bloque blanco) */}
                            <div className="absolute -bottom-6 right-0 w-6 h-6 bg-white">
                                <div className="w-full h-full bg-gray-200 rounded-tr-3xl"></div>
                            </div>
                            {/* ---------------------------------- */}

                            {/* Grid de Píldoras */}
                            <div className="grid grid-cols-2 gap-2">
                                <Tag color="bg-red-500" text="Música" />
                                <Tag color="bg-yellow-500" text="Teatro" />
                                <Tag color="bg-green-600" text="Baile" />
                                <Tag color="bg-blue-800" text="Artes plásticas" />
                            </div>
                        </div>
                    </div>

                    {/* Contenedor Inferior: Imagen/Video + Descripción */}
                    <div className="p-8 pt-0 grid grid-cols-2 gap-6">
                        <div className="aspect-video bg-gray-300 rounded-xl border-2 border-gray-400 flex items-center justify-center italic">
                            "imagen en mp4"
                        </div>
                        <div className="flex flex-col justify-between py-2">
                            <p className="text-gray-700 leading-relaxed">
                                {desciprcion}
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-max">
                                ¡Agenda ya!
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}



export default CardHero;