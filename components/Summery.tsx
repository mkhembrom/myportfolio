import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";

const TextHighlight = ({ show, animationDuration, text, animationDelay }: any) => {

    return (
        <>
            <RoughNotation
                type="box"
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

const FullStackEngineer = ({ show, animationDuration }: any) => {

    return <RoughNotation type="highlight" animationDelay={1000} strokeWidth={1} color="yellow" animationDuration={animationDuration} show={show}>full-stack developer</RoughNotation>;
}

const Experiance = ({ show, animationDuration }: any) => {

    return <RoughNotation type="highlight" animationDelay={2000} strokeWidth={1} color="yellow" animationDuration={animationDuration} show={show}>1.5+</RoughNotation>;
}

export const Summery = () => {
     const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        trackVisibility: true,
        delay: 100
    });

    return (
        <div ref={ref} className="w-[85%] md:w-1/2 mx-auto">
            <h2 className="border-b-4 border-white-300 text-[#81e6d9] dark:text-pink-300 text-2xl font-bold inline">Summary</h2>
            <div className="py-4">
                <p className=" text-[18px] text-justify">Hello and welcome to my portfolio website! My name is <span className="text-[#81e6d9] dark:text-pink-300 font-bold">Manjesh Hembrom</span> and I am a <span className={`${inView ? "delay-[1000ms] duration-1000 text-black" : ""}`}><FullStackEngineer show={inView} animationDuration={2000} /></span> with <span className={`${inView ? "delay-[2500ms] duration-1500 text-black" : ""}`}><Experiance show={inView} animationDuration={3000} /></span> years of experience in the field. I have a passion for Software devlopment and I am constantly striving to improve my skills and knowledge in order to provide the best possible solutions for my clients.
                    <br /><br />
                    I have a strong background in <TextHighlight show={inView} animationDuration={3000} text="java" /> as well as in <TextHighlight animationDelay={1000} text="javascript" show={inView} animationDuration={3500} /> and I have worked on a wide range of projects that have allowed me to develop my skills and experience.
                </p>
            </div>
        </div>
    );
}
