import Head from 'next/head'
import { Bio } from '../components/Bio'
import { Hero } from '../components/Hero'
import { Stack } from '../components/Stack'
import { Summery } from '../components/Summery'

export default function Home() {

  const description = "I'm a full-stack developer and I like making things on React/Nextjs and Flutter";
  const pageTitle = "Manjesh Portfolio";
  const twitterHandle = "https://twitter/HembromManjesh";
  const currentURL = "https://mkhembrom.com";
  const siteName = "mkhembrom.com";

  return (
    <div className=''>
      <Head>
        <title>Manjesh Hembrom | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content="Manjesh Hembrom" />

        {/* Twitter */}
        <meta name="twitter:card" content={description} key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta name="image" property="og:image" content={`${currentURL}/previeImage.png`} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <link rel="icon" href="/cat.ico" />
      </Head>
      <main >
        <Hero />
        <Stack />
        <Summery />
        <Bio />
      </main>
    </div>
  )
}
