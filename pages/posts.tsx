import { Layout } from "../components/layout/Layout";

const Posts = () => {
    return (
        <div className="w-2/5 mx-auto">
            <h1 className="my-20">Post</h1>
            <div className="grid grid-rows-4 grid-cols-2 gap-8">
                <div className="rounded-md">
                    <img className="object-cover rounded-md h-40" src="/grandiose.png" alt="grandiose" />
                    <div className="text-center">
                        <h2 className="text-[18px] text-green-300 font-bold mt-2">Grandiose Art</h2>
                        <p className="text-[16px] leading-tight">Gallery art websites for potenstial client</p>
                    </div>
                </div>
                <div className="rounded-md">
                    <img className="object-cover rounded-md h-40" src="/buymyev.png" alt="grandiose" />
                    <div className="text-center">
                        <h2 className="text-[18px] text-green-300 font-bold mt-2">Buymyev.in</h2>
                        <p className="text-[16px] leading-tight">Smart, connected urban mobility solution for your work & leisure.</p>
                    </div>
                </div>
                <div className="rounded-md">
                    <img className="object-cover rounded-md h-40" src="/catweb.png" alt="grandiose" />
                    <div className="text-center">
                        <h2 className="text-[18px] text-green-300 font-bold mt-2">CatWiki</h2>
                        <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed</p>
                    </div>
                </div>
                <div className="rounded-md">
                    <img className="object-cover rounded-md h-40" src="/windbnb.png" alt="grandiose" />
                    <div className="text-center">
                        <h2 className="text-[18px] text-green-300 font-bold mt-2">Windbnb</h2>
                        <p className="text-[16px] leading-tight">Catwiki let you know more about different cats breed</p>
                    </div>
                </div>
                <div className="rounded-md h-40">5</div>
                <div className="rounded-md h-40">6</div>
                <div>7</div>
                <div>8</div>
            </div>
        </div>
      
    );
}

export default Posts