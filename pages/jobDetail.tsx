import Nav from '../components/nav'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'
import JobHero from '../components/jobDetail/jobHero'
import JobsList from '../components/jobs/jobslist'

const JobsPage: React.FC<any> = () => {
  return (
    <>
      <NextSeo
        title="Practical Programming : le Média des Développeurs Web"
        description="L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres."
      />
      <div>
        <Nav />
        <JobHero />
        <Footer />
      </div>
    </>
  )
}

export default JobsPage
