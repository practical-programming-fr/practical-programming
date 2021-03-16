import Nav from '../../components/nav'
import axios from 'axios'
import Footer from '../../components/footer'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import ACTags from '../../lib/AC-tags-stack'

const Form1: React.FC = () => {
  const router = useRouter()
  const { id, email } = router.query
  const registerUser = async (event) => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    const techName = ['javascript', 'php', 'java', 'python', 'ruby']
    const tags = []
    for (const tech of techName) {
      if (event.target[tech].checked) {
        tags.push(ACTags[tech])
      }
    }
    await axios.post('http://localhost:3000/api/forms', { email, id, tags })
    router.push('/')
  }
  return (
    <div>
      <NextSeo
        title="Formulaire 1"
        description="Dans le cadre du programme développeur en CDI"
        nofollow={true}
        noindex={true}
      />
      <Nav />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-8 py-5 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
          <h1 className="text-4xl mb-6">Sur quelles technos travailles-tu</h1>
          <form onSubmit={registerUser}>
            <fieldset>
              <div className="bg-white rounded-md -space-y-px mb-6">
                {/* On: "bg-blue-50 border-blue-200 z-10", Off: "border-gray-200" */}
                <div className="relative border rounded-tl-md rounded-tr-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id="settings-option-0"
                      name="javascript"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 cursor-pointer border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <label htmlFor="settings-option-0" className="ml-3 flex flex-col cursor-pointer">
                    {/* On: "text-blue-900", Off: "text-gray-900" */}
                    <span className="block text-sm font-medium dark:text-gray-900">
                      JavaScript / TypeScript{' '}
                    </span>
                  </label>
                </div>
                {/* On: "bg-blue-50 border-blue-200 z-10", Off: "border-gray-200" */}
                <div className="relative border border-gray-200 p-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id="settings-option-1"
                      name="php"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label htmlFor="settings-option-1" className="ml-3 flex flex-col cursor-pointer">
                    {/* On: "text-blue-900", Off: "text-gray-900" */}
                    <span className="block text-sm font-medium dark:text-gray-900">PHP</span>
                  </label>
                </div>
                {/* On: "bg-blue-50 border-blue-200 z-10", Off: "border-gray-200" */}
                <div className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id="settings-option-2"
                      name="java"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
                    {/* On: "text-blue-900", Off: "text-gray-900" */}
                    <span className="block text-sm font-medium dark:text-gray-900">Java</span>
                  </label>
                </div>
                <div className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id="settings-option-2"
                      name="python"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
                    {/* On: "text-blue-900", Off: "text-gray-900" */}
                    <span className="block text-sm font-medium dark:text-gray-900">Python</span>
                  </label>
                </div>
                <div className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id="settings-option-2"
                      name="ruby"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 cursor-pointer border-gray-300"
                    />
                  </div>
                  <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
                    {/* On: "text-blue-900", Off: "text-gray-900" */}
                    <span className="block text-sm font-medium dark:text-gray-900">Ruby</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="inline-flex items-center mt-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Form1
