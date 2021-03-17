import Nav from '../../components/nav'
import axios from 'axios'
import Footer from '../../components/footer'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import debounce from 'lodash/debounce'

const Form2: React.FC = () => {
  const router = useRouter()
  const { id, email, prefix } = router.query
  const [message, setMessage] = useState('')

  const delayedHandleChange = debounce((eventData) => {
    setMessage(eventData)
  }, 300)

  const handleChange = (e) => {
    const eventData = e.target.value
    delayedHandleChange(eventData)
  }

  const sendNote = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/note`, { email, id, message, prefix })
    router.push('/')
  }
  return (
    <div>
      <NextSeo
        title="Ajouter une note"
        description="Dans le cadre du programme développeur en CDI"
        nofollow={true}
        noindex={true}
      />
      <Nav />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-8 py-5 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
          <div className="relative bg-white">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
              <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="max-w-lg mx-auto">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Envoi une note
                  </h1>
                  <p className="mt-3 text-lg leading-6 text-gray-500">
                    Ce formulaire sert à envoyer une note qui mettra à jour ta fiche de suivi.
                  </p>
                </div>
              </div>
              <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <form className="grid grid-cols-1 gap-y-6">
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Contenu du message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:text-black"
                        placeholder="Message"
                        defaultValue={''}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={sendNote}
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Form2
