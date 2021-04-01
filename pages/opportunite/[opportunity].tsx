import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { NextSeo } from 'next-seo'
import sanity from '../../lib/sanity'
import JobDescription from '../../components/jobDetail/jobDescription'
import { GetStaticProps, GetStaticPaths } from 'next'
import ContactForm from '../../components/jobDetail/ContactForm'
const JobsPage: React.FC<any> = ({ opportunity }) => {
  return (
    <>
      <NextSeo
        title="Practical Programming : le Média des Développeurs Web"
        description="L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres."
      />
      <div>
        <Nav />
        <JobDescription opportunity={opportunity} />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.opportunity

  const jobQuery = `*[_type == "job" && slug.current=="${slug}"][0]`
  const opportunity = await sanity.fetch(jobQuery, { slug })
  return { props: { opportunity } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getJobs = `*[_type == "job" && hiringCompany._ref =="59d00fa9-6b14-446e-8b57-4b0e2cc1b7b6"]{slug}`
  const jobs = await sanity.fetch(getJobs)
  const paths = jobs.map((job) => {
    return { params: { opportunity: job.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default JobsPage
