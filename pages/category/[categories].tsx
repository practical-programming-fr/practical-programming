import Nav from '../../components/nav'
import Section from '../../components/section'
import sanity from '../../lib/sanity'

import { GetStaticProps, GetStaticPath } from 'next'

const Categories: React.FC = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <Nav />
      <Section posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.categories
  const getCategoriesQuery = `*[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="${slug}"]._id ]{title,slug,excerpt,"thumbnail":mainImage.asset->url,author->{name,"url":image.asset->url}}`
  const posts = await sanity.fetch(getCategoriesQuery)
  return { props: { posts } }
}

export const getStaticPaths: GetStaticPath = async () => {
  const getCategoriesQuery = `*[_type == "category"]`
  const categories = await sanity.fetch(getCategoriesQuery)
  const paths = categories.map((category) => {
    return { params: { categories: category.slug.current } }
  })
  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default Categories
