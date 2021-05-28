import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="z-10 relative text-gray-600 body-font bg-gray-100 dark:bg-dark-gray">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Practical Programming</span>
            </a>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              Le site n°1 pour monter en compétences et démarrer sa carrière en tant que développeur
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-200 tracking-widest text-sm mb-3">
                LIENS UTILES
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-2">
                  <Link href="/politique-de-confidentialite">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Politique de confidentialité
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/gestion-des-cookies">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Gestion des cookies
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/mention-legales">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Mentions légales
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-200 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-2">
                  <Link href="/category/conseil-carriere">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Conseil carrière
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/category/frontend">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Frontend
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/category/node">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Node
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/category/clean-code">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Clean Code
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/category/javascript">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      JavaScript
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-200 tracking-widest text-sm mb-3">
                GUIDES
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-2">
                  <Link href="/devenir-developpeur">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Devenir Développeur
                    </a>
                  </Link>
                </li>
                <hr />
                <li className="pb-2">
                  <Link href="/nodejs">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      NodeJS
                    </a>
                  </Link>
                </li>
                <hr />
                <li className="pb-2">
                  <Link href="/mongodb">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      MongoDB
                    </a>
                  </Link>
                </li>
                <hr />
                <li className="pb-2">
                  <Link href="/postman">
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:underline cursor-pointer">
                      Postman
                    </a>
                  </Link>
                </li>
                <hr />
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-nav-gray">
          <div className="container mx-auto pb-2 px-5 pt-2 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 dark:dark-text text-sm text-center sm:text-left">
              © 2020 Practical Programming —
              <a
                href="https://twitter.com/rayedbenbrahim"
                rel="noopener noreferrer"
                className="text-gray-600 dark:dark-text ml-1"
                target="_blank"
              >
                @rayedbenbrahim
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500 dark:dark-text">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500 dark:text-gray-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500 dark:text-gray-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500 dark:text-gray-200">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500 dark:text-gray-200">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
