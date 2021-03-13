const Faq: React.FC = () => {
  return (
    <>
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Foire aux Questions</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Tu ne trouves pas la réponse à ta question ? N'hésite pas à{' '}
                  <a
                    href="mailto:bonjour@rbbm.tech"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    me contacter
                  </a>{' '}
                  directement par e-mail
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Depuis que je recherche un CDI en tant que développeur, je n'ai aucune réponse
                      à mes candidatures. Est-ce que ce programme va m'aider ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Tes candidatures restent sans réponses pour une ou plusieurs des raisons
                      suivantes:
                      <ul className="my-4">
                        <li className="ml-6 list-disc">
                          Tu n'as pas encore le niveau technique minimum requis pour être employable
                        </li>
                        <li className="ml-6 list-disc">
                          Ton CV ne reflète pas les notions techniques que recherchent les
                          entreprises
                        </li>
                        <li className="ml-6 list-disc">Ton profil n'est pas assez mis en valeur</li>
                      </ul>
                      Le programme <strong>Développeur en CDI</strong> a pour but de t'aider à
                      trouver ton premier contrat de travail durable en tant que développeur en
                      t'aidant à <strong>orienter ta montée en compétences</strong> et en
                      t'apprenant à <strong>te vendre</strong> auprès des employeurs.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      En combien de temps puis-je espérer trouver un job de développeur grâce à ce
                      programme ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Je te mentirais si je te promettais de trouver ton premier job de développeur
                      en quelques semaines. C’est un objectif de moyen terme sur lequel tu devras
                      travailler régulièrement pour l’atteindre. Parce que chacun a une situation
                      personnelle différente, la durée avant de trouver ton premier poste va varier
                      suivant le nombre d’heure de travail hebdomadaire que tu pourras consacrer à
                      ta progression. Il faut compter entre 6 et 12 mois de travail de ton côté
                      après la formation de reconversion pour trouver ton premier job de
                      développeur. Le but de ce programme est de t’indiquer un chemin personnalisé
                      pour que tu puisses arriver au plus vite à ton objectif. <br /> <br />
                      <strong>
                        J’estime que ce programme peut te faire gagner 2 à 6 mois par rapport à une
                        progression en solitaire.
                      </strong>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Je sais que j'ai plein de choses à apprendre pour devenir employable mais je
                      ne sais pas par où commencer, je me perds. Comment est-ce que tu vas m'aider ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Suite à ton inscription au programme Développeur en CDI, nous allons
                      rapidement programmer un bilan de compétences. Il s'agit d'une session de
                      coaching individuelle où on va se baser sur les formations que tu as suivies
                      jusque là, ta zone d'emploi et ce que tu as envie de travailler pour définir{' '}
                      <strong>ta roadmap de progression</strong>. <br /> <br />
                      Grâce au programme, tu apprendras à prioriser les différentes notions à
                      pratiquer, à étudier ou simplement à découvrir. Tu auras une veille
                      technologique active et documentée, dont tu pourras te servir pour mettre en
                      avant ta montée en compétences auprès des employeurs potentiels.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      J'ai déjà suivi plusieurs formations mais je n'arrive toujours pas à trouver
                      mon premier CDI. En quoi est-ce que cette formation est différente ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Les formations accélérées en développement font du très bon travail pour
                      t'apprendre à coder en quelques mois. Leur compétence est de te rendre capable
                      de coder un certain type d'application le plus rapidement possible en
                      focalisant sur les frameworks. Seulement ces formations se focalisent sur des
                      notions de haut niveau qui te permettent de coder quelque chose de fonctionnel
                      rapidement et zapent les fondamentaux de la programmation. Enchaîner les
                      formations courtes ne résoudra pas ton problème car tu te retrouveras à
                      refaire les mêmes choses différemment.
                      <br /> <br />
                      Le programme Développeur en CDI ne t'enseigne aucune notion technique. Ce
                      programme a pour vocation de te pointer dans la bonne direction et de
                      s'assurer que tu continues à avancer par toi même. Dans ce programme,{' '}
                      <strong>
                        tu travailleras autant ta montée en compétences technique que la partie
                        commerciale pour apprendre à te vendre auprès des entreprises.
                      </strong>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Comment se passent les sessions live ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Une fois par mois, je donne rendez-vous aux étudiants dans une session de
                      question réponse en live. C'est l'occasion de revenir sur un des points
                      couvert dans la formation puis de traiter les questions spécifiques que chacun
                      pourrait avoir.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Y a-t-il des sessions de rattrapages pour les lives si jamais je suis absent ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Chaque session live sera enregistrée et disponible en rediffusion sur la
                      plateforme. Si tu as un empêchement, tu peux m'envoyer ta ou tes questions en
                      amont par email et j'y répondrai lors du live afin que tu aies ta réponsee et
                      que tout le monde puisse en profiter.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Comment ça se passe si je ne trouve pas de boulot après les 6 semaines de
                      coaching ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Soyons clairs, tu ne trouveras pas de boulot après les 6 semaines de coaching.
                      <br />
                      Ce programme fonctionne comme un programme d’accompagnement sportif. Les 6
                      semaines te montrent la voie mais ce n’est qu’après plusieurs mois d’efforts
                      que tu en verras le résultat. Après les 6 semaines, tu continueras à
                      travailler le plus assidûment possible sur l’avancée de ton projet
                      professionnalisant ainsi que sur ta veille technologique. Je serai toujours
                      joignable sur le groupe Slack et tu pourras me poser autant de questions que
                      tu le souhaites. Ce que je ne peux pas faire c’est de faire l’effort à ta
                      place. <br /> <br />
                      Toi seul peux travailler sur tes compétences mais quoi qu’il arrive, je ne
                      serai jamais loin.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      J'ai souscrit à l'abonnement à vie, que se passe-t-il si je ne suis pas
                      satisfait du programme ?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Ta satisfaction dans ce programme est ma priorité. <br />
                      Si dans les 6 premières semaines tu trouves que le programme ne répond pas à
                      tes attentes ou simplement que tu as changé d’avis, il te suffira de m’envoyer
                      un mail pour être remboursé à 100%. Aucune condition supplémentaire autre que
                      faire sa demande avant la fin de la 6e semaine.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      J'ai déjà des entretiens, est-ce que ce programme va m'aider ?
                    </dt>
                    <dd className="my-2 text-base text-gray-500">
                      Si tu passes déjà des entretiens c'est une excellente nouvelle. Ca veut dire
                      que tu as réussi à rendre ton profil suffisamment attractif aux yeux des
                      employeurs pour qu'ils te consacrent du temps. Tu fais maintenant face au plus
                      gros obstacle avant d'obtenir ton CDI. Dans le programme, tu trouveras des
                      méthodologies pour préparer et réussir tes entretiens. De plus, si tu es déjà
                      avancé et que ton profil est effectivement attractif auprès des employeurs,
                      nous pourrons utiliser l'heure de coaching pour te préparer à ces entretiens.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
export default Faq
