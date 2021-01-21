import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Latest from '../components/latest'
import Section from '../components/section'
import sanity from '../lib/sanity'

import { GetStaticProps } from 'next'

const latestArticles = `*[_type == "post"][0..4]{title,slug,excerpt, author->{name,image},categories[0]->{title}}`

const IndexPage: React.FC = ({ posts }) => {
  return (
    <div>
      <Nav />
      <Hero post={posts[0]} />
      <Latest posts={posts} />
      <Hero />
      <Section posts={posts} />
      <Section posts={posts} />
      <Section posts={posts} />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanity.fetch(latestArticles)
  return { props: { posts } }
}

export default IndexPage
