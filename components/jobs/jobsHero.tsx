const JobsHero: React.FC = () => (
  <>
    {/* This example requires Tailwind CSS v2.0+ */}
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pb-4 sm:pb-8">
        <main className="mt-16 mx-auto max-w-3xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>
              <span className="block text-indigo-600 xl:inline">online business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>

            <div className="mt-5 max-w-7xl mx-auto sm:flex sm:justify-center md:mt-8">
              <form action="#" method="POST" className="mt-3 sm:flex w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block italic text-center w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                  placeholder="Node, Python, PHP..."
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
)

export default JobsHero
