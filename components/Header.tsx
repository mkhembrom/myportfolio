import Link from "next/link";
import { useState } from "react";
import { TfiGithub } from "react-icons/tfi"
import { motion } from "framer-motion"

export const Header = () => {

    const [tilt, setTilt] = useState(false);
    const [rotate, setRotate] = useState(false);
    return (
        <header className="z-10 bg-black flex items-center border-b-2 border-[#81e6d9] drop-shadow bg-opacity-60 backdrop-blur fixed top-0 left-0 right-0">
            <div className="mx-auto flex w-[85%] sm:w-[80%] md:w-2/4 justify-between">
                <Link href="/">
                    <div className="py-4 flex items-end">
                        <div className="rounded-md bg-[#fff] mr-2 overflow-hidden">
                            <img className={`origin-bottom ${tilt ? '-rotate-12 translate-y-2 duration-500' : 'rotate-0 duration-300'}`} src='cat.svg' alt='cat' width="30" height="30" />
                        </div>
                        <p className="text-2xl cursor-pointer hidden sm:flex md:flex" onMouseEnter={() => setTilt(true)} onMouseLeave={() => setTilt(false)}>Manjesh <span className="font-bold">Hembrom</span></p>
                    </div>
                </Link>
                <div className="py-4 flex items-end">
                    <nav className="">
                        <ul className="flex space-x-4">
                            <li><Link href="/works">Works</Link></li>
                            {/* <li><Link href="/posts">Posts</Link></li> */}
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="https://github.com/mkhembrom" target="_blank" className="flex space-x-2"><span onMouseLeave={() => setRotate(false)} onMouseEnter={() => setRotate(true)}>Github</span><motion.span 
                             whileHover={ {
                                scale: 0.8,
                                rotateZ: [0, 15, -15, 0], 
                                transition: { duration: 0.3 },
                            }}><TfiGithub className="mt-[2px]" size={20} /></motion.span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}