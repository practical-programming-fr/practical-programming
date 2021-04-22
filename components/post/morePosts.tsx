import Link from 'next/link'
import dayjs from 'dayjs'

const MorePosts: React.FC<any> = ({ posts }) => {
  return (
    <div className="bg-white dark:bg-light-gray pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto divide-y-2 divide-gray-200">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Derniers articles
          </h2>
        </div>
        <div className="mt-6 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <Link href={`/category/${post.categories.slug.current}`}>
                  <a className="inline-block">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-500 dark:bg-orange-link text-white">
                      {post.categories.title}
                    </span>
                  </a>
                </Link>
              </div>
              <Link href={`${post.slug.current}`}>
                <a className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900 dark:text-orange-link">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 dark:text-brand">{post.excerpt}</p>
                </a>
              </Link>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Link href={`/author/${post.author.slug.current}`}>
                    <a href={post.author.slug.current}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.image} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-orange-link">
                    <Link href={`/author/${post.author.slug.current}`}>
                      <a>{post.author.name}</a>
                    </Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500 dark:text-brand">
                    <time dateTime={post.publishedAt}>
                      Publié le {dayjs(post.publishedAt).locale('fr').format('D MMMM YYYY')}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MorePosts
