import { motion } from "framer-motion";

const TextoEscrito = ({ texto, className = "" ,duration}) => {
  // 1. Dividimos el texto en un array de caracteres
  const letras = Array.from(texto);

  // 2. Variantes para el contenedor (el orquestador)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration, // <--- Velocidad de escritura (segundos entre letras)
      },
    },
  };

  // 3. Variantes para cada letra individual
  const letraVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline-block" 
    },
  };

  return (
    <motion.p
  variants={containerVariants}
  initial="hidden"
  animate="visible"  
  className={className}
>
      {letras.map((letra, index) => (
        <motion.span key={index} variants={letraVariants}>
          {letra === " " ? "\u00A0" : letra}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextoEscrito;