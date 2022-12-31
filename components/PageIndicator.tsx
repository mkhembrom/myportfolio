import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const PageIndicator = () => {

    const router = useRouter();
    console.log(router);

    const [active, setActive] = useState('works');
    function activePage() {
        setActive(router.pathname.split('/')[1]);
    }

    useEffect(() => {
        activePage();
    }, [router])

    return (
        <div className="invisible md:visible fixed right-0 top-[50%] w-[40px] flex-col">
            <Link href="/">
                <div className={`w-3 h-3 ${active == "" ? "bg-[#81e6d9] dark:bg-pink-300" : ""} rounded-full mb-2 border-2 border-[#81e6d9] dark:border-pink-300 cursor-pointer`}></div>
            </Link>
            <Link href="/works">
                <div className={`w-3 h-3 ${active == "works" ? "bg-[#81e6d9] dark:bg-pink-300" : ""} rounded-full mb-2 border-2 border-[#81e6d9] dark:border-pink-300 cursor-pointer`}></div>
            </Link>
            <Link href="/posts">
                <div className={`w-3 h-3 ${active == "posts" ? "bg-[#81e6d9] dark:bg-pink-300" : ""} rounded-full mb-2 border-2 border-[#81e6d9] dark:border-pink-300 cursor-pointer`}></div>
            </Link>
            <Link href="/contact">
                <div className={`w-3 h-3 ${active == "contact" ? "bg-[#81e6d9] dark:bg-pink-300" : ""} rounded-full mb-2 border-2 border-[#81e6d9] dark:border-pink-300 cursor-pointer`}></div>
            </Link>
        </div>
    );
}