import Image from 'next/image'
import Link from 'next/link'

const JobListing: React.FC = () => {
  return (
    <div className="mt-4 bg-white px-4 py-4 rounded-md border-gray-100 border-2 border-transparent hover:border-blue-500 shadow-lg">
      <div>
        <p className="text-2xl font-semibold text-gray-900">
          Software Engineer (JavaScript) - User Success
        </p>
        <div className="flex text-sm text-gray-500 mb-2">
          <time dateTime="2020-03-16">Mar 16, 2020</time>
        </div>
        <p className="text-lg text-gray-500">
          Développeur JavaScript pour rejoindre l'équipe User Success afin d'optimiser l'expérience
          utilisateur pour nos clients.
        </p>
      </div>
      <div>
        <a href="#" className="inline-block">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
            XP: +3ans
          </span>
        </a>
        <a href="#" className="inline-block">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Full Remote Possible
          </span>
        </a>
        <a href="#" className="inline-block">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            CDI
          </span>
        </a>
      </div>
    </div>
  )
}

export default JobListing
