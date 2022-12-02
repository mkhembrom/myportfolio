import { useState } from "react";

export const PageIndicator = () => {

    const [active, setActive] = useState('work');

    return (
        <div className="fixed right-0 top-[50%] w-[40px] flex-col">
            <div className="w-3 h-3 rounded-full mb-2 border-2 border-emerald-200 cursor-pointer"></div>
            <div className="w-3 h-3 bg-emerald-200 rounded-full mb-2 border-2 border-emerald-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full mb-2 border-2 border-emerald-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full mb-2 border-2 border-emerald-200 cursor-pointer"></div>

        </div>
    );
}