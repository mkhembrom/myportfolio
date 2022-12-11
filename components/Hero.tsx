import Image from "next/image";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";




const FullStackDeveloper = ({show, animationDuration}: any) => {
    
    return <RoughNotation type="underline" strokeWidth={2} color="pink" animationDuration={animationDuration} show={show}>full-stack engineer</RoughNotation>;
}

export const Hero = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="mx-auto w-[85%] md:w-1/2 flex flex-col sm:flex-col md:flex-row mt-[120px] md:mt-[160px] items-center md:items-start sm:justify-center">
            <div className="w-full md:w-1/4 justify-center items-center md:items-start">
                <img className="mx-auto mb-4 rounded-full border	duration-300 border-[3px] border-[#81e6d9] object-cover w-[160px] h-[160px]" src="/avatar.jpeg" alt="manjesh" />
            </div>
            <div className="w-full md:w-3/4 md:ml-6">
                <p className="text-2xl md:text-3xl font-bold text-[#81e6d9]">Hey There,</p>
                <h1 className="text-4xl font-bold py-2">I'm Manjesh Hembrom.</h1>
                <p className="text-[16px] text-justify md:text-[18px]">I'm a <FullStackDeveloper show={true} animationDuration={1500}/>  with a passion for everything front to back-end. Welcome to my corner of internet. I'm glad you're here!</p>
            </div>
        </div>
    );
}