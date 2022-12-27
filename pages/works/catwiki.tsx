import Link from 'next/link';
import { BiChevronRight, BiLinkAlt } from 'react-icons/bi'

const Buymyev = () => {
    return (
        <div>
            <div className="w-[85%] md:w-1/2 mx-auto mt-20 flex px-2 md:px-10 items-center">
                {/* <div className="w-1/3 p-2 ">
                    <img className="bg-white rounded-[30px]" src="/cat.svg" alt="" />
                </div>
                <div className="w-2/3">
                    <p className="py-2 text-2xl">Works,</p>
                </div> */}
            </div>
            <div className="w-[85%] md:w-1/2 flex mx-auto px-2 md:px-10 mt-10 items-center">
                <Link href="/works" className="text-[#d055a1] rounded-md px-1 text-[18px] font-bold flex items-center">Works <span>
                    <BiChevronRight color='#fff' size={24} /></span></Link>
                <h2 className="font-bold text-[20px] relative">catwiki<span className="rounded-md bg-gray-500 text-[12px] font-bold text-white mb-2 px-2 py-0 text-[14px] absolute top-[2px] ml-1">2022</span></h2>
            </div>
            <div className='w-[85%] md:w-1/2 mx-auto my-4 px-6 md:px-12'>
                <p className='text-[16px] leading-6 tracking-wide'>Cat wiki website let you know about different cats breed.<br/> Over thousands of cat breed in this list.<br/> It's one of my personal project and fully responsive across devices and screens.</p>
                <div className='flex mt-5 items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Website</div>
                    <Link href="https://catmk.netlify.app/" target="_blank" className='text-[#d055a1] hover:underline flex font-bold'>https://catmk.netlify.app<BiLinkAlt color="#fff" /></Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Stack</div>
                    <p className='text-[#d055a1] flex font-bold'>Next, css, javascript, framer-motion, api(catbreed)</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Inspiration</div>
                    <Link href="https://devchallenges.io/solutions/fIYVt64acW9xynLdKLXA" target="_blank" className='text-[#d055a1] flex font-bold'>https://devchallenges.io<BiLinkAlt color="#fff" /></Link>

                </div>
                <img className="rounded-md my-4 w-full" src="/catweb.png" alt="" />

                <div className='grid grid-rows-auto grid-cols-2 gap-4'>
                <img className="rounded-md h-full w-full" src="/catdesc.png" alt="" />
                <img className="rounded-md h-full w-full object-cover" src="/catselect.png" alt="" />
                <img className="rounded-md w-full h-full" src="/catother.png" alt="" />
                <img className="rounded-md h-full w-full" src="/catsss.png" alt="" />
                </div>
               
            </div>
        </div>
    );
}

export default Buymyev