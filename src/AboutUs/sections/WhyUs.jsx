import ScrollStack, { ScrollStackItem } from "../../componentsd/ScrollStack";
import { motion } from "framer-motion";

const VALORES = [
  {
    id: 1,
    title: "Safe",
    desc: "The combination of advanced AI and neural simulation sets a new standard for the entire industry.",
    color: "bg-yellow-400"
  },
  {
    id: 2,
    title: "Scalable", 
    desc: "Our platform grows with your needs, ensuring a seamless expansion across different environments.",
    color: "bg-yellow-300"
  },
  {
    id: 3,
    title: "Practical",
    desc: "Built for the real world, focusing on immediate impact and efficient autonomous transportation.",
    color: "bg-yellow-200"
  }
];

function WhyUs() {
  return (
    <section>
      {/* Header con z-index explícito para no ser afectado por el stacking context del ScrollStack */}
      <div className="relative z-10 text-center py-20 px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-gold font-bold tracking-widest uppercase text-xs"
        >
        ¿Por qué elegirnos?
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mt-2 tracking-tighter">
          Nuestros
          <span className="text-accent-earth-dark"> Valores fundamentales </span>
        </h2>
      </div>

      <ScrollStack
        useWindowScroll={true}
        itemDistance={80}
        itemStackDistance={10}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.85}
        itemScale={0.03}
      >
        {VALORES.map((v) => (
          <ScrollStackItem key={v.id} itemClassName={`${v.color} min-h-[400px]`}>
            <h2 className="text-4xl font-bold mb-6">{v.title}</h2>
            <p className="text-xl">{v.desc}</p>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}

export default WhyUs;