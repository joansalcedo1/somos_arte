import React from "react";
// Importamos la imagen directamente
import bgNosotros from "../../data/nosotros.png"; 

function Nosotros() {
    return (
        <section 
            style={{ backgroundImage: `url(${bgNosotros})` }}
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center m-5 rounded-3xl"
        >
            <div>
                
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Sobre Nosotros
            </h1>
        </section>
    );
}

export default Nosotros;