const ImgHero = () => {
    return (
        <div className="h-full relative bg-accent-earth rounded-3xl text-white shadow-inner overflow-hidden min-h-[400px]">
            {/* Imagen de fondo */}
            <img src="../assets/hero-art.jpg" alt="Academia Somos Arte" className="w-full h-full object-cover opacity-80" />
            
            {/* Menú Flotante Lateral */}
            <div className="absolute w-1/5 h-48 bg-white top-0 left-0 flex flex-col font-bold rounded-br-3xl">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex-1 flex justify-center items-center text-neutral-900 hover:bg-accent-gold hover:text-white cursor-pointer transition-all duration-300">
                        0{num}
                    </div>
                ))}
            </div>

            {/* ESQUINA INVERTIDA (BOTTOM-LEFT del menú) */}
            <div className="absolute w-8 h-8 top-48 left-0 bg-white">
                <div className="w-full h-full bg-accent-earth rounded-tl-3xl"></div>
            </div>

            {/* ESQUINA INVERTIDA (TOP-RIGHT del menú) */}
            <div className="absolute w-8 h-8 top-0 left-[20%] bg-white">
                <div className="w-full h-full bg-accent-earth rounded-tl-3xl"></div>
            </div>
        </div>
    );
};

export default ImgHero;