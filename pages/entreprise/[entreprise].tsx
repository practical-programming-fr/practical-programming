/* eslint-disable prefer-rest-params */
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

const entrepriseQuery = `*[_type == "company" && slug.current==$slug ][0]{
	...,
  "logo":logo.asset->url,
  "jobs": *[_type == "job" && hiringCompany._ref == ^._id]{
    ...,
    hiringCompany->{
      name,
      "slug":slug.current
    }
  }
}`

const Entreprise: React.FC<any> = ({ entreprise }) => {
  return (
    <>
      <NextSeo
        title={`${entreprise.name} recherche des développeurs`}
        description={entreprise.excerpt}
        canonical={`https://practicalprogramming.fr/entreprise/${entreprise.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/entreprise/${entreprise.slug.current}`,
          locale: 'fr_FR',
          type: 'article',
          title: `${entreprise.name} recherche des développeurs`,
          description: `${entreprise.metaDescription}`,
          site_name: 'Practical Programming',
          images: [
            {
              url:
                'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              width: 800,
              height: 600,
              alt: "Exemple d'image de startup",
            },
          ],
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
      <CompanyNumbers company={entreprise} />
      <TechChallenges challenges={entreprise.projects} />
      <KeyPlayers team={entreprise.team} />
      <OurOpinion opinion={entreprise.opinion} />

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
  const getCompanies = `*[_type == "company" && company._id !="59d00fa9-6b14-446e-8b57-4b0e2cc1b7b6" && published==true ]{slug}`
  const companies = (await sanity.fetch(getCompanies)) || []
  const paths = companies.map((company) => {
    return { params: { entreprise: company.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default Entreprise
