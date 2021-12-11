import Link from 'next/link'

const Rubriques: React.FC<any> = ({ post }) => {
  const relatedPosts = post.relatedPosts
  if (relatedPosts && relatedPosts.length > 1) {
    return (
      <>
        <>
          {/* This example requires Tailwind CSS v2.0+ */}
          <div className="relative bg-gray-50 dark:bg-light-gray pb-12 px-4 sm:px-6 lg:pt-4 lg:px-8 rounded-lg">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <p className="text-center font-extrabold text-gray-900 dark:text-white sm:text-xl">
                  Découvre ces artices
                </p>
              </div>
              <dl className="space-y-2 divide-y divide-gray-200">
                {relatedPosts.map((relatedPost) => {
                  return (

                        <dt className="flex-1 py-4">
                          <Link href={`/${relatedPost.slug.current}`}>
                            <a className="block mt-2">
                              <p className="text-md font-extrabold text-gray-900 dark:text-white dark:hover:text-orange-link">
                                {relatedPost.title}
                              </p>
                            </a>
                          </Link>
                          <p className="mt-3 text-sm text-gray-500 hidden md:block dark:text-brand">
                            {relatedPost.excerpt}
                          </p>
                        </dt>


                  )
                })}
              </dl>
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
