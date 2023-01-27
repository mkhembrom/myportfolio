import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight, BiLinkAlt } from 'react-icons/bi'

const Snake = () => {
    return (
        <div>
            <div className="w-[85%] md:w-1/2 lg:w-1/3 mx-auto mt-20 flex px-10 items-center"></div>
            <div className="w-[85%] xl:w-2/4 2xl:w-1/3 flex mx-auto px-2 md:px-10 mt-10 items-center">
                <Link href="/works" className="text-[#d055a1] rounded-md px-1 text-[18px] font-bold flex items-center">Works <span>
                    <BiChevronRight color='#fff' size={24} /></span></Link>
                <h2 className="font-bold text-[20px] relative">snake game<span className="rounded-md bg-gray-500 text-[12px] font-bold text-white mb-2 px-2 py-0 text-[14px] absolute top-[2px] ml-1">2023</span></h2>
            </div>
            <div className='w-[85%] xl:w-2/4 2xl:w-1/3 mx-auto my-4 px-6 md:px-12'>
                <p className='text-[16px] leading-6 tracking-wide'>Mini snake game build using html 5 canvasand javascript.<br /> Game sound effect and level difficulties changes based on score.<br /></p>
                <div className='flex mt-5 items-start md:items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Website</div>
                    <Link href="https://mksnake.netlify.app/" target="_blank" className='text-[#d055a1] break-all hover:underline flex font-bold'>https://mksnake.netlify.app <span><BiLinkAlt color="#fff" /></span></Link>
                </div>
                <div className='flex items-start md:items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Stack</div>
                    <p className='text-[#d055a1] break-all flex font-bold'>Html, css, javascript, canvas</p>
                </div>
                {/* <div className='flex items-start md:items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Inspiration</div>
                    <Link href="https://devchallenges.io/solutions/fIYVt64acW9xynLdKLXA" target="_blank" className='text-[#d055a1] break-all flex font-bold'>https://devchallenges.io<span><BiLinkAlt color="#fff" /></span></Link>

                </div> */}
                <Image loading="lazy" width={400} height={400} layout="fixed" className="rounded-md my-4 w-full" src="/snake.png" alt="snake" />
                <div className='grid grid-rows-1 grid-cols-2 gap-4 my-4'>
                    <Image loading="lazy" width={400} height={100} layout="fixed" placeholder="empty" className="rounded-md row-span-1 col-span-1 object-cover" src="/snake_0.png" alt="g3" />
                    <Image loading="lazy" width={400} height={100} layout="fixed" placeholder="empty" className="rounded-md row-span-1 col-span-1 object-cover" src="/snake_1.png" alt="g4" />
                </div>
                <div className='grid grid-rows-1 grid-cols-2 gap-4'>
                    <Image loading="lazy" width={400} height={500} layout="fixed" placeholder="empty" className="rounded-md row-span-1 col-span-1 object-cover" src="/snake_2.png" alt="g5" />
                    <Image loading="lazy" width={400} height={500} layout="fixed" placeholder="empty" className="rounded-md row-span-1 col-span-1 object-cover" src="/snake_3.png" alt="g5" />
                </div>

            </div>
        </div>
    );
}

export default Snake