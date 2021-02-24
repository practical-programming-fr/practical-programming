const Warranty: React.FC = () => (
  <div className="relative bg-white py-16 sm:py-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div className="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          {/* Testimonial card*/}
          <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://res.cloudinary.com/doquvzod9/image/upload/v1613548387/money_back_sqo3ad.jpg"
              alt="garantie 45j"
            />
            <div className="absolute inset-0 bg-blue-500" style={{ mixBlendMode: 'multiply' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-90" />
            <div className="relative px-8">
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Si tu n'es pas satisfait du programme dans les 45 jours suivant ton inscription,
                    je te rembourse sans conditions
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        {/* Content area */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            45 jours pour changer d'avis
          </h2>
          <div className="mt-6 text-gray-500 space-y-6">
            <p className="text-lg">
              Soyons clairs, les 6 modules et 45 jours ne seront pas suffisants pour te faire
              décrocher ton CDI en si peu de temps.
            </p>
            <p className="text-lg leading-7">
              Par contre tu auras vu l’ensemble du contenu théorique que je peux t’apporter. À ce
              stade tu seras encore en mesure de choisir si tu veux continuer l’accompagnement,
              jusqu’à ce que tu trouves ton premier CDI ou si tu estimes que ça n’a pas valu le
              coup.
            </p>
            <p className="text-lg leading-7 font-bold">
              Si tu n’es pas satisfait par ce que te propose le programme, il te suffira de
              m’envoyer un mail avant la fin de la 6e semaine du programme et je te rembourserai
              intégralement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Warranty
