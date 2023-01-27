import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useState } from 'react';
import { FiDownload } from "react-icons/fi"

export const Stack = () => {

    const router = useRouter();

    const container = {
        hidden: { opacity: 0, },
        show: {
            opacity: 1,

            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const items = {
        hidden: { opacity: 0 },
        show: { opacity: 1, scale: [1, 1.3, 1], }
    }


    const handleClick = () => {
        router.push("/works");
    }

    const downloadResume = () => {
        window.open('/Manjesh_Hembrom_Resume.pdf');
    }

    const [active, setActive] = useState(false);
    const [listStack, setListStack] = useState(["flutter", "reactjs", "nextjs", "typescript", "expressjs", "nodejs", "postgres", "mongodb", "graphql", "c++", "dart", "javascript", "java", "docker", "lua", "nestjs", "prisma1", "git", "firebase"]);
    const [hoverImg, setHoverImg] = useState(false);
    const [hoverName, setHoverName] = useState('');

    const activeHover = (name: any) => {
        let names = name;
        setHoverImg(true);
        setHoverName(names);
    }

    return (
        <>
            <div className='w-[85%] xl:w-2/4 2xl:w-1/3 mt-4 md:mt-0 flex mx-auto justify-end relative'>

                {hoverImg && <div className='invisible md:visible w-[200px] h-[200px] absolute -top-[160px] -left-[260px] flex justify-center bg-white transition ease-in drop-shadow-[10px_35px_35px_rgba(0,0,0,0.5)] items-center'>
                    {
                        listStack.map((img, index) => {

                            if (img === 'prisma1') {
                                return (
                                    hoverImg && img === hoverName &&
                                    <Image key={index} className='p-2 cursor-pointer' src={`/dev/prisma.svg`} alt="prisma" width="200" height="200" />
                                );
                            }

                            if (img === 'expressjs') {
                                return (
                                    hoverImg && img === hoverName &&
                                    <Image key={index} className='p-2 cursor-pointer' src={`/dev/express1.svg`} alt="express" width="200" height="200" />
                                );
                            }
                            return (
                                hoverImg && img === hoverName &&
                                <Image key={index} className='p-2 cursor-pointer' src={`/dev/${img}.svg`} alt={img} width="200" height="200" />
                            );
                        })
                    }
                </div>}

                <div className="w-full md:w-3/4 md:ml-6 flex space-x-4 md:space-x-6 justify-end items-center">

                    <button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} id={active ? 'spinner' : ''} onClick={handleClick} className={`${active ? 'bg-[#81e6d9] dark:bg-[#f50057] text-[#fff]' : ''}  w-full tracking-wide uppercase border-2 rounded-md border-[#81e6d9] dark:border-[#f50057] dark:text-[#f50057] text-[#81e6d9] hover:text-transparent ease-in duration-300 font-bold text-sm md:text-md px-4 py-2 mb-4`}>Portfolio</button>

                    <button onClick={downloadResume} id="spinner" className="md:w-full tracking-wide uppercase border-2 rounded-md dark:border-[#f50057] border-[#81e6d9] bg-[#81e6d9] dark:bg-[#f50057] hover:text-[#81e6d9] dark:hover:text-[#f50057] ease-in duration-300 font-bold text-sm md:text-md px-2 md:px-4 py-2 mb-4 flex justify-center items-center"><span className='hidden md:flex'>Download Resume</span><span className='md:ml-2 font-bold hover:text-white px-2 md:px-0 flex justify-end items-center'><FiDownload size={20} /></span></button>
                </div>
            </div>

            <div className="w-[85%] mt-4 md:mt-0 xl:w-2/4 2xl:w-1/3 mx-auto">
                <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-[#f50057] text-2xl font-bold inline">Stack</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='py-4 flex flex-wrap items-center justify-evenly md:justify-start' >

                    {listStack.map((item, index) => {

                        if (item === 'prisma1') {
                            return (
                                <motion.div variants={items} key={index}><Image onMouseEnter={() => activeHover(item)} onMouseLeave={() => setHoverImg(false)} className='p-2 cursor-pointer' src={`/dev/${item}.svg`} alt={item} width="90" height="90" /></motion.div>

                            );
                        }

                        return (
                            <motion.div variants={items} key={index}><Image onMouseEnter={() => activeHover(item)} onMouseLeave={() => setHoverImg(false)} className='p-2 cursor-pointer' src={`/dev/${item}.svg`} alt={item} width="60" height="60" /></motion.div>

                        );
                    })}
                </motion.div>
            </div>
        </>
    );
}

