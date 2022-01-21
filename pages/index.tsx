import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Section from '../components/section'
import Section2 from '../components/section2'
import sanity from '../lib/sanity'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { GetStaticProps } from 'next'

const getCategories = '*[_type == "category"]{"id":_id,title,"slug":slug.current,_updatedAt}'

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
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'

const communities = [
  { name: 'Movies', href: '#1' },
  { name: 'Food', href: '#2' },
  { name: 'Sports', href: '#3' },
  { name: 'Animals', href: '#4' },
  { name: 'Science', href: '#5' },
  { name: 'Dinosaurs', href: '#6' },
  { name: 'Talents', href: '#7' },
  { name: 'Gaming', href: '#8' },
]

const trendingPosts = [
  {
    id: 1,
    title: 'Node JS API: Construire une API REST avec Node JS et Express',
    categories: ['Backend'],
    body: "Node JS API: Construire une API REST avec Node JS et Express",
    slug:"node-js-api",
  },
  {
    id: 2,
    title: 'Postman: le guide complet de l’outil indispensable au développement web',
    categories: ['Backend'],
    slug:"postman"
  },
  {
    id: 3,
    title: "NEXT JS: Pourquoi j'ai choisi NEXT JS pour mon projet perso",
    categories: ['Frontend'],
    slug:"pourquoi-next-js"
  },
  {
    id: 4,
    title: 'Tests Unitaires: Que sont-ils et comment les implémenter ?',
    categories: ['Backend'],
    slug:"tests-unitaires"
  }
  
  // More posts...
]

const whoToFollow = [
  {
    name: 'Clément Garbay',
    handle:"Je construis le système d'exploitation des achats en entreprise",
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: 'Achille Urbain',
    handle:"J'assure le fonctionnement du backend de la néobanque pour entrepreneurs",
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Benjamin Allion',
    handle:"Je construis le système d'exploitation des achats en entreprise",
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

const LeftNav: React.FC<any> = () => (
  <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
    <div className="sticky top-4 space-y-4">
      <section>
        <div className="bg-white dark:bg-bg-neutral-900 rounded-lg shadow">
          <div className="p-6">
            <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900 dark:text-white">
              Teams
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {whoToFollow.map((user) => (
                  <li key={user.handle} className="flex items-center py-4 space-x-3">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-md font-medium text-gray-900 dark:text-white dark:hover:text-orange-link">
                        <a href={user.href}>{user.name}</a>
                      </p>
                      <p className="text-sm text-gray-900 dark:text-brand">
                        <a href={user.href}>Spendesk</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href={user.href}>{user.handle}</a>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:text-white dark:bg-orange-link dark:border-orange-link dark:hover:bg-brand dark:hover:border-brand"
              >
                Voir toutes  les teams
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 id="trending-heading" className="text-base font-medium text-gray-900 dark:text-white">
              Meilleurs Articles
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {trendingPosts.map((post) => (
                  <li key={post.id} className="flex py-4 space-x-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-800 font-bold dark:text-white">{post.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

const RightNav: React.FC<any> = ({categories}) => (
  
  <aside className="hidden xl:block xl:col-span-4">
    <div className="top-4 space-y-4">
      {/* <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
              Mon compte
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {whoToFollow.map((user) => (
                  <li key={user.handle} className="flex items-center py-4 space-x-3">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={user.href}>{user.name}</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href={user.href}>{'@' + user.handle}</a>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                      >
                        <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" aria-hidden="true" />
                        <span>Follow</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="bg-white rounded-lg shadow dark:bg-bg-neutral-900">
          <div className="p-6">
            <h2 id="trending-heading" className="text-base font-medium text-gray-900 dark:text-white">
              Meilleurs Articles
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {trendingPosts.map((post) => (
                  <li key={post.id} className="flex py-4 space-x-3">
                    <div className="min-w-0 flex-1">
                      <Link href={`/${post.slug}`}>
                        <a className="text-sm text-gray-800 font-bold dark:text-brand dark:hover:text-orange-link">{post.title}</a>
                      </Link>
                      {/* <div className="mt-2 flex">
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="font-medium text-gray-900">{post.comments}</span>
                          </button>
                        </span>
                      </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="mt-6">
              <a
                href="#"
                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white rounded-lg shadow dark:bg-bg-neutral-900">
          <div className="p-6">
            <h2 id="trending-heading" className="text-base font-medium text-gray-900 dark:text-white">
              Catégories
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {categories.map((category) => (
                  <li key={category.id} className="flex py-2 space-x-3">
                    <div className="min-w-0 flex-1">
                      <Link href={`/category/${category.slug}`}>
                        <a className="text-sm text-gray-800 dark:text-brand dark:hover:text-orange-link">{category.title}</a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </aside>
) 

const IndexPage: React.FC<any> = ({ posts, categories }) => {
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
        <div className="max-w-3xl mx-auto pt-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12">
          {/* <LeftNav /> */}
          <main className="lg:col-span-9 xl:col-span-8">
            <Hero post={posts.heroPost} />
            <Section posts={posts.latestPosts} title="Derniers Articles" />
            <Section posts={posts.conseilsCarriere} title="Conseil carrière" />
            <Section posts={posts.backend} title="Backend" />
            <Section posts={posts.frontend} title="Frontend" />
          </main>
          <RightNav categories={categories}/>
        </div>
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
  const categories = await sanity.fetch(getCategories)
  return { props: { posts, categories } }
}

export default IndexPage
