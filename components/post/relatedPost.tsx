import Link from 'next/link'

const RelatedPost: React.FC<any> = ({ relatedPosts, category, slug }) => {
  if (relatedPosts.length < 1) {
    return null
  }
  return (
    <div className="hidden xl:block xl:col-span-3">
      <aside className="px-8 pt-8 bg-white dark:bg-nav-gray rounded-lg pb-2 md:text-red">
        <Link href={`/category/${slug}/`}>
          <a className="tracking-widest text-md title-font font-medium text-blue-600 dark:text-brand mb-3 uppercase cursor-pointer">
            Dans la catégorie {category}
          </a>
        </Link>
        <dl className="space-y-2 divide-y divide-gray-200">
        {relatedPosts.map((relatedPost) => {
          return (
            <dt className="w-full py-4 relative" key={relatedPost.slug.current}>
              <Link href={`/${relatedPost.slug.current}`}>
                <a className="text-gray-800 dark:text-white text-lg font-bold mb-2 dark:text-orange-link">
                  {relatedPost.title}
                </a>
              </Link>
              <Link href={`/${relatedPost.slug.current}`}>
                <a>
                  <p className="text-gray-600 dark:text-brand font-light">
                    {relatedPost.excerpt}
                  </p>
                </a>
              </Link>
            </dt>
          )
        })}
        </dl>
      </aside>
    </div>
  )
}

export default RelatedPost
