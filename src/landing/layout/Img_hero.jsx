import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImgHero = () => {
  const [activeID, setActiveID] = useState(1);

  const images = [
    { id: 1, alt: "Academia musical", src: "/fotos/academia musical.png" },
    { id: 2, alt: "Clase de guitarra", src: "/fotos/guitar teach (2).png" },
    { id: 3, alt: "Clase de piano", src: "/fotos/piano teach 1.png" },
  ];

  const currentImage = images.find((img) => img.id === activeID);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square lg:h-[600px] bg-accent-earth rounded-[2.5rem] text-white shadow-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeID}
          src={currentImage?.src}
          alt={currentImage?.alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute w-16 md:w-20 h-48 bg-white/90 backdrop-blur-sm top-0 left-0 flex flex-col font-bold rounded-br-[2rem] z-10 shadow-xl border-r border-b border-neutral-100">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            onClick={() => setActiveID(num)}
            className={`flex-1 flex justify-center items-center cursor-pointer transition-all duration-300
              ${activeID === num ? "bg-accent-gold text-white shadow-inner" : "text-neutral-900 hover:bg-accent-gold/20"}`}
          >
            0{num}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </div>
  );
};

export default ImgHero;
