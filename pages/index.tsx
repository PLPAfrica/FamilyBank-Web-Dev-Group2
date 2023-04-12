import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Betting Tips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>
      <main className="-mb-2">
        <section className=''>
          <Image className='w-full' src="/messi1.jpg" alt="Vercel Logo" width={1800} height={820} />
          <div className='absolute lg:-mt-80 md:-mt-80 md:block lg:block hidden ml-28'>
            <h3 className='text-md sm:text-sm text-white font-bold'>PAID EXPERT FOOTBALL PREDICTIONS AND TIPS</h3>
            <h2 className='lg:text-5xl font-bold mt-4 text-white md:text-2xl sm:text-sm'>Buy FootBall Predictions</h2>
            <p className='mt-4 mb-3 text-white text-2xl font-normal'>That Scale</p>
           <Link href="/buyVip">
             <button className='border-2 border-red-600 text-white rounded-sm pl-10 pr-10 p-3 bg-red-600 font-bold hover:bg-transparent hover:border-red-600 hover:text-red-600'>BUY NOW</button>
           </Link>
            
          </div>

        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
 
