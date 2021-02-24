import Nav from '../../components/nav'
import Footer from '../../components/footer'

import Section from '../../components/section'
import sanity from '../../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from '../markdown-styles.module.css'
import imageUrlBuilder from '@sanity/image-url'
import { GetStaticProps, GetStaticPaths } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

const serializers = {
  types: {
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

const builder = imageUrlBuilder(sanity)

const urlFor: any = (source: SanityImageSource) => {
  return builder.image(source)
}

const Author: React.FC<any> = ({ posts }) => {
  const author = posts[0].author
  return (
    <div>
      <NextSeo
        title={`${author.name} - Découvrez ses articles`}
        description={`Découvre les articles écrits par ${author.name}`}
      />

      <SocialProfileJsonLd
        type="Person"
        name={author.name}
        url="https://practicalprogramming.fr"
        sameAs={[author.linkedin]}
      />
      <Nav />
      <section className="bg-white">
        <div className="lg:flex lg:flex-wrap justify-center h-full">
          <div className="flex-1 max-w-3xl px-5 py-6">
            <h1 className="text-5xl font-medium font-serif py-5">{author.name}</h1>
            <Image src={`${author.url}/?h=250`} height={250} width={400} />
            <BlockContent
              blocks={author.bio}
              className={markdownStyles.markdown}
              serializers={serializers}
            />
          </div>
        </div>
      </section>
      <Section posts={posts} title="Articles du même auteur" />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.author
  const getAuthorAndPosts = `*[_type == "post" && author._ref in *[_type=="author" && slug.current=="${slug}"]._id ]{title,slug,excerpt,"thumbnail":mainImage.asset->url,author->{name,bio,"url":image.asset->url,linkedin}}`
  const posts = await sanity.fetch(getAuthorAndPosts)
  return { props: { posts } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getAuthorsQuery = `*[_type == "author"]{slug}`
  const authors = await sanity.fetch(getAuthorsQuery)
  const paths = authors.map((author) => {
    return { params: { author: author.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default Author
