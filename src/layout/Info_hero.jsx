import Carrusel from "../componentsd/Carrusel"
export default function Info_hero() {
    return (
        <>

            <div id="dad_text" className="p-4">
                <div id="titulo" className="p-4 text-center font-semibold">
                    <h1 className="text-3xl">Academia artistica somos arte</h1>
                </div>
                <div className="text-center p-4 font-light">
                    ¡El arte corre por nuestras venas!
                </div>

                <p className="p-4 ">
                    Por medio de talleres artisticos promovemos e incentivamos a la comunidad de la ciudad de Cali en el que hacer
                    artistico, con el fin de contribuir en la sensibilidad, creatividad, identidad cultural y bienestar social.
                </p>

            </div>
            <div id="dad_carrusel" className="m-3 p-4">
                <Carrusel items={[
                    { titulo: "Taller de Pintura", edad: "Para todos los niveles", desciprcion: "Aprende técnicas de pintura en diferentes estilos." , imagen: <img src="src/assets/taller_pintura.jpg" controls className="w-full h-full object-cover"></img>, id: 1},
                    { titulo: "Danza Contemporánea", edad: "Para todos los niveles", desciprcion: "Desarrollar expresión corporal a través del movimiento.", imagen: <img src="src/assets/taller_danza.jpg" controls className="w-full h-full object-cover"></img>, id: 2 },
                    { titulo: "Teatro para Niños", edad: "Para todos los niveles", desciprcion: "Fomenta la creatividad y la expresión artística.", imagen: <img src="src/assets/taller_teatro.jpg" controls className="w-full h-full object-cover"></img>, id: 3 },
                ]} />
            </div>

        </>
    )
}