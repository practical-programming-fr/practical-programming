import Link from 'next/link'
import Image from 'next/image'

const Rubriques: React.FC<any> = ({ post }) => {
  const relatedPosts = post.relatedPosts
  if (relatedPosts && relatedPosts.length > 1) {
    return (
      <>
        <>
          {/* This example requires Tailwind CSS v2.0+ */}
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Rubriques
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Découvre nos dossiers
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                {relatedPosts.map((relatedPost) => {
                  return (
                    <div
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                      key={relatedPost.slug.current}
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          width={310}
                          height={195}
                          alt={relatedPost.title}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <Link href={`/${relatedPost.slug.current}`}>
                            <a className="block mt-2">
                              <p className="text-xl font-semibold text-gray-900">
                                {relatedPost.title}
                              </p>
                              <p className="mt-3 text-base text-gray-500">{relatedPost.excerpt}</p>
                            </a>
                          </Link>
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
