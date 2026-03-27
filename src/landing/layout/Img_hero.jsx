import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImgHero = () => {

  const [activeID, setActiveID] = useState(1);

  const images = [
    {
      id: 1,
      alt: "Esta es la academia musical",
      src: "/fotos/academia musical.png",
    },
    {
      id: 2,
      alt: "Esta es la academia musical 2",
      src: "/fotos/guitar teach (2).png",
    },
    {
      id: 3,
      alt: "Esta es la academia musical 3",
      src: "/fotos/piano teach 3.png",
    },
  ];


  const currentImage = images.find((img) => img.id === activeID);

  return (
    <div className="h-full relative bg-accent-earth rounded-3xl text-white shadow-inner overflow-hidden min-h-100 me-10">
      
      <AnimatePresence mode="wait">
        <motion.img
          key={activeID} 
          src={currentImage?.src}
          alt={currentImage?.alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute w-1/5 h-48 bg-white top-0 left-0 flex flex-col font-bold rounded-br-3xl z-10">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            onClick={() => setActiveID(num)}
            className={`flex-1 flex justify-center items-center cursor-pointer transition-all duration-300
              ${activeID === num 
                ? "bg-accent-gold text-white rounded-e-2xl" 
                : "text-neutral-900 hover:bg-accent-gold/20 rounded-e-2xl"}`}
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