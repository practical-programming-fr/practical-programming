const Testimonials: React.FC = () => (
  <section className="bg-blue-800">
    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-blue-900 lg:pr-16">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              Merci de m'avoir aidé, j'ai retrouvé le goût du dev et je m'épanouis dans la nouvelle
              boîte. J’ai retrouvé le goût du dev, je m'entends super bien avec mon CTO et toute mon
              équipe. Les projets sont super et j'apprends plein de trucs.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://res.cloudinary.com/doquvzod9/image/upload/v1613585447/sylvie_1_zonqyr.jpg"
                  alt="Témoignage de Sylvie suite à un coaching individuel"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Sylvie</div>
                <div className="text-base font-medium text-blue-200">Développeuse PHP</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="py-12 px-4 border-t-2 border-blue-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              Ce programm m'a permis de mieux cibler le poste que je recherche, de me procurer des
              outils intéressants pour mieux candidater et surtout de me mettre dans des bonnes
              conditions pour monter en compétence et être plus performant. Je trouve aussi que tu
              es très disponible pour répondre à toutes nos questions et c'est très appréciable.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://res.cloudinary.com/doquvzod9/image/upload/v1613585449/issa_1_cnnwuz.jpg"
                  alt="témoignage d'Issa suite à son inscription au programme 'Devenir développeur en CDI'"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Issa</div>
                <div className="text-base font-medium text-blue-200">Développeur JavaScript</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="pb-12 px-4 sm:px-6 md:flex md:flex-col md:pb-16 md:pl-0 md:pr-10 md:border-r md:border-blue-900 lg:pr-16">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              Quand j'ai eu besoin de tes conseils pour mon entretien, tu étais présent. Il y a
              aussi une bienveillance qui se dégage de toi, et ça c'est important en recherche
              d'emploi où l'on passe parfois par des périodes de doutes, de perte de confiance. J'ai
              vraiment beaucoup apprécié les sessions. Elles sont claires, détaillées et tes slides
              sont très compréhensibles.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://res.cloudinary.com/doquvzod9/image/upload/v1613585330/xavier_1_mckde4.jpg"
                  alt="Témoignage de Xavier suite au programme 'Développeur en CDI'"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Xavier</div>
                <div className="text-base font-medium text-blue-200">Développeur Java Spring</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="pb-12 px-4 border-t-2 border-blue-900 sm:px-6 md:pb-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              Rayed et son programme m'ont aidé à mettre en place un plan d'action pour mes projets
              personnels. Le développement et un milieu où on partage beaucoup nos connaissances et
              notre apprentissage. Ayant une solide expérience en relation client et lui-même
              reconvertit, Rayed nous a aidés à adopter une stratégie pour communiquer sur notre
              montée en compétences à travers notre projet personnel faisant office de première
              expérience.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://res.cloudinary.com/doquvzod9/image/upload/v1613585316/ufuk_1_x1slrx.jpg"
                  alt="témoignage d'Ufuk suite à son inscription au programme 'Développeur en CDI'"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Ufuk</div>
                <div className="text-base font-medium text-blue-200">Développeur Java J2E</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
)

export default Testimonials
