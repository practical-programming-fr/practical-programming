/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import YouTube from 'react-youtube'
const Story2: React.FC = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nous avons tous <span className="text-blue-600 ">une histoire différente</span>
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-700 leading-8">
            <strong>J’aimerais te présenter Stéphane:</strong>
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <YouTube videoId="0EEisN-rEno" />

          <p>
            Je veux te partager l’histoire de Stéphane car contrairement à moi il a connu une longue
            période d’inactivité après sa formation avant de trouver son premier poste de
            développeur.
          </p>
          <p>
            Stéphane était entrepreneur dans le bâtiment. Il avait sa propre entreprise, ses
            employés, ses charges à payer.
          </p>
          <h2>Lors de sa reconversion, Stéphane n'a eu aucune aide financière</h2>
          <p>
            Pas d’allocation-chômage, pas de financement de sa formation. <br />
            Tout a été financé personnellement. Puis en fin de formation, il a fallu plusieurs mois
            de travail de son côté pour pouvoir enfin convaincre une entreprise de lui donner sas
            première chance. Pendant ce temps, sa femme et lui ne vivaient que sur le salaire de
            celle-ci et leurs économies.
          </p>
          <p>
            C’est un pari risqué, que je ne conseillerais à personne, mais Stéphane s’est donné les
            moyens de réussir en travaillant d’arrache pied chaque jour pour assurer sa montée en
            compétences.
          </p>
          <p>
            L’histoire de Stéphane peut être la tienne également. Ce n’est pas parce que tu es
            éloigné de l’emploi pendant quelques mois que tu ne seras jamais employable.
          </p>
          <h2>
            Le “trou dans le CV” est un mythe pour les développeurs, tout ce qui compte c’est ton
            savoir-faire et son savoir être.
          </h2>
          <p>
            Si Stéphane a réussi à surmonter les obstacles et les préjugés que les employeurs
            peuvent avoir et à trouver son CDI en tant que développeur, en Province, c’est qu’il a
            suivi une rigueur de travail qui lui a permis de se rendre employable.
          </p>
          <p>
            C’est ce même travail qu’il va falloir que tu fasses, à monter en compétences sur
            plusieurs sujets tech, à prouver que tu as su le faire et à savoir te vendre une fois
            que tu l’as fait.
          </p>
          <p className="text-blue-600 text-xl leading-8 font-extrabold">
            C'est là où j'entre en jeu
          </p>
        </div>
      </div>
    </div>
  )
}
export default Story2
