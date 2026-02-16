export default function Img_hero() {
    return (
        <>
            <div className="h-full relative bg-gray-500 rounded-2xl text-white text-center align-middle">
                <img src="../assets/react.svg" alt="foto de somos arte" />
                {/*Hacer el mismo truco que se realizó en el carrusel*/}

                
                <div className="absolute w-1/6 h-50 bg-white top-0 left-0 flex flex-col  font-bold text-center">
                {/*Falta esta esquina*/}
                    {/*<div className="absolute w-6 h-6 bottom-0 left-20 bg-white ">
                        <div className="w-full h-full bg-amber-500 "> </div>
                    </div>*/}
                    <div className="flex-1  flex text-center text-black justify-center items-center hover:bg-gray-300 onhover:text-white cursor-pointer">
                        01
                    </div>
                    <div className="flex-1 flex text-center text-black justify-center items-center hover:bg-gray-300 onhover:text-white cursor-pointer">
                        02
                    </div>
                    <div className="flex-1 flex text-center text-black justify-center items-center hover:bg-gray-300 onhover:text-white cursor-pointer">
                        03
                    </div>
                    <div className="absolute w-full h-10 opacity-40 bottom-0 left-0 bg-white ">
                    </div>
                </div>

                <div className="absolute w-6 h-6 top-50 left-0 bg-white">
                    <div className="w-full h-full bg-gray-500 rounded-tl-2xl"> </div>
                </div>

                <div className="absolute w-6 h-6 top-0 left-25 bg-white">
                    <div className="w-full h-full bg-gray-500 rounded-tl-2xl"> </div>
                </div>

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