import Link from 'next/link';
import { BiChevronRight, BiLinkAlt } from 'react-icons/bi'

const Grandiose = () => {
    return (
        <div>
            <div className="w-[85%] md:w-2/3 mx-auto mt-20 flex px-10 items-center">
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
                <h2 className="font-bold text-[20px] relative">Grandiose Art<span className="rounded-md bg-gray-500 text-[12px] font-bold text-white mb-2 px-2 py-0 text-[14px] absolute top-[2px] ml-1">2022</span></h2>
            </div>
            <div className='w-[85%] md:w-1/2 mx-auto my-4 px-6 md:px-12'>
                <p className='text-[16px] leading-6 text-justify'>A gallery website for a client is a website that is designed to showcase and display the client's art or other visual media, such as photographs, paintings, drawings, and sculptures.  <br/><br/>This may include features such as high-quality images of the artwork, detailed descriptions of the pieces, and information about the client and their artistic practice.<br/><br/>In addition to displaying the artwork, a gallery website for a client may also include features that allow visitors to purchase the artwork or to contact the client directly.</p>
                <div className='flex mt-5 items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Website</div>
                    <Link href="https://grandioseart.com" target="_blank" className='text-[#d055a1] hover:underline flex font-bold'>https://grandioseart.com <BiLinkAlt color="#fff" /></Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Stack</div>
                    <p className='text-[#d055a1] flex font-bold'>Gridsome, wordpress, strapi, scss</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex bg-[#34403a] text-[14px] text-[#94ddad] font-bold uppercase'>Company</div>
                    <Link href="https://luxeveda.com/" target="_blank" className='text-[#d055a1] hover:underline flex font-bold'>https://luxeveda.com<BiLinkAlt color="#fff" /></Link>
                </div>
                <img className="rounded-md my-4" src="/grandiose.png" alt="" />
                <img className="rounded-md my-4" src="/grandiosepdp.png" alt="" />
                <div className='grid grid-rows-2 grid-cols-2 gap-4'>
                <img className="rounded-md row-span-1 col-span-1 h-full object-cover" src="/grandiosehome.png" alt="" />
                <img className="rounded-md row-span-2 col-span-1 object-cover" src="/grandioseframe.png" alt="" />
                <img className="rounded-md row-span-1 col-span-1 h-full object-cover" src="/grandiosepdp.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Grandiose