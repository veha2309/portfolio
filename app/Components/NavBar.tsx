'use client'
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const Path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const Posi = window.scrollY >= 200;
            setIsScrolled(Posi);
        };
        window.addEventListener('scroll' , handleScroll);
        return () => {
            window.removeEventListener('scroll' , handleScroll);
        }
    }, []);

    
    return (
        <>
            <div className={`
                z-10
                flex 
                justify-between
                w-full 
                sticky 
                top-0
                transition-all 
                duration-300
                ${isScrolled ? `bg-gradient-to-b from-black/30 via-black/20 via-black.10 to-transparent` : `bg-black/0 pt-10 pl-10`}
                `}>
                <Link href="/" className="hover:scale-105 transition-all">


                    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                            fontFamily="Bitcount gridd double"
                            fontSize="80" fill="#38BDF8" fontWeight="bold">
                            VS
                        </text>
                    </svg>
                </Link>

                <div className={`
                    flex
                    justify-center
                    items-center 
                    ml-40
                    text-shadow-2xs
                    drop-shadow-2xl
                    text-white/80
                    transition-all
                    duration-300
                    ${isScrolled ? `text-6xl` : `text-7xl`}
                    `}>
                    Portfolio
                </div>

                <ul className={`
                    flex justify-center items-center space-x-8 pr-10 pl-10 font-light  text-white text-shadow-lg offset text-shadow-black
                    ${isScrolled ? `text-lg` : `text-2xl`} 
                    `}>

                    <NavLink
                        Path={Path}
                        href="/"
                    >
                        <li className={``}>
                            Home
                        </li>
                    </NavLink>

                    <NavLink
                        Path={Path}
                        href="/resume"
                    >
                        <li className={``}>
                            Resume
                        </li>
                    </NavLink>

                    <NavLink
                        Path={Path}
                        href="/projects"
                    >
                        <li className={``}>
                            Projects
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
};
export default NavBar;