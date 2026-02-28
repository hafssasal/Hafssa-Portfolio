import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProjectCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#ffffff05] backdrop-blur-sm p-3 shadow-[0_15px_30px_rgba(0,0,0,0.5)] w-full h-[350px] lg:h-[450px]">
                <img
                    src={images[0]}
                    className="w-full h-full object-contain bg-black/40 rounded-xl"
                    alt={`${title} screenshot`}
                />
            </div>
        );
    }

    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#ffffff05] backdrop-blur-sm p-3 shadow-[0_15px_30px_rgba(0,0,0,0.5)] w-full h-[350px] lg:h-[450px] group/carousel">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={images[currentIndex]}
                        className="absolute inset-0 w-full h-full object-contain"
                        alt={`${title} screenshot ${currentIndex + 1}`}
                    />
                </AnimatePresence>

                {/* Controls */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 hover:bg-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.5)] transition-all z-10"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 hover:bg-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.5)] transition-all z-10"
                >
                    <FiChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.8)] ${idx === currentIndex ? "bg-neon-cyan w-8" : "bg-white/60 hover:bg-white w-2.5"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const base = import.meta.env.BASE_URL;

    const projects = [
        {
            name: "Supervision réseau SNMP – PFE",
            description: "Conception et mise en place d’une solution complète de supervision réseau permettant la surveillance en temps réel des serveurs Linux et Windows. Le système intègre la collecte des données via SNMP, l’analyse des performances, la génération de graphiques statistiques et l’envoi automatique d’alertes en cas d’anomalie.",
            skills: "Nagios XI, Cacti, SNMP, Linux, Windows Server",
            images: [
                `${base}assets/NAGIOSXI1.png`,
                `${base}assets/NAGIOSXI2.png`,
                `${base}assets/CACTI1.png`,
                `${base}assets/CACTI2.png`
            ]
        },
        {
            name: "Plateforme E-Doctorat",
            description: "Développement d’une plateforme web dédiée à la gestion des candidatures doctorales intégrant les fonctionnalités de dépôt de dossiers, validation académique, gestion des commissions et suivi administratif complet des candidats.",
            skills: "Spring Boot, MySQL, React, Tailwind, Vite",
            images: [
                `${base}assets/EDOCTORAT1.png`,
                `${base}assets/EDOCTORAT2.png`,
                `${base}assets/EDOCTORAT3.png`,
                `${base}assets/EDOCTORAT4.png`
            ]
        },
        {
            name: "Gestion de stock – CHU Hassan II",
            description: "Réalisation d’une application web de gestion des équipements hospitaliers permettant la consultation, l’ajout, la modification et la traçabilité des ressources afin d’améliorer l’efficacité de la gestion interne du centre hospitalier.",
            skills: "Angular, Spring Boot, MySQL, REST API",
            images: [
                `${base}assets/CHU1.png`,
                `${base}assets/CHU2.png`,
                `${base}assets/CHU3.png`,
                `${base}assets/CHU4.png`
            ]
        },
        {
            name: "Application Mobile Flutter",
            description: "Développement d’une application mobile multiplateforme permettant la gestion des utilisateurs, la synchronisation des données avec une API REST et la mise en place d’une interface moderne responsive adaptée aux besoins.",
            skills: "Flutter, Ktor, GitHub, Render Cloud",
            images: [
                `${base}assets/appflutter.png`
            ]
        }
    ];

    return (
        <section id="projects" className="px-6 md:px-12 lg:px-[12%] py-32 text-white relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl md:text-5xl font-bold mb-24 tracking-tight"
            >
                Projets <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">réalisés</span>
            </motion.h2>

            <div className="space-y-32">
                {projects.map((p, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        key={p.name}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-neon-cyan transition-colors duration-500">
                                {p.name}
                            </h3>
                            <p className="text-lg leading-relaxed text-gray-400 font-light">
                                {p.description}
                            </p>

                            <div className="pt-4 border-t border-white/10">
                                <p className="text-neon-purple/90 font-medium text-sm tracking-widest uppercase">
                                    Technologies
                                </p>
                                <p className="mt-2 text-white/80">
                                    {p.skills}
                                </p>
                            </div>
                        </div>

                        {/* Image Carousel */}
                        <div className="flex-1 w-full relative">
                            {/* Decorative glow behind carousel */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] ${index % 2 === 0 ? 'bg-neon-purple/30' : 'bg-neon-cyan/30'} blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 will-change-transform`}></div>

                            <ProjectCarousel images={p.images} title={p.name} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
