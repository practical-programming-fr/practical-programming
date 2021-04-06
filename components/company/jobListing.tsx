const JobListing: React.FC<any> = ({ job }) => {
  return (
    <div className="mt-4 bg-white dark:bg-dark-gray px-4 py-4 rounded-md border-gray-100 dark:border-brand border-2 border-transparent hover:border-blue-500 dark:hover:border-orange-link shadow-lg">
      <div>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{job.position}</p>
        <div className="flex text-sm text-gray-500 mb-2">
          <time dateTime="2020-03-16">Publié le {job._updatedAt}</time>
        </div>
        <p className="text-lg text-gray-500 dark:text-brand">{job.excerpt}</p>
      </div>
      <div className="mt-4">
        <a href="#" className="inline-block ">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
            XP: +3ans
          </span>
        </a>
        <a href="#" className="inline-block ml-2">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Full Remote Possible
          </span>
        </a>
        <a href="#" className="inline-block ml-2">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            CDI
          </span>
        </a>
      </div>
    </div>
  )
}

export default JobListing
