import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

interface SectionProps {
  posts: any
  title: string
}

const Section: React.FC<SectionProps> = ({ posts, title }) => {
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-dark-gray">
        <div className="container px-5 py-6 mx-auto lg:max-w-5xl">
          <h2 className="sm:text-2xl dark:text-white text-xl title-font font-medium text-gray-900 mb-6">
            {title}
          </h2>

          <div className="flex flex-wrap -m-4">
            {posts.map((post) => {
              return (
                <div className="px-6 py-2" key={post.slug.current}>
                  <div className="h-full lg:shadow-lg bg-white dark:bg-bg-neutral-900 dark:text-brand border-bg-neutral-900 border-opacity-60 rounded-lg overflow-hidden dark:hover:border-brand">
                    <div className="p-6">
                      <Link href={`/${post.slug.current}`}>
                        <a>
                          <h2 className="title-font font-bold text-lg text-gray-900 dark:text-orange-link uppercase hover:underline dark:hover:text-orange-link">
                            {post.title}
                          </h2>
                        </a>
                      </Link>
                      <div className="flex items-center flex-wrap justify-between">
                        <a className="text-gray-500 inline-flex items-center">
                          {post.author.name}
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          {dayjs(post.publishedAt).locale('fr').format('D MMMM YYYY')}
                        </span>
                      </div>
                      <p className="dark:text-brand leading-relaxed my-3">{post.excerpt}</p>
                      <div className="flex items-center flex-wrap ">
                        <Link href={`/${post.slug.current}`}>
                          <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline dark:text-orange-link font-bold">
                            Lire la suite
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Section
