const Posts = () => {
    return (
        <div className="w-2/5 mx-auto">
            <h1 className="my-20">Post</h1>
            <div className="grid grid-rows-4 grid-cols-2 gap-8">
                <div className="rounded-md h-40 bg-pink-400">1</div>
                <div className="rounded-md h-40 bg-green-400">2</div>
                <div className="rounded-md h-40 bg-red-400">3</div>
                <div className="rounded-md h-40 bg-blue-400">4</div>
                <div className="rounded-md h-40 bg-orange-400">5</div>
                <div className="rounded-md h-40 bg-yellow-400">6</div>
                <div>7</div>
                <div>8</div>
            </div>
        </div>
    );
}

export default Posts