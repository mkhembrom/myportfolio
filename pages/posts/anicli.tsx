import Link from "next/link";
import { BiChevronRight, BiLinkAlt } from "react-icons/bi";
import { RoughNotation } from "react-rough-notation";
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
const ProjectHighlight = ({ touch, animationDuration, name }: any) => {

    return <RoughNotation type="box" strokeWidth={1} color="pink" animationDuration={animationDuration} show={touch}>{name}</RoughNotation>;
}

const Code = () => {
    const code = `var data = 1;`;
    const htmlss = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    return htmlss;
}

const Anicli = () => {

    useEffect(() => {
        Prism.highlightAll();

    }, [])



    return (
        <>
            <Head>
                <title>Manjesh Hembrom | Post | Anicli</title>
                <link rel="icon" href="/cat.ico" />
            </Head>
            <div className="w-[85%] xl:w-2/4 2xl:w-1/3 mx-auto mt-20 flex md:px-10 items-center">
                <div className="flex flex-col mt-10">
                    <Image className="w-full" width={400} height={400} layout="responsive" loading="lazy" src="/anicli.png" alt="anicli" />
                    <p className="mt-10 text-[18px] text-justify">There are several command line applications that allow you to search for and watch anime streaming online. One example is AniSearch, which is a command line interface for searching and displaying information about anime and manga. It can be used to search for specific anime by title, genre, or other criteria, and it can also provide information about individual episodes and series.
                        <br /><br />
                        To use AniSearch, you will need to install it on your computer and then run it from the command line. Once it is running, you can use various commands to search for anime, view information about specific series or episodes, and even watch anime streaming online.
                    </p>
                    <br />
                    <p className="text-[18px] text-justify">Here is an example of how you might use AniSearch to search for and watch anime:
                    </p>
                    <ol className="list-decimal ml-4">
                        <li className="my-4">
                            <p className="text-[18px] my-4 text-justify">Install AniSearch by running the following command:</p>
                            <pre className="rounded-md">
                                <code className="language-javascript">

                                    {`pip install anisearch`}
                                </code>
                            </pre>
                        </li>

                        <li>
                            <p className="text-[18px] my-4 text-justify">Run AniSearch by typing the following command:</p>
                            <pre className="rounded-md">
                                <code className="language-python">
                                    {`anisearch`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <p className="text-[18px] my-4 text-justify">Use the `search` command to search for anime by title, genre, or other criteria. For example, to search for anime with the keyword &quot;action,&quot; you would type:</p>
                            <pre className="rounded-md">
                                <code className="language-javascript">
                                    {`search action`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <p className="text-[18px] my-4 text-justify">Select the anime you want to watch by typing the number next to its title. For example, if you want to watch the first anime in the search results, you would type:</p>
                            <pre className="rounded-md">
                                <code className="language-javascript">
                                    {`1`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <p className="text-[18px] my-4 text-justify">Use the `watch` command to start streaming the selected anime. For example:</p>
                            <pre className="rounded-md">
                                <code className="language-javascript">
                                    {`watch`}
                                </code>
                            </pre>
                        </li>
                    </ol>
                    <p className="text-[18px] my-5 text-justify">Please note that AniSearch is just one example of a command line application for searching and watching anime. There are many other options available, and the specific commands and functionality may vary depending on the application you choose.</p>
                </div>
            </div>
        </>

    );
}

export default Anicli