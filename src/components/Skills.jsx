import { motion } from "framer-motion";
import { FaJava, FaReact, FaAngular, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiPostgresql, SiMysql, SiTypescript, SiJavascript, SiC, SiCplusplus } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Java", icon: <FaJava size={40} className="group-hover:text-[#FFA518] transition-colors" /> },
        { name: "C", icon: <SiC size={40} className="group-hover:text-[#A8B9CC] transition-colors" /> },
        { name: "C++", icon: <SiCplusplus size={40} className="group-hover:text-[#00599C] transition-colors" /> },
        { name: "JavaScript", icon: <SiJavascript size={40} className="group-hover:text-[#F7DF1E] transition-colors" /> },
        { name: "TypeScript", icon: <SiTypescript size={40} className="group-hover:text-[#3178C6] transition-colors" /> },

        { name: "React", icon: <FaReact size={40} className="group-hover:text-[#61DAFB] transition-colors animate-[spin_10s_linear_infinite]" /> },
        { name: "Angular", icon: <FaAngular size={40} className="group-hover:text-[#DD0031] transition-colors" /> },
        { name: "Spring Boot", icon: <SiSpringboot size={40} className="group-hover:text-[#6DB33F] transition-colors" /> },
        { name: "Flutter", icon: <SiFlutter size={40} className="group-hover:text-[#02569B] transition-colors" /> },

        { name: "MySQL", icon: <SiMysql size={40} className="group-hover:text-[#4479A1] transition-colors" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={40} className="group-hover:text-[#336791] transition-colors" /> },
        { name: "Docker", icon: <FaDocker size={40} className="group-hover:text-[#2496ED] transition-colors" /> },
        { name: "Git", icon: <FaGitAlt size={40} className="group-hover:text-[#F05032] transition-colors" /> },
        { name: "Linux", icon: <FaLinux size={40} className="group-hover:text-white transition-colors" /> },
    ];

    return (
        <section id="skills" className="px-6 md:px-12 lg:px-[12%] py-32 text-white text-center relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-20 tracking-tight"
            >
                Mes compétences <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan">techniques</span>
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                    hidden: {}
                }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
                {skills.map((s, index) => (
                    <motion.div
                        key={s.name}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.4 } }
                        }}
                        className="group bg-[#ffffff05] backdrop-blur-xl border border-white/10 rounded-3xl py-10 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-3 hover:bg-white/10 hover:border-neon-purple hover:shadow-[0_0_25px_rgba(176,38,255,0.3)] relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="text-gray-400 relative z-10 transition-transform duration-300 group-hover:scale-110">
                            {s.icon}
                        </div>
                        <p className="font-medium text-gray-300 group-hover:text-white transition-colors relative z-10 pointer-events-none">{s.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
