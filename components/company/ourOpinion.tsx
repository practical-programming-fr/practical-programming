import Image from 'next/image'
import Link from 'next/link'

const OurOpinion: React.FC = () => {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-blue-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=xNLzUn5i0j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-xl text-white">
                    Shine est une scaleup en forte croissance. Depuis son rachat par la société
                    générale, ils connaissent une forte structuration de l'équipe tech et des
                    projets. Si vous aimez travailler dans une boite où les rôles de chacuns sont
                    bien définis tout en ayant suffisamment d'opportunités pour choisir votre rôle
                    et évoluer, Shine est une bonne piste. Shine est également intéressant si vous
                    êtes en début de carrière et que vous souhaitez prendre une part importante dans
                    un projet ayant pour but de prendre une position dominante sur son marché. Sa
                    réputation vous sera utile si vous voulez poursuivre votre carrière dans des
                    scaleups
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Rayed Benbrahim</p>
                  <p className="text-base font-medium text-blue-100">Practical Programming</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurOpinion
