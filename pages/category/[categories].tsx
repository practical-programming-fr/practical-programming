import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Section from '../../components/section'
import sanity from '../../lib/sanity'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

import { GetStaticProps, GetStaticPaths } from 'next'

interface CategoryProps {
  posts: any
  category: any
}

const Categories: React.FC<CategoryProps> = ({ posts, category }) => {
  return (
    <>
      <NextSeo
        title={`Archives des articles ${category.title} - Practical Programming`}
        description={category.description}
        canonical={`https://practicalprogramming.fr/category/${category.slug.current}`}
        openGraph={{
          url: `https://practicalprogramming.fr/category/${category.slug.current}`,
          locale: 'fr_FR',
          type: 'article',
          title: category.title,
          description: category.description,
          site_name: 'Practical Programming',
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
        <Section posts={posts} title={category.title} />
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'Categories',
              item: 'https://practicalprogramming.fr/',
            },
            {
              position: 2,
              name: 'Authors',
              item: 'https://example.com/category',
            },
            {
              position: 3,
              name: category.title,
              item: `https://example.com/${category.slug.current}`,
            },
          ]}
        />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.categories
  const getPostsQuery = `*[_type == "post" && categories[0]._ref in *[_type=="category" && slug.current=="${slug}"]._id ]{title,slug,excerpt,"thumbnail":mainImage.asset->url,author->{name,"url":image.asset->url}}`
  const getCategoryQuery = `*[_type=="category" && slug.current == "${slug}"][0]`
  const posts = await sanity.fetch(getPostsQuery)
  const category = await sanity.fetch(getCategoryQuery)
  return { props: { posts, category } }
}

export const getStaticPaths: GetStaticPaths = async () => {
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
