/* eslint-disable jsx-a11y/heading-has-content */

import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Image from 'next/image'
import sanity from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import slugify from 'slugify'
import { NextSeo, NewsArticleJsonLd } from 'next-seo'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next'
import { useNextSanityImage } from 'next-sanity-image'

import CardLink from '../../components/post/cardLink'
import OptinForm from '../../components/post/optinForm'

const article = `*[_type == "post" && slug.current == $slug][0]
{
  ..., 
  author->{
    name,
    image,
    slug
  },
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "cardLink" => {
        "slug": @.reference->slug,
        "image": @.reference->mainImage.asset->url,
        "excerpt":@.reference->excerpt
      }
    }
  },
  categories[0]->{title,slug},
  parentPost->
  {
    title,
    "slug":slug.current,
    "image":mainImage.asset->url,
    parentPost->
    {
      title,
      "slug":slug.current,
      "image":mainImage.asset->url
    }
  },
  relatedPosts[]->{
    title,
    excerpt,
    slug,
    "image":mainImage.asset->url
  },
  "recentPosts": *[_type == "post" && slug.current != "tests-unitaires" && published == true]{
		_id,
  	title,
  	slug,
  	excerpt,
  publishedAt,
	_updatedAt,
  categories[0]->{
		title,
    slug
  },
author->{name,slug,"image":image.asset->url},
    categories->,
  } | order(publishedAt desc) | [0..5]
}`
const builder = imageUrlBuilder(sanity)

const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

const options = {
  replacement: '-',
  remove: /-$/,
  lower: true,
  strict: true,
  locale: 'fr',
}

const overrides = {
  h2: function h2override(props) {
    return <h2 id={slugify(JSON.stringify(props.children), options)} {...props} />
  },
  h3: function h3override(props) {
    return <h3 id={slugify(JSON.stringify(props.children), options)} {...props} />
  },
}

const serializers = {
  types: {
    code: function syntaxHighlighter(props) {
      return (
        <SyntaxHighlighter language={props.node.language} style={tomorrow}>
          {props.node.code}
        </SyntaxHighlighter>
      )
    },
    image: function imageSerializer(props) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const imageProps = useNextSanityImage(sanity, props.node)

      return (
        <div>
          <Image {...imageProps} sizes="(max-width: 750) 100vw, 750px" alt={props.node.alt} />
          <p
            className="font-thin text-center font-sans text-sm text-gray-800 dark:text-white"
            style={{ marginTop: 0 }}
          >
            {props.node.caption}
          </p>
        </div>
      )
    },
    youtube: function youTubeSerializer({ node }) {
      const { url } = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} className="w-full" />
    },
    table: function tableSerializer(props) {
      return (
        <table className="table-auto">
          {props.node.rows.map((row) => {
            return (
              <tr key={row._key}>
                {row.cells.map((cell) => (
                  <td key={cell} className="border px-2 font-thin">
                    {cell}
                  </td>
                ))}
              </tr>
            )
          })}
        </table>
      )
    },
    block: (props) =>
      // Check if we have an override for the “style”
      overrides[props.node.style]
        ? overrides[props.node.style]({ children: props.children })
        : BlockContent.defaultSerializers.types.block(props),
    cardLink: function cardLink({ node }) {
      return <CardLink props={node} />
    },
    optinForm: function optinForm({ node }) {
      return <OptinForm props={node} />
    },
  },

  marks: {
    internalLink: function linkSerializer({ mark, children }) {
      const { slug = {} } = mark
      const href = `/${slug.current}/`
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )
    },
    highlight: function highlightBlock({ children }) {
      return (
        <div className="p-6 bg-blue-50 rounded-md">
          <p className="text-blue-900">{children}</p>
        </div>
      )
    },
  },
}

const News: React.FC<any> = () => {
  return (
    <>
      {/* <NextSeo
        title={news.title}
        description={news.metaDescription}
        canonical={`https://practicalprogramming.fr/${news.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/${news.slug.current}`,
          locale: 'fr_FR',
          type: 'article',
          title: news.title,
          description: news.metaDescription,
          images: [
            {
              url: urlFor(news.mainImage.asset._ref).url(),
              width: 1500,
              height: 500,
              alt: news.title,
            },
          ],
          site_name: 'Practical Programming',
          article: {
            authors: ['Rayed Benbrahim'],
            section: 'Programming',
            publishedTime: news.publishedAt,
            modifiedTime: news._updatedAt,
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
      /> */}
      <Nav />
      <section className="bg-white dark:bg-dark-gray dark:text-brand">
        <div className="lg:flex lg:flex-wrap justify-center h-full">
          <div className="flex-1 max-w-3xl">
            <article className="px-8 py-8 bg-white dark:bg-dark-gray">
              <h1 className="text-3xl lg:text-5xl dark:dark-white dark:text-white font-bold font-sans">
                Comment Doctolib a réagi à l'annonce du Pass Sanitaire ... et au pic de trafic qui a
                suivi !
              </h1>
              {/* <NewsArticleJsonLd
                url={`https://practicalprogramming.fr/${news.slug.current}`}
                title={news.title}
                section="technology"
                images={[urlFor(news.mainImage.asset._ref).url()]}
                datePublished={news.publishedAt}
                dateModified={news._updatedAt}
                authorName={news.author.name}
                publisherName="Practical Programming"
                publisherLogo="https://res.cloudinary.com/doquvzod9/image/upload/v1614090822/PRACTICAL_PROGRAMMING_1_necpbx.png"
                description={news.metaDescription}
                keywords="test"
                dateCreated={news.publishedAt}
                body="body"
              /> */}
            </article>
          </div>
          <div className="p-4 max-w-lg">sidebar</div>
        </div>
      </section>
      <Footer />
    </>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const slug = ctx.params.post
//   const post = await sanity.fetch(article, { slug })
//   const relatedPostsQuery = `*[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="${post.categories.slug.current}"]._id ][0..2]{title,slug,excerpt,categories}`
//   const relatedPostsResponse = await sanity.fetch(relatedPostsQuery)
//   const relatedPosts = relatedPostsResponse.filter((post) => post.slug.current !== slug)
//   return { props: { post, relatedPosts } }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const getPosts = `*[_type == "post"]{slug}`
//   const posts = await sanity.fetch(getPosts)
//   const paths = posts.map((post) => {
//     return { params: { post: post.slug.current } }
//   })
//   return {
//     paths,
//     fallback: false, // See the "fallback" section below
//   }
// }

export default News
