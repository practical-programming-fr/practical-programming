/* eslint-disable jsx-a11y/heading-has-content */

import Nav from '../components/nav'
import Footer from '../components/footer'
import Summary from '../components/post/summary'
import Image from 'next/image'
import Script from 'next/script'
import sanity from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from './markdown-styles.module.css'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import slugify from 'slugify'
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next'
import Rubriques from '../components/post/rubriques'
import RelatedPost from '../components/post/relatedPost'
import { useNextSanityImage } from 'next-sanity-image'

import CardLink from '../components/post/cardLink'
import OptinForm from '../components/post/optinForm'
import MorePosts from '../components/post/morePosts'
import WeLoveDevs from '../components/post/weLoveDevs'
import ScriptTags from '../components/scriptTags'

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

const BreadCrumbs: React.FC<any> = ({ post }) => {
  if (!post.parentPost) return null
  if (post.parentPost.parentPost) {
    return (
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: post.parentPost.parentPost.title,
            item: `https://practicalprogramming.fr/${post.parentPost.parentPost.slug}`,
          },
          {
            position: 2,
            name: post.parentPost.title,
            item: `https://practicalprogramming.fr/${post.parentPost.slug}`,
          },
          {
            position: 3,
            name: post.title,
            item: `https://practicalprogramming.fr/${post.slug.current}`,
          },
        ]}
      />
    )
  } else {
    return (
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: post.parentPost.title,
            item: `https://practicalprogramming.fr/${post.parentPost.slug}`,
          },
          {
            position: 2,
            name: post.title,
            item: `https://practicalprogramming.fr/${post.slug.current}`,
          },
        ]}
      />
    )
  }
}

const Post: React.FC<any> = ({ post, relatedPosts }) => {
  const defaultPostScript = [
    { src: 'https://rbbm.activehosted.com/f/embed.php?id=7', strategy: 'lazyOnload' },
  ]
  const customPostScripts = post.scripts ?? defaultPostScript
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.metaDescription}
        canonical={`https://practicalprogramming.fr/${post.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/${post.slug.current}`,
          locale: 'fr_FR',
          type: 'article',
          title: post.title,
          description: post.metaDescription,
          images: [
            {
              url: urlFor(post.mainImage.asset._ref).url(),
              width: 1500,
              height: 500,
              alt: post.title,
            },
          ],
          site_name: 'Practical Programming',
          article: {
            authors: ['Rayed Benbrahim'],
            section: 'Programming',
            publishedTime: post.publishedAt,
            modifiedTime: post._updatedAt,
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
      <Nav />
      <section className="max-w-3xl mx-auto pt-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-3 p-4 max-w-lg">
          <Summary post={post} />
          <Rubriques post={post} />
        </div>
            <article className="lg:col-span-9 xl:col-span-6 dark:text-brand px-4">
              <h1 className="text-3xl dark:dark-white font-bold font-sans pt-6">
                {post.title}
              </h1>
              <ArticleJsonLd
                url={`https://practicalprogramming.fr/${post.slug.current}`}
                title={post.title}
                images={[urlFor(post.mainImage.asset._ref).url()]}
                datePublished={post.publishedAt}
                dateModified={post._updatedAt}
                authorName={post.author.name}
                publisherName="Practical Programming"
                publisherLogo="https://res.cloudinary.com/doquvzod9/image/upload/v1614090822/PRACTICAL_PROGRAMMING_1_necpbx.png"
                description={post.metaDescription}
              />
              <BreadCrumbs post={post} />
              <div className="mt-5 flex justify-items-start space-x-4 lg:space-x-6">
                <Image
                  src={urlFor(post.author.image.asset._ref).width(80).height(80).url()}
                  width={80}
                  height={80}
                  className="mx-4 w-16 h-16 object-cover rounded-full hidden sm:block"
                  alt={`Avatar de ${post.author.name}`}
                />

                <div className="mx-4 mt-4 flex flex-col">
                  <Link href={`/author/${post.author.slug.current}`}>
                    <a className="text-gray-800 dark:text-brand text-lg leading-7 font-medium space-y-1">
                      {post.author.name}
                    </a>
                  </Link>
                  <p className="text-blue-700 text-sm dark:text-brand -mt-2 leading-7 font-thin">
                    Publié le {dayjs(post.publishedAt).locale('fr').format('D MMMM YYYY')}
                  </p>
                </div>
              </div>
              
              
              <BlockContent
                blocks={post.body}
                className={markdownStyles.markdown}
                serializers={serializers}
              />
            </article>

          <div className="p-4 max-w-lg col-span-3">
            <RelatedPost
              relatedPosts={relatedPosts}
              category={post.categories.title}
              slug={post.categories.slug.current}
            />
          </div>

      </section>
      <MorePosts posts={post.recentPosts} />
      <WeLoveDevs />
      <ScriptTags scripts={customPostScripts} />
      <Script
        src="https://widget.welovedevs.com/jobs-widget.js"
        type="module"
        strategy="lazyOnload"
      />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.post
  const post = await sanity.fetch(article, { slug })
  const relatedPostsQuery = `*[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="${post.categories.slug.current}"]._id ][0..2]{title,slug,excerpt,categories}`
  const relatedPostsResponse = await sanity.fetch(relatedPostsQuery)
  const relatedPosts = relatedPostsResponse.filter((post) => post.slug.current !== slug)
  return { props: { post, relatedPosts } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getPosts = `*[_type == "post"]{slug}`
  const posts = await sanity.fetch(getPosts)
  const paths = posts.map((post) => {
    return { params: { post: post.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default Post
