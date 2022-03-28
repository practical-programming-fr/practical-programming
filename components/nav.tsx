/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Nav() {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  return (
    <Disclosure as="nav" className="bg-white border-b dark:bg-nav-gray">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="block w-10 h-10 text-white p-2 rounded-full bg-blue-400 dark:bg-orange-link"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </a>
                </Link>
                <Link href="/">
                  <a className="invisible lg:visible dark:text-white ml-2 text-lg">
                    Practical Programming
                  </a>
                </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/devenir-developpeur">
                    <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      Devenir Développeur
                    </a>
                  </Link>
                  <Link href="/nodejs">
                  <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      NodeJS
                    </a>
                  </Link>
                  <Link href="/mongodb">
                  <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      MongoDB
                    </a>
                  </Link>
                  <Link href="/postman">
                  <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      Postman
                    </a>
                  </Link>
                  <Link href="/snowflake">
                  <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      Snowflake
                    </a>
                  </Link>
                  <Link href="https://academy.practicalprogramming.fr">
                  <a className="border-transparent hover:border-gray-300 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 dark:border-nav-gray text-sm font-medium">
                      Académie
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {
                  user ?
                
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <Image width={40} height={40} className="h-8 w-8 rounded-full" src={user.picture} alt={user.name} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="#">
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Voir mon profil<br/> (bientôt disponible)
                          </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="api/auth/logout"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Se déconnecter
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> :
                 <div className="flex-shrink-0">
                 
                 <a
                   href="/api/auth/login"
                   className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-link shadow-sm hover:bg-brand dark:border-orange-link dark:hover:border-brand"
                 >
                   S'identifier
                 </a>
               </div>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/devenir-developpeur">
                Devenir Développeur
                </Link>
              </Disclosure.Button>
              
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
              <Link href="/nodejs">
                  NodeJS
              </Link>
              </Disclosure.Button>
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/mongodb">
                  MongoDB
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/postman">
                  Postman
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/snowflake">
                  Snowflake
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="https://academy.practicalprogramming.fr">
                  Académie
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
