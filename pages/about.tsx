import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
    <main>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <section className="mx-auto mt-4 max-w-5xl p-3">
        <h1 className="mb-3 text-4xl font-bold">Available Payment Methods</h1>
        <p>
          Become Our Member and Enjoy Easy Income. Contact us at{' '}
          <span className="cursor-pointer text-red-600">
            Support@profit-tips.website
          </span>{' '}
          to get payment details.
        </p>
        <div className="flex justify-between flex-wrap space-x-5 space-y-5 mt-5 mb-6">
          <img className='max-h-24 w-[200px]' src="https://play-lh.googleusercontent.com/tWqxt-n4HhD4V-7jpscyqScHw1JJFMaw3wAeTv9usOt5fN4YQFzJKRmyCqGqdHBOEBc" alt="" />
          <img className='w-[200px] max-h-24' src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png" alt="" />
          <img className='w-[200px] max-h-24' src="https://upload.wikimedia.org/wikipedia/en/d/de/KCB_Bank_Kenya_Limited_logo.png" alt="" />
          <img className='w-[200px] max-h-24' src="https://kenyanmagazine.co.ke/wp-content/uploads/2021/02/images-6.jpeg" alt="" />
        </div>
        <h1 className="mb-3 mt-3 text-2xl font-bold">
          Other Payment Methods :
        </h1>
        <p className="mb-3">
          {' '}
          <span className="font-bold">For Skrill </span> : Send Payment to
          support@profit-tips.website . After send an email to
          support@profit-tips.website with payment email and package type paid
          for.
        </p>
        <h4 className="mb-3 font-bold">For Mpesa Kenya :</h4>
        <p className="mt-3">
          Go to M-PESA and select{' '}
          <span className="font-bold">Lipa Na M-PESA</span> . Select{' '}
          <span className="font-bold">Pay Bill</span> and enter business number{' '}
          <span className="font-bold">255255</span>. Enter recipient’s mobile
          number as account number in the format 2557XXXXXXXX (Send to
          255758995538 ) then Enter amount, M-PESA PIN and confirm the
          transaction.
        </p>
        <div className="ml-3 mt-3 space-y-4">
          <li className="list-inside">Daily : 750 Ksh</li>
          <li className="list-inside">Weekly : 2,000 Ksh</li>
          <li className="list-inside">Weekly : 2,000 Ksh</li>
          <li className="list-inside">Yearly : 31,700 Ksh</li>
        </div>

        <h1 className="mt-5 mb-3 text-4xl font-bold ">VIP-Tips Disclaimer:</h1>
        <p className='mb-3'>
          1.By using Profit Tips ,you approve the Terms Of Service of the
          website.You must be 18 years of age.
        </p>
        <p className='mb-3'>
          2.Past Performance of the site does not predict future
          performances.This is due to a number of factors that happen.
        </p>
        <p className='mb-3'>
          3.Information on this site is for informational purposes and using it
          against the law is strictly prohibited.
        </p>
      </section>
      <Footer />
    </main>
  )
}

export default About
