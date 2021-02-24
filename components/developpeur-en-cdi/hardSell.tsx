const HardSell: React.FC = () => (
  <div className="relative bg-white">
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          alt="Le programme Développeur en CDI a pour but d'aider les développeurs issus de reconversions à trouver leur premier CDI"
        />
      </div>
    </div>
    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div className="lg:col-start-2 lg:pl-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Quel est ton plan pour 2021 ?
          </h3>
          <p className="mt-8 text-lg text-gray-700">
            Si tu en es à lire cette section, c’est que tu l’as bien compris, devenir développeur
            est un objectif difficile. Malgré ce que peuvent promettre les organismes de formations,
            le taux de réussite des reconversions s’approche plutôt des 30% que des 75.
          </p>
          <div className="mt-5 prose prose-blue text-gray-700">
            <p className="text-lg text-gray-700">
              Ce qui veut dire que deux personnes sur trois abandonneront le projet de devenir
              développeur et iront exercer un autre métier, que ce soit dans la tech, dans leur
              métier d’origine où dans un autre domaine qui n’a rien à voir.
            </p>
            <h2 className="leading-6 font-semibold tracking-wide uppercase">
              Alors quelles sont tes options pour 2021 ?
            </h2>
            <p>
              Tu peux décider qu’être développeur n’est pas forcément une fin en soi, et à juste
              titre, qu’il y a plein d’autres métiers dans la tech qui te seront ouverts grâce à tes
              nouvelles compétences en développement. Cette réalisation est un succès car tu pourras
              t’épanouir dans un métier qui te plaira autant que le dev, même si tu ne le connais
              pas encore.
            </p>
            <p>
              Tu peux au contraire décider de continuer à t’investir pour devenir développeur. Tu
              sauras que la route sera longue et qu’il faudra redoubler d’effort et de patience pour
              arriver au sésame du premier CDI.
            </p>
            <h3 className="underline">
              Qu'est-ce que ça te coûte de NE PAS bénéficier d'un accompagnement ?
            </h3>
            <p>Tu as vu que ce programme te coûterait près de 350€.</p>
            <p className="font-bold">Mais as-tu calculé ce que ça te coûte de ne pas le suivre ?</p>
            <p>
              Si tu es déterminé, tu arriveras à devenir développeur, même sans accompagnement. Par
              contre, tu mettras probablement au minimum 2 mois de plus que si tu suivais ce
              programme.
            </p>
            <p className="font-bold">
              En prenant en compte un salaire de développeur junior, ces deux mois représentent 3
              000€ à 5 000€ de revenus.
            </p>
            <p className="font-bold">
              Tu perds également au minimum 2 mois d’expérience professionnelle, repoussant ainsi ta
              carrière et l’augmentation de salaire qui en découle.
            </p>
            <p>
              En t’économisant 600€ aujourd’hui, tu te prives de plusieurs milliers d’euros demain.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HardSell
