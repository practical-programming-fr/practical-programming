import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

interface SectionProps {
  posts: any
  title: string
}

const Section: React.FC<SectionProps> = ({ posts, title }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto lg:max-w-5xl">
        <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mb-8">{title}</h2>

        <div className="flex flex-wrap -m-4">
          {posts.map((post) => {
            return (
              <div className="p-4 md:w-1/2" key={post._id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-72 md:h-36 w-full object-cover object-center"
                    src={`${post.thumbnail}`}
                    width={750}
                    height={500}
                    alt={post.excerpt}
                  />
                  <div className="p-6">
                    <Link href={`/${post.slug.current}`}>
                      <a>
                        <h2 className="title-font font-bold text-lg text-gray-900 mb-3 uppercase hover:underline">
                          {post.title}
                        </h2>
                      </a>
                    </Link>
                    <p className="leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center flex-wrap ">
                      <Link href={`/${post.slug.current}`}>
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline">
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
                    <div className="flex items-center flex-wrap justify-between">
                      <a className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">
                        {post.author.name}
                      </a>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        {dayjs(post.publishedAt).locale('fr').format('D MMMM YYYY')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Section
