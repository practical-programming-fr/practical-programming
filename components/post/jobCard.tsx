const InPostJobCard: React.FC<any> = () => (
  <div className="max-w-7xl mx-auto bg-transparent lg:px-8">
    <div className="lg:grid lg:grid-cols-12">
      <div className="hidden lg:block  relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
        <div className="mx-auto px-4 lg:max-w-none lg:p-0">
          <img
            className="object-cover object-center rounded-3xl shadow-2xl"
            src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixqx=xNLzUn5i0j&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
            alt="logo"
          />
        </div>
      </div>
      <div className="relative bg-orange-link lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
        <div className="relative max-w-md mx-auto py-6 px-4 space-y-6 sm:max-w-3xl sm:py-6 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
          <h2 className="text-xl font-extrabold text-white" id="join-heading">
            Software Engineer Fullstack Node/React
          </h2>
          <p className="text-white">
            Cette LegalTech early stage cherche son tech lead pour mener la première squad de dev
          </p>
          <div>
            <p className="font-light text-white">
              {' '}
              <span role="img" aria-label="office-location">
                🏢{' '}
              </span>{' '}
              Paris
            </p>
            <p className="font-light text-white">
              {' '}
              <span role="img" aria-label="salaire">
                💶{' '}
              </span>{' '}
              45-70k
            </p>
            <p className="font-light text-white">
              {' '}
              <span role="img" aria-label="experience">
                👔{' '}
              </span>
              Mid to Senior
            </p>
            <p className="font-light text-white">
              {' '}
              <span role="img" aria-label="remote">
                🌎{' '}
              </span>
              Remote friendly
            </p>
          </div>
          <div className="space-y-2">
            <a
              className="block w-full mr-2 py-1 px-2 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
              href="#"
            >
              Node
            </a>
            <a
              className="block w-full mr-2 py-1 px-2 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
              href="#"
            >
              React
            </a>
            <a
              className="block w-full mr-2 py-1 px-2 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
              href="#"
            >
              TypeScript
            </a>
            <a
              className="block w-full mr-2 py-1 px-2 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
              href="#"
            >
              MongoDB
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default InPostJobCard
