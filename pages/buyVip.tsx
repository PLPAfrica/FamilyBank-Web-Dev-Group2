import Head from 'next/head'
import Header from '../components/Header'
import { Post } from './../typings'
import { sanityClient, urlFor } from './../sanity'
import Link from 'next/link'
import Footer from '../components/Footer'

interface Props {
  posts: [Post]
}
const buyVip = ({ posts }: Props) => {
  return (
    <main>
      <Head>
        <title>Buy Vip</title>
      </Head>
      <Header />
      <section className="mx-auto mt-4 max-w-6xl p-3">
        <h2 className="text-2xl font-bold">
          Our VIP-Tips packages have 30% discount up to 66 % for users buying
          profit tips.
        </h2>
        <section className="mt-6 lg:flex md:flex-wrap justify-between">
          <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="group h-72 cursor-pointer overflow-hidden rounded-lg border">
                  <img
                    className="h-48 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className="flex items-center justify-between bg-white p-5">
                    <div>
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="text-xs">Play Time: {post.description}</p>
                    </div>
                    {/* <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" /> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="min-w-max space-y-4">
            <h2 className="mb-4 text-xl font-bold text-red-600">
              Our Subscription Options
            </h2>
            <span className="flex cursor-pointer items-center justify-between rounded-sm bg-green-400 p-3 font-bold text-white">
              <h3>Daily</h3>
              <p>ksh/= 700</p>
            </span>
            <span className="flex cursor-pointer items-center justify-between rounded-sm bg-blue-600 p-3 font-bold text-white">
              <h3>Weekly</h3>
              <p>ksh/= 700</p>
            </span>
            <span className="flex cursor-pointer items-center justify-between rounded-sm bg-red-500 p-3 font-bold text-white">
              <h3>Monthly</h3>
              <p>ksh/= 700</p>
            </span>
            <span className="flex cursor-pointer items-center justify-between rounded-sm bg-purple-600 p-3 font-bold text-white">
              <h3>3 Months</h3>
              <p>ksh/= 700</p>
            </span>
            <span className="flex cursor-pointer items-center justify-between rounded-sm bg-yellow-500 p-3 font-bold text-white">
              <h3> Yearly</h3>
              <p>ksh/= 700</p>
            </span>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default buyVip

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
