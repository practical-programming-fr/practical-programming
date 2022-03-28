import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import sanity from '../../lib/sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
const builder = imageUrlBuilder(sanity)

const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

const KeyPlayers: React.FC<any> = ({ team }) => {
  console.log()
  return (
    <div className="bg-white dark:bg-bg-neutral-900">
      <div className="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4 lg:col-span-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white">
              Les leaders tech
            </h2>
            <p className="text-xl text-gray-500 dark:text-brand">
              Découvre les profils des personnes clés au sein de l'équipe tech
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {team.map((player) => (
                <li className="sm:py-8" key={player._key}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    {/* Image */}
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        width={128}
                        height={128}
                        src={
                          player.image
                            ? `${urlFor(player.image).url()}`
                            : 'https://res.cloudinary.com/doquvzod9/image/upload/v1619767233/unknown_y7klqs.jpg'
                        }
                        alt={`${player.name} - ${player.position}`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1 dark:text-brand">
                          <h3>{player.name}</h3>
                          <p className="text-blue-600 dark:text-orange-link">{player.position}</p>
                        </div>
                        <ul className="flex space-x-5">
                          <li>
                            <a href={player.linkedin} className="text-gray-400 hover:text-gray-500">
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyPlayers
