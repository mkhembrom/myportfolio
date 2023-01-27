import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight, BiLinkAlt } from 'react-icons/bi'

const Buymyev = () => {
    return (
        <div>
            <Head>
                <title>Manjesh Hembrom | Work | Windbnb</title>
                <link rel="icon" href="/cat.ico" />
            </Head>
            <div className="w-[85%] md:w-1/2 lg:w-1/3 mx-auto mt-20 flex px-10 items-center">
                {/* <div className="w-1/3 p-2 ">
                    <img className="bg-white rounded-[30px]" src="/cat.svg" alt="" />
                </div>
                <div className="w-2/3">
                    <p className="py-2 text-2xl">Works,</p>
                </div> */}
            </div>
            <div className="w-[85%] xl:w-2/4 2xl:w-1/3 flex mx-auto px-2 md:px-10 mt-10 items-center">
                <Link href="/works" className="text-[#d055a1] rounded-md px-1 text-[18px] font-bold flex items-center">Works <span>
                    <BiChevronRight color='#fff' size={24} /></span></Link>
                <h2 className="font-bold text-[20px] relative">windbnb<span className="rounded-md bg-gray-500 text-[12px] font-bold text-white mb-2 px-2 py-0 text-[14px] absolute top-[2px] ml-1">2022</span></h2>
            </div>
            <div className='w-[85%] xl:w-2/4 2xl:w-1/3 mx-auto my-4 px-6 md:px-12'>
                <p className='text-[16px] leading-6 tracking-wider	'>Windbnb is clone project for airbnb. The feature includes selecting rooms and people acomodation per room listing. This website is inactive.</p>
                <div className='flex mt-5 items-start md:items-center space-x-4'>
                    <p className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Website</p>
                    <Link href="https://mkhembrom.github.io/windbnb/" target="_blank" className='text-[#d055a1] flex break-all font-bold'>https://mkhembrom.github.io/windbnb/<span><BiLinkAlt color="#fff" /></span></Link>
                </div>
                <div className='flex items-start md:items-center space-x-4'>
                    <p className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Stack</p>
                    <p className='text-[#d055a1] break-all flex font-bold'>React, styled-component, framer-motion, javascript</p>
                </div>
                <div className='flex items-start md:items-center space-x-4'>
                    <p className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Inspiration</p>
                    <Link href="https://devchallenges.io/solutions/fIYVt64acW9xynLdKLXA" target="_blank" className='text-[#d055a1] flex break-all  font-bold'>https://devchallenges.io<span><BiLinkAlt color="#fff" /></span></Link>

                </div>
                <Image loading="lazy" width={400} height={400} layout="responsive" className="rounded-md my-4" src="/windbnb.png" alt="" />
                <div className='grid grid-rows-2 grid-cols-2 gap-4'>
                    <Image loading="lazy" width={400} height={400} layout="fixed" className="rounded-md row-span-1 col-span-1 h-full object-cover" src="/windbnbdrop.jpeg" alt="" />
                    <Image loading="lazy" width={400} height={400} layout="fixed" className="rounded-md row-span-2 col-span-1 w-full h-[400px] object-cover" src="/windbnbres.jpeg" alt="" />
                    <Image loading="lazy" width={400} height={400} layout="fixed" className="rounded-md row-span-1 col-span-1 h-full object-cover" src="/windbnbdrop2.jpeg" alt="" />
                </div>
                <Image loading="lazy" width={400} height={400} layout="responsive" className="rounded-md my-4" src="/windbnbhome.jpeg" alt="" />

            </div>
        </div>
    );
}

export default Buymyev