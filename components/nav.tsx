import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [responsiveMenuisOpen, setResponsiveMenu] = useState(false)
  return (
    <>
      <nav className="bg-white dark:bg-nav-gray border-b dark:border-nav-gray">
        <div className="max-w-7xl mx-auto px-2">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
      Heroicon name: menu

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                  className="block h-6 w-6"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/*
      Heroicon name: x

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className="hidden h-6 w-6"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
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
                      className="block w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
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
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4 mt-1">
                  <Link href="/devenir-developpeur">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      Devenir Développeur
                    </a>
                  </Link>
                  <Link href="/nodejs">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      Node
                    </a>
                  </Link>
                  <Link href="/mongodb">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      MongoDB
                    </a>
                  </Link>
                  <Link href="/postman">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      Postman
                    </a>
                  </Link>
                  <Link href="/snowflake">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      Snowflake
                    </a>
                  </Link>
                  <Link href="https://academy.practicalprogramming.fr">
                    <a className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium">
                      Académie
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
        <div className={responsiveMenuisOpen ? 'block md:hidden' : 'hidden'}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/devenir-developpeur">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Devenir Développeur
              </a>
            </Link>
            <Link href="/nodejs">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Node
              </a>
            </Link>
            <Link href="/mongodb">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Mongodb
              </a>
            </Link>
            <Link href="/postman">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Postman
              </a>
            </Link>
            <Link href="/snowflake">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Snowflake
              </a>
            </Link>
            <Link href="https://academy.practicalprogramming.fr">
              <a
                onClick={() => {
                  setResponsiveMenu(!responsiveMenuisOpen)
                }}
                className="hover:bg-gray-700 hover:text-white block px-3 dark:text-gray-300 py-2 rounded-md text-base font-medium"
              >
                Académie
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
