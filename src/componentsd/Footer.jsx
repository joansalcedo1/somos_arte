import React from "react";
// Importar iconos (ejemplo con Lucide o FontAwesome si los tienes)
// import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white px-6 md:px-20 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* COLUMNA 1: BRANDING */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-black tracking-tighter text-accent-yellow">
                        Somos Arte
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                        Dedicados a desarrollar el talento y la creatividad de los niños y jóvenes a través de una formación artística integral.
                    </p>
                    {/* Placeholder para Redes Sociales */}
                    <div className="flex gap-4 pt-4">
                        <div className="w-8 h-8 bg-neutral-800 rounded-full hover:bg-accent-yellow transition-colors cursor-pointer" />
                        <div className="w-8 h-8 bg-neutral-800 rounded-full hover:bg-accent-yellow transition-colors cursor-pointer" />
                        <div className="w-8 h-8 bg-neutral-800 rounded-full hover:bg-accent-yellow transition-colors cursor-pointer" />
                    </div>
                </div>

                {/* COLUMNA 2: HORARIOS (Diseño tipo Tabla) */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-bold border-b border-neutral-800 pb-2">Horarios de Atención</h3>
                    <ul className="text-sm space-y-3 text-neutral-400">
                        <li className="flex justify-between">
                            <span className="font-bold text-neutral-200">Lunes a Viernes</span>
                            <div className="text-right">
                                <p>8:00 AM - 11:30 AM</p>
                                <p>1:30 PM - 8:00 PM</p>
                            </div>
                        </li>
                        <li className="flex justify-between border-t border-neutral-800/50 pt-2">
                            <span className="font-bold text-neutral-200">Sábados</span>
                            <span>9:00 AM - 1:00 PM</span>
                        </li>
                        <li className="flex justify-between border-t border-neutral-800/50 pt-2">
                            <span className="font-bold text-neutral-200">Domingos</span>
                            <span className="text-accent-yellow/50">Cerrado</span>
                        </li>
                    </ul>
                </div>

                {/* COLUMNA 3: CONTACTO & NEWSLETTER */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-bold">Contáctanos</h3>
                    <p className="text-sm text-neutral-400">¿Tienes dudas? Escríbenos directamente.</p>
                    <button className="bg-accent-yellow text-neutral-900 font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform text-sm uppercase">
                        Enviar un mensaje
                    </button>
                    <div className="pt-4">
                        <p className="text-xs text-neutral-500 italic">Santiago de Cali, Colombia</p>
                    </div>
                </div>

            </div>

            {/* BARRA INFERIOR: LEGAL */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                <p>&copy; {currentYear} Academia Artística Somos Arte. Todos los derechos reservados.</p>
                <p>Desarrollado por <a href="https://xendigital.co/">XEN digital</a></p>
            </div>
        </footer>
    );
};

export default Footer;