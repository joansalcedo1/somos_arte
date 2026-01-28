function nav() {
    return (
        <>
            <section className="p-3 shadow flex flex-row justify-around">
                <div id="nav_brand" className="cursor-pointer text-2xl font-semibold">
                    <h1 className="">Somos arte</h1>
                </div>
                <div className="flex flex-row justify-between gap-5 w-1/2">
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3">
                        Sobre nosotros
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3">
                        Galeria de fotos
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3">
                        Somos estilo
                    </div>
                    <div className="cursor-pointer hover:bg-amber-300 hover:text-white rounded px-3">
                        Otros servicios
                    </div>
                </div>
            </section>

        </>
    )
}

export default nav