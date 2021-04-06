import Image from 'next/image'
import Link from 'next/link'

const CompanyNumbers: React.FC<any> = () => {
  return (
    <div className="bg-white dark:bg-dark-gray pt-6 sm:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-500 dark:text-brand sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat
            laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white dark:bg-dark-gray sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white dark:bg-dark-gray" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white dark:bg-light-gray shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-brand">
                    Pepperoni
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-orange-link">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 ">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-brand">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-orange-link">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-brand">
                    Calories
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-orange-link">
                    100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyNumbers
