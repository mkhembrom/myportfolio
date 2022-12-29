import Image from "next/image";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { GiStripedSun } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import { BsCircleHalf } from 'react-icons/bs'



const FullStackDeveloper = ({ show, animationDuration, theme }: any) => {

    return <RoughNotation type="underline" strokeWidth={2} color={`${theme === 'dark' ? "#f9a8d4" : "#81e6d9"}`} animationDuration={animationDuration} show={show}>full-stack engineer</RoughNotation>;
}

export const Hero = () => {
    const { theme, setTheme } = useTheme()

    const [show, setShow] = useState(false);
    return (<>
        <div className="mx-auto w-[85%] md:w-1/2  mt-[120px] md:mt-[160px] flex justify-end">
            {/* <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="p-3 h-12 w-12 order-2 md:order-3"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <BsCircleHalf color={`${theme === 'dark' ? "#81e6d9" : "#f9a8d4 "}`} />
            </button> */}

        </div>
        <div className="mx-auto w-[85%] md:w-1/2 flex flex-col sm:flex-col md:flex-row items-center md:items-start sm:justify-center">
            <div className="w-full md:w-1/4 justify-center items-center md:items-start ">
                <Image loading="lazy" className="mx-auto mb-4 rounded-full outline outline-[#81e6d9] shadow-lg transition-all outline-offset-4 hover:-translate-y-1 hover:outline-cyan-400 hover:drop-shadow-xl hover:scale-110  ease-in-out duration-300  dark:outline-[#f50057] object-cover w-[160px] h-[160px]" height="160" width="160"  src="/avatar.jpeg" alt="manjesh" />
            </div>
            <div className="w-full md:w-3/4 md:ml-6">
                {/* <p className="text-2xl text-[#81e6d9] dark:text-pink-300 md:text-3xl font-bold ">Hey There,</p> */}
                <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold py-2">Manjesh Hembrom.</h1>
                <p className="text-[16px] text-justify md:text-[18px]">I&apos;m a <span onMouseEnter={() => setShow(true)}><FullStackDeveloper theme={theme} show={show} animationDuration={1500} /></span>  with a passion for everything front to back-end. Welcome to my corner of internet. I&apos;m glad you&apos;re here!</p>
            </div>
        </div>
    </>
    );
}