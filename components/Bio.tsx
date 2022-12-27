import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { RoughNotation, RoughNotationGroup, } from "react-rough-notation";
import { useInView } from 'react-intersection-observer';



const TextHighlightCircle = ({ show, animationDuration, text, animationDelay }: any) => {

    return (
        <>
            <RoughNotation
                type="circle"
                strokeWidth={1}
                color="yellow" //"#f50057"
                animationDuration={animationDuration}
                animationDelay={animationDelay}
                show={show}>
                {text}
            </RoughNotation>
        </>
    );
}

const TextHighlightUnderline = ({ show, animationDuration, text, animationDelay }: any) => {

    return (
        <>
            <RoughNotation
                type="underline"
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
    const [showJava, setShowJava] = useState(false);
    const [showJs, setShowJs] = useState(false);
    const [touch, setTouch] = useState('');


    return (
        <div ref={ref} className="w-[85%] md:w-1/2 mx-auto">
           
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">Bio</h2>

            <div className="my-4">
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">1996</h3>
                    <p className="text-[16px]">Born in Bokaro, India</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2015</h3>
                    <p className="text-[16px]">Completed the Undergrad&apos;s Program in the <TextHighlightUnderline show={inView} animationDuration={1000} animationDelay={1500} text="Computer Science & Engineering" /> at <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Vinoba Bhave University</span> (Guru Gobind Singh Educational Society&apos;s Technical Campus).</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2018</h3>
                    <p className="text-[16px]">Core + advance <TextHighlightUnderline show={inView} animationDuration={1000} animationDelay={2000} text="java foundation" /> from <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Naresh I Technology</span>, Hyderabad.</p>
                </div>
                <div className="flex space-x-6">
                    <h3 className="font-bold text-[18px] tracking-wide">2020</h3>
                    <p className="text-[16px]"><TextHighlightCircle show={inView} animationDelay={2500} animationDuration={2800} text="Javascript bootcamp" /> at <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Zero to Mastery Academy</span>.</p>
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

                <Link href="https://github.com/mkhembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch("github")} onMouseLeave={() => setTouch("")}><span className=""><BsGithub /></span> <span className=""><SocialLink name="@mkhembrom" touch={touch == "github" ? true : false} /></span></Link>
                <Link href="https://twitter.com/HembromManjesh" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch("twitter")} onMouseLeave={() => setTouch("")}><BsTwitter /><span><SocialLink name="@HembromManjesh" touch={touch == "twitter" ? true : false} /></span></Link>
                <Link href="https://linkedin.com/in/manjesh-hembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch("linkedin")} onMouseLeave={() => setTouch("")}><BsLinkedin /><span><SocialLink name="@manjesh-hembrom" touch={touch == "linkedin" ? true : false} /></span></Link>

                <Link href="https://instagram.com/mkhembrom.exe" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9] dark:text-pink-300" onMouseEnter={() => setTouch("instagram")} onMouseLeave={() => setTouch("")}><BsInstagram /><span><SocialLink name="@mkhembrom.exe" touch={touch == "instagram" ? true : false} /></span></Link>

            </div>
        </div>
    );
}