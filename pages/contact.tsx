import { motion } from 'framer-motion'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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

            console.log(udata);

            const res = await axios.post('/api/contact',  udata);
          
            console.log(res.data);
            const result = await res.data;

            if (result.success == true) {
                toast.success('Thank You!', {
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "dark",
                    closeButton: false,
                    position: toast.POSITION.BOTTOM_CENTER
                })
                setUData({...INITIALSTATE}); 
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


    return (
        <>
        <div className="w-full h-screen mt-10 flex flex-col items-center justify-center">
            {/* <h1 className="text-4xl md:text-6xl  font-[200] text-center">Reach out to me!</h1> */}
            <p className='w-[85%] md:w-1/2 text-center text-[16px] md:text-[20px] text-center mx-auto italic my-4 text-[#69aaa2]'>Thank you for taking the time to view my portfolio. If you have any feedback or just want to say hi, please use this contact form to send me a message.</p>
         
           <form onSubmit={handleSubmit} className="flex w-[85%] md:w-1/2 flex-col md:p-10 rounded-md justify-center items-center">
                <motion.input autoComplete='false' id="name" onChange={handleData} value={udata.name} initial={{ opacity: 0,}} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 0.8 }} placeholder="Enter your name" type="text" name="name" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2 active:border-primary focus:outline-none focus:ring focus:ring-primary rounded-md border-2 border-[#81e6d9]" />
                <motion.input autoComplete='false' onChange={handleData} value={udata.email} initial={{ opacity: 0,  }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1 }} placeholder="Enter your email" type="email" name="email" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2	rounded-md border-2 border-[#81e6d9] active:border-primary focus:outline-none focus:ring focus:ring-primary" />
                <motion.textarea autoComplete='false' onChange={handleData} value={udata.message} initial={{ opacity: 0,  }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1.2 }} placeholder="Message me!" name="message" className="bg-white	 text-black w-full md:w-3/4 h-40 mb-3 px-4 py-2 active:border-primary focus:outline-none focus:ring focus:ring-primary	rounded-md border-2 border-[#81e6d9]"></motion.textarea>
                <motion.input initial={{ scale: 0.9, y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.85 }} whileHover={{ scale: [0.9, 1], }} id="spinner" type="submit" value="send" className="w-1/3 mx-auto uppercase font-bold cursor-pointer rounded-md px-4 py-2 border-2 border-[#81e6d9] bg-[#81e6d9] " />
            </form>
            <ToastContainer />
        </div>
       
        </>
    );
}

export default Contact