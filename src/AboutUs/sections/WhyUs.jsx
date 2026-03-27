import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardSwap from "../../componentsd/CardSwap";
import { Card } from "../../componentsd/CardSwap";

const VALORES = [
  {
    id: 1,
    title: "Creatividad",
    desc: "Fomentamos la libre expresión y el desarrollo del pensamiento creativo en cada estudiante.",
    color: "bg-accent-primary"
  },
  {
    id: 2,
    title: "Pasión",
    desc: "Transmitimos el amor por el arte como motor fundamental para el aprendizaje y la excelencia.",
    color: "bg-accent-yellow"
  },
  {
    id: 3,
    title: "Formación Integral",
    desc: "Buscamos el desarrollo no solo artístico, sino también humano y espiritual de nuestros jóvenes.",
    color: "bg-accent-gold"
  }
];

function WhyUs() {
  const [cardSize, setCardSize] = useState({ width: 400, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardSize({ width: window.innerWidth - 60, height: 350 });
      } else if (window.innerWidth < 768) {
        setCardSize({ width: 400, height: 300 });
      } else {
        setCardSize({ width: 450, height: 320 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen py-16 md:py-24 bg-neutral-50 overflow-hidden flex items-center border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

        {/* Lado Titulo (Ahora arriba en movil para mejor flujo) */}
        <div className="text-center lg:text-right order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-gold font-bold tracking-widest uppercase text-xs block mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
              Nuestros
              <br />
              <span className="text-accent-earth-dark">Valores</span>
              <br />
              fundamentales
            </h2>
            <p className="mt-8 text-neutral-600 text-lg md:text-xl max-w-md mx-auto lg:ml-auto lg:mr-0 leading-relaxed font-medium">
              En Somos Arte, creemos que cada niño es un artista en potencia. 
              Nuestra metodología se basa en pilares que transforman vidas.
            </p>
          </motion.div>
        </div>

        {/* Lado Cards (Abajo en movil) */}
        <div className="order-2 lg:order-1 flex justify-center items-center relative min-h-[400px] md:min-h-[500px] mt-10 lg:mt-0">
          <div className="relative z-10">
            <CardSwap
              cardDistance={window.innerWidth < 640 ? 20 : 30}
              verticalDistance={window.innerWidth < 640 ? 20 : 30}
              delay={4000}
              pauseOnHover={true}
              width={cardSize.width}
              height={cardSize.height}
            >
              {VALORES.map((v) => (
                <Card key={v.id}>
                  <div className={"w-full h-full  p-8 md:p-12 flex flex-col justify-center items-center text-center rounded-[2.5rem] shadow-2xl border-4 border-white/50 backdrop-blur-sm transition-all"}>
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 uppercase tracking-tight">{v.title}</h3>
                    <p className="text-neutral-800 text-lg md:text-xl font-bold leading-snug">{v.desc}</p>
                    <div className="mt-8 w-12 h-1 bg-neutral-900/20 rounded-full"></div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
          
          {/* Decoración de fondo para movil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl -z-10 lg:hidden"></div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
