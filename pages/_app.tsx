import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import { Header } from '../components/Header'
import { PageIndicator } from '../components/PageIndicator'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url: String) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url: String) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })

  return <>
    {loading && (
    <div id="spinner" className='h-full w-full fixed top-0 left-0 flex justify-center items-center'>
      <PuffLoader color="#36d7b7" />
    </div>
    )}
  </>
  
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
    {/* <Loading key={router.asPath}/> */}
    <div className='relative'>
      <Header />
      <PageIndicator />

      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      <footer className='w-1/2 text-center mx-auto py-6'>
        <p className='text-slate-400 text-[15px]'>© {new Date().getFullYear()} Manjesh Hembrom. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  );
}
