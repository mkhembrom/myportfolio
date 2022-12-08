import Link from "next/link";
import { useState } from "react";
import {BsGithub, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs";
import { RoughNotation, RoughNotationGroup, } from "react-rough-notation";


const ComputerScienceEngineering = ({show, animationDuration}: any) => {
    
    return <RoughNotation type="circle" strokeWidth={1} color="pink" animationDuration={animationDuration} show={show}>Computer Science & Engineering</RoughNotation>;
}

const SocialLink = ({touch, animationDuration, name}: any) => {
    
    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}

export const Bio = () => {
    const [show, setShow] = useState(false);
    const [touch, setTouch] = useState('');


    return (
        <div className="w-1/2 mx-auto">
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">Bio</h2>

            <div className="my-4">
            <div className="flex space-x-6">
                <h3 className="font-bold text-[18px] tracking-wide">1996</h3>
                <p className="text-[18px]">Born in Bokaro, India</p>
            </div>
            <div className="flex space-x-6">
                <h3 className="font-bold text-[18px] tracking-wide">2015</h3>
                <p className="text-[18px]">Completed the Undergrad's Program in the <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(true)}><ComputerScienceEngineering  show={show} /></span> at <span className="text-[#81e6d9] font-bold">Vinoba Bhave University</span> (Guru Gobind Singh Educational Society's Technical Campus)</p>
            </div>
            <div className="flex space-x-6">
                <h3 className="font-bold text-[18px] tracking-wide">2022</h3>
                <p className="text-[18px]">Worked at <span className="font-bold text-[#81e6d9]">Luxeveda Brand & Tech Pvt. Ltd.</span></p>
            </div>
            </div>
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">I love</h2>
            <div className="my-4 ml-4">
                <p className="text-[18px]">Music, Design, Games, Anime, Football</p>
            </div>
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">On the web</h2>
            <div className="my-4 ml-4 text-[18px] w-fit">
                
                <Link href="https://github.com/mkhembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9]" onMouseEnter={() => setTouch('github')} onMouseLeave={() => setTouch('')}><span className=""><BsGithub /></span> <span className=""><SocialLink name="@mkhembrom" touch={touch == 'github' ? true : false} /></span></Link>
                <Link href="https://twitter.com" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9]" onMouseEnter={() => setTouch('twitter')} onMouseLeave={() => setTouch('')}><BsTwitter /><span><SocialLink name="@HembromManjesh" touch={touch == 'twitter' ? true : false} /></span></Link>
                <Link href="https://linkedin.com/in/manjesh-hembrom" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9]" onMouseEnter={() => setTouch('linkedin')} onMouseLeave={() => setTouch('')}><BsLinkedin /><span><SocialLink name="@manjesh-hembrom" touch={touch == 'linkedin' ? true : false} /></span></Link>

                <Link href="https://instagram.com/mkhembrom.exe" target="_blank" className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#81e6d9]" onMouseEnter={() => setTouch('instagram')} onMouseLeave={() => setTouch('')}><BsInstagram /><span><SocialLink name="@mkhembrom.exe" touch={touch == 'instagram' ? true : false} /></span></Link>
                
            </div>
        </div>
    );
}