import {LightBulbIcon} from '@heroicons/react/solid'
const TipBox: React.FC<any> = () => {
  return (
    <div className='my-8 dark:bg-beige overflow-hidden shadow rounded-lg border-l-4 border-blue-700 dark:border-orange-link'>
      <div className="flex mb-3 text-blue-600 py-2 dark:text-orange-link bg-blue-200 dark:bg-red-100">
          <LightBulbIcon className="h-5 w-5 mx-4"/>
          <p className='font-medium'>Astuce</p>
      </div>
      <div className='px-14 pb-6 dark:bg-beige dark:text-gray-700'>
        <p>Text contenant l'astuce,Text contenant l'astuce,Text contenant l'astuce,Text contenant l'astuce,Text contenant l'astuces</p>
      </div>
    </div>
  )
}

export default TipBox
