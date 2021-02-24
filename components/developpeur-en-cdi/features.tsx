/* eslint-disable react/no-unescaped-entities */
const Features: React.FC = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
          Comment se déroule le programme ?
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900">
          Plus qu'un cours, un accompagnement
        </p>
      </div>
      <div className="mt-12 lg:mt-0 lg:col-span-2">
        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div className="flex">
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
                Six modules vidéos à la demande
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Suite à ton inscription et chaque semaine, tu auras accès à un nouveau module du
                programme portant sur les objectifs mentionnés plus haut.
              </dd>
            </div>
          </div>
          <div className="flex">
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
                Un bilan de compétences en 1-on-1
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Une session de coaching privée d'une heure pour faire ton bilan de compétences et
                tracer ta roadmap pour les 12 prochains mois.
              </dd>
            </div>
          </div>

          <div className="flex">
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
                Met en pause quand tu le souhaites
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                La vie est pleine d'aléas. Si tu as besoin de mettre en pause ton coaching, tu peux
                suspendre le coaching en un click et le reprendre aussi facilement
              </dd>
            </div>
          </div>
          <div className="flex">
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
                Un live mensuel de Q&A
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Chaque mois je te donne rendez-vous pour un live privé de questions réponses. Si tu
                as un empêchement, tu auras accès à un replay.
              </dd>
            </div>
          </div>
          <div className="flex">
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
                Suivi par email de ta progression
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Chaque semaine, je te proposerai de faire le point sur ta progression et ton moral.
                Si tu as besoin de conseils spécifique, je ne serai qu'à un email de toi.
              </dd>
            </div>
          </div>
          <div className="flex">
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
                Avance ton projet à ton rythme
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Le suivi de ton projet se fait à l'acomplissement de chaque étape. Si tu es rapide,
                tu pourras déclancher rapidement les étapes suivantes.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
)

export default Features
