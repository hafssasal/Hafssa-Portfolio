import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative text-center py-12 text-white border-t border-white/10 mt-10 z-10 bg-[#0a0014]/50 backdrop-blur-lg">
            <div className="flex justify-center gap-8 text-2xl">
                <a href="mailto:hafssasalmi54@gmail.com" className="text-gray-400 hover:text-neon-pink hover:drop-shadow-[0_0_10px_rgba(255,0,200,0.8)] transition-all duration-300 transform hover:scale-110">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/hafssasal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:scale-110">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/hafssa-salmi-profil/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300 transform hover:scale-110">
                    <FaLinkedin />
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-light tracking-wide">
                © {new Date().getFullYear()} <span className="text-white hover:text-neon-purple transition-colors cursor-pointer">Hafssa Salmi</span>. Tous droits réservés.
            </p>
        </footer>
    )
}
