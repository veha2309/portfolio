'use client';
import { useState } from 'react';
import useAnimation from '../Hooks/useAnimation';


type AnimationToggleProps = {
    onClick: () => void;
};
const AnimationToggle = ({ onClick }: AnimationToggleProps) => {
    const [active, setActive] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useAnimation(active);
    const toggleAnimation = () => {

        setActive((prev) => !prev);
    };

    return (
        <>
            <div
                onClick={(e) => {
                    setIsOpen(!isOpen)
                    e.stopPropagation();
                }}
                className={`
            fixed
            z-10
            bottom-5
            right-5
            h-10
            w-10
            transition-all
            duration-300
            bg-gray-400
            rounded-full
            flex
            items-center
            justify-center
            hover:cursor-pointer
            hover:drop-shadow-white/40
            hover:drop-shadow-md
            
            ${isOpen ? `w-40 h-28 shadow-2xl` : ``}
            
            `}>
                <img src="ShutDown.svg" alt="img" className={`
                    h-8 w-8
                    transition-all
                    duration-200
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                    `} />

                {isOpen && (
                    <div className='h-full w-full relative pt-4 pl-2'>
                        <p>Animation</p>
                        <div className='flex justify-between items-center w-2/3'>
                            <p className={`${active ? 'scale-125' : 'scale-75'} transition-all duration-150`}>On</p>
                            <p className={`${active ? 'scale-75' : 'scale-125'} transition-all duration-150`}>Off</p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleAnimation();
                                onClick();
                            }}
                            className="p-4 absolute bg-gray-200 rounded-xl flex items-center justify-center space-x-4 z-30"

                        >
                            Toggle
                        </button>
                    </div>
                )}
            </div>

            {/* <svg
                ref={ARef}
                className="w-8 h-8 transition-transform"
                viewBox="0 0 24 24"
                fill={active ? 'black' : 'gray'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10" />
            </svg>

            <svg
                ref={BRef}
                className="w-8 h-8 transition-transform"
                viewBox="0 0 24 24"
                fill={!active ? 'black' : 'gray'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="4" y="4" width="16" height="16" />
            </svg> */}

        </>
    );
};

export default AnimationToggle;