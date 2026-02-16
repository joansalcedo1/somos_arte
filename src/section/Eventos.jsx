import Carrusel from "../componentsd/Carrusel"

export default function Eventos() {
    return (
        <section className="h-screen bg-amber-300 flex flex-col items-center p-6">
            <div id="portafolio_dad" className="w-full h-full  flex-1 flex rounded-4xl bg-green-400">
                <div className="flex-1 bg-white rounded-4xl">
                    <div className="group h-1/4 flex flex-col">
                        {/*Truco para hacer la esquina redondeada del bloque azul sin afectar el bloque blanco*/}
                        <div className="flex flex-row bg-cyan-900 rounded-t-3xl text-white w-full h-10 ">
                            <p className="px-4 py-2 bg-cyan-400 rounded-tl-2xl">
                                01
                            </p>
                            <p className="py-2 px-3">
                                Psicología y terapia ocupacional
                            </p>
                        </div>
                        <button className="">
                            Ver más detalles
                        </button>

                    </div>
                    <div className="group h-1/4 flex flex-col">
                        {/*Truco para hacer la esquina redondeada del bloque azul sin afectar el bloque blanco*/}
                        <div className="flex flex-row bg-cyan-900 rounded-t-3xl text-white w-full h-10 ">
                            <p className="px-4 py-2 bg-cyan-400 rounded-tl-2xl">01</p>
                            <p className="py-2 px-3"> refuerzo academico </p>
                        </div>
                        <button className="">
                            Ver más detalles
                        </button>

                    </div>
                    <div className="group h-1/4 flex flex-col">
                        {/*Truco para hacer la esquina redondeada del bloque azul sin afectar el bloque blanco*/}
                        <div className="flex flex-row bg-cyan-900 rounded-t-3xl text-white w-full h-10 ">
                            <p className="px-4 py-2 bg-cyan-400 rounded-tl-2xl">03</p>
                            <p className="py-2 px-3"> Reales grupo trío </p>
                        </div>
                        <button className="">
                            Ver más detalles
                        </button>

                    </div>
                    <div className="group h-1/4 flex flex-col items-center shadow-t-3xl"> {/* Agregamos items-center aquí */}
                        <div className="flex flex-row bg-cyan-900 rounded-t-3xl text-white w-full h-10 ">
                            <p className="px-4 py-2 bg-cyan-400 rounded-tl-2xl">04</p>
                            <p className="py-2 px-3 font-bold uppercase text-sm tracking-wider">Estudio de grabación</p>
                        </div>

                        <div className="mt-4 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-1 rounded-full">
                            <button className="text-white text-xs font-bold uppercase cursor-pointer">
                                ver más detalles
                            </button>
                        </div>
                    </div>


                </div>
                <div className="flex-2 bg-cyan-900 ps-4 pt-6 text-white"> {/* Agregué text-white por el fondo oscuro */}
                    <h4 className="font-bold text-2xl text-center mb-4">Ven al psicólogo</h4>

                    <div className="p-4 flex flex-col items-center"> {/* Flex col para apilar en columna */}

                        {/* Contenedor de texto con ancho máximo controlado */}
                        <div className="max-w-md text-center leading-relaxed">
                            <p className="text-balance">
                                Contamos con servicios profesionales que contribuyen
                                a la salud mental, emocional y académica,
                                ofreciendo el mejor servicio a tu alcance.
                            </p>
                        </div>

                        {/* Espacio para el carrusel */}
                        <div className="mt-8 w-full max-w-lg">
                            <div className="aspect-video bg-cyan-800 rounded-lg flex items-center justify-center border-2 border-dashed border-cyan-700">
                                <p className="text-sm italic opacity-70">Aquí va el carrusel de fotos, bro</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}