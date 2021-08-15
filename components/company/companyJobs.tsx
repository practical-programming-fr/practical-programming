import JobListing from './jobListing'

const CompanyJobs: React.FC<any> = ({ jobs }) => {
  return (
    <div className="relative bg-gray-50 dark:bg-light-gray overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-gray-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Les opportunités
          </h2>
          {jobs.map((job) => (
            <JobListing job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyJobs
