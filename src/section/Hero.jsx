import Info_hero from "../layout/Info_hero"
import Img_hero from "../layout/img_hero"

function Hero() {
    //Tratar de recibir la información a través de props
    return (
        <>
            <div id="dad" className="grid grid-cols-2 gap-2">
                <div id="info_dad" className="flex flex-col p-3 justify-around">
                    <Info_hero/>
                </div>
                <div id="info_img" className="p-3">
                    <Img_hero/>
                </div>

            </div>
        </>
    )
}


export default Hero