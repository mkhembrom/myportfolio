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
        window.open('/Manjesh_Resume.pdf');
    }

    const [active, setActive] = useState(false);
    const [listStack, setListStack] = useState(["flutter", "reactjs", "nextjs", "typescript", "expressjs", "nodejs", "postgres", "mongodb", "graphql", "c++", "dart", "javascript", "java", "docker", "lua", "nestjs"]);

   
    return (
        <>
            <div className='w-[85%] md:w-1/2 flex mx-auto mt-4 justify-between'>

                <div className='md:w-1/4'></div>
                <div className="w-full md:w-3/4 md:ml-6 flex space-x-4 md:space-x-6 justify-end items-center">

                    <button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}  id={active ? 'spinner' : ''} onClick={handleClick} className={`${active ? 'bg-[#81e6d9]' : ''}  w-full tracking-wide uppercase border-2 rounded-md border-[#81e6d9] text-[#81e6d9] ease-in duration-300 font-bold text-sm md:text-md px-4 py-2 mb-4`}>Portfolio</button>

                    <button onClick={downloadResume}  id="spinner"  className="md:w-full tracking-wide uppercase border-2 rounded-md border-[#81e6d9] bg-[#81e6d9] hover:text-[#81e6d9] ease-in duration-300 font-bold text-sm md:text-md px-2 md:px-4 py-2 mb-4 flex text-center items-center"><span className='hidden md:flex'>Download Resume</span><span className='md:ml-2 font-bold hover:text-white px-2 md:px-0 flex justify-center items-center'><FiDownload size={20} /></span></button>
                </div>
            </div>

            <div className="w-[85%] mt-4 md:mt-0 md:w-1/2 mx-auto">
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

