import { motion } from 'framer-motion'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const INITIALSTATE = {
        name: '',
        email: '',
        message: ''
    }
    const [data, setData] = useState(INITIALSTATE);

    const resetData = async () => {
        setData({...INITIALSTATE});
    }

    const handleData = async (e: any) => {
        setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact', {
                body: JSON.stringify({
                    data: data,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
            const result = await res.json();


            if (res.status == 200 && result.success == true) {
                toast.success('Thank You!', {
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "dark",
                    closeButton: false,
                    position: toast.POSITION.BOTTOM_CENTER
                })
                
            } else {
                toast.error('fill up required field!', {
                    autoClose: 2000,
                    hideProgressBar: true,
                    theme: "dark",
                    closeButton: false,
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }

            await resetData();
            
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Working")
            console.log("Finish")
        }





    }


    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-[200] text-center">Reach out to me!</h1>
            <p className='w-[85%] md:w-1/2 mx-auto italic text-slate-500'>Thank you for taking the time to view my portfolio. If you have any feedback or just want to say hi, please use this contact form to send me a message.</p>
            <form onSubmit={handleSubmit} className="w-[85%] md:w-1/2 flex flex-col mt-6 md:p-10 rounded-md justify-center items-center">
                <motion.input onChange={handleData} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 0.8 }} placeholder="Enter your name" type="text" name="name" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2 active:border-primary focus:outline-none focus:ring focus:ring-primary rounded-md border-2 border-[#81e6d9]" />
                <motion.input onChange={handleData} initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1 }} placeholder="Enter your email" type="email" name="email" className="bg-white text-black w-full md:w-3/4 mb-3 px-4 py-2	rounded-md border-2 border-[#81e6d9] active:border-primary focus:outline-none focus:ring focus:ring-primary" />
                <motion.textarea onChange={handleData} initial={{ opacity: 0, y: -300 }} animate={{ opacity: 1, y: 0, scale: [0.8, 1] }} transition={{ duration: 1.2 }} placeholder="Message me!" name="message" className="bg-white	 text-black w-full md:w-3/4 h-40 mb-3 px-4 py-2 active:border-primary focus:outline-none focus:ring focus:ring-primary	rounded-md border-2 border-[#81e6d9]"></motion.textarea>
                <motion.input initial={{ scale: 0.9, y: 300 }} animate={{ y: 0 }} transition={{ duration: 0.85 }} whileHover={{ scale: [0.9, 1], }} id="spinner" type="submit" value="send" className="w-1/3 mx-auto uppercase font-bold cursor-pointer rounded-md px-4 py-2 border-2 border-[#81e6d9] bg-[#81e6d9] " />
            </form>
            <ToastContainer />
        </div>
    );
}

export default Contact