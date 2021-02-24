import Link from 'next/link'
export default function Hero({ post }) {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:rounded-lg lg:h-full"
            style={{
              backgroundImage: `url("${post.thumbnail}?w=750")`,
            }}
          />
        </div>
        <div className="py-12 px-8 max-w-xl lg:max-w-5xl lg:w-1/2">
          <Link href={`/${post.slug.current}`}>
            <h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
          <div className="mt-8">
            <Link href={`/${post.slug.current}`}>
              <a className="bg-blue-500 text-white px-5 py-3 font-semibold rounded hover:bg-gray-800">
                Lire la suite
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
