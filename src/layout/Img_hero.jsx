export default function Img_hero() {
    return (
        <>
            <div className="relative bg-gray-500 rounded border text-white h-full text-center align-middle">
                <p class="text-center text-lg">Contenido del div</p>

                <div class="absolute bottom-5 right-8">
                    <button class="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Facebook</button>
                </div>

                <div class="absolute bottom-18 right-8">
                    <button class="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Whatsapp</button>
                </div>

                <div class="absolute bottom-32 right-8">
                    <button class="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Instagram </button>
                </div>
            </div>
        </>
    )
}