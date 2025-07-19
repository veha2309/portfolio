'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);




  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    console.log(isMobile)
    if (isMobile) return;



    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsBlurred(!isVisible);
    }
      window.addEventListener('scroll', handleScroll);
      handleScroll();


      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])

  return (
    <>
      <div className="min-h-screen h-[400vh] text-white text-xl relative">

        <div className=" w-full h-fit flex justify-around text-center items-center">
          <Image src={"/FrontLogo.svg"} height={300} width={500} alt="Main" className={`
            drop-shadow-2xl
            ${isBlurred ? "blur-sm" : ""}
            transition-all
            duration-200
            `}
            ref={imageRef} />
          <div className="text-xl w-1/2 text-shadow-lg tracking-widest">
            I’m Vedant, a passionate software engineer committed to continuous growth and innovation. Currently refining my skills in full-stack web development through project-based learning, while expanding my expertise in Android development. I aim to build scalable, intuitive solutions that align with modern technologies and user needs—always fueled by curiosity and a drive to create meaningful impact through code.
          </div>
        </div>        
      </div>
    </>
  );
}
