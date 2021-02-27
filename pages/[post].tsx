/* eslint-disable jsx-a11y/heading-has-content */

import Nav from '../components/nav'
import Footer from '../components/footer'
import Author from '../components/post/author'
import Summary from '../components/post/summary'
import Image from 'next/image'
import sanity from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from './markdown-styles.module.css'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import dayjs from 'dayjs'
import slugify from 'slugify'
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next'
import Rubriques from '../components/post/rubriques'
import RelatedPost from '../components/post/relatedPost'
import { useNextSanityImage } from 'next-sanity-image'

const article = `*[_type == "post" && slug.current == $slug][0]
{
  ..., 
  author->{
    name,
    image
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
  }
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
          <Image {...imageProps} sizes="(max-width: 750) 100vw, 750px" />
          <p className="font-thin text-center text-gray-800" style={{ marginTop: 0 }}>
            {props.node.caption}
          </p>
        </div>
      )
    },
    youtube: function youTubeSerializer({ node }) {
      const { url } = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} />
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
  },
  marks: {
    internalLink: function linkSerializer({ mark, children }) {
      const { slug = {} } = mark
      const href = `/${slug.current}`
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
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.metaDescription}
        canonical={`https://practicalprogramming.fr/${post.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/`,
          locale: 'fr_FR',
          type: 'article',
          title: post.title,
          description: 'Description du post',
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
      <section className="bg-white">
        <div className="lg:flex lg:flex-wrap justify-center h-full">
          <div className="flex-1 max-w-3xl">
            <article className="px-8 py-8 bg-white dark:bg-gray-800">
              <h1 className="text-5xl font-medium font-serif">{post.title}</h1>
              <ArticleJsonLd
                url={`https://practicalprogramming.fr/${post.slug.current}`}
                title={post.title}
                images={[urlFor(post.mainImage.asset._ref).url()]}
                datePublished={post.publishedAt}
                dateModified={post._updatedAt}
                authorName={post.author.name}
                publisherName="Practical Programming"
                publisherLogo="https://www.example.com/photos/logo.jpg"
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
                  <p className="text-gray-800 text-lg leading-7 font-medium space-y-1">
                    {post.author.name}
                  </p>
                  <p className="text-blue-700 -mt-2 leading-7 font-medium">
                    {dayjs(post.publishedAt).locale('fr').format('D MMMM YYYY')}
                  </p>
                </div>
              </div>
              <Summary post={post} />
              <Rubriques post={post} />
              <BlockContent
                blocks={post.body}
                className={markdownStyles.markdown}
                serializers={serializers}
              />
            </article>
            <Author author={post.author} />
          </div>
          <div className="p-4 max-w-lg">
            <RelatedPost relatedPosts={relatedPosts} category={post.categories.title} />
            {/* <StickyPost /> */}
          </div>
        </div>
      </section>
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
