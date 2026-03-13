import ScrollStack, { ScrollStackItem } from "../../componentsd/ScrollStack";
import { motion } from "framer-motion";
import CardSwap from "../../componentsd/CardSwap";
import { Card } from "../../componentsd/CardSwap";
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

      <div className="top-10">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
}

export default WhyUs;