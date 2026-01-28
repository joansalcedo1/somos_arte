export default function Info_hero() {
    return (
        <>

            <div id="dad_text" className="p-4">
                <div id="titulo" className="p-4 text-center font-semibold">
                    <h1 className="text-3xl">Academia artistica somos arte</h1>
                </div>
                <div className="text-center p-4 font-light">
                    ¡El arte corre por nuestras venas!
                </div>

                <p className="p-4 ">
                    Por medio de talleres artisticos promovemos e incentivamos a la comunidad de la ciudad de Cali en el que hacer
                    artistico, con el fin de contribuir en la sensibilidad, creatividad, identidad cultural y bienestar social.
                </p>

            </div>
            <div id="dad_carrusel" className="m-3 p-4">
                <div className="bg-gray-400 rounded-2xl grid grid-cols-2 ps-4 pb-4">
                    {/*Las tarjetas del servicio deberian ser componentes*/}
                    <div id="info_servicio" className="pt-4">
                        <h3 id="titulo_servicio" className="text-lg font-semibold">Vacaciones artisticas</h3>
                        <p id="edad_servicio" className="font-light text-sm">3-13 años</p>
                    </div>
                    <div id="categorias_servicio" className="bg-white rounded-s-xl p-2">
                        {/* Las capsulas deberian ser componentes*/}
                        <div className="bg-red-400 text-white rounded-2xl p-1 text-md flex" >
                            Música
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div id="descripcion_servicio" className="grid grid-cols-2 gap-4 m-4">
                            <div id="img_servicio" className="border p-6 text-center h-full ">
                                "imagen en mp4"
                            </div>
                            <div id="text_servicio" className="p-4  ">
                                <p className="mb-5">
                                    Queremos ser una herramienta de recreacion, ocio recreativo, y enriquecedor
                                    que contribuya a la buena utilización del tiempo libre de los niños.
                                </p>
                                <div className="text-center mt-2">
                                    <button class="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
focus:ring-indigo-500 text-white px-4 py-2 rounded cursor-pointer">¡Agenda ya!</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}