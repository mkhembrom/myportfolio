import { motion } from 'framer-motion'
import { useState, CSSProperties } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { PropagateLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Contact = () => {

    const [loading, setLoading] = useState(false);

    const INITIALSTATE = {
        name: '',
        email: '',
        message: ''
    }
    const [udata, setUData] = useState(INITIALSTATE);

    const handleData = async (e: any) => {
        setUData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('/api/contact', udata);

            console.log(res.data);
            const result = await res.data;

            if (result.success == true) {
                setLoading(false);
                toast.success('Thank You!', {
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "dark",
                    closeButton: false,
                    position: toast.POSITION.BOTTOM_CENTER
                })
                setUData({ ...INITIALSTATE });
            }

            if (result.success == false) {
                toast.success('Fill up input field', {
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "dark",
                    closeButton: false,
                    position: toast.POSITION.BOTTOM_CENTER
                })
                // setUData({...INITIALSTATE}); 
            }
            // resetData();

        } catch (error) {
            console.log(error);
        } finally {
            console.log("Finish")
        }
    }

    const [tilt, setTilt] = useState(false);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",

    };



    return (
        <>
            <div className="w-full h-screen mt-10 flex flex-col items-center justify-center">
                {/* <h1 className="text-4xl md:text-6xl  font-[200] text-center">Reach out to me!</h1> */}
                <div className=' w-[85%] md:w-1/2 flex space-x-2 md:space-x-6 mt-[100px] items-center justify-center'>
                    <div className="rounded-full bg-[#fff] mr-2 overflow-hidden" onMouseEnter={() => setTilt(true)} onMouseLeave={() => setTilt(false)}>
                        <Image className={`bg-white rounded-md translate-y-2 ${tilt ? ' translate-y-8  duration-500' : 'rotate-0 duration-300'}`} src='/cat.svg' alt='cat' width={100} height={100} />
                    </div>
                    <p className='text-[30px] font-bold inline text-center md:text-[58px]'>Get in touch!</p>
                </div>
                <p className='w-[85%] md:w-1/2 md:px-10 text-center text-[14px] md:text-[20px] text-center mx-auto italic my-4 text-white'>Thank you for taking the time to view my portfolio. If you have any feedback or just want to say hi, please use this contact form to send me a message.</p>

                <form onSubmit={handleSubmit} className="flex w-[85%] md:w-1/2 flex-1 flex-col  rounded-md justify-center items-center">
                    <motion.input required autoComplete='off' id="name" onChange={handleData} value={udata.name} initial={{ opacity: 0, }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1 }} placeholder="Enter your name" type="text" name="name" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2 active:border-[#81e6d9] focus:outline-none focus:ring focus:ring-[#81e6d9] rounded-md border-2 border-[#81e6d9]" />
                    <motion.input required autoComplete='off' onChange={handleData} value={udata.email} initial={{ opacity: 0, }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1 }} placeholder="Enter your email" type="email" name="email" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2	rounded-md border-2 border-[#81e6d9] active:border-[#81e6d9] focus:outline-none focus:ring focus:ring-[#81e6d9]" />
                    <motion.textarea required autoComplete='off' onChange={handleData} value={udata.message} initial={{ opacity: 0, }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1 }} placeholder="Message me!" name="message" className="bg-white	 text-black w-full md:w-3/4 h-40 mb-3 px-4 py-2 active:border-[#81e6d9] focus:outline-none focus:ring focus:ring-[#81e6d9]	rounded-md border-2 border-[#81e6d9]"></motion.textarea>

                    {
                        !loading ? <motion.input initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} id="spinner" type="submit" value="send" className="w-1/3 mx-auto uppercase font-bold cursor-pointer rounded-md px-4 py-2  my-4 bg-[#81e6d9] " />
                            :
                            <div className='my-6'>
                                <PropagateLoader color="#36d7b7" />
                            </div>

                    }
                </form>
                <ToastContainer />
            </div>

        </>
    );
}

export default Contact