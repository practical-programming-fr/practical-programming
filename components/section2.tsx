import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

interface SectionProps {
  posts: any
  title: string
}

const Section2: React.FC<SectionProps> = ({ posts, title }) => {
  return (
    <section className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
      <div className="col-span-3 md:col-span-2 bg-blue">
        <div className="flex">
          <div className="mr-4 flex-shrink-0 self-end">
            <Image
              src="https://images.unsplash.com/photo-1619267110184-798fa0240faf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              className="rounded-lg"
              width={210}
              height={210}
            />
          </div>
          <div>
            <p className="uppercase font-medium tracking-wider text-sm mt-2">category</p>
            <h4 className="text-3xl font-extrabold mt-2">Lorem ipsum</h4>
            <p className="mt-2">
              Avoir des tests automatisés permet à une application d'être plus durable et résistante
              aux évolutions. Entre les tests unitaires, tests fonctionnels ou tests end-to-end,
              comment prioriser son temps de dev?
            </p>
            <Link href={`/test`}>
              <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline dark:text-orange-link font-bold">
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
        </div>
      </div>
      <div className="col-span-3 md:col-span-1">
        <div className="h-full border-2 border-gray-200 dark:bg-light-gray dark:text-brand border-light-gray border-opacity-60 rounded-lg overflow-hidden dark:hover:border-brand">
          <div className="p-6">
            <Link href={`/test`}>
              <a>
                <h2 className="title-font font-bold text-lg text-gray-900 dark:text-white mb-3 uppercase hover:underline dark:hover:text-orange-link">
                  Devenir développeur: le guide complet
                </h2>
              </a>
            </Link>
            <p className="mt-2">
              Avoir des tests automatisés permet à une application d'être plus durable et résistante
              aux évolutions. Entre les tests unitaires, tests fonctionnels ou tests end-to-end,
              comment prioriser son temps de dev?
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/test`}>
                <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline dark:text-orange-link font-bold">
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
              <a className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">Rayed</a>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                6 may 1987
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section2
