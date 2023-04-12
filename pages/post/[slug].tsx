import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
    })
  }
  return (
    <main>
      <Header />
      <img
        className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <p className="mb-2 text-xl font-light text-gray-900">
         Play Time: {post.description}
        </p>
        <div className="flex items-center space-x-2">
          <p className="font-extralight ">
            {' '}
            {/* Blog by <span className="text-green-600">
              {post.author.name}
            </span>{' '} */}
            Posted at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div>
          <PortableText
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc" {...children} />
              ),
              link: ({ href, children }: any) => (
                <a
                  href={href}
                  className="text-blue-500 hover:underline"
                  {...children}
                ></a>
              ),
            }}
          />
        </div>
      </article>
      {/* <hr className="my-5 mx-auto max-w-lg border border-yellow-500" /> */}

      {/* {submitted ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
          <p className="text-2xl font-bold">
            Thanks for submitting your comment!
          </p>
          <p>Once approved it will appear bellow</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <label className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow"
              type="text"
              placeholder="Evans Mutuku"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow"
              type="email"
              placeholder="evans@gmail.com"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Type your comment here . . ."
              rows={8}
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">Comment is required</span>
            )}
          </div>

          <input
            type="submit"
            value="Submit Comment"
            className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 p-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
          />
        </form>
      )} */}

      {/* <div className="mx-auto max-w-2xl">
        <h3>Comments</h3>
        <hr />
        {post.comments.map((comment) => (
          <div>
            <p>Hello wolrd</p>
            <p>
              {comment.name}:{comment.comment}
            </p>
          </div>
        ))}

      </div> */}
      <Footer/>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
        slug{
            current
        }
    }`

  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
       _id,
       _createdAt,
        title,
        author-> {
        name,
        image
        },
        'comments': * [
            _type == "comment" && 
            post._ref == ^._id &&
            approved == true
        ],
        
        description,
        mainImage,
        slug,
        body
    }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
