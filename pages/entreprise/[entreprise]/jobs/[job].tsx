import Nav from '../../../../components/nav'
import Footer from '../../../../components/footer'
import { NextSeo, JobPostingJsonLd } from 'next-seo'
import sanity from '../../../../lib/sanity'
import JobDescription from '../../../../components/jobDetail/jobDescription'
import { GetStaticProps, GetStaticPaths } from 'next'
import ContactForm from '../../../../components/jobDetail/ContactForm'
import dayjs from 'dayjs'

const JobsPage: React.FC<any> = ({ job }) => {
  console.log(job)
  return (
    <>
      <NextSeo
        title={`Opportunité: ${job.position}`}
        description={job.excerpt}
        canonical={`https://practicalprogramming.fr/opportunite/${job.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/opportunite/${job.slug.current}`,
          title: `Opportunité: ${job.position}`,
          description: job.excerpt,
          locale: 'fr_FR',
          type: 'article',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'Practical Programming',
        }}
        twitter={{
          handle: '@RayedBenbrahim',
          site: '@RayedBenbrahim',
          cardType: 'summary_large_image',
        }}
      />
      <JobPostingJsonLd
        datePosted={job.publishedAt}
        description={job.excerpt}
        hiringOrganization={{
          name: 'Practical Programming',
          sameAs: 'https://practicalprogramming.fr',
        }}
        jobLocation={{
          streetAddress: '128 rue de la Boétie',
          addressLocality: 'Paris',
          addressRegion: 'Ile-de-France',
          postalCode: '75008',
          addressCountry: 'France',
        }}
        title={job.position}
        baseSalary={{
          currency: 'EUR',
          value: 5000,
          unitText: 'MONTH',
        }}
        employmentType="FULL_TIME"
        jobLocationType="TELECOMMUTE"
        validThrough={dayjs(job.publishedAt).add(60, 'day').toISOString()}
        applicantLocationRequirements="FR"
      />
      <div>
        <Nav />
        <JobDescription opportunity={job} />
        <ContactForm />
        {/* <ContactMe author={job.author} /> */}
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const companySlug = ctx.params.entreprise
  const jobSlug = ctx.params.job

  const jobQuery = `*[_type == "job" && slug.current=="${jobSlug}" && hiringCompany._ref in *[_type=="company" && slug.current=="${companySlug}"]._id][0]{...,author->{name,linkedin,"url":image.asset->url}}`
  const job = await sanity.fetch(jobQuery, { companySlug, jobSlug })
  return { props: { job } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getJobs = `*[_type == "job" && published == true && hiringCompany._ref !="59d00fa9-6b14-446e-8b57-4b0e2cc1b7b6"]{slug,hiringCompany->{slug}}`
  const jobs = await sanity.fetch(getJobs)
  const paths = jobs.map((listedJob) => {
    return {
      params: { entreprise: listedJob.hiringCompany.slug.current, job: listedJob.slug.current },
    }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default JobsPage
