/* eslint-disable react/no-unescaped-entities */
const Personae: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">A qui s'adresse ce programme</h2>
        </div>
        <dl className="flex-col mt-12 max-w-5xl space-y-10 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          <div className="ml-3">
            <dt className="text-lg leading-6 font-medium text-green-700">
              Ce programme est pour toi si:
            </dt>
          </div>

          <div className="flex pt-4 pb-2">
            {/* Heroicon name: outline/check */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu as terminé ta formation accélérée en développement web ou mobile
              </dt>
            </div>
          </div>

          <div className="flex py-2">
            {/* Heroicon name: outline/check */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu veux démarrer ta carrière de développeur au plus vite
              </dt>
            </div>
          </div>

          <div className="flex py-2">
            {/* Heroicon name: outline/check */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu es prêt(e) à consacrer 4 à 6h de travail par semaine pour atteindre ton objectif
              </dt>
            </div>
          </div>
        </dl>
        <dl className="flex-col mt-12 max-w-5xl space-y-10 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          <div className="flex">
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-red-500">
                Ce programme n'est pas pour toi si:
              </dt>
            </div>
          </div>
          <div className="flex pt-4 pb-2">
            {/* Heroicon name: outline/check */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu n’as pas encore commencé ou tu es encore en formation de reconversion
              </dt>
            </div>
          </div>
          <div className="flex py-2">
            {/* Heroicon name: outline/check */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu recherches une formation avancée en programmation
              </dt>
            </div>
          </div>
          <div className="flex py-2">
            {/* Heroicon name: outline/check */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Tu cherches une solution rapide qui portera ses fruits immédiatement
              </dt>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Personae
