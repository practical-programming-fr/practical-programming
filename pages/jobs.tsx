import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Section from '../components/section'
import sanity from '../lib/sanity'
import { NextSeo } from 'next-seo'
import JobsHero from '../components/jobs/jobsHero'

const JobsPage: React.FC<any> = () => {
  return (
    <>
      <NextSeo
        title="Practical Programming : le Média des Développeurs Web"
        description="L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres."
      />
      <div>
        <Nav />
        <JobsHero />
        <Footer />
      </div>
    </>
  )
}

export default JobsPage
