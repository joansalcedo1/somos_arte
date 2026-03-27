import { useState, useEffect } from "react";
import serviciosData from "../../data/servicios.json";

export default function Contactanos() {
    const [servicios, setServicios] = useState(null)

    useEffect(() => {
        setServicios(serviciosData)
    }, [])

    return (
        <section className="min-h-screen bg-accent-yellow py-16 px-6 md:px-12 lg:px-24 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Texto Informativo (Primero en Móvil para contexto) */}
                <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 space-y-6">
                    <div className="text-4xl md:text-6xl font-black leading-tight text-white uppercase tracking-tighter">
                        <h2>Déjanos saber <br /> <span className="text-accent-earth-dark">qué necesitas</span></h2>
                    </div>
                    <p className="text-lg text-accent-earth-dark/90 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Si tienes alguna pregunta, inquietud o simplemente quieres saber más sobre nuestros servicios, 
                        no dudes en contactarnos. Estamos aquí para ayudarte y brindarte toda la información que necesites. 
                        ¡Esperamos saber de ti pronto!
                    </p>
                </div>

                {/* Formulario */}
                <div className="order-2 lg:order-1">
                    <form className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 border border-white/20">
                        <h3 className="text-3xl font-black text-neutral-900 tracking-tight">Contáctanos</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Nombre Completo *</label>
                                <input type="text" placeholder="Tu nombre" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-accent-gold outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Correo Electrónico *</label>
                                <input type="email" placeholder="tu@email.com" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-accent-gold outline-none transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Servicio</label>
                                <select className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-accent-gold outline-none transition-all appearance-none">
                                    <option value="">Selecciona un servicio</option>
                                    {servicios?.map((servicio, index) => (
                                        <option key={index} value={servicio.id}>{servicio.titulo}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Teléfono *</label>
                                <input type="tel" placeholder="WhatsApp / Tel" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-accent-gold outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Mensaje</label>
                            <textarea placeholder="¿En qué podemos ayudarte?" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-accent-gold outline-none transition-all h-32 resize-none"></textarea>
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="terms" className="w-5 h-5 rounded border-neutral-300 text-accent-gold focus:ring-accent-gold" />
                            <label htmlFor="terms" className="text-sm font-medium text-neutral-500 cursor-pointer">Acepto los términos y condiciones</label>
                        </div>

                        <button type="submit" className="w-full bg-accent-gold text-white py-4 rounded-2xl font-black text-lg uppercase tracking-widest shadow-lg hover:bg-accent-earth transition-all active:scale-[0.98]">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
