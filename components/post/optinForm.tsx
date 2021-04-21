import { useState } from 'react'
import axios from 'axios'

const OptinForm: React.FC<any> = ({ props }) => {
  const [hidden, setHidden] = useState(false)
  const [consent, setConsent] = useState(false)
  const [contact, setContact] = useState({ tagId: props.tag })
  const handleChange = (event) => {
    const eventData = event.target
    const updatedContact = { ...contact }
    updatedContact[eventData.id] = eventData.value
    setContact(updatedContact)
  }
  console.log(contact)
  const toggleConsent = (): void => setConsent(!consent)
  const signup = async (event) => {
    event.preventDefault()
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/signup`, contact)
    setHidden(true)
  }
  if (hidden) {
    return (
      <>
        <div className="px-6 py-2 bg-blue-700 rounded-lg md:px-12">
          <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
            Consulte tes email pour valider ton inscription
          </p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="px-6 py-2 bg-blue-700 rounded-lg md:px-12">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {props.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-200">{props.message}</p>
          </div>
          <div className="mt-8 w-full max-w-md">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="firstName" className="sr-only">
                Prénom
              </label>
              <input type="hidden" name="u" value="3" />
              <input type="hidden" name="f" value="3" />
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="w-full mt-2 ml-2 border-white dark:text-dark-gray px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-md"
                placeholder="Jean"
                onChange={handleChange}
              />
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full mt-2 ml-2 border-white dark:text-dark-gray px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-md"
                placeholder="jean.dupont@gmail.com"
                onChange={handleChange}
              />

              <div className="flex mb-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-4 ml-2 border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-sm"
                  onClick={toggleConsent}
                />
                <p className="mt-3 ml-2 text-sm text-blue-200">
                  J{`'`}accepte de transmettre mes données personnelles à Practical Programming{' '}
                </p>
              </div>

              <button
                type="submit"
                className="disabled:opacity-30 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                disabled={!consent}
                onClick={signup}
              >
                Je m{`'`}inscris
              </button>
            </form>
            <p className="mt-3 text-sm text-blue-200">
              Tes données personnelles sont uniquement utilisées par Practical Programming. Tu
              pourras à tout moment y avoir accès et demander leur suppression en envoyant un mail à
              rgpd@rbbm.tech
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OptinForm
