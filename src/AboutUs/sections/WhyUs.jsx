import ScrollStack, { ScrollStackItem } from "../../componentsd/ScrollStack";
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
  return (
    <section className="relative min-h-screen py-20 bg-neutral-light overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Lado Izquierdo: Cards */}
        <div className="order-2 lg:order-1 flex justify-center items-center relative min-h-[500px]">
          <CardSwap
            cardDistance={30}
            verticalDistance={30}
            delay={5000}
            pauseOnHover={false}
            width={400}
            height={300}
          >
            {VALORES.map((v) => (
              <Card key={v.id}>
                <div className={`w-full h-full ${v.color} p-8 flex flex-col justify-center items-center text-center rounded-3xl shadow-2xl border-2 border-white`}>
                  <h3 className="text-2xl font-black text-neutral-dark mb-4 uppercase">{v.title}</h3>
                  <p className="text-neutral-dark font-medium leading-relaxed">{v.desc}</p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Lado Derecho: Titulo */}
        <div className="order-1 lg:order-2 text-center lg:text-right">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold font-bold tracking-widest uppercase text-xs"
          >
            ¿Por qué elegirnos?
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mt-4 tracking-tighter leading-none">
            Nuestros
            <br />
            <span className="text-accent-earth-dark">Valores</span>
            <br />
            fundamentales
          </h2>
          <p className="mt-6 text-neutral-gray text-lg max-w-md ml-auto">
            En Somos Arte, creemos que cada niño es un artista en potencia. 
            Nuestra metodología se basa en pilares que transforman vidas.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;