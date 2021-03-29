import Link from 'next/link'

const Rubriques: React.FC<any> = ({ post }) => {
  const relatedPosts = post.relatedPosts
  if (relatedPosts && relatedPosts.length > 1) {
    return (
      <>
        <>
          {/* This example requires Tailwind CSS v2.0+ */}
          <div className="relative bg-gray-50 dark:bg-light-gray pb-12 px-4 sm:px-6 lg:pt-12 lg:px-8 rounded-lg">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl dark:text-gray-100 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Rubriques
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 dark:text-white">
                  Découvre ces artices
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto lg:max-w-none">
                {relatedPosts.map((relatedPost) => {
                  return (
                    <div
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden mt-4"
                      key={relatedPost.slug.current}
                    >
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-light-gray border-brand border-2 dark:hover:border-orange-link">
                        <div className="flex-1">
                          <Link href={`/${relatedPost.slug.current}`}>
                            <a className="block mt-2">
                              <p className="text-md lg:text-2xl font-extrabold text-gray-900 dark:text-white dark:hover:text-orange-link">
                                {relatedPost.title}
                              </p>
                            </a>
                          </Link>
                          <p className="mt-3 text-base text-gray-500 hidden md:block dark:text-brand">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      </>
    )
  } else {
    return <></>
  }
}

export default Rubriques
