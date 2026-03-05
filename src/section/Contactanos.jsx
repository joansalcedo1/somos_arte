import { useState, useEffect } from "react";
import serviciosData from "../data/servicios.json"

export default function Contactanos() {
    const [servicios, setServicios] = useState(null)

    useEffect(() => {
        setServicios(serviciosData)
    }, [])
    return (
        <section className="h-screen bg-amber-300 px-15 py-10 ">
            <div className="grid grid-cols-2 gap-2 h-full ">
                <div className="flex flex-col justify-around ">
                    <form className="bg-white px-3 py-6">
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
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">Enviar</button>

                    </form>
                </div>
                <div className="flex items-center">
                </div>
            </div>
        </section>
    )
}