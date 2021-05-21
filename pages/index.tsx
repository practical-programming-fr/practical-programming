import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Section from '../components/section'
import sanity from '../lib/sanity'
import { NextSeo } from 'next-seo'

import { GetStaticProps } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'

const getPosts = `{
  "heroPost": *[_type == "post"]
    {
    publishedAt,
    title,
    slug,
    excerpt,
    "thumbnail":mainImage.asset->url,
    author->{name,"url":image.asset->url}
    } | order(publishedAt desc) |[0],
  "latestPosts": *[_type == "post"]
    {
    publishedAt,
    title,
    slug,
    excerpt,
    "thumbnail":mainImage.asset->url,
    author->{name,"url":image.asset->url}
    } | order(publishedAt desc) | [1..4],
  "conseilsCarriere": *[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="conseil-carriere"]._id]
    {
    publishedAt,
    title,
    slug,
    excerpt,
    categories[0]->{"slug":slug.current},
    "thumbnail":mainImage.asset->url,
    author->{name,"url":image.asset->url}
    } | order(publishedAt desc) | [0..3],
  "backend": *[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="backend"]._id]
    {
    publishedAt,
    title,
    slug,
    excerpt,
    categories[0]->{"slug":slug.current},
    "thumbnail":mainImage.asset->url,
    author->{name,"url":image.asset->url}
    } | order(publishedAt desc) | [0..3],
  "frontend":*[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="frontend"]._id]
  {
  publishedAt,
  title,
  slug,
  excerpt,
  categories[0]->{"slug":slug.current},
  "thumbnail":mainImage.asset->url,
  author->{name,"url":image.asset->url}
  } | order(publishedAt desc) | [0..3]
}`

const organisationJsonId = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'http://practicalprogramming.fr/#organization',
      name: 'Practical Programming',
      url: 'http://practicalprogramming.fr/',
      sameAs: [
        'https://www.facebook.com/real.practical.programming',
        'https://www.linkedin.com/company/practical-programming',
        'https://www.youtube.com/channel/UC7EOOlSs4LVos5HHAM3Y9Hw',
      ],
      logo: {
        '@type': 'ImageObject',
        '@id': 'http://practicalprogramming.fr/#logo',
        inLanguage: 'fr-FR',
        url:
          'https://res.cloudinary.com/doquvzod9/image/upload/v1614090822/PRACTICAL_PROGRAMMING_1_necpbx.png',
        width: 400,
        height: 400,
        caption: 'Practical Programming',
      },
      image: {
        '@id':
          'https://res.cloudinary.com/doquvzod9/image/upload/v1614090822/PRACTICAL_PROGRAMMING_1_necpbx.png',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'http://practicalprogramming.fr/#website',
      url: 'http://practicalprogramming.fr/',
      name: 'Practical Programming',
      description: 'Développement, Logiciel et Produit',
      publisher: {
        '@id': 'http://practicalprogramming.fr/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: 'http://practicalprogramming.fr/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://practicalprogramming.fr/#webpage',
      url: 'https://practicalprogramming.fr/',
      name: 'Practical Programming : le Média des Développeurs Web',
      isPartOf: {
        '@id': 'http://practicalprogramming.fr/#website',
      },
      about: {
        '@id': 'http://practicalprogramming.fr/#organization',
      },
      datePublished: '2016-10-12T18:04:37+00:00',
      dateModified: '2020-12-19T14:12:36+00:00',
      description:
        "L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres.",
      inLanguage: 'fr-FR',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://practicalprogramming.fr/'],
        },
      ],
    },
  ],
}

const IndexPage: React.FC<any> = ({ posts }) => {
  const [session, loading] = useSession()
  console.log(session)
  return (
    <>
      <NextSeo
        title="Practical Programming : le Média des Développeurs Web"
        description="L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres."
        canonical="https://practicalprogramming.fr/"
        openGraph={{
          url: `https://practicalprogramming.fr/`,
          locale: 'fr_FR',
          type: 'website',
          title: 'Practical Programming : le Média des Développeurs Web',
          description: 'Le Média des développeurs web souhaitant faire avancer leur carrière',
          images: [
            {
              url:
                'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixqx=xNLzUn5i0j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
              width: 800,
              height: 600,
              alt: 'Practical Programming, le média pour les développeurs web',
            },
          ],
          site_name: 'Practical Programming',
          article: {
            section: 'Programming',
            modifiedTime: posts.heroPost._updatedAt,
          },
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
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
        <Hero post={posts.heroPost} />
        <Section posts={posts.conseilsCarriere} title="Conseil carrière" />
        <Section posts={posts.backend} title="Backend" />
        <Section posts={posts.frontend} title="Frontend" />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonId) }}
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanity.fetch(getPosts)
  return { props: { posts } }
}

export default IndexPage
