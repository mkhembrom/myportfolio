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

    const [listStack, setListStack] = useState(["flutter", "reactjs", "nextjs", "typescript", "expressjs", "nodejs", "postgres", "mongodb", "graphql", "c++", "dart", "javascript", "java", "docker", "lua", "nestjs"]);

    return (
        <>
            <div className='w-1/2 flex mx-auto mt-4 justify-between'>

                <div className='w-1/4'></div>
                <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="w-3/4 ml-6 flex space-x-6 justify-end items-center">

                    <motion.button initial={{ opacity: 0, y: -30 }} animate={{ opacity: [0,0.5,1], y: [-30, 0] }} transition={{ duration: 0.2, type: "tween" }} onClick={handleClick} className="w-full tracking-wide uppercase border-2 rounded-md border-[#81e6d9] ease-in duration-300 hover:text-[#81e6d9] font-bold px-4 py-2 mb-4">Portfolio</motion.button>

                    <motion.button initial={{ opacity: 0, y: -30}} animate={{ opacity: [0,0.5,1], y: [-30,0] }} transition={{ duration: 0.2, type: "tween" }} className="w-full tracking-wide uppercase border-2 rounded-md border-[#81e6d9] hover:text-[#81e6d9] ease-in duration-300 font-bold px-4 py-2 mb-4 flex items-center">Download Resume<span className='ml-2 font-bold hover:text-white'><FiDownload /></span></motion.button>
                </motion.div>
            </div>

            <div className="w-1/2 mx-auto">
                <h2 className="border-b-4 border-white-300 text-[#81e6d9] text-2xl font-bold inline">Stack</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='py-4 flex flex-wrap items-center justify-start' >

                    {listStack.map((item, index) => (

                        <motion.div variants={items} key={index}><Image className='p-2 cursor-pointer' src={`/dev/${item}.svg`} alt={item} width="60" height="60" /></motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

