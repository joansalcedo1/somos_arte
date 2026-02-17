import Info_hero from "../layout/Info_hero"
import Img_hero from "../layout/Img_hero"

function Hero() {
    //Tratar de recibir la información a través de props
    return (
        <>
            <section className="min-h-screen grid grid-cols-2 gap-2 py-15 m-10">
                <div id="info_dad" className="flex flex-col justify-around">
                    <Info_hero />
                </div>
                <div id="info_img" className="">
                    <Img_hero />
                </div>
            </section>
        </>
    )
}


export default Hero