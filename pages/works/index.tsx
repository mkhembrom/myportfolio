import Link from "next/link"
import { useState } from "react";
import { RoughNotation, RoughNotationGroup, } from "react-rough-notation";
import { motion } from 'framer-motion'
import Image from "next/image";

const ProjectHighlight = ({ touch, animationDuration, name }: any) => {

    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}


const Work = () => {
    const [touch, setTouch] = useState('');

    const items: any = {
        active: {
            blur: 2,

        },
        inactive: {
            blur: 0,
            transition: { duration: 2 }
        }
    };


    return (
        <div className="w-[80%] md:w-2/5 mx-auto">

            <div className="mt-20 mb-10">
                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline ">Work</h2>
            </div>
            <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/works/grandiose" className="cursor-pointer" onMouseEnter={() => setTouch('grandiose')} onMouseLeave={() => setTouch('')}>
                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="w-full rounded-md">
                        
                        <Image width={400} height={400} layout="fixed" loading="lazy" className="object-cover rounded-md w-full md:h-40 shadow-md" src="/grandiose.png" alt="grandiose" />
                       
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Grandiose Art" touch={touch == 'grandiose' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Gallery art websites for potenstial client</p>
                        </div>
                    </motion.div>
                </Link>
                <Link href="/works/buymyev" className="cursor-pointer" onMouseEnter={() => setTouch('buymyev')} onMouseLeave={() => setTouch('')}>

                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md">
                        <Image width={400} height={400} layout="fixed" loading="lazy" className="object-cover rounded-md md:h-40 shadow-md" src="/buymyevhome.png" alt="buymyev" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Buymyev.in" touch={touch == 'buymyev' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Smart, connected urban mobility solution for your work & leisure.</p>
                        </div>
                    </motion.div>
                </Link>
                <Link href="/works/catwiki" className="cursor-pointer" onMouseEnter={() => setTouch('catwiki')} onMouseLeave={() => setTouch('')}>

                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md">
                        <Image width={400} height={400} layout="fixed" loading="lazy"  className="object-cover rounded-md md:h-40 shadow-md" src="/catweb.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Cat Wiki" touch={touch == 'catwiki' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed</p>
                        </div>
                    </motion.div>
                </Link>
                <Link href="/works/windbnb" className="cursor-pointer" onMouseEnter={() => setTouch('windbnb')} onMouseLeave={() => setTouch('')}>

                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md">
                        <Image width={400} height={400} layout="fixed" loading="lazy" className="object-cover rounded-md md:h-40 shadow-md" src="/windbnb.png" alt="grandiose" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Windbnb" touch={touch == 'windbnb' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Airbnb clone project</p>
                        </div>
                    </motion.div>
                </Link>

            </div>
            <div className="my-10">

                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">Old Work</h2>
                <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md">
                        <motion.video initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md md:h-40 object-cover shadow-md" autoPlay={true}>
                            <source src="/cloud.mp4" type="video/mp4" />
                        </motion.video>
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2">Weather City App</h2>
                            <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md">
                        <motion.video initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.5, type: "tween", ease: "easeOut" }} className="rounded-md md:h-40 object-cover shadow-md" autoPlay={true}>
                            <source src="/quote.mp4" type="video/mp4" />
                        </motion.video>
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2">Random Quote</h2>
                            <p className="text-[16px] leading-tight">Randomly Quote Generator and shows list of famous authors quote.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

export default Work