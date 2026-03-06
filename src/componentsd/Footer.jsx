const footer = () => {
    return (
        <>
            <footer className="  px-15 py-10">
                <div className="grid grid-cols-3 gap-4">
                    <div className="mt-4 text-center" >
                        <h2 className="text-lg font-bold text-black">Academia Artística Somos Arte</h2>
                        <p className="text-sm text-gray-600">Dedicados a desarrollar el talento y la creatividad de los niños y jóvenes.</p>
                    </div>
                    <div className=" flex flex-col text-center ">
                        <p className="text-lg font-bold text-black">¡Gracias por ser parte de nuestra comunidad artística!</p>
                        <p className="text-sm text-gray-600">&copy; 2026 Academia Artística Somos Arte. Todos los derechos reservados.</p>
                        <div className="flex justify-items-center">


                        </div>
                    </div>
                    <div className="mt-4 text-center ">
                        <p className="text-lg font-bold text-black">Horarios de atención</p>
                        <div className="grid grid-cols-3">
                            <div className="py-3">
                                <p className="text-sm text-gray-600 font-bold">Lunes a Viernes:</p>
                                <p className="text-sm text-gray-600">8:00 AM - 11:30 PM</p>
                                <p className="text-sm text-gray-600">1:30 PM - 8:00 PM</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-bold">Sábados: </p>
                                <p className="text-sm text-gray-600">9:00 AM - 1:00 PM</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-bold">Domingos: </p>
                                <p className="text-sm text-gray-600">Cerrado</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mb-7 mt-4 grid-cols-3 grid text-center">
                    <p className="text-sm text-gray-600">Desarrollado por el equipo de Somos Arte.</p>
                    <div className=" text-lg font-bold text-black">
                        <p>contactanos</p>
                    </div>
                    <div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default footer;