import Nav from '../components/nav'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

function Hit(props) {
  return <Highlight attribute="name" hit={props.hit} className="dark:text-white" />
}

const searchClient = instantMeiliSearch('http://localhost:7700', null)

const Jobs: React.FC = () => {
  console.log(searchClient)
  return (
    <div>
      <NextSeo title="Search - Practical Programming" description="Search Practical Programming" />
      <Nav />
      <section className="p-12">
        <InstantSearch indexName="jobs" searchClient={searchClient}>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </section>
      <Footer />
    </div>
  )
}

export default Jobs
