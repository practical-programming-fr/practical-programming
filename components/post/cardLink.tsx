import Image from 'next/image'
const CardLink: React.FC = ({}) => {
  return (
    <>
      <div className="my-8 bg-blue-200 dark:bg-beige overflow-hidden shadow rounded-lg">
        <div className="flex flex-nowrap px-4 py-5 sm:p-6">
          <div className="flex-none">
            <Image
              src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              width={160}
              height={160}
              className="rounded-md"
            />
          </div>
          <div className="flex-shrink mx-4">
            <p className="text-lg font-medium text-blue-700 dark:text-orange-link tracking-wider uppercase">
              Deviens meilleur développeur
            </p>
            <p className="text-sm text-blue-700 md:text-lg lg:text-sm xl:text-lg dark:text-dark-gray mt-2 overflow-ellipsis overflow-hidden">
              Tu es développeur et tu as envie de progresser ? Découvre le programme Artisan
              Développeur pour te former aux bonnes pratiques et donner une impulsion à ta carrière.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardLink
