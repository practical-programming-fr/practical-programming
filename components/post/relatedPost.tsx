import Link from 'next/link'

const RelatedPost: React.FC<any> = ({ relatedPosts, category }) => {
  if (relatedPosts.length < 1) {
    return null
  }
  return (
    <aside className="px-8 pt-8 bg-white dark:bg-gray-800 rounded-lg">
      <h4 className="tracking-widest text-md title-font font-medium text-blue-500 mb-3 uppercase">
        {category}
      </h4>
      {relatedPosts.map((relatedPost) => {
        return (
          <>
            <div className="w-full p-4 relative" key={relatedPost.slug.current}>
              <Link href={relatedPost.slug.current}>
                <a className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  {relatedPost.title}
                </a>
              </Link>
              <Link href={relatedPost.slug.current}>
                <a>
                  <p className="text-gray-600 dark:text-gray-300 font-light text-lg pt-2">
                    {relatedPost.excerpt}
                  </p>
                </a>
              </Link>
            </div>
            <hr />
          </>
        )
      })}
      <div className="w-full p-4 bg-blue-200">
        <Link href="/developpeur-en-cdi">
          <a className="text-blue-900 dark:text-white text-xl font-medium mb-2">
            Trouver un CDI après une reconversion
          </a>
        </Link>
        <Link href="/developpeur-en-cdi">
          <a>
            <p className="text-blue-700 dark:text-gray-300 font-light text-md mt-2">
              Le plus gros obstacle à la reconversion vers le métier de développeur est de trouver
              son premier poste. Plus de deux tiers des candidats abandonnent après une ou plusieurs
              formations accélérées faute d'avoir trouvé un CDI pour démarrer leurs carrières.
            </p>
            <p className="text-blue-700 dark:text-gray-300 font-medium text-md mt-6">
              Découvrez le programme Practical Programming qui vous accompagne de votre reconversion
              jusqu'à la signature de votre premier CDI.
            </p>
          </a>
        </Link>
      </div>
      <hr />
    </aside>
  )
}

export default RelatedPost
