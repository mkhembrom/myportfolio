import Link from "next/link"
import { useState } from "react";
import { RoughNotation, RoughNotationGroup, } from "react-rough-notation";

const ProjectHighlight = ({ touch, animationDuration, name }: any) => {

    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}


const Work = () => {
    const [touch, setTouch] = useState('');

    

    return (
        <div className="w-2/5 mx-auto">

            <div className="mt-20 mb-10">
                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline ">Work</h2>
            </div>
            <div className="grid grid-rows-auto grid-cols-2 gap-8">
                <Link href="/works/grandiose" className="cursor-pointer" onMouseEnter={() => setTouch('grandiose')} onMouseLeave={() => setTouch('')}>
                    <div className="rounded-md">
                        <img className="object-cover rounded-md h-40" src="/grandiose.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Grandiose Art" touch={touch == 'grandiose' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Gallery art websites for potenstial client</p>
                        </div>
                    </div>
                </Link>
                <Link href="/works/buymyev" className="cursor-pointer" onMouseEnter={() => setTouch('buymyev')} onMouseLeave={() => setTouch('')}>

                    <div className="rounded-md">
                        <img className="object-cover rounded-md h-40" src="/buymyev.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Buymyev.in" touch={touch == 'buymyev' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Smart, connected urban mobility solution for your work & leisure.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/works/catwiki" className="cursor-pointer" onMouseEnter={() => setTouch('catwiki')} onMouseLeave={() => setTouch('')}>

                    <div className="rounded-md">
                        <img className="object-cover rounded-md h-40" src="/catweb.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Cat Wiki" touch={touch == 'catwiki' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed</p>
                        </div>
                    </div>
                </Link>
                <Link href="/works/windbnb" className="cursor-pointer" onMouseEnter={() => setTouch('windbnb')} onMouseLeave={() => setTouch('')}>

                    <div className="rounded-md">
                        <img className="object-cover rounded-md h-40" src="/windbnb.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Windbnb" touch={touch == 'windbnb' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed</p>
                        </div>
                    </div>
                </Link>

            </div>
            <div className="my-10">

                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">Old Work</h2>
                <div className="grid grid-rows-auto grid-cols-2 gap-8 my-10">
                    <div className="rounded-md">
                        <video className="rounded-md h-40 object-cover" autoPlay={true}>
                            <source src="/cloud.mp4" type="video/mp4" />
                        </video>
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2">Weather City App</h2>
                            <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed.</p>
                        </div>
                    </div>

                    <div className="rounded-md">
                        <video className="rounded-md h-40 object-cover" autoPlay={true}>
                            <source src="/quote.mp4" type="video/mp4" />
                        </video>
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2">Random Quote</h2>
                            <p className="text-[16px] leading-tight">Randomly Quote Generator and shows list of famous authors quote.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Work