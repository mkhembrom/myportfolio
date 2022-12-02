import Image from "next/image";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";




const FullStackDeveloper = ({show, animationDuration}: any) => {
    
    return <RoughNotation type="underline" strokeWidth={2} color="#81e6d9" animationDuration={animationDuration} show={show}>full-stack engineer</RoughNotation>;
}

export const Hero = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="mx-auto w-1/2 flex mt-[160px]">
            <div className="1/4">
                <img className="rounded-full border hover:border-dashed	duration-300 border-4 border-[#81e6d9] object-cover w-[160px] h-[160px]" src="/avatar.jpeg" alt="manjesh" />
            </div>
            <div className="w-3/4 ml-6">
                <p className="text-3xl font-bold text-[#81e6d9]">Hey There,</p>
                <h1 className="text-4xl font-bold py-2">I'm Manjesh Hembrom</h1>
                <p className="text-[18px]">I'm a <FullStackDeveloper show={true} animationDuration={1500}/>  wait a passion for everything front to back-end. Welcome to my corner of internet. I'm glad you're here!</p>
            </div>
        </div>
    );
}