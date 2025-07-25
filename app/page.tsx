'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMobile, setIsMobile] = useState(false);




  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1120);
    };



    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsBlurred(!isVisible);
    }

    // Initial trigger
    handleResize();
    handleScroll();


    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);



    return () => {


      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <div className="min-h-screen max-w-screen flex h-[400vh] text-white text-xl relative">

        <div className=" w-full h-fit flex justify-around text-center items-center">
          <Image src={"/FrontLogo.svg"} height={200} width={200} alt="Main" className={`
            drop-shadow-2xl
            ${isBlurred ? "blur-sm" : ""}
            transition-all
            duration-200
            `}
            ref={imageRef} />
          <div className={`w-1/2 text-shadow-lg tracking-widest
            ${isMobile ? 'text-sm' : 'text-xl'}
            `}>
            I’m Vedant, a passionate software engineer committed to continuous growth and innovation. Currently refining my skills in full-stack web development through project-based learning, while expanding my expertise in Android development. I aim to build scalable, intuitive solutions that align with modern technologies and user needs—always fueled by curiosity and a drive to create meaningful impact through code.
          </div>
        </div>
      </div>
    </>
  );
}
