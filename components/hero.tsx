import Link from 'next/link'
export default function Hero({ post }) {
  return (
    <section className="bg-gray-100 dark:bg-dark-gray lg:pb-8 lg:flex lg:justify-center">
      <div className="bg-white dark:bg-light-gray lg:mx-8 lg:flex-col lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="py-8 px-8 max-w-xl lg:max-w-5xl">
          <Link href={`/${post.slug.current}`}>
            <h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl hover:underline cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="mt-4 text-gray-600 dark:text-brand">{post.excerpt}</p>
          <div className="mt-8">
            <Link href={`/${post.slug.current}`}>
              <a className="bg-orange-link text-white px-5 py-3 font-semibold rounded hover:bg-brand">
                Lire la suite
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
