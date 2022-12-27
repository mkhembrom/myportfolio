import Link from "next/link";
import { BiChevronRight, BiLinkAlt } from "react-icons/bi";
import { RoughNotation } from "react-rough-notation";
import { motion } from 'framer-motion'
import { useState } from "react";
import Image from "next/image";
const ProjectHighlight = ({ touch, animationDuration, name }: any) => {

    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}

const Posts = () => {

    const [touch, setTouch] = useState('');



    return (
        <div className="w-[80%] md:w-2/5 mx-auto">

            <div className="mt-20 mb-10">
                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline ">Post</h2>
            </div>
            <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/posts/anicli" className="cursor-pointer" onMouseEnter={() => setTouch('anicli')} onMouseLeave={() => setTouch('')}>
                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1, type: "tween", ease: "easeOut" }} className="w-full rounded-md">
                       
                        <Image width={400} height={400} layout="fixed" loading="lazy"  className="object-cover rounded-md w-full md:h-40 shadow-md" src="/anicli.png" alt="anicli" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="Ani Cli" touch={touch == 'anicli' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Anime in your CMD!</p>
                        </div>
                    </motion.div>
                </Link>

                <Link href="/posts/termux" className="cursor-pointer" onMouseEnter={() => setTouch('termux')} onMouseLeave={() => setTouch('')}>
                    <motion.div initial={{ filter: "blur(3px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1, type: "tween", ease: "easeOut" }} className="w-full rounded-md">
                        <Image width={400} height={400} layout="fixed" loading="lazy" className="object-cover rounded-md w-full md:h-40 shadow-md" src="/reactapp.png" alt="anicli" />
                        <div className="text-center">
                            <h2 className="text-[18px] text-[#81e6d9] font-bold mt-2"><ProjectHighlight name="React app in android" touch={touch == 'termux' ? true : false} /></h2>
                            <p className="text-[16px] leading-tight">Run your react app in android with termux</p>
                        </div>
                    </motion.div>
                </Link>
               
               

            </div>
            </div>
    );
}

export default Posts