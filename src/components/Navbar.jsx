import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi"
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#top' },
        { name: 'À propos', href: '#about' },
        { name: 'Mes projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className={`mx-auto max-w-7xl px-6 md:px-12 transition-all duration-300
                ${isScrolled ? 'bg-[#0a0014]/60 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>

                <div className="flex items-center justify-between h-16">
                    <a href="#top" className="text-2xl font-bold tracking-wider relative group">
                        <span className="text-white group-hover:text-neon-cyan transition-colors">Hafssa</span>
                        <span className="text-neon-purple drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 rounded-full px-8 py-2 bg-white/5 border border-white/10 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a className='text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm font-medium tracking-wide' href={link.href}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all border border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white hover:shadow-[0_0_15px_rgba(176,38,255,0.5)]"
                        >
                            Contact
                            <FiArrowRight />
                        </a>

                        <button className="block md:hidden text-2xl text-white hover:text-neon-purple transition-colors" onClick={() => setIsMenuOpen(true)}>
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#0a0014]/90 backdrop-blur-xl z-[60] flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-8 right-8 text-3xl text-gray-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FiX />
                        </button>

                        <ul className="flex flex-col items-center gap-8 text-2xl font-medium">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gray-300 hover:text-neon-cyan hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
