export default function Img_hero() {
    return (
        <>
            <div className="relative bg-gray-500 rounded border text-white h-full text-center align-middle">
                <p className="text-center text-lg">Contenido del div</p>
                {/*Hacer el mismo truco que se realizó en el carrusel*/}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-500 rounded border"></div>
                <div className="absolute bottom-5 right-8">
                    <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Facebook</button>
                </div>

                <div className="absolute bottom-18 right-8">
                    <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Whatsapp</button>
                </div>

                <div className="absolute bottom-32 right-8">
                    <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Instagram </button>
                </div>
            </div>
        </>
    )
}