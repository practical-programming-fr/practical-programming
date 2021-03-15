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

const Categories: React.FC = ({ company }) => {
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
      <div>
        <Nav />
        <CompanyHero />
        <CompanyPresentation />
        <CompanyNumbers />
        <KeyPlayers />
        <TechChallenges />
        <OurOpinion />
        <Footer />
      </div>
    </>
  )
}

export default Categories
