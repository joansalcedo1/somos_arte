import { AnimatePresence, motion } from "framer-motion";

export default function Prueba() {
    return (
        <>
            <section className="grid grid-cols-2">
                <div className="bg-violet-500">
                    Hola amigos
                </div>
                <div className="bg-emerald-600 ">
                    Chao amigos
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-4 py-2 hover:bg-accent-earth bg-accent-gold rounded-2xl m-4 hover:cursor-pointer">Hola </motion.button>
                </div>
            </section>
        </>
    )
}