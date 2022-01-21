import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { NextSeo } from 'next-seo'
import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PhoneIcon,
  MailIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import { FireIcon, HomeIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import debounce from 'lodash/debounce'
import axios from 'axios'

const navigation = [
  { name: 'Toutes', href: '#', icon: HomeIcon, current: true },
  { name: 'Startups', href: '#', icon: FireIcon, current: false },
  { name: 'Scaleups', href: '#', icon: TrendingUpIcon, current: false },
  { name: 'ESN', href: '#', icon: CodeIcon, current: false },
  { name: 'Grands groupes', href: '#', icon: UserGroupIcon, current: false },
]

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600'},
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Positions = ({positions}):JSX.Element => {
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Les postes ouverts chez nous:</h2>
      <ul role="list" className="mt-3">
        {positions.map((position) => (
          <li key={position.position} className="col-span-1 flex shadow-sm rounded-md mt-2">
            <div
              className={classNames(
                // project.bgColor,
                'bg-blue-400 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {/* {project.initials} */}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href="#" className="text-gray-900 font-medium hover:text-gray-600">
                  {position.position}
                </a>
                <p className="text-gray-500">Seniorité: {position.level}</p>
                <p className="text-gray-500">Full Remote</p>
                <p className="text-gray-500">40-55k€</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Teams: React.FC<any> = ({teams}) => {
  const [activeTeams, setActiveTeams] = useState(teams)
  const [query, setQuery] = useState()
  const delayedHandleChange = debounce(async (eventData) => {
    setQuery(eventData)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/teams?q=${eventData}`)
    console.log(query)
    setActiveTeams(data)
  }, 500)

  const handleChange = (e) => {
    const eventData = e.target.value
    delayedHandleChange(eventData)
  }

  const handleCheckChange = (event) =>  {
    const target = event.target;
    const isChecked = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (isChecked) {
      const filteredTeams = activeTeams.filter(team => team.stack.includes(name))
      setActiveTeams(filteredTeams)
    } else {
      setActiveTeams(teams)
    }

  }

  return (
    <>
      <NextSeo
        title={`recherche des développeurs`}
        description="découvrez les entreprises"
        canonical={`https://practicalprogramming.fr/entreprise/`}
        openGraph={{
          url: `https://practicalprogramming.fr/entreprise/`,
          locale: 'fr_FR',
          type: 'article',
          title: `recherche des développeurs`,
          description: `page entreprise`,
          site_name: 'Practical Programming',
          images: [
            {
              url:
                'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              width: 800,
              height: 600,
              alt: "Exemple d'image de startup",
            },
          ],
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
      <div className="min-h-full bg-gray-100 dark:bg-dark-gray">
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:block lg:col-span-4 xl:col-span-3">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                <div className="pb-8 space-y-1">
                
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
                <div className="pt-10">
                  <p
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="communities-headline"
                  >
                    Mon objectif
                  </p>
                  <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="Javascript"
                          aria-describedby="comments-description"
                          name="Javascript"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          onClick={handleCheckChange}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="Javascript" className="font-medium text-gray-700">
                          JavaScript
                        </label>
                        <span id="comments-description" className="text-gray-500">
                          <span className="sr-only">JavaScript</span>
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="Python"
                          aria-describedby="candidates-description"
                          name="Python"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          onClick={handleCheckChange}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="Typescript" className="font-medium text-gray-700">
                          Python
                        </label>
                        <span id="candidates-description" className="text-gray-500">
                          <span className="sr-only">Python </span>
                          
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="Typescript"
                          aria-describedby="offers-description"
                          name="Typescript"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          onClick={handleCheckChange}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="offers" className="font-medium text-gray-700">
                          Typescript
                        </label>
                        <span id="offers-description" className="text-gray-500">
                          <span className="sr-only">Offers </span>
                        </span>
                      </div>
                    </div>
                  </fieldset>
                  </div>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-8 xl:col-span-9">
              <div>
                <h1 className="sr-only">Les équipes qui recrutent</h1>
                <div className="relative rounded-md shadow-sm mb-4">
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <SearchIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                  onChange={handleChange}
                />
              </div>
              {/**/}
              <div className="grid grid-cols-2 gap-4">
                  {activeTeams.map((team) => (
                      <div>
                        <div className="relative overflow-hidden">
                          <div className="flex flex-row-reverse absolute w-full py-2.5 inset-x-0 text-white text-sm text-right pr-4 leading-4">
                            <p className='text-blue-400 text-md font-bold bg-white p-2 rounded-xl'>
                            {team.company.category}
                            </p>
                          </div>  
                          <img className="h-32 w-full object-cover lg:h-48" src={team.company.coverUrl} alt="" />
                          <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-sm text-center leading-4">{team.company.name}</div>
                        </div>
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
                          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                              <img
                                className="h-20 w-20 rounded-full ring-4 ring-white z-10"
                                src={team.teamLead.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                              <div className="sm:hidden 2xl:block mt-10 min-w-0 flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{team.teamLead.firstName}</h1>
                                <p className="text-sm text-gray-900 dark:text-white">{team.teamLead.role}</p>
                                <p className="text-sm text-gray-900 dark:text-white"></p>
                              </div>

                            </div>
                          </div>
                          <div className="hidden sm:block mt-6 min-w-0 flex-1">
                            <p className="text-lg text-gray-900 dark:text-white">{team.oneliner}</p>
                            <p className="text-lg text-gray-900 dark:text-white mt-4"></p>
                          </div>
                          <div className="flex">
                            <p className="border border-blue-400 text-lg text-gray-900 dark:text-white mt-2 mr-2 p-2 border-1 rounded-xl hover:bg-blue-400">React</p>
                            <p className="border border-blue-400 text-lg text-gray-900 dark:text-white mt-2 mr-2 p-2 border-1 rounded-xl hover:bg-blue-400">NodeJS</p>
                            <p className="border border-blue-400 text-lg text-gray-900 dark:text-white mt-2 mr-2 p-2 border-1 rounded-xl hover:bg-blue-400">MongoDB</p>
                          </div>
                          <div className="hidden sm:block mt-6 min-w-0 flex-1">
                            {
                              team.lookingFor && <Positions positions={team.lookingFor}/>
                            }
                            
                          </div>
                        </div>
                      </div>
                  ))}
                  </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Teams

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async function getServerSideProps(ctx) {
      let apiQueryURL = `${process.env.NEXT_PUBLIC_URL}/api/teams/`
    if (ctx.query.page && Number(ctx.query.page)) {
      apiQueryURL = apiQueryURL+`?page=${ctx.query.page}`
    } 
      const response = await fetch(apiQueryURL)
      const teams = await response.json()
      return { props: { teams } };
    }
});