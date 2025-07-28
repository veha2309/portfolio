'use client';
import { animate } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Footer = () => {
    const socialMedia = {
        Instagram: {
            ref: useRef<HTMLImageElement | null>(null),
            img: "/InstagramLogo.svg",
            link: "https://www.instagram.com/vedant.23_09/"
        },
        GitHub: {
            ref: useRef<HTMLImageElement | null>(null),
            img: "/GitHubLogo.svg",
            link: "/"
        },
        LinkedIn: {
            ref: useRef<HTMLImageElement | null>(null),
            img: "/LinkedInLogo.svg",
            link: "/"
        },
    }
    const arrayOfrefrences = Object.entries(socialMedia).map(
        ( value) => {
            return [value[1].ref]
        }
    ).flat()

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;
        const controller = animate(
            arrayOfrefrences.map((e) => e.current),
            {
                y: [0, -15, -20, 0],
                rotate: [0, 180, 360],
                loop: true,
                ease: "inOutSine",
                duration: 450,
                loopDelay: 2000,

            })
        const animationRemove = () => {
            controller.pause()
        };
        const animationAdd = () => {
            controller.play();
        };
        arrayOfrefrences.map((e) => {
            e.current?.addEventListener('mouseenter', animationRemove);
            e.current?.addEventListener('mouseleave', animationAdd);
        })



        return () => {
            arrayOfrefrences.map((e) => {
                e.current?.removeEventListener('mouseenter', animationRemove);
                e.current?.removeEventListener('mouseleave', animationAdd);

            })
        }
    }, [])

    return (
        <>
            <footer className="bg-black text-gray-400 h-80 w-full relative bottom-0 flex flex-col justify-center items-center">
                <div className="w-full h-32 lg:h-52 flex justify-center items-center gap-20 relative">
                    {
                        arrayOfrefrences.map((e, index) => {
                            return (
                                <Link href={Object.values(socialMedia)[index].link} className="hover:scale-150 transition-all duration-200" key={index}>
                                    <Image src={Object.values(socialMedia)[index].img} width={70} height={70} alt="logo" ref={e} />
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="max-w-4xl text-center space-y-8 flex-col flex justify-center items-center">


                    {/* Tech stack */}
                    <p>
                        Built with <span className="text-white font-medium text-lg">Next.js</span> & <span className="text-white font-medium text-lg">Tailwind CSS</span>
                    </p>

                    {/* Contact */}
                    <p className="font-light text-md">
                        Contact: <a href="mailto:448vedantshukla@gmail.com" className="text-white text-lg font-medium hover:underline">448vedantshukla@gmail.com</a>
                    </p>

                    {/* Copyright */}
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Vedant Shukla. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
};

export default Footer;