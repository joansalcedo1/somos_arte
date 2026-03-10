import { useState, useEffect } from "react";
import serviciosData from "../data/servicios.json"

export default function Contactanos() {
    const [servicios, setServicios] = useState(null)

    useEffect(() => {
        setServicios(serviciosData)
    }, [])
    return (
        <section className="h-screen bg-accent-yellow py-15 px-25  ">
            <div className="grid grid-cols-2 gap-2 h-full m-10">
                <div className="flex flex-col justify-around">
                    <form className="bg-white px-6 py-10 h-2/3 rounded-3xl flex flex-col justify-between  shadow-2xl">
                        <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nombre Completo *</label>
                                <input type="text" placeholder="Nombre" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico *</label>
                                <input type="email" placeholder="Correo electrónico" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Servicio de interés</label>
                                <select className="block w-full p-2 mb-4 border border-gray-300 rounded">
                                    <option value="">Selecciona un servicio</option>
                                    {
                                        servicios?.map((servicio, index) => {
                                            return (
                                                <option key={index} value={servicio.id}>{servicio.titulo}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                                <input type="tel" placeholder="Número de teléfono" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                            </div>
                        </div>
                        <textarea placeholder="Mensaje" className="block w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
                        <div className="flex items-center">
                            <input type="checkbox" id="miCasilla" name="opcion1" value="valor" className="mr-2"></input>
                            <label for="miCasilla" class="block text-sm font-medium text-gray-300 mb-2">Acepto los términos y condiciones</label>
                        </div>
                        <button type="submit" className="bg-[#FCB900] text-neutral-dark px-4 py-2 rounded font-semibold hover:bg-[#E8B923] transition-colors duration-300">Enviar</button>

                    </form>
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                    <div className="py-5 sm:text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase tracking-tighter">
                        <h1>Dejanos saber qué necesitas</h1>
                    </div>
                    <p>
                        Si tienes alguna pregunta, inquietud o simplemente quieres saber más sobre nuestros servicios, 
                        no dudes en contactarnos. Estamos aquí para ayudarte y brindarte toda la información que necesites. 
                        ¡Esperamos saber de ti pronto!
                    </p>

                </div>
            </div>
        </section>
    )
}