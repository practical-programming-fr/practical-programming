import Nav from '../components/nav'
import Footer from '../components/footer'
import Author from '../components/post/author'
import Image from 'next/image'
import sanity from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from './markdown-styles.module.css'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { GetStaticProps } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const article = `*[_type == "post" && slug.current == $slug][0]{..., author->,categories[0]->{title}}`

const builder = imageUrlBuilder(sanity)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
const serializers = {
  types: {
    code: function syntaxHighlighter(props) {
      return <SyntaxHighlighter language={props.node.language}>{props.node.code}</SyntaxHighlighter>
    },
    image: function imageSerializer(props) {
      return (
        <div>
          <Image
            src={urlFor(props.node).width(750).height(500).url()}
            alt={props.node.alt}
            width={750}
            height={500}
          />
          <p className="-mt-2 font-thin text-center">{props.node.caption}</p>
        </div>
      )
    },
  },
}

const PostPage: React.FC = ({ post }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description="This example uses more of the available config options."
        canonical={`https://practicalprogramming.fr}/`}
        openGraph={{
          url: `https://practicalprogramming.fr/`,
          locale: 'fr_FR',
          type: 'article',
          title: post.title,
          description: 'Description du post',
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
          article: {
            authors: ['Rayed Benbrahim'],
            section: 'Programming',
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
                url={`https://practicalprogramming.fr/`}
                title={post.title}
                images={[
                  'https://example.com/photos/1x1/photo.jpg',
                  'https://example.com/photos/4x3/photo.jpg',
                  'https://example.com/photos/16x9/photo.jpg',
                ]}
                datePublished="2015-02-05T08:00:00+08:00"
                dateModified="2015-02-05T09:00:00+08:00"
                authorName={['Rayed Benbrahim', 'Mary Stone']}
                publisherName="Practical Programming"
                publisherLogo="https://www.example.com/photos/logo.jpg"
                description="This is a mighty good description of this article."
              />
              <div className="mt-5 flex justify-items-start">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                  className="mx-4 w-14 h-14 object-cover rounded-full hidden sm:block"
                />
                <div className="flex flex-col">
                  <p className="text-gray-800 leading-7">Rayed Benbrahim</p>
                  <p className="text-gray-500 leading-7">12 Janvier 2021</p>
                </div>
                <div className="flex justify-self-end">
                  <p>T</p>
                  <p>L</p>
                  <p>Y</p>
                </div>
              </div>
              <BlockContent
                blocks={post.body}
                className={markdownStyles.markdown}
                serializers={serializers}
              />
            </article>
            <Author author={post.author} />
          </div>
          <div className="p-4 max-w-lg">
            <aside className="px-8 pt-8 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="tracking-widest text-md title-font font-medium text-blue-500 mb-3">
                {post.categories.title}
              </h4>
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
              <hr />
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
            </aside>
            <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg min-h-40 max-w-lg lg:fixed z-0">
              <h4 className="tracking-widest text-md title-font font-medium text-blue-500 mb-3">
                ADS{' '}
              </h4>
              <div className="w-full p-4">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
              <hr />
              <div className="w-full p-4 ">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const post = await sanity.fetch(article, { slug: 'article-1' })
  return { props: { post } }
}

export default PostPage
