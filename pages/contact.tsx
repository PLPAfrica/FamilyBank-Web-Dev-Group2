import Head from "next/head"
import { useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    window.open(
      `mailto:evansnyamai98@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <main>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section>
        <img className="w-full h-56" src="https://media.istockphoto.com/photos/contact-us-concept-icon-telephone-address-and-email-on-blue-3d-picture-id1312566254?b=1&k=20&m=1312566254&s=170667a&w=0&h=6a3bBX8L-53D30tKFVAQlA6_3lclcsWThP1ZVTDwcGE=" alt="" />
        <section className="max-w-6xl mx-auto mt-4 p-3">
          <h1 className="font-bold mb-5 text-4xl">Contact Us</h1>
          <h1 className="font-bold mb-5 text-2xl">Fill in the contact-us form and we will get to you.Thank You.</h1>
          <p className="text-md ">Contact-us  To buy our VIP tips,check out our plans <span className="font-bold text-blue-500 hover:text-blue-800 cursor-ponter">HERE</span> .</p>
          <p className="text-md mt-4">For Faster reply , use the live chat option .</p>
          <p className="text-md mt-4">Email     :  support@profit-tips.website</p>
          <p className="font-bold mt-4 mb-4 text-xl">Working Hours :  All times are GMT + 3</p>
          <p className="mb-4">Monday - Friday   : 08:00 AM - 20:00 PM</p>
          <p className="mb-4">Sunday                   : 10:00 AM - 14:00 PM</p>
          <p className="mb-4">Sunday                   : 10:00 AM - 14:00 PM</p>
        </section>
        <section className="max-w-6xl mx-auto mt-4 mb-7 p-3">
            <form onSubmit={submitForm} className="max-w-xl">
            <fieldset className="space-y-5">
              <div>
                <label className="font-bold" htmlFor="contactName">
                  Name <span className="text-blue-600">*</span>
                </label>
                {/* <input
                  type="text"
                  defaultValue=""
                  value={name}
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                /> */}
                <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-700 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
              </div>

              <div>
                <label className="font-bold"  htmlFor="contactEmail">
                  Email <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-700 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />

              </div>

              <div>
                <label className="font-bold" htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-700 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
              </div>

              <div>
                <label className="font-bold" htmlFor="contactMessage">
                  Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-700 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="border border-blue-600 text-blue-800 font-bold px-5 hover:ease-in-out duration-150 py-2 rounded-full transform hover:scale-105 cursor-pointer">
                  Send Message
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </section>

    <Footer/>
    </main>
  )
}

export default contact