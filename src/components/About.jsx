import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 lg:px-[12%] text-center text-white relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
            >
                À propos <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">de moi</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group"
            >
                {/* Glow behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light text-left md:text-center relative z-10">
                    Étudiante en <strong className="text-white font-medium">Génie Logiciel</strong> à l’EST Fès, passionnée par
                    l’ingénierie logicielle, l’architecture des systèmes et les technologies de développement modernes. <br className="hidden md:block" /><br className="hidden md:block" />
                    Je possède une solide expérience académique et professionnelle dans la conception d’applications web et mobiles ainsi que dans la mise en
                    place de solutions de supervision réseau utilisant <span className="text-neon-pink">SNMP, Nagios et Cacti</span>. <br className="hidden md:block" /><br className="hidden md:block" />
                    Je recherche actuellement un <strong className="text-neon-cyan/90 font-medium">stage en développement logiciel</strong> ou ingénierie systèmes afin de contribuer à des projets innovants tout en renforçant mes compétences techniques et professionnelles.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-5 grid-cols-2 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
                {["Rigueur", "Travail en équipe", "Autonomie", "Créativité", "Analyse"].map((s, index) => (
                    <div
                        key={s}
                        className="group relative bg-[#ffffff05] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-neon-purple/50 cursor-default shadow-sm hover:shadow-lg"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 font-medium text-gray-300 group-hover:text-white transition-colors">
                            {s}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
