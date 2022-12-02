import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import { Header } from '../components/Header'
import { PageIndicator } from '../components/PageIndicator'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
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
  );
}
