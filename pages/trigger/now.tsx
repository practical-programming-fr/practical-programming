import Nav from '../../components/nav'
import { NextSeo } from 'next-seo'

const Now: React.FC = () => (
  <>
    <NextSeo
      title="Practical Programming: Le média #1 pour les développeurs francophones"
      description="Accéder à la prochaine étape"
      nofollow={false}
      noindex={true}
    />
    <Nav />
    <section className="bg-white dark:bg-dark-gray dark:text-brand">
      <div className="lg:flex lg:flex-wrap justify-center h-full">
        <div className="flex-1 max-w-3xl">
          <p className="mt-8 text-3xl"> Bien reçu, la suite des instructions arrive</p>
        </div>
      </div>
    </section>
  </>
)

export default Now
