import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

function Hit(props) {
  return <Highlight attribute="name" hit={props.hit} />
}

const searchClient = instantMeiliSearch(
  'https://demos.meilisearch.com',
  'dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25'
)

const JobsList: React.FC = () => (
  <main
    className="flex-1 max-w-4xl mx-auto mt-12 relative overflow-y-auto focus:outline-none"
    tabIndex={0}
  >
    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
      <button className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
        {/* Heroicon name: outline/menu-alt-2 */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <div className="flex-1 flex justify-between px-4 md:px-0">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search_field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                {/* Heroicon name: solid/search */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search_field"
                className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 sm:px-6 md:px-0">
        {/* Replace with your content */}
        <div className="bg-white border-2 border-blue rounded-md">
          <div className="flex-shrink-0">
            <img
              className="h-24 w-24 rounded-md"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=xNLzUn5i0j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="jobs"
            />
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Michael Foster</p>
              <p className="text-sm text-gray-500 truncate">Co-Founder / CTO</p>
            </a>
          </div>
        </div>

        {/* /End replace */}
      </div>
    </div>
  </main>
)

export default JobsList
