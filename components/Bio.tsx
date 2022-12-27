import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { RoughNotation, RoughNotationGroup, } from "react-rough-notation";
import { useInView } from 'react-intersection-observer';

const TextHighlight = ({ show, animationDuration, text, animationDelay }: any) => {

    return (
        <>
            <RoughNotation
                type="box"
                strokeWidth={2}
                color="yellow"
                animationDuration={animationDuration}
                animationDelay={animationDelay}
                show={show}>
                {text}
            </RoughNotation>
        </>
    );
}

const FullStackEngineer = ({ show, animationDuration }: any) => {

    return <RoughNotation type="highlight" animationDelay={1000} strokeWidth={1} color="yellow" animationDuration={animationDuration} show={show}>full-stack developer</RoughNotation>;
}

const Experiance = ({ show, animationDuration }: any) => {

    return <RoughNotation type="highlight" animationDelay={2000} strokeWidth={1} color="yellow" animationDuration={animationDuration} show={show}>1.5+ years</RoughNotation>;
}

const ComputerScienceEngineering = ({ show, animationDuration }: any) => {

    return <RoughNotation type="circle" strokeWidth={1} color="pink" animationDuration={animationDuration} show={show}>Computer Science & Engineering</RoughNotation>;
}

const ZeroToMasteryAcademy = ({ show, animationDuration }: any) => {

    return <RoughNotation type="circle" strokeWidth={1} color="pink" animationDuration={animationDuration} show={show}>Javacript bootcamp</RoughNotation>;
}

const SocialLink = ({ touch, animationDuration, name }: any) => {

    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}

export const Bio = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        trackVisibility: true,
        delay: 100
    });

    const [show, setShow] = useState(false);

    const [showJs, setShowJs] = useState(false);
    const [touch, setTouch] = useState('');


    return (
        <div ref={ref} className="w-[85%] md:w-1/2 mx-auto">
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">Summary</h2>
            <div className="py-4">

                <p className=" text-[18px] text-justify">Hello and welcome to my portfolio website! My name is <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Manjesh Hembrom</span> and I am a <span className={`${inView ? 'delay-[1000ms] duration-1000 text-black' : ''}`}><FullStackEngineer show={inView} animationDuration={2000} /></span> with <span className={`${inView ? 'delay-[2500ms] duration-1500 text-black' : ''}`}><Experiance show={inView} animationDuration={3000} /></span> of experience in the field. I have a passion for Software devlopment and I am constantly striving to improve my skills and knowledge in order to provide the best possible solutions for my clients.
                    <br /><br />

                    I have a strong background in <TextHighlight show={inView} animationDuration={3000} text="java" /> as well as in <TextHighlight animationDelay={1000} text="javascript" show={inView} animationDuration={3500} /> and I have worked on a wide range of projects that have allowed me to develop my skills and experience.

                    {/* I am always looking for new opportunities to learn and grow, so please feel free to contact me if you have a project that you think I may be able to help with. Thank you for visiting my website, and I hope you enjoy exploring my work!
                     */}</p>
            </div>
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">Bio</h2>

            <div className="my-4">
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">1996</h3>
                    <p className="text-[16px]">Born in Bokaro, India</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2015</h3>
                    <p className="text-[16px]">Completed the Undergrad's Program in the <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(true)}><ComputerScienceEngineering show={show} /></span> at <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Vinoba Bhave University</span> (Guru Gobind Singh Educational Society's Technical Campus).</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2020</h3>
                    <p className="text-[16px]">Did <span onMouseEnter={() => setShowJs(true)} onMouseLeave={() => setShowJs(true)}><ZeroToMasteryAcademy show={showJs} /></span> at <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Zero to Mastery Academy</span> open school.</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2022</h3>
                    <p className="text-[16px]">Worked at <span className="font-bold text-[#81e6d9] dark:text-pink-300">Luxeveda Brand & Tech Pvt. Ltd.</span></p>
                </div>
            </div>
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">I love</h2>
            <div className="my-4 ml-4">
                <p className="text-[18px]">Music, Design, Games, Anime, Football</p>
            </div>
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">On the web</h2>
            <div className="my-4 ml-4 text-[18px] w-fit">

                <Link href="https://github.com/mkhembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch('github')} onMouseLeave={() => setTouch('')}><span className=""><BsGithub /></span> <span className=""><SocialLink name="@mkhembrom" touch={touch == 'github' ? true : false} /></span></Link>
                <Link href="https://twitter.com" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch('twitter')} onMouseLeave={() => setTouch('')}><BsTwitter /><span><SocialLink name="@HembromManjesh" touch={touch == 'twitter' ? true : false} /></span></Link>
                <Link href="https://linkedin.com/in/manjesh-hembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch('linkedin')} onMouseLeave={() => setTouch('')}><BsLinkedin /><span><SocialLink name="@manjesh-hembrom" touch={touch == 'linkedin' ? true : false} /></span></Link>

                <Link href="https://instagram.com/mkhembrom.exe" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch('instagram')} onMouseLeave={() => setTouch('')}><BsInstagram /><span><SocialLink name="@mkhembrom.exe" touch={touch == 'instagram' ? true : false} /></span></Link>

            </div>
        </div>
    );
}