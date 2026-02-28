import { motion } from 'framer-motion';

export default function Header() {
    const base = import.meta.env.BASE_URL;

    return (
        <section id="top"
            className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.5 }}
                className="relative group"
            >
                <div className="absolute inset-0 bg-neon-purple/50 rounded-full blur-[25px] group-hover:bg-neon-pink/70 transition-all duration-700 will-change-transform"></div>
                <img src={`${base}assets/hafssa.png`}
                    className="relative w-48 h-48 object-cover rounded-full border-[3px] border-white/20 shadow-[0_0_30px_rgba(176,38,255,0.4)] transition-transform duration-500 hover:scale-105"
                    alt="Hafssa Salmi" />
            </motion.div>

            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl mt-8 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e0c3fc] to-neon-purple drop-shadow-[0_0_15px_rgba(176,38,255,0.3)]"
            >
                Hafssa Salmi
            </motion.h1>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300 font-light leading-relaxed px-4"
            >
                Étudiante en <span className="text-neon-cyan font-semibold">Génie Logiciel</span> spécialisée en développement Full-Stack,
                DevOps et supervision des systèmes réseaux. Je conçois des applications performantes et
                des <span className="text-neon-pink font-semibold">expériences mesmerisantes</span>.
            </motion.p>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 mt-10"
            >
                <a href="#projects"
                    className="group relative px-8 py-4 rounded-full font-bold overflow-hidden bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
                >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative">Voir mes projets</span>
                </a>

                <a href={`${base}assets/HAFSSA SALMI.pdf`} download
                    className="px-8 py-4 rounded-full font-medium border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    Télécharger CV
                </a>
            </motion.div>

        </section>
    )
}









