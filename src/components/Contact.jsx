import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="px-6 md:px-12 lg:px-[12%] py-32 text-center text-white relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(176,38,255,0.15)] relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-neon-purple/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-neon-pink/20 transition-colors duration-1000 will-change-transform"></div>

                <h2 className="text-4xl md:text-6xl mb-8 font-bold tracking-tight">
                    Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Contacter</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed relative z-10">
                    Disponible pour un <strong className="text-white font-medium">stage en développement logiciel</strong> ou ingénierie systèmes, je suis ouverte à toute opportunité de collaboration. N’hésitez pas à me contacter pour discuter de projets, opportunités professionnelles ou simplement échanger sur les technologies et l’ingénierie logicielle.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:hafssasalmi54@gmail.com"
                        className="group relative px-10 py-4 font-bold overflow-hidden rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-[0_0_20px_rgba(176,38,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Envoyer un email</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/hafssa-salmi-profil/"
                        target="_blank" rel="noopener noreferrer"
                        className="px-10 py-4 border border-white/30 rounded-full hover:bg-white/10 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-md transition-all font-medium"
                    >
                        LinkedIn
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/hafssasal/"
                        target="_blank" rel="noopener noreferrer"
                        className="px-10 py-4 border border-white/30 rounded-full hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all font-medium"
                    >
                        GitHub
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
