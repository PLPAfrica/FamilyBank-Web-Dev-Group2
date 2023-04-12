import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"

const freeOffers = () => {
  return (
    <main>
      <Head>
        <title>Free Betting Tips</title>
      </Head>
      <Header/>
      <main className="h-[90vh] flex items-center justify-center">
        <h1 className="">Sorry! We do not offer free Odds</h1>
      </main>
      <Footer/>
    </main>
  )
}

export default freeOffers