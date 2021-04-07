import Image from 'next/image'
import Link from 'next/link'

const CompanyHero: React.FC<any> = ({ props }) => {
  console.log(props)
  return (
    <section className="my-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:my-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-blue-600 dark:text-orange-link">{props.name}</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-brand sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {props.excerpt}
          </p>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <Image
              className="w-full rounded-lg"
              src={`${props.logo}?h=300&w300`}
              width={200}
              height={200}
              alt={`Logo ${props.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHero
