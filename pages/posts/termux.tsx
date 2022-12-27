const Termux = () => {
    return (
        <div className="w-[85%] md:w-1/2 mx-auto mt-20 flex md:px-10 items-center">

            <div className=" flex flex-col">
                <p className="my-4 text-[18px]">Yes, it is possible to run a React app in Termux on an Android device. Here are the steps you can follow:</p>
                <div className="mb-4">
                    <p className="text-[#81e6d9] font-bold">1. Install Node.js and npm in Termux:</p>
                    <ul className="list-disc ml-5">
                    <li className="leading-7">
                            Open Termux and run the following command to update the package manager&apos;s package list: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`pkg update`</b>
                        </li>
                        <li className="leading-7">Run the following command to install Node.js: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`pkg install nodejs`</b></li>
                        <li className="leading-7">npm (Node.js package manager) should be installed automatically with Node.js. You can verify this by running the <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`npm -v`</b> command, which should output the version number of npm.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="text-[#81e6d9] font-bold">2. Create a new React app:</p>
                    <ul className="list-disc ml-5">
                    <li className="leading-7">
                        In Termux, navigate to the directory where you want to create the app. For example, you can use the <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`cd`</b> command to change to your home directory: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`cd ~`</b>
                        </li>
                        <li className="leading-7">Run the following command to create a new React app using the create-react-app tool: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`npx create-react-app my-app`</b></li>
                        <li className="leading-7">Replace &quot;my-app&quot; with the name you want to give to your app.</li>
                        <li className="leading-7">This will create a new directory with the same name as your app, and it will contain the initial files and structure for a React app.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="text-[#81e6d9] font-bold">3. Run the React app in Termux:</p>
                    <ul className="list-disc ml-5">
                        <li className="leading-7">
                        Navigate to the directory of your app: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`cd my-app`</b>
                        </li>
                        <li className="leading-7">Run the following command to start the development server: <b className="bg-slate-800 border px-4 rounded-md border-slate-300 inline-block">`npm start`</b></li>
                        <li className="leading-7">This will start the development server and open a new browser window with the React app. You should see the default React app page, which says &quot;Welcome to React.&quot;</li>
                       
                    </ul>
                </div>
                <p>I hope these steps are helpful! Let me know if you have any questions or need further assistance.</p>
            </div>
        </div>
    );
}

export default Termux;