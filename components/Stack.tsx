import {motion} from 'framer-motion';
import { useRouter } from "next/router";

export const Stack = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push("/works");
    }

    const list = ["Flutter", "React", "Next", "Typescript", "Express", "Node", "PostgreSQL", "MongoDB", "Vue", "GraphQl", "C++", "Dart", "Javascript", "Java", "Docker", "CI/CD"]

    return (
        <div className='w-1/2 flex mx-auto my-10 justify-between'>
            <div className="w-2/3 flex flex-wrap justify-start	cursor-pointer">
                {
                    list.map((item, index) => (
                        <h2 key={index} className='px-4 rounded-sm bg-[#81e6d9] font-bold mb-2 mr-2 text-black hover:scale-50 cursor-pointer ease-in-out duration-300	'>{item}</h2>

                    ))
                }
                
            </div>

            <div className="w-1/3 flex flex-col">
                
                <motion.button initial={{ opacity: 0, x: 100 }} animate={{opacity: 1, x: 0}} transition={{ duration: 0.5 }} onClick={handleClick} className="tracking-wide uppercase border-2 rounded-md border-[#81e6d9] hover:text-[#81e6d9] font-bold px-4 py-2 mb-4">Portfolio</motion.button>
                
                <motion.button initial={{ opacity: 0, x: 100 }} animate={{opacity: 1, x: 0}} transition={{ duration: 0.9 }} className="tracking-wide uppercase border-2 inline rounded-md border-[#81e6d9] hover:text-[#81e6d9] font-bold px-4 py-2 mb-4">Download Resume</motion.button>
            </div>
        </div>
    );
}

