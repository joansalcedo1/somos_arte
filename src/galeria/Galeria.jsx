import DomeGallery from "./section/DomeGallery";

export default function Galeria() {
    return (
        <>
            <div style={{ width: '100vw', height: '100vh' }}>
                <DomeGallery
                    fit={0.8}
                    minRadius={800}
                    maxVerticalRotationDeg={15}
                    segments={34}
                    dragDampening={2}
                    grayscale={false}
                />
            </div>
        </>
    )
}