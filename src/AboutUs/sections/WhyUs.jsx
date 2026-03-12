import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const valores = [
  {
    id: "sensibilidad",
    titulo: "Sensibilidad",
    descripcion: "Desarrollamos la capacidad de apreciar y crear belleza, conectando con las emociones a través de cada trazo y expresión artística.",
    imagen: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "identidad",
    titulo: "Identidad Cultural",
    descripcion: "Fortalecemos el sentido de pertenencia a nuestra comunidad caleña, rescatando nuestras raíces y proyectándolas al futuro.",
    imagen: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "bienestar",
    titulo: "Bienestar",
    descripcion: "Entendemos el arte como una herramienta de equilibrio y salud mental, impactando positivamente la calidad de vida de nuestros alumnos.",
    imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
  }
];

const WhyUs= ()=> {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen bg-white py-24 px-6 md:px-20 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: IMAGEN (Referencia Waabi) */}
        <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={valores[activeIndex].imagen}
              alt={valores[activeIndex].titulo}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* LADO DERECHO: SELECTOR VERTICAL */}
        <div className="flex flex-col gap-8">
          {valores.map((valor, index) => {
            const isActive = activeIndex === index;
            return (
                <div 
                  key={valor.id} 
                  className="cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={`text-4xl md:text-6xl font-black transition-all duration-500 tracking-tighter
                    ${isActive ? "text-neutral-900" : "text-neutral-300 hover:text-neutral-400"}`}>
                    {valor.titulo}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg text-neutral-500 mt-4 leading-relaxed max-w-md border-l-2 border-accent-gold pl-6">
                          {valor.descripcion}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;