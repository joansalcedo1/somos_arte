import Info_hero from "../layout/Info_hero"
import Img_hero from "../layout/Img_hero"

function Hero() {
    return (
        <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-8 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div id="info_dad" className="flex flex-col justify-center order-2 lg:order-1">
                <Info_hero />
            </div>
            <div id="info_img" className="order-1 lg:order-2 w-full">
                <Img_hero />
            </div>
        </section>
    )
}

export default Hero
