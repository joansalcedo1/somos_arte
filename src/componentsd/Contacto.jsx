export default function Contacto() {

    return (
        <>
            {/*panel de contacto a redes sociales*/}
            <section className="bg-white fixed bottom-0 right-0 w-full h-1">
                <div className=" fixed bottom-0 left-90 w-60 h-15 grid grid-cols-4 gap-2 rounded-t-2xl">
                    <div className="bg-white flex items-center justify-center rounded-t-2xl p-2 hover:cursor-pointer hover:bg-accent-gold hover:-translate-y-2.5 transition-all">

                        <a href="https://www.instagram.com/academia_somosarte/">
                            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="insta" />
                        </a>
                    </div>
                    {/*<div className="bg-white flex items-center justify-center rounded-t-2xl p-2 hover:cursor-pointer hover:bg-accent-gold hover:-translate-y-2.5 transition-all">
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" alt="" />
                        </a>
                    </div>*/}
                    <div className="bg-white flex items-center justify-center rounded-t-2xl p-2 hover:cursor-pointer hover:bg-accent-gold  hover:-translate-y-2.5 transition-all">
                        <a href="mailto:somosarte.academia2018@gmail.com">
                            <img src="https://cdn-icons-png.flaticon.com/512/4926/4926635.png" alt="" />
                        </a>
                    </div>
                    {/*<div className="bg-white flex items-center justify-center rounded-t-2xl p-2 hover:cursor-pointer hover:bg-accent-gold  hover:-translate-y-2.5 transition-all">
                        <a href="https://api.whatsapp.com/send?phone=573025557671&text=Hola%2C%20tengo%20tu%20informaci%C3%B3n%20de%20WhatsApp%20de%20tu%20web.">
                            <img src="https://cdn-icons-png.flaticon.com/512/1532/1532424.png" alt="" />
                        </a>
                    </div>*/}
                </div>
            </section>
        </>
    )
}