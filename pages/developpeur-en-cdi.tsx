import { NextSeo, CourseJsonLd } from 'next-seo'
import Hero from '../components/developpeur-en-cdi/hero'
import Story from '../components/developpeur-en-cdi/story'
import Pricing from '../components/developpeur-en-cdi/pricing'
import Syllabus from '../components/developpeur-en-cdi/syllabus'
import Faq from '../components/developpeur-en-cdi/faq'
import Personae from '../components/developpeur-en-cdi/personae'
import Pains from '../components/developpeur-en-cdi/pains'
import Story2 from '../components/developpeur-en-cdi/story2'
import Testimonials from '../components/developpeur-en-cdi/testimonials'
import HardSell from '../components/developpeur-en-cdi/hardSell'
import Warranty from '../components/developpeur-en-cdi/warranty'
import Features from '../components/developpeur-en-cdi/features'
import Schedule from '../components/developpeur-en-cdi/schedule'

const DeveloppeurEnCdi: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Développeur en CDI: Le programme de coaching pour réussir sa reconversion"
        description="Trouver son premier CDI en tant que développeur après une reconversion est un challenge. Ce programme t'aide à le surmonter"
        canonical="https://practicalprogramming.fr/developpeur-en-cdi"
        openGraph={{
          url: 'https://practicalprogramming.fr/developpeur-en-cdi',
          title: 'Développeur en CDI: Le programme de coaching pour réussir sa reconversion',
          description:
            "Trouver son premier CDI en tant que développeur après une reconversion est un challenge. Ce programme t'aide à le surmonter'",
          images: [
            {
              url:
                'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixqx=xNLzUn5i0j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
              width: 800,
              height: 600,
              alt: 'Développeur en CDI',
            },
          ],
          site_name: 'Practical Programming',
        }}
      />
      <CourseJsonLd
        courseName="Course Name"
        providerName="Practical Programming"
        providerUrl="https://practicalprogramming.fr"
        description="Le programme 'Développeur en CDI' aide les développeurs juniors issus de formations accélérées de reconversion à trouver leur premier emploi en CDI en tant que développeur"
      />
      <Hero />
      <Story />
      <Pains />
      <Story2 />
      <Syllabus />
      <Features />
      <Pricing />
      <Schedule />
      <Personae />
      <Testimonials />
      <Pricing />
      <HardSell />

      <Faq />
    </>
  )
}
export default DeveloppeurEnCdi
