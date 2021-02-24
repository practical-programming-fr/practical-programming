/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
const Story: React.FC = () => {
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
              Trouve <span className="text-blue-600 ">ton premier CDI de développeur </span>après ta
              formation de reconversion
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-700 leading-8">
            <strong>
              En as-tu marre de postuler sans réponse et de voir tes candidatures rejetées sous
              prétexte que tu es trop junior ?
            </strong>
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <p>
            C’est l’histoire de l’immense majorité des candidats à la reconversion. Derrière les
            promesses et les belles histoires de reconversion qu’on peut lire sur les différents
            blogs,{' '}
            <strong>
              la réalité est qu’une reconversion vers le métier de développeur ne s’arrête pas à la
              fin du cursus de formation.
            </strong>
          </p>
          <h2>De la vente agroalimentaire à développeur NodeJS</h2>
          <p>
            J’ai fait ma reconversion en 2016. <br />
            Après le bac, j’ai fait mes études dans une belle école de commerce qui a coûté une
            fortune et que j’ai continué de payer pendant 7 ans après en être sorti. J’ai commencé
            ma carrière comme commercial dans l’agroalimentaire, à parcourir la France pour vendre
            des chips au poulet…
          </p>
          <figure>
            <Image
              src="/images/rayed.png"
              className="w-full rounded-lg"
              width={636}
              height={392}
              alt="rayed benbrahim"
            />
          </figure>
          <p>
            Après quelques années et une première aventure entrepreneuriale dans l’e-commerce qui
            s’est soldé par un échec,j’ai pu renouer avec mon affinité pour la tech. Je travaillais
            dans une startup, toujours en tant que commercial, qui éditait un logiciel de gestion et
            dont l’équipe de développeur était intégralement en reconversion.
          </p>
          <p>
            Un an plus tard, je commençais ma formation à la Coding Academy de l’EPITECH et 6 mois
            après je signais mon CDI en tant que “Consultant Product Engineer” dans un cabinet de
            conseil à Paris.
          </p>
          <blockquote>
            <p>
              Je suis passé d’une vie à enchaîner les coups de fils dans le vent, laisser les
              messages dans les répondeurs jamais écoutés, envoyer des emails jamais ouverts à
              gagner ma vie en faisant ce que j’aime: <span className="underline">coder</span> !
            </p>
          </blockquote>
          <p>
            Je suis passé d’un environnement individualiste à une équipe qui s’entraidait pour
            arriver à ses fins. J’ai pu faire du Pair Programming avec mes collègues qui ont été
            très patients avec le débutant que j’étais. En quelques semaines j’ai pu contribuer à
            ajouter des fonctionnalités qui sont allées en Production pour des clients qui ont payé
            très cher pour leur produit.
          </p>
          <p>
            Je suis passé d’un PC Windows avec un micro casque de centre d’appels comme outils de
            travail à un Macbook Pro, un écran supplémentaire, VSCode et Github pour nouveaux
            compagnons.
          </p>
          <p>
            Depuis ce moment, <strong>ma relation au travail a complètement changé</strong>.
          </p>
          <p>
            Le dimanche soir, je me retrouvais à avoir hâte au lendemain pour retrouver mes
            collègues et qu’ils me guident pour résoudre mon code. Je me rendais au bureau chaque
            matin en étant content de m’y rendre, je n’avais plus la boule au ventre entre la bouche
            de métro et l’arrivée au bureau.
          </p>
          <p>
            À titre perso j’ai également senti le changement, moins de stress à ramener à la maison.
            <strong> J’étais plus heureux, plus serein</strong>.
          </p>
          <p className="text-blue-600 text-xl leading-8 font-extrabold">
            Mais cette Success Story n’est pas toute rose, je n’ai pas décroché ce job du premier
            coup.
          </p>

          <h2>Le désert avant l'Oasis</h2>
          <p>
            J’ai commencé à postuler 2 mois après le début de ma formation, fraîchement sorti d’une
            piscine C et je découvrais à peine le PHP. Autrement dit{' '}
            <strong>je ne connaissais rien </strong>et{' '}
            <strong>j’étais incapable de me vendre sur le plan technique</strong>.
          </p>
          <p>
            Il a fallu <strong>travailler mon CV pour qu’il génère suffisamment d’intérêt</strong>{' '}
            et que les recruteurs commencent à m’appeler. J’ai travaillé mon pitch au téléphone,
            mais techniquement c’était toujours trop court.
          </p>
          <p>
            Plus les mois de formation avançaient, plus j’avais découvert de notions et devenais
            capable de me vendre.{' '}
            <strong>Le dernier mois de formation, je faisais 2 à 3 entretiens par semaine</strong>{' '}
            😫 et je travaillais plus pour les tests techniques des processus d’embauche que les
            projets pour la formation.
          </p>
          <figure>
            <Image
              src="/images/test-technique.png"
              className="w-full rounded-lg"
              width={1536}
              height={639}
              alt="rayed benbrahim"
            />
          </figure>
          <p>
            La plupart de ces entretiens étaient pour des stages.{' '}
            <strong>Et je les ai tous ratés</strong>{' '}
            <span role="img" aria-label="sad emoji">
              😢{' '}
            </span>
            . Mais pour moi, pas le temps de se lamenter. À chaque entreprise qui me refusait, je
            redémarrais trois nouveaux processus d’embauche et j’essayais de tirer une leçon de cet
            échec.
          </p>
          <blockquote>
            <p>
              Votre profil est intéressant mais{' '}
              <span className="underline">revenez quand vous aurez une première expérience</span>!
            </p>
          </blockquote>
          <h2>Puis la situation a fini par se débloquer</h2>
          <ul>
            <li>Une première startup m’a proposé un stage à 500 €/mois</li>
            <li>
              Une deuxième startup, plus grosse et avec un meilleur accompagnement en a fait de même
            </li>
            <li>Une agence web m’a proposé un stage à 1 300 €/mois</li>
            <li>
              Et enfin,{' '}
              <strong>
                ayant fait un processus au culot, le cabinet de conseil m’a fait une offre pour un
                CDI…
              </strong>{' '}
              que j’ai accepté sans hésiter
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Story
