import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Section from '../components/section'
import sanity from '../lib/sanity'

import { GetStaticProps } from 'next'

const latestArticles = `*[_type == "post"][0..4]{title,slug,excerpt,"thumbnail":mainImage.asset->url,author->{name,"url":image.asset->url}}`

const IndexPage: React.FC = ({ posts }) => {
  return (
    <div>
      <Nav />
      <Hero post={posts[0]} />
      <Section posts={posts} />
      {/* <Hero /> */}
      <Section posts={posts} />
      <Section posts={posts} />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanity.fetch(latestArticles)
  console.log(posts)
  return { props: { posts } }
}

export default IndexPage
