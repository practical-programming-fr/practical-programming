import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { NextSeo } from 'next-seo'
import { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import { FireIcon, HomeIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import debounce from 'lodash/debounce'
import axios from 'axios'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Toutes', href: '#', icon: HomeIcon, current: true },
  { name: 'Startups', href: '#', icon: FireIcon, current: false },
  { name: 'Scaleups', href: '#', icon: TrendingUpIcon, current: false },
  { name: 'ESN', href: '#', icon: CodeIcon, current: false },
  { name: 'Grands groupes', href: '#', icon: UserGroupIcon, current: false },
]
const programmingLanguages = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communicationLanguage = [
  { name: 'Français', href: '#' },
  { name: 'Anglais', href: '#' },
]
const communities = [
  { name: 'Trouver mon premier CDI', href: '#' },
  { name: 'Passer de Junior à Senior', href: '#' },
  { name: 'Travailler en remote', href: '#' }
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Spendesk',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Spendesk',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]

const people = [
  { id: 1, name: 'Annette Black' },
  { id: 2, name: 'Cody Fisher' },
  { id: 3, name: 'Courtney Henry' },
  { id: 4, name: 'Kathryn Murphy' },
  { id: 5, name: 'Theresa Webb' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Entreprises: React.FC<any> = ({teams}) => {
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
  // useEffect(() => {
  //   // Met à jour le titre du document via l’API du navigateur
  //   console.log("updating teams")
  // });
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
                <h1 className="sr-only">Recent questions</h1>
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
                <ul role="list" className="space-y-4 ">
                  {activeTeams.map((team) => (
                    <li key={team._id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg dark:bg-bg-neutral-900">
                      <article aria-labelledby={'question-title-' + team._id}>
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img className="h-16 w-16 rounded-md" src={team.teamLead?.imageUrl} alt="" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xl font-medium text-gray-900 dark:text-brand">
                                <a href={questions[0].author.href} className="hover:underline">
                                  {team.teamLead?.firstName} {team.teamLead?.lastName} 
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                              <a href={questions[0].author.href} className="hover:underline">
                                  {team.company.name}
                                </a>
                              </p>
                            </div>
                            <div className="flex-shrink-0 self-center flex">
                              <Menu as="div" className="relative inline-block text-left">
                                <div>
                                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                    <span className="sr-only">Open options</span>
                                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Add to favorites</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <CodeIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Embed</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Report content</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </div>
                          <h2 id={'question-title-' + questions[0].id} className="mt-4 text-base font-medium text-gray-900 dark:text-orange-link">
                            {team.oneliner}
                          </h2>
                        </div>
                        <p className="mt-2 text-sm text-gray-700 space-y-4 dark:text-brand"> {team.description} </p>
                        <p className="mt-8 text-sm text-gray-700 space-y-4 dark:text-brand"> Notre Stack: </p>
                        <ul className="list-disc">
                          {team.stack.map(tech => (<li className="mt-2 ml-6 text-sm text-gray-700 space-y-4 dark:text-brand">{tech}</li>))}
                        </ul>
                        <p className="mt-8 text-sm font-bold text-gray-700 space-y-4 dark:text-brand"> Pour mon équipe je recherche: </p>
                        <ul className="list-disc">
                          {team.lookingFor.map(wish => (<li className="mt-2 ml-6 text-sm text-gray-700 space-y-4 dark:text-brand font-bold">{wish}</li>))}
                        </ul>
                        <div className="mt-6 flex justify-between space-x-8">
                          <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <UserGroupIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900 dark:text-brand">{team.size}</span>
                                <span className="sr-only">personnes</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900 dark:text-brand">{team.remote}</span>
                                <span className="sr-only">remote</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900 dark:text-brand">{questions[0].views}</span>
                                <span className="sr-only">views</span>
                              </button>
                            </span>
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900 dark:text-brand">Share</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Entreprises

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