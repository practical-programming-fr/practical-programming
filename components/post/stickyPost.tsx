import Link from 'next/link'
const StickyPost: React.FC<any> = () => {
  return (
    <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg min-h-40 max-w-lg lg:fixed z-0">
      <div className="w-full p-4">
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">New Mac is here !</p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years
          on...
        </p>
      </div>
      <hr />
      <div className="w-full p-4 ">
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">New Mac is here !</p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years
          on...
        </p>
      </div>
    </aside>
  )
}

export default StickyPost
