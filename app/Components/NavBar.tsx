'use client'

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const Path = usePathname();

    // Throttle to avoid scroll lag
    useEffect(() => {
        let ticking = false;

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1120);
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY >= 70);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial trigger
        handleResize();
        handleScroll();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`
            z-10 flex justify-between items-center sticky top-0 w-full px-4 sm:px-8 py-3
            transition-all duration-300 backdrop-blur-md
            ${isScrolled ? 'bg-gradient-to-b from-black/40 via-black/20 to-transparent' : 'bg-transparent pt-4'}
        `}>
            {/* Left Logo */}
            {!isMobile && (
                <Link href="/" className="transition-transform hover:scale-105">
                    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                            fontFamily="Bitcount gridd double"
                            fontSize="70" fill="#38BDF8" fontWeight="bold">
                            VS
                        </text>
                    </svg>
                </Link>
            )}

            {/* Center Title */}
            <div className={`
                text-white font-bold drop-shadow-md transition-all duration-300
                ${isMobile ? 'text-3xl' : isScrolled ? 'text-4xl' : 'text-5xl'}
            `}>
                Portfolio
            </div>

            {/* Right Links/Menu */}
            {isMobile ? (
                <button className="p-2">
                    <Image src="/MenuLogo.svg" width={28} height={28} alt="menu" priority />
                </button>
            ) : (
                <ul className={`
                    flex space-x-6 text-white font-light transition-all duration-300
                    ${isScrolled ? 'text-base' : 'text-xl'}
                `}>
                    <NavLink Path={Path} href="/"><li>Home</li></NavLink>
                    <NavLink Path={Path} href="/resume"><li>Resume</li></NavLink>
                    <NavLink Path={Path} href="/projects"><li>Projects</li></NavLink>
                </ul>
            )}
        </div>
    );
};

export default NavBar;
