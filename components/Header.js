import { useState } from 'react'

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  )
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className="flex h-20 items-center justify-center bg-black drop-shadow-md filter">
        <a href='/' className="cursor-pointer flex items-center font-bold ">
            <h3 className="text-red-600">BETTING</h3>
            <h3>TIPS</h3>                 
        </a>
      </div>
      <div className="ml-4 flex flex-col">
        <a
          className="my-4 text-xl font-medium text-black"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          About
        </a>
         <a
          className="my-4 text-xl font-medium text-black"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Buy Vip
        </a>
         <a
          className="my-4 text-xl font-medium text-black"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Free Bet Offers
        </a>
         <a
          className="my-4 text-xl font-medium text-black"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Our Record
        </a>
        <a
          className="my-4 text-xl font-normal text-black"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex h-20 items-center bg-black px-4 py-4 text-white drop-shadow-md filter">
      <MobileNav open={open} setOpen={setOpen} />
        <NavLink to="/">
            <div className="cursor-pointer flex items-center font-bold text-xl">
                <h3 className="text-red-600">BETTING</h3>
                <h3>TIPS</h3>                 
            </div>
        </NavLink>
      <div className="flex w-9/12 items-center justify-end">
        <div
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
              open ? 'translate-y-3.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-white transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
              open ? '-translate-y-3.5 -rotate-45' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex font-bold">
          <NavLink to="/about">
            <h3 className="cursor-pointer hover:text-red-500">ABOUT</h3>
            </NavLink>
          <NavLink to="/buyVip">
            <h3 className="cursor-pointer hover:text-red-500">BUY VIP</h3>
          </NavLink>
          <NavLink to="/freeOffers">
            <h3 className="cursor-pointer hover:text-red-500">
              FREE BET OFFERS
            </h3>
          </NavLink>
          <NavLink to="/ourRecord">
            <h3 className="cursor-pointer hover:text-red-500">OUR RECORDS</h3>
          </NavLink>
          {/* <NavLink to="/blog">
            <h3 className="cursor-pointer hover:text-red-500">BLOG</h3>
          </NavLink> */}
          <NavLink to="/contact">
            <h3 className="cursor-pointer hover:text-red-500">CONTACT-US</h3>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
