import Nav from '../../components/nav'
import Footer from '../../components/footer'
import sanity from '../../lib/sanity'
import { NextSeo } from 'next-seo'

import { GetStaticProps, GetStaticPaths } from 'next'
import CompanyHero from '../../components/company/companyHero'
import CompanyPresentation from '../../components/company/companyPresentation'
import CompanyNumbers from '../../components/company/companyNumbers'
import KeyPlayers from '../../components/company/keyPlayers'
import TechChallenges from '../../components/company/techChallenges'
import OurOpinion from '../../components/company/ourOpinion'
import CompanyJobs from '../../components/company/companyJobs'

const entrepriseQuery = `*[_type == "company" && slug.current==$slug][0]{
	...,
  "jobs": *[_type == "job" && hiringCompany._ref == ^._id]
}`

const Entreprise: React.FC<any> = ({ entreprise }) => {
  return (
    <>
      <NextSeo
        title={`Archives des articles  - Practical Programming`}
        description="description"
        canonical={`https://practicalprogramming.fr/company/`}
        openGraph={{
          url: `https://practicalprogramming.fr/category/`,
          locale: 'fr_FR',
          type: 'article',
          title: 'category.title',
          description: 'category.description',
          site_name: 'Practical Programming',
        }}
        twitter={{
          handle: '@RayedBenbrahim',
          site: '@RayedBenbrahim',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'article:publisher',
            content: 'https://www.facebook.com/real.practical.programming',
          },
        ]}
      />

      <Nav />
      <CompanyHero props={entreprise} />
      <CompanyPresentation company={entreprise} />
      <CompanyNumbers />
      <KeyPlayers team={entreprise.team} />
      <TechChallenges challenges={entreprise.projects} />
      <OurOpinion opinion={entreprise.opinion} />
      <CompanyJobs jobs={entreprise.jobs} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.entreprise
  const entreprise = await sanity.fetch(entrepriseQuery, { slug })
  return { props: { entreprise } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getCompanies = `*[_type == "company" && company.slug != "practical-programming"]{slug}`
  const companies = await sanity.fetch(getCompanies)
  const paths = companies.map((company) => {
    return { params: { entreprise: company.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default Entreprise
