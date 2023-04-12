import Link from "next/link"

const Footer = () => {
  return (
    <main className=" text-white bg-black pb-9">
      <section className="max-w-6xl mx-auto flex flex-wrap justify-between pt-6 p-3">
        <div className="w-2/6">
          <h2 className="text-red-600  font-bold mb-2">ABOUT US</h2>
          <p className="text-sm text-gray-400 w-full sm:w-full">Profit Tips Betting has been providing its services worldwide to clients for 4 years.</p>
          <p className="hidden md:block mt-2 text-sm text-gray-400">
            Our Team has experience in this field and aims at providing value to clients. The best ROI available our there with the lowest charges and investment.
          </p>
        </div>
        <div>
          <h2 className="text-red-600 font-bold mb-2">RECENT POSTS</h2>
          <Link href="/blog">
            <p className="hover:text-red-500 text-gray-400 cursor-pointer">
              Liverpool wins
            </p>
          </Link>

        </div>
        <div>
          <h2 className="text-red-600 font-bold mb-2">QUICK LINKS</h2>
           <Link href="/about">
                <a className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3">About</a>
            </Link>
            <Link href="/buyVip">
                <h3 className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3 mt-3">Buy Vip</h3>
            </Link>
            <Link href="/freeOffers">
                <h3 className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3">Free Bet Offers</h3>
            </Link>
            <Link href="/ourRecord">
                <h3 className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3">Our Records</h3>
            </Link>
            {/* <Link href="/blog">
                <h3 className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3">Blog</h3>
            </Link> */}
            <Link href="/contact">
                <h3 className="cursor-pointer hover:text-red-500 text-sm text-gray-400 mb-3">Contacts</h3>
            </Link>
        </div>
        <div>
          <h2 className="text-red-600 font-bold mb-2">CONTACT US</h2>
          <p className="text-blue-700 font-bold text-sm mb-3">support@gmail.com</p>
          <p className="text-sm text-gray-400 mb-3">0712345678</p>
          <p className="text-sm text-gray-400 mb-3">0712345678</p>

        </div>
      </section>
    </main>
  )
}

export default Footer