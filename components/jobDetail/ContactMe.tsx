import Link from 'next/link'
import Image from 'next/image'

const ContactMe: React.FC<any> = ({ author }) => (
  <>
    {/* This example requires Tailwind CSS v2.0+ */}
    <div className="bg-white dark:bg-bg-neutral-900">
      <div className="relative max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Contacte moi directement
        </h2>
        <p className="text-lg text-gray-500 dark:text-brand mt-4">
          Si cette opportunité t{`'`}intéresse, si tu as des questions ou si tu es curieux de savoir
          ce que le marché peut te réserver, tu peux également me contacter directement sur
          Linkedin, Twitter ou par email
        </p>
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="mt-6 aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-5">
                    <Image
                      className="object-cover shadow-lg rounded-lg"
                      src={author.url}
                      width={400}
                      height={400}
                      alt="Rayed Benbrahim, Développeur NodeJS et Agent pour développeurs, j'aide les développeurs à trouver l'opportunité dans laquelle ils pourront s'épanouir"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="mt-6 text-lg leading-6 font-bold space-y-1 dark:text-brand">
                        <h3>{author.name}</h3>
                        <p className="text-blue-600 dark:text-orange-link">Agent de développeurs</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          J'aide les développeurs à trouver l'entreprise dans laquelle ils vont
                          s'épanouir.
                        </p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <Link href="https://twitter.com/RayedBenbrahim">
                            <a className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={author.linkedin}>
                            <a className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* More items... */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ContactMe
