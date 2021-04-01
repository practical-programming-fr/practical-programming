import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const ContactForm: React.FC = () => {
  const router = useRouter()
  const { opportunity } = router.query
  const [consent, setConsent] = useState(false)
  const [contact, setContact] = useState({ opportunity })

  const handleChange = (event) => {
    const eventData = event.target
    const updatedContact = { ...contact }
    updatedContact[eventData.id] = eventData.value
    setContact(updatedContact)
  }

  const toggleConsent = (): void => setConsent(!consent)
  const sendForm = async (event) => {
    event.preventDefault()
    console.log(contact)
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/opportunity`, contact)
    router.push('/')
  }
  return (
    <>
      <div className="bg-white dark:bg-dark-gray pt-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-8 pb-12">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Intéressé(e)?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-brand">
              Si tu as envie d'en savoir plus sur cette opportunité, transmets moi tes coordonnées
              et je reviendrai vers toi très rapidement.
            </p>
          </div>
          <div className="mt-12">
            <form
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 dark:text-brand"
                >
                  Prénom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="John"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 dark:text-brand"
                >
                  Nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-brand"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john.doe@gmail.com"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-brand"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    >
                      <option>FR</option>
                      <option>BE</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="06 12 13 14 15"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700 dark:text-brand"
                >
                  Linkedin URL
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    autoComplete="url"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="https://linkedin.com/in/rayedbenbrahim"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
                    <button
                      type="button"
                      className={
                        consent
                          ? `bg-blue-600 dark:bg-orange-link relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`
                          : `bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`
                      }
                      aria-pressed="false"
                      onClick={toggleConsent}
                    >
                      <span className="sr-only">Agree to policies</span>
                      {/* Enabled: "", Not Enabled: "translate-x-0" */}
                      <span
                        aria-hidden="true"
                        className={
                          consent
                            ? `translate-x-5 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`
                            : `translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`
                        }
                      />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500 dark:text-brand">
                      En envoyant ce formulaire, j'accepte que mes données personnelles soient
                      transmisent à Practical Programming.
                    </p>
                  </div>
                </div>
              </div>
              <div className={consent ? 'sm:col-span-2' : 'hidden'}>
                <button
                  type="submit"
                  className="dark:hover:bg-brand dark:hover:text-dark-gray dark:bg-orange-link w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={sendForm}
                >
                  On en parle !
                </button>

                <p className="text-sm text-gray-500 dark:text-brand mt-8">
                  Tes données personnelles sont uniquement utilisées par Practical Programming. A
                  aucun moment elles ne sont communiquées à une entreprise sans ton accord
                  préalable. <br />
                  Tu pourras à tout moment y avoir accès et demander leur suppression en envoyant un
                  mail à rgpd@rbbm.tech
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
