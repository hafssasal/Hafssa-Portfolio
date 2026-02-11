import { useEffect, useRef } from 'react'
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi"

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
            }
        })

    }, [])

    return (
        <>
            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <a href="#!" className="text-2xl font-bold">
                    Hafssa<span className="text-purple-500">.</span>
                </a>

                <ul
                    ref={navLinkRef}
                    className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo"
                >
                    <li><a className='hover:text-gray-500 transition' href="#top">Accueil</a></li>
                    <li><a className='hover:text-gray-500 transition' href="#about">À propos</a></li>
                    <li><a className='hover:text-gray-500 transition' href="#services">Services</a></li>
                    <li><a className='hover:text-gray-500 transition' href="#work">Mes projets</a></li>
                    <li><a className='hover:text-gray-500 transition' href="#contact">Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">

                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 rounded-full ml-4 font-Ovo"
                    >
                        Contact
                        <FiArrowRight />
                    </a>

                    <button className="block md:hidden ml-3 text-xl" onClick={openMenu}>
                        <FiMenu />
                    </button>
                </div>

                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo"
                >
                    <div
                        className="absolute right-6 top-6 text-xl cursor-pointer"
                        onClick={closeMenu}
                    >
                        <FiX />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Accueil</a></li>
                    <li><a href="#about" onClick={closeMenu}>À propos</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>Mes projets</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
