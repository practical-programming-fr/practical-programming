import Link from 'next/link'

const RelatedPost: React.FC<any> = ({ relatedPosts, category, slug }) => {
  console.log()
  if (relatedPosts.length < 1) {
    return null
  }
  return (
    <aside className="px-8 pt-8 bg-white dark:bg-light-gray rounded-lg pb-2">
      <Link href={`/category/${slug}/`}>
        <a className="tracking-widest text-md title-font font-medium text-orange-link mb-3 uppercase cursor-pointer">
          {category}
        </a>
      </Link>
      {relatedPosts.map((relatedPost) => {
        return (
          <>
            <div className="w-full p-4 relative" key={relatedPost.slug.current}>
              <Link href={relatedPost.slug.current}>
                <a className="text-gray-800 dark:text-white text-2xl font-bold mb-2">
                  {relatedPost.title}
                </a>
              </Link>
              <Link href={relatedPost.slug.current}>
                <a>
                  <p className="text-gray-600 dark:text-brand font-light text-lg pt-2">
                    {relatedPost.excerpt}
                  </p>
                </a>
              </Link>
            </div>
            <hr />
          </>
        )
      })}
      <div className="w-full my-4 p-4 bg-blue-200 rounded-lg">
        <Link href="/developpeur-en-cdi">
          <a className="text-blue-900 text-2xl font-bold mb-2">
            Trouver un CDI après une reconversion
          </a>
        </Link>
        <Link href="/developpeur-en-cdi">
          <a>
            <p className="text-blue-700 dark:text-blue-900 font-light text-md mt-2">
              Le plus gros obstacle à la reconversion vers le métier de développeur est de trouver
              son premier poste. Plus de deux tiers des candidats abandonnent après une ou plusieurs
              formations accélérées faute d'avoir trouvé un CDI pour démarrer leurs carrières.
            </p>
            <p className="text-blue-700 dark:text-blue-900 font-medium text-md mt-6">
              Découvrez le programme Practical Programming qui vous accompagne de votre reconversion
              jusqu'à la signature de votre premier CDI.
            </p>
          </a>
        </Link>
      </div>
    </aside>
  )
}

export default RelatedPost
