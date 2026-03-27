import DomeGallery from "./section/DomeGallery";

export default function Galeria() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="relative w-full h-screen overflow-hidden">
                    <DomeGallery
                        fit={0.8}
                        minRadius={800}
                        maxVerticalRotationDeg={15}
                        segments={34}
                        dragDampening={2}
                        grayscale={false}
                        className="display"
                    />
                </div>
            </section>
        </>
    )
}